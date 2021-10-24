function GetInfo(){
    const newName= document.getElementById("cityInput");
    const cityName= document.getElementById("cityName");
    cityName.innerHTML ="--"+newName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=1469af63617ec2a2f93918eb6da3efe8")
.then(response) => response.json())
.then(data =>{
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"min").innerHTML ="min:" +Number(data.list[i].main.temp_min -283.54).toFixed(1)+"°";

    }
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"min").innerHTML ="max:" +Number(data.list[i].main.temp_max -286.33).toFixed(1)+"°";
}

    for(i=0;i<5;i++){
        document.getElementById("img" +(i+1)).src =" http://openweathermap.org/img/wn/" + data.list[i].weather[0.icon+".jpeg;
    }
})

catch(err => alert("Something Went Wrong"))
}


function DefaultScreen(){
    document.getElementById("cityInput").defaultValue ="Marysville";
    GetInfo();
}
const d =new DataTransfer();
const weekly =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function CheckDay(day){
    if(day +d.getDay() >6){
        return day +d.getDay()-7;

    }
    else{
        return day +d.getDay();
    }

}

for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}