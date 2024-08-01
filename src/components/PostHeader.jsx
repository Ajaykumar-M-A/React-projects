import React from 'react'

const PostHeader = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/blogpost">BlogPost</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/delete">Delete</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Login</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/register">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">View</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default PostHeader