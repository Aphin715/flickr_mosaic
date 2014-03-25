
$(document).ready(function(){


  var key = 'ff6b4a42a79e0d2a01a2e9bcece3dcad';

  $('#search-form').submit(function(e){
    e.preventDefault();

    var text = $("input").val();
    if(text.length > 0) {
    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=502d8f35ecf639d01769c60c3ff4a42d&user_id=99250306%40N03&contacts=103104156%40N07&format=json&nojsoncallback=1&auth_token=72157642856975774-7c1fd459d85cbb2c&api_sig=e0c6183b6472617d301402e13eca79a6', successCallback);
    } else {
      alert("you need to enter a value");
    }
  });


  function successCallback(data) {

    var photos = data["photos"];

    var markup = '';
        photos["photo"].forEach(function(entry) {
        console.log(entry);
            var id = entry["id"];
            var owner =entry["owner"];
            var secret= entry["secret"];
            var server= entry["server"];
            var farm = entry["farm"];

         markup = markup + "<a href='http://farm"+farm+".staticflickr.com/"+server+"/"+id+"_"+secret+".jpg' class='fancybox' alt='' rel='gallery'><img src='http://farm"+farm+".staticflickr.com/"+server+"/"+id+"_"+secret+"_q.jpg'></a>";
    });

        // <a href='http://farm"+farm+".staticflickr.com/"+server+"/"+id+"_"+secret+".jpg>'
        $(".tile").append(markup);
    $("#main").hide();
  }

  $(".linebox").on("click",function(){
    $(".dropdown").slideToggle(1000,"linear",function(){
    });
  });

  $("#top-bar h1").on("click",function(){
    window.location.reload(true);
  });
  $(".fancybox").fancybox();
  $("#top-bar h1, .linebox").css('cursor','pointer');
});
