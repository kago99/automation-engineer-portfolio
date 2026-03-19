"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Database, Cog, Zap, BarChart3, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "Input",
    description: "Identify data sources, triggers, and entry points for your automation",
    details: ["Data mapping", "API connections", "Trigger setup"]
  },
  {
    icon: Cog,
    title: "Processing",
    description: "Design logic flows, transformations, and decision trees",
    details: ["Business logic", "Data transformation", "Conditional routing"]
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Implement workflows that execute tasks automatically",
    details: ["Task execution", "Error handling", "Notifications"]
  },
  {
    icon: BarChart3,
    title: "Output",
    description: "Deliver results, reports, and actionable insights",
    details: ["Data delivery", "Reporting", "Monitoring"]
  }
]

export function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section
      ref={sectionRef}
      id="workflow"
      style={{ position: "relative" }}
      className="py-16 sm:py-20 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute -left-32 bottom-0 size-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
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
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            How I Design <span className="gradient-text">Automation Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to building reliable, scalable automation solutions
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="glass rounded-xl p-6 h-full hover:bg-primary/5 transition-colors group">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-6 px-2 py-1 bg-background text-xs text-muted-foreground border border-border rounded">
                    Step {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="size-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="size-6 rounded-full bg-primary flex items-center justify-center">
                      <ArrowRight className="size-3 text-primary-foreground" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ready to automate your workflows?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s discuss how automation can transform your business operations
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Start a conversation
              <ArrowRight className="size-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
