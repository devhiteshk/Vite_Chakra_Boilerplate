import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react"

const colors = {
  purple: {
    50: { value: "#f6efff" },
    100: { value: "#e9dbff" },
    200: { value: "#d5b8ff" },
    300: { value: "#b88aff" },
    400: { value: "#9a59ff" },
    500: { value: "#9046FF" },
    600: { value: "#7a36e6" },
    700: { value: "#6629bf" },
    800: { value: "#4e1f99" },
    900: { value: "#30104f" },
  },
}

const fonts = {
  heading: { value: '"Poppins", "Inter", "Anke Devanagari", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' },
  body: { value: '"Inter", "Poppins", "Anke Devanagari", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' },
  mono: { value: 'Menlo, Monaco, "Courier New", monospace' },
}

const semanticTokens = {
  colors: {
    bg: { value: { _light: "white", _dark: "gray.900" } },
    bgSubtle: { value: { _light: "gray.50", _dark: "gray.800" } },
    fg: { value: { _light: "gray.800", _dark: "whiteAlpha.900" } },
    muted: { value: { _light: "gray.500", _dark: "gray.400" } },
    border: { value: { _light: "gray.200", _dark: "gray.700" } },
    accent: { value: { _light: "purple.500", _dark: "purple.300" } },
    focusRing: { value: { _light: "purple.600", _dark: "purple.300" } },
  },
}

const textStyles = {
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0",
      textDecoration: "none",
      textTransform: "none",
    },
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "700",
  },
}

const layerStyles = {
  container: {
    background: "bgSubtle",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "md",
    padding: 4,
  },
}

const config = defineConfig({
  theme: {
    tokens: {
      colors,
      fonts,
    },
    semanticTokens,
    textStyles,
    layerStyles,

  },
  globalCss: {
    '*': {
      focusRingColor: 'purple.500 !important',
    },
  },
})

const system = createSystem(defaultConfig, config)

export default system
