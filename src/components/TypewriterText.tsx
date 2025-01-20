import { useEffect, useState, useRef } from 'react'

const TypewriterText = () => {
  const [text, setText] = useState('')
  const fullText = 'réalité'
  const [isTyping, setIsTyping] = useState(true)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1))
        }, 150) // Adjust typing speed here
      } else {
        timeout = setTimeout(() => {
          setText('')
        }, 10000) // Increased to 10 seconds before restarting
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isTyping])

  return (
    <span className="relative inline-flex">
      <span ref={textRef} className="text-white">{text}</span>
      <span 
        className={`absolute right-[-3px] w-[2px] h-full bg-white ${
          text === fullText ? 'animate-blink' : ''
        }`}
      />
    </span>
  )
}

export default TypewriterText
