
// // Return a promise that is already resolved:
// // const p = Promise.resolve({ id: 1 });
// // p.then(result => console.log(result));

// //  Return a promise that is already rejected:
// const p = Promise.reject(new Error('reason for rejection...')); // Native Error Object (new Error) includes the entire callstack
// // const p = Promise.reject('reason for rejection...'); // this won't include the entire callstack
// p.catch(err => console.log(err));



// // parallel promises:
// const p1 = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('Async operation #1');
//         resolve(1);
//     }, 2000);
// });

// const p2 = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('Async operation #2');
//         resolve(2);
//     }, 2000);
// });

// Promise.all([p1, p2])
//     .then(result => console.log(result));

// ---------------------------------------------------------------------------------

// parallel promises with rejection:
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async operation #1');
//         reject(new Error('something failed...'));
//     }, 2000);
// });

// const p2 = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('Async operation #2');
//         resolve(2);
//     }, 2000);
// });

// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(err => console.log('Error', err.message)); // --> Result is not an array -> this is considered rejected (if one promise is rejected the return value is considered rejected)

// ---------------------------------------------------------------------------------

// parallel promises Promise.race():
// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise

const p1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Async operation #1');
        resolve(1);
    }, 2000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Async operation #2');
        resolve(2);
    }, 2000);
});

Promise.race([p1, p2])
    .then(result => console.log(result)); // result is NOT an array -> it's the value of the FIRST fulfilled promise