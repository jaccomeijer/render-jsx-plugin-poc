# render-jsx-plugin-poc

Proof of concept for Esbuild Render JSX Plugin. As described in [this blog post](https://www.jaccomeijer.nl/blog/render-jsx-plugin/).

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

MDX file changes automatically update the HTML. A browser refresh does a full
rebuild, this can be useful when working with resources like css.

## Related repositories

- [11ty and Github pages](https://www.jaccomeijer.nl/blog/11ty-and-github-pages/), Blog post that started all this
- [render-jsx-plugin-poc](https://github.com/jaccomeijer/render-jsx-plugin-poc), Proof Of Concept using Esbuild as a static site generator 
- [green-build](https://github.com/jaccomeijer/green-build), More capable version of the [render-jsx-plugin-poc](https://github.com/jaccomeijer/render-jsx-plugin-poc)
- [green-lib](https://github.com/jaccomeijer/green-lib), UI Library created with [green-build](https://github.com/jaccomeijer/green-build)
- [green-reference](https://github.com/jaccomeijer/green-reference), A reference implementation of the [green-lib](https://github.com/jaccomeijer/green-lib) Library
