import React, {useState} from 'react';

function UpdateForm (props) {
    let {values, index, teamList, setTeamList, editList, setEditList} = props;
    let {id} = values;
    let [inputValues, setInputValues] = useState(values)
    let {name, email, role} = inputValues;

      function editTeamMember(){
        let newList = [...teamList];
        newList.splice(index, 1, inputValues)
        setTeamList(newList);
      }
    
      function updateValues(inputName, inputValue){
        setInputValues({...inputValues, [inputName]: inputValue})
      }
    

    function onChange(event){
        let {name, value} = event.target;
        updateValues(name, value);
    }

    function onSubmit(event){
        event.preventDefault();
        editTeamMember();
        setEditList(editList.filter(item => item !== id));
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
            <div className='submit-button-container'>
                <button>Submit</button>
            </div>
        </form>
        )} 

export default UpdateForm;