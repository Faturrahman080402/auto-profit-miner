
import React, { ReactNode } from 'react';
import { Header } from './Header';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex flex-col">
      <Header />
      <main className={cn(
        "flex-1 px-4 sm:px-6 lg:px-8 py-6 mx-auto w-full animate-fade-in", 
        isMobile ? "max-w-full" : "max-w-[1280px]",
        className
      )}>
        {children}
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>Auto Profit Miner &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
