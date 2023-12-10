import { selector } from "recoil";
import { favouriteTripsState } from "../atoms/favouriteTripsAtom";

export const favouriteTrips = selector({
    key: 'favouriteTrips',
    get: ({ get }) => {
        const trips = get(favouriteTripsState);

        return trips;
    },
});