Theme summary

- Brand color: purple (#9046FF) — full palette provided in `tokens.colors.purple`
- Fonts: Anke Devanagari, Inter, Poppins (imported via Google Fonts)
- Semantic tokens exported under `semanticTokens.colors` (bg, bgSubtle, fg, muted, border, accent, focusRing)
- Text styles: `body` and `heading`
- Layer styles: `container`

Usage

- The app already wraps the tree with the Chakra system in `Provider`.
- Toggle dark mode using `ColorModeButton` (uses `next-themes`).

Notes for production

- Consider self-hosting fonts or using `font-display: swap` for performance.
- Generate type definitions with the Chakra CLI if you're using typegen:
  `npx @chakra-ui/cli typegen`
- Adjust `initialColorMode` and `useSystemColorMode` in `src/theme/index.ts` to match your preferred default behavior.
