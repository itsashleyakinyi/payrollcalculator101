let fullform = document.getElementById("body");
let table = document.getElementById("content").getElementsByTagName("tbody")[0];

fullform.addEventListener("submit", function (e) {
  e.preventDefault();
  let first_name = document.getElementById("fn").value;
  let second_name = document.getElementById("sn").value;
  let email_address = document.getElementById("emailaddress").value;
  //create new row
  const newrow = table.insertRow();
  //insert cells for each piece of data
  const firstnamecell = newrow.insertCell(0);
  const secondnamecell = newrow.insertCell(1);
  const emailaddresscell = newrow.insertCell(2);
  //add form data to created cells
  firstnamecell.textContent=first_name;
  secondnamecell.textContent=second_name;
  emailaddresscell.textContent=email_address;
  //reset form fields to default or empty
  let button2=document.getElementById("reset");
  button2.onreset( )
});
