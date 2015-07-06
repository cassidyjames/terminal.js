# terminal.js
DOM-driven fake terminal output plugin

This is a project I wrote for System76 (used at [system76.com/laptops/galago](https://system76.com/laptops/galago) and [system76.com/servers](https://system76.com/servers)). Basically you set up all the fake Terminal output in the DOM and use data attributes to control the speed of each line.

## Data Attributes

* `data-terminal`
  * `text` (default): type out the message on the currently-last line
  * `line`: echo the whole line at once on a new line
* `data-terminal-message`: 
  * string: the text to output
* `data-terminal-time`
  * integer: How long to wait in milliseconds after the previous step starts. Account for 200ms/character in the previous message if it was `data-terminal="text"`
