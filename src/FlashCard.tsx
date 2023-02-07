import React from "react";

export default function FlashCard({ flashcard }) {
    return (
        <div>
            {flashcard.question}
            {flashcard.options.map((option,index) => (
                <h6>{index+1}- {option}</h6>
            ))}
        </div>
    );
}
 