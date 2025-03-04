// Questions array with weights - using the original 25 questions
const questions = [
    {
      id: 1,
      text: "Do you experience chest pain or discomfort?",
      type: "choice",
      weight: 3,
      guidance: "Consider any type of discomfort, pressure, squeezing, or pain in the chest area.",
    },
    {
      id: 2,
      text: "Do you often feel short of breath?",
      type: "choice",
      weight: 2,
      guidance: "Consider if you feel breathless during normal activities, at rest, or when lying down.",
    },
    {
      id: 3,
      text: "Do you have high blood pressure?",
      type: "choice",
      weight: 2,
      guidance: "High blood pressure is typically 130/80 mmHg or higher.",
    },
    {
      id: 4,
      text: "What is your age?",
      type: "number",
      min: 18,
      max: 120,
      weight: 1,
      guidance: "Heart disease risk increases with age, especially after 45 for men and 55 for women.",
    },
    {
      id: 5,
      text: "What is your BMI?",
      type: "number",
      min: 10,
      max: 50,
      weight: 1,
      guidance: "Healthy BMI range is 18.5-24.9. Calculate: weight(kg) / height(m)²",
    },
    {
      id: 6,
      text: "Do you smoke?",
      type: "choice",
      weight: 2,
      guidance: "Include all tobacco products, e-cigarettes, and exposure to secondhand smoke.",
    },
    {
      id: 7,
      text: "Do you have diabetes?",
      type: "choice",
      weight: 2,
      guidance: "Include both Type 1 and Type 2 diabetes.",
    },
    {
      id: 8,
      text: "Do you have a family history of heart disease?",
      type: "choice",
      weight: 2,
      guidance:
        "Consider parents, siblings, or grandparents who had heart disease, especially at a young age (before 55 for men, 65 for women).",
    },
    {
      id: 9,
      text: "How often do you exercise?",
      type: "choice",
      options: ["Never", "Occasionally", "Regularly"],
      weight: 1,
      guidance: "Regularly means at least 150 minutes of moderate activity per week.",
    },
    {
      id: 10,
      text: "How would you describe your diet?",
      type: "choice",
      options: ["Poor", "Average", "Healthy"],
      weight: 1,
      guidance:
        "A healthy diet includes plenty of fruits, vegetables, whole grains, lean proteins, and limits processed foods, salt, and sugar.",
    },
    {
      id: 11,
      text: "Do you experience palpitations or irregular heartbeats?",
      type: "choice",
      weight: 2,
      guidance: "Palpitations feel like your heart is racing, fluttering, pounding, or skipping beats.",
    },
    {
      id: 12,
      text: "Do you have high cholesterol?",
      type: "choice",
      weight: 2,
      guidance: "Total cholesterol above 200 mg/dL is considered elevated.",
    },
    {
      id: 13,
      text: "How would you rate your stress level?",
      type: "choice",
      options: ["Low", "Moderate", "High"],
      weight: 1,
      guidance: "Consider work, school, family, and financial stressors in your daily life.",
    },
    {
      id: 14,
      text: "Do you consume alcohol?",
      type: "choice",
      options: ["Never", "Occasionally", "Regularly"],
      weight: 1,
      guidance: "Moderate drinking is up to 1 drink per day for women and up to 2 drinks per day for men.",
    },
    {
      id: 15,
      text: "How many hours of sleep do you get on average?",
      type: "number",
      min: 1,
      max: 24,
      weight: 1,
      guidance: "Adults need 7-9 hours of sleep per night for optimal health.",
    },
    {
      id: 16,
      text: "Do you have a sedentary lifestyle?",
      type: "choice",
      weight: 2,
      guidance: "Sedentary means sitting or lying down for long periods (more than 6-8 hours per day).",
    },
    {
      id: 17,
      text: "Have you ever had a stroke?",
      type: "choice",
      weight: 3,
      guidance: "Include mini-strokes or TIAs (Transient Ischemic Attacks).",
    },
    {
      id: 18,
      text: "Do you have any autoimmune diseases?",
      type: "choice",
      weight: 1,
      guidance: "Examples include rheumatoid arthritis, lupus, or psoriasis.",
    },
    {
      id: 19,
      text: "Are you overweight or obese?",
      type: "choice",
      weight: 2,
      guidance: "Overweight is a BMI of 25-29.9, and obesity is a BMI of 30 or higher.",
    },
    {
      id: 20,
      text: "Do you experience swelling in your legs or ankles?",
      type: "choice",
      weight: 1,
      guidance: "Especially swelling that gets worse during the day or after sitting/standing for long periods.",
    },
    {
      id: 21,
      text: "How would you rate your overall health?",
      type: "choice",
      options: ["Poor", "Fair", "Good", "Excellent"],
      weight: 1,
      guidance: "Consider your physical and mental health compared to others your age.",
    },
    {
      id: 22,
      text: "Do you have a history of heart attacks?",
      type: "choice",
      weight: 3,
      guidance: "Include any previous heart attacks, no matter how mild.",
    },
    {
      id: 23,
      text: "Are you taking any medications for heart-related issues?",
      type: "choice",
      weight: 2,
      guidance: "Include blood pressure medications, cholesterol medications, blood thinners, etc.",
    },
    {
      id: 24,
      text: "Do you experience fatigue or weakness during physical activities?",
      type: "choice",
      weight: 1,
      guidance: "Consider unusual tiredness or weakness that limits your activities.",
    },
    {
      id: 25,
      text: "How would you rate your knowledge about heart health?",
      type: "choice",
      options: ["Poor", "Average", "Good", "Excellent"],
      weight: 1,
      guidance: "Consider your understanding of heart disease risk factors and prevention strategies.",
    },
  ]
  
  let currentQuestion = 0
  let userResponses = {}
  let userName = ""
  let assessmentDate = new Date()
  
  // DOM Elements
  const landingSection = document.getElementById("landing")
  const questionnaireSection = document.getElementById("questionnaire")
  const resultsSection = document.getElementById("results")
  const historySection = document.getElementById("history")
  const nameForm = document.getElementById("name-form")
  const questionContainer = document.getElementById("question-container")
  const rangeGuideContainer = document.getElementById("range-guide-container")
  const prevButton = document.getElementById("prev-question")
  const nextButton = document.getElementById("next-question")
  const progressBar = document.getElementById("progress")
  const questionNumber = document.getElementById("question-number")
  const restartButton = document.getElementById("restart")
  const printResultsButton = document.getElementById("print-results")
  const saveResultsButton = document.getElementById("save-results")
  const viewHistoryButton = document.getElementById("view-history")
  const closeHistoryButton = document.getElementById("close-history")
  
  // Event Listeners
  nameForm.addEventListener("submit", startQuestionnaire)
  prevButton.addEventListener("click", showPreviousQuestion)
  nextButton.addEventListener("click", showNextQuestion)
  restartButton.addEventListener("click", restartQuestionnaire)
  printResultsButton.addEventListener("click", printResults)
  saveResultsButton.addEventListener("click", saveResults)
  viewHistoryButton.addEventListener("click", viewHistory)
  closeHistoryButton.addEventListener("click", closeHistory)
  
  function startQuestionnaire(e) {
    e.preventDefault()
    userName = document.getElementById("user-name").value.trim()
  
    if (userName) {
      landingSection.classList.remove("active")
      landingSection.classList.add("hidden")
      questionnaireSection.classList.remove("hidden")
      questionnaireSection.classList.add("active")
  
      assessmentDate = new Date()
      showQuestion(currentQuestion)
    } else {
      alert("Please enter your name before starting the questionnaire.")
    }
  }
  
  function showQuestion(index) {
    const question = questions[index]
    let html = `<h3 class="animate-fade-in">${question.text}</h3>`
  
    if (question.type === "choice") {
      if (question.options) {
        html += `<select id="q${question.id}" required class="animate-slide-up">
                  <option value="">Select an option</option>
                  ${question.options.map((option) => `<option value="${option}">${option}</option>`).join("")}
              </select>`
      } else {
        html += `<div class="radio-group animate-slide-up">
                  <label class="radio-option"><input type="radio" name="q${question.id}" value="Yes" required> Yes</label>
                  <label class="radio-option"><input type="radio" name="q${question.id}" value="No" required> No</label>
                  <label class="radio-option"><input type="radio" name="q${question.id}" value="Sometimes" required> Sometimes</label>
              </div>`
      }
    } else if (question.type === "number") {
      html += `<input type="number" id="q${question.id}" min="${question.min}" max="${question.max}" required class="animate-slide-up">
                  <span class="range-guide">Range: ${question.min} - ${question.max}</span>`
    }
  
    questionContainer.innerHTML = html
  
    // Set previous response if exists
    if (userResponses[question.id]) {
      const response = userResponses[question.id]
      if (question.type === "choice") {
        if (question.options) {
          document.getElementById(`q${question.id}`).value = response
        } else {
          document.querySelector(`input[name="q${question.id}"][value="${response}"]`).checked = true
        }
      } else if (question.type === "number") {
        document.getElementById(`q${question.id}`).value = response
      }
    }
  
    // Show guidance
    rangeGuideContainer.textContent = question.guidance || ""
    rangeGuideContainer.classList.add("animate-fade-in")
  
    questionContainer.classList.remove("active")
    setTimeout(() => {
      questionContainer.classList.add("active")
    }, 10)
  
    updateProgressBar()
    updateQuestionNumber()
  }
  
  function showNextQuestion() {
    if (validateCurrentQuestion()) {
      saveResponse()
      currentQuestion++
      if (currentQuestion < questions.length) {
        showQuestion(currentQuestion)
      } else {
        showResults()
      }
      updateNavButtons()
    }
  }
  
  function showPreviousQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--
      showQuestion(currentQuestion)
      updateNavButtons()
    }
  }
  
  function validateCurrentQuestion() {
    const question = questions[currentQuestion]
    let input
  
    if (question.type === "choice") {
      if (question.options) {
        input = document.getElementById(`q${question.id}`)
        if (!input.value) {
          alert("Please select an option before proceeding.")
          return false
        }
      } else {
        input = document.querySelector(`input[name="q${question.id}"]:checked`)
        if (!input) {
          alert("Please select an option before proceeding.")
          return false
        }
      }
    } else if (question.type === "number") {
      input = document.getElementById(`q${question.id}`)
      if (!input.value || isNaN(input.value) || input.value < question.min || input.value > question.max) {
        alert(`Please enter a valid number between ${question.min} and ${question.max}.`)
        return false
      }
    }
  
    return true
  }
  
  function saveResponse() {
    const question = questions[currentQuestion]
    let value
  
    if (question.type === "choice") {
      if (question.options) {
        value = document.getElementById(`q${question.id}`).value
      } else {
        value = document.querySelector(`input[name="q${question.id}"]:checked`).value
      }
    } else if (question.type === "number") {
      value = document.getElementById(`q${question.id}`).value
    }
  
    userResponses[question.id] = value
  }
  
  function updateNavButtons() {
    prevButton.disabled = currentQuestion === 0
    nextButton.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Next"
    nextButton.classList.toggle("pulse", currentQuestion === questions.length - 1)
  }
  
  function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100
    progressBar.style.width = `${progress}%`
  }
  
  function updateQuestionNumber() {
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`
  }
  
  function showResults() {
    questionnaireSection.classList.remove("active")
    questionnaireSection.classList.add("hidden")
    resultsSection.classList.remove("hidden")
    resultsSection.classList.add("active")
  
    const { riskLevel, confidenceScore, contributingFactors } = calculateResults()
    const formattedDate = assessmentDate.toLocaleDateString() + " " + assessmentDate.toLocaleTimeString()
  
    document.getElementById("user-greeting").innerHTML = `<h3>Hello, ${userName}!</h3>`
    document.getElementById("assessment-date").innerHTML = `<p>Assessment Date: ${formattedDate}</p>`
  
    const riskHTML = `<h3>Risk Level: <span class="risk-${riskLevel.toLowerCase()}">${riskLevel}</span></h3>`
    document.getElementById("risk-level").innerHTML = riskHTML
  
    document.getElementById("confidence-score").innerHTML = `
          <h3>Prediction Confidence: ${confidenceScore}%</h3>
          <p>This indicates how confident our prediction model is based on the information provided.</p>
      `
  
    document.getElementById("contributing-factors").innerHTML = `
          <h3>Key Contributing Factors:</h3>
          <ul>${contributingFactors.map((factor) => `<li>${factor}</li>`).join("")}</ul>
      `
  
    document.getElementById("recommendations").innerHTML = `
          <h3>Recommendations:</h3>
          ${getRecommendations(riskLevel, contributingFactors)}
      `
  }
  
  function calculateResults() {
    let totalScore = 0
    let maxPossibleScore = 0
    let contributingFactors = []
  
    questions.forEach((question) => {
      const response = userResponses[question.id]
      const weight = question.weight
      maxPossibleScore += weight * 2
  
      if (question.type === "choice") {
        if (
          response === "Yes" ||
          response === "High" ||
          response === "Poor" ||
          (response === "Never" && question.id === 30)
        ) {
          totalScore += weight * 2
          contributingFactors.push(question.text)
        } else if (
          response === "Sometimes" ||
          response === "Moderate" ||
          response === "Average" ||
          response === "Fair" ||
          response === "Occasionally"
        ) {
          totalScore += weight
        }
      } else if (question.type === "number") {
        const value = Number.parseInt(response)
        if (question.id === 4) {
          // Age
          if (value > 65) {
            totalScore += weight * 2
            contributingFactors.push("Advanced age (over 65)")
          } else if (value > 45) {
            totalScore += weight
          }
        } else if (question.id === 5) {
          // BMI
          if (value > 30) {
            totalScore += weight * 2
            contributingFactors.push("Obesity (BMI > 30)")
          } else if (value > 25) {
            totalScore += weight
            contributingFactors.push("Overweight (BMI 25-30)")
          }
        } else if (question.id === 15) {
          // Sleep
          if (value < 6) {
            totalScore += weight * 2
            contributingFactors.push("Insufficient sleep (less than 6 hours)")
          } else if (value < 7) {
            totalScore += weight
          }
        }
      }
    })
  
    const riskPercentage = (totalScore / maxPossibleScore) * 100
    let riskLevel
    if (riskPercentage < 30) {
      riskLevel = "Low"
    } else if (riskPercentage < 60) {
      riskLevel = "Moderate"
    } else {
      riskLevel = "High"
    }
  
    // Limit to top 5 contributing factors
    contributingFactors = contributingFactors.slice(0, 5)
  
    const confidenceScore = Math.min(95, Math.round(75 + (contributingFactors.length / questions.length) * 20))
  
    return { riskLevel, confidenceScore, contributingFactors, riskPercentage }
  }
  
  function getRecommendations(riskLevel, contributingFactors) {
    let recommendations = ""
  
    switch (riskLevel) {
      case "Low":
        recommendations +=
          "<p>Your heart health risk appears to be low. However, it's important to maintain a healthy lifestyle:</p>"
        recommendations += "<ul>"
        recommendations +=
          "<li>Continue with regular exercise, aiming for at least 150 minutes of moderate-intensity activity per week.</li>"
        recommendations +=
          "<li>Maintain a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.</li>"
        recommendations += "<li>Schedule routine check-ups with your healthcare provider.</li>"
        recommendations += "<li>Stay informed about heart health and continue monitoring your risk factors.</li>"
        recommendations += "</ul>"
        break
      case "Moderate":
        recommendations +=
          "<p>Your heart health risk is moderate. Consider the following steps to improve your heart health:</p>"
        recommendations += "<ul>"
        recommendations +=
          "<li>Consult with a healthcare professional to discuss your risk factors and develop a personalized plan.</li>"
        recommendations +=
          "<li>Increase your physical activity if you're not meeting the recommended 150 minutes per week.</li>"
        recommendations +=
          "<li>Focus on heart-healthy eating habits, including reducing sodium and saturated fat intake.</li>"
        recommendations += "<li>If you smoke, consider a smoking cessation program.</li>"
        recommendations += "<li>Monitor your blood pressure, cholesterol, and blood sugar levels regularly.</li>"
        recommendations += "</ul>"
        break
      case "High":
        recommendations +=
          "<p>Your heart health risk is high. It is strongly recommended that you take immediate action:</p>"
        recommendations += "<ul>"
        recommendations +=
          "<li>Schedule an appointment with a cardiologist as soon as possible for a comprehensive evaluation.</li>"
        recommendations +=
          "<li>Follow your healthcare provider's advice regarding medications, lifestyle changes, and follow-up appointments.</li>"
        recommendations +=
          "<li>Make significant changes to your diet, focusing on heart-healthy options and portion control.</li>"
        recommendations += "<li>Engage in regular physical activity as recommended by your doctor.</li>"
        recommendations += "<li>Manage stress through relaxation techniques, meditation, or counseling.</li>"
        recommendations += "<li>If you smoke, quit immediately and seek support if needed.</li>"
        recommendations += "</ul>"
        break
    }
  
    if (contributingFactors.length > 0) {
      recommendations += "<p>Based on your responses, pay special attention to these areas:</p>"
      recommendations += "<ul>"
      contributingFactors.forEach((factor) => {
        recommendations += `<li>${factor}</li>`
      })
      recommendations += "</ul>"
    }
  
    recommendations +=
      "<p>Remember, this assessment is not a substitute for professional medical advice. Always consult with a healthcare provider for personalized recommendations and treatment plans.</p>"
  
    return recommendations
  }
  
  function printResults() {
    window.print()
  }
  
  function saveResults() {
    const { riskLevel, confidenceScore, contributingFactors, riskPercentage } = calculateResults()
  
    const resultData = {
      name: userName,
      date: assessmentDate.toISOString(),
      riskLevel: riskLevel,
      confidenceScore: confidenceScore,
      contributingFactors: contributingFactors,
      riskPercentage: riskPercentage,
      responses: userResponses,
    }
  
    // Get existing history or initialize new array
    const history = JSON.parse(localStorage.getItem("heartDiseaseHistory")) || []
  
    // Add new result to history
    history.push(resultData)
  
    // Save to localStorage
    localStorage.setItem("heartDiseaseHistory", JSON.stringify(history))
  
    alert("Your results have been saved successfully!")
  
    // Show the history button if it was hidden
    document.getElementById("view-history").classList.remove("hidden")
  }
  
  function viewHistory() {
    const historyList = document.getElementById("history-list")
    const noHistory = document.getElementById("no-history")
  
    // Clear previous history
    historyList.innerHTML = ""
  
    // Get history from localStorage
    const history = JSON.parse(localStorage.getItem("heartDiseaseHistory")) || []
  
    if (history.length === 0) {
      noHistory.classList.remove("hidden")
    } else {
      noHistory.classList.add("hidden")
  
      // Sort history by date (newest first)
      history.sort((a, b) => new Date(b.date) - new Date(a.date))
  
      // Create history items
      history.forEach((item, index) => {
        const date = new Date(item.date)
        const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString()
  
        const historyItem = document.createElement("div")
        historyItem.className = "history-item animate-fade-in"
        historyItem.dataset.index = index
  
        historyItem.innerHTML = `
                  <div class="history-item-header">
                      <div class="history-item-name">${item.name}</div>
                      <div class="history-item-date">${formattedDate}</div>
                  </div>
                  <div class="history-item-risk risk-${item.riskLevel.toLowerCase()}">
                      Risk Level: ${item.riskLevel} (${Math.round(item.riskPercentage)}%)
                  </div>
              `
  
        historyItem.addEventListener("click", () => loadHistoryItem(index))
  
        historyList.appendChild(historyItem)
      })
    }
  
    historySection.classList.remove("hidden")
    historySection.classList.add("active")
  }
  
  function loadHistoryItem(index) {
    const history = JSON.parse(localStorage.getItem("heartDiseaseHistory")) || []
    const item = history[index]
  
    if (item) {
      userName = item.name
      userResponses = item.responses
      assessmentDate = new Date(item.date)
  
      closeHistory()
      showResults()
    }
  }
  
  function closeHistory() {
    historySection.classList.remove("active")
    historySection.classList.add("hidden")
  }
  
  function restartQuestionnaire() {
    currentQuestion = 0
    userResponses = {}
    resultsSection.classList.remove("active")
    resultsSection.classList.add("hidden")
    landingSection.classList.remove("hidden")
    landingSection.classList.add("active")
    document.getElementById("user-name").value = ""
  }
  
  // Initialize the app
  document.addEventListener("DOMContentLoaded", () => {
    // Check if there's history
    const history = JSON.parse(localStorage.getItem("heartDiseaseHistory")) || []
    if (history.length === 0) {
      document.getElementById("view-history").classList.add("hidden")
    }
  
    // Add animation classes to elements
    const animateElements = () => {
      const elements = document.querySelectorAll(".btn, .btn-secondary")
      elements.forEach((el) => {
        el.addEventListener("mouseover", function () {
          this.classList.add("animate-bounce")
        })
        el.addEventListener("mouseout", function () {
          this.classList.remove("animate-bounce")
        })
      })
    }
  
    animateElements()
  })
  
  