const { addListenerList, getResult} = require('../main');

jest.mock('../utils', () => {
    return {
        __esModule: true,
        addValue: jest.fn(() => true),
        addListener: jest.fn(() => true),
        cleanValue: jest.fn(() => true),
        getNodeValue: jest.fn(() => '')
            .mockImplementationOnce(() =>'lg ln |-10|'),
        setNodeValue: jest.fn(() => true),
        backspace: jest.fn(() => true),
        evaluate: jest.fn(() => true),
    };
});

describe('tests for addListenerList function', () =>{
    test('has to be function', () => {
        expect(addListenerList).toBeDefined();
    })
    test('has to be defined', () => {
        expect(typeof addListenerList).toBe('function');
    })
})

describe('tests for getResult function', () =>{
    test('has to be function', () => {
        expect(getResult).toBeDefined();
    })
    test('has to be defined', () => {
        expect(typeof getResult).toBe('function');
    })
    test('node true case', () => {
        expect(getResult()).toBeUndefined();
    })
    test('node false case', () => {
        expect(getResult()).toBeUndefined()
    })
})

