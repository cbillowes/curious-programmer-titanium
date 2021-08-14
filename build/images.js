const path = require("path")
const fs = require("fs")
const sharp = require("sharp")

/**
 * Any source file residing in the resources directory which is used to
 * generate high and low res images for the site.
 * @param {string} absolutePath
 * @returns a boolean value
 */
exports.isResource = (absolutePath) => {
  return absolutePath.indexOf("/resources/source/") >= 0
}

const toDestinationPath = (destinationPath, sourcePath) => {
  return path.join(destinationPath, path.basename(sourcePath))
}

const kebabToTitleCase = (text) => {
  return text
    .replace(/-/g, " ")
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
    .replace(/ /g, "")
}

/**
 * Uses sharp to create an image of specific dimensions, fit, position and kernel
 * and save to disk.
 * @param {string} absolutePath
 * @param {string} destinationPath
 * @param {number} quality
 * @param {number} width
 * @param {number} height
 * @param {any} fit
 * @param {any} position
 * @param {object} reporter
 */
const processImage = (
  absolutePath,
  destinationPath,
  quality,
  width,
  height,
  fit,
  position,
  reporter,
) => {
  sharp(absolutePath)
    .jpeg({ quality })
    .png({ quality })
    .webp({ quality })
    .resize({
      width,
      height,
      fit,
      position,
      kernel: sharp.kernel.nearest,
    })
    .toFile(destinationPath, (err) => {
      const message = `optimize image: ${absolutePath} -> ${destinationPath}`
      if (err) {
        reporter.error(`${message}\n${err}`)
      } else {
        reporter.verbose(message)
      }
    })
}

exports.processHighRes = (sourcePath, reporter) => {
  const quality = 100
  const destinationPath = toDestinationPath(`src/images/articles`, sourcePath)
  const width = 1920
  const height = 1080
  const fit = sharp.fit.cover
  const position = sharp.strategy.attention

  reporter.info(
    `[High Res] Process article image: ${path.basename(sourcePath)}`,
  )
  processImage(
    sourcePath,
    destinationPath,
    quality,
    width,
    height,
    fit,
    position,
    reporter,
  )
}

exports.processLowRes = (sourcePath, reporter) => {
  const quality = 80
  const destinationPath = toDestinationPath(
    `src/images/social-media`,
    sourcePath,
  )
  const width = 1200
  const height = 600
  const fit = sharp.fit.cover
  const position = sharp.strategy.attention

  reporter.info(`[Low Res] Process article image: ${path.basename(sourcePath)}`)
  processImage(
    sourcePath,
    destinationPath,
    quality,
    width,
    height,
    fit,
    position,
    reporter,
  )
}

exports.generateComponent = (sourcePath, reporter) => {
  const template = path.join(__dirname, "image.jsx.template")
  fs.readFile(template, (err, data) => {
    if (err) {
      reporter.error(`Could not generate component: ${sourcePath}\n${err}`)
    } else {
      const componentsDest = path.join(__dirname, `../src/components/images/`)
      const filename = path.basename(sourcePath)
      const destFilename = filename.replace(path.extname(filename), `.js`)
      const destinationPath = path.join(componentsDest, destFilename)

      const component = data
        .toString()
        .replace(
          /%COMPONENT_NAME%/g,
          kebabToTitleCase(filename).replace(/\.|jpg|png|gif|svg/g, ""),
        )
        .replace(/%IMAGE_FILENAME%/g, path.basename(sourcePath))
        .replace(/%IMAGE_WIDTH%/, 1920)

      fs.writeFile(destinationPath, component, () => {
        reporter.info(`Generate component: ${filename}`)
      })
    }
  })
}

const getComponentIndex = (sourcePath) => {
  const files = fs.readdirSync(sourcePath)

  let content = ""
  files.forEach((file) => {
    if (file.indexOf(`.keep`) > -1) return

    const filename = path.basename(file).replace(path.extname(file), "")
    const componentName = kebabToTitleCase(filename)
    content += `\nComponent["${componentName}"] = (\n  require("./${filename}").default\n)\n`
  })
  return content
}

const generateComponentIndex = (destinationPath, content, reporter) => {
  const template = path.join(__dirname, "image.index.template")
  fs.readFile(template, (err, data) => {
    if (err) {
      reporter.error(`Could not generate component index: ${err}`)
    } else {
      const component = data.toString().replace(/%INDEX%/, content)
      fs.writeFile(destinationPath, component, () => {
        reporter.info(
          `Generate image component index: ${path.basename(destinationPath)}`,
        )
      })
    }
  })
}

exports.generateComponentIndex = (reporter) => {
  const sourcePath = path.join(__dirname, "../src/images/articles")
  const filename = "image-component-index.js"
  const destinationRelativePath = "../src/components/Images"
  const destinationPath = path.join(
    __dirname,
    destinationRelativePath,
    filename,
  )
  const index = getComponentIndex(sourcePath)
  generateComponentIndex(destinationPath, index, reporter)
}
