import { Fragment } from "react";
import Navbar from "./Navbar";
import Habits from "./Habits";

const Homepage = () => {
    return (
        <Fragment>
            <Navbar/>
            <Habits />
        </Fragment>
    )
}
export default Homepage;