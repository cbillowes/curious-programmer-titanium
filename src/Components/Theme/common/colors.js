export const hexify = (color) => {
  const hex = color.replace(/^\s*#|\s*$/g, "")
  return hex.length == 3 ? hex.replace(/(.)/g, "$1$1") : hex
}

export const adjust = (color, percent) => {
  const hex = hexify(color),
    num = parseInt(hex, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt

  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1)}`
}

export const gradient = (deg, start, end) => {
  return `linear-gradient(${deg}deg, ${start} 0%, ${end} 100%);`
}
