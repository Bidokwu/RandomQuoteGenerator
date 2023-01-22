import React, {useState, useEffect} from "react"
import './App.css';

function App() {

  const [quotes, setQuotes] = useState([])
  const [randomQuote, setRandomQuote] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json();

      setQuotes(data)
      let randIndex = Math.floor(Math.random() * data.length)
      setRandomQuote(data[randIndex])
    }
    fetchData();
  }, [])

  const getNewQuote = () => {
    let randIndex = Math.floor(Math.random() * quotes.length)
      setRandomQuote(quotes[randIndex])
  }
  return (
    <div className="wrapper">
      <header>Random Quotes</header>
      <div className="content">
        <br />
        <div className="quote-area">
          <i className="fas fa-quote-left"></i>
          <p className="quote">
            {
              <>
              <h5>{randomQuote.author || "No author"}</h5>
              <p>&quot;{randomQuote.text}&quot;</p>
              <br />
              <div className="btncenter">
              <button onClick={getNewQuote}>New Quote</button>
              </div>
              </>
            }
            </p>
          <i className="fas fa-quote-right"></i>
        </div>
      </div>
    </div>


    // <div className="jumbotron"> 
    //   Hello world react 
      
    //   {quotes.map(quote => (
    //     <div>{quote.text}</div>
    //   ))}
    // </div>
  );
}

export default App;
