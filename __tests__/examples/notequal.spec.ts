describe('Not method', () => {
  it('uso basico - not', () => {
    expect(1 + 2).not.toEqual(4);
  })
})

describe('Match - expressoes regulares', () => {
  it('uso basico - toMatch', () => {
    expect('developer').toMatch(/\w+/);
    //falhou
    // expect(1000).toMatch(/\w+/);
  })
})

