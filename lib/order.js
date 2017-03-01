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

  toHTML() {
    let itemList = '';
    this.items.forEach(function (item) {
      itemList += item.toHTML();
    });

    return `<ul>
    <li>Date: ${this.placedOn}</li>\n
    <li>Customer: ${this.customer}</li>\n
    <li>Payment Method: ${this.paymentMethod}</li>\n
    <li>Shipping Address: ${this.shippingAddress}</li>\n\n

    Items:\n\n

    ${itemList}\n\n

    Total: ${this.total()}
    </ul>`;
  }
}

let order = new Order('12/10/2016', 'Gene Parmesan', 'PayPal', '100 Alley Rd, Newport Beach, CA 92625');
let magnifyingGlass = new Item('Magnifying Glass','Spys-R-Us', 5.75, 'Great for inspecting clues.');
let spyNotebook = new Item('Spy Notebook', 'Spys-R-Us', 10.50);
order.addItem(magnifyingGlass);
order.addItem(spyNotebook);

let mainDiv = document.getElementById('main');
mainDiv.innerHTML += magnifyingGlass.toHTML();
mainDiv.innerHTML += order.toHTML();
