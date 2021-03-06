import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

const app = () => {

    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question}
        answer={joke.answer}/>);

    return (
        <div>
            {jokeComponents}            
        </div>
    );
}

export default app;