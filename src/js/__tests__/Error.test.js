import Error from '../Error';

test('Expected an error with a description', () => {
  const error = new Error(444, 'This character is already exists in the team');
  expect(error.translate(444)).toBe('This character is already exists in the team');
});

test('Expected an unknown error', () => {
  const error = new Error(444, 'This character is already exists in the team');
  expect(error.translate(1)).toBe('Unknown error');
});
