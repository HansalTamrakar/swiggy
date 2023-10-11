import React from 'react'
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <div>Error</div>
            <div>Something went Wrong</div>
            <h2>{err.status + " : " + err.statusText}</h2>
        </div>
    )
}
export default Error;
