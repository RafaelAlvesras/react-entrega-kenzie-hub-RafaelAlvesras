import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    width: 100%;
    border-bottom: 1px solid var(--colorGrey3);
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        max-width: 770px;
        height: 72px;
        padding: 20px;
    }
    
    .link {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 0px 16.2426px;
        gap: 10.15px;

        width: 55.49px;
        height: 32px;
        
        background: var(--colorGrey3);
        border-radius: 4px;

        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;

        text-align: center;
        color: var(--colorGrey0);
    }

    .link:hover {
        background: var(--colorGrey2);
    }
`

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    gap: 1rem;

    .divBorderBottom {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        border-bottom: 1px solid var(--colorGrey3);
    }
    
    .userModule {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        max-width: 770px;
        height: 118px;
        padding: 20px;
    }

    .helloUser {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--colorGrey0);
    }

    .courseModuleUser {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--colorGrey1);
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        max-width: 770px;
        padding: 20px;
        gap: 23px;
    }

    section > p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
    }

    section > h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--colorGrey0);
    }
`