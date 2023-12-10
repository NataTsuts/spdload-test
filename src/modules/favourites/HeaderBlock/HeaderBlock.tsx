import { StyledFlexDiv } from "../../../components/FlexDiv"
import { MainHeaderTypography } from "../../../components/Typography/styled"
import { StyledFavouritesHeaderBlock } from "./styled"

export const FavouritesHeaderBlock = () => {
    return (
        <StyledFavouritesHeaderBlock>
            <MainHeaderTypography>Favourites</MainHeaderTypography>
        </StyledFavouritesHeaderBlock>
    )
}