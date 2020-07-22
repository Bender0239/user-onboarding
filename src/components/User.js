import React from 'react'
import styled from 'styled-components'

const StyledUser = styled.div`
    border: 5px solid black;
    border-radius: 3px;
    margin: 10px;
    padding: 5px;
`

function User(props) {
    const { details } = props
    return (
        <StyledUser>
            <div>Name: {details.first_name} {details.last_name}</div>
            <div>Email: {details.email}</div>
            <img src={details.avatar}></img>
        </StyledUser>
    )
}

export default User