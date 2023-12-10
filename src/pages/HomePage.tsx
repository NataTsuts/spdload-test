import { HomeHeaderBlock } from "../modules/home/HeaderBlock"
import { TourCardCarousel } from "../modules/home/TourCardCarousel"
import { GetRocketsResponse } from "../types/rockets"

export const HomePage = () => {
    const mockData: GetRocketsResponse = {
        data: {
            rockets: [
                {
                    id: "1",
                    name: "name1",
                    description: "desc1"
                },
                {
                    id: "1",
                    name: "name1",
                    description: "desc1"
                },
                {
                    id: "1",
                    name: "name1",
                    description: "desc1"
                },
                {
                    id: "1",
                    name: "name1",
                    description: "desc1"
                }
            ]
        }
    }

    return (
        <>
            <HomeHeaderBlock />
            <TourCardCarousel rockets={mockData.data.rockets} />
        </>

    )
}