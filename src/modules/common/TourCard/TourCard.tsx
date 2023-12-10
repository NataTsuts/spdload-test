import { Button } from "../../../components/Button"
import { StyledCardContainer } from "../../../components/CardContainer"
import { IconButton } from "../../../components/IconButton"
import { CardDescriptionTypography, CardHeaderTypography } from "../../../components/Typography/styled"
import { CardActionsContainer, CardTextContainer } from "./styled"

interface Props {
    imgSrc: string,
    header: string,
    description: string,
    onClickFavourite?: () => void,
    style?: React.CSSProperties,
    isFavourite?: boolean
}

export const TourCard = ({ imgSrc, header, description, onClickFavourite, style, isFavourite }: Props) => {
    return (
        <StyledCardContainer style={style}>
            <img src={imgSrc} alt="Tour" />

            <CardTextContainer>
                <CardHeaderTypography style={{ textAlign: 'center' }}>{header}</CardHeaderTypography>
                <CardDescriptionTypography style={{ marginTop: 16, textAlign: 'center' }}>
                    {description.length > 50 ? `${description.slice(0, 47)}...` : description}
                </CardDescriptionTypography>
            </CardTextContainer>

            <CardActionsContainer>
                <Button name="Buy" />
                <IconButton onClick={onClickFavourite} icon={isFavourite ? 'trash' : 'heart'} />
            </CardActionsContainer>
        </StyledCardContainer>
    )
}