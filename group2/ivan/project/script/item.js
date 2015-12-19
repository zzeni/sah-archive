function Item(pic, name, price, group, kind) {
	this.pictureUrl = pic;
	this.itemName = name;
	this.itemPrice = price + "$";
	this.group = group;
	this.kind = kind;
	this.toHtml = function () {
		$("#products").append('<div class="col-sm-4 col-lg-4 col-md-4"><div class="panel"><div class="panel-heading panel-primary">'+ this.itemName +'</div><div class="panel-body"><img src="'+ this.pictureUrl +'" class="img-responsive center-block" alt="Image"></div><div class="panel-footer panel-primary"><span class="price">'+ this.itemPrice +'</span></div></div></div>');
	};
}

