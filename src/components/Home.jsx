import axios from "axios";
import { useEffect, useState } from "react";
const morseChart = require("../images/morse.png");
const Tomorse = require("../tomorse.js");

const Home = () => {
  const [fact, setFact] = useState("");
  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState(1);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    axios
      .get(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
      .then(({ data }) => {
        const strFormatted = data.text
          .replace(/[,!.%()'"]+/g, "")
          .replace(/ /g, "/")
          .toUpperCase();
        setFact(strFormatted.slice(0, selectValue));
      });
  }, []);

  const generateCode = (event) => {
    event.preventDefault();
    setDisplayAnswer(false);
    axios
      .get(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
      .then(({ data }) => {
        const strFormatted = data.text
          .replace(/[,!.%()'"]+/g, "")
          .toUpperCase();
        setFact(strFormatted.slice(0, selectValue));
      });
  };

  const playAudio = () => {
    setDisplayAnswer(false);
    const tomorse = new Tomorse();
    tomorse.play(fact);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayAnswer(true);
    if (input === fact) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setInput("");
    axios
      .get(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
      .then(({ data }) => {
        const strFormatted = data.text
          .replace(/[,!.%()'"]+/g, "")
          .toUpperCase();
        setFact(strFormatted.slice(0, selectValue));
      });
  };

  return (
    <section>
      <section className="morse-chart">
        <img src={morseChart} alt="morse" />
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
                <option value={1}>1 char</option>
                <option value={2}>2 chars</option>
                <option value={3}>3 chars</option>
                <option value={4}>4 chars</option>
                <option value={5}>5 chars</option>
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
    </section>
  );
};

export default Home;
