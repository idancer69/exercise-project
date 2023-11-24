export const handleOverflow = (value: number): [number | bigint, boolean] => {
    if (Number.isNaN(value)) {
        throw new Error('Value is NaN');
    }

    if (Math.abs(value) > Number.MAX_SAFE_INTEGER) {
        return [BigInt(Math.round(value)), true];
    }

    return [value, false];
};

export const performOperation = (inputValues: string[], operation: (...args: number[]) => [number | bigint, boolean]): [number | bigint, boolean] => {
    const nums = inputValues.map(value => parseFloat(value));

    if (nums.some(num => isNaN(num))) {
        throw new Error("Jedno z wprowadzonych pól nie jest liczbą.");
    }

    return operation(...nums);
}

export const add = (a: number, b: number): [number | bigint, boolean] => {
    const sum = a + b;
    return handleOverflow(sum);
};

export const subtract = (a: number, b: number): [number | bigint, boolean] => {
    const difference = a - b;
    return handleOverflow(difference);
};

export const multiply = (a: number, b: number): [number | bigint, boolean] => {
    const product = a * b;
    return handleOverflow(product);
};

export const divide = (a: number, b: number): [number | bigint, boolean] => {
    if (b === 0) throw new Error("Nie można dzielić przez zero.");
    const quotient = a / b;
    return handleOverflow(quotient);
};

export const factorial = (num: number): bigint => {
    if (!Number.isInteger(num) || num < 0) throw new Error("Nie można obliczyć silnii dla liczby niecałkowitej lub ujemnej.");
    if (num > 10000) throw new Error("Podana liczba jest zbyt duża dla tej funkcji.");

    let result: bigint = 1n;
    for (let i: number = 2; i <= num; i++) {
        result *= BigInt(i);
    }

    return result;
};

export const fibonacci = (n: number): bigint => {
    if (!Number.isInteger(n) || n < 0) throw new Error("Nie można obliczyć ciągu Fibonacci dla liczby niecałkowitej lub ujemnej.");

    let a: bigint = 0n;
    let b: bigint = 1n;

    for (let i = 2; i <= n; i++) {
        const temp = a;
        a = b;
        b = temp + b;
    }

    return b;
};

export const isPrime = (num: number) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
};


