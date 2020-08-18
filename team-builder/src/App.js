import React, {useState} from 'react';
import Form from './Components/Form';
import {v4 as uuidv4} from 'uuid'
import './App.css';

function App() {

  let dummyData = {name: 'Beau Bradley', email: 'beaubradley@outlook.com', role: 'Frontend Developer'}
  let initialFormValue = {
    name: '',
    email: '',
    role: '',
  }
  let [teamList, setTeamList] = useState([dummyData]);
  let [values, setValues] = useState(initialFormValue)
  function createTeamMembers () {
    
    return teamList.map(item => (
      <div key={uuidv4()} className="team-member">
        <p className="team-member-name">Name: {item.name}</p>
        <p className="team-member-email">Email: {item.email}</p>
        <p className="team-member-role">Role: {item.role}</p>
        <div className="edit-button">Edit</div>
      </div>
    ))
  }

  function addTeamMember(){
    setTeamList([...teamList, values])
  }

  function updateValues(inputName, inputValue){
    setValues({...values, [inputName]: inputValue})
  }

  return (
    <div className="App">
      <Form values={values} update={updateValues} addMember={addTeamMember}/>
      <div className="team-members-container">
        {createTeamMembers()}
      </div>

    </div>
  );
}

export default App;
