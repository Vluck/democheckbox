
import react, { useRef, useState } from 'react';
const InputCheck = ({addtask}) => {
    const [name, setName] = useState("");
    const inputRef = useRef(null);
    
    const addtaskItem = (name) => {
        addtask(name);
        setName("");
        inputRef.current.focus();
    }

    return (
        <div  className="inputContainer">
            <input type="text"  ref = {inputRef} value = {name} onChange = {(e) => setName(e.currentTarget.value)}/> 
            <input type="button" value="Add" onClick={() => addtaskItem(name)} />
        </div>

    )
}
export default InputCheck;