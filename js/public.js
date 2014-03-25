
$(document).ready(function(){

  var key = 'ff6b4a42a79e0d2a01a2e9bcece3dcad';

  $('#search-form').submit(function(e){
    e.preventDefault();

    var text = $("input").val();
    if(text.length > 0) {
      console.log(text);
$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8dc46493ce8ed4731f9310826491a6b3&text='+text+'&format=json&nojsoncallback=1', successCallback);
    // $.getJSON("http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=502d8f35ecf639d01769c60c3ff4a42d&extras=&per_page=500&format=rest&auth_token=72157642856975774-7c1fd459d85cbb2c&api_sig=115137726cc4600ec03eed2c870e8f3c", successCallback);
    } else {
      alert("you need to enter a value");
    }
  });


  function successCallback(data) {

    var photos = data["photos"];
    console.log(data["photos"]);
    var markup = '';
        photos["photo"].forEach(function(entry) {
        console.log(entry);
            var id = entry["id"];
            var owner =entry["owner"];
            var secret= entry["secret"];
            var server= entry["server"];
            var farm = entry["farm"];

         markup = markup + "<a href='http://farm"+farm+".staticflickr.com/"+server+"/"+id+"_"+secret+".jpg' class='fancybox' alt='' rel='gallery'><img src='http://farm"+farm+".staticflickr.com/"+server+"/"+id+"_"+secret+"_q.jpg'></a>";
         console.log(markup);
    });

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
