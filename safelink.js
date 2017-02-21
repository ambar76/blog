	(function() {
	    var v = document.getElementsByClassName("youtube-player");
	    for (var n = 0; n < v.length; n++) {
	        var p = document.createElement("div");
	        p.innerHTML = JWTubeThumb(v[n].dataset.id);
	        p.onclick = JWTubeIframe;
	        v[n].appendChild(p);
	    }
	})();
	 
	function JWTubeThumb(id) {
	    return '<img class="youtube-thumb" src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
	}
	 
	function JWTubeIframe() {
	    var iframe = document.createElement("iframe");
	    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1& modestbranding=1&rel=0&hl=id");
	    iframe.setAttribute("frameborder", "0");
	    iframe.setAttribute("id", "youtube-iframe");
	    this.parentNode.replaceChild(iframe, this);
	}
