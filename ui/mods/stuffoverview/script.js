function StuffOverview() {
	var documentid = "stuff_overview"
	createFloatingFrame(documentid, 240, 50, {
		offset: "topRight",
		left: -240
	})
	this.html = document.querySelector("#" + documentid)
	this.setupWatchlist()
}

StuffOverview.prototype.setupWatchlist = function() {
	var that = this
	console.log("running")
	alertsManager.addListener(function(payload) {
		console.log("---- something happend")
		that.handleEvent(payload)
	})
}

StuffOverview.prototype.handleEvent = function(payload) {
	payload.list.forEach(function(event) {
		switch(event.watch_type) {
			case 0:
				console.log("add", event.id)
				break
			case 1:
			case 2:
				console.log("remove", event.id)
				break
			default:
				console.err("WTF?")
		}

	}, this)
}

var stuffoverview = new StuffOverview()

// For debugging
window.stuffoverview = stuffoverview