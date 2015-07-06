# terminal.js
DOM-driven fake terminal output jQuery plugin

This is a project I wrote (and [@funnylookinhat](https://github.com/funnylookinhat) heavily refactored) for System76 (used at [system76.com/laptops/galago](https://system76.com/laptops/galago) and [system76.com/servers](https://system76.com/servers)). Basically you set up all the fake Terminal output in the DOM and use data attributes to control the speed of each line.

Then just `runTerminal()` on a jQuery object to kick it off, i.e. `runTerminal($('#terminal'))`.

See [terminal.mustache](https://github.com/cassidyjames/terminal.js/blob/master/terminal.mustache) for example HTML, or a [demo implementation here](http://cassidyjames.github.io/terminal.js/).


## Data Attributes

On the container:

* `data-terminal-prompt`
 * string: Prepend each prompt line, i.e. `"system76@Galago-UltraPro:~$ "`

On each span:

* `data-terminal`
  * string `"text"` (default): type out the message on the currently-last line
  * string `"line"`: echo the whole line at once on a new line
* `data-terminal-message`:
  * string: the text to output
* `data-terminal-time`
  * integer: How long to wait in milliseconds after the previous step starts. Account for 200ms/character in the previous message if it was `data-terminal="text"`


## Featured at:

* [system76.com/laptops/galago](https://system76.com/laptops/galago)
* [system76.com/servers](https://system76.com/servers)
* [snwh.org/fsck/](http://snwh.org/fsck/)
