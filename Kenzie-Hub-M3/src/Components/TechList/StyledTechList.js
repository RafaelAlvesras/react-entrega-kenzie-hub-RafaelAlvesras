import styled from "styled-components"

export const StyledTechList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 400px;
    padding-top: 20px;
    background: var( --colorGrey3);
    overflow: auto;
    gap: 20px;
`

export const StyledTechLi = styled.li`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 49px;
    background-color: var(--colorGrey4);
    padding: 15px 30px 15px 30px;
    cursor: pointer;

    :hover {
        background-color: var(--colorGrey1);
    }

    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 14.21px;
        line-height: 22.33px;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--colorGrey1);
    }
`