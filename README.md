# [morse-hut](https://alxjnr.github.io/morse-hut/)

A simple web-app for learning morse code. Users are currently able to select a difficulty based on the number of characters they will hear. They will then attempt to guess the characters.
<br>
<br>
The majority of this web app has been built using React.

## Known Issues

- Occasionally the audio will drop out or hang, this is fixed with a page refresh and is likely an audio buffering issue.

- The virtual keyboard may not display on all devices correctly, right now it is optional.

## Sources

This web app uses fungenerators Facts API to get a random fact. This is then translated into the morse code audio that users will hear and try to guess. My own tomorse soon-to-be libary provides a very convenient way to translate strings into audio to be passed into an oscillator.

fungenerators Facts API:

`https://fungenerators.com/api/facts/`

logo by Midjourney AI
