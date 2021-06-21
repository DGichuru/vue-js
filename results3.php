<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>

<style>
#myProgress {
  width: 100%;
  background-color: #ddd;
}
#myProgress2 {
  width: 100%;
  background-color: #ddd;
}
#myProgress3 {
  width: 100%;
  background-color: #ddd;
}

#myBar {
  width: 1%;
  height: 30px;
  background-color: #04AA6D;
}
#myBar2 {
  width: 1%;
  height: 30px;
  background-color: #04AA6D;
}

#myBar3 {
  width: 1%;
  height: 30px;
  background-color: #04AA6D;
}
</style>

<div id="myProgress">
  <div id="myBar"></div>
</div>
<br>
<div id="myProgress2">
  <div id="myBar2"></div>
</div>
<br>

<div id="myProgress3">
  <div id="myBar3"></div>
</div>
<br>

  
</body>
<script>

let i = 348;
var elem = docume
t.getElementById("myBar");
let votecount = 100 * (200 / i) 
      
$('#myBar').css({
  'width' :votecount + '%'
});

var elem = document.getElementById("myBar2");
let votecount1 = 100 * (99 / i) 
      
$('#myBar2').css({
  'width' :votecount1 + '%'
});

var elem = document.getElementById("myBar3");
let votecount2 = 100 * (49
 / i) 
      
$('#myBar3').css({
  'width' :votecount2 + '%'
});


</script>
</html>