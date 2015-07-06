/* terminal.js by Cassidy James <c@ssidyjam.es> for System76.com */
$default_delay = 200;

function runTerminal($terminal) {
  if( ! $terminal.data('terminalPrompt').length ) {
    $terminal.data('terminalPrompt','$ ');
  }

  runTerminalLine($terminal.find('[data-terminal]:first'), $terminal, $default_delay);
}

function runTerminalLine($line, $terminal, $delay) {
  if( $line.is("[data-terminal-time]") ) {
    $delay = parseInt($line.data('terminalTime'));
  }
  if( $line.data('terminalMessage') == "prompt" ) {
    $line.data('terminalMessage', $terminal.data('terminalPrompt'));
  }
  if( $line.data('terminal') == "line" ) {
    setTimeout(function () {
      runTerminalLinePrint($line, $terminal);
    }, $delay )
  } else {
    setTimeout(function () {
      runTerminalLineType($line, $terminal);
    }, $delay);
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
    runTerminalLine($nextLine, $terminal, $default_delay);
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
    runTerminalLine($nextLine, $terminal, message.length*$default_delay);
  }
}
