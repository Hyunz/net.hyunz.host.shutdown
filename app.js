
import style from './style.scss';

// const a = {
//   a: {
//     a: {
//       a: 10
//     }
//   },
//   b: 20,
//   c: 30
// }

// const b = {
//   a: 20,
//   b: 30,
//   d: 50,
// }

// function obj_copy(obj) {
//   if (obj === null || typeof obj !== 'object')
//     return obj;
  
//   const result = obj.constructor();

//   for (let attr in obj) {
//     if (obj.hasOwnProperty(attr)) {
//       if (typeof obj === 'object') {
//         result[attr] = obj_copy(obj[attr]);
//       } else {
//         result[attr] = obj[attr];
//       }
//     }
//   }
//   return result;
// }



// const c = obj_copy(a);
// a.a.a.a = 100;
// console.log(a, c);


/*

  수요일에 있었던 인터뷰를 마지막으로 이번 시즌(?) 이직 면접을 모두 끝마쳤습니다.
  


*/

// const arr = [1, 2, 3, [4, 5], [6, 7, [8, 9, 10, [11, 12], 13], 14, 15], 16];

// function flt (source) {
//   return source.reduce((acc, item) => {
//     return Array.isArray(item) ? acc.concat(flt(item)) : acc.concat(item);
//   }, []);
// }

// console.log(flt(arr));