# render-jsx-plugin-poc

Proof of concept for Esbuild Render JSX Plugin.

## Requirements

This project requires a shell like bash or zsh.

## Start demo

Make sure to run

```bash
npm install
```

Then start the live reloading web server with

```bash
npm run dev
```

Esbuild bundles all mdx pages in `src/pages` and the `render-jsx-plugin` will
render each bundle to html.

MDX file changes are automatically rebuild. A browser refresh does a full
rebuild, this can be useful when working with resources like css.
