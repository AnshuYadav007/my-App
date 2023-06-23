import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* <Link className="navbar-brand" to="/">{props.tittle}</Link> */}
            <a className="navbar-brand" href="#">{props.tittle}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {/* <Link className="nav-link" to="/">Home<span className="sr-only"></span></Link> */}
                        <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                    </li> */}
                </ul>
                {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      </div>
      <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
        </nav>
    )
}

Navbar.propTypes = {
    tittle: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    tittle: 'TextUtils',
    aboutText: 'About Us'
}
