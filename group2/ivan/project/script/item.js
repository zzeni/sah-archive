function Item(pic, name, price, group, kind) {
	this.picture = pic;
	this.name = name;
	this.price = price + "$";
	this.group = group;
	this.kind = kind;
	this.toHtml = function () {
		$("#products").append('<div class="col-sm-4 col-lg-4 col-md-4"><div class="panel"><div class="panel-heading panel-primary">'+ this.name +'</div><div class="panel-body"><img src="'+ this.picture +'" class="img-responsive center-block" alt="Image"></div><div class="panel-footer panel-primary"><span class="price">'+ this.price +'</span></div></div></div>');
	};
}

