// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// // function MyApp(){
// //     return (
// //         <div>
// //             <h1>Custom App ||| chai</h1>
// //         </div>
// //     )
// // }
// ReactDOM.createRoot(document.getElementById('root')).render(
// /* <MyApp/> */
// // MyApp()
// anotherElement
// )

// ---------------------------------------------------------------
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

// const anotherUser = "chai aur react"
// const reactElement = StrictMode.createElement(
//   'a',
//   {href: 'https://google.com',target: '_blank' },
//   'click me to visit google',
//   anotherUser
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     {/* Not Working */}
//     reactElement
//   </StrictMode>,

// )

// ------------------------------------------------------------------------------------
// Properly Working
import React from 'react'
import ReactDOM from 'react-dom/client'

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "Shivam Kushwaha"

// IMP
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    // anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // anotherElement
    reactElement
)