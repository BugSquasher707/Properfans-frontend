import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ellingsengroup.properfans",
  appName: "Properfans",
  webDir: "build",
  bundledWebRuntime: false,
  ios: {
    contentInset: "always",
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
};

export default config;
