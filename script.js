// let userInput = document.getElementById("date");
// userInput.max = new Date().toISOString().split("T")[0];

// function calculateAge() {
//   let birthDate = new Date(userInput.value);

//   let d1 = birthDate.getDate();
//   let m1 = birthDate.getMonth() + 1;
//   let y1 = birthDate.getFullYear();

//   let today = new Date();

//   let d2 = today.getDate();
//   let m2 = today.getMonth() + 1;
//   let y2 = today.getFullYear();

//   //   let age = y2 - y1;

//   let d3, m3, y3;
//   y3 = y2 - y1;

//   if (m2 >= m1) {
//     m3 = 12 + m2 - m1;
//   } else {
//     y3--;
//     m3 = 12 + m2 - m1;
//   }

//   if (d2 >= d1) {
//     d3 = d2 - d1;
//   } else {
//     m3--;
//     d3 = getDaysInMonth(y1, m1) + d2 - d1;
//   }

//   if (m3 < 0) {
//     m3 = 11;
//     y3--;
//   }

//   console.log("Age: " + y3 + " years " + m3 + " months " + d3 + " days");
// }

// function getDaysInMonth(year, month) {
//   return new Date(year, month, 0).getDate();
// }

let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInput.value);
  let today = new Date();

  let ageInMilliseconds = today - birthDate;

  let years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  let months = Math.floor(
    (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  let days = Math.floor(
    (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  console.log(`Age: ${years} years ${months} months ${days} days`);
}

userInput.addEventListener("change", calculateAge);
