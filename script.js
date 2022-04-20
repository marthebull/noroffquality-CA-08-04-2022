let myList;


fetch("http://marthebull.no/cms/wp-json/tribe/events/v1/events?per_page=99", {
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
        myList = (data.events)
        listEvents(myList)
        //console.log(allEvents);
        console.log("nå kan du aktivere filtrering");
    }
})
//console.log(listEvents);

let list = document.querySelector("div#hovedKalender");
let miniList = document.querySelector("div#miniKalender");

const listEvents = (sortedList) => {
    list.innerHTML = "";

    //console.log(sortedList);
    
    //laget en ny array for de objektene vi skal bruke i oppgaven
    let mappedList = sortedList.map(ev => ({title: ev.title, date: ev.start_date, description: ev.excerpt, tags: ev.tags }))
    //console.log(mappedList);


    //dette er hoved listen
    const hovedKalender = mappedList.slice(0, 10)
    
    hovedKalender.forEach(ev2 => {
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



const rolleSelector = document.querySelector("#filterRolle")
const periodeSelector = document.querySelector("#filterPeriode")
const kategoriSelector = document.querySelector("#filterKategori")
const studietypeSelector = document.querySelector("#filterStudietype")


let filterFunction = () => {
    console.log(myList);

    //rolle selector
    let filterRoller = [];
    filterRoller.push(rolleSelector.value);
    console.log(filterRoller);

    //Periode selector
        // let filterPeriode= [];
        // filterPeriode.push(periodeSelector.value)
        // console.log(filterPeriode);

    //kategori selector
    // let filterKategori = [];
    // filterKategori.push(kategoriSelector.value)
    // console.log(filterKategori);

    // //studietype selector
    // let filterStudietype = [];
    // filterStudietype.push(studietypeSelector.value)
    // console.log(filterStudietype);


}

rolleSelector.addEventListener("change", filterFunction)
kategoriSelector.addEventListener("change", filterFunction)
periodeSelector.addEventListener("change", filterFunction)
studietypeSelector.addEventListener("change", filterFunction)




