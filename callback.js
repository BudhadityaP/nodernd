// A callback is a function passed as an argument to another function.

const func1 = async (a, b, myfunc) => {
    const sum = a + b;
    console.log(`This is func 1 and ${a} + ${b} = ${sum}`);
    let value = await myfunc;
    console.log(value);
}

const func2 = () => {
    return 'This is func 2';
}

func1(2, 5, func2());