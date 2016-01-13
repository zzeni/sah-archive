 $('#pagination').twbsPagination({
        totalPages: 10,
        visiblePages: 3,
        onPageClick: function (event, page) {
			var productitem = $('.item');
			productitem.fadeOut('slow');
			var product = $('#product-' + page);
			product.fadeIn('slow');
			
        }
});