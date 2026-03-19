"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const skillCategories = [
  {
    title: "Automation",
    description: "No-code platforms for building powerful workflows",
    skills: [
      { name: "n8n", level: 95 },
      { name: "Zapier", level: 90 },
      { name: "Make", level: 88 },
    ],
    color: "from-primary to-primary/60"
  },
  {
    title: "AI Tools",
    description: "Leveraging AI for intelligent automation",
    skills: [
      { name: "ChatGPT API", level: 92 },
      { name: "Notion AI", level: 85 },
      { name: "Claude", level: 88 },
    ],
    color: "from-emerald-500 to-emerald-500/60"
  },
  {
    title: "Operations",
    description: "Tools for managing digital workspaces",
    skills: [
      { name: "Notion", level: 95 },
      { name: "ClickUp", level: 88 },
      { name: "Google Workspace", level: 90 },
    ],
    color: "from-amber-500 to-amber-500/60"
  },
  {
    title: "CRM & Data",
    description: "Managing relationships and data flows",
    skills: [
      { name: "HubSpot", level: 85 },
      { name: "Google Sheets", level: 92 },
      { name: "Airtable", level: 88 },
    ],
    color: "from-rose-500 to-rose-500/60"
  }
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{ position: "relative" }}
      className="py-16 sm:py-20 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute -left-64 top-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end automation solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass rounded-xl p-6 hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {category.description}
              </p>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Slack", "Discord", "Typeform", "Calendly", "Stripe", "Twilio", "Webflow", "GitHub Actions"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
