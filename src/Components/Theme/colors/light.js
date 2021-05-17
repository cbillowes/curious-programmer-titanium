import { adjust } from "../common/colors"

const colors = {
  base: "#f5f5f5",
  primary: "#0b7acf",
  secondary: "#cf09ae",
  tertiary: "#c6c91c",
  forth: "#ee8e16",
  fifth: "#cf0949",
}

/**
 * In order for things to work as happy as they should:
 * - keep a top level key (eg. palette, root, link...)
 * - only have one nested level within main key eg (palette > primary)
 * - stick to base, color and shadow as keys beneath nested level key
 *
 * Note: items are accessible via getFromTheme and getAllFromTheme
 * to avoid the wretched chained dot effect.
 *
 * Use this approach to be somewhat flexible in editing
 * the theme's schema without having to scrub the entire codebase to fix
 * broken references.
 */

export default {
  palette: {
    primary: {
      base: colors.primary,
      color: adjust(colors.primary, 100),
      shadow: adjust(colors.primary, -30),
    },
    secondary: {
      base: colors.secondary,
      color: adjust(colors.secondary, 100),
      shadow: adjust(colors.secondary, -30),
    },
    tertiary: {
      base: colors.tertiary,
      color: adjust(colors.tertiary, -100),
      shadow: adjust(colors.tertiary, 30),
    },
    forth: {
      base: colors.forth,
      color: adjust(colors.forth, -100),
      shadow: adjust(colors.forth, 30),
    },
    fifth: {
      base: colors.fifth,
      color: adjust(colors.fifth, 100),
      shadow: adjust(colors.fifth, -30),
    },
  },

  root: {
    body: {
      base: adjust(colors.base, -3),
      color: adjust(colors.base, -70),
      shadow: adjust(colors.base, -20),
    },

    page: {
      base: colors.base,
    },

    footer: {
      base: adjust(colors.base, -3),
      color: adjust(colors.base, -70),
      shadow: adjust(colors.base, -20),
    },

    code: {
      base: adjust(colors.base, -10),
      color: adjust(colors.primary, -20),
      shadow: adjust(colors.base, -20),
    },

    hero: {
      base: adjust(colors.base, -40),
      color: adjust(colors.base, -70),
      shadow: adjust(colors.base, -10),
    },

    shade1: {
      base: colors.fifth,
      color: colors.base,
      shadow: adjust(colors.base, -80),
    },

    shade2: {
      base: colors.forth,
      color: colors.base,
      shadow: adjust(colors.base, -80),
    },
  },

  link: {
    default: {
      base: colors.primary,
      color: adjust(colors.primary, 60),
      shadow: adjust(colors.primary, -30),
    },
    active: {
      base: "transparent",
      color: colors.tertiary,
      shadow: adjust(colors.tertiary, -60),
    },
    hover: {
      base: colors.secondary,
      color: adjust(colors.secondary, 100),
      shadow: adjust(colors.secondary, -50),
    },
  },

  bland: {
    default: {
      base: "transparent",
      color: colors.primary,
      shadow: adjust(colors.primary, 60),
    },
    hover: {
      base: "transparent",
      color: colors.secondary,
      shadow: adjust(colors.secondary, 60),
    },
  },

  navigation: {
    bar: {
      base: colors.primary,
      color: adjust(colors.primary, 100),
      shadow: adjust(colors.primary, -30),
    },
    strip: {
      base: adjust(colors.primary, -20),
      shadow: adjust(colors.primary, -40),
    },
    sidebar: {
      base: adjust(colors.primary, -20),
      color: adjust(colors.primary, 100),
      shadow: adjust(colors.base, -6),
    },
    hamburger: {
      base: colors.base,
      color: colors.base,
    },
    logo: {
      base: "transparent",
      color: colors.base,
      shadow: colors.base,
    },
  },

  menuItem: {
    default: {
      base: adjust(colors.primary, -20),
      color: colors.base,
      shadow: adjust(colors.base, -60),
    },
    hover: {
      base: adjust(colors.secondary, -20),
      color: colors.base,
      shadow: adjust(colors.base, -60),
    },
    active: {
      base: adjust(colors.tertiary, -20),
      color: colors.base,
      shadow: adjust(colors.base, -60),
    },
  },

  menuIcon: {
    default: {
      base: colors.base,
      color: colors.base,
      shadow: colors.base,
    },
    hover: {
      base: colors.base,
      color: colors.base,
      shadow: colors.base,
    },
  },

  icon: {
    default: {
      base: `${colors.base}33`,
      color: colors.base,
    },
    hover: {
      base: colors.primary,
      color: colors.base,
    },
  },

  pulse: {
    shade1: {
      base: `${adjust(colors.primary, 10)}33`,
    },
    shade2: {
      base: `${adjust(colors.primary, 50)}33`,
    },
    shade3: {
      base: `${adjust(colors.primary, 30)}33`,
    },
  },

  card: {
    default: {
      base: colors.base,
      color: adjust(colors.base, -70),
      shadow: adjust(colors.base, -10),
    },
    contrast: {
      base: colors.base,
      color: adjust(colors.base, -30),
      shadow: adjust(colors.base, -65),
    },
  },

  switcheroo: {
    default: {
      base: `${adjust(colors.base, -70)}33`,
      color: colors.base,
    },
    hover: {
      base: colors.base,
      color: adjust(colors.base, -70),
    },
  },

  page: {
    about: {
      base: colors.primary,
      color: adjust(colors.primary, 90),
      shadow: adjust(colors.primary, -90),
    },
  },
}
