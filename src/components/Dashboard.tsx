
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { PredictionCard } from './PredictionCard';
import { MarketChart } from './MarketChart';
import { TransactionHistory } from './TransactionHistory';

export function Dashboard() {
  const [isAutoTrading, setIsAutoTrading] = useState(false);

  const toggleAutoTrading = () => {
    setIsAutoTrading(!isAutoTrading);
  };

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-2/3 lg:w-3/4 neo-card animate-slide-up">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center justify-between">
              <span>Market Overview</span>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Switch id="auto-trading" checked={isAutoTrading} onCheckedChange={toggleAutoTrading} />
                  <Label htmlFor="auto-trading" className="text-sm font-normal">
                    Auto Trading
                  </Label>
                </div>
                <div className={`h-2 w-2 rounded-full ${isAutoTrading ? "bg-green-500 animate-pulse-subtle" : "bg-muted"}`}></div>
              </div>
            </CardTitle>
            <CardDescription>
              Real-time cryptocurrency market data and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MarketChart />
          </CardContent>
        </Card>

        <div className="w-full md:w-1/3 lg:w-1/4 space-y-6">
          <Card className="neo-card animate-slide-down">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Balance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold">$25,842.65</p>
                <p className="text-sm text-muted-foreground">+3.24% today</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" className="rounded-full">Deposit</Button>
                <Button size="sm" variant="outline" className="rounded-full">Withdraw</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="neo-card animate-slide-up [animation-delay:200ms]">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Current Position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                      </svg>
                    </div>
                    <span className="font-medium">BTC/USDT</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">0.425 BTC</p>
                    <p className="text-sm text-muted-foreground">≈ $15,632.25</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">ETH/USDT</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">2.85 ETH</p>
                    <p className="text-sm text-muted-foreground">≈ $7,254.60</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PredictionCard 
          coinSymbol="BTC" 
          currentPrice={37250.25} 
          predictedPrice={39800.50} 
          confidence={78} 
          timeframe="24h"
          status="buy"
        />
        <PredictionCard 
          coinSymbol="ETH" 
          currentPrice={2542.88} 
          predictedPrice={2650.15} 
          confidence={65} 
          timeframe="24h"
          status="hold"
        />
        <PredictionCard 
          coinSymbol="SOL" 
          currentPrice={102.35} 
          predictedPrice={98.45} 
          confidence={72} 
          timeframe="24h"
          status="sell"
        />
      </div>

      <Card className="neo-card animate-slide-up [animation-delay:300ms]">
        <CardHeader>
          <CardTitle className="text-xl">Recent Transactions</CardTitle>
          <CardDescription>
            Latest automated trading activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionHistory />
        </CardContent>
      </Card>
    </div>
  );
}
