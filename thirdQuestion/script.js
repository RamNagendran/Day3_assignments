//  fetch rest countries API using XMLHttpRequest method


const response = new XMLHttpRequest();

response.open('GET', 'https://restcountries.com/v3.1/all')
response.send();

response.onload = () => {
    const result = JSON.parse(response.responseText)
    if (result && result.length > 0) {
        for (let i of result) {
            let consoleDisplay = {
                "Country Name": i.name.common,
                "Region": i.region,
                "Sub Region": i.subregion,
                "Population": `${i.population} People`
            }
            console.log(consoleDisplay)
            const mainContainer = document.getElementById('main')
            const newDivElement = document.createElement('div')
            const countrydiv = document.createElement('div')
            const regionDiv = document.createElement('div')
            const subRegionDiv = document.createElement('div')
            const populationDiv = document.createElement('div')
            const flagDiv = document.createElement('div')
            const fifaDiv = document.createElement('div')
            newDivElement.style.height = "250px"
            newDivElement.style.width = "200px"
            newDivElement.style.border = "1px solid lightgray"
            newDivElement.style.borderRadius = "10px"
            newDivElement.style.margin = "10px"
            newDivElement.style.display = "flex"
            newDivElement.style.flexDirection = "column"
            newDivElement.style.padding = "20px"
            newDivElement.style.boxShadow = "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            countrydiv.style.fontWeight = 600
            countrydiv.style.margin = "10px 0px"
            regionDiv.style.margin = "10px 0px"
            populationDiv.style.margin = "10px 0px"
            flagDiv.style.margin = "10px 0px"
            countrydiv.textContent = `Country Name: ${i?.name?.common}`
            regionDiv.textContent = `Region: ${i?.region}`
            subRegionDiv.textContent = `Sub Region: ${i?.subregion}`
            populationDiv.textContent = `Population: ${i?.population} People`
            flagDiv.textContent = `Country Flag: ${i?.flag}`
            fifaDiv.textContent =  `Country Fifa: ${i?.fifa}`
            newDivElement.appendChild(countrydiv)
            newDivElement.appendChild(regionDiv)
            newDivElement.appendChild(subRegionDiv)
            newDivElement.appendChild(populationDiv)
            newDivElement.appendChild(flagDiv)
            newDivElement.appendChild(fifaDiv)
            mainContainer.appendChild(newDivElement)
        }
    }
}

