describe('Item', () => {
  var item, itemWithoutDescription

  beforeEach(() => {
    item = new Item('Magnifying Glass', 'Spys-R-Us', 5.75, 'Great for inspecting clues.')
    itemWithoutDescription = new Item('Spy Notebook', 'Spys-R-Us', 10.50)
  })

  describe('constructor', () => {
    it('sets the name', () => {
      expect(item.name).toBe('Magnifying Glass')
    })

    it('sets the manufacturer', () => {
      expect(item.manufacturer).toBe('Spys-R-Us')
    })

    it('sets the price', () => {
      expect(item.price).toBe(5.75)
    })

    it('sets the description, if provided', () => {
      expect(item.description).toBe('Great for inspecting clues.')
      expect(itemWithoutDescription.description).not.toBeDefined()
    })
  })

  describe('#summary', () => {
    it('returns summary information with a description', () => {
      expect(item.summary()).toMatch('Name: Magnifying Glass')
      expect(item.summary()).toMatch('Description: Great for inspecting clues.')
      expect(item.summary()).toMatch('Manufacturer: Spys-R-Us')
      // Note: The '$' symbol doesn't play nicely with the toMatch method
      // expect(item.summary()).toMatch('Price: $5.75')  // Doesn't work.
      expect(item.summary()).toMatch('Price:')
      expect(item.summary()).toMatch('5.75')
    })

    it('returns summary information without a description', () => {
      expect(itemWithoutDescription.summary()).toMatch('Name: Spy Notebook')
      expect(itemWithoutDescription.summary()).toMatch('Manufacturer: Spys-R-Us')
      expect(itemWithoutDescription.summary()).toMatch('Price:')
      expect(itemWithoutDescription.summary()).toMatch('10.50')
    })
  })
})
