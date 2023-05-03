import { FC } from "react";
import Navigation from "../navigation/Navigation";
import { Outlet } from "react-router-dom";

const Root: FC = () => {
    return (
        <>
            <Navigation />
            <Outlet /> 
        </>
    )
}

 export default Root;