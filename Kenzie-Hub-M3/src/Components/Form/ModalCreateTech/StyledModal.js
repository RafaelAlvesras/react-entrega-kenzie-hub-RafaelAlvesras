import styled from "styled-components"

export const StyledModal = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    top: 0;
    left: 0;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
        max-width: 369px;
        height: max-content; 
        gap: 20px;
        background: var(--colorGrey3);
    }

    .topDiv {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        background: var(--colorGrey2);
        color: var(--colorGrey0);
        padding: 10px 20px 10px 20px;
        font-weight: 400;
        font-size: 12px;
        font-style: normal;
    }   

    .divInputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
    }

    .buttonClose {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 130%;
        border: none;
        background: transparent;
        color: var(--colorGrey1);
    }

    .divInputs {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 90%;
        margin-bottom: 30px;
        gap: 20px;
    }

    label {
        font-style: normal;
        font-size: 12px;
        font-weight: 400;
    }

    .buttonSubmit {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 48px;
        border-radius: 4px;
        border: none;
        padding: 0px 22px 0px 22px;
        background-color: var(--colorColorPrimary);
        gap: 10.15px;
        font-weight: 700;
        font-size: 16.25px;
        color: var(--colorGrey0);
    }

    .buttonSubmit:hover {
        background-color: var(--colorColorPrimaryDisable);
    }

    input, select {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 48px;
        border-radius: 4px;
        border: none ;
        font-weight: 400;
        font-size: 16.25px;
        background: var(--colorGrey2);
        color: var(--colorGrey0);
        padding-left: 15px;
        ::placeholder {
            font-weight: 400;
            font-size: 16.25px;
            color: var(--colorGrey0);
        }
    }

    option {
        font-weight: 400;
        font-size: 16.25px;
    }

    .errorWarn {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--colorGrey1);
        color: var(--colorNegative);
    }

`