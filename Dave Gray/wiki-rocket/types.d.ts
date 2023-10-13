type RESULT = {
   pageid: string
   title: string
   extract: string
   thumbnail?: {
      source: string
      width: number
      height: number
   }
}

type SEARCH_RESULT = {
   query?: {
      pages?: RESULT[]
   }
}
