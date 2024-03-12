const btnEl = document.getElementById("btn");

const ageCalculate = document.getElementById("birthday");

const result = document.getElementById("message");


function calculateAge() {
  //console.log("clicked");

  const birthDayValue = ageCalculate.value;
  if (birthDayValue === "") {
    alert("enter your birthday");
  }
  else{
    const age = getAge(birthDayValue);
    result.innerText = `your age is ${age} ${age > 1 ? "years" : "year"} old.`;
  }
}

function getAge(birthDayValue) {
  const currentDate = new Date();
  const birthDayDate =new Date(birthDayValue);
  let age = currentDate.getFullYear() - birthDayDate.getFullYear(); 
  const month = currentDate.getMonth() - birthDayDate.getMonth(); 

  if (month < 0 || (month === 0 && currentDate.getDate() < birthDayDate.getMonth())) {
    age --;
  }
 return age;
}

btnEl.addEventListener("click",calculateAge);