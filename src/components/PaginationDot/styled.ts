import styled from "styled-components";
import { theme } from "../../theme";

export const StyledPaginationDotBody = styled.div<{color:'white' | 'black'}>`
    width: 24px;
    height: 24px;
    background-color: ${theme.colors.white};
    border: 1px solid  ${(props) => theme.colors[props.color]};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledPaginationDotActive = styled.div<{color:'white' | 'black'}>`
   width: 12px;
   height: 12px;
   background-color: ${(props) => theme.colors[props.color]};
   border: 1px solid  ${(props) => theme.colors[props.color]};
   border-radius: 100%;
`