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
	console.log("- Stuffoverview setting up watchlist")
	lib.addHandler("watch_list", this.handleEvent)
	
	var alertTypes = [
		'watchlist.setCreationAlertTypes',
		'watchlist.setDeathAlertTypes',
		//'watchlist.setSightAlertTypes',
		'watchlist.setTargetDestroyedAlertTypes'
		//'watchlist.setDamageAlertTypes'
	]
	var include = ['Mobile', 'Structure', 'Recon']
	var exclude = []
	// Need to load after live_game and other mods that set watchlist stuff
	window.setTimeout(function() {
		alertTypes.forEach(function(type) {
			engine.call(
				type,
				JSON.stringify(include),
				JSON.stringify(exclude)
			)
		})
	}, 2000)
}

StuffOverview.prototype.handleEvent = function(payload) {
	console.log("blub", payload)
}

var stuffoverview = new StuffOverview()

// For debugging
window.stuffoverview = stuffoverview