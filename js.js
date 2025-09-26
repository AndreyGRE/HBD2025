const aaa = (number) => {
    let del = 0;
    for (let i = 1; i < number; i++) {
        number % i === 0 ? del++ : null
    }
   return del
}

console.log(aaa(9));