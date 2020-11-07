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
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">My Library</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/">Home</Link>
                                <Link to="/library">Library</Link>
                                <Link to="/about">About</Link>
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
