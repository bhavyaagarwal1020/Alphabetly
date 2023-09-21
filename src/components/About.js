import React, {useState} from 'react'

export default function About() {

   const [myStyle, setMystyle] = useState({
    color: "black",
   backgroundColour:"white"
})

const [btnTxt, setBtnTxt] = useState("Enable Dark Mode")

const toggleStyle = ()=>{
    if(myStyle.color ==='white')
    {
        setMystyle({
        color:'black',
        backgroundColor:'white' 
    })
    setBtnTxt("Enable Dark Mode")
}

    else{
        
        setMystyle({
            color:'white',
            backgroundColor:'black'
        })
        setBtnTxt("Enable Light Mode")

    }
    
}
         


  return (
    <div className="container" style={myStyle}>
      <div className="accordion" id="accordionExample">
  
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Description
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is an Alphabetly React App.</strong> This is a basic single web page react app alphabelty, which allows user to enter text and convert it to uppercase and lowercase and calculates the time taken to read each character and also counts number of words and charcters. This app enhances user experience by allowing the user to <code>enable dark and light mode.</code>
      </div>
    </div>
  </div>
  
</div>

<div className="container">
<button type="button" className="btn btn-secondary" my-4 mx-4 onClick={toggleStyle}>{btnTxt}</button>
</div>
    </div>
  )
}
