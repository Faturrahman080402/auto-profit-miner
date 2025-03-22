
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TransactionHistory } from '@/components/TransactionHistory';

const History = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transaction History</h1>
          <p className="text-muted-foreground">
            Review all trading activities performed by the system.
          </p>
        </div>
        
        <Card className="neo-card">
          <CardHeader>
            <CardTitle className="text-xl">Transaction Records</CardTitle>
            <CardDescription>
              Detailed view of all automated trades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionHistory />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default History;
