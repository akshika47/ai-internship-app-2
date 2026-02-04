"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const TOTAL_SLIDES = 13;

export default function Week1Slides() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= TOTAL_SLIDES ? 1 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 1 ? TOTAL_SLIDES : prev - 1));
  }, []);

  const goToSlide = (n: number) => {
    setCurrentSlide(n);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
      if (e.key === "Escape") {
        setShowMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const progressWidth = (currentSlide / TOTAL_SLIDES) * 100;

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 via-red-500 to-purple-500 transition-all duration-300 z-50"
        style={{ width: `${progressWidth}%` }}
      />

      {/* Header logo */}
      <div className="fixed top-5 left-7 z-50">
        <Image
          src="/slides/multi-agent-systems/week1/the_ai_internship_logo.png"
          alt="The AI Internship"
          width={175}
          height={175}
          className="h-auto"
        />
      </div>

      {/* Back button */}
      <Link
        href="/slides"
        className="fixed top-5 right-7 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-full shadow-md text-sm text-slate-600 hover:text-slate-900 hover:shadow-lg transition-all"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        All Courses
      </Link>

      {/* Footer */}
      <div className="fixed bottom-3 right-8 text-xs text-slate-400 z-50">
        &copy; 2025 Snapdrum LLC. All rights reserved.
      </div>

      {/* Slide container */}
      <div className="w-screen h-screen flex items-center justify-center">
        {/* Slide 1: Title */}
        <Slide active={currentSlide === 1}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2.5 rounded-full text-white text-sm font-medium mb-8 shadow-lg">
              <span>✦</span> Maven Cohort: Multi-Agent Mastery
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Blueprint to First Agent
            </h1>
            <p className="text-xl text-slate-500 mb-2">LangGraph Foundations — Week 1</p>
            <p className="text-slate-400">4 Weeks → Production Multi-Agent Systems</p>

            <div className="flex items-center justify-center gap-5 mt-10">
              <Image
                src="/slides/multi-agent-systems/week1/aki.png"
                alt="Aki Wijesundara"
                width={80}
                height={80}
                className="rounded-full border-3 border-slate-200 shadow-md object-cover"
              />
              <div className="text-left">
                <p className="text-xl font-semibold text-slate-900">Aki Wijesundara, PhD</p>
                <p className="text-slate-500">Instructor</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 2: The Big Picture */}
        <Slide active={currentSlide === 2}>
          <SectionLabel>Overview</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">The Big Picture</h2>
          <p className="text-lg text-slate-500 mb-8">Your 4-week journey to production multi-agent systems</p>

          <div className="space-y-0">
            <TimelineItem color="blue" last={false}>
              <h4 className="text-lg font-semibold">Week 1: Plan → Simple Graphs</h4>
              <p className="text-slate-500">Draw your multi-agent architecture → code your first graph</p>
            </TimelineItem>
            <TimelineItem color="green" last={false}>
              <h4 className="text-lg font-semibold">Week 2: Single-Agent</h4>
              <p className="text-slate-500">Master the ReAct pattern + add persistence</p>
            </TimelineItem>
            <TimelineItem color="yellow" last={false}>
              <h4 className="text-lg font-semibold">Week 3: Multi-Agent</h4>
              <p className="text-slate-500">Subgraphs and agent orchestration</p>
            </TimelineItem>
            <TimelineItem color="red" last={true}>
              <h4 className="text-lg font-semibold">Week 4: Production + Capstone</h4>
              <p className="text-slate-500">Deploy your multi-agent system to production</p>
            </TimelineItem>
          </div>
        </Slide>

        {/* Slide 3: Daily Agenda */}
        <Slide active={currentSlide === 3}>
          <SectionLabel>Today&apos;s Plan</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">Daily Agenda</h2>
          <p className="text-lg text-slate-500 mb-8">What we&apos;ll cover in this session</p>

          <div className="space-y-4">
            <AgendaItem number={1} color="bg-blue-500" title="Foundations: What are Agents & Multi-Agent Systems?" subtitle="Understanding the core concepts" />
            <AgendaItem number={2} color="bg-green-500" title="Introduction to LangGraph" subtitle="What it is and why we use it" />
            <AgendaItem number={3} color="bg-yellow-500 text-slate-800" title="Graph Anatomy: State, Nodes, Edges" subtitle="The three building blocks" />
            <AgendaItem number={4} color="bg-purple-500" title="Hands-On: Design Your Customer Support Router" subtitle="Draw your first multi-agent system" />
            <AgendaItem number={5} color="bg-red-500" title="From Drawing to Code" subtitle="See your design come to life" />
          </div>
        </Slide>

        {/* Slide 4: What are Agents? */}
        <Slide active={currentSlide === 4}>
          <SectionLabel>Foundations</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">What are Agents?</h2>
          <p className="text-lg text-slate-500 mb-8">AI systems that can reason, plan, and take actions autonomously</p>

          <div className="grid grid-cols-3 gap-6">
            <ConceptCard icon="🧠" title="Reasoning" description="LLM thinks through problems step-by-step" />
            <ConceptCard icon="🛠️" title="Tool Use" description="Can call APIs, search, execute code" highlighted />
            <ConceptCard icon="🔄" title="Autonomy" description="Decides what to do next based on results" />
          </div>

          <div className="mt-8 bg-slate-100 rounded-xl p-5 text-center border-l-4 border-blue-500">
            <p className="text-slate-700"><strong>Agent = LLM + Tools + Loop</strong> — The agent keeps running until the task is complete</p>
          </div>
        </Slide>

        {/* Slide 5: Agents vs Workflows */}
        <Slide active={currentSlide === 5}>
          <SectionLabel>Foundations</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">Agents vs Workflows</h2>
          <p className="text-lg text-slate-500 mb-8">Two patterns for building AI applications</p>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-slate-100 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">📋 Workflow (Deterministic)</h4>
              <div className="space-y-2">
                <FlowStep>Input</FlowStep>
                <FlowArrow />
                <FlowStep>Step 1: Extract</FlowStep>
                <FlowArrow />
                <FlowStep>Step 2: Process</FlowStep>
                <FlowArrow />
                <FlowStep>Step 3: Format</FlowStep>
                <FlowArrow />
                <FlowStep>Output</FlowStep>
              </div>
              <p className="text-sm text-slate-500 mt-4">Fixed path, predictable, good for structured tasks</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">🤖 Agent (Dynamic)</h4>
              <div className="space-y-2">
                <FlowStep>Input</FlowStep>
                <FlowArrow />
                <FlowStep highlighted>Think → Act → Observe</FlowStep>
                <div className="text-center text-blue-500 text-xl">🔄</div>
                <FlowStep highlighted>Loop until done</FlowStep>
                <FlowArrow />
                <FlowStep>Output</FlowStep>
              </div>
              <p className="text-sm text-slate-500 mt-4">Flexible path, adaptive, good for open-ended tasks</p>
            </div>
          </div>
        </Slide>

        {/* Slide 6: Multi-Agent Systems */}
        <Slide active={currentSlide === 6}>
          <SectionLabel>Foundations</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">What are Multi-Agent Systems?</h2>
          <p className="text-lg text-slate-500 mb-8">Multiple specialized agents working together on complex tasks</p>

          <div className="grid grid-cols-2 gap-10">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Why Multi-Agent?</h3>
              <ul className="space-y-3">
                <li className="py-2 border-b border-slate-100 text-slate-600"><strong>Specialization</strong> — Each agent is an expert</li>
                <li className="py-2 border-b border-slate-100 text-slate-600"><strong>Modularity</strong> — Easy to add/remove agents</li>
                <li className="py-2 border-b border-slate-100 text-slate-600"><strong>Scalability</strong> — Divide and conquer complex tasks</li>
                <li className="py-2 text-slate-600"><strong>Reliability</strong> — Agents can check each other</li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <svg width="320" height="200" viewBox="0 0 320 200">
                <path d="M160 55 Q160 85, 60 105" stroke="#4285f4" strokeWidth="2" fill="none"/>
                <path d="M160 55 L160 105" stroke="#4285f4" strokeWidth="2" fill="none"/>
                <path d="M160 55 Q160 85, 260 105" stroke="#4285f4" strokeWidth="2" fill="none"/>
                <polygon points="56,102 64,102 60,112" fill="#4285f4"/>
                <polygon points="156,102 164,102 160,112" fill="#4285f4"/>
                <polygon points="256,102 264,102 260,112" fill="#4285f4"/>
                <rect x="85" y="15" width="150" height="40" rx="8" fill="#4285f4"/>
                <text x="160" y="42" textAnchor="middle" fontSize="14" fontWeight="600" fill="white">Supervisor</text>
                <rect x="10" y="112" width="100" height="36" rx="6" fill="#e8f0fe" stroke="#4285f4" strokeWidth="2"/>
                <text x="60" y="136" textAnchor="middle" fontSize="12" fontWeight="500" fill="#4285f4">Researcher</text>
                <rect x="110" y="112" width="100" height="36" rx="6" fill="#e8f0fe" stroke="#4285f4" strokeWidth="2"/>
                <text x="160" y="136" textAnchor="middle" fontSize="12" fontWeight="500" fill="#4285f4">Writer</text>
                <rect x="210" y="112" width="100" height="36" rx="6" fill="#e8f0fe" stroke="#4285f4" strokeWidth="2"/>
                <text x="260" y="136" textAnchor="middle" fontSize="12" fontWeight="500" fill="#4285f4">Coder</text>
                <path d="M45 112 Q15 65, 85 42" stroke="#4285f4" strokeWidth="1.5" fill="none" strokeDasharray="4,3" opacity="0.5"/>
                <path d="M275 112 Q305 65, 235 42" stroke="#4285f4" strokeWidth="1.5" fill="none" strokeDasharray="4,3" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </Slide>

        {/* Slide 7: What is LangGraph */}
        <Slide active={currentSlide === 7}>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/slides/multi-agent-systems/week1/langgraph-logo.svg"
              alt="LangGraph"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
          </div>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">What is LangGraph?</h2>
          <p className="text-lg text-slate-500 mb-8">A Python library for building stateful, multi-agent applications — build both workflows AND agents with one framework</p>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-lg mb-3">🧩</div>
                <h4 className="font-semibold mb-2">Part of LangChain Ecosystem</h4>
                <p className="text-slate-500 text-sm">LangChain = building blocks | LangGraph = orchestration</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg mb-3">⚡</div>
                <h4 className="font-semibold mb-2">Quick Start</h4>
                <CodeBlock small>{`# Install
pip install langgraph langchain-openai`}</CodeBlock>
              </div>
            </div>

            <div className="flex justify-center">
              <svg width="340" height="320" viewBox="0 0 340 320">
                <path d="M170 50 L170 72" stroke="#4285f4" strokeWidth="2" fill="none"/>
                <polygon points="166,70 174,70 170,80" fill="#4285f4"/>
                <path d="M170 120 Q170 150, 85 165" stroke="#4285f4" strokeWidth="2" fill="none"/>
                <path d="M170 120 Q170 150, 255 165" stroke="#4285f4" strokeWidth="2" fill="none"/>
                <polygon points="81,162 89,162 85,172" fill="#4285f4"/>
                <polygon points="251,162 259,162 255,172" fill="#4285f4"/>
                <path d="M85 210 Q85 245, 170 260" stroke="#4285f4" strokeWidth="2" fill="none"/>
                <path d="M255 210 Q255 245, 170 260" stroke="#4285f4" strokeWidth="2" fill="none"/>
                <polygon points="166,258 174,258 170,268" fill="#34a853"/>
                <rect x="95" y="10" width="150" height="40" rx="8" fill="#f8f9fa" stroke="#dadce0" strokeWidth="2"/>
                <text x="170" y="36" textAnchor="middle" fontSize="13" fontWeight="500" fill="#202124">User Input</text>
                <rect x="95" y="80" width="150" height="40" rx="8" fill="#4285f4"/>
                <text x="170" y="106" textAnchor="middle" fontSize="13" fontWeight="600" fill="white">Supervisor</text>
                <rect x="10" y="172" width="150" height="38" rx="8" fill="#e8f0fe" stroke="#4285f4" strokeWidth="2"/>
                <text x="85" y="197" textAnchor="middle" fontSize="13" fontWeight="500" fill="#4285f4">Researcher</text>
                <rect x="180" y="172" width="150" height="38" rx="8" fill="#e8f0fe" stroke="#4285f4" strokeWidth="2"/>
                <text x="255" y="197" textAnchor="middle" fontSize="13" fontWeight="500" fill="#4285f4">Writer</text>
                <rect x="95" y="268" width="150" height="40" rx="8" fill="#34a853"/>
                <text x="170" y="294" textAnchor="middle" fontSize="13" fontWeight="600" fill="white">Response</text>
              </svg>
            </div>
          </div>
        </Slide>

        {/* Slide 8: Graph Anatomy */}
        <Slide active={currentSlide === 8}>
          <SectionLabel>LangGraph</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">Graph Anatomy</h2>
          <p className="text-lg text-slate-500 mb-8">Three building blocks power every LangGraph application</p>

          <div className="grid grid-cols-3 gap-6">
            <BuildingBlock icon="📓" title="STATE" description="The shared memory that all nodes can read and write to. Think of it as a notebook passed between agents.">
              <CodeBlock small>{`{messages: [], data: {}}`}</CodeBlock>
            </BuildingBlock>
            <BuildingBlock icon="⚡" title="NODES" description="Python functions that do the work. Each node reads state, performs actions (LLM calls, tools), and returns updates.">
              <CodeBlock small>{`def node(state): ...`}</CodeBlock>
            </BuildingBlock>
            <BuildingBlock icon="🔀" title="EDGES" description="Connections that define flow between nodes. Can be fixed (A→B) or conditional (if X then A, else B).">
              <CodeBlock small>{`add_edge(A, B)`}</CodeBlock>
            </BuildingBlock>
          </div>
        </Slide>

        {/* Slide 9: Code Example */}
        <Slide active={currentSlide === 9}>
          <SectionLabel>LangGraph</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-6">Graph Anatomy in Code</h2>

          <div className="grid grid-cols-[1fr_240px] gap-10">
            <div>
              <CodeBlock>{`class State(TypedDict):
    messages: Annotated[list, operator.add]

def echo_node(state):
    return {"messages": [AIMessage("Echo!")]}

graph.add_node("echo", echo_node)
graph.add_edge(START, "echo")`}</CodeBlock>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                <p className="text-amber-800 text-sm font-semibold mb-2">🔑 What&apos;s <code className="bg-amber-200 px-2 py-0.5 rounded">Annotated[list, operator.add]</code>?</p>
                <p className="text-amber-700 text-sm">It means: &quot;This is a list, and when nodes return updates, <strong>APPEND</strong> them instead of replacing.&quot; Without it, each node would overwrite previous messages!</p>
              </div>

              <div className="bg-slate-100 rounded-xl p-4 mt-3 border-l-4 border-blue-500">
                <p className="text-sm mb-1"><strong>Input:</strong> <code className="bg-slate-200 px-2 py-0.5 rounded">{`{"messages": [Human("hi")]}`}</code></p>
                <p className="text-sm text-green-700"><strong>Output:</strong> <code className="bg-green-100 px-2 py-0.5 rounded">{`{"messages": [Human("hi"), AI("Echo!")]}`}</code></p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-6 flex flex-col items-center gap-3">
              <div className="bg-slate-200 rounded-xl px-6 py-3 text-center font-medium">START</div>
              <span className="text-blue-500 text-xl">↓</span>
              <div className="bg-blue-500 text-white rounded-xl px-6 py-3 text-center font-medium">echo</div>
              <span className="text-blue-500 text-xl">↓</span>
              <div className="bg-slate-200 rounded-xl px-6 py-3 text-center font-medium">END</div>
            </div>
          </div>
        </Slide>

        {/* Slide 10: Thinking in LangGraph */}
        <Slide active={currentSlide === 10}>
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">Thinking in LangGraph</h2>
          <p className="text-lg text-slate-500 mb-8">5 steps to design any LangGraph agent</p>

          <div className="grid grid-cols-5 gap-4">
            <ProcessStep number={1} title="Map Workflow" description="Identify discrete steps → each becomes a node" />
            <ProcessStep number={2} title="Define Node Types" description="LLM calls, data fetch, actions, or human input?" />
            <ProcessStep number={3} title="Design State" description="What data needs to persist across steps?" />
            <ProcessStep number={4} title="Build Nodes" description="Functions that read state, act, return updates" />
            <ProcessStep number={5} title="Wire Together" description="Connect nodes with edges (fixed or conditional)" />
          </div>

          <div className="mt-8 bg-slate-100 rounded-xl p-5 text-center border-l-4 border-blue-500">
            <p className="text-slate-700"><strong>Key insight:</strong> Start with the process you want to automate, then break it into discrete steps</p>
          </div>
        </Slide>

        {/* Slide 11: Hands-On Exercise */}
        <Slide active={currentSlide === 11}>
          <SectionLabel>Workshop</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">Hands-On: Design Your Agent</h2>
          <p className="text-lg text-slate-500 mb-8">Think through this problem — we&apos;ll guide you through the solution next</p>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Your Task: Customer Support Router</h3>
              <p className="text-slate-600 mb-4">Design a multi-agent system that routes incoming support messages to the right team</p>
              <ul className="space-y-2 text-slate-600">
                <li>• Classify messages by type (technical, billing, or general)</li>
                <li>• Route to the appropriate support team</li>
                <li>• Each team handles the request and responds</li>
              </ul>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 text-center border-l-4 border-blue-500 mt-8">
              <p className="text-slate-700"><strong>💭 Think:</strong> What are the discrete steps? What data needs to flow between them?</p>
            </div>
          </div>
        </Slide>

        {/* Slide 12: Homework */}
        <Slide active={currentSlide === 12}>
          <SectionLabel>Assignment</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">Homework: Build Your First Graph</h2>
          <p className="text-lg text-slate-500 mb-8">Implement the Customer Support Router you designed in class</p>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl font-semibold mb-6">HW1 Requirements</h3>
            <ul className="space-y-4">
              <ChecklistItem>Define State with messages and ticket_category</ChecklistItem>
              <ChecklistItem>Build 4 nodes: classifier, technical, billing, general</ChecklistItem>
              <ChecklistItem>Use conditional edges to route based on classification</ChecklistItem>
              <ChecklistItem>Visualize your graph and test with 3+ different inputs</ChecklistItem>
              <ChecklistItem>Push to GitHub + share your graph diagram</ChecklistItem>
            </ul>
          </div>

          <div className="bg-slate-100 rounded-xl p-5 text-center border-l-4 border-blue-500 mt-6 max-w-2xl mx-auto">
            <p className="text-slate-700"><strong>Office Hours:</strong> Make sure to join next week — we&apos;ll review your graphs and answer questions!</p>
          </div>
        </Slide>

        {/* Slide 13: Q&A */}
        <Slide active={currentSlide === 13}>
          <div className="text-center py-16">
            <div className="text-6xl mb-6">💬</div>
            <h2 className="text-5xl font-semibold text-slate-900 mb-4">Questions & Answers</h2>
            <p className="text-xl text-slate-500 mb-12">Let&apos;s discuss what we&apos;ve learned today</p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg text-slate-700"><strong>Next Week:</strong> Single-agent mastery → Your drawing becomes REAL agents!</p>
            </div>
          </div>
        </Slide>
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-xl border border-slate-200 z-50">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors text-lg"
        >
          ←
        </button>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="px-3 py-1 font-mono text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {currentSlide} / {TOTAL_SLIDES}
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors text-lg"
        >
          →
        </button>
      </nav>

      {/* Slide menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center" onClick={() => setShowMenu(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-4">Jump to Slide</h3>
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => goToSlide(n)}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                    currentSlide === n
                      ? "bg-blue-500 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Components
function Slide({ active, children }: { active: boolean; children: React.ReactNode }) {
  if (!active) return null;
  return (
    <div className="w-full max-w-5xl px-10 py-16 animate-fadeIn">
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
      {children}
    </div>
  );
}

function TimelineItem({ color, last, children }: { color: string; last: boolean; children: React.ReactNode }) {
  const colors: Record<string, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  };
  return (
    <div className="flex gap-5 py-5">
      <div className="flex flex-col items-center min-w-[40px]">
        <div className={`w-3 h-3 rounded-full ${colors[color]}`} />
        {!last && <div className="w-0.5 flex-1 bg-slate-200 mt-2" />}
      </div>
      <div>{children}</div>
    </div>
  );
}

function AgendaItem({ number, color, title, subtitle }: { number: number; color: string; title: string; subtitle: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4">
      <div className={`w-8 h-8 ${color} text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0`}>
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

function ConceptCard({ icon, title, description, highlighted }: { icon: string; title: string; description: string; highlighted?: boolean }) {
  return (
    <div className={`rounded-2xl p-8 text-center border ${highlighted ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300" : "bg-white border-slate-200"}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-500">{description}</p>
    </div>
  );
}

function FlowStep({ children, highlighted }: { children: React.ReactNode; highlighted?: boolean }) {
  return (
    <div className={`rounded-lg px-4 py-3 text-center text-sm border ${highlighted ? "bg-blue-500 text-white border-blue-500" : "bg-white border-slate-200"}`}>
      {children}
    </div>
  );
}

function FlowArrow() {
  return <div className="text-center text-blue-500 text-lg">↓</div>;
}

function BuildingBlock({ icon, title, description, children }: { icon: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-7 text-center hover:shadow-lg transition-shadow">
      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-500 mb-4">{description}</p>
      {children}
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="bg-slate-100 rounded-xl p-5 text-center">
      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mx-auto mb-3">{number}</div>
      <h4 className="font-semibold mb-2 text-sm">{title}</h4>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-slate-700">
      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
      {children}
    </li>
  );
}

function CodeBlock({ children, small }: { children: string; small?: boolean }) {
  return (
    <div className={`bg-slate-900 rounded-lg ${small ? "p-3 text-xs" : "p-5 text-sm"} font-mono text-slate-200 overflow-x-auto`}>
      <pre className="whitespace-pre">{children}</pre>
    </div>
  );
}
