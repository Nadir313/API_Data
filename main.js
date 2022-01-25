const api = "https://api.covid19api.com/summary"
let option = document.querySelector("#option"),
tbody= document.querySelector("#tbody"),
tbody2 = document.querySelector("#tbody2"),
list=document.querySelector(".list"),
card=document.querySelector("#card")
var data = []; 

async function getapi(){
    const response = await fetch(api) ;
     data = await response.json() ;
     console.log(data.Countries[0])

        data.Countries.forEach((countrie)=>{
            if(countrie.Country == "Colombia"  ||countrie.Country == "Germany"|| countrie.Country== "India" ||countrie.Country=="Italy"||countrie.Country == "Malaysia"|| countrie.Country=="United States of America"){
                card.innerHTML += `
                <div id="maxCountries"  class="col-6 col-md-4 p-4 border">
                <p class="countryName">${countrie.Country}</p>  
                <ul class="list">
                <li> New Confirmed : ${countrie.NewConfirmed} </li>
                <li> New Recovered : ${countrie.NewRecovered} </li>
                <li> New Deaths : ${countrie.NewDeaths} </li>
                <li> Total Confirmed : ${countrie.TotalConfirmed} </li>
                <li> Total Recovered : ${countrie.TotalRecovered} </li>
                <li> Totaml Deaths : ${countrie.TotalDeaths} </li>
                  </ul>           
              </div> 
                `
            }
           
        })
    tbody2.innerHTML += ` <tr>
    <td> ${data.Global.NewConfirmed}  </td>
    <td> ${data.Global.TotalConfirmed}  </td>
    <td> ${data.Global.NewDeaths}</td>
    <td> ${data.Global.NewConfirmed}  </td>
    <td> ${data.Global.NewRecovered}  </td>
    <td> ${data.Global.NewConfirmed}  </td>
    </tr>` 
    for(var i=0;i<data.Countries.length; i++){
            let theCountry = data.Countries[i].Country,
            NewConfirmed = data.Countries[i].NewConfirmed,
            NewDeaths = data.Countries[i].NewDeaths,
            NewRecovered = data.Countries[i].NewRecovered ;
        if( NewConfirmed > 5000 || NewDeaths >100 || NewRecovered >1000 ){
            tbody.innerHTML +=` <tr>
            <td> ${theCountry}  </td>
            <td> ${NewConfirmed}  </td>
            <td> ${NewDeaths}  </td>
            <td> ${NewRecovered}  </td>
            <td> ${data.Countries[i].TotalRecovered}  </td>
            <td> ${data.Countries[i].TotalDeaths}  </td>
            </tr>` 

            option.innerHTML += `<option> ${data.Countries[i].Country} </option>`
        }
        
    }
}
 async function selectedCountry(){
     await getapi() ;
     option.onchange = function myCountry(event){
         let ourCountry = event.target.selectedOptions[0].value
        console.log(ourCountry)
        // console.log(data )
        data.Countries.forEach(country => {
            if(country.Country == ourCountry) {
                // alert('it works')
                console.log( country)
                tbody.innerHTML = `
                <tr>
                <td>${country.Country} </td>
                <td>${country.NewConfirmed} </td>
                <td>${country.NewDeaths} </td>
                <td>${country.NewRecovered} </td>
                <td>${country.TotalRecovered} </td>
                <td>${country.TotalDeaths} </td>
                </tr>
                `
             } 
        });
   }
 }
 selectedCountry() ;


// myCountry() ;







