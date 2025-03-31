import { useEffect, useState } from "react";
import "./App.css";
import faqs from './faq.json'

function App() {
  const [isActive, setIsActive] = useState(null);
  const [data, setData] = useState([])

  useEffect(() => {
    setData(faqs)
  })
  const handleFaqClick = (id) => {
    setIsActive(isActive === id ? null : id);
  };

  return (
    <div className="app">
      <div className="accordion-app">
        <div className="faq-accordion">
          <h1>React.js FAQ: Everything You Need to Know</h1>
          {data.map((element) => {
            return (
              <div className="faq" key={element.id}>
                <div
                  className="faq-question"
                  onClick={() => handleFaqClick(element.id)}
                >
                  <span className="question">{element.question}</span>
                  <span className="arrow">
                    {isActive === element.id ? "↑" : "↓"}
                  </span>
                </div>
                {isActive === element.id && (
                  <div
                    className={`faq-answer ${
                      isActive === element.id ? "show" : ""
                    }`}
                  >
                    {element.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
