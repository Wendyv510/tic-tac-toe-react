import React from 'react'; 

const StyledMessage = styled.h2`
    font-size: 1.8em;
    color: red; 
` 

const Message = ({ winnerToken }) => {
    return <StyledMessage> {winnerToken} has won the game!</StyledMessage>
}

export default Message 