import { createGlobalStyle } from "styled-components"

export const GlobalReset = createGlobalStyle`
     *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
     }

     button {
        cursor: pointer;
     }

     ul,ol {
        list-style: none;
     }

    body {
        position: relative;
        background-color: var(--colorGrey4);
        color: var(--colorGrey0);
        font-family: 'Inter', sans-serif;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .custom-toast {
      background: var(--colorGrey2);
      border-radius: 4px;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: var(--colorGrey0);
    }
`