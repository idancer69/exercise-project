import { add, divide, factorial, fibonacci, handleOverflow, isPrime, multiply, performOperation, subtract } from './math-operations.helpers';

// Test for handleOverflow function
test('handleOverflow handles values correctly', () => {
    expect(handleOverflow(Number.MAX_SAFE_INTEGER * 2)).toEqual([BigInt(Math.round(Number.MAX_SAFE_INTEGER * 2)), true]);
    expect(handleOverflow(5.5)).toEqual([5.5, false]);
});

// Test for performOperation function
test('performOperation executes the operation correctly', () => {
    expect(() => performOperation(['5', 'abc'], add)).toThrow("Jedno z wprowadzonych pól nie jest liczbą.");
    expect(performOperation(['5', '3'], add)).toEqual([8, false]);
});

// Test for add function
test('addition works correctly', () => {
    expect(add(2.5, 3.5)).toEqual([6, false]);
    const [result, overflowed] = add(Number.MAX_SAFE_INTEGER, 1);
    expect(result).toBe(BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1));
    expect(overflowed).toBe(true);
});

// Test for subtract function
test('subtraction works correctly', () => {
    expect(subtract(5.5, 3.5)).toEqual([2, false]);
    const [result, overflowed] = subtract(-Number.MAX_SAFE_INTEGER, 1);
    expect(result).toBe(BigInt(-Number.MAX_SAFE_INTEGER) - BigInt(1));
    expect(overflowed).toBe(true);
});

// Test for multiply function
test('multiplication works correctly', () => {
    expect(multiply(2.5, 3.5)).toEqual([8.75, false]);
    expect(multiply(Number.MAX_SAFE_INTEGER, 2)).toEqual([BigInt(Number.MAX_SAFE_INTEGER) * BigInt(2), true]);
});


// Test for divide function
test('division works correctly', () => {
    expect(() => divide(5, 0)).toThrow("Nie można dzielić przez zero.");
    expect(divide(6.5, 2.5)).toEqual([2.6, false]);
});


// Test for factorial function
test('factorial computes correctly', () => {
    expect(() => factorial(0.5)).toThrow("Nie można obliczyć silnii dla liczby niecałkowitej lub ujemnej.");
    expect(() => factorial(-5)).toThrow("Nie można obliczyć silnii dla liczby niecałkowitej lub ujemnej.");
    expect(factorial(5)).toEqual(120n);
});

// Test for fibonacci function
test('fibonacci sequence works correctly', () => {
    expect(() => fibonacci(-1)).toThrow("Nie można obliczyć ciągu Fibonacci dla liczby niecałkowitej lub ujemnej.");
    expect(fibonacci(0)).toEqual(1n);
    expect(fibonacci(5)).toEqual(5n);
});

// Test for isPrime function
test('isPrime determines primality correctly', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(7)).toBe(true);
});
