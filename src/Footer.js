import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "38vh",
        width: "100%",
        height: "45px"
    }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
        <p className='text-center py-2'>
            Copyright  &copy; MyTodosList.com
        </p> 
    </footer>
  )
}

export default Footer