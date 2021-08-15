import React from "react"
import PropTypes from "prop-types"
import Anchor from "./Anchor"
import DownloadLogo from "../images/svgs/download.svg"
import UnsplashLogo from "../images/svgs/unsplash.svg"
import ComponentIndex from "../components/images/image-component-index"

const getCreditTitle = (source, attribute) => {
  if (!attribute) return <span></span>

  if (source && source.toLowerCase() === "unsplash") {
    return `Download free do whatever you want high-resolution photos from ${attribute}`
  }

  if (source) {
    return `Image by ${attribute} @ ${source}`
  }

  return `Image by ${attribute}`
}

const getCredit = (componentName, source, link, credit) => {
  const defaultThumbnail = thumbnails.filter((thumbnail) => {
    return thumbnail.componentName === componentName
  })
  return defaultThumbnail.length > 0
    ? defaultThumbnail[0]
    : { source, link, credit }
}

const Credit = ({ componentName, creditSource, creditLink, creditText }) => {
  const { source, link, credit } = getCredit(
    componentName,
    creditSource,
    creditLink,
    creditText,
  )

  if (!source) return <span></span>
  return (
    <Anchor
      to={link}
      title={getCreditTitle(source, credit)}
      className="bg-black text-gray-300 py-1 px-2 pl-6 rounded absolute bottom-2 left-2 text-sm"
    >
      <img
        className="filter invert w-3 absolute left-2 top-2"
        src={source === "unsplash" ? UnsplashLogo : DownloadLogo}
      />
      {source}
    </Anchor>
  )
}

Credit.propTypes = {
  componentName: PropTypes.string,
  creditSource: PropTypes.string,
  creditLink: PropTypes.string,
  creditText: PropTypes.string,
}

const Thumbnail = ({ alt, to, credit, source, link, componentName }) => {
  const Image = ComponentIndex[componentName]
  return (
    <div title={alt} className="relative shadow-md transform">
      <Anchor to={to}>
        <Image alt={alt} />
      </Anchor>
      <Credit
        componentName={componentName}
        creditSource={source}
        creditLink={link}
        creditText={credit}
      />
    </div>
  )
}

Thumbnail.propTypes = {
  alt: PropTypes.string,
  number: PropTypes.number,
  to: PropTypes.string,
  photo: PropTypes.string,
  credit: PropTypes.string,
  source: PropTypes.string,
  link: PropTypes.string,
  componentName: PropTypes.string,
}

export default Thumbnail

const thumbnails = [
  {
    componentName: `Default01`,
    source: `unsplash`,
    credit: `Arget`,
    link: `https://unsplash.com/@arget?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    componentName: `Default02`,
    source: `unsplash`,
    credit: `Kevin Ku`,
    link: `https://unsplash.com/@ikukevk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    componentName: `Default03`,
    source: `unsplash`,
    credit: `Ilya Pavlov`,
    link: `https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    componentName: `Default04`,
    source: `unsplash`,
    credit: `Vishnu R Nair`,
    link: `https://unsplash.com/@vishnurnair?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    componentName: `Default05`,
    source: `unsplash`,
    credit: `Markus Spiske`,
    link: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    componentName: `Default06`,
    source: `unsplash`,
    credit: `Markus Spiske`,
    link: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    componentName: `Default07`,
    source: `unsplash`,
    credit: `Dlanor S`,
    link: `https://unsplash.com/@dlanor_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    componentName: `Default08`,
    source: `unsplash`,
    credit: `Chris Ried`,
    link: `https://unsplash.com/@cdr6934?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    componentName: `Default09`,
    source: `unsplash`,
    credit: `Sai Kiran Anagani`,
    link: `https://unsplash.com/@_imkiran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    componentName: `Default10`,
    source: `unsplash`,
    credit: `Markus Spiske`,
    link: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTexts`,
  },
]