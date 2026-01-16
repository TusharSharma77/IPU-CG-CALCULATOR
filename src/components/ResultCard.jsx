import { Award } from "lucide-react"

const ResultCard = ({ cgpa, subjects }) => {
  let message = "Needs Improvement "
  let bgColor = "bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200"
  let textColor = "text-pink-700"
  let borderColor = "border-pink-400"

  if (cgpa >= 9) {
    message = "Outstanding Performance! "
    bgColor = "bg-gradient-to-br from-cyan-100 via-teal-100 to-cyan-200"
    textColor = "text-cyan-800"
    borderColor = "border-cyan-400"
  } else if (cgpa >= 8) {
    message = "Excellent Work! "
    bgColor = "bg-gradient-to-br from-teal-100 via-cyan-100 to-teal-200"
    textColor = "text-teal-800"
    borderColor = "border-teal-400"
  } else if (cgpa >= 7) {
    message = "Good Performance! "
    bgColor = "bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200"
    textColor = "text-orange-800"
    borderColor = "border-orange-400"
  } else if (cgpa >= 6) {
    message = "Average Performance "
    bgColor = "bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200"
    textColor = "text-pink-800"
    borderColor = "border-pink-400"
  }

  const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0)

  return (
    <div className={`${bgColor} p-12 rounded-3xl shadow-2xl border-4 ${borderColor} mb-8 backdrop-blur-xl relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-400/30 to-rose-400/30 rounded-full blur-3xl"></div>
      <div className="relative text-center z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="p-4 bg-white/50 backdrop-blur-md rounded-full shadow-xl border-2 border-white/70">
            <Award className={textColor} size={48} />
          </div>
          <h2 className="text-7xl font-black drop-shadow-2xl">
          <span className="bg-gradient-to-r from-neutral-200 via-neutral-500 to-neutral-800 bg-clip-text text-transparent font-bold">
  {cgpa}
</span>



          </h2>
        </div>
        <p className="text-3xl font-black mb-8 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">{message}</p>
        <div className="flex justify-center gap-6 text-lg">
          <div className="bg-white/60 backdrop-blur-md px-8 py-4 rounded-2xl border-2 border-white/70 shadow-xl">
            <span className="text-gray-800 font-bold">Total Credits: </span>
            <span className="font-black text-gray-900 text-xl">{totalCredits}</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md px-8 py-4 rounded-2xl border-2 border-white/70 shadow-xl">
            <span className="text-gray-800 font-bold">Subjects: </span>
            <span className="font-black text-gray-900 text-xl">{subjects.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
