(function() {

    $('#tohash').on('click', function() {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
        return false;
    });

})(jQuery)