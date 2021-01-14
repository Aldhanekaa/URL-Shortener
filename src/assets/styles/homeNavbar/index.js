import styled from 'styled-components'

export default styled.nav.attrs(props => ({
    className: "main-nav"
}))`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 8%;
    position: relative;
    background-color: var(--white);
    ul.nav-links {
        background-color: var(--dark-violet);
        border-radius: 12px;
        display: none;
        flex-flow: column nowrap;
        list-style-type: none;
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        width: 84%;
        padding: 1.5rem;
        text-align: center;
        &.active {
            display: flex;
            z-index: 99;
        }

      li.nav-link {
        padding: 1.2rem 0;
        position: relative;
        &:nth-child(3) {
          border-bottom: 1px solid hsl(0, 0%, 30%);
        }
        &:last-child {
          padding-top: 0;
        }
    
        a.nav-link-anchor {
          font-weight: 700;
          text-transform: capitalize;
          &.btn.btn-sign-up {
            padding: 0.8rem;
            display: block;
            border-radius: 25px;
          }
        }
      }
    }
    
    i#icon-mobile-nav-toggle {
      cursor: pointer;
      font-size: 1.8rem;
    }
`