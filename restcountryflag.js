document.getElementById("Restcountry").addEventListener("click",restcountryflag)

async function restcountryflag(){
 var res = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
 var data = await res.json();
//  console.log(data)
 for(i=0;i<data.length;i++){
     console.log(data[i].flag)
     console.log(`"countryName:${data[i].name}"`)
     console.log(`"region:${data[i].region}"`)
     console.log(`"sub region:${data[i].subregion}"`)
     console.log(`"population:${data[i].population}"`)

 }
}