## Introduction

You have a serious online shopping addiction and order way too much stuff on
Amazon. You need an app to track your Amazon orders so your friends can stage an
intervention. Your app should have an `Order` class representing each online
order you place, and an `Item` class representing an item on an order.

## Instructions

```no-highlight
$ et get amazon-orders
$ cd amazon-orders
$ open specRunner.html
```

You should see a number of failing tests. Write some code, then refresh the page
to see the updated results of the test suite.

### Item

Create an `Item` class that represents an item on an order.  It should have
the following properties:

* `name` returns the name of the item.
* `description` returns a description of the item, if the item has a description.
* `manufacturer` returns the manufacturer of the item.
* `price` returns the price of the item.

It should also have a `summary` method which a summary of information about the item.

```no-highlight
Name: Magnifying Glass
Description: Great for inspecting clues.
Manufacturer: Spys-R-Us
Price: $5.75
```

### Order

Create an `Order` class to represent your Amazon order.  It should have the
following properties:

* `placedOn` returns the date the order was placed.
* `customer` returns the name of the customer who placed the order.
* `paymentMethod` returns the type of payment (credit, debit, or PayPal, for example)
* `shippingAddress` returns the shipping address (a string including the street address, city, state, and zip code).
* `items` returns an array of the items on the order (each of which should be an `Item` object).

It should also have the following methods:

* `addItem` adds an item to the `items` array.
* `total` returns the total cost of the items on the order.
* `summary` returns a summary of information about the order.  It should look something like this:

```no-highlight
Date: 12/10/2014
Customer: Gene Parmesan
Payment method: PayPal
Shipping address: 100 Spy Street, Newport Beach, CA 92625

Items:

Name: Magnifying Glass
Description: Great for inspecting clues.
Manufacturer: Spys-R-Us
Price: $5.75

Name: Spy Notebook
Description: Great for writing down clues.
Manufacturer: Spys-R-Us
Price: $10.50

Name: Detective Hat
Description: Great for looking like Sherlock Holmes.
Manufacturer: Private Investigator Suppliers
Price: $19.95

Total: $36.20
```

Review the files in the `spec` directory to determine how the `Order` and `Item`
classes are used. Start by implementing the `Item` class. Once all of the tests
for that are passing, implement the `Order` class.

## Bonus Challenge

Write a `toHTML` method for the `Item` and `Order` classes. Create an `index.html`
file to load the files in the `lib` folder. Then, insert the result into the
page.
