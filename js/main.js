var itemTitleOne = $('.item-title-1');
var itemTitleTwo = $('.item-title-2');
var itemTitleThree = $('.item-title-3');
var itemTitleFour = $('.item-title-4');
var contentWrapperOne = $('.content-wrapper-1');
var contentWrapperTwo = $('.content-wrapper-2');
var contentWrapperThree = $('.content-wrapper-3');
var contentWrapperFour = $('.content-wrapper-4');
var contentWrapper = $('.content-wrapper');

var itemClickHandlerOne = function (e) {
	var isActive = itemTitleOne.attr('data-state');
	e.preventDefault ();

	if (isActive == 'expand') {
		itemTitleOne.attr('data-state', 'collapse');
	} else {
		itemTitleOne.attr('data-state', 'expand');
		contentWrapperOne.addClass('open');
	}
};

itemTitleOne.on('click', itemClickHandlerOne);

$ (".content-wrapper").on("click", function() {
	$(".content-wrapper-1").removeClass("open");
	$(".content-wrapper-2").removeClass("open");
	$(".content-wrapper-3").removeClass("open");
	$(".content-wrapper-4").removeClass("open");
});


var itemClickHandler = function (e) {
	var isActive = itemTitleTwo.attr('data-state');
	e.preventDefault ();

	if (isActive == 'expand') {
		itemTitleTwo.attr('data-state', 'collapse');
	} else {
		itemTitleTwo.attr('data-state', 'expand');
		contentWrapperTwo.addClass('open');
	}
};

itemTitleTwo.on('click', itemClickHandler);

var itemClickHandler = function (e) {
	var isActive = itemTitleThree.attr('data-state');
	e.preventDefault ();

	if (isActive == 'expand') {
		itemTitleThree.attr('data-state', 'collapse');
	} else {
		itemTitleThree.attr('data-state', 'expand');
		contentWrapperThree.addClass('open');
	}
};

itemTitleThree.on('click', itemClickHandler);

var itemClickHandler = function (e) {
	var isActive = itemTitleFour.attr('data-state');
	e.preventDefault ();

	if (isActive == 'expand') {
		itemTitleFour.attr('data-state', 'collapse');
	} else {
		itemTitleFour.attr('data-state', 'expand');
		contentWrapperFour.addClass('open');
	}
};

itemTitleFour.on('click', itemClickHandler);



