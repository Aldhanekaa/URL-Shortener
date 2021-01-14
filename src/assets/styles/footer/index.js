import styled from 'styled-components'
import devices from '../themes'

export default styled.footer`
background-color: var(--very-dark-violet);
padding: 4rem 8% 2rem;

div.footer-nav {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    width: 100%;
    h4.footer-nav-title {
        color: var(--white);
        padding-bottom: 1rem;
    }

    h4.footer-nav-title,
    .footer-nav-anchor {
        font-size: 1rem;
        text-transform: capitalize;
    }
    .footer-nav-anchor {
        color: var(--gray);
        padding-bottom: 0.3rem;
        transition: all 0.2s;
    }
}

div.social-media {
    padding: 1rem 0;
    width: 100%;
    a.social-media-link {
        margin-right: 1rem;
        transition: .3s;
        font-size: 22px;
        &:hover {
            color: hsl(180, 66%, 49%);
        }
    }
}

@media only screen and ${devices["tablet"]} {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: auto;

    svg.logo-footer {
        grid-area: 1 / 1 / auto / span 2;
    }

    div.footer-nav {
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 0;
        &.footer-nav-features {
            grid-area: 1 / 3 / auto / span 2;
        }
        &.footer-nav-resources {
            grid-area: 1 / 5 / auto / span 2;
        }
        &.footer-nav-company {
            grid-area: 1 / 7 / auto / span 2;
        }

        a.footer-nav-anchor:hover {
            color: var(--cyan);
        }
    }

    div.social-media {
        grid-area: 1 / 9 / auto / span 2;
        justify-self: flex-end;
        padding-top: 0;
    }
}


`