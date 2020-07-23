import React from 'react'

function Form(props) {
    const { values, inputChange, checkboxChange, errors, submit } = props
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name,value)
    }
    const onCheckboxChange = evt => {
        const {name, checked} = evt.target
        checkboxChange(name,checked)
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
            <h2>Add a User Below:</h2>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            </div>
            <div>
                <label>Name:&nbsp;
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>
                <label>Email:&nbsp;
                    <input 
                        type='text'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                <label>Password:&nbsp;
                    <input 
                        type='text'
                        name='password'
                        value={values.password}
                        onChange={onInputChange}
                    />
                </label>
                <label>I agree to terms:&nbsp;
                    <input 
                        type='checkbox'
                        name='terms'
                        checked={values.terms === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form 