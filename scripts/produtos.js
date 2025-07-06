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
        return `
        <div class="product-card" data-category="${product.category}" onclick="openProductModal(${product.id})">
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

  const modalBody = document.getElementById("modal-body")
  modalBody.innerHTML = `
        <div class="product-modal-content">
            <div class="product-modal-image">
                <img src="images/coffee.jpg" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px;">
            </div>
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
