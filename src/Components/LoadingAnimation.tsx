const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      {/* Rocket Container */}
      <div className="relative flex flex-col items-center">
        
        {/* Rocket Container with left-to-right animation */}
        <div className="relative mb-8 animate-rocket-travel">
          <svg 
            width="140" 
            height="80" 
            viewBox="0 0 280 160" 
            className="drop-shadow-2xl"
          >
            {/* Rocket Body - Modern Gradient */}
            <defs>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="noseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
              <linearGradient id="finGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#DC2626" />
              </linearGradient>
            </defs>
            
            {/* Main Rocket Body */}
            <ellipse 
              cx="140" 
              cy="80" 
              rx="80" 
              ry="35" 
              fill="url(#bodyGradient)" 
              stroke="#1E40AF" 
              strokeWidth="2"
            />
            
            {/* Rocket Nose Cone */}
            <path 
              d="M220 80 L260 65 L270 80 L260 95 Z" 
              fill="url(#noseGradient)" 
              stroke="#DC2626" 
              strokeWidth="2"
            />
            
            {/* Rocket Window */}
            <circle 
              cx="180" 
              cy="80" 
              r="12" 
              fill="#1F2937" 
              stroke="#374151" 
              strokeWidth="2"
            />
            <circle 
              cx="180" 
              cy="80" 
              r="8" 
              fill="#60A5FA" 
              opacity="0.7"
            />
            
            {/* Top Fin */}
            <path 
              d="M90 45 L60 30 L70 45 L85 50 Z" 
              fill="url(#finGradient)" 
              stroke="#DC2626" 
              strokeWidth="1.5"
            />
            
            {/* Bottom Fin */}
            <path 
              d="M90 115 L60 130 L70 115 L85 110 Z" 
              fill="url(#finGradient)" 
              stroke="#DC2626" 
              strokeWidth="1.5"
            />
            
            {/* Engine Details */}
            <rect 
              x="65" 
              y="72" 
              width="20" 
              height="16" 
              fill="#F59E0B" 
              stroke="#D97706" 
              strokeWidth="1.5" 
              rx="3"
            />
            
            {/* Rocket Flames/Exhaust */}
            <path 
              d="M65 75 L30 70 L25 80 L30 90 L65 85 Z" 
              fill="#FBBF24" 
              opacity="0.8"
            />
            <path 
              d="M45 78 L15 76 L10 80 L15 84 L45 82 Z" 
              fill="#F97316" 
              opacity="0.9"
            />
            <path 
              d="M35 79 L5 79 L1 80 L5 81 L35 81 Z" 
              fill="#EF4444" 
              opacity="0.7"
            />
          </svg>
          
          {/* Trailing Speed Lines */}
          <div className="absolute top-1/2 -translate-y-1/2 right-full mr-4">
            <div className="flex flex-col gap-2">
              <div className="h-0.5 w-24 bg-gradient-to-l from-blue-400 to-transparent animate-pulse opacity-60"></div>
              <div className="h-0.5 w-16 bg-gradient-to-l from-purple-400 to-transparent animate-pulse opacity-40" style={{animationDelay: '0.2s'}}></div>
              <div className="h-0.5 w-20 bg-gradient-to-l from-pink-400 to-transparent animate-pulse opacity-50" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/50 rounded-full animate-bounce" style={{animationDuration: '2s'}}></div>
          <div className="absolute top-32 right-16 w-1 h-1 bg-purple-400/60 rounded-full animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-bounce" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-cyan-400/50 rounded-full animate-bounce" style={{animationDuration: '2.2s', animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-400/60 rounded-full animate-bounce" style={{animationDuration: '2.8s', animationDelay: '0.8s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-bounce" style={{animationDuration: '2.3s', animationDelay: '0.3s'}}></div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-2xl font-bold tracking-wider animate-pulse-text">
          LOADING<span className="animate-dots">...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;