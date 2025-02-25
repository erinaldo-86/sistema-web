import React from 'react';

export function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">Analisando o site</h3>
        <p className="text-sm text-muted-foreground">Isso pode levar alguns segundos...</p>
      </div>
    </div>
  )
}
