
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";

export function AutoTradeSettings() {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    autoTradingEnabled: true,
    tradeAmount: 500,
    maxDailyTrades: 5,
    stopLoss: 5,
    takeProfit: 10,
    confidenceThreshold: 65,
    tradingPairs: ["BTC/USDT", "ETH/USDT"],
    notificationsEnabled: true,
    riskLevel: "medium"
  });

  const handleSwitchChange = (field: string) => (checked: boolean) => {
    setSettings(prev => ({ ...prev, [field]: checked }));
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSliderChange = (field: string) => (value: number[]) => {
    setSettings(prev => ({ ...prev, [field]: value[0] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Settings Saved",
      description: "Your auto-trading settings have been updated.",
      duration: 3000,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-8">
      <Card className="neo-card">
        <CardHeader>
          <CardTitle className="text-xl">Auto-Trading Settings</CardTitle>
          <CardDescription>
            Configure how the auto-trading system should operate
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-trading">Auto-Trading</Label>
              <p className="text-sm text-muted-foreground">Enable or disable the automated trading system</p>
            </div>
            <Switch 
              id="auto-trading" 
              checked={settings.autoTradingEnabled}
              onCheckedChange={handleSwitchChange('autoTradingEnabled')}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="risk-level">Risk Level</Label>
            <Select 
              value={settings.riskLevel} 
              onValueChange={handleSelectChange('riskLevel')}
            >
              <SelectTrigger id="risk-level" className="w-full">
                <SelectValue placeholder="Select risk level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Low risk means smaller trades with higher confidence. High risk allows for larger trades with lower confidence.
            </p>
          </div>

          <div className="space-y-3">
            <Label htmlFor="trade-amount">Maximum Trade Amount (USDT)</Label>
            <Input 
              id="trade-amount" 
              type="number" 
              value={settings.tradeAmount}
              onChange={handleInputChange('tradeAmount')}
              min={10}
              max={10000}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="max-daily-trades">Maximum Daily Trades</Label>
            <Input 
              id="max-daily-trades" 
              type="number" 
              value={settings.maxDailyTrades}
              onChange={handleInputChange('maxDailyTrades')}
              min={1}
              max={50}
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <Label htmlFor="confidence-threshold">Confidence Threshold ({settings.confidenceThreshold}%)</Label>
            </div>
            <Slider 
              id="confidence-threshold"
              defaultValue={[settings.confidenceThreshold]} 
              max={100} 
              step={5}
              onValueChange={handleSliderChange('confidenceThreshold')}
            />
            <p className="text-sm text-muted-foreground">
              Only execute trades when prediction confidence is above this threshold
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label htmlFor="stop-loss">Stop Loss (%)</Label>
              <Input 
                id="stop-loss" 
                type="number" 
                value={settings.stopLoss}
                onChange={handleInputChange('stopLoss')}
                min={1}
                max={50}
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="take-profit">Take Profit (%)</Label>
              <Input 
                id="take-profit" 
                type="number" 
                value={settings.takeProfit}
                onChange={handleInputChange('takeProfit')}
                min={1}
                max={100}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive alerts for trades and important events</p>
            </div>
            <Switch 
              id="notifications" 
              checked={settings.notificationsEnabled}
              onCheckedChange={handleSwitchChange('notificationsEnabled')}
            />
          </div>

          <Button type="submit" className="w-full">Save Settings</Button>
        </CardContent>
      </Card>
    </form>
  );
}
