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
        <button
          onClick={() => {
            setInput((input) => {
              return input + "7";
            });
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "8";
            });
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "9";
            });
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "0";
            });
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input.slice(0, input.length - 1);
            });
          }}
        >
          {"<"}
        </button>
      </section>
      <section className="virtual-keyboard-row">
        <button
          onClick={() => {
            setInput((input) => {
              return input + "Q";
            });
          }}
        >
          Q
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "W";
            });
          }}
        >
          W
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "E";
            });
          }}
        >
          E
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "R";
            });
          }}
        >
          R
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "T";
            });
          }}
        >
          T
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "Y";
            });
          }}
        >
          Y
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "U";
            });
          }}
        >
          U
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "I";
            });
          }}
        >
          I
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "O";
            });
          }}
        >
          O
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "P";
            });
          }}
        >
          P
        </button>
      </section>
      <section className="virtual-keyboard-row">
        <button
          onClick={() => {
            setInput((input) => {
              return input + "A";
            });
          }}
        >
          A
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "S";
            });
          }}
        >
          S
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "D";
            });
          }}
        >
          D
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "F";
            });
          }}
        >
          F
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "G";
            });
          }}
        >
          G
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "H";
            });
          }}
        >
          H
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "J";
            });
          }}
        >
          J
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "K";
            });
          }}
        >
          K
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "L";
            });
          }}
        >
          L
        </button>
      </section>
      <section className="virtual-keyboard-row">
        <button
          onClick={() => {
            setInput((input) => {
              return input + "Z";
            });
          }}
        >
          Z
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "X";
            });
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "C";
            });
          }}
        >
          C
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "V";
            });
          }}
        >
          V
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "B";
            });
          }}
        >
          B
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "N";
            });
          }}
        >
          N
        </button>
        <button
          onClick={() => {
            setInput((input) => {
              return input + "M";
            });
          }}
        >
          M
        </button>
      </section>
      <section className="virtual-keyboard-row-space">
        <button
          onClick={() => {
            setInput((input) => {
              return input + " ";
            });
          }}
        >
          SPACE
        </button>
      </section>
    </section>
  );
};

export default VirtualKeyboard;
