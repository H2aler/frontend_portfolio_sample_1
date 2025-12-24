import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="about-content"
        >
          <div className="about-text">
            <h2 className="section-title">
              <span className="code-bracket">{'//'}</span> About
            </h2>
            <div className="about-code">
              <pre>
{`const developer = {
  name: "프론트엔드 개발자",
  location: "Seoul, KR",
  interests: [
    "React",
    "TypeScript", 
    "UI/UX",
    "깔끔한 코드"
  ],
  currentlyLearning: "Next.js 14",
  favoriteQuote: "Code is poetry"
};`}
              </pre>
            </div>
            <p className="about-description">
              React와 TypeScript를 주로 사용하며, 사용자 경험을 중시합니다.
              <br />
              코드 리뷰와 리팩토링을 좋아하고, 새로운 기술을 배우는 것을 즐깁니다.
            </p>
            <div className="tech-stack">
              <h3>주요 스택</h3>
              <div className="tech-list">
                <span className="tech-item">React</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">Tailwind CSS</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Git</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
