const products = [
  {
    name: "Avvatar Whey Protein | 4kg | Chocolate Hazelnut",
    discountedPrice: "Rs. 10499",
    originalPrice: "Rs. 16449",
  },
  {
    name: "Optimum Nutrition Gold Standard Whey | 2kg | Double Rich Chocolate",
    discountedPrice: "Rs. 5299",
    originalPrice: "Rs. 7799",
  },
  {
    name: "Dymatize ISO100 Whey Protein | 2.3kg | Gourmet Vanilla",
    discountedPrice: "Rs. 8499",
    originalPrice: "Rs. 9999",
  },
  {
    name: "MyProtein Impact Whey Protein | 5kg | Chocolate Smooth",
    discountedPrice: "Rs. 9299",
    originalPrice: "Rs. 11999",
  },
  {
    name: "MuscleBlaze Biozyme Whey Protein | 2kg | Rich Chocolate",
    discountedPrice: "Rs. 4499",
    originalPrice: "Rs. 5999",
  },
  {
    name: "Ultimate Nutrition Prostar Whey | 5.28lb | Chocolate Creme",
    discountedPrice: "Rs. 4999",
    originalPrice: "Rs. 7499",
  },
  {
    name: "AS-IT-IS Nutrition Whey Protein Concentrate | 1kg | Unflavoured",
    discountedPrice: "Rs. 1399",
    originalPrice: "Rs. 2199",
  },
  {
    name: "GNC Pro Performance Whey Protein | 2kg | Chocolate Supreme",
    discountedPrice: "Rs. 4799",
    originalPrice: "Rs. 6599",
  },
  {
    name: "Labrada 100% Whey Protein | 4.4lb | Chocolate",
    discountedPrice: "Rs. 3999",
    originalPrice: "Rs. 5799",
  },
  {
    name: "BigMuscles Nutrition Raw Whey | 2kg | Unflavoured",
    discountedPrice: "Rs. 2399",
    originalPrice: "Rs. 3199",
  },
];
let containerCart = "";
products.forEach((product) => {
  containerCart += ` <div class="container">
          <div class="image"></div>
          <div class="intro">
            <p>${product.name}</p>
            <p class="price">${product.discountedPrice} <strike>${product.originalPrice}</strike></p>
            <button>BUY NOW</button>
          </div>
          
        </div>  `;
});
document.querySelector(".listing").innerHTML = containerCart;
