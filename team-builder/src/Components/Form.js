import React from 'react';

function Form (props) {
let {values, addMember, update} = props;
let {name, email, role} = values;

function onChange(event){
    let {name, value} = event.target;
    update(name, value);
}

function onSubmit(event){
    event.preventDefault();
    addMember();
}
    return (
    <form 
        className="form form-container"
        onSubmit={onSubmit}    
    >
        <label>Name:  
            <input 
                type = 'text'
                name = 'name'
                maxLength = '30'
                value = {name}
                placeholder = 'enter name...'
                onChange={onChange}
            />
        </label>
        <label>Email:  
            <input 
                type = 'email'
                name = 'email'
                maxLength = '30'
                value = {email}
                placeholder = 'enter email...'
                onChange={onChange}
            />
        </label>
        <label>Role:  
            <select 
                name = 'role'
                value={role}
                placeholder='--Select A Role--'
                onChange={onChange}
            >
                <option value = ''>--Select A Role--</option>
                <option value = 'Front-End'>Front-End</option>
                <option value = 'Back-End'>Back-End</option>
                <option value = 'Design'>Design</option>
            </select> 
        </label>
        <div submit-button-container>
            <button>Submit</button>
        </div>
    </form>
    )} 

export default Form;