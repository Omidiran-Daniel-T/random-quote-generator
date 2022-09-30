import React from "react";

const Quote = ({ quote, randomizeQuote }) => {
  return (
    <section className="app" style={{ backgroundColor: quote.color }}>
      <section className="" id="quote-box">
        <div className="" id="text" style={{ color: quote.color }}>
          <i className="fa-solid fa-quote-left icon"></i>
          {quote.text}
        </div>
        <div className="" id="author" style={{ color: quote.color }}>
          -{quote.author}
        </div>
        <button
          className=""
          id="new-quote"
          onClick={() => randomizeQuote()}
          style={{ backgroundColor: quote.color }}
        >
          New quote
        </button>
        <a
          href="#"
          className=""
          id="tweet-quote"
          style={{ color: quote.color }}
        >
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-square-facebook"></i>
        </a>
      </section>
    </section>
  );
};

export default Quote;
