//owl carousel js
var $carousel = $('[data-owl-carousel]');
if ($carousel.length) {
    $carousel.each(function (index, el) {
        $(this).owlCarousel($(this).data('owl-carousel'));
    });
}

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

