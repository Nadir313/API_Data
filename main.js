
const api = "https://api.covid19api.com/summary"
let option = document.querySelector("#option"),
tbody= document.querySelector("#tbody"),
tbody2 = document.querySelector("#tbody2"); 
var data = []; 

async function getapi(){
    const response = await fetch(api) ;
     data = await response.json() ;

    //  console.log(data.Global.TotalRecovered)
    // console.log(option)
    // console.log(data.Global
    // myCountry();

    tbody2.innerHTML += ` <tr>
    <td> ${data.Global.NewConfirmed}  </td>
    <td> ${data.Global.TotalConfirmed}  </td>
    <td> ${data.Global.NewDeaths}</td>
    <td> ${data.Global.NewConfirmed}  </td>
    <td> ${data.Global.NewRecovered}  </td>
    <td> ${data.Global.NewConfirmed}  </td>

    </tr>` 
    for(var i=0;i<data.Countries.length; i++){
            // console.log(data.Countries[0])

            let theCountry = data.Countries[i].Country,
            NewConfirmed = data.Countries[i].NewConfirmed,
            NewDeaths = data.Countries[i].NewDeaths,
            NewRecovered = data.Countries[i].NewRecovered ;
        if( NewConfirmed !=0 || NewDeaths !=0 || NewRecovered !=0 ){

            tbody.innerHTML +=` <tr>
            <td> ${theCountry}  </td>
            <td> ${NewConfirmed}  </td>
            <td> ${NewDeaths}  </td>
            <td> ${NewRecovered}  </td>
            <td> ${data.Countries[i].TotalRecovered}  </td>
            <td> ${data.Countries[i].TotalDeaths}  </td>
       
            </tr>` 
        }
        // console.log(data.Countries[i],i+1)
        option.innerHTML += `<option> ${data.Countries[i].Country} </option>`
    }
}
 async function selectedCountry(){
     await getapi() ;
     option.onchange = function myCountry(e){
         let ourCountry = e.target.selectedOptions[0].value
        console.log(ourCountry)
        // console.log(data )
        data.Countries.forEach(country => {
            if(country.Country == ourCountry) {
                alert('it works')
                console.log( country.Country)
                console.log(tbody)
            }
            
        });
   }
 }
//  selectedCountry() ;


// myCountry() ;

























//  const api = " https://api.covid19api.com/summary"

// async function nasa(){
//     const response = await fetch(api)
//     const data = await response.json()
//     console.log(data.Countries[8])
//     console.log(data.Countries[8].Country)
//     console.log(data.Countries[8].NewDeaths)
//     console.log(data.Countries[8].NewRecovered)
//     console.log(data.Countries[8].TotalConfirmed)
//     console.log(data.Countries[8].TotalDeaths)
//     console.log(data.Countries[8].NewConfirmed)
//     console.log(data.Countries[8].Date)


//     // console.log(data.Countries)
//     const data5 = data.Countries
//         console.log(data5.Country) 
        
//         console.log();  
//         const option = document.getElementById("data9")
//         const print1 = data5.map( country => `<option> ${data5}</option> `)
//         // option.innerHTML += 
     
// }

// nasa() ; 












