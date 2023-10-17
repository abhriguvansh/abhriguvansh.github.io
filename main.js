populateNames();

async function populateNames() {
  let names = [];
  for (let i = 0; i < 3; i++) {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const person = await response.json();
    console.log(person);
    names.push(person.first_name);
  }
  console.log(names);
  document.getElementById("name1").innerHTML = names[0];
  document.getElementById("name2").innerHTML = names[1];
  document.getElementById("name3").innerHTML = names[2];
  console.log(htmlNames);
}
