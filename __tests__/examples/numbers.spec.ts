describe('Comparar numeros', () => {
  it('uso basico', () => {
    expect(1 + 2).toBeGreaterThan(1);
    expect(1 + 2).toBeGreaterThanOrEqual(3);
    expect(1 + 2).toBeLessThan(4);
    expect(1 + 2).toBeLessThanOrEqual(3);
  })
})

describe('Mock', () => {
  it('mock implementation', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => 5);
    expect(fakeAdd(1, 2)).toBe(5);
  })
})

