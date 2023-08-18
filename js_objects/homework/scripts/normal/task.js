// const time = {
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
  
//     formatNumber(number) {
//       return number < 10 ? `0${number}` : `${number}`;
//     },
  
//     displayTime() {
//       const formattedHours = this.formatNumber(this.hours);
//       const formattedMinutes = this.formatNumber(this.minutes);
//       const formattedSeconds = this.formatNumber(this.seconds);
//       console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
//     },
  
//     addSeconds(seconds) {
//       const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
//       this.hours = Math.floor(totalSeconds / 3600);
//       this.minutes = Math.floor((totalSeconds % 3600) / 60);
//       this.seconds = totalSeconds % 60;
//     },
  
//     addMinutes(minutes) {
//       this.addSeconds(minutes * 60);
//     },
  
//     addHours(hours) {
//       this.addSeconds(hours * 3600);
//     },
//   };
  
//   time.displayTime(); // Виведе "00:00:00"
//   time.addSeconds(150);
//   time.displayTime(); // Виведе "00:02:30"
//   time.addMinutes(75);
//   time.displayTime(); // Виведе "01:17:30"
//   time.addHours(2);
//   time.displayTime(); // Виведе "03:17:30"