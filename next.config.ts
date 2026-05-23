import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

class VeliteWebpackPlugin {
  static started = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apply(compiler: any) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      const { build } = await import("velite");
      await build({ watch: dev, clean: !dev });
    });
  }
}

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error — reactCompiler는 Next.js 16에서 실험적 옵션
    reactCompiler: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack: (config: any) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

export default withVanillaExtract(nextConfig);
