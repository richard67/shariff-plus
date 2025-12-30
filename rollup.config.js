import terser from '@rollup/plugin-terser';

export default {
  input: 'src/js/shariff.js',
  output: [
    {
      file: 'dist/shariff.complete.js',
      format: 'esm'
    },
    {
      file: 'dist/shariff.complete.min.js',
      format: 'esm',
      plugins: [terser()]
    },
  ]
};
