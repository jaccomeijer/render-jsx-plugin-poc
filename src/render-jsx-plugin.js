import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import crypto from 'crypto'
import { render } from 'preact-render-to-string'

const pluginName = 'renderJsxPlugin'

export const renderJsxPlugin = ({ outdir, initialProps }) => {
  const setup = build => {
    build.onEnd(async result => {
      const metafileOutputs = Object.keys(result.metafile.outputs)

      for (const bundlePath of metafileOutputs) {
        const entryPoint = result.metafile.outputs[bundlePath].entryPoint

        if (!entryPoint) {
          continue
        }

        const { dir, name } = path.parse(entryPoint)
        const strippedDir = dir.replace('src/pages', '')
        const outputDir = path.join(outdir, strippedDir)
        const outputPath = path.join(outdir, strippedDir, `${name}.html`)

        const cacheBust = crypto.randomBytes(6).toString('hex')
        const modulePath = path.resolve(`./${bundlePath}?v=${cacheBust}`)
        const module = await import(modulePath)

        console.log(`${pluginName}: ${outputPath}`)

        // Check if the default export is a function
        if (typeof module?.default !== 'function') {
          continue
        }
        const props = Object.assign(initialProps || {})
        const html = render(module.default(props))

        await mkdir(path.resolve(outputDir), { recursive: true })
        await writeFile(path.resolve(outputPath), `<!DOCTYPE html>${html}`)
      }
    })
  }

  return { name: pluginName, setup }
}
