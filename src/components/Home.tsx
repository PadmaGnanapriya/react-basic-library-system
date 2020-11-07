import React from "react";

const Home:React.FC =() =>{
    document.title = "My Library | Home";
    return(
        <React.Fragment>
            <h1>Home</h1>
            <p>React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!</p>

        </React.Fragment>
    )
}
export default Home;
