const pyramid = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('pyramid is a function', () => {
  expect(typeof pyramid).toEqual('function');
});

test('prints a pryamid for n = 2', () => {
  pyramid(2);
  expect(console.log.mock.calls[0][0]).toEqual(' # ');
  expect(console.log.mock.calls[1][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('prints a pryamid for n = 3', () => {
  pyramid(3);
  expect(console.log.mock.calls[0][0]).toEqual('  #  ');
  expect(console.log.mock.calls[1][0]).toEqual(' ### ');
  expect(console.log.mock.calls[2][0]).toEqual('#####');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('prints a pryamid for n = 4', () => {
  pyramid(4);
  expect(console.log.mock.calls[0][0]).toEqual('   #   ');
  expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
  expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
  expect(console.log.mock.calls[3][0]).toEqual('#######');
  expect(console.log.mock.calls.length).toEqual(4);
});

test('prints a pryamid for n = 7', () => {
  pyramid(7);
  expect(console.log.mock.calls[0][0]).toEqual('      #      ');
  expect(console.log.mock.calls[1][0]).toEqual('     ###     ');
  expect(console.log.mock.calls[2][0]).toEqual('    #####    ');
  expect(console.log.mock.calls[3][0]).toEqual('   #######   ');
  expect(console.log.mock.calls[4][0]).toEqual('  #########  ');
  expect(console.log.mock.calls[5][0]).toEqual(' ########### ');
  expect(console.log.mock.calls[6][0]).toEqual('#############');
  expect(console.log.mock.calls.length).toEqual(7);
});
