type FLASH_CARD = {
   id: string
   question: string
   answer: string
   options: string[]
}

type CATEGORIES = {
   id: number
   name: string
}

type RESULTS = {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}
