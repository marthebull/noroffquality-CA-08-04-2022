let myList;


fetch("https://marthebull.no/cms/wp-json/tribe/events/v1/events?per_page=99", {
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
        listEvents1(myList)
        //console.log(allEvents);
        console.log("nå kan du aktivere filtrering");
    }
})
//console.log(listEvents);

let list = document.querySelector("div#hovedKalender");
let miniList = document.querySelector("div#miniKalender");
const months = ["JAN", "FEB", "MAR", "APR", "MAI", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DES"];

let listEvents = (sortedList) => {
    list.innerHTML = "";
    console.log(sortedList);
    //laget en ny array for de objektene vi skal bruke i oppgaven
    let mappedList = sortedList.map(ev => ({title: ev.title, date: ev.start_date, description: ev.excerpt, tags: ev.tags }))
    //console.log(mappedList);

    //dette er hovedlisten
    const hovedKalender = mappedList.slice(0, 10)
    //console.log(hovedKalender);
    hovedKalender.forEach(ev => {
        let eventDate = new Date(ev.date);
        //console.log(eventDate);
        let eventMonth = eventDate.getMonth();
        //console.log(months[eventMonth]);
        let newList =`
            <div class="event-card">
                <div class="date-cont">
                    <p class="day">${eventDate.getDate()}</p>
                    <p class="month">${months[eventMonth]}</p>
                </div>
                <details>
                    <summary class="event-header">
                    <strong>${ev.title}<i class="fas fa-chevron-down"></i></strong>
                    </summary>
                    <p>${ev.description}</p>
                </details>
            </div>`;
        list.innerHTML += newList;
    }) 
}



// lister ut minikalenderen på siden, sortert og mappet

let listEvents1 = (sortedList1) => {
    miniList.innerHTML = "";
    //console.log(sortedList1);
    //laget en ny array for de objektene vi skal bruke i oppgaven
    let mappedList1 = sortedList1.map(ev => ({title: ev.title, date: ev.start_date, description: ev.excerpt, tags: ev.tags }))
    //console.log(mappedList);
    const miniKalender = mappedList1.slice(0, 3)
    //console.log(miniKalender);
    miniKalender.forEach(ev => {
        //console.log(ev.date);
        let eventDate = new Date(ev.date);
        //console.log(eventDate);
        let eventMonth = eventDate.getMonth();
        //console.log(months[eventMonth]);
        let miniList1 = `
            <div class="event-card" >
                <div class="date-cont">
                    <p class="day">${eventDate.getDate()}</p>
                    <p class="month">${months[eventMonth]}</p>
                </div>
                <p class="event-header"><strong>${ev.title}</strong></p>
                
            </div>`;
        miniList.innerHTML += miniList1;
    })

     // dette er Den lille kalender øverst på siden
     //console.log(miniKalender);
}

const loadBtn = document.querySelector("#loadBtn")

let loadFunction = (gogo) => {
    console.log("heihei");
    list.innerHTML = "";

    fullKalender = myList;
    //console.log(fullKalender);
    let mappedList2 = fullKalender.map(ev => ({title: ev.title, date: ev.start_date, description: ev.excerpt, tags: ev.tags }))
    //console.log(mappedList2);

    mappedList2.forEach(ev => {
        let eventDate = new Date(ev.date);
        //console.log(eventDate);
        let eventMonth = eventDate.getMonth();
        //console.log(months[eventMonth]);
        let newList =`
            <div class="event-card">
                <div class="date-cont">
                    <p class="day">${eventDate.getDate()}</p>
                    <p class="month">${months[eventMonth]}</p>
                </div>
                <details>
                    <summary class="event-header">
                    <strong>${ev.title}<i class="fas fa-chevron-down"></i></strong>
                    </summary>
                    <p>${ev.description}</p>
                </details>
            </div>`;
        list.innerHTML += newList;
    })

}
loadBtn.addEventListener("click", loadFunction)


const filter = document.querySelector("#filter-icon")

function myFunction() {
    console.log("heihei");
    var x = document.getElementById("filter");
    if (x.style.display === "block") {
        x.style.display = "none";

    } else {
        x.style.display = "block";
        //filter.style.display = "none";
    }
}

filter.addEventListener("click", myFunction)

const rolleSelector = document.querySelector("#filterRolle")
const semesterSelector = document.querySelector("#filterSemester")
const kategoriSelector = document.querySelector("#filterKategori")
const studietypeSelector = document.querySelector("#filterStudietype")


let filterFunction = () => {
    //console.log(myList);

    //rolle selector
    let filterRoller = [];
    let filteredList = [];
    filterRoller.push(rolleSelector.value);
    console.log(filterRoller);

    if (filterRoller == "all") {
        filteredList = myList.slice();// Make a copy to "protect" the original list
    } else {
        console.log(myList);
        //Filter ot those animals with type equal to the type chosen
        filteredList = myList.filter((item)=>{
            //console.log("This is the item: "+item.tags);
            console.log(item.tags);
            console.log(item.start_date_details);
            //console.log("This is the filter: "+filterRoller);
            for (let tag of item.tags) {
                //console.log(tag.id);
                if (tag.id == filterRoller) {
                    return true;
                }
            }
            return false;

          });
    } 
    //console.log(filteredList);

    //Periode selector
        // let filterPeriode= [];
        // filterPeriode.push(periodeSelector.value)
        // console.log(filterPeriode);


        let filterSemester = [];
        filterSemester.push(semesterSelector.value);
        console.log(filterSemester);
    
        if (filterSemester != "all") {
            console.log(filteredList);
            filteredList = filteredList.filter((item) => {
                //console.log("This is the item: "+item.tags);
                //console.log(item.tags);
                //console.log("This is the filter: "+filterKategori);
                for (let tag of item.tags) {
                    if (tag.id == filterSemester) {
                        return true;
                    }
                }
                return false;
            });
        }
        console.log(filteredList);




    //kategori selector
    let filterKategori = [];
    filterKategori.push(kategoriSelector.value);
    console.log(filterKategori);

    if (filterKategori != "all") {
        console.log(filteredList);
        filteredList = filteredList.filter((item) => {
            //console.log("This is the item: "+item.tags);
            //console.log(item.tags);
            //console.log("This is the filter: "+filterKategori);
            for (let tag of item.tags) {
                if (tag.id == filterKategori) {
                    return true;
                }
            }
            return false;
        });
    }
    console.log(filteredList);

    // //studietype selector
    // let filterStudietype = [];
    // filterStudietype.push(studietypeSelector.value)
    // console.log(filterStudietype);

    let filterStudietype = [];
    filterStudietype.push(studietypeSelector.value);
    console.log(filterStudietype);

    if (filterStudietype != "all") {
        console.log(filteredList);
        filteredList = filteredList.filter((item) => {
            //console.log("This is the item: "+item.tags);
            //console.log(item.tags);
            //console.log("This is the filter: "+filterStudietype);
            for (let tag of item.tags) {
                if (tag.id == filterStudietype) {
                    return true;
                }
            }
            return false;
        });
    }
    console.log(filteredList);

    listEvents(filteredList)
}   
rolleSelector.addEventListener("change", filterFunction)
kategoriSelector.addEventListener("change", filterFunction)
semesterSelector.addEventListener("change", filterFunction)
studietypeSelector.addEventListener("change", filterFunction)




