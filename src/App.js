import './App.css';
const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components."
  },
  {
    id: 2,
    question: "How does React handle state management?",
    answer: "React manages state using the useState hook for local state and Context API, Redux, or Recoil for global state management."
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files. It makes React component rendering easier."
  },
  {
    id: 4,
    question: "What are React hooks?",
    answer: "Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, and useContext."
  },
  {
    id: 5,
    question: "What is the difference between props and state?",
    answer: "Props are read-only and passed from parent to child components, while state is mutable and managed within a component."
  },
  {
    id: 6,
    question: "How does React's virtual DOM work?",
    answer: "React's virtual DOM is a lightweight copy of the actual DOM. When changes occur, React updates only the necessary parts of the real DOM, improving performance."
  },
  {
    id: 7,
    question: "What is the purpose of useEffect?",
    answer: "useEffect is a React hook used to handle side effects such as fetching data, updating the DOM, or subscribing to events in function components."
  },
  {
    id: 8,
    question: "What are React fragments?",
    answer: "React fragments allow you to group multiple elements without adding an extra parent node to the DOM, improving performance and structure."
  }
];


function App() {
  return (
    <div className="App">
      <div className="faq-accordion">
        <h1>React.js FAQ: Everything You Need to Know</h1>

          {faqs.map((element) => {
            return(
              <div className="faq" key={element.id}>
                <span>{element.question}</span>
                <span>{element.answer}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
