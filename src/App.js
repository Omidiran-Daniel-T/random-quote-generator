import "./App.css";
import { useState } from "react";
import Quote from "./component/quote";

const getQuotes = () => {
  return [
    {
      text: "It has been suggested at various times that I should start an operation in the United Kingdom but - bearing in mind my age and medical history - I think this would be not a very sensible way to go forward",
      author: "Martin Fleischmann",
      color: "#47402F",
    },
    {
      text: "I have a terrific marriage, but unlike a lot of relationships where they ebb and flow, no matter what happens you fall deeper and deeper in love every day. It's kind of the best thing that can happen to you. It's thrilling",
      author: "Hugh Jackman",
      color: "#6A5D4D",
    },
    {
      text: "Losses have propelled me to even bigger places, so I understand the importance of losing. You can never get complacent because a loss is always around the corner. It's in any game that you're in - a business game or whatever - you can't get complacent",
      author: "Venus Williams",
      color: "#75151E",
    },
    {
      text: "The learning process is something you can incite, literally incite, like a riot.",
      author: "Audre Lorde",
      color: "#826C34",
    },
    {
      text: "The mindset of chasing that next #1 record doesn't exist for me anymore. It's more about being a well-rounded entertainer than being a pop artist. Obviously, it would be wonderful to have a hit record but I don't base my happiness on that anymore. It's about the accomplishment of a project that satisfies me. I just want to enjoy the ride",
      author: "Donny Osmond",
      color: "#2E3A23",
    },
    {
      text: "In our short walks we passed the kitchen where food was prepared for the nurses and doctors. There we got glimpses of melons and grapes and all kinds of fruits, beautiful white bread and nice meats, and the hungry feeling would be increased tenfold",
      author: "Nellie Bly",
      color: "#256D7B",
    },
    {
      text: "There is no nation so powerful, as the one that obeys its laws not from principals of fear or reason, but from passion",
      author: "Charles de Montesquieu",
      color: "#47402A",
    },
    {
      text: "One kills a man, one is an assassin one kills millions, one is a conqueror one kills everybody, one is a god",
      author: "Jean Rostand",
      color: "#6F4F28",
    },
    {
      text: "You have to have hope. It's irresponsible to give false hope, which I think a lot of playwrights are guilty of. But I also think it's irresponsible to simply be a nihilist, which quite a lot of playwrights, especially playwrights younger than me, have become guilty of",
      author: "Tony Kushner",
      color: "#49678D",
    },
    {
      text: "We've been working now with computers and education for 30 years, computers in developing countries for 20 years, and trying to make low-cost machines for 10 years. This is not a sudden turn down the road",
      author: "Nicholas Negroponte",
      color: "#47402E",
    },
  ];
};

const getRandomQuote = () => {
  const quote = Math.floor(Math.random() * 10);
  return getQuotes()[quote];
};

function App() {
  const init = getRandomQuote();
  const [quote, getQuote] = useState(init);
  return (
    <Quote
      quote={quote}
      randomizeQuote={() => {
        getQuote(getRandomQuote());
      }}
    />
  );
}

export default App;
