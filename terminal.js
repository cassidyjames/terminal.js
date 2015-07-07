/*
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
*/
function runTerminal($terminal) {
  if( ! $terminal.data('terminalPrompt').length ) {
    $terminal.data('terminalPrompt','$ ');
  }

  runTerminalLine($terminal.find('[data-terminal]:first'), $terminal);
}

function runTerminalLine($line, $terminal) {
  if( $line.data('terminalMessage') == "prompt" ) {
    $line.data('terminalMessage', $terminal.data('terminalPrompt'));
  }
  if( $line.data('terminal') == "line" ) {
    setTimeout(function () {
      runTerminalLinePrint($line, $terminal);
    }, parseInt($line.data('terminalTime')) );
  } else {
    setTimeout(function () {
      runTerminalLineType($line, $terminal);
    }, parseInt($line.data('terminalTime')) );
  }
}

function runTerminalLinePrint($line, $terminal) {
  var $target = $('<span class="line"></span>');
  var $output = $terminal.find('.output');
  $output.append($target);
  $target.append($line.data('terminalMessage'));
  
  $output.animate({ scrollTop: $output[0].scrollHeight}, 1);

  $nextLine = $line.next('[data-terminal]');
  if( $nextLine.length ) {
    runTerminalLine($nextLine, $terminal);
  }
}

function runTerminalLineType($line, $terminal, $target, index) {
  var $output = $terminal.find('.output');

  if( ! $target ) {
    var $target = $output.find('.line:last');
  }

  if( ! index ) {
    index = 0;
  }

  var message = $line.data('terminalMessage');

  if( index < message.length ) {
    $target.append(message[index++]);
    return setTimeout(function () {
      runTerminalLineType($line, $terminal, $target, index);
    }, Math.floor( Math.random() * ( $line.data('terminalTextSpeed') ? parseInt($line.data('terminalTextSpeed')) : 100 )) + 1 );
  }

  $output.animate({ scrollTop: $output[0].scrollHeight}, 1);

  $nextLine = $line.next('[data-terminal]');
  if( $nextLine.length ) {
    runTerminalLine($nextLine, $terminal);
  }
}
