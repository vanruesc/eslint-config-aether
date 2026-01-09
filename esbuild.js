import pkg from "./package.json" with { type: "json" };
import esbuild from "esbuild";

const external = Object.keys(pkg.dependencies)
	.concat(Object.keys(pkg.peerDependencies));

await esbuild.build({
	entryPoints: ["./src/index.ts"],
	outdir: "./dist",
	logLevel: "info",
	format: "esm",
	bundle: true,
	external
});
