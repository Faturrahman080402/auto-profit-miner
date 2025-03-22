
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PredictionStatus = 'buy' | 'sell' | 'hold';

interface PredictionCardProps {
  coinSymbol: string;
  currentPrice: number;
  predictedPrice: number;
  confidence: number;
  timeframe: string;
  status: PredictionStatus;
}

export function PredictionCard({ 
  coinSymbol, 
  currentPrice, 
  predictedPrice, 
  confidence, 
  timeframe,
  status
}: PredictionCardProps) {
  const priceDifference = predictedPrice - currentPrice;
  const percentChange = (priceDifference / currentPrice) * 100;
  
  const getStatusColor = (status: PredictionStatus) => {
    switch(status) {
      case 'buy':
        return 'bg-green-500/10 text-green-500';
      case 'sell':
        return 'bg-red-500/10 text-red-500';
      case 'hold':
        return 'bg-yellow-500/10 text-yellow-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getStatusText = (status: PredictionStatus) => {
    switch(status) {
      case 'buy':
        return 'Buy Signal';
      case 'sell':
        return 'Sell Signal';
      case 'hold':
        return 'Hold Position';
      default:
        return 'No Action';
    }
  };

  const getDirectionIcon = () => {
    if (percentChange > 0) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
        </svg>
      );
    }
  };

  let statusColorClass = getStatusColor(status);
  
  return (
    <Card className="neo-card h-full transition-all duration-200 animate-slide-up [animation-delay:100ms]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            {coinSymbol === 'BTC' && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            )}
            {coinSymbol === 'ETH' && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" />
              </svg>
            )}
            {coinSymbol === 'SOL' && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="font-medium">{coinSymbol}/USDT</h3>
            <p className="text-sm text-muted-foreground">Prediction for next {timeframe}</p>
          </div>
        </div>
        <div className={cn("px-3 py-1 rounded-full text-xs font-medium", statusColorClass)}>
          {getStatusText(status)}
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Current Price</p>
            <p className="text-2xl font-semibold mt-1">${currentPrice.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Predicted Price</p>
            <div className="flex items-center mt-1 space-x-1">
              <p className="text-2xl font-semibold">${predictedPrice.toLocaleString()}</p>
              {getDirectionIcon()}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-muted-foreground">Prediction Confidence</span>
            <span className="text-sm font-medium">{confidence}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                confidence > 70 ? "bg-green-500" : confidence > 50 ? "bg-yellow-500" : "bg-red-500"
              }`} 
              style={{ width: `${confidence}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mt-4 text-sm flex justify-between">
          <p className="text-muted-foreground">Expected Change</p>
          <p className={percentChange >= 0 ? "text-green-500" : "text-red-500"}>
            {percentChange >= 0 ? '+' : ''}{percentChange.toFixed(2)}%
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
