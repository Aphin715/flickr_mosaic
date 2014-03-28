
$(document).ready(function(){


  var key = 'ff6b4a42a79e0d2a01a2e9bcece3dcad';

  $('#search-form').submit(function(e){
    e.preventDefault();

    var text = $("input").val();
    if(text.length > 0) {
    $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=91f8dae63570834618a764ae1be825d0&contacts=40562478%40N08%2C+103104156%40N07&per_page=50&page=&format=json&nojsoncallback=1&auth_token=72157643073992933-5e7d64c7b6298ecb&api_sig=a23c5b1123d9b733605492a7a99ed73f', successCallback);
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

