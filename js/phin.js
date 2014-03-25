
$(document).ready(function(){


  var key = 'ff6b4a42a79e0d2a01a2e9bcece3dcad';

  $('#search-form').submit(function(e){
    e.preventDefault();

    var text = $("input").val();
    if(text.length > 0) {
    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8dc46493ce8ed4731f9310826491a6b3&user_id=99250306%40N03&per_page=375&format=json&nojsoncallback=1&auth_token=72157642876235595-fd04b7e74da6f7ee&api_sig=4f27d536e05e475717889b8ab787b585', successCallback);
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

});