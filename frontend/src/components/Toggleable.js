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
        <button className="joinbutton" onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div className="signuptoggle" style={showComponent}>
        {props.children}
        <button className="hidebutton" onClick={toggleVisibility}>cancel</button>
      </div>

    </div>
  )
}
export default Togglable
