function Gui() {
	this.element = document.createElement("div")
	this.element.id = "stuffoverview"
	document.querySelector(".div_planet_list_item").appendChild(this.element)
}

Gui.prototype.render = function(units) {
	var html = ""
	for(var unitname in units) {
		var unit = units[unitname]
		// Class scope so_ insted of hierarchy on parent because we cant trust other modders.
		html += '\
			<div class="so_unit">\
				<img src="{{image}}">\
				<span class="count">{{count}}</span>\
			</div>\
		'.replace("{{image}}", unit.picture).replace("{{count}}", unit.count)
	}
	console.log(html)
	this.element.innerHTML = html
}