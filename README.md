# Morse-Hut

A simple web-app for learning morse code. Users are currently able to select a difficulty based on the number of characters they will hear. They will then attempt to guess the characters. 
<br>
<br>
The majority of this web app has been built using React.

## Known Issues

- Currently, audio can only be played once. It is my current understanding that this is a limitation of the Web Audio API being used to generate the audio oscillator and how it is accesssed

## Sources

This web app uses fungenerators Facts API to get a random fact. This is then translated into the morse code audio that users will hear and try to guess. Ozdemirburak's morse-decoder libary provides a very convenient way to translate strings into audio to be passed into an oscillator.

fungenerators Facts API:

`https://fungenerators.com/api/facts/`

ozdemirburak's morse-decoder library:

`https://github.com/ozdemirburak/morse-decoder`
