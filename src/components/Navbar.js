import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="#">{props.tittle}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
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
