$(document).ready(function (){
    $nav= $('.nav');
    $toggleCollapse=$('.toggle_collapse');

    /**click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
})