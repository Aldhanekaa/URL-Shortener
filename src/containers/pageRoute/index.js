import React, { useEffect, useState, Fragment } from 'react'
import { Redirect } from 'react-router-dom';

export default props => {
    const [page, setPage] = useState("");
    let content = "Loading"
    useEffect(() => {

        setPage(page => {
            return props.match.params.page;
        })

    }, [props.match.params.page])

    console.log(page)

    return (
        <Fragment>
            { content}
        </Fragment>
    )
}