import { Fragment } from "react";
import Navbar from "./Navbar";
import Habits from "./Habits";

const HomePage = () => {
    return (
        <Fragment>
            <Navbar/>
            <Habits />
        </Fragment>
    )
}
export default HomePage;