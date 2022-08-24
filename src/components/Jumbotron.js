// import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers'
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import props from 'prop-types';


export default function Jumbotron() {

    // sets a state variable tha can only be changed by a state function
    const [text, set_text] = useState("")
    const [text2, set_text2] = useState("Customised Text")

    let mystyle = {
        color: 'yellow',
        backgroundColor: 'red'

    }



    function text_color() {
        if (props.mode === 'dark') {
            return 'light'
        }
        else {
            return 'dark'
        }
    }
    const handle_uppercase_click = () => {
        let new_text = text.toUpperCase()
        set_text2(new_text)
    }
    const handle_lowercase_click = () => {
        let new_text = text.toLowerCase()
        set_text2(new_text)
    }
    const handle_reverse_click = () => {
        let new_text = text.split("").reverse().join("")
        set_text2(new_text)
    }
    const handle_titlecase_click = () => {
        let new_text = text.replace(/(^|\s)\S/g, function (t) { return t.toUpperCase() });
        set_text2(new_text)
    }
    const handle_clear_click = () => {
        set_text2("")
    }
    const handle_copy_click = () => {
        if (text2 !== 'Customised Text') {
            navigator.clipboard.writeText(text2)
        }
    }
    // monitors the text area for any change and handle it appropriately
    const handle_onchange = (event) => {
        set_text(event.target.value)
    }
    // counts the text
    // const count_text = (str) => {
    //     if (str === '') {
    //         return 0
    //     }
    //     else {
    //         let spaces = 0
    //         for (let i = 0; i < str.length; i++) {
    //             if (str.split(" ")[i].length === 0 || str.split(" ")[i].length === 0) {
    //                 spaces += 1
    //             }
    //         }
    //         return str.split(" ").length - spaces
    //     }
    // }

    const count_text = (str) =>{
       return str.split(" ").filter((element) =>{ return element.length!=0 }).length
    }

    return (
        <div className={`jumbotron text-${text_color()} bg-${props.mode}`} id="jumbotron" >
            {/* <div className={`jumbotron text-dark bg-light`} id="jumbotron"> */}
            <h1 className="display-4">Customise your text</h1>
            <p className="lead">This is a very simple, clean and minimal text based utility that lets you customise your text in lots of different ways.</p>

            <form>
                <div className="row">
                    <div className="col">
                        <textarea className={`form-control `} id="exampleFormControlTextarea1" rows="13" placeholder="Input Text" onChange={handle_onchange}></textarea>
                    </div>
                    <div className="col">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="13" placeholder='Customised Text' onChange={handle_onchange} value={text2}></textarea>
                    </div>
                </div>
            </form>
            <hr className="my-3" />
            <p>You can choose from a variety of different choices on how to change your text the way you like it.</p>
            <p className="lead">
                <button type="button" className="btn btn-primary btn" onClick={handle_uppercase_click}>Upper_case</button>
                <button type="button" className="btn btn-primary btn" onClick={handle_lowercase_click}>Lower_case</button>
                <button type="button" className="btn btn-primary btn" onClick={handle_titlecase_click}>Title_case</button>
                <button type="button" className="btn btn-primary btn" onClick={handle_reverse_click}>Reverse</button>
                <button type="button" className="btn btn-primary btn" onClick={handle_clear_click}>Clear</button>
                <button type="button" className="btn btn-primary btn" onClick={handle_copy_click}>Copy</button>






            </p>
            <hr className="my-3" />
            <p>Number of words : <b>{count_text(text)}</b></p>
            <p>Number of characters : <b>{text.length}</b></p>
        </div>
    )
}
