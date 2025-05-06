const COUNT_API_LINK="https://fuzzy-fortnight-q765wg44w67wfxjxw-5001.app.github.dev/countries";

fetch(COUNT_API_LINK).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#emptable tbody");

    data.forEach(countries=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${}</td>
    
        `;
        tbody.appendChild(row);
    })
}).catch(err=>{
    console.log(err.message);
});