import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import pkg from '../package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    }
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    typescript({ emitDeclarationOnly: true }),
    babel({ exclude: 'node_modules/**', extensions }),
  ],
  external: ['react', 'react-dom'],
};
