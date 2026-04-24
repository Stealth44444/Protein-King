'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

interface TypewriterProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export default function Typewriter({
  texts,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = '',
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const handleTyping = useCallback(() => {
    const currentFullText = texts[textIndex]

    if (!isDeleting) {
      // 텍스트를 한 글자씩 추가
      if (charIndex < currentFullText.length) {
        setDisplayText(currentFullText.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      } else {
        // 타이핑 완료 후 대기
        setTimeout(() => setIsDeleting(true), pauseDuration)
      }
    } else {
      // 텍스트를 한 글자씩 삭제
      if (charIndex > 0) {
        setDisplayText(currentFullText.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      } else {
        // 삭제 완료 후 다음 텍스트로 이동
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
        setCharIndex(0)
      }
    }
  }, [charIndex, isDeleting, pauseDuration, textIndex, texts])

  useEffect(() => {
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    )
    return () => clearTimeout(timer)
  }, [handleTyping, isDeleting, typingSpeed, deletingSpeed])

  // Helper function to render text with gradient spans
  const renderText = (text: string) => {
    const parts = text.split(/({|})/g);
    let isGradient = false;
    
    return parts.map((part, i) => {
      if (part === '{') {
        isGradient = true;
        return null;
      }
      if (part === '}') {
        isGradient = false;
        return null;
      }
      
      return isGradient ? (
        <span key={i} className="text-gradient-brand">{part}</span>
      ) : (
        <span key={i}>{part}</span>
      );
    });
  };

  return (
    <span className={className}>
      {renderText(displayText)}
    </span>
  )
}
