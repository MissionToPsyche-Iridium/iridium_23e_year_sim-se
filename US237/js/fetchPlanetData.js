/* 
* fetchPlanetData.js
* 
* This fetchPlanetData.js is called when we need to provide planets information to the users. 
* 
* Class:      SER 401
* Team:       35
* Project:    NASA Psyche Mission: Year on Psyche Simulation
* Authors:    Armando Arratia, Dan McNeil, Jenny Potocki, Josh Anselm, Tyler Brown
* Date:       10/25/24
* Revision:   1.0
*
* Functions/Pages:
*    fetchAllData() -    This function gets all of the avaiable data in the planets.json. 
*
*    fetchPlanetInfo() - This function finds the matching planet name and pulls the planets information. 
*
*/

/*
========================================================================================================
File Start
========================================================================================================
*/

/*****************************************************
 * getAllData()
 * 
 * This function gets all of the avaiable data in the planets.json. 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  array of planet objects
 * 
 * changes: 
 *  If successful, the planets data will be loaded and sent as an array. 
 *  If error, the error is printed to the console. 
 * 
 */
export async function getAllData() {
    // try block to check for errors loading data
    try{
        const response = await fetch('/json/planets.json');
        const planetData = await response.json();
        return planetData;
    // if error, log error to console and return empty array
    } catch (error) {
        console.error('There is an error fetching the planet data from planets.json:', error);
        return [];
    }
}

/*****************************************************
 * getPlanetInfo()
 * 
 * This function returns one planets set of data
 * 
 * arguments:
 *  planets - array of planet objects 
 *  planetName - the name of the planet you need 
 * 
 * returns:
 *  array of planet objects
 * 
 * changes: 
 *  A single planet object will be returned 
 * 
 */
export function getPlanetInfo(planets, planetName) {
    return planets.find(planet => planet.name === planetName); 
}
