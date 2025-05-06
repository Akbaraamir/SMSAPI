const JOB_API_LINK="https://fuzzy-fortnight-q765wg44w67wfxjxw-5001.app.github.dev/student";

fetch(JOB_API_LINK).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#jobtable tbody");

    data.forEach(job=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${job.id}</td>
        <td>${job.name}</td>
        <td>${job.email}</td>
        <td>${job.address}</td>
        `;
        tbody.appendChild(row);
    })
}).catch(err=>{
    console.log(err.message);
});