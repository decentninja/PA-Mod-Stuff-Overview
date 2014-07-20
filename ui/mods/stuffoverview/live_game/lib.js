function forEach(to, each) {
	var i = 0
	for(key in to) {
    	if (to.hasOwnProperty(key)) {
	        each(to[key], i)
	    }
	    i++
	}
}