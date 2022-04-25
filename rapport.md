Netlify: 
https://noroffqlty.netlify.app/

API: 
https://marthebull.no/cms/wp-json/tribe/events/v1/events?per_page=99"




- Felles Rapport:

Vi begynte med å laste ned en plugin som heter "Event Calender" i wordpress for å legge inn Api-et vi ønsket å bruke.
Valget gikk for denne pluginen siden den gjorde det enkelt for oss å få ut den informasjonen vi ønsket.
Deretter laget vi en html fil med alle statiske elementer og tomme div og p elementer, som vi fylte ut med informasjon fra api-tilkallet. Etter det fetchet vi inn api fra marthebull.no/cms og sjekket at vi fikk det inn i divene som var ønsket, dette gikk ganske greit. 

Det var litt vanskeligere å få til filtreringen av kalenderelementene. Vi prøvde mye forskjellig og stod fast flere ganger og slet litt med å forstå logikken for hvordan ting funket. Heldigvis fikk vi god hjelp underveis og fikk det til etterhvert. 


Deretter stylet vi siden med css, hvor vi ikke har lagt så mye innsats i header og footer da vi ikke så det som en viktig del av oppgaven. Vi har gjort noen små endringer fra design til implimentering:
-Forkortet ned rollelisten
-Gjort "Periode" om til "Semester", så nå filtreres det på høst og vår da dette ga mer mening og var litt enklere å få til.

Vi har hatt litt problemer med visning av nettsiden på mobil, da vi ikke får inn dato for det viset NaN og undefined. Default pilene på "details" vil ikke forsvinne på mobil, slik som de gjør på desktop (vi har lagt inn egne piler med font awesome). Ved visning av view-port som mobil på desktop fungerer dette som det skal. Vi har prøvd å designe "select" elementene så godt som mulig, men dette overstyres av noen nettlesere. Vi ville også gjerne implimentert resten av nettsiden, men grunnet omfanget av årshjulet ble det med bare årshjul siden. Koden validerer på html og css, dette har vi testet. Det kommer noen warnings på css, dette er på grunn av "details" elementet (akkurat det samme som skjedde på Marthe sin Rainydays oppgave).

Sett tilbake på hele oppgaven i en helhet så skulle det ønsket av vi hadde brukt mer tid på den tekniske biten fremfor design delen, slik at det var mer likt fordelt. Vi føler at Interaction Design var noe gjentaggende fra design 1 som vi hadde i høst.


- Sander:
Det å jobbe i gruppe var ganske nytt og egentlig litt kjekt. føler vi har hatt god kommunikasjon og vært enig om det meste og ikke hatte noe særlig dårlig stemmning. de fleste utfordringer som vi kom over enten fikset vi eller fant nye og "lettere" løsninger. oppgaven syns jeg var ganske mye mer vanskelig enn de forrige innleveringene vi har hatt. og min frustrasjon kunne bygge seg av ting som filtrering. men med hjelp av Lasse så begynne jeg å forstå det bedre og skjønne mer hvordan man skal gå for å finne ut av ting vi ønsker å vise på nettsiden. console.log er visst fasiten for alt har jeg skjønt ;P.


- Marthe:
Denne oppgaven har vært en god del mer utfordrende enn tidligere. Men jeg er fornøyd med resultatet og at vi fikk det til til slutt. Samarbeidet har vært bra, vi har hatt god kommunikasjon gjennom hele prosjektet og vært flinke på å fordele arbeidet. Vi har stort sett jobbet sammen om alt. Vi har også lært oss litt mer om hvordan jobbe med samme fil/pushe og pulle fra github osv, det syntes jeg egentlig fungerte greit (blir nok mer dreven på dette også etterhvert). Jeg tror jeg hadde slitt om jeg skulle gjort denne oppgaven helt på egenhånd nå, så det har vært veldig fint å ha en annen å dele problemene med/diskutere med. Det er ingen hemmelighet at jeg syntes javascript er vanskelig, og jeg har prøvd/prøver/skal prøve mer å forstå meg på logikken i det. 

Jeg tror vi har lært mye av hverandre gjennom hele CMS/interaksjons design kurset. Vi har hele veien hatt en god tone og klart å samarbeide og fordele arbeid, dette syntes jeg er veldig viktig så jeg er glad for at det har gått så fint. 


Takk for oss!
