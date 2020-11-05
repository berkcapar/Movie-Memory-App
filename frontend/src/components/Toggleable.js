import React, { useState } from "react"

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideComponent = { display: visible ? "none" : "" }
  const showComponent = { display: visible ? "" : "none" }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div className="toggles">
      <div style={hideComponent}>
        <button className="showbutton" onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div className="signuptoggle" style={showComponent}>
        {props.children}
        <button className="hidebutton" onClick={toggleVisibility}>cancel</button>
      </div>

      <style jsx>{`
      .hidebutton,
      .showbutton{
        width:100%;
        margin-top: 1.125rem;
        padding:1.125rem;
        border-radius: 0.5rem;
        background-color: #660033;
        color: white;      
      }
      .signuptoggle{
        background-color: #660033;
        color: white;
      }
      `}</style>
    </div>
  )
}
export default Togglable
