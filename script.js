$(document).ready(function () {
  // when document is ready, enable the toggler
  $('.nav-button').removeAttr('disabled');

  // togglng hamburger menu
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change'); // add/remove 'change' class on click of nav-button
  });

  // set currently clicked menu item as active
  // $('.navbar-nav a').on('click', function () {
  //   $('.navbar-nav').find('li a.nav-active').removeClass('nav-active');
  //   $(this).addClass('nav-active');
  // });

  // window scroll event - show border bottom
  $(window).scroll(function () {
    let position = $(this).scrollTop(); // calculates position in px when we scroll down
    //console.log(position);
    if (position > 450) {
      // add custom-navbar class when scroll position is >= 200
      $('.nav-menu').addClass('custom-navbar');
    } else {
      // remove custom-navbar class when scroll position is < 200
      $('.nav-menu').removeClass('custom-navbar');
    }
  });

  // set home menu item as active when clicked on logo
  // $('#logo').on('click', function () {
  //   $('.navbar-nav').find('li a.nav-active').removeClass('nav-active');
  //   $('a[href$="#banner"]').addClass('nav-active');
  // });

  // window scroll event - to animate banner
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position <= 325) {
      // banner
      $('.banner-section').css('opacity', '1'); // when user scrolls up
      $('.banner-section').addClass('fromTopHeader');
      $('.home-social *').addClass('socialMedia');
    } else {
      // banner
      $('.banner-section').css('opacity', '0'); // when user scrolls up from bottom, we should not show the banner to have better UX
      $('.banner-section').removeClass('fromTopHeader');
      $('.home-social *').removeClass('socialMedia');
    }
  });

  // window scroll event - to animate About
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position > 325 && position < 1300) {
      // about
      $('.about-title').css('opacity', '1'); // when user scrolls up
      $('.about-title').addClass('sectionTitleAnimation');
      // console.log('added sectionTitleAnimation');
    } else {
      // about
      $('.about-title').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.about-title').removeClass('sectionTitleAnimation');
      // console.log('removed sectionTitleAnimation');
    }
  });

  // window scroll event - to animate About
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position > 350 && position < 1300) {
      $('.about-img').css('opacity', '1'); // when user scrolls up
      $('.about-img').addClass('fromLeft');

      $('.about-description').css('opacity', '1'); // when user scrolls up
      $('.about-description').addClass('fromRight');
    } else {
      $('.about-img').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.about-img').removeClass('fromLeft');

      $('.about-description').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.about-description').removeClass('fromRight');
    }
  });

  // window scroll event - to animate skills title
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 1100 && position < 1700) {
      $('.skills-title').css('opacity', '1'); // when user scrolls up
      $('.skills-title').addClass('sectionTitleAnimation');
    } else {
      $('.skills-title').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.skills-title').removeClass('sectionTitleAnimation');
    }
  });

  /*
  // **** FOR ALL SKILLS
  // window scroll event - to animate skills
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);
    if (position > 1100 && position < 3500) {
      // set width same as parent so that it will transition over given time in 'skill_bar-slider'
      $('.skill_bar-slider').each(function () {
        $(this).width($(this).parent().width());
      });
    } else {
      // set width back to 0
      $('.skill_bar-slider').width(0);
    }
  });
  */

  // **** FOR SEPERATE SKILLS
  // window scroll event - to animate frontend skills
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 1100 && position < 2400) {
      // set width same as parent so that it will transition over given time in 'skill_bar-slider'
      $('.frontend-progress * .skill_bar-slider').each(function () {
        $(this).width($(this).parent().width());
      });
    } else {
      // set width back to 0
      $('.frontend-progress * .skill_bar-slider').width(0);
    }
  });

  // window scroll event - to animate backend skills
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 1500 && position < 2800) {
      // set width same as parent so that it will transition over given time in 'skill_bar-slider'
      $('.backend-progress * .skill_bar-slider').each(function () {
        $(this).width($(this).parent().width());
      });
    } else {
      // set width back to 0
      $('.backend-progress * .skill_bar-slider').width(0);
    }
  });

  // window scroll event - to animate other skills
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 1800 && position < 3500) {
      // set width same as parent so that it will transition over given time in 'skill_bar-slider'
      $('.other-progress * .skill_bar-slider').each(function () {
        $(this).width($(this).parent().width());
      });
    } else {
      // set width back to 0
      $('.other-progress * .skill_bar-slider').width(0);
    }
  });

  // window scroll event - to animate timeline
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 2500 && position < 4600) {
      $('.timeline-title').css('opacity', '1'); // when user scrolls up
      $('.timeline-title').addClass('sectionTitleAnimation');

      $('.event-1').css('opacity', '1'); // when user scrolls up
      $('.event-1').addClass('animate-event-1');

      $('.event-2').css('opacity', '1'); // when user scrolls up
      $('.event-2').addClass('animate-event-2');

      $('.event-3').css('opacity', '1'); // when user scrolls up
      $('.event-3').addClass('animate-event-3');

      $('.event-4').css('opacity', '1'); // when user scrolls up
      $('.event-4').addClass('animate-event-4');
    } else {
      $('.timeline-title').css('opacity', '0'); // when user scrolls up
      $('.timeline-title').removeClass('sectionTitleAnimation');

      $('.event-1').css('opacity', '0'); // when user scrolls up from bottom, we should not show the timeline to have better UX
      $('.event-1').removeClass('animate-event-1');

      $('.event-2').css('opacity', '0'); // when user scrolls up from bottom, we should not show the timeline to have better UX
      $('.event-2').removeClass('animate-event-2');

      $('.event-3').css('opacity', '0'); // when user scrolls up from bottom, we should not show the timeline to have better UX
      $('.event-3').removeClass('animate-event-3');

      $('.event-4').css('opacity', '0'); // when user scrolls up from bottom, we should not show the timeline to have better UX
      $('.event-4').removeClass('animate-event-4');
    }
  });

  // close menu on click
  $('.nav-item').click(function (e) {
    $('.navbar-collapse').removeClass('show'); // 'show' is default bootstrap class which shows the nav menu on small devices
    $('.navbar-toggler').removeClass('change'); // change class was added above on '.nav-button' click
  });

  // Work filter
  // filter work items based on selected filter
  $('.work-list-item').click(function () {
    // get value of 'data-filter' attribute of work-list-item
    let value = $(this).attr('data-filter');
    if (value === 'all') {
      $('.filter').show(300); // 300 ms
    } else {
      // filter out elements which does NOT have given class
      $('.filter')
        .not('.' + value)
        .hide(300);

      // show with matching class names
      $('.filter')
        .filter('.' + value)
        .show();
    }
  });

  // Add class 'active-item' to the currently selected list item
  $('.work-list-item').click(function () {
    // mark selected item as active and remove active class from other list-items
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

  // window scroll event - to animate Work title
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 3450 && position < 4700) {
      $('.work-title').css('opacity', '1'); // when user scrolls up
      $('.work-title').addClass('sectionTitleAnimation');
    } else {
      $('.work-title').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.work-title').removeClass('sectionTitleAnimation');
    }
  });

  // window scroll event - to animate Work cards
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 3450 && position < 4200) {
      $('.card').addClass('workCardAnimation');
    } else {
      $('.card').removeClass('workCardAnimation');
    }
  });

  // window scroll event - to animate contact title
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 4200) {
      $('.contact-title').css('opacity', '1'); // when user scrolls up
      $('.contact-title').addClass('sectionTitleAnimation');
    } else {
      $('.contact-title').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.contact-title').removeClass('sectionTitleAnimation');
    }
  });

  // Contact Form submission
  $('.contact-form').submit(function (event) {
    // to avoid page reload
    event.preventDefault();

    // disable the button to multiple click send
    $('.submit-button').attr('disabled', true);

    // clear alert area
    $('.alert-area').html('');

    // send form data
    $.ajax({
      url: 'https://formspree.io/f/xeqvykpn',
      type: 'post',
      dataType: 'json',
      data: $('.contact-form').serialize(),
      success: function (data) {
        // reset the form
        $('.contact-form')[0].reset();

        // enable the button again
        $('.submit-button').removeAttr('disabled');

        // show alert
        $('.alert-area').html(
          `
          <div class="alert alert-success alert-dismissible fade show" role="alert" id="success-alert">
          Thank you for your message! I will get back to you within a day.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`
        );
        //alert('Thank you for your message! I will get back to you within a day.');
      },
      error: function (error) {
        // enable the button again
        $('.submit-button').removeAttr('disabled');

        $('.alert-area').html(
          `
          <div class="alert alert-danger alert-dismissible fade show" role="alert" id="failure-alert">
            Something went wrong! Sorry for the inconvinience.<br>Your message was not sent but you can drop me an email at - <strong>bhilare.sameer@gmail.com</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`
        );
      },
    });
  });
});
