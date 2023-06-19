import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9rem;
    padding: 1rem;
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 23.125rem;
    }

    .link {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 16.2426px;
        gap: 10.15px;
        text-decoration: none;
     
        width: 67.49px;
        height: 40.11px;
        background: var(--colorGrey3);
        border-radius: 4px;

        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 237%;

        text-align: center;

        color: #F8F9FA;
    }

    .link:hover {
        background: var(--colorGrey2);
    }
`
