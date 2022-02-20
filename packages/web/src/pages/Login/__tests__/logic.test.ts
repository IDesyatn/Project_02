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
  const input: any = document.createAttribute('login-input');
  test('should be function', () => {
    expect(loginValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof loginValidation).toBe('function');
  });
  test('Checking a function for emptiness', () => {
        if (input === '') {
      expect(loginValidation).toBe(false)
    }});
    test('Checking a function for the number of characters', () => {
      if (input.length < 6) {
        expect(loginValidation).toBe(false)
      }
    });
    test('Checking a function for the number of characters - 2', () => {
      if (input.length > 20) {
        expect(loginValidation).toBe(false)
      }
    });
  test('Checking a function against a regular expression', () => {
    const loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (input === loginRegex) {
      expect(loginValidation).toBe(false)
    }
  });
  });


describe('password Validation', () => {
    const input: any = document.createAttribute('password-input');
    test('should be function', () => {
      expect(passwordValidation).toBeDefined();
    });
  test('should be function typeof function', () => {
    expect(typeof passwordValidation).toBe('function');
  });
  test('Checking a function for emptiness', () => {
    if (input === '') {
      expect(passwordValidation).toBe(false)
    }});
  test('Checking a function for the number of characters', () => {
    if (input.length < 8) {
      expect(passwordValidation).toBe(false)
    }
  });
  test('Checking a function against a regular expression', () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (input === passwordRegex) {
      expect(passwordValidation).toBe(false)
    }
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

