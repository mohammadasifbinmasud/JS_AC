// //Callbacks
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log('Data', dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }


// //callback hell
// getData(1, () => {
//     console.log('getting data2... ... ...');
//     getData(2, () => {
//         console.log('getting data3... ... ...');
//         getData(3, () => {
//             console.log('getting data4... ... ...');
//             getData(4, () => {
//                 console.log('getting data5... ... ...');
//                 getData(5);
//             });
//         });
//     });
// });




//PROMISES
//part-1
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise.");
//     resolve(123);
// });

// console.log(promise);






//Part-2
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(dataId);
//             resolve('Successful');
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// let finalVal = getData(`I'm the message of promise. Promise is resolving...`);
// console.log(finalVal);


// function isFulfilled(finalVal) {
//     setTimeout(() => {
//         console.log(finalVal);
//     }, 6000);
// }
// isFulfilled(finalVal);






//part-3
// let getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise.");
//         // resolve('Successful');
//         reject('ERROR! :(' );
//     });
// }


// let promise = getPromise();
// promise.then((res) => {
//     console.log(`Promis is fulfilled.`, res);
// });
// promise.catch((err) => {
//     console.log(err);
// });







//Part-4 - promise chain
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('Some data1');
//             resolve('RESOLVED 1 :)');
//         }, 4000);
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('Some data2');
//             resolve('RESOLVED 2 :)');
//         }, 4000);
//     });
// }

// console.log('Fetching data1...');
// asyncFunc1().then((res) => {
//     console.log('Fetching data2...');
//     asyncFunc2().then((res) => {});
// });













// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data', dataId);
//             resolve('success');
//         }, 2000);
//     });
// }
//approach -1
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     });
// });

//approach -2
// getData(1)
//     .then((res) => {
//         console.log(res);
//         return getData(2);
//     })
//     .then((res) => {
//         console.log(res);
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//         return getData(4);
//     })
//     .then((res) => {
//         console.log(res);
//     });





//Async-await
// async function hello() {
//     console.log('Hello!');
// }

// console.log(hello());



// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Weather data');
//             resolve(200); // 200 ---> means the successful API call.            }
//         }, 2000);
//     });
// }

// async function getWatherData() {
//     await api();
// }

// getWatherData();




function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data', dataId);
            resolve('success');
        }, 2000);
    });
}

(async function () {
    console.log('Fetching data1...');
    await getData(1);

    console.log('Fetching data2...');
    await getData(2);

    console.log('Fetching data3...');
    await getData(3);

    console.log('Fetching data4...');
    await getData(4);
})();