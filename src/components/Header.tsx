
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-semibold tracking-tight transition-all duration-200 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-primary">Auto Profit Miner</span>
            </div>
          </div>
          
          <nav className="flex items-center space-x-1">
            <Button 
              variant={isActive('/') ? "default" : "ghost"} 
              onClick={() => navigate('/')}
              className="rounded-full px-4"
            >
              Dashboard
            </Button>
            <Button 
              variant={isActive('/settings') ? "default" : "ghost"} 
              onClick={() => navigate('/settings')}
              className="rounded-full px-4"
            >
              Settings
            </Button>
            <Button 
              variant={isActive('/history') ? "default" : "ghost"} 
              onClick={() => navigate('/history')}
              className="rounded-full px-4"
            >
              History
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
