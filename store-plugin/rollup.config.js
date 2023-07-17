import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true,
    globals: {
      svelte: 'svelte',
      'utiliti-js': 'utiliti-js',
    },
  },
  plugins: [
    nodeResolve({
      browser: true,
      extensions: ['.js', '.ts'],
    }),
    commonjs(),
    typescript(),
  ],
  external: ['svelte', 'utiliti-js'],
};
