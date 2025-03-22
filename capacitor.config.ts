
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.auto.profit.miner',
  appName: 'Auto Profit Miner',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  electron: {
    customUrlScheme: 'auto-profit-miner',
    deepLinks: false,
    backgroundColor: '#2E3440',
    trayIconAndMenuEnabled: true,
    splashScreenEnabled: true,
    splashScreenImageName: 'splash.png',
    windowOptions: {
      width: 1200,
      height: 800,
      resizable: true,
      frame: true,
      titleBarStyle: 'default',
      title: 'Auto Profit Miner',
      minWidth: 800,
      minHeight: 600
    }
  }
};

export default config;
