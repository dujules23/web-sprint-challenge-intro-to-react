// Write your Character component here
import React, { useState } from 'react'
import axios from 'axios'

import styled from 'styled-components'


const Container = styled.div`
    text-align: center
    
`

const CharacterN = styled.h2`
    text-decoration: underline
    font-size: 3em
    text-shadow: 2px 2px 5px red
    border: 3px black;
    border-radius:10px;
    


`
// const CharacterCard = styled.div`
//     border: 1px solid white;

// `

const Character = props => {
    
    
   const { people }  = props
    
   console.log(people)
   
   const names = []
   people.map(person => {
      
        console.log(person.name)
        names.push(person.name)

   })
     
//when writing jsx, put javascript in curly braces {}.

    return(

        <Container className="App">
            <h1 className="Header">Characters from "Star Wars"</h1>
            
               
                {names.map( (name, index) => 
                   <CharacterN tag="h2" key={index}>{name}</CharacterN>)}
               

        </Container>


    )

    
    


}

export default Character;