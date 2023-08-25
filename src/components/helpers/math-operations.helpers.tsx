export const performOperation = (inputValues: string[], operation: (...args: number[]) => number): number => {
    const nums = inputValues.map(value => parseFloat(value));

    if (nums.some(num => isNaN(num))) {
        throw new Error("Jedno z wprowadzonych pól nie jest liczbą.");
    }

    return operation(...nums);
}

export const add = (a: number, b: number): number => {
    if (a + b === Infinity) {
        throw new Error("Wynik jest zbyt duży.");
    }
    return a + b;
}

export const subtract = (a: number, b: number): number => a - b;

export const multiply = (a: number, b: number): number => {
    if (a * b === Infinity) {
        throw new Error("Wynik jest zbyt duży.");
    }
    return a * b;
};

export const divide = (a: number, b: number): number => {
    if (b === 0) throw new Error("Nie można dzielić przez zero.");
    return a / b;
};

export const factorial = (num: number) => {
    if (num < 0) throw new Error("Nie można obliczyć silnii dla liczby ujemnej.");
    if (num > 20) throw new Error("Podana liczba jest zbyt duża dla tej funkcji.");
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

export const fibonacci = (n: number) => {
    if (n <= 1) return n;
    let a = 0, b = 1;

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


