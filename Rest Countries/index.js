"use strict"
const options = document.querySelectorAll('.option')
const containerCountries = document.querySelector('.container-countries .row')
const searchbar = document.querySelector('input')
let data3;
const getData = async () => {
    const data1 = await fetch('https://restcountries.com/v3.1/all')
    const data2 = await data1.json()
    data3 = [...data2]
    options.forEach(option => {
        option.addEventListener('click',() => {
            // [...data2].forEach(el => {
            //     if (el.region == option.textContent) {
            //         console.log(el);
            //     }
            // })
        const interna = new Intl.NumberFormat('en-US')
           
            const filteredByType = [...data2].filter(cntry => {
                if (cntry.region == option.textContent) {
                    return cntry
                }
            })
            containerCountries.innerHTML = ''
            filteredByType.forEach(element => {

                const html = ` <div class="country col-lg-3 px-0 mx-2 my-2">
                <div class="country_image">
                    <img src="${element.flags.png}" class="img-fluid" alt="" >
                </div> 
                 <div class="country_information">
                    <div class="country_name fw-bold text-white">${element.name.common}</div>
                    <div class="country_population"> <span class="country_bold">Population : </span>${interna.format(element.population)}</div>
                    <div class="country_region"><span class="country_bold">Region : </span>${element.region}</div>
                    <div class="country_capital"><span class="country_bold">Capital : </span>${element.capital}</div>
                 </div>
            </div>`
                containerCountries.insertAdjacentHTML('afterbegin',html)
            })
        })
    })
    data2.forEach(element => {
        const interna = new Intl.NumberFormat('en-US')

    
        const html = ` <div class="country col-lg-3 px-0 mx-2 my-2">
        <div class="country_image">
            <img src="${element.flags.png}" class="img-fluid" alt="" >
        </div> 
         <div class="country_information">
            <div class="country_name fw-bold text-white">${element.name.common}</div>
            <div class="country_population"> <span class="country_bold">Population : </span>${interna.format(element.population)}</div>
            <div class="country_region"><span class="country_bold">Region : </span>${element.region}</div>
            <div class="country_capital"><span class="country_bold">Capital : </span>${element.capital}</div>
         </div>
    </div>`
        containerCountries.insertAdjacentHTML('afterbegin',html)
    })
}
getData()
searchbar.addEventListener('input',(e) => {
    e.preventDefault()
        const filteredArr = [...data3].filter((country) => {
            if ((country.name.common.toLowerCase()).includes(e.target.value.toLowerCase())) {
                return country
            }
        })

        containerCountries.innerHTML = ''
        
        const interna = new Intl.NumberFormat('en-US')
    filteredArr.forEach(country => {
        const html = ` <div class="country col-lg-3 px-0 mx-2 my-2">
        <div class="country_image">
            <img src="${country.flags.png}" class="img-fluid" alt="" >
        </div> 
         <div class="country_information">
            <div class="country_name fw-bold text-white">${country.name.common}</div>
            <div class="country_population"> <span class="country_bold">Population : </span>${interna.format(country.population)}</div>
            <div class="country_region"><span class="country_bold">Region : </span>${country.region}</div>
            <div class="country_capital"><span class="country_bold">Capital : </span>${country.capital}</div>
         </div>
    </div>`
        containerCountries.insertAdjacentHTML('afterbegin',html)
    })
    }
)
const optionsContainer = document.querySelector('.options_container')
const icon = document.querySelector('.filter_type')
const dropdown = document.querySelector('.dropdown')
icon.addEventListener('click',() => {
optionsContainer.classList.toggle('show')
dropdown.classList.toggle('shrink')
})



