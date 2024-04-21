export const fluidSize = (
  minSize: number,
  maxSize?: number,
  minVW?: number,
  maxVW?: number,
  unit?: string
): string =>
  `calc(${minSize}${unit || 'px'} + (${
    maxSize || minSize * 2
  } - ${minSize})*((100vw - ${minVW || 414}px)/(${maxVW || 3840} - ${
    minVW || 414
  })))`

export const fluidSizeNumber = (
  minSize: number,
  maxSize?: number,
  minVW?: number,
  maxVW?: number,
  decimal?: number
): number => {
  const viewportWidth = window.innerWidth

  const result =
    minSize +
    ((maxSize || minSize * 2) - minSize) *
      ((viewportWidth - (minVW || 414)) / ((maxVW || 3840) - (minVW || 414)))

  return parseFloat(result.toFixed(decimal || 2))
}

export const hexToRgbA = (hex: string, opacity: string) => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return (
      'rgba(' +
      [
        (parseInt(c) >> (8 * 2)) & 255,
        (parseInt(c) >> 8) & 255,
        parseInt(c) & 255,
      ].join(',') +
      `,${opacity})`
    )
  }
  throw new Error('Bad Hex')
}
