import { useState } from "react"
import FlashCardList from "./FlashCardList"

function App() {
  const SAMPLE_FLASHCARDS = [
    {
      id: 1, 
      question: "What is 2+2?",
      answer: '4',
      options: [
        '2',
        '3',
        '4',
        '5'
      ]
    },
    {
      id: 2, 
      question: "What is 3+5?",
      answer: '8',
      options: [
        '6',
        '8',
        '4',
        '3'
      ]
    },
    {
      id: 3, 
      question: "What is 7+2?",
      answer: '9',
      options: [
        '3',
        '5',
        '4',
        '9'
      ]
    },
  ]
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS)

  return (
   <>
      <FlashCardList flashcards={flashcards} />
   </>
  )
}



export default App
