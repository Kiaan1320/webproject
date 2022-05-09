const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');

const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
 

const getinfo= async(event) =>{

    event.preventDefault();

    let cityVal=cityName.value;
if(cityVal===""){
city_name.innerText='Please write name before search';


}else{
try {
    //alert(cityVal);

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fbeee9927a578168889db79dd24cfa7d`;

    const response= await fetch(url);
    const data= await response.json();
    const arrData=[data];
    city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country} `;

    temp.innerText=arrData[0].main.temp;
    // temp_status.innerText=arrData[0].weather[0].main;
    const tempMood=arrData[0].weather[0].main;

    if(tempMood=='Clear'){

        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i> ";

    }else if(tempMood=='Clouds'){
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i> ";

    }else if (tempMood=='Rain'){
        temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be'></i> ";

    }else{
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i> ";
    }
   
   
   
    // alert('hi');
    console.log(response);
    
} catch  {

    city_name.innerText='Please enter the city name properly';
    
}

}


}
submitBtn.addEventListener('click',getinfo);