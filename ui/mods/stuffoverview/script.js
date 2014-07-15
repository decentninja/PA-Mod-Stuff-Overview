function StuffOverview() {
	var documentid = "sootns_stuff_overview"
	createFloatingFrame(documentid, 240, 50, {
		offset: "topRight",
		left: -240
	})
	this.html = document.querySelector("#" + documentid)

	lib.addHandler("watch_list", this.watch_list)
	var alertTypes = ['watchlist.setCreationAlertTypes', 'watchlist.setDeathAlertTypes', 'watchlist.setSightAlertTypes', 'watchlist.setTargetDestroyedAlertTypes', 'watchlist.setDamageAlertTypes']
	var include = ['Mobile', 'Structure', 'Recon']
	var exclude = []
	alertTypes.forEach(function(type) {
		engine.call(type, include, exclude)
	})
}

StuffOverview.prototype.watch_list = function(payload) {
	console.log("blub", payload)
}

var stuffoverview = new StuffOverview()

// For debugging
window.stuffoverview = stuffoverview