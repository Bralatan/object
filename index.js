var city1 = {};
city1.name = "city_N";
city1.population = 10**7;
city1.getName = function() {
    return this.name;
}
city1.exportStr = function() {
    return "name = " + this.name + "\npopulation = " + this.population + "\n";
}
console.log(city1.exportStr())

var city2 = {
    "name": "city_M", "population": 10 ** 7,
    getName() {
        return this.name;
    },
    exportStr() {
        return "name = " + 
        this.name + "\npopulation = " +
        this.population + "\n";
    }
};
console.log(city2.exportStr())