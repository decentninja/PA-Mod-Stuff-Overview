function StuffOverviewModel() {
	this.units = {}
}

StuffOverviewModel.prototype.handleEvent = function(payload) {
	var that = this
	payload.list.forEach(function(event) {
		var typename = event.spec_id.match(/\/(\w*)\.json$/)[1]
		switch(event.watch_type) {
			case 0:
				if(that.units[typename]) {
					that.units[typename].count += 1
				} else {
					that.units[typename] = {
						count: 1,
						image: 'img/build_bar/units/' + typename + '.png'
					}
				}
				break
			//case 1: //Destroyed before finnished
			case 2:
				if(that.units[typename]) {
					if(that.units[typename].count <= 1) {
						delete that.units[typename]
					} else {
						that.units[typename].count -= 1
					}
				}
				break
			default:
				console.err("WTF?", typename)
		}
	})
}