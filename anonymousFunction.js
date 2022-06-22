
const multiply = x => {
    return y => { // anonymous function
        return z => { // anonymous function
            return x * y * z
        }
    }
}

console.log(multiply(5)(2)(4));

/**
 * Here multiply function accepts the first argument and returns anonymous function 
 * which takes the second parameter and returns anonymous function
 * which takes the third parameter and returns multiplication of arguments which is being passed in successive
 */