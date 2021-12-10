import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Write your Character component here

export default function CharacterMaker(props) {
    return (    
        <div className='characterCard'>
            <h3 class='characterName'>{props.name}:</h3>
            <p class='characterHeight'>Height: {props.height}</p>
            <p class='characterGender'>Sex: {props.gender}</p>
        </div>
    )
}
