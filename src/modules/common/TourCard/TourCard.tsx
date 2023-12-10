import { Button } from "../../../components/Button"
import { StyledCardContainer } from "../../../components/CardContainer"
import { IconButton } from "../../../components/IconButton"
import { CardDescriptionTypography, CardHeaderTypography } from "../../../components/Typography/styled"
import { CardActionsContainer, CardTextContainer } from "./styled"

interface Props {
    imgSrc: string,
    header: string,
    description: string,
    onClick?: () => void
    style?: React.CSSProperties
}

export const TourCard = ({ imgSrc, header, description, onClick, style }: Props) => {
    return (
        <StyledCardContainer style={style}>
            <img src={imgSrc} alt="" />

            <CardTextContainer>
                <CardHeaderTypography style={{ textAlign: 'center' }}>{header}</CardHeaderTypography>
                <CardDescriptionTypography style={{ marginTop: 16, textAlign: 'center' }}>
                    {description.length > 50 ? `${description.slice(0, 47)}...` : description}
                </CardDescriptionTypography>
            </CardTextContainer>

            <CardActionsContainer>
                <Button name="Buy" />
                <IconButton icon="heart" />
            </CardActionsContainer>
        </StyledCardContainer>
    )
}