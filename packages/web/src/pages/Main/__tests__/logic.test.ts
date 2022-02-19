import {
  openAndClose, selectedRow, firstNameValidation, lastNameValidation, cityValidation, ageValidation,
  phoneValidation, emailValidation, companyValidation, settingsCurrentPassValidation,
  settingsRepeatPassValidation, settingsLoginValidation, showPass, validateStatusCheck
} from '../logic'
import { getInputValue } from '../../../ts/utils';


// describe('showPass', () => {
//   test('should be function', () => {
//     expect(showPass).toBeDefined();
//   });
//   test('should be function typeof function', () => {
//     expect(typeof showPass).toBe('function');
//   });
//   test('should return true',() => {
//     const input: any =  document.createAttribute('type');
//     if (input.type === 'password') {
//       expect(showPass()).toBe(true)
//     }
//   })
//   test('should return false',() => {
//     const input: any =  document.createAttribute('type');
//     if (input.type === 'text') {
//       expect(showPass()).toBe(false)
//     }
//   })
// })


describe('firstNameValidation', () => {
  test('should be function', () => {
    expect(firstNameValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof firstNameValidation).toBe('function');
  });
});


describe('lastNameValidation', () => {
  test('should be function', () => {
    expect(lastNameValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof lastNameValidation).toBe('function');
  });
});

describe('ageValidation', () => {
  test('should be function', () => {
    expect(ageValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof ageValidation).toBe('function');
  });
});

describe('cityValidation', () => {
  test('should be function', () => {
    expect(cityValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof cityValidation).toBe('function');
  });
});

describe('phoneValidation', () => {
  test('should be function', () => {
    expect(phoneValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof phoneValidation).toBe('function');
  });
});

describe('emailValidation', () => {
  test('should be function', () => {
    expect(emailValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof emailValidation).toBe('function');
  });
});

describe('companyValidation', () => {
  test('should be function', () => {
    expect(companyValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof companyValidation).toBe('function');
  });
});

describe('settingsLoginValidation', () => {
  test('should be function', () => {
    expect(settingsLoginValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof settingsLoginValidation).toBe('function');
  });
});

describe('settingsCurrentPassValidation', () => {
  test('should be function', () => {
    expect(settingsCurrentPassValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof settingsCurrentPassValidation).toBe('function');
  });
});

describe('settingsRepeatPassValidation', () => {
  test('should be function', () => {
    expect(settingsRepeatPassValidation).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof settingsRepeatPassValidation).toBe('function');
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

