import React from 'react'

interface ProductImageProps {
  type: 'sleeve' | 'app' | 'rental'
}

export function ProductImage({ type }: ProductImageProps) {
  return (
    <div className="h-48 bg-zinc-900 flex items-center justify-center overflow-hidden relative">
      {/* Honeycomb pattern background */}
      <div className="absolute inset-0 opacity-30 bg-repeat" style={{
        backgroundImage: 'radial-gradient(circle, #6200ee 10%, transparent 25%)',
        backgroundSize: '20px 20px'
      }}></div>

      {/* Foreground content */}
      <div className="relative z-10 text-center p-4">
        {type === 'sleeve' && (
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-32 w-12 mx-auto rounded-full relative">
            <div className="absolute inset-x-0 top-1/4 h-1/2 bg-zinc-900 opacity-70 flex items-center justify-center">
              <div className="text-white text-xs font-bold">Digital Hand</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
              <div className="h-4 w-4 rounded-full bg-purple-300 animate-pulse"></div>
            </div>
          </div>
        )}

        {type === 'app' && (
          <div className="rounded-xl bg-zinc-800 h-32 w-32 mx-auto border border-purple-600/50 overflow-hidden flex flex-col">
            <div className="bg-purple-600 h-8 w-full flex items-center justify-center text-white text-xs font-bold">
              Digital Hand App
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-purple-500 animate-pulse"></div>
              </div>
            </div>
          </div>
        )}

        {type === 'rental' && (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-purple-600 flex items-center justify-center mb-2">
              <div className="text-white text-2xl font-bold">DH</div>
            </div>
            <div className="text-white text-sm">Пункт проката</div>
          </div>
        )}
      </div>
    </div>
  )
}
