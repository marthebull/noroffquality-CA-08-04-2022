fetch("http://marthebull.no/cms/wp-json/tribe/events/v1/events", {
	"method": "GET"
})
.then(response => {
	console.log(response);
    return response.json();
})
//sortert alt etter nærmeste dato.
.then(data => {
    if (data) {
        //console.log(data.events)
        data.events.sort((a,b) => {
            return new Date(a.start_date) - new Date(b.start_date)
        })
        listEvents(data.events)

    }
})

let list = document.querySelector("div#hovedKalender");

const listEvents = (events) => {
    list.innerHTML = "";


    events.forEach(ev => {
        console.log(ev);
    })

    // for(let ev of events) {
    //     console.log(ev);
    // }
    
    //laget en ny array for de objektene vi skal bruke i oppgaven
    let newArray = events.map(ev => ({title: ev.title, date: ev.start_date, description: ev.excerpt, tags: ev.tags }))
    console.log(newArray);

    newArray.forEach(ev2 => {
        let newList = `
            <div class="event-card">
                <p class="event-header"><strong>${ev2.title}</strong></p>
                <p>${ev2.description}</p>
            </div>`;
        list.innerHTML += newList;
    }) 
}


