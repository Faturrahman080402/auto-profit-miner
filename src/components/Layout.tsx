
import React, { ReactNode } from 'react';
import { Header } from './Header';
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex flex-col">
      <Header />
      <main className={cn("flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto w-full animate-fade-in", className)}>
        {children}
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>Auto Profit Miner &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
