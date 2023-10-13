export default async function getWikiResults(searchParams: string) {
   const searchTermParams = new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: searchParams,
      gsrlimit: "20",
      prop: "pageimages|extracts",
      exchars: "100",
      exintro: "true",
      explaintext: "true",
      exlimit: "max",
      format: "json",
      origin: "*",
   })
   try {
      const response = await fetch(
         "https://en.wikipedia.org/w/api.php?" + searchTermParams
      )
      return response.json()
   } catch (error) {
      console.log("error: ", error)
   }
}
