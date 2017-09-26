"use strict";

(function () {

  function displaySlider(minPrice, maxPrice, callback) {
    var slider = $("#slider-range").slider({
      range: true,
      min: minPrice,
      max: maxPrice,
      values: [minPrice, maxPrice],
      slide: function (event, ui) {
      var low = ui.values[0], high = ui.values[1];
        $("#amount").val("$" + low + " - $" + high);
        callback(low, high);
      }
    });
     $("#amount").val("$" + minPrice + " - $" + maxPrice);

  }

  var itemTemplate =
    '<div class="col-sm-3 col-lg-3 col-md-3 itemproducts">\n' +
    '  <div class="thumbnail">\n' +
    '    <img src="image-goes-here" alt="">\n' +
    '    <div class="caption">\n' +
    '      <h4 class="pull-right">€price-goes-here</h4>\n' +
    '      <h4><a href="#">title-goes-here</a></h4>\n' +
    '      <p>description-goes-here</p>\n' +
    '    </div>\n' +
    '    <div class="ratings">\n' +
    '      <p class="pull-right">15 reviews</p>\n' +
    '      <p>\n' +
    '        <span class="glyphicon glyphicon-star"></span>\n' +
    '        <span class="glyphicon glyphicon-star"></span>\n' +
    '        <span class="glyphicon glyphicon-star"></span>\n' +
    '        <span class="glyphicon glyphicon-star"></span>\n' +
    '        <span class="glyphicon glyphicon-star"></span>\n' +
    '      </p>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>';

  function Component(obj) {
    this.title = obj.title;
    this.price = obj.price;
    this.imageUrl = obj.url;
    this.desc = obj.desc;
//    this.rating = obj.rating;
    this.category = obj.category;
      this.brand = obj.brand;
      this.gender = obj.gender;
  }

  Component.prototype.toHTML = function () {
    var model = itemTemplate
      .replace("image-goes-here", this.imageUrl)
      .replace("title-goes-here", this.title)
      .replace("price-goes-here", this.price)
      .replace("description-goes-here", this.desc);

    return model;
  };

  function displayItem(fullList, skipSliderUpdate) {
    $('#product-container').empty();
    var maxPrice = 0;
    var minPrice = fullList[0].price;

    fullList.forEach(function (item) {
      if (item.price > maxPrice) {
        maxPrice = item.price;
      }
      if (item.price < minPrice) {
        minPrice = item.price;
      }
      $('#product-container').append(item.toHTML());
    });

      skipSliderUpdate || displaySlider(minPrice, maxPrice, function(lowPrice, highPrice) {
      var filtered = filterByPrice(fullList, lowPrice, highPrice);
      displayItem(filtered, true);
    });
  }

  $.getJSON("data/snowboards.json", function (data) {
    var product = [];

    data.forEach(function (obj) {
      var item = new Component(obj);
      product.push(item);
    })

    displayItem(product);
      
      
      
      ////////////////////////////////////////
// working drop down category filtering
    $("#select-category").change(function (event) {
      var category = $(this).val();
      var filtered = filterByCategory(product, category);
      displayItem(filtered);
    })
//
   //////////////////////////////////////////////////
    
    
    // working drop down gender filtering
    $("#select-gender").change(function (event) {
      var gender = $(this).val();
      var filtered = filterByGender(product, gender);
      displayItem(filtered);
    })
//
       // working drop down brand filtering
    $("#select-brand").change(function (event) {
      var brand = $(this).val();
      var filtered = filterByBrand(product, brand);
      displayItem(filtered);
    })
//
    
    
    
    
    
    
    
    // Not working
//       $(".catFilter").click(function (event) {
//       var filter = $(event.target).attr('data-filter');
//    var filtered = product.filter(function (item) {
//      return filter === 'All' || item.category === filter;
//    })
//       });
    //  
      
      
      $("#search").keyup(function (event) {
    var value = $(this).val();
    var filtered;
    if (value.length > 2) {
      filtered = product.filter(function (item) {
        return (item.title+" "+item.desc).indexOf(value) > -1;
      });
    }
    else {
      filtered = product;
    }
    displayItem(filtered);
  });
//  
      
  })
    
/////////////////////////////////
  function filterByCategory(fullList, category) {
    if (category === "all") {
      return fullList;
    } else {
      return fullList.filter(function (item) {
        return item.category === category;
      });
    }
  };
////////////////////////////
    
    
    
    // Gender filtering 
  function filterByGender(fullList, gender) {
    if (gender === "all") {
      return fullList;
    } else {
      return fullList.filter(function (item) {
        return item.gender === gender;
      });
    }
  };
//
    
    
        // Brand filtering 
  function filterByBrand(fullList, brand) {
    if (brand === "all") {
      return fullList;
    } else {
      return fullList.filter(function (item) {
        return item.brand === brand;
      });
    }
  };
//
    
    
 function filterByPrice(fullList, lowPrice, highPrice) {
    return fullList.filter(function (item) {
      return item.price >= lowPrice && item.price <= highPrice;
    });
  }
    

    
    })();