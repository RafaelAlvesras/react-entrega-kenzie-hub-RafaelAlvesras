import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.375rem;
    padding: 2.625rem 1.375rem;
    width: 95%;
    max-width: 369px;
    height: max-content;
    background: var( --colorGrey3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13.0293px;
        gap: 8.14px;

        width: 100%;
        height: 38.5px;

        background: var(--colorGrey2);

        border: 0.9772px solid var(--colorGrey2);
        border-radius: 3.20867px;
    }

    input::placeholder {
        
        font-style: normal;
        font-weight: 400;
        font-size: 16.2426px;
        line-height: 26px;

        color: var(--colorGrey1);
    }

    select {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13.0293px;
        gap: 8.14px;

        width: 100%;
        height: 38.5px;

        background: var(--colorGrey2);

        border: 0.9772px solid var(--colorGrey2);
        border-radius: 3.20867px;

        font-style: normal;
        font-weight: 400;
        font-size: 14.2426px;
        line-height: 26px;

        color: var(--colorGrey1);
    }

    label {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 0px;

        color:  var(--colorGrey0);
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 22px;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--colorGrey1);
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;

        width: 100%;
        height: 38.5px;

        background:var( --colorColorPrimary);
        border: 1.2182px solid var( --colorColorPrimary);
        border-radius: 4.06066px;

        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;

        color: #FFFFFF;
    }

    button:hover {
        background:var(--colorColorPrimaryDisable);
        border: 1.2182px solid var(--colorColorPrimaryDisable);
    }

    .link {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        text-decoration: none;

        width: 100%;
        height: 38.5px;

        background:var( --colorGrey1);
        border: 1.2182px solid var( --colorGrey1);
        border-radius: 4.06066px;

        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;

        color: #FFFFFF;
    }

    .link:hover {
        background:var( --colorGrey2);
        border: 1.2182px solid var( --colorGrey2);
    }
`