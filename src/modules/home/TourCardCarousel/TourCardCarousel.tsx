import AliceCarousel from "react-alice-carousel";
import { TourCard } from "../../common/TourCard"
import 'react-alice-carousel/lib/alice-carousel.css';
import { StyledFlexDiv } from "../../../components/FlexDiv";
import { Rocket } from "../../../types/rockets";
import { useRef } from "react";
import { PaginationDot } from "../../../components/PaginationDot/styled";
import { IconButton } from "../../../components/IconButton";
import { BlockHeaderTypography } from "../../../components/Typography/styled";
import { favouriteTripsState } from "../../../recoil/atoms/favouriteTripsAtom";
import { useRecoilState } from "recoil";

interface Props {
    rockets: Rocket[],
    isLoading?: boolean,
}

export const TourCardCarousel = ({ rockets, isLoading }: Props) => {

    const [trips, setTrips] = useRecoilState<Rocket[]>(favouriteTripsState);

    const toggleFavourite = (newTrip: Rocket) => {
        if (trips.find((trip) => trip.id === newTrip.id)) {
            //if this trip exists - delete it
            const temp = trips.filter((trip) => trip.id !== newTrip.id)
            setTrips(temp)
        } else {
            //else add new trip to favourites atom
            setTrips([...trips, newTrip]);
        }
    };

    const carouselItems = rockets.map((rocket, index) => {
        return (
            <StyledFlexDiv key={rocket.id} style={{ margin: '0 5px' }}>
                <TourCard
                    imgSrc={require(`../../../assets/images/space-${index % 3 + 1}.png`)}
                    header={rocket.name}
                    description={rocket.description}
                    onClickFavourite={() => { toggleFavourite(rocket) }}
                    //if rocket is in atom
                    isFavourite={trips.includes(rocket)}
                />
            </StyledFlexDiv>
        )
    })

    const responsive = {
        0: { items: 1 },
        870: { items: 2 },
        1280: { items: 3 },
    };

    const carousel = useRef<AliceCarousel>(null);

    return (
        <div style={{ marginTop: '96px', padding: "0 80px" }}>
            <StyledFlexDiv style={{
                justifyContent: "space-between",
                marginBottom: "40px"
            }}>
                <BlockHeaderTypography id="tours">popular tours</BlockHeaderTypography>
                <div style={{ display: "flex", gap: "16px" }}>
                    <IconButton
                        onClick={() => carousel?.current?.slidePrev()}
                        icon="arrowLeft"
                        style={{ marginRight: "16px" }} />
                    <IconButton
                        onClick={() => carousel?.current?.slideNext()}
                        icon="arrowRight"
                    />
                </div>
            </StyledFlexDiv>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <AliceCarousel
                    ref={carousel}
                    items={carouselItems}
                    disableButtonsControls
                    renderDotsItem={({ isActive }) => (
                        <PaginationDot isactive={isActive} />
                    )}
                    responsive={responsive}
                />
            )}
        </div>
    )
}