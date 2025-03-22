
import React from 'react';
import { Layout } from '@/components/Layout';
import { AutoTradeSettings } from '@/components/AutoTradeSettings';

const Settings = () => {
  // Menggunakan title khusus untuk aplikasi desktop
  React.useEffect(() => {
    document.title = 'Auto Profit Miner - Settings';
  }, []);

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Configure the auto trading system parameters.
          </p>
        </div>
        <AutoTradeSettings />
      </div>
    </Layout>
  );
};

export default Settings;
