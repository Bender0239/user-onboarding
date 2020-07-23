import React from 'react'
import styled from 'styled-components'

const StyledUser = styled.div`
    border: 5px solid black;
    border-radius: 3px;
    margin: 10px;
    padding: 5px;
`
//Name not working to add user because keys are different

function User(props) {
    const { details } = props
    return (
        <StyledUser>
            
            <div>Name: {details.first_name} {details.last_name}</div>
            <div>Email: {details.email}</div>
            <img alt='' src={details.avatar}></img>
        </StyledUser>
    )
}

export default User