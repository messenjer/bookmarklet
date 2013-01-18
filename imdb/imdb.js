javascript: (function(e, a, g, h, f, c, b, d) {
	if(!(f = e.jQuery) || g > f.fn.jquery || h(f)) {
		c = a.createElement("script");
		c.type = "text/javascript";
		c.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
		c.onload = c.onreadystatechange = function() {
			if(!b && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
				h((f = e.jQuery).noConflict(1), b = 1);
				f(c).remove()
			}
		};
		a.documentElement.childNodes[0].appendChild(c)
	}
})(window, document, "1.8.3", function($, L) {

	var url = 'http://imdbapi.org/';
	var title = window.getSelection && String(window.getSelection());

	if(title.length > 0) {
		var d = {
			'title': title,
			'type': 'json',
			'plot': 'none',
			'episode': 0,
			'limit': 3,
			'mt': 'M'
		};

		$.getJSON(url, d, function(data) {
			var msg = '';
			var items = [];
			if(data.code && data.code == 404) {
				msg = data.error;
			} else {
				$.each(data, function(key, movie) {
					items.push(movie.title + ' (rating : ' + movie.rating + ')');
				});
				msg = items.join("\n");
			}
			window.alert(msg);
		});
	}

});