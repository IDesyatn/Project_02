import { showPass } from '../../pages/Main/logic';

describe('showPass', () => {
  test('should be function', () => {
    expect(showPass).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof showPass).toBe('function');
  });
  test('should return true',() => {
    const input: any =  document.createAttribute('type');
    if (input.type === 'password') {
      expect(showPass()).toBe(true)
    }
  })
  test('should return false',() => {
    const input: any =  document.createAttribute('type');
    if (input.type === 'text') {
      expect(showPass()).toBe(false)
    }
  })
})
