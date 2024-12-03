// setTimeout(() => {
//     console.log('Hello, World!');
// }, 2000)

//----------------------------------------------------------------

// const  sayHi = (cb) => {
//     cb();
// };

// sayHi(() => {                      // çağırırken parametre olarak fonksiyon verdim
//     console.log('Hi');
// })

// ----------------------------------------------------------------

import fetch from 'node-fetch'
import axios from 'axios'

// // end point i verdim   önce ilk adresteki veriler gelecek sonra ikinci adresteki veriler gelecek,  ayrı dışarıdan bir fetch içinde yapsaydık hangisinşn önce geleceği belli olmazdı
// fetch("https://fakestoreapi.com/users")
// .then((data) => data.json())
// .then((users) => {
//     console.log("Users yüklendi",users);

//     fetch("https://fakestoreapi.com/carts")
//     .then((data) => data.json())
//     .then((kartlar) => console.log("kartlar yüklendi",kartlar));
// });      




// // üstteki veri çekme işleminin daha kolay versiyonu. Bu sıralamaya sadık kalarak kodum çalışacaktır
// async function getData() {
//     const users = await (
//         await fetch("https://fakestoreapi.com/users")
//     ).json();

//     const kartlar = await (
//         await fetch("https://fakestoreapi.com/carts")
//     ).json();


//     console.log("Users yüklendi", users);
//     console.log("kartlar yüklendi", kartlar);
// }

// getData();

//----------------------------------------------------------------

// //fecth yerine sadece axios yazıyorum ve .json u kaldırıyorum ve ikinci await i kaldırıyoruz ikincisi json ifadesi olduğu için yazılıyordu
// // async function getData() {
//     const {data: users} = await axios("https://fakestoreapi.com/users");

//     const {data: kartlar} = await axios("https://fakestoreapi.com/carts");
    


//     console.log("Users yüklendi", users);
//     console.log("kartlar yüklendi", kartlar);
// }

// getData();


//----------------------------------------------------------------

// Promises
const axios = require('axios'); // axios modülünü çağırdığınızdan emin olun

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios("https://fakestoreapi.com/users");
            resolve(data);  // API'den gelen kullanıcı verisini döndür
        } catch (error) {
            reject(error);  // Hata durumunda reject çağır
        }
    });
};

const getKarts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios("https://fakestoreapi.com/carts");
            resolve(data);  // API'den gelen kart verisini döndür
        } catch (error) {
            reject(error);  // Hata durumunda reject çağır
        }
    });
};

(async () => {
    try {
        const users = await getUsers();  // Doğru fonksiyon çağrısı
        const karts = await getKarts();

        console.log("Users yüklendi:", users);
        console.log("Karts yüklendi:", karts);
    } catch (error) {
        console.error("Bir hata oluştu:", error);
    }
})();


 //Burada bir array vericez burda bütün promiselarımız bulunmuş olacak
Promise.all([getUsers(),getKarts()])        
    .then(console.log)
    .catch(console.log);

