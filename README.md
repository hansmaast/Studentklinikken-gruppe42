# Studentklinikken

Dette er repository for eksamen i grensesnittdesign. 

I dette dokumentet får du en kort beskrivelse av hvordan du kan teste løsningn vår lokalt på din maskin. 

For å komme inn som en testbruker klikker du på logg inn. Her trenger du ikke noe brukernavn eller passord, 
i og med at dette kun er en klikkbar prototype. Trykker du på "fortsett uten bruker" får du ikke tilgang til
full funksjonalitet, men du kan lese om de forskjellige behandlingstilbudene og booke en time. 

Du kan også sjekke ut vår løsning for brukerer via denne linken:  
#### https://studentklinikken.surge.sh/

or å komme inn på vår ansattside for desktop er du nødt til å gjøre dette lokalt.
Følg veiledingen under, og skriv inn http://localhost:xxxx/ansatt i adressefeltet på nettleseren din.

## Oppsett

Sørg for at du har Node.js installer på din datamaskin.

Kjør følgende kommando i mappen hvor prosjektet ligger for å installere dependencies:
```
npm install
```

Kjør så følgende kommando for å starte opp en lokal server:
```
npm run serve
```

Trykk så på linken ```http://localhost:....```

