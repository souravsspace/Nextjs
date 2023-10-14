import FlashCard from "./FlashCard"

type Props = {
   flashcards: FLASH_CARD[]
}

export default function FlashCardList({ flashcards }: Props) {
   return (
      <main className="card-grid p-3 md:py-6 px-10">
         {flashcards.map((flashcard) => (
            <FlashCard key={flashcard.id} {...flashcard} />
         ))}
      </main>
   )
}
