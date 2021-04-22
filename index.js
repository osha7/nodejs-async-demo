// CALLBACK HELL:

// // Synchronous:
// console.log('Before');
// // Asychronous:
// getUser(1, user => {
//     console.log('user', user)
//     getRepositories(user.gitHubUsername, repos => {
//         console.log('repos', repos)
//         getCommits(repo, commits => {
//             console.log('commits', commits)
//         })
//     });
// });
// // Synchronous:
// console.log('After');


// // Asynchronous:
// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading a user from the database...')
//         callback({ id: id, gitHubUsername: 'osha' })
//     }, 2000)
// };

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log(`Getting the repos of ${username}...`)
//         callback(['repo1', 'repo2', 'repo3'])
//     }, 2000)
// };

// function getCommits(repo, callback) {
//     setTimeout(() => {
//         console.log(`Getting the commits of ${repo}...`)
//         callback(['commit1', 'commit2', 'commit3'])
//     }, 2000)
// };

// --------------------------------------------------------------------------------------------

// REFACTORED CODE, changing anonymous functions to named functions:

// // Synchronous:
// console.log('Before');
// // Asychronous:
// getUser(1, getRepositoriesCallback);

// function getRepositoriesCallback(user) {
//     getRepositories(user.gitHubUsername, getCommitsCallback);
// }
// function getCommitsCallback(repos) {
//     let i = 0
//     getCommits(repos[i], displayCommitsCallback)
// }
// function displayCommitsCallback(commits) {
//     console.log('commits', commits)
// }
// // Synchronous:
// console.log('After');

// // Asynchronous:
// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading a user from the database...')
//         callback({ id: id, gitHubUsername: 'osha' })
//     }, 2000)
// };

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log(`Getting the repos of ${username}...`)
//         callback(['repo1', 'repo2', 'repo3'])
//     }, 2000)
// };

// function getCommits(repo, callback) {
//     setTimeout(() => {
//         console.log(`Getting the commits of ${repo}...`)
//         callback(['commit1', 'commit2', 'commit3'])
//     }, 2000)
// };

// --------------------------------------------------------------------------------------------

// Modifying async functions to return a Promise:

// // Synchronous:
// console.log('Before');
// // Asychronous:
// // getUser(1, user => {
// //     console.log('user', user)
// //     getRepositories(user.gitHubUsername, repos => {
// //         console.log('repos', repos)
// //         getCommits(repo, commits => {
// //             console.log('commits', commits)
// //         })
// //     });
// // });

// // console.log user object:
// // const p = getUser(1);
// // p.then(user => console.log(user));

// getUser(1)
//     // .then(user => console.log(user));
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

// // Synchronous:
// console.log('After');

// // Asynchronous:
// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Reading a user from the database...')
//             resolve({ id: id, gitHubUsername: 'osha' })
//         }, 2000)
//     });
// };

// function getRepositories(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Getting the repos of ${username}...`)
//             resolve(['repo1', 'repo2', 'repo3'])
//         }, 2000)
//     });
// };

// function getCommits(repo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Getting the commits of ${repo}...`)
//             resolve(['commit1', 'commit2', 'commit3'])
//         }, 2000)
//     });
// };

// --------------------------------------------------------------------------------------------

// Async and Await:

// Synchronous:
console.log('Before');

// Asychronous:
async function displayCommits() {
    try { //try to execute the next 4 lines
        const user = await getUser(1); // await result of function 
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log('Commits: ', commits);
    }
    catch (err) { //if anything goes wrong, catch the errors and execute this block
        console.log('Error', err.message);
    }
}
displayCommits()

// Synchronous:
console.log('After');

// Asynchronous:
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from the database...')
            resolve({ id: id, gitHubUsername: 'osha' })
        }, 2000)
    });
};

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting the repos of ${username}...`)
            // resolve(['repo1', 'repo2', 'repo3'])
            reject(new Error('Could not get repos...'));
        }, 2000)
    });
};

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting the commits of ${repo}...`)
            resolve(['commit1', 'commit2', 'commit3'])
        }, 2000)
    });
};