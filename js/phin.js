
$(document).ready(function(){


  var key = 'afd1a75211d9ad2a6d9cbb13f3a5947a';

  $('#search-form').submit(function(e){
    e.preventDefault();

    var text = $("input").val();
    if(text.length > 0) {
    $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b45a8ae6296dfa7fff1a3aa658d46b5b&user_id=99250306%40N03&per_page=90&format=json&nojsoncallback=1&auth_token=72157642960991314-961c3cd0b6a8882b&api_sig=9bc5af3f56a2112dc6f9d0d370288d1c', successCallback);
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