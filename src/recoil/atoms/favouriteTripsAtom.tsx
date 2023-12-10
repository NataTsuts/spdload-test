import { atom } from "recoil";
import { Rocket } from "../../types/rockets";

export const favouriteTripsState = atom({
    key: 'favouriteTrips',
    default: [] as Rocket[], 
});