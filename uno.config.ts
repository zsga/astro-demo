// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  presetTypography,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(), // required
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script',
      },
      // fonts: {
      //     serif: 'Newsreader',
      //     grotesk: 'Space Grotesk',
      // },
    }),
    presetTypography(),
  ],
  shortcuts: [
    {
      'bg-base': 'bg-light-100 dark:bg-dark-900',
      'fg-base': 'text-neutral-600 dark:text-neutral-300',
    },
  ],
});
