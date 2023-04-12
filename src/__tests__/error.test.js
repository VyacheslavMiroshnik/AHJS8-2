import ErrorRepository from '../js/ErrorRepository';

test.each([
  ['test error code include in ErrorRepository', 400, 'Bad request'],
  ['test error code did not include in ErrorRepository', 4543, 'Unknown error'],
])('%s', (_, errorId, expected) => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(errorId)).toBe(expected);
});
