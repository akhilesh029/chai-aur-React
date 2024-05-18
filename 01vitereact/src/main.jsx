import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | Akhilesh</h1>
        </div>
    )
}

// const reactElement ={
//     type: 'a',
//     props: {    //it's an object
//         href: 'https://google.com',
//         target: "_blank"
//     },
//     children: "Click me to visit google"

// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)



const reactElement = React.createElement(
    'a',
    {href : 'https://google.com', target: '_blank'},
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <MyApp />
    // MyApp() // it will also work same

    // reactElement
    // anotherElement
    // reactElement

    <App/>


 
)
