import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import styled from 'styled-components'
import axios from 'axios'
import User from './components/User'
import formSchema from './valadation/formSchema'
import * as yup from 'yup'

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

const initialErrorsList = {
  name: '',
  email: '',
  password: '',
}

const initialUserList = []

function App() {
  
  const [ users, setUsers ] = useState(initialUserList)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialErrorsList)


  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const inputChange = (name, value) => {
    
    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({...formValues, [name]: value})
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({...formValues, [name]: isChecked})
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email:  formValues.email.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser)
  }

  useEffect(()=> {
    getUsers()
  },[])

  return (
    <StyledApp className="App">
      <h1>User Onboarding</h1>
      <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        errors={formErrors}
        submit={submit}
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
