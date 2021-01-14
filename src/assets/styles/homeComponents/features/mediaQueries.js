import devices from '../../themes';
import styled from 'styled-components'

// tablet 

const tabletDevice = `
@media only screen and ${devices.tablet} {
    h2.section-heading {
        margin: 0 auto;
        text-align: center;
        width: max-content;
    }
    p.section-features-info {
        max-width: 550px;
        margin: 0 auto;
        text-align:center;
    }
    div.features {
        text-align: center;
    }
}
`

const laptopDevice = `
@media only screen and ${devices.laptop} {
    p.section-features-info {
        padding-bottom: 0;
    }
    div.features {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        div.feature {
            text-align: left;
            &:nth-child(2) {
                margin-top: 6rem;
            }
            &:last-child {
                margin-top: 12rem;
            }

            &:after {
                height: 10px;
                width: 100%;
                position: absolute;
                left: 100%;
                top: 50%;
                z-index: -1;
            }
            div.feature-icon-container {
                left: 20%;
            }
        }
    }
}
`

export { tabletDevice, laptopDevice };