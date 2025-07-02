
document.addEventListener("DOMContentLoaded", () => {
  setupPlanButtons()
  setupFAQ()
})

function setupPlanButtons() {
  const planButtons = document.querySelectorAll(".plan-btn")

  planButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const planType = button.getAttribute("data-plan")
      openSubscriptionModal(planType)
    })
  })
}

function openSubscriptionModal(planType) {
  const plans = {
    basico: {
      name: "Plano Básico",
      price: 49,
      features: ["250g de café especial", "1 origem por mês", "Entrega grátis", "Suporte por email"],
    },
    premium: {
      name: "Plano Premium",
      price: 89,
      features: [
        "500g de café especial",
        "2 origens por mês",
        "Entrega grátis",
        "Suporte prioritário",
        "Degustação exclusiva",
      ],
    },
    master: {
      name: "Plano Master",
      price: 149,
      features: [
        "1kg de café especial",
        "3 origens por mês",
        "Entrega grátis",
        "Suporte 24/7",
        "Degustação exclusiva",
        "Acessórios mensais",
      ],
    },
  }

  const selectedPlan = plans[planType]
  if (!selectedPlan) return

  let svg = '';
  if (planType === 'basico') {
    svg = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="45" rx="24" ry="8" fill="#8B4513"/><ellipse cx="30" cy="40" rx="16" ry="5" fill="#D2691E"/><rect x="15" y="10" width="30" height="20" rx="10" fill="#fff" stroke="#8B4513" stroke-width="3"/><ellipse cx="30" cy="20" rx="10" ry="4" fill="#8B4513"/><ellipse cx="30" cy="20" rx="7" ry="2.5" fill="#D2691E"/></svg>`;
  } else if (planType === 'premium') {
    svg = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="45" rx="22" ry="7" fill="#A0522D"/><ellipse cx="30" cy="40" rx="14" ry="4" fill="#F4A460"/><rect x="18" y="12" width="24" height="18" rx="9" fill="#fff" stroke="#A0522D" stroke-width="3"/><ellipse cx="30" cy="21" rx="8" ry="3" fill="#A0522D"/><ellipse cx="30" cy="21" rx="5" ry="1.5" fill="#F4A460"/></svg>`;
  } else if (planType === 'master') {
    svg = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="45" rx="20" ry="6" fill="#6B3E26"/><ellipse cx="30" cy="40" rx="12" ry="3.5" fill="#8B4513"/><rect x="20" y="15" width="20" height="14" rx="7" fill="#fff" stroke="#6B3E26" stroke-width="3"/><ellipse cx="30" cy="22" rx="6" ry="2" fill="#6B3E26"/><ellipse cx="30" cy="22" rx="3.5" ry="1" fill="#8B4513"/></svg>`;
  }

  const selectedPlanDiv = document.getElementById("selected-plan")
  selectedPlanDiv.innerHTML = `
        <h3>Plano Selecionado</h3>
        <div class="plan-summary">
            <div class="plan-svg" style="text-align:center; margin-bottom:0.5rem;">${svg}</div>
            <h4>${selectedPlan.name}</h4>
            <div class="plan-summary-price">R$ ${selectedPlan.price}/mês</div>
            <ul class="plan-summary-features">
                ${selectedPlan.features.map((feature) => `<li><i class="fas fa-check"></i> ${feature}</li>`).join("")}
            </ul>
        </div>
    `

  const summaryStyles = `
        <style>
            .plan-summary {
                background-color: var(--gray-light);
                padding: 1rem;
                border-radius: 8px;
                margin-top: 1rem;
            }
            
            .plan-summary h4 {
                color: var(--dark-color);
                margin-bottom: 0.5rem;
            }
            
            .plan-summary-price {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--primary-color);
                margin-bottom: 1rem;
            }
            
            .plan-summary-features {
                list-style: none;
                margin: 0;
            }
            
            .plan-summary-features li {
                padding: 0.25rem 0;
                display: flex;
                align-items: center;
            }
            
            .plan-summary-features i {
                color: var(--success-color);
                margin-right: 0.5rem;
            }
        </style>
    `

  if (!document.getElementById("plan-summary-styles")) {
    const styleElement = document.createElement("div")
    styleElement.id = "plan-summary-styles"
    styleElement.innerHTML = summaryStyles
    document.head.appendChild(styleElement)
  }

  window.CoffeeApp.openModal("subscription-modal")
}

function setupFAQ() {
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement
      const isActive = faqItem.classList.contains("active")

      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active")
      })

      if (!isActive) {
        faqItem.classList.add("active")
      }
    })
  })
}

const subscriptionForm = document.getElementById("subscription-form")
if (subscriptionForm) {
  subscriptionForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (window.CoffeeApp.validateForm(subscriptionForm)) {
      const submitButton = subscriptionForm.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent

      submitButton.textContent = "Processando..."
      submitButton.disabled = true

      setTimeout(() => {
        window.CoffeeApp.closeModal("subscription-modal")
        window.CoffeeApp.showNotification(
          "Assinatura realizada com sucesso! Você receberá um e-mail de confirmação.",
          "success",
        )

        subscriptionForm.reset()
        submitButton.textContent = originalText
        submitButton.disabled = false
      }, 2000)
    }
  })
}
