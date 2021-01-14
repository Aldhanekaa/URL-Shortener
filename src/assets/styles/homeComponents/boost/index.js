import styled from 'styled-components';
import devices from '../../themes'

export default styled.div.attrs(props => ({
    className: "boost"
}))`

    padding: 5rem 8%;

    h2.boost-heading {
        color: var(--white);
        padding-bottom: 2rem;
    }

    @media only screen and ${devices.tablet} {

         text-align: center;
    }   
`