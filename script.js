var url="http://samples.openweathermap.org/data/2.5/weather?q=";
var appid="&appid=63042955aaf8e327fb81baf4b03a146a";

function getWeather(){
	var ln=url+$('#mycity').val()+appid;
	$.getJSON(ln,function(data){
		$('#details').html(data);
	});
}