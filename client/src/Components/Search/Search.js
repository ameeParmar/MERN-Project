import React from "react";
import { MDBFormInline, MDBBtn, MDBNavbarNav } from "mdbreact";
import { useState } from 'react'


export default function Search() {

  
  

  const [inputState, setInputState] = useState({
    textEntry: ''
  })  

  // const search = (event) => {
  //   event.preventDefault()
  //   Item.getSearched(inputState.term)
  // }


  const handleInputChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value })
  }


  function handleNavbarClick(event, res) {
    event.preventDefault()
    localStorage.setItem('term', inputState.textEntry);
    window.location = '/Results'
    // search();
  }

  return (

    <>
      {/* {
        localStorage.term === ""
          ?
          <> */}
            <MDBNavbarNav right >
              <MDBFormInline className="md-form mr-auto m-0">
          <input className="form-control mr-sm-2 white-text" name="textEntry" type="text"
                  placeholder="Search" 
                  aria-label="Search"
                  onChange={handleInputChange} />
          <MDBBtn rounded
            gradient="peach" 
                size="sm" type="submit" className="mr-auto"
                  onClick={(e) => handleNavbarClick(e)}
                  // href="/Results"
                  >
                  Search
                </MDBBtn>
              </MDBFormInline>
            </MDBNavbarNav>
          {/* </>
          :
          <Redirect to="/results" />
      } */}
    </>

  )
}

