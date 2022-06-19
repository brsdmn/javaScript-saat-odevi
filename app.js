let kullaniciAdi = prompt("lütfen isminizi giriniz")
let myname = document.querySelector("#myName")
myname.innerHTML= kullaniciAdi

 function showTime() {

        let myDate = new Date();
        let myHours = myDate.getHours();
        let myMinute = myDate.getMinutes();
        let mySeconds = myDate.getSeconds();
        let myDay = myDate.getDay();
        
        myHours = (myHours < 10) ? "0" + myHours : myHours;
        myMinute = (myMinute < 10) ? "0" + myMinute : myMinute;
        mySeconds = (mySeconds < 10) ? "0" + mySeconds : mySeconds;
        
        if (myDay == 1) {
        
            myDay = "Pazartesi";
        } else if (myDay == 2) {
            myDay = "Salı";
        } else if (myDay == 3) {
            myDay = "Çarşamba";
        } else if (myDay == 4) {
            myDay = "Perşembe";
        } else if (myDay == 5) {
            myDay = "Cuma";
        } else if (myDay == 6) {
            myDay = "Cumartesi";
        } else if (myDay == 0) {
            myDay = "Pazar";
        }
        
        
        let time = myHours + ":" + myMinute + ":" + mySeconds + "      " + myDay;
        
        document.querySelector("#info").innerText = time;
        document.querySelector("#info").textContent = time;
        
        
        setTimeout(showTime, 1000);
        
        
        
        
        
        
        }
        
        
        showTime();