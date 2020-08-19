import React, {useState} from 'react';
import Form from './Components/Form';
import UpdateForm from './Components/UpdateForm'
import {v4 as uuidv4} from 'uuid'
import './App.css';

function App() {

  let dummyData = {id: uuidv4(), name: 'Beau Bradley', email: 'beaubradley@outlook.com', role: 'Frontend Developer'}
  
  let initialFormValue = {
    name: '',
    email: '',
    role: '',
  }
  let [teamList, setTeamList] = useState([dummyData]);
  let [values, setValues] = useState(initialFormValue);
  let [editList, setEditList] = useState([]);

  function createTeamMembers () {

    function editMember(item){
      debugger;
      if (!editList.includes(item.id)){
        setEditList([...editList, item.id])
      }
    }
    return teamList.map((item, ind) => {
      console.log(editList);
      console.log(item);
      if (!editList.includes(item.id)){
        return (
        <div key={item.id} className="team-member">
          <p className="team-member-name">Name: {item.name}</p>
          <p className="team-member-email">Email: {item.email}</p>
          <p className="team-member-role">Role: {item.role}</p>
          <div className="edit-button"
              onClick={() => editMember(item)}
          >
          Edit
          </div>
        </div>
        )
      }
      else {
        return <UpdateForm 
          key={item.id}
          Form values={item}
          index ={ind}
          editList={editList}
          setEditList={setEditList}
          teamList= {teamList}
          setTeamList={setTeamList}
          addMember={addTeamMember}/>
      }
    })
  }

  function addTeamMember(){
    setTeamList([...teamList, {...values, id:uuidv4()}])
  }

  function updateValues(inputName, inputValue){
    setValues({...values, [inputName]: inputValue})
  }

  return (
    <div className="App">
      <Form key='update' values={values} update={updateValues} addMember={addTeamMember}/>
      <div className="team-members-container">
        {createTeamMembers()}
      </div>

    </div>
  );
}

export default App;
