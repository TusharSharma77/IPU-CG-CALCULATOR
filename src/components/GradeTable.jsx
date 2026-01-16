import { Book, BookOpen } from "lucide-react"

const GradeTable = () => {
  const gradeData = [
    { marks: "90-100", grade: "O", point: 10 },
    { marks: "75-89", grade: "A+", point: 9 },
    { marks: "65-74", grade: "A", point: 8 },
    { marks: "55-64", grade: "B+", point: 7 },
    { marks: "50-54", grade: "B", point: 6 },
    { marks: "45-49", grade: "C", point: 5 },
    { marks: "40-44", grade: "P", point: 4 },
    { marks: "0-39", grade: "F", point: 0 },
  ]

  return (
    <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border-2 border-cyan-200/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <h3 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 rounded-2xl shadow-xl">
          </div>
          <span className="bg-gradient-to-r from-cyan-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">IPU Grading System</span>
        </h3>
        <div className="overflow-x-auto rounded-2xl border-2 border-cyan-200/50 shadow-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white">
                <th className="px-8 py-5 text-left font-black text-xl rounded-tl-2xl">Marks Range</th>
                <th className="px-8 py-5 text-center font-black text-xl">Grade</th>
                <th className="px-8 py-5 text-center font-black text-xl rounded-tr-2xl">Grade Point</th>
              </tr>
            </thead>
            <tbody>
              {gradeData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-b-2 border-cyan-100 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 transition-all duration-200 ${
                    index === gradeData.length - 1 ? 'rounded-bl-2xl rounded-br-2xl' : ''
                  } ${index % 2 === 0 ? 'bg-white' : 'bg-cyan-50/50'}`}
                >
                  <td className="px-8 py-5 font-black text-gray-900 text-lg">{row.marks}</td>
                  <td className="px-8 py-5 text-center">
                    <span className={`inline-block px-5 py-2.5 rounded-full font-black text-sm shadow-xl ${
                      row.point === 10 ? 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white' :
                      row.point >= 8 ? 'bg-gradient-to-r from-cyan-400 to-teal-500 text-white' :
                      row.point >= 6 ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-white' :
                      row.point >= 4 ? 'bg-gradient-to-r from-pink-400 to-rose-500 text-white' :
                      'bg-gradient-to-r from-pink-500 to-rose-600 text-white'
                    }`}>
                      {row.grade}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-center font-black text-gray-900 text-xl">{row.point}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GradeTable
