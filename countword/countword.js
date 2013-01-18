javascript: (function() {
	s = window.getSelection && String(window.getSelection());
	s = s.replace(/\s\s+/g,' ');
	w = s.split(' ');
	window.alert('Word count : ' + w.length);
}());