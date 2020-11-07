import React from "react";
import Welcome from "./Welcome";
import TextArea from "./TextArea";

const Library:React.FC = () => {
    return(
        <React.Fragment>
            <Welcome/>
            <TextArea/>
        </React.Fragment>
    );
}
export default Library;
