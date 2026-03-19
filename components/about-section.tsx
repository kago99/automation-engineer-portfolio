"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Zap, Bot, Workflow, LineChart } from "lucide-react"

const highlights = [
  {
    icon: Bot,
    title: "AI Integration",
    description: "Leveraging AI tools to create intelligent automation workflows"
  },
  {
    icon: Workflow,
    title: "No-Code Automation",
    description: "Building powerful systems without complex coding"
  },
  {
    icon: LineChart,
    title: "Operations Optimization",
    description: "Streamlining processes for maximum efficiency"
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Quick turnaround from concept to working system"
  }
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ position: "relative" }}
      className="py-16 sm:py-20 overflow-hidden"
    >
      {/* Parallax Background Element */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 -right-64 size-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 text-balance">
              Transforming Manual Processes Into
              <span className="gradient-text"> Intelligent Systems</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I specialize in designing and implementing automation systems that 
                eliminate repetitive tasks and unlock operational efficiency. With 
                expertise in no-code platforms, AI workflows, and digital operations, 
                I help businesses scale without scaling complexity.
              </p>
              <p>
                My approach combines systems thinking with practical implementation, 
                ensuring every automation is not just technically sound but also 
                aligned with business goals. From lead capture to AI-powered 
                assistants, I build solutions that work 24/7.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Remote Ready</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-xl p-6 hover:bg-primary/5 transition-colors"
              >
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
