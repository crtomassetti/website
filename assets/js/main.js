$(document).ready(function(){
	// By default, all the divs are hidden, if you were to add a new div, you should hide it here.
	// If you want to show a div, you should clic on the corresponding link on the navbar.
	$('#educationContent').hide();
	$('#publicationsContent').hide();
	$('#experienceContent').hide();
	$('#conferencesContent').hide();
	$('#projectsContent').hide();
	$('#blogContent').hide();
	$('#academicContent').hide();
	$('#particularContent').hide();
	// $('#photosContent').hide();

	// Options menu is hidden by default
	$('#theme').hide();
	// $('#lan').hide();  // removed language toggle

	// Handle 'About Me' content
	$('#aboutme').click(function(e) {

		if(!$(e.target).hasClass('active')) {
			clearActiveLinks();
			activateLink(e);
			clearActiveDivs();
			activateDiv('#aboutmeContent');
		}

	});

	// Handle 'Education' content
	$('#education').click(function(e) {

		if(!$(e.target).hasClass('active')) {
			clearActiveLinks();
			activateLink(e);
			clearActiveDivs();
			activateDiv('#educationContent');
		}
	});

	// Handle 'Publications' content
	$('#publications').click(function(e) {

		if(!$(e.target).hasClass('active')) {
			clearActiveLinks();
			activateLink(e);
			clearActiveDivs();
			activateDiv('#publicationsContent');
		}
	});

	// Handle 'Blog' content
	$('#blog').click(function(e) {

		if(!$(e.target).hasClass('active')) {
			clearActiveLinks();
			activateLink(e);
			clearActiveDivs();
			activateDiv('#blogContent');
		}
	});

	// Handle 'Academic' content
	$('#academic').click(function(e) {

		if(!$(e.target).hasClass('active')) {
			clearActiveLinks();
			activateLink(e);
			clearActiveDivs();
			activateDiv('#academicContent');
		}
	});

	// Handle 'Particular' content
	$('#particular').click(function(e) {

		if(!$(e.target).hasClass('active')) {
			clearActiveLinks();
			activateLink(e);
			clearActiveDivs();
			activateDiv('#particularContent');
		}
	});

	// Handle 'Conferences' content
	$('#conferences').click(function(e) {

		if(!$(e.target).hasClass('active')) {
			clearActiveLinks();
			activateLink(e);
			clearActiveDivs();
			activateDiv('#conferencesContent');
		}
	});

	// Handle 'Experience' content
	$('#experience').click(function(e) {

		if(!$(e.target).hasClass('active')) {
			clearActiveLinks();
			activateLink(e);
			clearActiveDivs();
			activateDiv('#experienceContent');
		}
	});

	// Handle 'Projects' content
	$('#projects').click(function(e) {

		if(!$(e.target).hasClass('active')) {
			clearActiveLinks();
			activateLink(e);
			clearActiveDivs();
			activateDiv('#projectsContent');
		}
	});

	// **************************** //
	// Handles the Publications events
	// **************************** //

	$(document).on("click", "#citation", function(){
		var text = $(this).parent().parent().next()[0].innerHTML;
		navigator.clipboard.writeText(text);
		toastr.success('Citation copied');
	});

	// ******************** //
	// Handles the Blog events
	// ******************** //

	$('.clickable').click(function(e) {
		window.open($(e.currentTarget)[0].childNodes[1].innerText, '_blank').focus();
	});

	// *************************** //
	// Handle the rest of the content
	// *************************** //
	
	if(localStorage.getItem("theme") === null){
		localStorage.theme = "light";
		if (window.matchMedia('(prefers-color-scheme: dark)').matches)
			localStorage.theme = "dark";
	}

	// Always load the light theme
	$('<link>').appendTo('head').attr({
		type: 'text/css', 
		rel: 'stylesheet',
		href: 'assets/css/light.css'
	});

	// If the user has the dark theme, then replace the light theme with the dark one
	if (localStorage.theme == "dark") {
		$("link[href='assets/css/light.css']").remove();
		$('<link>').appendTo('head').attr({
			type: 'text/css', 
			rel: 'stylesheet',
			href: 'assets/css/dark.css'
		});
		$('#theme').empty().append("<i class='fa-duotone fa-lightbulb-slash'></i>");
	}

	// Controls the option menu toggler to show/hide the theme selector
	$('#options-toggler').click(function(e) {
		if(!$(e.currentTarget).hasClass('active')) {
			$(e.currentTarget).addClass('active');
			$('#theme').show("fast");
		}
		else {
			$(e.currentTarget).removeClass('active');
			$('#theme').hide("fast");
		}
	})

	// Alternates between light and dark themes
	$('#theme').click(function(e) {
		if(localStorage.theme != "dark"){
			$('#theme').empty().append("<i class='fa-duotone fa-lightbulb-slash'></i>");
			localStorage.theme = "dark"
			
			$("link[href='assets/css/light.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: 'assets/css/dark.css'
			});
		}
		else {
			$('#theme').empty().append("<i class='fa-duotone fa-lightbulb'></i>");
			localStorage.theme = "light"
			
			$("link[href='assets/css/dark.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: 'assets/css/light.css'
			});
		}
	})

});

// Clears the active links
function clearActiveLinks() {
	$('#navbarList .nav-item .nav-link').each(function() {
		$(this).removeClass('active');
	});
}

// Clears the active divs
function clearActiveDivs() {
	$('.container .content .active').each(function() {
		$(this).removeClass('active');
		$(this).hide();
	});
}

// Activates the link
function activateLink(e) {
	$(e.target).addClass('active');
	
	if(e.target.id == "particular")
		$('#leftPanel').hide();
	else
		$('#leftPanel').show();
}

// Activates the div
function activateDiv(divId) {
	$(divId).addClass('active');
	$(divId).show();
	scrollToContent(divId);
}

// Scrolls to the content
function scrollToContent(divId) {
	if ($(window).width() < 751) {
		$('html, body').animate({
			scrollTop: $(divId).offset().top
		}, 1);
	}
}
