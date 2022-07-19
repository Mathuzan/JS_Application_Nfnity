import React from "react";
import mathu from "./images/Mathushan.jpg";
import { BrowserHistory } from "history";


export class home extends React.Component {
    onNavigation() {
        BrowserHistory.push("/home");
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <img src={mathu} height={200} width={200} />
            </div>
        )
    }
}


