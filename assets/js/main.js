$(document).ready(function(){
	// By default, all the divs are hidden, if you were to add a new div, you should hide it here.
	// If you want to show a div, you should clic on the corresponding link on the navbar.
	$('#educationContent').hide();
	$('#publicationsContent').hide();
	$('#experienceContent').hide();
	//$('#conferencesContent').hide();
	//$('#projectsContent').hide();
	//$('#blogContent').hide();
	//$('#academicContent').hide();
	//$('#particularContent').hide();
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
	
	//if(localStorage.getItem("theme") === null){
	//	localStorage.theme = "light";
	//	if (window.matchMedia('(prefers-color-scheme: dark)').matches)
	//		localStorage.theme = "dark";
	//}

	// Always load the light theme
	//$('<link>').appendTo('head').attr({
	//	type: 'text/css', 
	//	rel: 'stylesheet',
	//	href: 'assets/css/light.css'
	//});

	// If the user has the dark theme, then replace the light theme with the dark one
	//if (localStorage.theme == "dark") {
	//	$("link[href='assets/css/light.css']").remove();
	//	$('<link>').appendTo('head').attr({
	//		type: 'text/css', 
	//		rel: 'stylesheet',
	//		href: 'assets/css/dark.css'
	//	});
	//	$('#theme').empty().append("<i class='fa-duotone fa-lightbulb-slash'></i>");
	//}

	// Controls the option menu toggler to show/hide the theme selector
	//$('#options-toggler').click(function(e) {
	//	if(!$(e.currentTarget).hasClass('active')) {
	//		$(e.currentTarget).addClass('active');
	//		$('#theme').show("fast");
	//	}
	//	else {
	//		$(e.currentTarget).removeClass('active');
	//		$('#theme').hide("fast");
	//	}
	//})

    // *************************** //
    // Theme Handling (Updated)
    // *************************** //
	// Helper function to apply the theme and update the icon
    function applyTheme(themeName) {
        // Set the data attribute on the <html> tag
        document.documentElement.setAttribute('data-theme', themeName);
        // Save to local storage
        localStorage.setItem('theme', themeName);
        
        // Update the button icon with FREE Font Awesome classes
        if (themeName === 'dark') {
            // Show the sun icon when in dark mode (to toggle back to light)
            $('#theme').empty().append("<i class='fas fa-sun'></i>");
        } else {
            // Show the moon icon when in light mode (to toggle to dark)
            $('#theme').empty().append("<i class='fas fa-moon'></i>");
        }
    }

    // 1. Initial Load: Check local storage or system preferences
    if (localStorage.getItem("theme") === null) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    } else {
        // Apply whatever was saved in localStorage
        applyTheme(localStorage.getItem("theme"));
    }

    // 2. Controls the option menu toggler to show/hide the theme selector
    $('#options-toggler').click(function(e) {
        if(!$(e.currentTarget).hasClass('active')) {
            $(e.currentTarget).addClass('active');
            $('#theme').show("fast");
        } else {
            $(e.currentTarget).removeClass('active');
            $('#theme').hide("fast");
        }
    });

    // 3. Alternates between light and dark themes on click
    $('#theme').click(function(e) {
        if (localStorage.getItem("theme") !== "dark") {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    });


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
