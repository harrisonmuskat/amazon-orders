class Order {
  constructor (placedOn, customer, paymentMethod, shippingAddress, items=0) {
    this.placedOn = placedOn;
    this.customer = customer;
    this.paymentMethod = paymentMethod;
    this.shippingAddress = shippingAddress;
    this.items = [];
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  total() {
    let total = 0;
    this.items.forEach(function (item) {
      total += item.price;
    });
    return total;
  }

  summary() {
    let itemList = '';
    this.items.forEach(function (item) {
      itemList += item.summary();
    });

    return `
    Date: ${this.placedOn}\n
    Customer: ${this.customer}\n
    Payment Method: ${this.paymentMethod}\n
    Shipping Address: ${this.shippingAddress}\n\n

    Items:\n\n

    ${itemList}\n\n

    Total: ${this.total()}`;
  }
}
