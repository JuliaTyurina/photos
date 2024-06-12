"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var openBurger = document.getElementById('burger');
  var closeBurger = document.getElementById('burger-close');
  var menu = document.getElementById('menu');
  var searchForm = document.getElementById('search-form');
  var searchOpen = document.getElementById('search-open');
  var searchClose = document.getElementById('search-close');
  openBurger.addEventListener('click', function () {
    console.log('object');
    menu.classList.add('opened');
  });
  closeBurger.addEventListener('click', function () {
    menu.classList.remove('opened');
  });
  searchOpen.addEventListener('click', function () {
    searchForm.classList.add('opened');
  });
  searchClose.addEventListener('click', function () {
    searchForm.classList.remove('opened');
  });
});

// let k = 0;
// let str = 'ABCDDCDCADBDBCBAACBBCAA';

// for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] + str[i + 1] === 'BC') {
//         k++;
//     }
// }

// console.log(k);

// function countNumbers(num) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (i % 7 === 0) {
//             let sum = i.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
//             if (sum > 6) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// let N = parseInt(prompt("Введите натуральное число N (не больше 10000):"));
// let result = countNumbers(N);
// console.log(result);

// function maxGoodsToTransport(data) {
//     const goods = data.goods;

//     goods.sort((a, b) => a.weight - b.weight);

//     let totalWeight = 0;
//     let count = 0;

//     for (let i = 0; i < goods.length; i++) {
//         if (goods[i].category === 'A') {
//             if (totalWeight + goods[i].weight <= 20000) {
//                 totalWeight += goods[i].weight;
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// const inputData = {
//     goods: [
//         { category: 'A', weight: 10000 },
//         { category: 'A', weight: 5000 },
//         { category: 'A', weight: 15000 },
//         { category: 'C', weight: 100 },
//         { category: 'B', weight: 15000 },
//         { category: 'A', weight: 2000 },
//         { category: 'C', weight: 1000 }
//     ]
// };

// console.log(maxGoodsToTransport(inputData));

// function maxGoodsToTransport(inputString) {
//     const lines = inputString.trim().split('\n');
//     const n = parseInt(lines[0]);
//     const goods = [];

//     for (let i = 1; i <= n; i++) {
//         const [category, weight] = lines[i].split(' ');
//         goods.push({ category, weight: parseInt(weight) });
//     }

//     goods.sort((a, b) => a.weight - b.weight);

//     let totalWeight = 0;
//     let count = 0;

//     for (let i = 0; i < goods.length; i++) {
//         if (goods[i].category === 'A') {
//             if (totalWeight + goods[i].weight <= 20000) {
//                 totalWeight += goods[i].weight;
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// // Пример входной строки
// const inputString = `10
// A 1971
// A 248
// C 772
// C 781
// B 2801
// A 533
// A 2524
// Y 1516
// A 18036
// A 15007`;

// // Вызов функции и вывод результата
// console.log(maxGoodsToTransport(inputString));

// function calculateAverage() {
//     let total = 0;

//     for (let i = 0; i < 10; i++) {
//         let input = prompt(`Введите количество товара на складе за ${i + 1}-й день:`);

//         // Проверяем, введено ли число
//         while (isNaN(parseFloat(input)) || !isFinite(input)) {
//             input = prompt('Пожалуйста, введите число:');
//         }

//         total += parseFloat(input);
//     }

//     let average = total / 10;
//     return average;
// }

