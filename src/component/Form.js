import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store';

const Form = () => {
    const [text, setText] = useState('')
    const dispatch =useDispatch()
    const handleChange =e=>{
        setText(e.target.value)
    }
const submit=(e)=>{
    e.preventDefault()
    console.log("Ok")
    dispatch(add(text))
    setText("")
}
    return (
        <div>
            <form onSubmit={submit}>
                <input type='text' value={text} onChange={handleChange} placeholder='Please Type Here'/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Form;
