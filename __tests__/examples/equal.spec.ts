describe('Igualdade', () => {
  it('uso basico - toEqual', () => {
    expect(1 + 2).toEqual(3);
    expect(1 + 2).not.toEqual(4);
    expect('developer').toEqual('developer');
    expect({name: 'developer'}).toEqual({name: 'developer'});
  })

  it('uso basico - toBe', () => {
    expect(1 + 2).toBe(3);
    expect(1 + 2).not.toBe(4);
    expect('developer').toBe('developer');
    //falhou
    // expect({name: 'developer'}).toBe({name: 'developer'});
  })
})
