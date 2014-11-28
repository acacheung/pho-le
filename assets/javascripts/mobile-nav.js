$(function() {
  var sandwichIcon     = $('.header__club-sandwich');
  var closeIcon     = $('.nav__close');
  var main             = $('main');
  var navExpandedClass = 'mobile-nav-is-expanded';

  function removeNavExpandedClass() {
    main.removeClass(navExpandedClass);
  }

  function addNavExpandedClass() {
    main.addClass(navExpandedClass);
  }

  function handleClick(event) {
    var isMobileNavExpanded = main.hasClass(navExpandedClass);

    event.preventDefault();

    if (isMobileNavExpanded) {
      removeNavExpandedClass();
    } else {
      addNavExpandedClass();
    }
  }

  sandwichIcon.click(handleClick);
  closeIcon.click(handleClick);
});
