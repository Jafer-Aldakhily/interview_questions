// Fibonacci example


const fibonacci = (num) => {
    if(num < 2)
    {
        return num
    }else{
        return  fibonacci(num -1)  + fibonacci(num - 2)
    }

}
// expected input and outputs
// 3 => 0 1 1
// 5 => 0 1 1 2 3
// 7 => 0 1 1 2 3 5 8
// 10 => 0 1 1 2 3 5 8 13 21 34  

let number = 10
if(number < 0)
{
    console.log("Enter a valid number which is positive");
}else{
    for (let i = 0; i < number; i++) {
        console.log(fibonacci(i));
    }
}




// Factoial example

const factorial = (num) => {
    if(num === 0)
    {
        return 1
    }else{
        return num * factorial(num - 1)
    }
}


// let number = 5
// if(number > 0)
// {
//     const result = factorial(number)
//     console.log(`The factorial of ${number} is ${result}`);
// }


