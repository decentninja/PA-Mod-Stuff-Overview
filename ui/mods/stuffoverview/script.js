function StuffOverview() {
	this.units = {}
	this.setupWatchlist()
}

StuffOverview.prototype.setupWatchlist = function() {
	var that = this
	console.log("running")
	alertsManager.addListener(function(payload) {
		that.handleEvent(payload)
	})
}

StuffOverview.prototype.handleEvent = function(payload) {
	console.log(payload)
	payload.list.forEach(function(event) {
		var typename = event.spec_id.match(/\/(\w*)\.json$/)[1]
		switch(event.watch_type) {
			case 0:
				if(this.units[typename]) {
					this.units[typename].count += 1
				} else {
					this.units[typename] = {
						count: 1,
						picture: bif.getUnitBlueprint(typename).buildPicture
					}
				}
				break
			//case 1: //Destroyed before finnished
			case 2:
				if(this.units[typename]) {
					if(this.units[typename].count <= 1) {
						delete this.units[typename]
					} else {
						this.units[typename].count -= 1
					}
				}
				break
			default:
				console.err("WTF?", typename)
		}
		console.log("units: ", this.units)
	}, this)
}

var stuffoverview = new StuffOverview()

// For debugging
window.stuffoverview = stuffoverview