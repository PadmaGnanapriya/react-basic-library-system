import React from "react";
import Library from "../components/Library";
// @ts-ignore
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
import Home from "../components/Home";
import About from "../components/About";

const LibraryApp:React.FC = () => {
    let browserHistory;
    return(
        <React.Fragment>

            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/library">Library</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>

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
