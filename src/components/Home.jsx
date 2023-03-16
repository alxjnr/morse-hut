import axios from "axios";
import { useEffect, useState } from "react";
const morse = require("morse-decoder");
const morseChart = require("../images/morse.png");

const Home = () => {
  const [fact, setFact] = useState("");
  const [audio, setAudio] = useState({});
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [playedError, setPlayedError] = useState(false);
  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState(1);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const generateCode = (event) => {
    event.preventDefault();
    setDisplayAnswer(false);
    setAudioPlayed(false);
    setPlayedError(false);
    axios
      .get(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
      .then(({ data }) => {
        const strFormatted = data.text
          .replace(/[,!.%()'"]+/g, "")
          .toUpperCase();
        setFact(strFormatted.slice(0, selectValue));
        const morseAudio = morse.audio(strFormatted.slice(0, selectValue));
        setAudio(morseAudio);
      });
  };

  const playAudio = () => {
    if (audioPlayed) {
      setPlayedError(true);
    } else {
      audio.play();
      setAudioPlayed(true);
    }
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
    setPlayedError(false);
    setAudioPlayed(false);
  };

  return (
    <section>
      <section>
        <img id="morse-chart" src={morseChart} alt="morse" />
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
        {playedError ? <p>audio already played</p> : <p></p>}
        {!displayAnswer ? (
          <p></p>
        ) : isAnswerCorrect ? (
          <p>correct!</p>
        ) : (
          <p>the correct answer was {fact}</p>
        )}
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
  );
};

export default Home;
