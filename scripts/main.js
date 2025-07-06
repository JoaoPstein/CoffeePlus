const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const modals = document.querySelectorAll(".modal")
const closeButtons = document.querySelectorAll(".close")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
}

function openModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }
}

window.addEventListener("click", (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })
})

closeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const modal = e.target.closest(".modal")
    if (modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })
})

const newsletterForm = document.getElementById("newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = e.target.querySelector('input[type="email"]').value

    setTimeout(() => {
      showNotification("Obrigado! Você foi cadastrado com sucesso!", "success")
      e.target.reset()
    }, 1000)
  })
}

function showNotification(message, type = "info") {
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `

  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 2001;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `

  document.body.appendChild(notification)

  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    notification.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => notification.remove(), 300)
  })

  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOutRight 0.3s ease"
      setTimeout(() => notification.remove(), 300)
    }
  }, 5000)
}

function getNotificationColor(type) {
  switch (type) {
    case "success":
      return "#28a745"
    case "error":
      return "#dc3545"
    case "warning":
      return "#ffc107"
    default:
      return "#17a2b8"
  }
}

const notificationStyles = document.createElement("style")
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
document.head.appendChild(notificationStyles)

const productsData = [
  {
    id: 1,
    name: "Café Arábica Premium",
    description: "Grãos selecionados das montanhas colombianas",
    price: 45.9,
    image: "/placeholder.svg?height=200&width=280",
    category: "arabica",
    origin: "Colômbia",
    roast: "Médio",
    notes: "Chocolate, Caramelo, Frutas Vermelhas",
  },
  {
    id: 2,
    name: "Blend Especial da Casa",
    description: "Nossa mistura exclusiva para o dia a dia",
    price: 32.9,
    image: "/placeholder.svg?height=200&width=280",
    category: "blend",
    origin: "Brasil/Colômbia",
    roast: "Médio-Escuro",
    notes: "Nozes, Chocolate Amargo, Baunilha",
  },
  {
    id: 3,
    name: "Robusta Intenso",
    description: "Para quem busca um café forte e encorpado",
    price: 38.9,
    image: "/placeholder.svg?height=200&width=280",
    category: "robusta",
    origin: "Vietnã",
    roast: "Escuro",
    notes: "Terroso, Intenso, Amargo",
  },
  {
    id: 4,
    name: "Arábica Bourbon Amarelo",
    description: "Variedade tradicional brasileira",
    price: 52.9,
    image: "/placeholder.svg?height=200&width=280",
    category: "arabica",
    origin: "Brasil - Cerrado",
    roast: "Claro",
    notes: "Floral, Cítrico, Doce",
  },
  {
    id: 5,
    name: "Blend Gourmet",
    description: "Combinação perfeita para espresso",
    price: 48.9,
    image: "/placeholder.svg?height=200&width=280",
    category: "blend",
    origin: "Brasil/Etiópia",
    roast: "Médio",
    notes: "Frutas Tropicais, Mel, Especiarias",
  },
  {
    id: 6,
    name: "Arábica Geisha",
    description: "Variedade rara e exclusiva",
    price: 89.9,
    image: "/placeholder.svg?height=200&width=280",
    category: "arabica",
    origin: "Panamá",
    roast: "Claro",
    notes: "Floral, Bergamota, Jasmim",
  },
]

function loadFeaturedProducts() {
  const featuredContainer = document.getElementById("featured-products")
  if (featuredContainer) {
    const featuredProducts = productsData.slice(0, 3)
    featuredContainer.innerHTML = featuredProducts
      .map(
        (product) => {
          return `
              <div class="product-card" onclick="openProductModal(${product.id})">
                  <div class="product-image">
                      <img src="images/coffee.jpg" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
                  </div>
                  <div class="product-info">
                      <h3 class="product-name">${product.name}</h3>
                      <p class="product-description">${product.description}</p>
                      <div class="product-price">R$ ${product.price.toFixed(2)}</div>
                  </div>
              </div>
          `
        }
      )
      .join("")
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-up")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".feature-card, .product-card, .plan-card")
  animatedElements.forEach((el) => observer.observe(el))

  loadFeaturedProducts()
})

function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required], select[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      showFieldError(input, "Este campo é obrigatório")
      isValid = false
    } else if (input.type === "email" && !isValidEmail(input.value)) {
      showFieldError(input, "Digite um e-mail válido")
      isValid = false
    } else {
      clearFieldError(input)
    }
  })

  return isValid
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function showFieldError(field, message) {
  clearFieldError(field)
  field.style.borderColor = "#dc3545"

  const errorElement = document.createElement("div")
  errorElement.className = "field-error"
  errorElement.textContent = message
  errorElement.style.cssText = `
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `

  field.parentNode.appendChild(errorElement)
}

function clearFieldError(field) {
  field.style.borderColor = ""
  const errorElement = field.parentNode.querySelector(".field-error")
  if (errorElement) {
    errorElement.remove()
  }
}

document.addEventListener("input", (e) => {
  if (e.target.matches("input, textarea, select")) {
    clearFieldError(e.target)
  }
})

window.CoffeeApp = {
  productsData,
  openModal,
  closeModal,
  showNotification,
  validateForm,
  loadFeaturedProducts,
}

const filterButtons = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      const filterValue = button.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
          card.style.display = "block"
          card.style.animation = "fadeInUp 0.6s ease-out"
        } else {
          card.style.display = "none"
        }
      })
    })
  })
}

const contactForm = document.getElementById("contact-form")

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const btnText = submitBtn.querySelector(".btn-text")
    const btnLoading = submitBtn.querySelector(".btn-loading")

    submitBtn.classList.add("loading")
    submitBtn.disabled = true

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      showNotification("Mensagem enviada com sucesso! Entrarei em contato em breve.", "success")

      contactForm.reset()
    } catch (error) {
      showNotification("Erro ao enviar mensagem. Tente novamente.", "error")
    } finally {
      submitBtn.classList.remove("loading")
      submitBtn.disabled = false
    }
  })
}

let lastScrollTop = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.style.transform = "translateY(-100%)"
  } else {
    navbar.style.transform = "translateY(0)"
  }

  lastScrollTop = scrollTop
})

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website carregado com sucesso!")

  const visibleElements = document.querySelectorAll(".hero-content, .about-content")
  visibleElements.forEach((el) => {
    el.classList.add("fade-in-up")
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const jqueryEffectsScript = document.createElement("script")
  jqueryEffectsScript.src = "scripts/jquery-effects.js"
  document.head.appendChild(jqueryEffectsScript)
})
