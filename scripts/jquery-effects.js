const $ = window.jQuery 

$(document).ready(() => {
  console.log("jQuery carregado com sucesso!")

  initParallaxEffect()

  initCounterAnimation()

  initSmoothScroll()

  initCardHoverEffects()

  initTypewriterEffect()

  initLoadingAnimation()

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      if ($("#scroll-to-top").length === 0) {
        $("body").append('<button id="scroll-to-top"><i class="fas fa-arrow-up"></i></button>')
      }
      $("#scroll-to-top").fadeIn()
    } else {
      $("#scroll-to-top").fadeOut()
    }
  })

  $(document).on("click", "#scroll-to-top", () => {
    $("html, body").animate({ scrollTop: 0 }, 800)
  })

  initLazyLoading()

  enhanceFormValidation()
})

function initParallaxEffect() {
  $(window).scroll(() => {
    const scrolled = $(window).scrollTop()
    const parallax = $(".hero")
    const speed = scrolled * 0.5

    parallax.css("background-position", `center ${speed}px`)
  })
}

function initCounterAnimation() {
  if ($(".stats-section").length === 0) {
    const statsHTML = `
            <section class="stats-section">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-number" data-target="1000">0</div>
                            <div class="stat-label">Clientes Satisfeitos</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-target="50">0</div>
                            <div class="stat-label">Tipos de Café</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-target="15">0</div>
                            <div class="stat-label">Países de Origem</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-target="99">0</div>
                            <div class="stat-label">% Satisfação</div>
                        </div>
                    </div>
                </div>
            </section>
        `
    $(".features").after(statsHTML)
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters()
        observer.unobserve(entry.target)
      }
    })
  })

  const statsSection = document.querySelector(".stats-section")
  if (statsSection) {
    observer.observe(statsSection)
  }
}

function animateCounters() {
  $(".stat-number").each(function () {
    const $this = $(this)
    const target = Number.parseInt($this.data("target"))

    $({ counter: 0 }).animate(
      { counter: target },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.counter))
        },
        complete: () => {
          $this.text(target)
        },
      },
    )
  })
}

function initSmoothScroll() {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault()

    const target = $(this.getAttribute("href"))
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 70,
        },
        800,
        "easeInOutQuad",
      )
    }
  })
}

function initCardHoverEffects() {
  $(".product-card, .feature-card, .plan-card").hover(
    function () {
      $(this).addClass("hover-effect")
      $(this).find("img").addClass("zoom-effect")
    },
    function () {
      $(this).removeClass("hover-effect")
      $(this).find("img").removeClass("zoom-effect")
    },
  )

  $(".product-card, .feature-card, .plan-card").each(function (index) {
    $(this).css("animation-delay", index * 0.1 + "s")
    $(this).addClass("fade-in-up")
  })
}

function initTypewriterEffect() {
  const heroTitle = $(".hero-title span")
  if (heroTitle.length) {
    const text = heroTitle.text()
    heroTitle.text("")

    let i = 0
    const typeWriter = setInterval(() => {
      heroTitle.text(text.slice(0, i))
      i++

      if (i > text.length) {
        clearInterval(typeWriter)
        heroTitle.addClass("typing-complete")
      }
    }, 100)
  }
}

function initLoadingAnimation() {
  const loadingHTML = `
        <div id="loading-overlay">
            <div class="loading-content">
                <div class="coffee-cup">
                    <div class="coffee"></div>
                    <div class="steam"></div>
                </div>
                <p>Preparando seu café...</p>
            </div>
        </div>
    `

  $("body").prepend(loadingHTML)

  $(window).on("load", () => {
    $("#loading-overlay").fadeOut(1000, function () {
      $(this).remove()
    })
  })
}

function initLazyLoading() {
  $("img").each(function () {
    const $img = $(this)
    const src = $img.attr("src")

    $img.attr("data-src", src).removeAttr("src").addClass("lazy")
  })

  const lazyImages = document.querySelectorAll("img.lazy")
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  lazyImages.forEach((img) => imageObserver.observe(img))
}

function enhanceFormValidation() {
  $("form").on("submit", function (e) {
    const form = $(this)
    let isValid = true

    form.find(".error").removeClass("error")
    form.find(".error-message").remove()

    form.find("input[required], textarea[required], select[required]").each(function () {
      const field = $(this)
      const value = field.val().trim()

      if (!value) {
        showFieldError(field, "Este campo é obrigatório")
        isValid = false
      } else if (field.attr("type") === "email" && !isValidEmail(value)) {
        showFieldError(field, "Digite um e-mail válido")
        isValid = false
      }
    })

    if (!isValid) {
      e.preventDefault()
      const firstError = form.find(".error").first()
      if (firstError.length) {
        $("html, body").animate(
          {
            scrollTop: firstError.offset().top - 100,
          },
          500,
        )
      }
    }
  })
}

function showFieldError(field, message) {
  field.addClass("error")
  field.after(`<div class="error-message">${message}</div>`)
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
