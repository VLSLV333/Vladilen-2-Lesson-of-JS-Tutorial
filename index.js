function hello(){
    console.log("Hello!", this);
}

// const person = {
//     name: "Vlad",
//     age: 25,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(job = "not employed", phone = "didn't buy"){
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd();
//     }
// }

// const lena = new Object ({
//     name : "Elena",
//     age : 20
// })

// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog("Dubki", "iPhone 13 Max Pro 1 TB")


// const fnLenaInfoLog = person.logInfo.bind(lena, "Dubki", "iPhone 13 Max Pro 1 TB");
// fnLenaInfoLog()


// person.logInfo.bind(lena, "Dubki", "iPhone 13 Max Pro 1 TB")()         // bind = створює нову функцію, яку ми можемо викликати коли нам зручно ();
// person.logInfo.call(lena, "Dubki", "iPhone 13 Max Pro 1 TB")              // call = відразу ж викликає функцію з заданими нами параметрами;

// person.logInfo.apply(lena, ["Dubki", "iPhone 13 Max Pro 1 TB"]);          // apply = працює як call, але аргументів приймає тільки 2, тому якщо їх більше, то подаємо їх в масиві


/// =============================

// const array = [1, 2, 3, 5, 7];

// function multiplyBy2 (arr, n) {
//     console.log(arr.map(function (i){
//         return i * n;
//     }))
// }

// // multiplyBy2 (array, 2)

// Array.prototype.multBy = function (n){
//     return this.map(function (i){
//         return i * n;
//     })
// }

// console.log(array.multBy(2));


// function mylt2 (ar, n){
//     for (let i = 0; i < ar.length; i++){
//         ar[i] = ar[i] * n;
//     }
//     console.log(ar)
// }
// mylt2(array, 3);



// const array = [1, 2, 5, 19, 222]


// Array.prototype.multiBySmth = function (n){
//     return this.map( (i) => i * n);
// }

// .this     = по факту обирає той об*єкт, який стоїть ліворуч від крапки, яка стоїть перед викликом методу. 
//                  person.logInfo.call  тут person === this