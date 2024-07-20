function outer() {
    let counter = 0;

    function inner() {
        counter  ++;
    }

    inner();

    console.log(counter)
}


outer()