import React, { useEffect, useState } from 'react'
import './App.css'

function App() {   


  const [ typeOfColor , setTypeOfColor ] = useState() ; 

  const [ color ,setColor ] = useState("black") ;

  function randomColorUtility(length) { 
     return Math.floor(Math.random() * length) ; 
  }

  function createRandomHexColor() { 

      const hex = [ "A", "B", "C", "D", "E", "F", 1 , 2 , 3 , 4 , 5 , 6 , 4 , 8 ,9] ; 

      let hexColor = "#" ; 
      for(let i = 0 ; i<6 ; i++) { 
           hexColor+= hex[randomColorUtility(hex.length)] ;
      } 

      console.log(hexColor) ;
      
      setColor(hexColor) ;
  } 

  function createRandomRgbColor() { 
       
      let r = Math.floor(Math.random() * 255 ) ; 
      let g = Math.floor(Math.random() * 255 )  ;
      let b = Math.floor(Math.random() * 255 )  ; 

      console.log(`rgb(${r},${g},${b})`) ;   

      let rgbColor = `rgb(${r},${g},${b})`

      setColor(rgbColor) ;
  }  


  useEffect( ()=> { 
     if(typeOfColor === "rgb") createRandomRgbColor() ; 
     else createRandomHexColor() ;

  } , [typeOfColor])

  return ( 
    
    <div style={{
        width: '100vw' , 
        height : "100vh" , 
        backgroundColor : color ,  

    }}> 

               
        <button onClick={ () => setTypeOfColor("hex") } className='hex'> create Hex Color </button>
        <button onClick={ () => setTypeOfColor("rgb") } className='rgb'> create rgb Color </button>
        <button onClick={ typeOfColor == "hex" ? createRandomHexColor : createRandomRgbColor } className='randomColor'> create random Color </button>
   

        <div style={{ 
            display: 'flex' , 
            justifyContent : 'center', 
            alignItems : 'center' , 
            color: "white" , 
            fontSize : "60px" , 
            marginTop: "50px" ,  
            flexDirection : 'column' , 
            gap : '20px' , 
        }}> 
        
             <h3> {typeOfColor == "rgb" ? "RGB Color" : "HEX Color"} </h3> 
             <h3> {color} </h3>  

          </div>
     
      </div> 

    
  )
}

export default App
