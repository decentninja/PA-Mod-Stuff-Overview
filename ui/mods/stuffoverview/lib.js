var lib = {
	addHandler: function(to, responder) {
		var old = handlers[to] || function() {}
		handlers[to] = function(payload) {
			old(payload)
			responder(payload)
		}
	}
}