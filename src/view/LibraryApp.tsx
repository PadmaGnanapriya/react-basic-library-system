import React from "react";
import Library from "../components/Library";
// @ts-ignore
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
import Home from "../components/Home";
import About from "../components/About";
import {Nav, Navbar} from 'react-bootstrap';

const LibraryApp:React.FC = () => {
    let browserHistory;
    return(
        <React.Fragment>

            <Router>
                <div>
                    <Navbar expand="lg" className="nav-bar-div">
                        <Navbar.Brand>My Library</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/" className="router-link-created">Home</Link>
                                <Link to="/library" className="router-link-created">Library</Link>
                                <Link to="/about" className="router-link-created">About</Link>
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
