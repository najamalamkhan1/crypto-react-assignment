import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-l navbar-light bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>MoneyGram</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'crypto'}>Crypto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'aboutus'}>About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'contactus'} aria-disabled="true">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav