"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Zap, 
  Bot,
  BarChart3,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Lead Automation System",
    icon: Zap,
    workflowImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lead%20automation%20system-JHrU2LUrj5ewKUqTF73hLjNY0tPbEs.png",
    overview: "An end-to-end system that captures leads, stores them in a CRM, creates follow-up tasks, and notifies teams automatically.",
    description: "Automated lead capture and nurturing pipeline that qualifies and routes prospects automatically.",
    tech: ["n8n", "HubSpot", "Slack", "Google Sheets", "Notion"],
    problem: "Leads were scattered across multiple sources and manually tracked, causing delays and missed opportunities. Sales reps spent hours each day copying data between systems.",
    solution: "Built an automated pipeline that captures leads from forms, webhooks, and chatbots, enriches them with external data, scores them based on predefined criteria, and routes them to the appropriate team members with full context.",
    workflowSteps: [
      "Lead submits form or interacts with chatbot",
      "Data is validated and enriched via APIs",
      "Lead scoring algorithm assigns priority",
      "CRM record is created with all details",
      "Task is assigned to the appropriate rep",
      "Slack notification sent with lead summary",
      "Follow-up sequence is triggered automatically"
    ],
    features: [
      "Multi-source lead capture (forms, chatbots, APIs)",
      "Automatic data enrichment and validation",
      "Intelligent lead scoring and prioritization",
      "Real-time team notifications via Slack",
      "Automated CRM record creation",
      "Smart follow-up task scheduling"
    ],
    impact: [
      { label: "Response Time", value: "90%", description: "reduction in lead response time" },
      { label: "Conversion Rate", value: "40%", description: "increase in lead conversion" },
      { label: "Time Saved", value: "15hrs", description: "saved per week" },
      { label: "Manual Entry", value: "0%", description: "zero manual data entry" }
    ]
  },
  {
    id: 2,
    title: "AI Meeting Assistant",
    icon: Bot,
    workflowImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20meeting%20assistant-TS5S09FJ1Lj4Fte8ECplHJYqIWaUbR.png",
    overview: "An intelligent system that transcribes meetings, extracts key insights and action items, and syncs everything to project management tools.",
    description: "Intelligent system that transcribes meetings, extracts action items, and updates project management tools.",
    tech: ["Make", "OpenAI", "Notion", "Zoom", "Google Calendar", "Slack"],
    problem: "Meeting notes were inconsistent, action items got lost in conversation, and follow-ups were often missed. Team members spent significant time writing summaries instead of executing.",
    solution: "Created an AI-powered assistant that automatically processes meeting recordings, uses GPT-4 to generate structured summaries and extract action items, then syncs everything to Notion and notifies relevant team members.",
    workflowSteps: [
      "Meeting is recorded via Zoom/Google Meet",
      "Audio is processed and transcribed",
      "AI analyzes transcript for key topics",
      "Action items and decisions are extracted",
      "Notion page is created with full summary",
      "Tasks are assigned to mentioned team members",
      "Follow-up reminders are scheduled"
    ],
    features: [
      "Automatic meeting transcription",
      "AI-powered summary generation",
      "Smart action item extraction",
      "Notion integration for documentation",
      "Automatic task creation and assignment",
      "Follow-up reminder scheduling"
    ],
    impact: [
      { label: "Documentation", value: "100%", description: "of meetings documented" },
      { label: "Task Completion", value: "85%", description: "task completion rate" },
      { label: "Time Saved", value: "20hrs", description: "saved weekly" },
      { label: "Team Alignment", value: "3x", description: "improvement in alignment" }
    ]
  },
  {
    id: 3,
    title: "Founder Dashboard",
    icon: BarChart3,
    workflowImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Founder%20dashboard%20automation-YW7sZVegmgbOKHUWNuP6kWhPjIfHLQ.png",
    overview: "A real-time business intelligence dashboard that aggregates data from multiple platforms and delivers automated daily and weekly reports.",
    description: "Real-time business intelligence dashboard that aggregates data from multiple sources automatically.",
    tech: ["Zapier", "Airtable", "Stripe", "Google Analytics", "Slack", "Notion"],
    problem: "Founder spent hours each week manually compiling reports from various platforms. Data was often outdated by the time decisions were made, and critical metrics were missed.",
    solution: "Developed an automated dashboard system that pulls data from 8+ sources including Stripe, Google Analytics, CRM, and social platforms. Data is aggregated into a unified Airtable view with automated alerts and scheduled reports.",
    workflowSteps: [
      "Scheduled triggers pull data from all sources",
      "Data is normalized and aggregated",
      "KPIs are calculated and compared to targets",
      "Airtable dashboard is updated in real-time",
      "Alert thresholds are checked automatically",
      "Daily digest is sent via Slack",
      "Weekly comprehensive report is generated"
    ],
    features: [
      "Multi-platform data aggregation",
      "Real-time KPI tracking",
      "Automated alert system for anomalies",
      "Daily and weekly report generation",
      "Custom threshold monitoring",
      "Historical trend analysis"
    ],
    impact: [
      { label: "Visibility", value: "Real-time", description: "business visibility" },
      { label: "Time Saved", value: "10hrs", description: "saved weekly" },
      { label: "Decision Speed", value: "5x", description: "faster decisions" },
      { label: "Issue Detection", value: "95%", description: "proactive detection" }
    ]
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
      className="py-16 sm:py-20 overflow-hidden"
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
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
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
                      <Icon className="size-10 text-primary" />
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
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 bg-card border-b border-border p-6">
<DialogHeader>
  <div className="flex items-center gap-3 mb-2">
  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
  <selectedProject.icon className="size-5 text-primary" />
  </div>
  <DialogTitle className="text-2xl sm:text-3xl font-bold">
  {selectedProject.title}
  </DialogTitle>
  </div>
  <DialogDescription className="text-muted-foreground">
  {selectedProject.overview}
  </DialogDescription>
  </DialogHeader>
                </div>

                <div className="p-6 space-y-8">
                  {/* Problem Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      The Problem
                    </h4>
                    <div className="glass p-4 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>
                  </motion.div>

                  {/* Solution Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      The Solution
                    </h4>
                    <div className="glass p-4 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </motion.div>

                  {/* Workflow Diagram Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Workflow Diagram
                    </h4>
                    <div className="glass p-6 rounded-lg">
                      <div className="relative w-full rounded-lg overflow-hidden bg-white">
                        <img 
                          src={selectedProject.workflowImage} 
                          alt={`${selectedProject.title} workflow diagram`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        End-to-end automation workflow
                      </p>
                    </div>
                  </motion.div>

                  {/* Tools & Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25 + index * 0.05 }}
                          className="px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Step-by-Step Workflow */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Step-by-Step Workflow
                    </h4>
                    <div className="space-y-3">
                      {selectedProject.workflowSteps.map((step, index) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0 size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-muted-foreground">{step}</p>
                          </div>
                          {index < selectedProject.workflowSteps.length - 1 && (
                            <ArrowRight className="size-4 text-primary/40 mt-2 hidden sm:block" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Key Features
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35 + index * 0.05 }}
                          className="flex items-start gap-3 glass p-3 rounded-lg"
                        >
                          <CheckCircle2 className="size-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Impact / Results */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Impact & Results
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {selectedProject.impact.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="glass p-4 rounded-xl text-center"
                        >
                          <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                            {item.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.description}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Close Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="flex justify-end pt-4 border-t border-border"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-2"
                      onClick={() => setSelectedProject(null)}
                    >
                      <X className="size-4" />
                      Close
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
