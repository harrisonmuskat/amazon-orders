class Item {
  constructor (name, manufacturer, price, description) {
    this.name = name;
    this.description = description || undefined;
    this.manufacturer = manufacturer;
    this.price = price;
  }

  summary() {
    return `Name: ${this.name}\n
    Description: ${this.description}\n
    Manufacturer: ${this.manufacturer}\n
    Price: ${this.price.toFixed(2)}\n`;
  }

  toHTML() {
    return `<ul>
    <li> Name: ${this.name} </li>\n
    <li> Description: ${this.description} </li>\n
    <li> Manufacturer: ${this.manufacturer} </li>\n
    <li> Price: ${this.price.toFixed(2)} </li>\n
    </ul>`;
  }
}
