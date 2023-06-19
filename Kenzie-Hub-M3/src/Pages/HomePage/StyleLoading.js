import styled from "styled-components"

export const StyledLoading = styled.div`
    border: 1rem solid #f3f3f3;
    border-top: 1rem solid #E83F5B;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export const StyledDivLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`