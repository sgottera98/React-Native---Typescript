export function add(a: number, b: number): number {
  return a + b;
}

describe('calc', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
})
