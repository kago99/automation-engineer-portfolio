"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Lead Automation System",
    description: "Automated lead capture and nurturing pipeline that qualifies and routes prospects automatically.",
    tech: ["n8n", "HubSpot", "Slack", "Google Sheets"],
    image: "/projects/lead-automation.jpg",
    details: {
      problem: "Manual lead processing was taking 3+ hours daily, causing delays in response time and lost opportunities.",
      solution: "Built an end-to-end automation that captures leads from multiple sources, enriches data using APIs, scores leads based on criteria, and routes them to the appropriate team members instantly.",
      workflow: [
        "Lead captured via form/chatbot",
        "Data enrichment via Clearbit API",
        "Lead scoring algorithm applied",
        "Auto-assignment to sales rep",
        "Slack notification sent",
        "CRM record created"
      ],
      impact: [
        "90% reduction in response time",
        "40% increase in lead conversion",
        "15 hours saved per week",
        "Zero manual data entry"
      ]
    }
  },
  {
    id: 2,
    title: "AI Meeting Assistant",
    description: "Intelligent system that transcribes meetings, extracts action items, and updates project management tools.",
    tech: ["Make", "OpenAI", "Notion", "Zoom"],
    image: "/projects/ai-meeting.jpg",
    details: {
      problem: "Meeting notes were inconsistent, action items got lost, and follow-ups were often missed.",
      solution: "Created an AI-powered assistant that joins meetings, transcribes conversations, uses GPT to extract insights and action items, and automatically updates Notion and sends follow-up emails.",
      workflow: [
        "Auto-join scheduled meetings",
        "Real-time transcription",
        "AI analysis for action items",
        "Notion tasks created",
        "Summary email sent",
        "Calendar reminders set"
      ],
      impact: [
        "100% meeting documentation",
        "85% task completion rate",
        "20 hours saved weekly",
        "Improved team alignment"
      ]
    }
  },
  {
    id: 3,
    title: "Founder Dashboard Automation",
    description: "Real-time business intelligence dashboard that aggregates data from multiple sources automatically.",
    tech: ["Zapier", "Airtable", "Stripe", "Analytics"],
    image: "/projects/founder-dashboard.jpg",
    details: {
      problem: "Founder spent hours compiling reports from various platforms, leading to delayed decision-making.",
      solution: "Developed an automated dashboard that pulls data from Stripe, Google Analytics, CRM, and social platforms into a unified Airtable view with automated daily/weekly reports.",
      workflow: [
        "Data pulled from 8+ sources",
        "Automatic aggregation",
        "KPI calculations run",
        "Dashboard updated",
        "Alert thresholds checked",
        "Weekly digest sent"
      ],
      impact: [
        "Real-time business visibility",
        "10 hours saved weekly",
        "Faster decision making",
        "Proactive issue detection"
      ]
    }
  }
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{ position: "relative" }}
      className="py-24 sm:py-32 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 size-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world automation solutions that deliver measurable results
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-20 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">0{project.id}</span>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="gap-2"
                  >
                    View Details
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Problem */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    The Problem
                  </h4>
                  <p className="text-muted-foreground">{selectedProject.details.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    The Solution
                  </h4>
                  <p className="text-muted-foreground">{selectedProject.details.solution}</p>
                </div>

                {/* Workflow Diagram */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    Workflow
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.workflow.map((step, index) => (
                      <div key={step} className="flex items-center">
                        <span className="px-3 py-2 glass rounded-lg text-sm text-foreground">
                          {step}
                        </span>
                        {index < selectedProject.details.workflow.length - 1 && (
                          <span className="mx-2 text-primary">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    Impact & Results
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.details.impact.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-primary/10 rounded-full text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
