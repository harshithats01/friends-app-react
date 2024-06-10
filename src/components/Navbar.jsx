import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">Friends App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Add</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/view">view </Link>
                            </li>
                            
                        
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar