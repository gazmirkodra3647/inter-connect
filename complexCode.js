/**
 * Filename: complexCode.js
 * 
 * Description: This code demonstrates a complex implementation of a shopping cart system.
 * It includes various functions and objects to handle managing products, adding items to cart,
 * calculating subtotals, applying discounts, and generating invoices.
 */

// Class representing a Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Class representing a CartItem
class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getSubtotal() {
    return this.product.price * this.quantity;
  }
}

// Class representing a ShoppingCart
class ShoppingCart {
  constructor() {
    this.cartItems = [];
  }

  addProduct(product, quantity) {
    const existingCartItem = this.cartItems.find(
      (item) => item.product.name === product.name
    );

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      const newCartItem = new CartItem(product, quantity);
      this.cartItems.push(newCartItem);
    }
  }

  removeProduct(product) {
    this.cartItems = this.cartItems.filter(
      (item) => item.product.name !== product.name
    );
  }

  getCartTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.getSubtotal(),
      0
    );
  }

  applyDiscount(discountPercentage) {
    const discountFactor = 1 - discountPercentage / 100;
    const updatedCartItems = this.cartItems.map((item) => {
      item.product.price *= discountFactor;
      return item;
    });
    this.cartItems = updatedCartItems;
  }

  generateInvoice() {
    const invoiceDate = new Date().toLocaleDateString();
    let invoiceContent = `Invoice Date: ${invoiceDate}\n\n`;

    this.cartItems.forEach((item) => {
      const { product, quantity } = item;
      const subtotal = item.getSubtotal().toFixed(2);
      invoiceContent += `${product.name} (${product.price.toFixed(
        2
      )}) x ${quantity} = ${subtotal}\n`;
    });

    const total = this.getCartTotal().toFixed(2);
    invoiceContent += `\nTotal: ${total}`;

    return invoiceContent;
  }
}

// Usage example

// Create some sample products
const product1 = new Product("Product 1", 10.99);
const product2 = new Product("Product 2", 19.99);
const product3 = new Product("Product 3", 5.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add products to the cart
cart.addProduct(product1, 2);
cart.addProduct(product2, 1);
cart.addProduct(product3, 3);

// Apply a discount of 20%
cart.applyDiscount(20);

// Generate and print the invoice
const invoice = cart.generateInvoice();
console.log(invoice);
