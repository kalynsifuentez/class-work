var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.push('Canis Major');
console.log(constellations);

//How do you prevent having to use console.log on every line?
planets.pop('Venus')
console.log(planets)

var galaxy = constellations.concat(planets);
console.log(galaxy);

console.log(star.toUpperCase());

// Question: If there was more than one item in star, how would I ioslate polaris to be capitilized? .replace function