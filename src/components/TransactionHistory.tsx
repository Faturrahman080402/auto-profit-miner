
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Sample transaction data
const transactions = [
  {
    id: 1,
    type: 'buy',
    coin: 'BTC',
    amount: 0.125,
    price: 36750.25,
    date: '2023-06-15T08:45:30Z',
    status: 'completed',
    reason: 'Price below moving average, strong buy signal'
  },
  {
    id: 2,
    type: 'sell',
    coin: 'SOL',
    amount: 15.5,
    price: 104.85,
    date: '2023-06-14T14:23:10Z',
    status: 'completed',
    reason: 'Target price reached, taking profits'
  },
  {
    id: 3,
    type: 'buy',
    coin: 'ETH',
    amount: 0.75,
    price: 2486.32,
    date: '2023-06-13T19:12:45Z',
    status: 'completed',
    reason: 'Bullish pattern detected, accumulation phase'
  },
  {
    id: 4,
    type: 'sell',
    coin: 'BTC',
    amount: 0.08,
    price: 37125.50,
    date: '2023-06-12T05:31:22Z',
    status: 'completed',
    reason: 'Resistance level hit, temporary sell signal'
  },
  {
    id: 5,
    type: 'buy',
    coin: 'ETH',
    amount: 1.2,
    price: 2412.75,
    date: '2023-06-11T10:48:55Z',
    status: 'completed',
    reason: 'Support level held, strong buying opportunity'
  }
];

export function TransactionHistory() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Type</TableHead>
            <TableHead>Coin</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id} className="transition-colors hover:bg-secondary/40">
              <TableCell>
                <Badge variant={tx.type === 'buy' ? 'default' : 'destructive'} className={cn(
                  "transition-all",
                  tx.type === 'buy' ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                )}>
                  {tx.type.toUpperCase()}
                </Badge>
              </TableCell>
              <TableCell className="font-medium">{tx.coin}</TableCell>
              <TableCell>{tx.amount} {tx.coin}</TableCell>
              <TableCell>${tx.price.toLocaleString()}</TableCell>
              <TableCell>${(tx.amount * tx.price).toLocaleString()}</TableCell>
              <TableCell>{new Date(tx.date).toLocaleString()}</TableCell>
              <TableCell className="max-w-[200px] truncate" title={tx.reason}>
                {tx.reason}
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                  {tx.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
