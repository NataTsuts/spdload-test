import { useQuery } from "@apollo/client";
import { HomeHeaderBlock } from "../modules/home/HeaderBlock"
import { TourCardCarousel } from "../modules/home/TourCardCarousel"
import { GetRocketsResponse } from "../types/rockets"
import { GET_ROCKETS } from "../gql/gqlRockets";

export const HomePage = () => {

    const { loading, data } = useQuery<GetRocketsResponse>(GET_ROCKETS);
    console.log(data)
    return (
        <>
            <HomeHeaderBlock />
            <TourCardCarousel isLoading={loading} rockets={data?.rockets ?? []} />
        </>

    )
}