// Write your Character component here
import React, { useState } from 'react'





const Character = props => {
    
    
   const characters  = props.characters
    
   console.log(props.characters)

     


    return(

        <div className="App">
            <h1 className="Header">Characters from "The Phantom Menace"</h1>
                <p>{props.name}</p>
            

        </div>


    )

    
    


}

export default Character;