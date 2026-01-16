import { BarChart3 } from "lucide-react"

const Analytics = ({ subjects }) => {
  if (subjects.length === 0) return null

  const avgMarks = (subjects.reduce((a, b) => a + b.marks, 0) / subjects.length).toFixed(2)
  const best = subjects.reduce((a, b) => (a.marks > b.marks ? a : b))
  const worst = subjects.reduce((a, b) => (a.marks < b.marks ? a : b))
  const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0)
  const passed = subjects.filter(s => s.marks >= 40).length
  const failed = subjects.filter(s => s.marks < 40).length

  return (
    <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border-2 border-cyan-200/50 mb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 rounded-2xl shadow-xl">
            <BarChart3 className="text-white" size={32} />
          </div>
          <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">Performance Analytics</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-cyan-100 via-teal-100 to-cyan-200 p-6 rounded-2xl border-2 border-cyan-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-sm font-black text-cyan-800 mb-3 uppercase tracking-wider">Average Marks</div>
            <div className="text-4xl font-black text-cyan-700">{avgMarks}%</div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-teal-200 p-6 rounded-2xl border-2 border-teal-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-sm font-black text-teal-800 mb-3 uppercase tracking-wider">Best Subject</div>
            <div className="text-xl font-black text-teal-700 mb-2">{best.name || "N/A"}</div>
            <div className="text-lg font-bold text-teal-600">{best.marks}%</div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 p-6 rounded-2xl border-2 border-pink-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-sm font-black text-pink-800 mb-3 uppercase tracking-wider">Needs Improvement</div>
            <div className="text-xl font-black text-pink-700 mb-2">{worst.name || "N/A"}</div>
            <div className="text-lg font-bold text-pink-600">{worst.marks}%</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200 p-6 rounded-2xl border-2 border-orange-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-sm font-black text-orange-800 mb-3 uppercase tracking-wider">Total Credits</div>
            <div className="text-4xl font-black text-orange-700">{totalCredits}</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-100 via-teal-100 to-cyan-200 p-6 rounded-2xl border-2 border-cyan-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-sm font-black text-cyan-800 mb-3 uppercase tracking-wider">Passed Subjects</div>
            <div className="text-4xl font-black text-cyan-700">{passed}</div>
            <div className="text-xs font-bold text-cyan-600 mt-2">out of {subjects.length}</div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 p-6 rounded-2xl border-2 border-pink-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-sm font-black text-pink-800 mb-3 uppercase tracking-wider">Failed Subjects</div>
            <div className="text-4xl font-black text-pink-700">{failed}</div>
            <div className="text-xs font-bold text-pink-600 mt-2">out of {subjects.length}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
