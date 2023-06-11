    var header = document.querySelector('header');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        // Прокручування вниз
        header.style.top = '-100px';
      } else {
        // Прокручування вгору
        header.style.top = '0';
      }
      
      lastScrollTop = scrollTop;
    });
