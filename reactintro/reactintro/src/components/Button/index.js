// Button component
// EVENT LISTENERS - adding onClick={() => ...)} adds an event listener
// can add event listener as in the following line, or by separating out into const handleClick in the second example
// Keeps JSX less cluttered

// (1)
// const Button = () => <button onClick={() => console.log('click')}>Click Me!</button>

// (2)
// const Button = (props) => {  // passing in props parameter enables us to use props.text in place of the button text
//                              // can use a different word from props - can only pass props from parent to child
//
//     let counter = 1  //counter to count up each time the button is clicked
//     const handleClick = () => {
//         console.log(counter++)
//     }
//
//     return (
//         <button onClick={handleClick}>{props.text}</button>
//     )
// }

// (3)
// DESTRUCTURING - here we pass variables {text, newClass} into const Button rather than props
// This is drier as don't have to keep writing props.text and can see at a quick glance what needs to be passed in
// PHP Storm will also auto remind you what needs to be passed in
// Can set a default value for the variable: ({text = 'Click me', newClass = 'button'})

// const Button = ({text, newClass}) => {
//     return (
//         <button className={newClass}>{text}</button>
//     )
// }

// (4)
// STATE - think of useState as a special kind of variable that React is watching and updates when it changes
import {useEffect, useState} from "react";

const Button = () => {
// [] brackets below because useState uses two things
// best practice for naming - add 'set' to start of the function name - in this case setCounter
// can only modify counter with setCounter so can't use (counter++)
// set function is asynchronous function (so console.log(counter) in handleClick will be a count behind, i.e. 0 on 1 click)
    const [counter, setCounter] = useState(0) // useState needs an array

    const handleClick = () => {
        setCounter(counter + 1)
        console.log('handleClick', counter)
    }

    useEffect(() => {
        document.title = `You clicked ${counter} time(s)` // changes the title in the tab on the browser
        console.log('useEffect', counter)  // this now consoles the correct number of clicks, the same as returned in the <p>
    }, [counter]) // if we have useEffect with an empty set of brackets [] means use effect will only be run when
                        // the component is displayed

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <p>I have been clicked {counter} time(s)</p>
        </>
    )
}

export default Button