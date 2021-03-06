export interface LocationItemType {
   id: string
   name: string
}

export interface StayType {
   id: string
   city: string
   country: string
   superHost: boolean
   title: string
   rating: number
   maxGuests: number
   type: string
   beds: number | null
   photo: string
}
