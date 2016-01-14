SHOWS_DB = [];
							function Show(name, image_url, desc, genre, season) {
								this.name = name;
								this.image_url = image_url;
								this.description = desc;
								this.genre = genre;
								this.seasons = season;
								this.id = fabricateID();
								this.toString = function toString() {
									var itemContainer = $('<div class="item-container"></div>');
									itemContainer.append($('<img src="' + this.image_url + '" alt="' + this.description + '">'));
									itemContainer.append($('<p class="show-name">' + this.name + '</p>'));
									itemContainer.append($('<p class="show-genre">' + this.genre + '</p>'));
									itemContainer.append($('<p class="show-seasons">' + this.seasons + '</p>'));
									itemContainer.append($('<button class="btn btn-primary">Watch</button>'));
									return itemContainer;
								};
							}

							function fabricateID() {
								return Math.floor((1 + Math.random()) * 0x1000000);
							}
							(function () {
								"use strict";
								var shows = [];
								for (var i = 0; i < SHOWS_DB.length; i++) {
									var show = SHOWS_DB[i];
									shows.push(new Show(show.name, show.image_url, show.description, show.genre, show.seasons));
								}
								$('#itemSelector').change(function (e) {
									e.preventDefault();
									var container = document.getElementById("gallery");
									container.innerHTML = "";
								!!!	var selectedOption = $('#itemSelector').val();
									for (var i in shows) {
										var show = shows[i];
										if (selectedOption === "all" || show.genre == selectedOption) {
											$(container).append(show.toString());
										}
									}
								});
								$('#itemSelector').change();
							})();