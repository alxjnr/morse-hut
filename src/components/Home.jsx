import axios from "axios";
import { useEffect, useState } from "react";
import Tomorse from "../tomorse.js";
import VirtualKeyboard from "./VirtualKeyboard.jsx";
const morseChart = require("../images/morse.png");

const Home = () => {
  const [fact, setFact] = useState("");
  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState(1);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setInput("");
    axios
      .get(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
      .then(({ data }) => {
        const strFormatted = data.text
          .replace(/[,!.%()'"`-]+/g, "")
          .toUpperCase()
          .split(" ")
          .slice(0, selectValue);
        setFact(strFormatted.join(" "));
      });
  }, []);

  const generateCode = (event) => {
    event.preventDefault();
    setDisplayAnswer(false);
    setInput("");
    axios
      .get(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
      .then(({ data }) => {
        const strFormatted = data.text
          .replace(/[,!.%()'"`-]+/g, "")
          .toUpperCase()
          .split(" ")
          .slice(0, selectValue);
        setFact(strFormatted.join(" "));
      });
  };

  const playAudio = () => {
    setDisplayAnswer(false);
    const tomorse = new Tomorse();
    tomorse.play(fact);
  };

  const handleSubmit = (event) => {
    setIsFirstLoad(false);
    event.preventDefault();
    setDisplayAnswer(true);
    if (input === fact) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setInput("");
  };

  const changeOpacity = () => {
    if (!opacity) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  };

  return (
    <section>
      <section className="morse-chart">
        <img
          src={morseChart}
          alt="morse"
          style={{ opacity: opacity }}
          onClick={changeOpacity}
        />
        {!isFirstLoad ? <p></p> : <h6>tap the cheat sheet to hide it</h6>}
      </section>
      <section>
        <section className="error-section">
          {!displayAnswer ? (
            <p></p>
          ) : isAnswerCorrect ? (
            <p>correct!</p>
          ) : (
            <p>the correct answer was {fact}</p>
          )}
        </section>
        <section className="ui-section">
          <section className="get-code-section">
            <form onSubmit={generateCode}>
              <select
                onChange={(event) => {
                  setSelectValue(event.target.value);
                }}
              >
                <option value={1}>1 word</option>
                <option value={2}>2 words</option>
                <option value={3}>3 words</option>
              </select>
              <button>new code</button>
            </form>
            <section className="play-stop-buttons">
              <button onClick={playAudio}>play</button>
            </section>
          </section>

          <section>
            <form onSubmit={handleSubmit}>
              <input
                value={input}
                onChange={(event) => {
                  setInput(event.target.value.toUpperCase());
                }}
              ></input>
              <button>submit</button>
            </form>
          </section>
        </section>
      </section>
      <VirtualKeyboard setInput={setInput} />
    </section>
  );
};

export default Home;
