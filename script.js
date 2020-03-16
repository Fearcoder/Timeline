var nodes = '';
 for (var i = 1; i <= 10; i++) {
   nodes += '<div class="timeline-node node"><p>204</p> </div>'
 }
 document.getElementById('nodes').insertAdjacentHTML('afterbegin', nodes);