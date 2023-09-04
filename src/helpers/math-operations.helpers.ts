const isInteger = (value: number): boolean => value % 1 === 0;
const handleOverflow = (value: number): [bigint, boolean] => {
    if (value > Number.MAX_VALUE || value < -Number.MAX_VALUE) {
        return [BigInt(Math.round(value)), true];
    }
    return [BigInt(value), false];
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
    if (sum > Number.MAX_VALUE || sum < -Number.MAX_VALUE) {
        const [bigSum, rounded] = handleOverflow(sum);
        return [bigSum, rounded];
    }
    return [sum, false];
};

export const subtract = (a: number, b: number): [number | bigint, boolean] => {
    const difference = a - b;
    if (difference > Number.MAX_VALUE || difference < -Number.MAX_VALUE) {
        const [bigDifference, rounded] = handleOverflow(difference);
        return [bigDifference, rounded];
    }
    return [difference, false];
};

export const multiply = (a: number, b: number): [number | bigint, boolean] => {
    const product = a * b;
    if (product > Number.MAX_VALUE || product < -Number.MAX_VALUE) {
        const [bigProduct, rounded] = handleOverflow(product);
        return [bigProduct, rounded];
    }
    return [product, false];
};

export const divide = (a: number, b: number): [number | bigint, boolean] => {
    if (b === 0) throw new Error("Nie można dzielić przez zero.");
    const quotient = a / b;
    if (quotient > Number.MAX_VALUE || quotient < -Number.MAX_VALUE) {
        const [bigQuotient, rounded] = handleOverflow(quotient);
        return [bigQuotient, rounded];
    }
    return [quotient, false];
};


export const factorial = (num: number): bigint => {
    if (!isInteger(num) || num < 0) throw new Error("Nie można obliczyć silnii dla liczby niecałkowitej lub ujemnej.");
    if (num > 10000) throw new Error("Podana liczba jest zbyt duża dla tej funkcji.");

    let result: bigint = 1n;
    for (let i: number = 2; i <= num; i++) {
        result *= BigInt(i);
    }

    return result;
};

export const fibonacci = (n: number): bigint => {
    if (!isInteger(n) || n < 0) throw new Error("Nie można obliczyć ciągu Fibonacci dla liczby niecałkowitej lub ujemnej.");

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


