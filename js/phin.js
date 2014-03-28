
$(document).ready(function(){


  var key = 'afd1a75211d9ad2a6d9cbb13f3a5947a';

  $('#search-form').submit(function(e){
    e.preventDefault();

    var text = $("input").val();
    if(text.length > 0) {
    $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=91f8dae63570834618a764ae1be825d0&user_id=99250306%40N03&format=json&nojsoncallback=1&auth_token=72157643073992933-5e7d64c7b6298ecb&api_sig=6ca91fdeae65b98e09bfbcce3591f1f7', successCallback);
    $(".new-search").show();
    } else {
      alert("you need to enter a value");
    }
  });


  function successCallback(data) {
    console.log(data);

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
  $(".new-search").show()
});