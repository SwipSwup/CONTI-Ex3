const { generateStrongPassword, isStrongPassword } = require('../src/index');

test('isStrongPassword correctly identifies a strong password', () => {
  expect(isStrongPassword('pC%mD8TpCKn2')).toBe(true);
});

test('isStrongPassword correctly identifies a weak password', () => {
  expect(isStrongPassword('Hello World')).toBe(false);
});

test('generateStrongPassword always returns a strong password', () => {
  for (let i = 0; i < 10; i++) {
    const password = generateStrongPassword(12);

    
    expect(isStrongPassword(password)).toBe(true);
  }
});