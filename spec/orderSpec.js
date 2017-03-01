describe('Order', () => {
  var order, magnifyingGlass, spyNotebook;

  beforeEach(() => {
    order = new Order('12/10/2016', 'Gene Parmesan', 'PayPal', '100 Alley Rd, Newport Beach, CA 92625')
    magnifyingGlass = new Item('Magnifying Glass','Spys-R-Us', 5.75, 'Great for inspecting clues.')
    spyNotebook = new Item('Spy Notebook', 'Spys-R-Us', 10.50)
  })

  describe('constructor', () => {
    it('sets the placedOn attribute', () => {
      expect(order.placedOn).toBe('12/10/2016')
    })

    it('sets the customer', () => {
      expect(order.customer).toBe('Gene Parmesan')
    })

    it('sets the paymentMethod', () => {
      expect(order.paymentMethod).toBe('PayPal')
    })

    it('sets the shippingAddress', () => {
      expect(order.shippingAddress).toBe('100 Alley Rd, Newport Beach, CA 92625')
    })

    it('sets items to an empy array', () => {
      expect(order.items).toEqual([])
    })
  })

  describe('#addItem', () => {
    it('should add an item to the items array', () => {
      order.addItem(magnifyingGlass)
      expect(order.items[0]).toBe(magnifyingGlass)
    })
  })

  describe('methods that interact with the items array', () => {
    beforeEach(() => {
      order.addItem(magnifyingGlass)
      order.addItem(spyNotebook)
    })

    describe('#total', () => {
      it('returns the total cost of the items', () => {
        expect(order.total()).toBe(16.25)
      })
    })

    describe('#summary', () => {
      it('returns summary information', () => {
        expect(order.summary()).toMatch('Customer: Gene Parmesan')
        expect(order.summary()).toMatch('Items')
        expect(order.summary()).toMatch('Name: Magnifying Glass')
        expect(order.summary()).toMatch('Name: Spy Notebook')
        expect(order.summary()).toMatch('Total:')
        expect(order.summary()).toMatch('16.25')
      })
    })
  })
})
