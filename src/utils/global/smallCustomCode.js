
export const smallCustomCode = () => {
  //Toggle line visibility in the features tabs component
  $('.features-tabs_link').on('click', function () {
    $('.features-tabs_link-line').removeClass('is-active');
    $(this).find('.features-tabs_link-line').addClass('is-active');
  });

  // when the DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    // set the fs-hacks selector
    const YEAR_SELECTOR = '[footer-year="year"]';
    // get the the span element
    const yearSpan = document.querySelector(YEAR_SELECTOR);

    if (!yearSpan) return;
    // get the current year
    const currentYear = new Date().getFullYear();

    // set the year span element's text to the current year
    yearSpan.innerText = currentYear.toString();
  });

  // Video mute button
  $('video').prop('muted', true);

  $('.video_sound-button').click(function () {
    if ($('video').prop('muted')) {
      $('video').prop('muted', false);
      $(this).addClass('unmute-video'); // changing icon for button
    } else {
      $('video').prop('muted', true);
      $(this).removeClass('unmute-video'); // changing icon for button
    }
    console.log($('video').prop('muted'));
  });

  // products hover
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.products-products_item').forEach((trigger) => {
      trigger.addEventListener('mouseover', function () {
        this.querySelectorAll('.text-link-hover').forEach((target) =>
          target.classList.add('is-hover')
        );
      });
    });
    document.querySelectorAll('.products-products_item').forEach((trigger) => {
      trigger.addEventListener('mouseout', function () {
        this.querySelectorAll('.text-link-hover').forEach((target) =>
          target.classList.remove('is-hover')
        );
      });
    });
  });

  //form label focus
  $('.form_label').removeClass('is-focus');

  $('.form_input').on('focusout', function () {
    $(this).siblings('.form_label').removeClass('is-focus');
  });

  $('.form_input').on('focus', function () {
    $(this).siblings('.form_label').addClass('is-focus');
  });

  // menu items hover fix
  $(document).ready(function () {
    let isMenuOpen = false;

    $('#menu-button').click(function () {
      isMenuOpen = !isMenuOpen;

      if (isMenuOpen) {
        $('.button.is-text-menu.w-inline-block').each(function () {
          $(this).css('color', '#fff');
          $('.button_underline', this).css('background-color', '#fff');
          $(this).off('mouseover mouseout'); // Remove the mouseover/mouseout listeners
        });
      } else {
        $('.button.is-text-menu.w-inline-block').each(function () {
          $(this).on('mouseover', function () {
            $(this).css('color', '#bc9753');
            $('.button_underline', this).css('background-color', '#bc9753');
          });

          $(this).on('mouseout', function () {
            $(this).css('color', '#292929');
            $('.button_underline', this).css('background-color', 'transparent');
          });
        });
      }
    });
  });

};
