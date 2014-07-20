function StuffOverviewController() {
	var that = this
	this.view = new StuffOverviewView()
	this.model = new StuffOverviewModel()

	alertsManager.addListener(function(event) {
		that.handleEvent(event)
	})
}

StuffOverviewController.prototype.handleEvent = function(event) {
	this.model.handleEvent(event)
	this.view.render(this.model)
}

var stuffoverview = new StuffOverviewController()
window.stuffoverview = stuffoverview 	// Debugging purposes