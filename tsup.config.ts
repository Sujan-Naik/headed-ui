import {defineConfig} from "tsup";
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"], // Build for commonJS and ESmodules
    dts: true, // Generate declaration file (.d.ts)
    splitting: false,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
    loader: {
        '.css': 'copy'},
});