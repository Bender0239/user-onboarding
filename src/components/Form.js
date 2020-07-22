import React from 'react'

function Form() {
    return (
        <form>
            <div>
            <h2>Add a User Below</h2>
            </div>
            <div>
                <label>Name:&nbsp;
                    <input 
                        type='text'
                        name='name'
                    />
                </label>
                <label>Email:&nbsp;
                    <input 
                        type='text'
                        name='email'
                    />
                </label>
                <label>Password:&nbsp;
                    <input 
                        type='text'
                        name='password'
                    />
                </label>
                <label>I agree to terms:&nbsp;
                    <input 
                        type='checkbox'
                        name='terms'
                    />
                </label>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form 