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
    text-shadow: 2px 2px 5px grey


`


const Character = props => {
    
    
   const { people }  = props
    
   console.log(people)
   
   const names = []
   people.map(person => {
      
        console.log(person.name)
        names.push(person.name)

   })
     


    return(

        <Container className="App">
            <h1 className="Header">Characters from "Star Wars"</h1>
               <div>
               {names.map( (name, index) => 
                   <CharacterN key={index}>{name}</CharacterN>)}
      
      
               </div> 

        </Container>


    )

    
    


}

export default Character;