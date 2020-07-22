import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import styled from 'styled-components'
import axios from 'axios'
import User from './components/User'


const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  h1{
    font-size: 30px;
  }
  
`

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialUserList = []

function App() {
  
  const [ users, setUsers ] = useState(initialUserList)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(()=> {
    getUsers()
  },[])

  return (
    <StyledApp className="App">
      <h1>User Onboarding</h1>
      <Form
        values={formValues}
      />
      <div>
        {users.map(user =>{
          return <User key={user.id} details={user}/>
        })}
      </div>
    </StyledApp>
  );
}

export default App;
