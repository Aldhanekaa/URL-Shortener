import React, { useEffect, useState, Fragment } from 'react'
import { Redirect } from 'react-router-dom';

import SignupPage from '../loginSignupPage/signup';
import LoginPage from '../loginSignupPage/login'

export default props => {
    const [page, setPage] = useState("");
    let content = "Loading"
    useEffect(() => {

        setPage(page => {
            return props.match.params.page;
        })

    }, [props.match.params.page])

    console.log(page)
    if (page === "") {
        content = content;
    } else if (page === "signup") {
        content = <SignupPage />;
    } else if (page === "login") {
        content = <LoginPage />
    } else {
        content = <Redirect to="/404" />
    }
    return (
        <Fragment>
            { content}
        </Fragment>
    )
}