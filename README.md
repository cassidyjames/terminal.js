<!--
terminal.js

Copyright (C) System76, Inc.

This file is part of terminal.js.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
--># terminal.js

This is a project I wrote (and [@funnylookinhat](https://github.com/funnylookinhat) heavily refactored) for System76. Basically you set up all the fake Terminal output in the DOM and use data attributes to control the speed of each line.

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
