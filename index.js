let myLeads = [];
const inputText = document.getElementById("input-text");
const inputBtn = document.getElementById("input-btn");
const pDecipher = document.getElementById("p-deciphered");
// const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// const tabBtn = document.getElementById("tab-btn");

// if (leadsFromLocalStorage) {
//   myLeads = leadsFromLocalStorage;
//   render(myLeads);
// }

// tabBtn.addEventListener("click", function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     myLeads.push(tabs[0].url);
//     localStorage.setItem("myLeads", JSON.stringify(myLeads));
//     render(myLeads);
//   });
// });

// function render(leads) {
//   let listItems = "";
//   for (let i = 0; i < leads.length; i++) {
//     listItems += `
//             <li>
//                 <a target='_blank' href='${leads[i]}'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `;
//   }
//   pDecipher.innerHTML = listItems;
// }

// deleteBtn.addEventListener("dblclick", function () {
//   localStorage.clear();
//   myLeads = [];
//   render(myLeads);
// });

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputText.value);
//   inputText.value = "";
//   localStorage.setItem("myLeads", JSON.stringify(myLeads));
//   render(myLeads);
// });

inputBtn.addEventListener("click", function () {
//   pDecipher.innerHTML = inputText.value;

//   var liify = "";
//   for (i = 0; i < inputText.value.length; i++){
//     if (inputText.value.charAt(i) == "l"){
//         liify += "L";
//     }
//     else if (inputText.value.charAt(i) == "I") {
//         liify += "i";
//     }
//     else{
//         liify += inputText.value.charAt(i);
//     }
//   }



//   pDecipher.innerHTML += liify;
//   pDecipher.innerHTML = pDecipher.innerHTML.replace(
//     "L",
//     '<span class="L-xxx" style="fontSize: 150%">L</span>'
//   );


    pDecipher.innerHTML = inputText.value;

    
    

});