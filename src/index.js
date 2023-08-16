// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.random() * 10 - 1 + 1;
//     if (number > 3) {
//       console.log(number);
//       resolve('Sucsses!!!');
//       return;
//     }
//     console.log(number);
//     reject('Error!!!');
//   }, 2000);
// });

promise.then(resul => console.log(resul)).catch(error => console.log('ERROR!!!'));
const searchParams = new URLSearchParams({
  key: '34526021-da361fec4a670d7e6ab3378e0',
  q: 'dog',
  image_type: 'photo',
});
const BASE_URL = ` https://pixabay.com/api/?${searchParams}`;
console.log(BASE_URL);
// const API_KEY = 'key=34526021-da361fec4a670d7e6ab3378e0';

function fetchApi() {
  return fetch(`${BASE_URL}`).then(response => response.json());
}

fetchApi().then(res => console.log(res));
