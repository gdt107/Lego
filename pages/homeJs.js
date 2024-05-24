function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

jQuery(document).ready(function($){

    $('.slider-img').on('click', function(){
        $('.slider-img').removeClass('active');
        $(this).addClass('active');
    });

});



