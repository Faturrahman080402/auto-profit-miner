
import React from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/Dashboard';

const Index = () => {
  // Menggunakan title khusus untuk aplikasi desktop
  React.useEffect(() => {
    document.title = 'Auto Profit Miner - Dashboard';
  }, []);

  return (
    <Layout className="desktop-optimized">
      <Dashboard />
    </Layout>
  );
};

export default Index;
