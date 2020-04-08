// When the user scrolls down from the top of the document, resize the header
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		//alert('shrink');
		document.getElementsByTagName('header')[0].classList.add('shrink');
		document.body.classList.add("header-shrinked");
	} else {
		//alert('unshrink');
		document.getElementsByTagName('header')[0].classList.remove('shrink');
		document.body.classList.remove("header-shrinked");
	}
}

if (window.jQuery){
	jQuery.noConflict();
	jQuery(document).ready(function($){
		
		$('[type=tel]').mask('+7 (999) 999-99-99');

        WebFont.load({
			google: {
				families: ['Roboto:400:cyrillic']
			},
			custom: {
				families: ['Circe', 'Intro', 'Intro Bold Caps'],
				urls: ['css/fonts.css']
			}
		});

		// navbar dropdown

		$(".navbar-toggler").on("click", function() {
			$(this).attr('aria-expanded', function(index, attr){
				return attr == 'false' ? 'true' : 'false';
			});
			$(".navbar-collapse").toggleClass('show');
		});

		$(".teachers-slick").slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			__mobileFirst: true,
			rows: 0,
			prevArrow: '<button id="prev-teacher" type="button" class="slick-button slick-prev">Prev<svg viewBox="0 0 53 22" class="icon arrow-long-left"><use xlink:href="img/sprite.svg#arrow-long-left"></use></svg></button>',
			nextArrow: '<button id="next-teacher" type="button" class="slick-button slick-next">Next<svg viewBox="0 0 53 22" class="icon arrow-long-right"><use xlink:href="img/sprite.svg#arrow-long-right"></use></svg></button>',
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}},{
					breakpoint: 480,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		$(".gallery-slick").slick({
			centerMode: !0,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			__mobileFirst: true,
			rows: 0,
			prevArrow: '<button id="gallery-slick-prev" type="button" class="slick-button slick-prev">Prev<svg viewBox="0 0 53 22" class="icon arrow-long-left"><use xlink:href="img/sprite.svg#arrow-long-left"></use></svg></button>',
			nextArrow: '<button id="gallery-slick-next" type="button" class="slick-button slick-next">Next<svg viewBox="0 0 53 22" class="icon arrow-long-right"><use xlink:href="img/sprite.svg#arrow-long-right"></use></svg></button>',
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		});

		$(".js-modal-btn").modalVideo({channel:'vimeo'});

		var slickAdults = $(".groups-slick-adults"), maxItems=5;

		slickAdults.slick({
			infinite: false, 
			slidesToShow: 1, 
			slidesToScroll: 1,
			swipeToSlide: 1, 
			autoplay: false, 
			mobileFirst: true,
			rows: 0,
			refresh: true,
			appendArrows: $(".groups-slick-controls-adults"),
			prevArrow:'<button id="prev-adult-group" type="button" class="slick-button slick-prev">Prev<svg viewBox="0 0 30 22" class="icon arrow-short-left"><use xlink:href="img/sprite.svg#arrow-short-left"></use></svg></button>', 
			nextArrow:'<button id="next-adult-group" type="button" class="slick-button slick-next">Next<svg viewBox="0 0 30 22.14" class="icon arrow-short-right"><use xlink:href="img/sprite.svg#arrow-short-right"></use></svg></button>', 
			responsive:[ {
				breakpoint: 1202,
				settings: {
					slidesToShow: maxItems,
					slidesToScroll: 5
				}
			}
			, {
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
			, {
				breakpoint: 1024, 
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
			, {
				breakpoint: 768, 
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}]
		});

		function filterSlider(e) {
			slickAdults.slick("slickUnfilter");
			let t = slickAdults.find(e).length;

			/*if(slickAdults.children('div').length < maxItems) {
				maxItems = slickAdults.children('div').length;
			}*/

			if(t < maxItems) {
				maxItems = t;
				$(".groups-slick-adults").slick("slickSetOption", "slidesToShow", t);
				$(".groups-slick-adults").slick("slickSetOption", "slidesToScroll", t);
			}

			console.log(t);
			/*t<maxItems?(maxItems=t, slickAdults.slick("slickSetOption", "slidesToShow", maxItems), slickAdults.slick("slickFilter", e)): (maxItems=5, slickAdults.slick("slickSetOption", "slidesToShow", maxItems), slickAdults.slick("slickFilter", e));*/
			$(".groups-slick-adults").slick("slickFilter", e);
			$(".groups-slick-adults").slick('refresh');
		}

		$(".groups-slick-kids").slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			__mobileFirst: true,
			rows: 0,
			appendArrows: $(".groups-slick-controls-adults"),
			prevArrow: '<button id="prev-kids-group" type="button" class="slick-button slick-prev">Prev<svg viewBox="0 0 30 22" class="icon arrow-short-left"><use xlink:href="img/sprite.svg#arrow-short-left"></use></svg></button>',
			nextArrow: '<button id="next-kids-group" type="button" class="slick-button slick-next">Next<svg viewBox="0 0 30 22.14" class="icon arrow-short-right"><use xlink:href="img/sprite.svg#arrow-short-right"></use></svg></button>',
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}},{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}}
			]
		});

		$('.filter-btns button').on('click', function(){
			var active = $(this).data('filter');
			$('.filter-btns button').removeClass('active');
			$(this).addClass('active');
			filterSlider(active);
		});

		$(".table-prices.study-groups .nav li").click(function(){
			slickAdults.slick('refresh');
		});

		// tabs

		$(".nav-tabs li a").click(function(e){
			e.preventDefault();
			$(".nav-tabs li a").removeClass('active');
			$(this).addClass('active');
			var showIt =  $(this).attr('href');
			$(".tab-pane").hide();
			$('.groups-slick-controls button').hide();
			$('#prev-' + showIt + '-group').show();
			$('#next-' + showIt + '-group').show();
			$(showIt).find('.slick-slider').slick('refresh');
			$(showIt).show();
		});

		$('.groups-slick-controls button').hide();
		if($('#adult-tab').hasClass('active')){
			$('#prev-adult-group,#next-adult-group').show();
		}else if($('#children-tab').hasClass('active')){
			$('#prev-kids-group,#next-kids-group').show();
		}

		$(window).resize(function() {

			slickAdults.slick('refresh');
			$('.groups-slick-controls button').hide();

			if($('#adult-tab').hasClass('active')){
				$('#prev-adult-group,#next-adult-group').show();
			}else if($('#children-tab').hasClass('active')){
				$('#prev-kids-group,#next-kids-group').show();
			}
			
		});

		$(window).on('resize orientationchange', function() {
			$('.groups-slick').slick('resize');
		});

		// accordion

		$(".accordion .card-header").click(function() {
			$(this).find('.card-header__icon').toggleClass("minus").parents('.card').toggleClass("active").find('.card-body').slideToggle('fast');
		});

		if(navigator.userAgent.indexOf('Mac') > 0){
			$('body').addClass('mac-os');
			if(navigator.userAgent.indexOf('Safari') > 0)$('body').addClass('safari');
		}

    });
};