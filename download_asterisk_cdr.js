/**
 * Created by Artur Bekerov on 29.08.14.
 */
alert("Downloader loaded");
function cdr_play(a, b) {
    //cdr_play function redefined and then fetch data from iframe.
    // After fetched data pass to setAudio() function and create html element.
    link = window.location.protocol+'//'+window.location.host + b;
    $.get(link,{},function(data){
        setAudio(data,a)
    });
}
function setAudio(data,a){
    src = window.location.protocol+'//'+window.location.host+'/admin/'+$($(data).find('embed')['prevObject'][7]).attr('src');
    audio = '<audio class="audio_element" controls><source src="'+src+'" type="audio/wav">Oops. Browser is not support this feature.</audio>'
    $('.audio_element').remove();
    $('#cdr_table tbody tr').eq(a-1).after(audio);
}
