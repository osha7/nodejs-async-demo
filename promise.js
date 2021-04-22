// //constructor function:
// const p = new Promise((resolve, reject) => {
//     // resolve and reject are functions
//     // async:
//     setTimeout(() => {
//         resolve(1);
//     }, 2000);

//     // reject(new Error('message'));
// }); 

// // consume promise:
// // .then ==> method gets result of async operation
// // .catch ==> method catches any errors
// p.then(result => console.log('Result', result));


//constructor function:
const p = new Promise((resolve, reject) => {
    // resolve and reject are functions
    // async:
    setTimeout(() => {
        reject(new Error('message'));
    }, 2000);
}); 

// consume promise:
p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));