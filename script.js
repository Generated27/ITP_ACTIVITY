function downloadResume() {
  const text = `
Resume - Gener Cardenas

Address: Zone 4, Camarao, Narvacan, Ilocos Sur
Phone: 09534321404
Email: cardenasgener65@gmail.com

CAREER OBJECTIVES
Seeking a web development role to create user-friendly websites and improve online experiences.

PERSONAL BACKGROUND
Date of Birth: September 8, 2005
Place of Birth: Vigan City
Civil Status: Single
Citizenship: Filipino
Religion: Roman Catholic
Height: 1.72m
Weight: 71kg
Father: Reynante Cardenas
Mother: Guadalope Cardenas

EDUCATIONAL BACKGROUND
Primary: Lungog Integrated School (2010–2017)
Secondary: Narvacan National Central High School (2017–2023)
Tertiary: Ilocos Sur Community College (2023–2027)

PROFESSIONAL STRENGTHS
- Ability to learn new technologies and adapt to changing environments
- Ensuring accuracy and precision in coding, testing, and documentation
- Fast learner and very willing to persevere and learn new ideas
`

  const blob = new Blob([text], { type: "text/plain" })
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = "Gener_Cardenas_Resume.txt"
  link.click()
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".resume-section")

  sections.forEach((section, index) => {
    section.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`
    section.style.opacity = "0"
  })
})

// Add animation keyframes
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)
