import {NavigationBar} from "./NavigationBar";
import Profile from "./Assets/ppReact.jpg"
import "./HomePage.css"

export function HomePage() {
    return(
        <div>
            <div>
                <NavigationBar/>
            </div>
            <div className="content">
                <img className="profilePicture" src={Profile} alt="Profile Picture"/>
            </div>
            <div className="summary">

            </div>
            <div className="experience">

            </div>

        </div>

    )
}