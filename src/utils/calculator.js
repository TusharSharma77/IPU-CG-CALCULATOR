export const getGradePoint = (marks) => {
  if (marks >= 90) return 10
  if (marks >= 75) return 9
  if (marks >= 65) return 8
  if (marks >= 55) return 7
  if (marks >= 50) return 6
  if (marks >= 45) return 5
  if (marks >= 40) return 4
  return 0
}

export const getGrade = (marks) => {
  if (marks >= 90) return "O"
  if (marks >= 75) return "A+"
  if (marks >= 65) return "A"
  if (marks >= 55) return "B+"
  if (marks >= 50) return "B"
  if (marks >= 45) return "C"
  if (marks >= 40) return "P"
  return "F"
}

export const calculateCGPA = (subjects) => {
  let totalCredits = 0
  let totalPoints = 0

  subjects.forEach(sub => {
    const gp = getGradePoint(sub.marks)
    totalPoints += gp * sub.credits
    totalCredits += sub.credits
  })

  if (totalCredits === 0) return "0.00"
  return (totalPoints / totalCredits).toFixed(2)
}
