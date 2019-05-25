const { fusebox, sparky } = require("fuse-box");

class Context {
  getConfig(repro) {
    return fusebox({
      target: "browser",
      entry: `src/${repro}.ts`,
      tsConfig: "./tsconfig.json",
      webIndex: {
        template: "src/index.html"
      },
      cache: {
        root: ".cache",
        enabled: true
      },
      watch: true,
      hmr: true,
      devServer: true,
      logging: { level: "succinct" },
      allowSyntheticDefaultImports: true,
      sourceMap: false
    });
  }
}

const { task } = sparky(Context);

task("repro1", async context => {
  const fuse = context.getConfig("repro1");
  await fuse.runDev();
});

task("repro2", async context => {
  const fuse = context.getConfig("repro2");
  await fuse.runDev();
});
