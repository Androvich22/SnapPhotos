 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

 jQuery(document).ready(function($) {

 	"use strict";


 	var lozadFunc = function() {
 		const el = document.querySelector('img');
 		const observer = lozad(el);
 		observer.observe();	
 	}
 	lozadFunc();
 	

 	var siteMenuClone = function() {

 		$('.js-clone-nav').each(function() {
 			var $this = $(this);
 			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
 		});


 		setTimeout(function() {

 			var counter = 0;
 			$('.site-mobile-menu .has-children').each(function(){
 				var $this = $(this);

 				$this.prepend('<span class="arrow-collapse collapsed">');

 				$this.find('.arrow-collapse').attr({
 					'data-toggle' : 'collapse',
 					'data-target' : '#collapseItem' + counter,
 				});

 				$this.find('> ul').attr({
 					'class' : 'collapse',
 					'id' : 'collapseItem' + counter,
 				});

 				counter++;

 			});

 		}, 1000);

 		$('body').on('click', '.arrow-collapse', function(e) {
 			var $this = $(this);
 			if ( $this.closest('li').find('.collapse').hasClass('show') ) {
 				$this.removeClass('active');
 			} else {
 				$this.addClass('active');
 			}
 			e.preventDefault();  

 		});

 		$(window).resize(function() {
 			var $this = $(this),
 			w = $this.width();

 			if ( w > 768 ) {
 				if ( $('body').hasClass('offcanvas-menu') ) {
 					$('body').removeClass('offcanvas-menu');
 				}
 			}
 		})

 		$('body').on('click', '.js-menu-toggle', function(e) {
 			var $this = $(this);
 			e.preventDefault();

 			if ( $('body').hasClass('offcanvas-menu') ) {
 				$('body').removeClass('offcanvas-menu');
 				$this.removeClass('active');
 			} else {
 				$('body').addClass('offcanvas-menu');
 				$this.addClass('active');
 			}
 		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	    gallery: {
	    	enabled: true,
	    	navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	    	verticalFit: true
	    },
	    zoom: {
	    	enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						margin: 0,
						nav: true,
						items: 2
					},
					1000:{
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 3
					},
					1200:{
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 4
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			smartSpeed: 1000,
			dots: true,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
			var $this = $(this).html(event.strftime(''
				+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
				+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
				+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
				+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
				+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	// navigation
	var OnePageNavigation = function() {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				'scrollTop': $(hash).offset().top
			}, 800, 'swing', function(){
				window.location.hash = hash;
			});

		});

    // $("#menu li a[href^='#']").on('click', function(e){
    //   e.preventDefault();
    //   navToggler.trigger('click');
    // });

    $('body').on('activate.bs.scrollspy', function () {
      // console.log('nice');
      //alert('yay');
    })
  };
  OnePageNavigation();


  window.addEventListener('load',function(){
	



	
  });


  window.addEventListener('load', function() {

		
		
	});	

	window.addEventListener("load",function(){

		const MeniPodaci = [
			{
				title: "Home",
				reference:"#section-home"
			},
			{
				title: "Photos",
				reference:"#section-photos"
			},
			{
				title: "Testimonial",
				reference:"#section-testimonial"
			},
			{
				title: "Blog",
				reference:"#section-blog"
				
			},
			{
				title: "Contact",
				reference:"#section-contact"
				
			},
			{
				title: "Autor",
				reference:"autor.html"
				
			},
	
		]
	
		const MeniIkonice = [
			{
				iconType: "instagram",
				ref:"#"
			},
			{
				iconType: "facebook",
				ref:"#"
			},
			{
				iconType: "twitter",
				ref:"#"
			},
			{
				iconType: "linkedin",
				ref:"#"
				
			},
			{
				iconType: "file",
				ref:"dokumentacija.pdf"
				
			}
		]
		let MenuButtons =`
					
			<ul class="js-clone-nav">
		`;
	
		let MenuSocials =`
					
			<ul class="social js-clone-nav">
		`;
	
		const menuContainer = $('#meniDeo'); 
	
	
		MeniPodaci.forEach(function(podatak, index) {
				
			MenuButtons += `
				<li><a href="${podatak.reference}" class="nav-link">${podatak.title}</a></li>
			`;
		});
	
		MeniIkonice.forEach(function(podatak, index) {
				
			MenuSocials += `
				<li><a href="${podatak.ref}"><span class="icon-${podatak.iconType}"></span></a></li>
			`;
		});
		MenuSocials +='</ul>'
		menuContainer.append(MenuButtons);
		menuContainer.append(MenuSocials);


		

		const images = [
			'images/img_1.jpg',
			'images/img_2.jpg',
			'images/img_3.jpg',
			'images/img_4.jpg',
			'images/img_5.jpg',
			'images/img_6.jpg',
			'images/img_7.jpg',
			'images/img_8.jpg',
			'images/img_9.jpg',
			'images/img_13.jpg',
			'images/img_10.jpg',
			'images/img_14.jpg',
		];
	
		const photoContainer = document.getElementById('photo-container');
			
		images.forEach((image, index) => {
			const div = document.createElement('div');
			div.classList.add('col-6', 'col-md-6', 'col-lg-4');
			div.setAttribute('data-aos', 'fade-up'); 
	
				
			const link = document.createElement('a');
			link.setAttribute('href', image);
			link.classList.add('d-block', 'photo-item');
			link.setAttribute('data-fancybox', 'gallery');
	
				
			const img = document.createElement('img');
			img.setAttribute('src', image); 
			img.setAttribute('alt', 'Image');
			img.classList.add('img-fluid', 'mb-0');
	
			link.appendChild(img);
	
				
			div.appendChild(link);
	
				
			photoContainer.appendChild(div);
	
				
				
		});
	
		const Blogovi = [
			{
				title: "How to Choose the Right Camera for Beginners",
				date: "January 15, 2024",
				text: "For beginners, choosing the right camera can be a challenge. In this post, we explore the different types of cameras, from compact cameras to DSLR and mirrorless models, to help you make the right choice that fits your needs and budget",
				image: "images/img_1.jpg"
			},
			{
				title: "10 Tips for Perfect Photography in Natural Light",
				date: "March 12, 2024",
				text: "Natural light can be your greatest ally in photography. In this post, we share ten helpful tips on how to make the most of natural light to create stunning photographs, whether you're indoors or outdoors.",
				image: "images/img_2.jpg"
			},
			{
				title: "The Basics of Composition in Photography: The Rule of Thirds",
				date: "June 28, 2024",
				text: "Composition is key to successful photography. Learn the basic principles of composition, such as the rule of thirds, and how to apply them to create balanced and visually appealing photographs that tell a story.",
				image: "images/img_3.jpg"
			},
			{
				title: " How to Edit and Process Your Photos in Photoshop",
				date: "October 21, 2024",
				text: "Post-production is a key part of professional photography. In this post, you'll learn basic editing and processing techniques in Photoshop, from color correction to retouching, to enhance your shots and achieve the final effect.",
				image: "images/img_4.jpg"
			},

		]
		const blogContainer = $('#blog-posts'); 

		Blogovi.forEach(function(post, index) {
			
			const blogCard = `
				
				<div class="col-md-12 mb-4" data-aos="fade-up">
                    <div class="d-md-flex d-block blog-entry align-items-start">
                      <div class="mr-0 mr-md-5 mb-3 img-wrap"><a href="#"><img src="${post.image}" alt="Image" class="img-fluid mb-0"></a></div>
                      <div>
                        <h2 class="mt-0 mb-2"><a href="#">${post.title}</a></h2>
                        <div class="meta mb-3">Posted by Ben Jones on <a href="#">${post.date}</a></div>
                        <p>${post.text}</p>
                      </div>
                    </div>
                </div>
			`;
			
			blogContainer.append(blogCard);
		});

 	});


	$('#contact-form').submit(function(event) {
		event.preventDefault();  
	
		$('#form-message').html('');
		let isValid = true;
		
		let fname = $('#fname').val().trim();
		let nameRegex = /^[A-Za-z]{3,}$/;
		if (fname === ''|| !nameRegex.test(fname)) {
		  isValid = false;
		  $('#form-message').append('<p class="text-danger">Please re-enter your first name.</p>');

		}

		let lname = $('#lname').val().trim();
		if (lname === '' || !nameRegex.test(lname)) {
		  isValid = false;
		  $('#form-message').append('<p class="text-danger">Please re-enter your last name.</p>');

		}

		let email = $('#email').val().trim();
		let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (email === '' || !emailRegex.test(email)) {
		  isValid = false;
		  $('#form-message').append('<p class="text-danger">Please enter a valid email address.</p>');
		}
	
		let subject = $('#subject').val().trim();
		let subjectRegex=/^[a-zA-Z0-9._%+-\s]{4,}$/;
		if (subject === ''|| !subjectRegex.test(subject)) {
		  isValid = false;
		  $('#form-message').append('<p class="text-danger">Please re-enter the subject.</p>');
		}
	
	
		let inquiryType = $('input[name="inquiry-type"]:checked').val();
		if (!inquiryType) {
		  isValid = false;
		  $('#form-message').append('<p class="text-danger">Please select the type of inquiry.</p>');
		}
	
		
		if (isValid) {
		  $('#form-message').html('<p class="text-success">Your message has been successfully sent!</p>');
		}
		else{
			$("#form-message")[0].scrollIntoView({behavior: 'smooth'});
		}



	});

	
	$('.site-logo a').hover(
		function() {
			$(this).stop().animate({
			  fontSize: '34px'  // Povećavamo veličinu fonta
			}, 300);
			$(this).css({
			  'color': '#fff',  // Menjamo boju teksta na belo
			  'background-color': 'black',  // Menjamo boju pozadine
			  'transform': 'scale(1.05)',  // Povećavamo logotip
			});
		  },

		  function() {
			$(this).stop().animate({
			  fontSize: '20px'  // Vraćamo početnu veličinu fonta
			}, 300);
			$(this).css({
			  'color': '#000',  // Vraćamo početnu boju teksta
			  'background-color': 'transparent',  // Vraćamo početnu boju pozadine
			  'transform': 'scale(1)',  // Vraćamo originalnu veličinu
			});
		  }
	  );


});