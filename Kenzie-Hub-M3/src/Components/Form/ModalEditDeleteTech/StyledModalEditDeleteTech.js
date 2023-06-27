import styled from "styled-components"

export const StyledDivButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 5%;

    .buttonEditTech {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65%;
        height: 48px;

        background-color: var(--colorColorPrimary);
        border: none;
        border-radius: 4px;

        font-weight: 700;
        font-size: 16.25px;
        color: var(--colorGrey0);
    }

    .buttonEditTech:hover {
        background-color:var(--colorColorPrimaryDisable);
    }

    .buttonDeleteTech {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 48px;

        background-color: var(--colorGrey1);
        border: none;
        border-radius: 4px;

        font-weight: 700;
        font-size: 16.25px;
        color: var(--colorGrey0);
    }

    .buttonDeleteTech:hover {
        background-color: var(--colorGrey2);
    }
`