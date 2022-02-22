function showTime(){
    var tarih=new Date();
	var year=tarih.getFullYear();
	var mounth=tarih.getMonth();

	var hour=tarih.getHours();
	var minute=tarih.getMinutes();
	var second=tarih.getSeconds();	
    let clock = document.getElementById('myClock').innerHTML =`${gun}/${mounth}/${year}<br>${hour}:${minute}:${second}`;
    
}
setInterval(function(){showTime()});