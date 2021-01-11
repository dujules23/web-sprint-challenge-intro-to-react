// Write your Character component here
import React, { useState } from 'react'


import styled from 'styled-components'
// console.log(styled)

const Container = styled.div`
    text-align: center
`

const CharacterN = styled.h2`
    text-decoration: underline
    font-size: 3em
    text-shadow: 2px 2px 5px grey


`


const Character = props => {
    
    
   const characters  = props.characters
    
   console.log(characters)

     


    return(

        <div className="App">
            <h1 className="Header">Characters from "The Force Awakens"</h1>
               <div>
                <p>{characters.name}</p>
               </div> 

        </div>


    )

    
    


}

export default Character;