// let averageQuantity = calculateAverage();
// console.log(`Среднее количество товара за 10 дней: ${averageQuantity}`);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlbkJ1cmdlciIsImdldEVsZW1lbnRCeUlkIiwiY2xvc2VCdXJnZXIiLCJtZW51Iiwic2VhcmNoRm9ybSIsInNlYXJjaE9wZW4iLCJzZWFyY2hDbG9zZSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUVoRCxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNwRCxJQUFNQyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUMzRCxJQUFNRSxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFNRyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUN6RCxJQUFNSSxVQUFVLEdBQUdQLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUN6RCxJQUFNSyxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUUzREQsVUFBVSxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN2Q1EsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3JCTCxJQUFJLENBQUNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNoQyxDQUFDLENBQUM7RUFFRlIsV0FBVyxDQUFDSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN4Q0ksSUFBSSxDQUFDTSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDbkMsQ0FBQyxDQUFDO0VBRUZOLFVBQVUsQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDdkNLLFVBQVUsQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ3RDLENBQUMsQ0FBQztFQUVGSixXQUFXLENBQUNQLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3hDSyxVQUFVLENBQUNLLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUN6QyxDQUFDLENBQUM7QUFFTixDQUFDLENBQUM7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgICBjb25zdCBvcGVuQnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpXG4gICAgY29uc3QgY2xvc2VCdXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyLWNsb3NlJylcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKVxuICAgIGNvbnN0IHNlYXJjaE9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLW9wZW4nKVxuICAgIGNvbnN0IHNlYXJjaENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jbG9zZScpXG5cbiAgICBvcGVuQnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnb2JqZWN0Jyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnb3BlbmVkJylcbiAgICB9KVxuXG4gICAgY2xvc2VCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJylcbiAgICB9KVxuXG4gICAgc2VhcmNoT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdvcGVuZWQnKVxuICAgIH0pXG5cbiAgICBzZWFyY2hDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQnKVxuICAgIH0pXG5cbn0pXG5cbi8vIGxldCBrID0gMDtcbi8vIGxldCBzdHIgPSAnQUJDRERDRENBREJEQkNCQUFDQkJDQUEnO1xuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGggLSAxOyBpKyspIHtcbi8vICAgICBpZiAoc3RyW2ldICsgc3RyW2kgKyAxXSA9PT0gJ0JDJykge1xuLy8gICAgICAgICBrKys7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zb2xlLmxvZyhrKTtcblxuLy8gZnVuY3Rpb24gY291bnROdW1iZXJzKG51bSkge1xuLy8gICAgIGxldCBjb3VudCA9IDA7XG4vLyAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtOyBpKyspIHtcbi8vICAgICAgICAgaWYgKGkgJSA3ID09PSAwKSB7XG4vLyAgICAgICAgICAgICBsZXQgc3VtID0gaS50b1N0cmluZygpLnNwbGl0KCcnKS5yZWR1Y2UoKGFjYywgZGlnaXQpID0+IGFjYyArIHBhcnNlSW50KGRpZ2l0KSwgMCk7XG4vLyAgICAgICAgICAgICBpZiAoc3VtID4gNikge1xuLy8gICAgICAgICAgICAgICAgIGNvdW50Kys7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIGNvdW50O1xuLy8gfVxuXG4vLyBsZXQgTiA9IHBhcnNlSW50KHByb21wdChcItCS0LLQtdC00LjRgtC1INC90LDRgtGD0YDQsNC70YzQvdC+0LUg0YfQuNGB0LvQviBOICjQvdC1INCx0L7Qu9GM0YjQtSAxMDAwMCk6XCIpKTtcbi8vIGxldCByZXN1bHQgPSBjb3VudE51bWJlcnMoTik7XG4vLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4vLyBmdW5jdGlvbiBtYXhHb29kc1RvVHJhbnNwb3J0KGRhdGEpIHtcbi8vICAgICBjb25zdCBnb29kcyA9IGRhdGEuZ29vZHM7XG5cbi8vICAgICBnb29kcy5zb3J0KChhLCBiKSA9PiBhLndlaWdodCAtIGIud2VpZ2h0KTtcblxuLy8gICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG4vLyAgICAgbGV0IGNvdW50ID0gMDtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ29vZHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgaWYgKGdvb2RzW2ldLmNhdGVnb3J5ID09PSAnQScpIHtcbi8vICAgICAgICAgICAgIGlmICh0b3RhbFdlaWdodCArIGdvb2RzW2ldLndlaWdodCA8PSAyMDAwMCkge1xuLy8gICAgICAgICAgICAgICAgIHRvdGFsV2VpZ2h0ICs9IGdvb2RzW2ldLndlaWdodDtcbi8vICAgICAgICAgICAgICAgICBjb3VudCsrO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIGNvdW50O1xuLy8gfVxuXG4vLyBjb25zdCBpbnB1dERhdGEgPSB7XG4vLyAgICAgZ29vZHM6IFtcbi8vICAgICAgICAgeyBjYXRlZ29yeTogJ0EnLCB3ZWlnaHQ6IDEwMDAwIH0sXG4vLyAgICAgICAgIHsgY2F0ZWdvcnk6ICdBJywgd2VpZ2h0OiA1MDAwIH0sXG4vLyAgICAgICAgIHsgY2F0ZWdvcnk6ICdBJywgd2VpZ2h0OiAxNTAwMCB9LFxuLy8gICAgICAgICB7IGNhdGVnb3J5OiAnQycsIHdlaWdodDogMTAwIH0sXG4vLyAgICAgICAgIHsgY2F0ZWdvcnk6ICdCJywgd2VpZ2h0OiAxNTAwMCB9LFxuLy8gICAgICAgICB7IGNhdGVnb3J5OiAnQScsIHdlaWdodDogMjAwMCB9LFxuLy8gICAgICAgICB7IGNhdGVnb3J5OiAnQycsIHdlaWdodDogMTAwMCB9XG4vLyAgICAgXVxuLy8gfTtcblxuLy8gY29uc29sZS5sb2cobWF4R29vZHNUb1RyYW5zcG9ydChpbnB1dERhdGEpKTtcblxuLy8gZnVuY3Rpb24gbWF4R29vZHNUb1RyYW5zcG9ydChpbnB1dFN0cmluZykge1xuLy8gICAgIGNvbnN0IGxpbmVzID0gaW5wdXRTdHJpbmcudHJpbSgpLnNwbGl0KCdcXG4nKTtcbi8vICAgICBjb25zdCBuID0gcGFyc2VJbnQobGluZXNbMF0pO1xuLy8gICAgIGNvbnN0IGdvb2RzID0gW107XG5cbi8vICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIHtcbi8vICAgICAgICAgY29uc3QgW2NhdGVnb3J5LCB3ZWlnaHRdID0gbGluZXNbaV0uc3BsaXQoJyAnKTtcbi8vICAgICAgICAgZ29vZHMucHVzaCh7IGNhdGVnb3J5LCB3ZWlnaHQ6IHBhcnNlSW50KHdlaWdodCkgfSk7XG4vLyAgICAgfVxuXG4vLyAgICAgZ29vZHMuc29ydCgoYSwgYikgPT4gYS53ZWlnaHQgLSBiLndlaWdodCk7XG5cbi8vICAgICBsZXQgdG90YWxXZWlnaHQgPSAwO1xuLy8gICAgIGxldCBjb3VudCA9IDA7XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2RzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgIGlmIChnb29kc1tpXS5jYXRlZ29yeSA9PT0gJ0EnKSB7XG4vLyAgICAgICAgICAgICBpZiAodG90YWxXZWlnaHQgKyBnb29kc1tpXS53ZWlnaHQgPD0gMjAwMDApIHtcbi8vICAgICAgICAgICAgICAgICB0b3RhbFdlaWdodCArPSBnb29kc1tpXS53ZWlnaHQ7XG4vLyAgICAgICAgICAgICAgICAgY291bnQrKztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBjb3VudDtcbi8vIH1cblxuLy8gLy8g0J/RgNC40LzQtdGAINCy0YXQvtC00L3QvtC5INGB0YLRgNC+0LrQuFxuLy8gY29uc3QgaW5wdXRTdHJpbmcgPSBgMTBcbi8vIEEgMTk3MVxuLy8gQSAyNDhcbi8vIEMgNzcyXG4vLyBDIDc4MVxuLy8gQiAyODAxXG4vLyBBIDUzM1xuLy8gQSAyNTI0XG4vLyBZIDE1MTZcbi8vIEEgMTgwMzZcbi8vIEEgMTUwMDdgO1xuXG4vLyAvLyDQktGL0LfQvtCyINGE0YPQvdC60YbQuNC4INC4INCy0YvQstC+0LQg0YDQtdC30YPQu9GM0YLQsNGC0LBcbi8vIGNvbnNvbGUubG9nKG1heEdvb2RzVG9UcmFuc3BvcnQoaW5wdXRTdHJpbmcpKTtcblxuXG5cbi8vIGZ1bmN0aW9uIGNhbGN1bGF0ZUF2ZXJhZ2UoKSB7XG4vLyAgICAgbGV0IHRvdGFsID0gMDtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuLy8gICAgICAgICBsZXQgaW5wdXQgPSBwcm9tcHQoYNCS0LLQtdC00LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INGC0L7QstCw0YDQsCDQvdCwINGB0LrQu9Cw0LTQtSDQt9CwICR7aSArIDF9LdC5INC00LXQvdGMOmApO1xuXG4vLyAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0LLQstC10LTQtdC90L4g0LvQuCDRh9C40YHQu9C+XG4vLyAgICAgICAgIHdoaWxlIChpc05hTihwYXJzZUZsb2F0KGlucHV0KSkgfHwgIWlzRmluaXRlKGlucHV0KSkge1xuLy8gICAgICAgICAgICAgaW5wdXQgPSBwcm9tcHQoJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRh9C40YHQu9C+OicpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdChpbnB1dCk7XG4vLyAgICAgfVxuXG4vLyAgICAgbGV0IGF2ZXJhZ2UgPSB0b3RhbCAvIDEwO1xuLy8gICAgIHJldHVybiBhdmVyYWdlO1xuLy8gfVxuXG4vLyBsZXQgYXZlcmFnZVF1YW50aXR5ID0gY2FsY3VsYXRlQXZlcmFnZSgpO1xuLy8gY29uc29sZS5sb2coYNCh0YDQtdC00L3QtdC1INC60L7Qu9C40YfQtdGB0YLQstC+INGC0L7QstCw0YDQsCDQt9CwIDEwINC00L3QtdC5OiAke2F2ZXJhZ2VRdWFudGl0eX1gKTtcblxuXG4iXX0=
