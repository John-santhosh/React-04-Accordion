import { useState } from "react";
import data from "./data";
import Questions from "./Questions";
const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    if (id == activeId) {
      setActiveId(null);
      return;
    }
    setActiveId(id);
  };
  return (
    <main>
      <section className="container">
        <h1 className="title">Question</h1>
        {questions.map((question) => {
          return (
            <Questions
              toggleQuestion={toggleQuestion}
              {...question}
              key={question.id}
              activeId={activeId}
            />
          );
        })}
      </section>
    </main>
  );
};
export default App;
