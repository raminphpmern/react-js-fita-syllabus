// API for get requests
let fetchRes = fetch(
"https://jsonplaceholder.typicode.com/todos/");

console.log("promisefetch---", fetchRes);
// FetchRes is the promise to resolve
// it by using.then() method
const resolveSol = fetchRes
    .then(res => res.json())
    .then(d => { console.log(d)})
    // console.log("promisefetch---", resolveSol);


let fetchProds = fetch('https://dummyjson.com/products/4');
console.log("Fetch Products", fetchProds);

fetchProds
.then(result => result.json())
.then(data =>{ console.log("products data--", data)})

console.log("fetch prods data---",fetchProds);