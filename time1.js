setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	
	let dr=time.getDate();
	let mr=time.getMonth()+1;
	let yr=time.getFullYear();
	let day = time.getDay();
	am_pm = "AM";

	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let dayName = days[day];

	hour =hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
	dr =dr < 10 ? "0" + dr : dr;
	mr =mr < 10 ? "0" + mr : mr;

	let currentTime =hour +":" +min +":" +sec +am_pm;
	
	let currentTime1 ="Date : "+dr+" / "+mr+" / "+yr+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ "Day : "+dayName;
	document.getElementById("digiclock").innerHTML = currentTime;
	document.getElementById("digiclock1").innerHTML = currentTime1;
}
showTime();