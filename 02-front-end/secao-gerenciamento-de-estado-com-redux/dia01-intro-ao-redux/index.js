

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
//     <style>
//       body {
//         height: 100vh;
//         margin: 0;
//         padding: 0;
//       }

//       #container {
//         height: 100%;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//       }

//       button {
//         height: 50px;
//         width: 200px;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="container">
//       <p>Color: <span id="value">white</span></p>
//       <button id="previous">Previous color</button>
//       <button id="next">Next color</button>
//     </div>
//     <script>
//       const INITIAL_STATE = {
//         colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
//         index: 0,
//       };

//       const reducer = (state = INITIAL_STATE, action) => {
//         switch (action.type) {
//           case 'INCREMENT_INDEX':
//             return {
//               index: state.index + 1,
//             }
//           case 'DECREMENT_INDEX':
//             return{
//               index: state.index - 1,
//             }
//           default:
//             return state;
//         }
//       };
//       const store = Redux.createStore(reducer);
//       const actionNext = { type: 'INCREMENT_INDEX' };
//       const actionPrev = { type: 'DECREMENT_INDEX' };
//       const buttonNext = document.querySelector('#next');
//       const buttonPrev = document.querySelector('#previous');
//       buttonPrev.addEventListener('click', () => store.dispatch({ type: 'DECREMENT_INDEX' }));
//       buttonNext.addEventListener('click', () => store.dispatch({ type: 'INCREMENT_INDEX' }));

//       store.subscribe(() => {
//         const { colors, index } = store.getState();
//         document.getElementById('value').innerText = colors[index];
//         document.getElementById('container').style.backgroundColor = colors[index]
//         console.log('estado atualizado');
//       })

//     </script>
//   </body>
// </html>