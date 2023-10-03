let mainElement = document.querySelector('main');

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let monthCounter = 8;
let yearCounter = 2023;
let currentDate = new Date(`${yearCounter}-${monthCounter}-1`);

function addMonth() {

  let monthElement = document.createElement("div");
  monthElement.classList.toggle("month");

  let titleMonthElement = document.createElement("h4");
  titleMonthElement.innerText = monthNames[monthCounter];

  monthElement.appendChild(titleMonthElement);

  let daysElement = document.createElement("div");
  daysElement.classList.toggle("days");

  const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"];

  // INSERTAR PRIMERA FILA: L ... D
  daysOfWeek.forEach(day => {
    let dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.innerText = day;
    daysElement.appendChild(dayElement);
  });

  let numDaysMonth = getDaysInMonth(2, 2024);

  for (let day = 1; day <= numDaysMonth; day++) {
    let dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.innerText = day;
    daysElement.appendChild(dayElement);
  }

  monthElement.appendChild(daysElement);

  mainElement.appendChild(monthElement);

}

function getDaysInMonth(month, year) {
  //El día 0 es el último día del anterior mes
  return new Date(year, month, 0).getDate();
}

let monthsOfCalendar = 9;
for (let index = 0; index <= monthsOfCalendar; index++) {
  addMonth();

}
