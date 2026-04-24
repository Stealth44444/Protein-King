'use client'

import { motion } from 'framer-motion'

export default function GridPattern3D() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 3D 원근 컨테이너 */}
      <div 
        className="absolute inset-0"
        style={{
          perspective: '600px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 움직이는 그리드 평면 */}
        <div className="absolute inset-0 origin-center" style={{ transform: 'rotateX(65deg)' }}>
          <motion.div
            animate={{ 
              backgroundPosition: ['0 0', '0 60px'] 
            }}
            transition={{ 
              duration: 0.6, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-[0%_-50%] w-[200%] h-[200%] opacity-[0.25]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.1) 2px, transparent 2px),
                linear-gradient(to bottom, rgba(0,0,0,0.1) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px',
              maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            }}
          />
        </div>

        {/* 상단 먼 곳의 블러 처리 (지평선 느낌) */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
