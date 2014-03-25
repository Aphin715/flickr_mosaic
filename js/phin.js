
$(document).ready(function(){


  var key = '8bb6ca085c6d64b15eb764a3f82728cd';

  $('#search-form').submit(function(e){
    e.preventDefault();

    var text = $("input").val();
    if(text.length > 0) {
    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2fae147e843094cca415d2c5a90d91b9&user_id=99250306%40N03&per_page=450&format=json&nojsoncallback=1&auth_token=72157642911607483-8619882c427de747&api_sig=fdc4d08098bc32b5a9c27a93dcd0e75c', successCallback);
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