import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import { nodeResolve as resolve } from "@rollup/plugin-node-resolve"

export default {
    input: "src/web/html/*.html",
    output: {dir : "dist/web"},
    plugins: [
        resolve(),
        html(),
    ]
}
