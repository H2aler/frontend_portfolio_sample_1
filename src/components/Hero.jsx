import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = ({ setCursorVariant }) => {
  const [currentTime, setCurrentTime] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#contact', label: 'Email' },
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-btn red"></span>
            <span className="terminal-btn yellow"></span>
            <span className="terminal-btn green"></span>
          </div>
          <span className="terminal-title">portfolio.js</span>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command">whoami</span>
          </div>
          <div className="terminal-output">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              프론트엔드 개발자
            </motion.h1>
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command typing">
              {isTyping && <span className="cursor-blink">|</span>}
            </span>
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command">cat about.txt</span>
          </div>
          <div className="terminal-output">
            <p className="hero-description">
              React와 TypeScript로 사용자 경험을 만듭니다.
              <br />
              깔끔한 코드와 직관적인 인터페이스를 좋아합니다.
            </p>
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command">ls -la</span>
          </div>
          <div className="terminal-output">
            <div className="hero-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="hero-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <link.icon /> {link.label}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-time">{currentTime}</span>
          </div>
        </div>
      </div>

      <div className="hero-actions">
        <motion.a
          href="#projects"
          className="btn-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          프로젝트 보기 →
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
