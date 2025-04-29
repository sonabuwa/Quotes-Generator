import React from "react";
import { useState, useEffect } from "react";

export function Quotes() {
  const [quote, setQuote] = useState({ quote: "", author: "" });

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setQuote({ quote: data.quote, author: data.author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="QuoteStyle">
        <h1>{quote.quote}</h1>
        <p>{quote.author}</p>
        <button className="pushable" onClick={fetchQuote}>
          Generate
        </button>
      </div>
    </>
  );
}
