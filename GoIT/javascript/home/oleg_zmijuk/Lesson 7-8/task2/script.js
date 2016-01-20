$('div').hover( 
    function() {
        $(this).addClass('active').siblings().removeClass('active') 
    },
    
    function() {
        $(this).removeClass('active')    
    }
);

$('button').click(function() {
    $('button').siblings().addClass('active')
    return false;
});
