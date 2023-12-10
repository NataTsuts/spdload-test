import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";

 export const StyledHeader = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    background-color: rgba(30,30,30, 0.48);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 19px 80px;
 `

 export const StyledNavLink = styled(NavLink)`
   font-size: ${theme.fontSize.small};
   font-weight: ${theme.fontWeight.medium};
   text-transform: ${theme.textTransform.uppercase};
   color: ${theme.colors.white};
   margin: 0 16px;
   text-decoration: none;

   &:hover{
      background-color: rgba(255,255,255,0.8);
      color: ${theme.colors.black};
   }
 `