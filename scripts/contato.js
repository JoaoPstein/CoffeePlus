document.addEventListener("DOMContentLoaded", () => {
  setupContactForm()
})

function setupContactForm() {
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      if (window.CoffeeApp.validateForm(contactForm)) {
        handleContactSubmission(contactForm)
      }
    })
  }
}

function handleContactSubmission(form) {
  const submitButton = form.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent

  submitButton.textContent = "Enviando..."
  submitButton.disabled = true

  setTimeout(() => {
    window.CoffeeApp.openModal("success-modal")

    form.reset()

    submitButton.textContent = originalText
    submitButton.disabled = false
  }, 2000)
}

const phoneInput = document.getElementById("contactPhone")
if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length <= 11) {
      if (value.length <= 2) {
        value = value.replace(/(\d{0,2})/, "($1")
      } else if (value.length <= 7) {
        value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2")
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
      }
    }

    e.target.value = value
  })
}

const subjectSelect = document.getElementById("subject")
if (subjectSelect) {
  subjectSelect.addEventListener("change", (e) => {
    const messageTextarea = document.getElementById("message")
    const placeholders = {
      produtos: "Gostaria de saber mais sobre os produtos disponíveis...",
      planos: "Tenho interesse nos planos de assinatura...",
      entrega: "Preciso de ajuda com minha entrega...",
      suporte: "Preciso de suporte técnico para...",
      outros: "Digite sua mensagem aqui...",
    }

    if (messageTextarea && placeholders[e.target.value]) {
      messageTextarea.placeholder = placeholders[e.target.value]
    }
  })
}
