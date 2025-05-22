import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';

export default defineConfig([
  // Usa el spread para importar la configuración recomendada de Astro
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      quotes: ['error', 'single'],
      indent: ['error', 2, { SwitchCase: 1 }],
      eqeqeq: ['warn', 'always'],
      'no-multi-spaces': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      semi: 'off',
      'astro/semi': [
        'error',
        'never'
      ],
    },
  },
]);
