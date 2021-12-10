import React from "react";
import styled from "styled-components";
// Write your Character component here
const Div = styled.div`
    border: .5em solid black;
    background-color: rgba(0, 0, 0, 0.5);
    width: 50%;
    margin: 10% 25% ;
    color: white;
    font-stroke: .02em black;
`
export default function CharacterMaker(props) {
    return (    
        <Div className='characterCard'>
            <h3 class='characterName'>{props.name}:</h3>
            <p class='characterHeight'>Height: {props.height}</p>
            <p class='characterGender'>Sex: {props.gender}</p>
        </Div>
    )
}
