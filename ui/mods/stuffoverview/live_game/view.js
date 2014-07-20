function StuffOverviewView() {
	this.element = document.createElement("div")
	this.element.id = "stuffoverview"
	document.body.appendChild(this.element)
	this.style = document.createElement("style")
	this.style.innerHTML = '				\
			#stuffoverview {				\
				width: 400px;				\
			}								\
											\
			#stuffoverview > * {			\
				display: inline-block;		\
				position: relative;			\
			}								\
											\
			#stuffoverview img {			\
				width: 36px;				\
			}								\
											\
			#stuffoverview .count {			\
				padding: 2px;				\
			    font-size: 11px;			\
			    z-index: 1;					\
			    color: #fff;				\
			    background: #006868;		\
			    border: 1px solid #00ffff;	\
			    border-width: 1px;\
			    position: absolute;			\
			    bottom: 0;					\
			    right: 0;					\
			}								\
		'
	document.body.appendChild(this.style)
}

StuffOverviewView.prototype.unitTemplate = function(unit) {
	return '\
			<div class="so_unit">\
				<img src="{{image}}">\
				<div class="count">{{count}}</div>\
			</div>\
		'.replace("{{image}}", unit.image).replace("{{count}}", unit.count)
}

StuffOverviewView.prototype.render = function(model) {
	var that = this
	var html = ""
	forEach(model.units, function(unit) {
		html += that.unitTemplate(unit)
	})
	this.element.innerHTML = html
}