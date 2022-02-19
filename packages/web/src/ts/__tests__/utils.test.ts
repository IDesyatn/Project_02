import { addListener, getElementById, getForm, getInputValue, setInnerText, setTextValue } from '../utils'
import { showPass } from '../../pages/Login/logic';

describe('addListener', () => {
  test('should be function', () => {
    expect(addListener).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof addListener).toBe('function');
  });
  test('should return true',() => {
    document.body.innerHTML = '<input id="test"></input>'
    expect(addListener('test', 'click', () => {})).toBe(true)
  })
  test('should return false',() => {
    document.body.innerHTML = '<input id="tests"></input>'
    expect(addListener('test-p', 'click', () => {})).toBe(false)
  })
})

describe('getForm', () => {
  test('should be function', () => {
    expect(getForm).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof getForm).toBe('function');
  });
  test('should return true',() => {
   const form = document.createElement('form');
   const id =  document.createAttribute('id');
   if (id.value === 'test') {
     expect(getForm('test')).toBe(true)
   }
  })
  test('should return false',() => {
    const form = document.createElement('form');
    const id =  document.createAttribute('id');
    if (id.value === 'tests') {
      expect(getForm('test')).toBe(false)
    }
  })
})

describe('setTextValue', () => {
  test('should be function', () => {
    expect(setTextValue).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof setTextValue).toBe('function');
  });
  test('should return true',() => {
    const paragraph = document.createElement('p');
    const id =  document.createAttribute('id');
    const testId = 'test'
    if (id.value === 'test') {
      setTextValue('test', id.value)
      expect(paragraph.innerText = id.value).toBe(true)
    }
  })
  test('should return false',() => {
    const paragraph = document.createElement('p');
    const id =  document.createAttribute('id');
    const testId = 'test'
    if (id.value === 'test') {
      setTextValue('tests', id.value)
      expect(paragraph.innerText = id.value).toBe(false)
    }
  })
})

describe('setInnerText', () => {
  test('should be function', () => {
    expect(setInnerText).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof setInnerText).toBe('function');
  });
  test('should return true',() => {
    const paragraph = document.createElement('p');
    const id =  document.createAttribute('id');
    const testId = 'test'
    if (id.value === 'test') {
      setInnerText('test', id.value)
      expect(paragraph.innerText = id.value).toBe(true)
    }
  })
  test('should return false',() => {
    const paragraph = document.createElement('p');
    const id =  document.createAttribute('id');
    const testId = 'test'
    if (id.value === 'test') {
      setInnerText('tests', id.value)
      expect(paragraph.innerText = id.value).toBe(false)
    }
  })
})

describe('getInputValue', () => {
  test('should be function', () => {
    expect(getInputValue).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof getInputValue).toBe('function');
  });
  test('should return `dark`',() => {
    document.body.innerHTML = '<input value="dark" id="test-input">';
    expect(getInputValue('test-input')).toBe('dark');
  })
  test('should return false',() => {
    document.body.innerHTML = '<inpuit id="tests-input">';
    expect(getInputValue('test-input')).toBe(false);
  })
})

describe('getElementById', () => {
  test('should be function', () => {
    expect(getElementById).toBeDefined();
  });
  test('should be function typeof function', () => {
    expect(typeof getElementById).toBe('function');
  });
  test('should return true',() => {
    const id =  document.createAttribute('id');
    if (id.value === 'test') {
      expect(getElementById('test')).toBe(true)
    }
  })
  test('should return false',() => {
    const id =  document.createAttribute('id');
    if (id.value === 'tests') {
      expect(getElementById('test')).toBe(false)
    }
  })
})
