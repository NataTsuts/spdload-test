import styled from "styled-components";
import { theme } from "../../theme";

export const MainHeaderTypography = styled.p`
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.bolder};
    text-transform: ${theme.textTransform.uppercase};
    color: ${theme.colors.white}
`

export const BlockHeaderTypography = styled(MainHeaderTypography)`
    font-size: ${theme.fontSize.medium};
`

export const CardHeaderTypography = styled.p`
    font-size: ${theme.fontSize.default};
    font-weight: ${theme.fontWeight.bold};
    text-transform: ${theme.textTransform.uppercase};
`

export const CardDescriptionTypography = styled(CardHeaderTypography)`
    font-weight: ${theme.fontWeight.light};
    text-transform: ${theme.textTransform.default};
`

