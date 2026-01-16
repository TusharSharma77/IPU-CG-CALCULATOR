import { Trash2 } from "lucide-react"
import { getGrade, getGradePoint } from "../utils/calculator"

const SubjectRow = ({ subject, index, onChange, onRemove }) => {
  const grade = getGrade(subject.marks)
  const gradePoint = getGradePoint(subject.marks)

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 border-cyan-200/50 hover:shadow-2xl hover:border-cyan-400/70 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-2xl"></div>
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-center">
          <div className="md:col-span-2">
            <label className="text-xs font-black text-cyan-700 mb-2 block uppercase tracking-wider">Subject Name</label>
            <input
              className="w-full p-3.5 border-2 border-cyan-200 rounded-2xl focus:ring-4 focus:ring-cyan-400/50 focus:border-cyan-500 outline-none transition-all bg-white/80 hover:border-cyan-300 shadow-sm"
              placeholder="e.g., Data Structures"
              value={subject.name}
              onChange={e => onChange("name", e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs font-black text-pink-700 mb-2 block uppercase tracking-wider">Marks (0-100)</label>
            <input
              type="number"
              min="0"
              max="100"
              className="w-full p-3.5 border-2 border-pink-200 rounded-2xl focus:ring-4 focus:ring-pink-400/50 focus:border-pink-500 outline-none transition-all bg-white/80 hover:border-pink-300 shadow-sm"
              placeholder="Marks"
              value={subject.marks || ""}
              onChange={e => onChange("marks", Number(e.target.value))}
            />
          </div>

          <div>
            <label className="text-xs font-black text-orange-700 mb-2 block uppercase tracking-wider">Credits</label>
            <input
              type="number"
              min="0"
              max="10"
              className="w-full p-3.5 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-orange-400/50 focus:border-orange-500 outline-none transition-all bg-white/80 hover:border-orange-300 shadow-sm"
              placeholder="Credits"
              value={subject.credits || ""}
              onChange={e => onChange("credits", Number(e.target.value))}
            />
          </div>

          <div className="flex items-end gap-3">
            <div className="flex-1 text-center bg-gradient-to-br from-cyan-100 via-teal-100 to-cyan-200 rounded-2xl p-4 border-2 border-cyan-300/50 shadow-lg">
              <span className="text-xs font-black text-cyan-800 block mb-2 uppercase tracking-wider">Grade</span>
              <span className={`text-2xl font-black ${gradePoint >= 8 ? 'text-teal-700' : gradePoint >= 6 ? 'text-cyan-700' : gradePoint >= 4 ? 'text-orange-600' : 'text-pink-600'}`}>
                {grade} <span className="text-base">({gradePoint})</span>
              </span>
            </div>
            <button
              onClick={onRemove}
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-3.5 rounded-2xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
              title="Remove Subject"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectRow
