export default interface ApiProps {
    id: number,
    title: string,
    userId:string,
    body:string
}

export interface DataApiResponse {
    task : ApiProps[]
}