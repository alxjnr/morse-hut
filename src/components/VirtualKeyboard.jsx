const VirtualKeyboard = ({ setInput }) => {
  return (
    <section className="virtual-keyboard">
      <section className="virtual-keyboard-row-num">
        <button
          onClick={() => {
            setInput((input) => {
              return input + "1";
            });
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "2";
            });
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "3";
            });
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "4";
            });
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "5";
            });
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "6";
            });
          }}
        >
          6
        </button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </section>
      <section className="virtual-keyboard-row">
        <button>Q</button>
        <button>W</button>
        <button>E</button>
        <button>R</button>
        <button>T</button>
        <button>Y</button>
        <button>U</button>
        <button>I</button>
        <button>O</button>
        <button>P</button>
      </section>
      <section className="virtual-keyboard-row">
        <button>A</button>
        <button>S</button>
        <button>D</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
        <button>J</button>
        <button>K</button>
        <button>L</button>
      </section>
      <section className="virtual-keyboard-row">
        <button>Z</button>
        <button>X</button>
        <button>C</button>
        <button>V</button>
        <button>B</button>
        <button>N</button>
        <button>M</button>
      </section>
    </section>
  );
};

export default VirtualKeyboard;
