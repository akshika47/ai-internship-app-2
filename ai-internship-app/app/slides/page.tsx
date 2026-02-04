import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  weeks: { id: string; title: string; available: boolean }[];
}

const courses: Course[] = [
  {
    id: "multi-agent-systems",
    title: "Multi-Agent Systems Mastery",
    description: "Build production-ready multi-agent systems with LangGraph",
    weeks: [
      { id: "week1", title: "Week 1: LangGraph Foundations", available: true },
      { id: "week2", title: "Week 2: Single-Agent Mastery", available: false },
      { id: "week3", title: "Week 3: Multi-Agent Orchestration", available: false },
      { id: "week4", title: "Week 4: Production & Capstone", available: false },
    ],
  },
];

export default function SlidesIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Course Slides
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Access all course materials and presentations from The AI Internship
          </p>
        </header>

        <div className="space-y-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">{course.title}</h2>
                <p className="text-indigo-100 mt-1">{course.description}</p>
              </div>

              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {course.weeks.map((week) => (
                    <div key={week.id}>
                      {week.available ? (
                        <Link
                          href={`/slides/${course.id}/${week.id}`}
                          className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
                        >
                          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                            <svg
                              className="w-6 h-6 text-indigo-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600">
                              {week.title}
                            </h3>
                            <p className="text-sm text-slate-500">
                              Click to view slides
                            </p>
                          </div>
                          <svg
                            className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 bg-slate-50 opacity-60">
                          <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-slate-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-500">
                              {week.title}
                            </h3>
                            <p className="text-sm text-slate-400">Coming soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>&copy; 2025 The AI Internship. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
