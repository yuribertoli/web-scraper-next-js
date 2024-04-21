export type GradientDefinition = {
  colors: string
  defaultDirection?: string
}

export type GradientName =
  | 'amin'
  | 'blueRaspberry'
  | 'caramel'
  | 'cherryBlossom'
  | 'crystalline'
  | 'deepSeaSpace'
  | 'dusk'
  | 'dustyGrass'
  | 'eveningToNight'
  | 'feather'
  | 'forest'
  | 'freshAir'
  | 'juicyGrass'
  | 'kyeMeh'
  | 'lawrencium'
  | 'megatron'
  | 'morningSky'
  | 'margoWhite'
  | 'noonToDusk'
  | 'ohhappiness'
  | 'oldWine'
  | 'orangeCoral'
  | 'pinkFish'
  | 'premiumDark'
  | 'relaxingRed'
  | 'royal'
  | 'sandToBlue'
  | 'seaLord'
  | 'stellar'
  | 'sublimeLight'
  | 'superman'
  | 'sunrise'
  | 'theStrain'
  | 'yellowMango'

export const gradients: Record<GradientName, GradientDefinition> = {
  amin: {
    colors: 'var(--deepPurple), var(--electricBlue)',
    defaultDirection: 'to bottom',
  },
  blueRaspberry: {
    colors: 'var(--lightBlue), var(--oceanBlue)',
    defaultDirection: 'to bottom',
  },
  caramel: {
    colors: 'var(--caramel), var(--sandBrown)',
    defaultDirection: 'to bottom',
  },
  cherryBlossom: {
    colors: 'var(--magenta), var(--deepRed) 50%',
    defaultDirection: '25deg',
  },
  crystalline: {
    colors: 'var(--tealGreen) 0%, var(--lightTeal) 100%',
    defaultDirection: '-20deg',
  },
  deepSeaSpace: {
    colors: 'var(--darkSlate), var(--aquaBlue)',
    defaultDirection: 'to bottom',
  },
  dusk: {
    colors: 'var(--lightPurple), var(--softPink)',
    defaultDirection: 'to bottom',
  },
  dustyGrass: {
    colors: 'var(--lightGreen) 0%, var(--midGreen) 100%',
    defaultDirection: '120deg',
  },
  eveningToNight: {
    colors: 'var(--darkBlue), var(--pureWhite)',
    defaultDirection: 'to bottom',
  },
  feather: {
    colors: 'var(--lavender), var(--offWhite)',
    defaultDirection: 'to bottom',
  },
  forest: {
    colors: 'var(--darkGreen), var(--midtoneGreen)',
    defaultDirection: 'to bottom',
  },
  freshAir: {
    colors: 'var(--transparentGreen) 26.8%, var(--transparentBlue) 64%',
    defaultDirection: '95.2deg',
  },
  juicyGrass: {
    colors:
      'var(--complexGreen) 0%, var(--complexLightGreen) 26.2%, var(--complexPaleGreen) 50.6%, var(--complexSoftGreen) 74.1%, var(--darkForest) 100.3%',
    defaultDirection: 'circle 759px at -6.7% 50%',
  },
  kyeMeh: {
    colors: 'var(--violet), var(--teal)',
    defaultDirection: 'to bottom',
  },
  lawrencium: {
    colors: 'var(--midnight), var(--deepBlueGray), var(--shadowGray)',
    defaultDirection: 'to bottom',
  },
  megatron: {
    colors: 'var(--paleGreen), var(--lightYellow), var(--salmonPink)',
    defaultDirection: 'to bottom',
  },
  morningSky: {
    colors: 'var(--skyBlue), var(--lightSkyBlue)',
    defaultDirection: 'to bottom',
  },
  margoWhite: {
    colors: 'var(--offWhiteYellow), var(--white)',
    defaultDirection: 'to bottom',
  },
  noonToDusk: {
    colors: 'var(--paleRed), var(--lightSky)',
    defaultDirection: 'to bottom',
  },
  ohhappiness: {
    colors: 'var(--festiveRed), var(--magenta)',
    defaultDirection: 'to bottom',
  },
  oldWine: {
    colors: 'var(--blackCoffee), var(--darkRed)',
    defaultDirection: 'to bottom',
  },
  orangeCoral: {
    colors: 'var(--mangoYellow), var(--sunriseRed)',
    defaultDirection: 'to bottom',
  },
  pinkFish: {
    colors: 'var(--salmonPink), var(--festiveRed)',
    defaultDirection: 'to bottom',
  },
  premiumDark: {
    colors: 'var(--midnight) 0%, var(--black) 100%',
    defaultDirection: 'to bottom',
  },
  relaxingRed: {
    colors: 'var(--offWhite), var(--festiveRed)',
    defaultDirection: 'to bottom',
  },
  royal: {
    colors: 'var(--royalBlue), var(--deepOcean)',
    defaultDirection: 'to bottom',
  },
  sandToBlue: {
    colors: 'var(--lightSand), var(--darkGreenBlue)',
    defaultDirection: 'to bottom',
  },
  seaLord: {
    colors: 'var(--transparentSea) 11.2%, var(--transparentDeepBlue) 91.1%',
    defaultDirection: '109.6deg',
  },
  stellar: {
    colors: 'var(--stellarBlue) 0%, var(--deepNavy) 100.2%',
    defaultDirection: 'circle farthest-corner at 22.4% 21.7%',
  },
  sublimeLight: {
    colors: 'var(--salmonPink), var(--skyBlue)',
    defaultDirection: 'to bottom',
  },
  superman: {
    colors: 'var(--lightBlue), var(--festiveRed)',
    defaultDirection: 'to bottom',
  },
  sunrise: {
    colors: 'var(--sunriseRed), var(--sunriseOrange)',
    defaultDirection: 'to bottom',
  },
  theStrain: {
    colors: 'var(--darkRed), var(--blackCoffee)',
    defaultDirection: 'to bottom',
  },
  yellowMango: {
    colors: 'var(--yellowTone), var(--mangoYellow)',
    defaultDirection: 'radial-gradient',
  },
}

//https://www.makeuseof.com/css-background-gradients/
export function applyGradient(
  name: keyof typeof gradients,
  direction?: string
): string {
  const gradient = gradients[name]

  return `linear-gradient(${direction || gradient.defaultDirection}, ${
    gradient.colors
  })`
}
