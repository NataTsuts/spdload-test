import { useRecoilState } from "recoil";
import { FavouritesHeaderBlock } from "../modules/favourites/HeaderBlock/HeaderBlock"
import { Rocket } from "../types/rockets";
import { favouriteTripsState } from "../recoil/atoms/favouriteTripsAtom";
import { EmptyList } from "../modules/favourites/EmptyList";
import { FavouritesList } from "../modules/favourites/FavouritesList";

export const FavouritesPage = () => {

    const [trips, setTrips] = useRecoilState<Rocket[]>(favouriteTripsState);

    const handleUnfavourite = (trip: Rocket) => {
        setTrips(trips.filter((el) => el.id !== trip.id))
    }

    const handleClearList = () => {
        setTrips([])
    }

    return (
        <div>
            <FavouritesHeaderBlock />

            {!trips.length ? <EmptyList /> :
                <FavouritesList
                    trips={trips}
                    onClearAll={handleClearList}
                    onUnfavourite={handleUnfavourite}
                />
            }
        </div>
    )
}