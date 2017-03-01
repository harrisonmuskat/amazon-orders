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
}
