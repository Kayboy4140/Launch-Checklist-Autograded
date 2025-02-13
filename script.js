// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let userPilotName = document.querySelector("input[name=pilotName]").value;
        let userCoPilotName = document.querySelector("input[name=copilotName]").value;
        let userFuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let userCargoMass = document.querySelector("input[name=cargoMass]").value;


        if (userPilotName === "" || userCoPilotName === "" || userFuelLevel === "" || userCargoMass === ""){
            alert("All fields are required!");
        } else {
            formSubmission(document, list, userPilotName, userCoPilotName, userFuelLevel, userCargoMass);
        };
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetPicked = pickPlanet(listedPlanets);
        console.log(planetPicked);
        addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
    })
    
 });