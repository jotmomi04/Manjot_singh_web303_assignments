$(function () {
    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
        
        var modal = new Modal();
        // Click handler calls open() method of modal object

        modal.open({
            content: $content,
            width: 800,
            height: 470
        });
    });
});