import { useState } from "react"
import {
  Trash2,
  Plus,
  Calculator,
  TrendingUp,
  Download,
  BookOpen
} from "lucide-react"


import SubjectRow from "./components/subjectRow"
import ResultCard from "./components/ResultCard"
import Analytics from "./components/Analytics"
import GradeTable from "./components/GradeTable"
import { calculateCGPA } from "./utils/calculator"

const App = () => {
  const [subjects, setSubjects] = useState([])
  const [cgpa, setCgpa] = useState(null)

  const addSubject = () => {
    setSubjects([...subjects, { name: "", marks: 0, credits: 0 }])
  }

  const updateSubject = (index, key, value) => {
    const updated = [...subjects]
    updated[index][key] = value
    setSubjects(updated)
  }

  const removeSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index))
  }

  const calculate = () => {
    if (subjects.length === 0) {
      alert("Please add at least one subject!")
      return
    }
    setCgpa(calculateCGPA(subjects))
  }

  const clearAll = () => {
    if (confirm("Are you sure you want to clear all subjects?")) {
      setSubjects([])
      setCgpa(null)
    }
  }

  const exportData = () => {
    const data = {
      subjects,
      cgpa,
      date: new Date().toLocaleDateString()
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `ipu-cgpa-${Date.now()}.json`
    a.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 via-pink-50 to-orange-50 py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-4 drop-shadow-2xl tracking-tight">
              IPU CGPA Calculator
            </h1>
          </div>
          <p className="text-gray-800 text-xl font-semibold bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full inline-block border-2 border-cyan-200/50">
             Calculate your CGPA with  Precision
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-8 border-2 border-cyan-200/30 relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-400/20 to-rose-400/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <span className="bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">Your Subjects</span>
              </h2>
              {subjects.length > 0 && (
                <button
                  onClick={exportData}
                  className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white px-6 py-3 rounded-2xl hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold text-sm"
                >
                  <Download size={18} />
                  Export Data
                </button>
              )}
            </div>

          <div className="space-y-3 mb-4">
            {subjects.map((sub, i) => (
              <SubjectRow
                key={i}
                subject={sub}
                index={i}
                onChange={(key, value) => updateSubject(i, key, value)}
                onRemove={() => removeSubject(i)}
              />
            ))}
          </div>

          {subjects.length === 0 && (
            <div className="text-center py-20 text-gray-600 relative z-10">
              <div className="inline-block p-6 bg-gradient-to-br from-cyan-200 via-pink-200 to-orange-200 rounded-3xl mb-6 shadow-xl border-2 border-cyan-300/50">
                <BookOpen size={64} className="text-cyan-600" />
              </div>
              <p className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">No subjects added yet. Click "Add Subject" to begin!</p>
            </div>
          )}

          <div className="flex flex-wrap gap-5 mt-10 relative z-10">
            <button
              onClick={addSubject}
              className="flex-1 min-w-[220px] bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white px-8 py-4 rounded-2xl hover:from-cyan-600 hover:via-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-3 font-black text-lg shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-2 hover:scale-105"
            >
              <Plus size={24} />
              Add Subject
            </button>

            <button
              onClick={calculate}
              className="flex-1 min-w-[220px] bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-8 py-4 rounded-2xl hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-3 font-black text-lg shadow-2xl hover:shadow-pink-500/50 transform hover:-translate-y-2 hover:scale-105"
            >
              <Calculator size={24} />
              Calculate CGPA
            </button>

            {subjects.length > 0 && (
              <button
                onClick={clearAll}
                className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white px-8 py-4 rounded-2xl hover:from-orange-600 hover:via-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-3 font-black text-lg shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2 hover:scale-105"
              >
                <Trash2 size={24} />
                Clear All
              </button>
            )}
          </div>
          </div>
        </div>

        {cgpa && <ResultCard cgpa={cgpa} subjects={subjects} />}
        {cgpa && <Analytics subjects={subjects} />}
        <GradeTable />
      </div>
    </div>
  )
}

export default App
