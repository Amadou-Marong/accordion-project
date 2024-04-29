import { useState } from "react";
import data from "./data";
import Question from "./SingleQuestion";
import Questions from "./Questions";
const App = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <Questions questions={questions} />
    </main>
  )
};
export default App;
