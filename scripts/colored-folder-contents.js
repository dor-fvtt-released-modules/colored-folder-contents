function colorFolderBackground(el) {
    let bgColor = el.find('.folder-header').css('background-color');
    el.css('background-color', bgColor);
    el.find('.subdirectory').css('border-color', bgColor);
    el.addClass('colored-background');
}

Hooks.on('renderSidebarDirectory', function() {
    $('.sidebar-tab').each(function() {
        let list = $(this).find('.directory-list');
        if (list.length) {
            list.children().each(function() {
                if(($(this).hasClass('folder')) && !$(this).hasClass('colored-background')) {
                    colorFolderBackground($(this));
                    if($(this).find('.folder')) {
                        $(this).find('.folder').each(function() {
                            colorFolderBackground($(this));
                        })
                    }
                }
            });
        }
    });
});