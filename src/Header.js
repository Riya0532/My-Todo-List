import React from 'react'


export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" tdata-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">About</a>
                </li>
            </ul>
          </div>
          <div className="mx-5">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
