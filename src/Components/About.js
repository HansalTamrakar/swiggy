import React from 'react'
import ProfileFunctionalComponent from './ProfileClass'
import { Outlet } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <div>About US Page</div>
            <div>Finding the Path</div>
            <Outlet />
            <ProfileFunctionalComponent name={"Hansal"} />
        </div>
    )
}
export default About;
