let userForm=document.getElementById("user-form");


const retreiveEntries= () =>{
    let entries=localStorage.getItem("user-entries");
    if(entries){
        entries=JSON.parse(entries);
    }else{
        entries=[];
    }
    return entries;
}
let userEntries=retreiveEntries();

const displayEntries= () =>{
    const entries=retreiveEntries();

    const tableEntries = entries.map((entry)=>{
        const namecell=`<td>${entry.name}</td>`
        const emailcell=`<td>${entry.email}</td> ` 
        const passwordcell=`<td>${entry.password}</td>`
        const dobcell=`<td>${entry.dob}</td>`
        const termscell=`<td>${entry.terms}</td>`

        const row=`<tr>${namecell} ${emailcell} ${passwordcell} ${dobcell} ${termscell}</tr>`
        return row;
    }).join("\n");

    const table=`<table><tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Dob</th>
        <th>Accepted terms?</th>
    </tr>${tableEntries}</table>`

    let details=document.getElementById("user-entries");
    details.innerHTML=table;

}

const saveUserForm=(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const terms=document.getElementById("terms").checked;

    const entry={
        name,
        email,
        password,
        dob,
        terms
    };
    userEntries.push(entry);

    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries()
}
userForm.addEventListener('submit',saveUserForm)
displayEntries();

// let clearButton=document.getElementById("clear-button");

// clearButton.addEventListener('click',()=>{
//     localStorage.clear();
//     displayEntries();
// })


window.onload = function() {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    //Add a zero if one Digit (eg: 05,09)
    if (dd < 10) {
      dd = "0" + dd;
    }

    //Add a zero if one Digit (eg: 05,09)
    if (mm < 10) {
      mm = "0" + mm;
    }

    minYear = yyyy - 55; //Calculate Minimun Age (<80)
    maxYear = yyyy - 18; //Calculate Maximum Age (>18)

    var min = minYear + "-" + mm + "-" + dd;
    var max = maxYear + "-" + mm + "-" + dd;

    document.getElementById("dob").setAttribute("min", min);
    document.getElementById("dob").setAttribute("max", max);
  };





// const email = document.getElementById("email");
// email.addEventListener("input", function () {
//  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//  if (!emailPattern.test(email.value)) {
//  email.setCustomValidity("Please enter a valid email address.");
//  } else {
//  email.setCustomValidity("");
//  }
// });

//     email.addEventListener("input", function (event) {
//     if (email.validity.typeMismatch) {
//     email.setCustomValidity("This is not a valid email address!");
//     email.reportValidity();
//     } else {
//     email.setCustomValidity("");
//   }
// });
    

