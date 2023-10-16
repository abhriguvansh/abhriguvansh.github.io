const button = document.getElementById("submitButton");

console.log(button);

function submit() {
  const subject = document.getElementById("exampleFormControlInput1").value;
  const body = document.getElementById("exampleFormControlTextarea1").value;
  window.open(
    `mailto:business@websitesondemandinc.com?subject=${subject}&body=${body}`
  );
}
