document.getElementById("checkWeather").addEventListener("click", function(){
  var city = document.getElementById("city").value;
  var myURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=50a7aa80fa492fa92e874d23ad061374'
  //console.log("My url =  " + myURL )
  $.ajax({
     type:"GET",
     dataType: "json",
     data:{name: name},
     url: myURL,
     success:function(data)
     {
          document.getElementById("msg").innerHTML = "";
          var tempValue = Math.round(data['main']['temp'] - 273.15);
          var nameValue = data['name'];
          var descValue = data['weather'][0]['description'];
          document.getElementById("msg").innerHTML += '<h1> current Temprture : '+tempValue+'</h1>';
          document.getElementById("msg").innerHTML += '<p> current City : '+nameValue+'</p>';
          document.getElementById("msg").innerHTML += '<p> current Weather Description : '+descValue+'</p>';
     }, error: function(){
       document.getElementById("msg").innerHTML = "<p>  Something wrong with the API  </p>";
     }
  });
});
document.getElementById("myBtn1").addEventListener("click", function(){
  console.log("you clicked the button");
            $.ajax({
               type:"GET",
               dataType: "json",
               data:{name: name},
               url:"https://jsonplaceholder.typicode.com/posts",
               success:function(data)
               {
                 var row = "";
                 document.getElementById("msg").innerHTML = "<table id='tableResult'>" +
                  "<tr> <th>id</th> <th>userid</th>  <th>title</th>   </tr>" +
                  "</table>";
                  $.each(data, function(){
                    row += "<tr> <td>"+ this.id +"</td> <td>"+this.userId+"</td>  <td>"+this.title+"</td>   </tr>";
                    $('#tableResult').append(row);
                  });

               }, error: function(){
                 document.getElementById("msg").innerHTML = "<p>  Something wrong with the API or you have typed wrong city </p>";
               }
            });
});
document.getElementById("myBtn2").addEventListener("click", function(){
  //document.getElementById("demo").innerHTML = "Hello World";
  console.log("you clicked the button");
  document.getElementById("msg").innerHTML = "spiciatis unde omnis iste natus erro";
});
document.getElementById("myBtn3").addEventListener("click", function(){
  //document.getElementById("demo").innerHTML = "Hello World";
  console.log("you clicked the button");
  document.getElementById("msg").innerHTML = "doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labo";
});
document.getElementById("myBtn4").addEventListener("click", function(){
  //document.getElementById("demo").innerHTML = "Hello World";
  console.log("you clicked the button");
  document.getElementById("msg").innerHTML = "labore et dolore magnam aliquam quaerat volupta";
});
document.getElementById("myBtn5").addEventListener("click", function(){
  //document.getElementById("demo").innerHTML = "Hello World";
  console.log("you clicked the button");
  document.getElementById("msg").innerHTML = "hello Aframlabore et dolore magnam aliquam quaerat volupta";
});
