document.addEventListener("DOMContentLoaded", () => {
  loadAllProducts()
  setupProductFilters()
})

function loadAllProducts() {
  const productsContainer = document.getElementById("products-grid")
  if (productsContainer) {
    displayProducts(window.CoffeeApp.productsData)
  }
}

function displayProducts(products) {
  const productsContainer = document.getElementById("products-grid")
  productsContainer.innerHTML = products
    .map(
      (product) => {
        let svg = '';
        if (product.category === 'arabica') {
          svg = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="30" rx="28" ry="18" fill="#8B4513"/><ellipse cx="30" cy="30" rx="20" ry="12" fill="#D2691E"/><path d="M30 12 Q35 30 30 48" stroke="#fff" stroke-width="3"/></svg>`;
        } else if (product.category === 'robusta') {
          svg = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="30" rx="26" ry="16" fill="#6B3E26"/><ellipse cx="30" cy="30" rx="18" ry="10" fill="#A0522D"/><path d="M30 14 Q25 30 30 46" stroke="#fff" stroke-width="3"/></svg>`;
        } else if (product.category === 'blend') {
          svg = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="22" cy="30" rx="12" ry="8" fill="#8B4513"/><ellipse cx="38" cy="30" rx="12" ry="8" fill="#D2691E"/><ellipse cx="30" cy="30" rx="20" ry="12" fill="#A0522D" fill-opacity="0.5"/></svg>`;
        } else {
          svg = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="28" fill="#ccc"/></svg>`;
        }
        return `
        <div class="product-card" data-category="${product.category}" onclick="openProductModal(${product.id})">
            <div class="product-image">${svg}</div>
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

function setupProductFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      const filterValue = button.getAttribute("data-filter")
      filterProducts(filterValue)
    })
  })
}

function filterProducts(category) {
  const products = window.CoffeeApp.productsData

  if (category === "all") {
    displayProducts(products)
  } else {
    const filteredProducts = products.filter((product) => product.category === category)
    displayProducts(filteredProducts)
  }
}

function openProductModal(productId) {
  const product = window.CoffeeApp.productsData.find((p) => p.id === productId)
  if (!product) return

  let svg = '';
  if (product.category === 'arabica') {
    svg = `<svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"40\" cy=\"55\" rx=\"32\" ry=\"12\" fill=\"#8B4513\"/><ellipse cx=\"40\" cy=\"50\" rx=\"24\" ry=\"8\" fill=\"#D2691E\"/><ellipse cx=\"40\" cy=\"45\" rx=\"16\" ry=\"5\" fill=\"#F4A460\"/><rect x=\"22\" y=\"10\" width=\"36\" height=\"36\" rx=\"18\" fill=\"#fff\" stroke=\"#8B4513\" stroke-width=\"4\"/><ellipse cx=\"40\" cy=\"28\" rx=\"14\" ry=\"6\" fill=\"#8B4513\"/><ellipse cx=\"40\" cy=\"28\" rx=\"10\" ry=\"4\" fill=\"#D2691E\"/><path d=\"M40 16 Q46 28 40 40\" stroke=\"#fff\" stroke-width=\"2\"/><path d=\"M40 16 Q34 28 40 40\" stroke=\"#fff\" stroke-width=\"2\"/><ellipse cx=\"40\" cy=\"28\" rx=\"4\" ry=\"2\" fill=\"#fff\" fill-opacity=\"0.3\"/></svg>`;
  } else if (product.category === 'robusta') {
    svg = `<svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"40\" cy=\"55\" rx=\"30\" ry=\"10\" fill=\"#6B3E26\"/><ellipse cx=\"40\" cy=\"50\" rx=\"20\" ry=\"7\" fill=\"#A0522D\"/><rect x=\"26\" y=\"18\" width=\"28\" height=\"28\" rx=\"14\" fill=\"#fff\" stroke=\"#6B3E26\" stroke-width=\"4\"/><ellipse cx=\"40\" cy=\"32\" rx=\"10\" ry=\"4\" fill=\"#6B3E26\"/><ellipse cx=\"40\" cy=\"32\" rx=\"7\" ry=\"2.5\" fill=\"#A0522D\"/><path d=\"M40 22 Q44 32 40 42\" stroke=\"#fff\" stroke-width=\"2\"/><ellipse cx=\"40\" cy=\"32\" rx=\"2.5\" ry=\"1\" fill=\"#fff\" fill-opacity=\"0.3\"/></svg>`;
  } else if (product.category === 'blend') {
    svg = `<svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"32\" cy=\"55\" rx=\"12\" ry=\"6\" fill=\"#8B4513\"/><ellipse cx=\"48\" cy=\"55\" rx=\"12\" ry=\"6\" fill=\"#D2691E\"/><ellipse cx=\"40\" cy=\"55\" rx=\"20\" ry=\"8\" fill=\"#A0522D\" fill-opacity=\"0.5\"/><rect x=\"22\" y=\"20\" width=\"36\" height=\"28\" rx=\"14\" fill=\"#fff\" stroke=\"#A0522D\" stroke-width=\"3\"/><ellipse cx=\"40\" cy=\"34\" rx=\"10\" ry=\"4\" fill=\"#8B4513\"/><ellipse cx=\"40\" cy=\"34\" rx=\"7\" ry=\"2.5\" fill=\"#D2691E\"/><ellipse cx=\"40\" cy=\"34\" rx=\"2.5\" ry=\"1\" fill=\"#fff\" fill-opacity=\"0.3\"/></svg>`;
  }

  const modalBody = document.getElementById("modal-body")
  modalBody.innerHTML = `
        <div class="product-modal-content">
            <div class="product-modal-image" style="text-align:center;">${svg}</div>
            <div class="product-modal-info">
                <h2>${product.name}</h2>
                <p class="product-modal-description">${product.description}</p>
                
                <div class="product-details">
                    <div class="detail-item">
                        <strong>Origem:</strong> ${product.origin}
                    </div>
                    <div class="detail-item">
                        <strong>Torra:</strong> ${product.roast}
                    </div>
                    <div class="detail-item">
                        <strong>Notas:</strong> ${product.notes}
                    </div>
                </div>
                
                <div class="product-modal-price">
                    <span class="price">R$ ${product.price.toFixed(2)}</span>
                </div>
                
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button type="button" onclick="changeQuantity(-1)">-</button>
                        <input type="number" id="quantity" value="1" min="1" max="10">
                        <button type="button" onclick="changeQuantity(1)">+</button>
                    </div>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    `

  const modalStyles = `
        <style>
            .product-modal-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                align-items: start;
            }
            
            .product-modal-image img {
                width: 100%;
                border-radius: 8px;
            }
            
            .product-modal-info h2 {
                color: var(--dark-color);
                margin-bottom: 1rem;
            }
            
            .product-modal-description {
                color: var(--gray-medium);
                margin-bottom: 1.5rem;
            }
            
            .product-details {
                background-color: var(--gray-light);
                padding: 1rem;
                border-radius: 8px;
                margin-bottom: 1.5rem;
            }
            
            .detail-item {
                margin-bottom: 0.5rem;
                color: var(--dark-color);
            }
            
            .detail-item:last-child {
                margin-bottom: 0;
            }
            
            .product-modal-price {
                margin-bottom: 2rem;
            }
            
            .product-modal-price .price {
                font-size: 2rem;
                font-weight: 700;
                color: var(--primary-color);
            }
            
            .product-actions {
                display: flex;
                gap: 1rem;
                align-items: center;
            }
            
            .quantity-selector {
                display: flex;
                align-items: center;
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
            }
            
            .quantity-selector button {
                background-color: var(--gray-light);
                border: none;
                padding: 8px 12px;
                cursor: pointer;
                font-size: 1.2rem;
                transition: background-color 0.3s;
            }
            
            .quantity-selector button:hover {
                background-color: var(--primary-color);
                color: white;
            }
            
            .quantity-selector input {
                border: none;
                padding: 8px 12px;
                width: 60px;
                text-align: center;
                font-size: 1rem;
            }
            
            @media (max-width: 768px) {
                .product-modal-content {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                
                .product-actions {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .quantity-selector {
                    justify-content: center;
                }
            }
        </style>
    `

  if (!document.getElementById("product-modal-styles")) {
    const styleElement = document.createElement("div")
    styleElement.id = "product-modal-styles"
    styleElement.innerHTML = modalStyles
    document.head.appendChild(styleElement)
  }

  window.CoffeeApp.openModal("product-modal")
}

function changeQuantity(change) {
  const quantityInput = document.getElementById("quantity")
  if (quantityInput) {
    const currentValue = Number.parseInt(quantityInput.value)
    const newValue = currentValue + change

    if (newValue >= 1 && newValue <= 10) {
      quantityInput.value = newValue
    }
  }
}

function addToCart(productId) {
  const product = window.CoffeeApp.productsData.find((p) => p.id === productId)
  const quantity = document.getElementById("quantity").value

  window.CoffeeApp.showNotification(`${product.name} (${quantity}x) adicionado ao carrinho!`, "success")

  window.CoffeeApp.closeModal("product-modal")
}
