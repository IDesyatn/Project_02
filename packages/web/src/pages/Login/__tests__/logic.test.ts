import { loginValidation, passwordValidation, showPass, validateStatusCheck} from '../logic'
import { getInputValue } from '../../../ts/utils';


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


describe('login validation', () => {
  test('should be function', () => {
    expect(loginValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof loginValidation).toBe('function');
  });
});


describe('password Validation', () => {
  test('should be function', () => {
    expect(passwordValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof passwordValidation).toBe('function');
  });
});

describe('validateStatusCheck', () => {
  test('should be function', () => {
    expect(validateStatusCheck).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof validateStatusCheck).toBe('function');
  });
});

