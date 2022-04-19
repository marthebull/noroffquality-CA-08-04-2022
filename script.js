fetch("http://marthebull.no/cms/wp-json/tribe/events/v1/events", {
	"method": "GET"
})
.then(response => {
	//console.log(response);
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
let miniList = document.querySelector("div#miniKalender");

const listEvents = (sortedList) => {
    list.innerHTML = "";

    //console.log(sortedList);
    
    //laget en ny array for de objektene vi skal bruke i oppgaven
    let mappedList = sortedList.map(ev => ({title: ev.title, date: ev.start_date, description: ev.excerpt, tags: ev.tags }))
    //console.log(mappedList);


    //dette er hoved listen
    
    mappedList.forEach(ev2 => {
        let newList = `
            <div class="event-card">
                <p>${ev2.date}</p>
                <p class="event-header"><strong>${ev2.title}</strong></p>
                <p>${ev2.description}</p>
            </div>`;
        list.innerHTML += newList;
    }) 

    // dette er Den lille kalender øverst på siden
    const miniKalender = mappedList.slice(0, 3)
    //console.log(miniKalender);

    miniKalender.forEach(ev3 => {
        let miniList1 = `
            <div class="event-card">
                <p>${ev3.date}</p>
                <p class="event-header"><strong>${ev3.title}</strong></p>
                <p>${ev3.description}</p>
            </div>`;
        miniList.innerHTML += miniList1;


    })
}
