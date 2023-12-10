export interface Rocket {
    id: string,
    description: string,
    name: string
}

export interface GetRocketsResponse {
    data: {
        rockets: Rocket[]
    }
}