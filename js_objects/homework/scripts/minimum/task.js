// const car = {
//     manufacturer: 'Nissan',
//     model: 'GT-R',
//     yearOfRelease: 2008,
//     averageSpeed: 315, // in km/h
//     tankVolume: 315, // in liters
//     averageFuelConsumption: 12, // in liters per 100 km
//     drivers: ['Smokey Nagata'],
  
//     addDriver(driverName) {
//       this.drivers.push(driverName);
//     },
  
//     checkDriver(driverName) {
//       return this.drivers.includes(driverName);
//     },
  
//     calculateTrip(distance) {
//       const travelTime = distance / this.averageSpeed;
//       const breaks = Math.floor(travelTime / 4);
//       const totalTravelTime = travelTime + breaks;
  
//       const fuelRequired = (distance / 100) * this.averageFuelConsumption;
  
//       return {
//         totalTime: totalTravelTime.toFixed(2),
//         fuelRequired: fuelRequired.toFixed(2),
//       };
//     },
//   };
  
//   console.log(car);
  
//   car.addDriver('John Doe');
//   console.log(`Is Smokey Nagata a driver? ${car.checkDriver('Smokey Nagata')}`);
//   console.log(`Is John Doe a driver? ${car.checkDriver('John Doe')}`);
  
//   const distanceToTravel = 500; // in km
//   const tripDetails = car.calculateTrip(distanceToTravel);
//   console.log(`Time required to travel ${distanceToTravel} km: ${tripDetails.totalTime} hours`);
//   console.log(`Fuel required for the trip: ${tripDetails.fuelRequired} liters`);