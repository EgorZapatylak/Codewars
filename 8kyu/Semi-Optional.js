//We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object
// or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.


function wrap(value) {
    let a = {value: value};
    console.log(a);
}

wrap(343);

wrap({"test":"testy"});

wrap("MyTest")
