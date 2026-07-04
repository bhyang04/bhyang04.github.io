// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    $('.showcase-card img').each(function () {
        var image = $(this);
        image.attr('data-toggle', 'modal');
        image.attr('data-target', '#teaser-preview-modal');
        image.addClass('showcase-preview-image');
    });

    $('#teaser-preview-modal').on('show.bs.modal', function (event) {
        var trigger = $(event.relatedTarget);
        var src = trigger.data('teaser-src') || trigger.attr('data-src') || trigger.attr('src');
        var title = trigger.data('teaser-title') || trigger.attr('alt');
        var modal = $(this);

        modal.find('#teaser-preview-image')
            .attr('src', src)
            .attr('alt', title);
    });

    $('#teaser-preview-modal').on('hidden.bs.modal', function () {
        $(this).find('#teaser-preview-image').attr('src', '');
    });
})
