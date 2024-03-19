import { context } from 'esbuild'
import glob from 'tiny-glob'
import { renderJsxPlugin } from './render-jsx-plugin.js'
import mdx from '@mdx-js/esbuild'

const entryPoints = await glob('src/pages/**/*.{mdx}')
const outdir = 'dist'

const ctx = await context({
  bundle: true,
  entryPoints,
  format: 'esm',
  jsx: 'automatic',
  jsxImportSource: 'preact',
  metafile: true,
  write: true,
  outdir,
  plugins: [
    mdx({
      jsxImportSource: 'preact',
    }),
    renderJsxPlugin({ outdir }),
  ],
})

await ctx.watch()
const { port } = await ctx.serve({
  servedir: outdir,
})

console.log(`Live reload server started at http://localhost:${port}\n`)
