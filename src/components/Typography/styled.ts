import styled from "styled-components";
import { theme } from "../../theme";

export const MainHeaderTypography = styled.p`
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.bolder};
    text-transform: ${theme.textTransform.uppercase};
    color: ${theme.colors.white}
`
export const HugeHeaderTypography = styled.p`
    font-size: ${theme.fontSize.huge};
    font-weight: ${theme.fontWeight.bolder};
    text-transform: ${theme.textTransform.uppercase};
    color: ${theme.colors.white}
`

export const BlockHeaderTypography = styled(MainHeaderTypography)`
    color: ${theme.colors.dark};
    font-size: ${theme.fontSize.medium};
`

export const AnchorTypography = styled.p`
    font-size: ${theme.fontSize.medium};
    font-weight: ${theme.fontWeight.light};
    color: ${theme.colors.white};
`

export const CardHeaderTypography = styled.p`
    font-size: ${theme.fontSize.default};
    font-weight: ${theme.fontWeight.bold};
    text-transform: ${theme.textTransform.uppercase};
    color: ${theme.colors.dark}
`

export const CardDescriptionTypography = styled.p`
    font-size: ${theme.fontSize.default};
    font-weight: ${theme.fontWeight.light};
    text-transform: ${theme.textTransform.default};
    color: ${theme.colors.grey}

`

export const ActionTypography = styled.p`
    font-weight: ${theme.fontWeight.default};
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.grey};

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

