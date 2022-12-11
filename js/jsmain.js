function $(id) {
	return document.getElementById(id);
}

function getTime(){
	var myDate=new Date();
	$("timeString").innerHTML = "当前时间为："+myDate.toLocaleString();
}

window.onload = function Get() {
	setInterval("getTime()",1000);
	var xmlhttp;
	var Province, City, Weather, Temperature;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var info = xmlhttp.responseText;
			temp = JSON.parse(info);
			Province = temp.lives[0].province;
			City = temp.lives[0].city;
			Weather = temp.lives[0].weather;
			Temperature = temp.lives[0].temperature;
            Time = temp.lives[0].reporttime;
			$('weatherString').innerHTML = Province + City + "的天气目前为" + Weather + "，温度为" + Temperature + "℃。";
			

		}
	}
	xmlhttp.open("GET", "http://restapi.amap.com/v3/weather/weatherInfo?key=9efec17481a16b52b53ff7204a10be51&city=350100", true);
	xmlhttp.send();
}

function changepicture(id, adress) {
	var img = $(id);
	img.src = adress;
}

function showDiv(index) {
	if (index == 1) {
		$('shoppingDiv').style.display = "";
	}
	if (index == 0) {
		$('shoppingDiv').style.display = "none";
	}
}

function changeStyle(value, index) {
	var headerTopDiv = $('Div' + index);
	if (headerTopDiv.style.display == value) {} else {
		headerTopDiv.style.display = value;
	}
}