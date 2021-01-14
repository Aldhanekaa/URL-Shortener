import styled from 'styled-components'
import { tabletDevice, laptopDevice } from './mediaQueries'

export default styled.section`
    width: 100%;
    padding: 0 8%;
    
    h2.section-heading,
    h3.feature-title {
        text-transform: capitalize;
    }
    h2.section-heading {
        padding-bottom: 1.5rem;
    }
    p.section-features-info {
        padding-bottom: 5rem;
    }
    div.features {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        div.feature {
            background-color: var(--white);
            border-radius: 8px;
            box-shadow: 0 2px 6px hsla(0, 0%, 0%, 0.05);
            padding: 5rem 1rem 2rem;
            margin-bottom: 6rem;
            position: relative;
            max-width: 325px;
            &::after {
                content: "";
                background-color: var(--cyan);
                height: 6rem;
                width: 10px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 100%;
            }
            &:last-child:after {
                display: none;
            }
        
            div.feature-icon-container {
                background-color: var(--dark-violet);
                border-radius: 50%;
                padding: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100px;
                width: 100px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: -15%;
                color: #2BD0D0;
                font-size: 35px;
            }
            h3.feature-title {
                padding-bottom: 1rem;
            }
            p.feature-info {
                font-size: 1rem;
            }
        }
    }

    ${tabletDevice}
    ${laptopDevice}

`