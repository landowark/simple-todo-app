import React from "react"

const Header = () => {
  // Inline styling as JSX variable
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }
  return (
    <header style={headerStyle}>
    {/* Inline styling as a javascript object */}
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
        Simple Todo App
      </h1>
      <p style={{ fontSize: "19px" }}>
        Please add to-do item(s) through the input field
      </p>
    </header>
  )
}

export default Header
