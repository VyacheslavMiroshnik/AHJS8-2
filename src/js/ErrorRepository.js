export default class ErrorRepository {
  constructor() {
    this.errorsRepository = new Map([
      [400, 'Bad request'],
      [414, 'URL too long'],
      [503, 'Service unavailable'],
      [521, 'Web service is down'],
    ]);
  }

  translate(errorId) {
    return this.errorsRepository.get(errorId) || 'Unknown error';
  }
}
