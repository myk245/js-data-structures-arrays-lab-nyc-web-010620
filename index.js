let drivers = ["Milo", "Otis", "Garfield"]

// appends a driver to the end of the drivers array
function destructivelyAppendDriver(name) {
   drivers.push(name);
}

// prepends a driver to the beginning of the drivers array
function destructivelyPrependDriver(name) {
   drivers.unshift(name)
}

// removes the last driver from the drivers array
function destructivelyRemoveLastDriver() {
   drivers.pop()
}

// removes the First driver from the drivers array
function destructivelyRemoveFirstDriver() {
   drivers.shift(); 
}

// appends a driver to the drivers array and returns a new array, 
// leaving the drivers array unchanged
function appendDriver(name) {
   let newDrivers = [...drivers, name]; 
   return newDrivers; 
}

// prepends a driver to the drivers array and returns a new array, 
// leaving the drivers array unchanged
function prependDriver(name) {
   let newDrivers = [name, ...drivers]; 
   return newDrivers; 
}

// removes the last driver in the drivers array and returns a new array, 
// leaving the drivers array unchanged
function removeLastDriver() {
   let newDrivers = drivers.slice(0, -1); 
   return newDrivers; 
}

// removes the first driver from the drivers array and returns a new array, 
// leaving the drivers array unchanged
function removeFirstDriver() {
   let newDrivers = drivers.slice(1); 
   return newDrivers; 
}
