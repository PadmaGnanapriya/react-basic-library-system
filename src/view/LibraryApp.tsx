import React from "react";
import Library from "../components/Library";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "../components/Home";
import About from "../components/About";
import {Nav, Navbar} from 'react-bootstrap';

const LibraryApp:React.FC = () => {

    return(
        <React.Fragment>

            <Router>
                <div>
                    <Navbar expand="lg" className="nav-bar-div">
                        <Navbar.Brand>My Library</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/" className="router-link-created ml-3">Home</Link>
                                <Link to="/library" className="router-link-created ml-3">Library</Link>
                                <Link to="/about" className="router-link-created ml-3">About</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/library">
                            <Library />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </React.Fragment>

    );
}
export default LibraryApp;
