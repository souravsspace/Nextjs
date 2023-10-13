import Item from "@/components/Item"
import getWikiResults from "@/lib/getWikiResults"

type Props = {
   params: {
      searchParams: string
   }
}

export async function generateMetadata({ params }: Props) {
   const wikiResults: Promise<SEARCH_RESULT> = await getWikiResults(
      params.searchParams
   )
   const data = await wikiResults
   const displayTerms =
      params.searchParams[0].toUpperCase() +
      params.searchParams.replaceAll("%20", " ").slice(1)

   if (!data?.query?.pages) {
      return {
         title: `${displayTerms} not found!`,
      }
   }
   return {
      title: `${displayTerms}`,
      description: `Search results for ${displayTerms}`,
   }
}

export default async function SearchResults({ params }: Props) {
   const wikiResults: Promise<SEARCH_RESULT> = await getWikiResults(
      params.searchParams
   )
   const data = await wikiResults
   const results: RESULT[] | undefined = data?.query?.pages
   const displayTerms =
      params.searchParams[0].toUpperCase() +
      params.searchParams.replaceAll("%20", " ").slice(1)

   const content = (
      <main className="px-3 md:px-12 py-2 md:py-10">
         {results ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
               {Object.values(results).map((result) => (
                  <Item key={result.pageid} result={result} />
               ))}
            </div>
         ) : (
            <div className="flex justify-center items-center h-screen">
               <h2 className="text-xl">{displayTerms} not found!</h2>
            </div>
         )}
      </main>
   )

   return content
}
