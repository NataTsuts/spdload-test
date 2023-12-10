import { StyledFlexDiv } from "../../../components/FlexDiv"
import Grid from "../../../components/Grid/styled"
import { ActionTypography } from "../../../components/Typography/styled"
import { Rocket } from "../../../types/rockets"
import { TourCard } from "../../common/TourCard"

interface Props {
    trips: Rocket[]
    onUnfavourite: (trip: Rocket) => void
    onClearAll: VoidFunction
}

export const FavouritesList = ({ trips, onUnfavourite, onClearAll }: Props) => {
    return (
        <div style={{ marginTop: "64px" }}>
            <StyledFlexDiv style={{ justifyContent: 'flex-end', padding: '80px' }}>
                <ActionTypography onClick={onClearAll}>
                    Clear All
                </ActionTypography>
            </StyledFlexDiv>
            <Grid style={{ marginTop: "40px" }}>
                {trips.map((trip, index) => (
                    <TourCard
                        key={trip.id}
                        imgSrc={require(`../../../assets/images/space-${index % 3 + 1}.png`)}
                        header={trip.name}
                        description={trip.description}
                        onClickFavourite={() => onUnfavourite(trip)}
                        //Since it is from favourites
                        isFavourite
                    />
                ))}
            </Grid>
        </div>
    )
}