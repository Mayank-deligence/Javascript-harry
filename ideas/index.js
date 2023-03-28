// // nesting
// const panels = [];
// function innerInput(index){
//     const name1 = document.getElementById("name1").value;
//     panels[index].subsection.push(name1);
//     displayInput();
// }
// function displayInput() {
//     const name = document.getElementById("name").value;
//     panels.push({
//         header: name,
//         subsection: [],
//         // body: "Content for " + name,
//     });
//     const output = document.getElementById("output");
//     output.innerHTML = panels.map((panel, index) => `
//     <div style="display:flex">
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
//         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${index}">
//           ${panel.header}
//         </button>
//       </h2>
//       <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-heading${index}">
//       <div class="accordion-body">
//       <div class="Add">
//       <label for="name1"></label>
//       <input type="text" id="name1"><br>

//       <button onclick="innerInput(${index}) ">Add</button>
//       </div>     
//        </div>
//        </div>
//        </div>
//     <div >
//     <svg xmlns="http://www.w3.org/2000/svg" width="45" height="32"  fill="currentColor" class="bi bi-plus add" viewBox="0 0 16 16">
//     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
//     </svg> 
//     <svg xmlns="http://www.w3.org/2000/svg" width="45" height="32" fill="currentColor" class="bi bi-trash dustbin" viewBox="0 0 16 16">
//     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//     </svg>
//     </div>
//     </div>
//     `).join("");
//     // const name1 = document.getElementById("name1").value;
//     // panels.subsection.push(name1)
//     document.getElementById("name").value = "";
//     document.getElementById("name1").value = "";
// }

// // nesting
// const panels = [];
// const subsection = [];
// const addsubcat = () => {
//   const name1 = document.getElementById("name1").value;
//   subsection.push({ name: name1 });
//   const subCat = document.getElementById("subCat")
//   subCat.innerHTML = subsection.map((subcat, index) => `<div>
//   <div class="accordion-item">
//   <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
//   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${index}">
//   ${subcat.name}
//   </button>
//   </h2>
//   <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-heading${index}">
//   <div class="accordion-body">
//   <div class="Add">
//   <label for="name1"></label>
//   <input type="text" id="name1"><br>
//   <button onclick="addsubcat()">Add</button>
//   </div>
//   <div id="subCat">
//   </div>
//   </div>
//   </div>
//   </div>
//    </div>`).join("");
//   document.getElementById("name1").value = "";
//   // console.log("success")
//   //   console.log(subsection)
//   //   subsection.map((subcat,index)=>console.log(subsection[index]))
// };
// function displayInput() {
//   const name = document.getElementById("name").value;
//   panels.push({
//     header: name
//   });
//   const output = document.getElementById("output");
//   output.innerHTML = panels
//     .map((panel, index) => `
// <div class="accordion-item">
// <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
// <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${index}">
// ${panel.header}
// </button>
// </h2>
// <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-heading${index}">
// <div class="accordion-body">
// <div class="Add">
// <label for="name1"></label>
// <input type="text" id="name1"><br>
// <button onclick="addsubcat()">Add</button>
// </div>
// <div id="subCat">
// </div>
// </div>
// </div>
// </div>
// `
//     ).join("");
//   document.getElementById("name").value = "";
// }

const panels = [];

  function addSubcategory(panelIndex,namePara) {
  console.log("in subcat-------")
  const name1 = document.getElementById(`${namePara}-${panelIndex}`).value;
  console.log("name1111---", name1);
  if (!panels[panelIndex].subcategories) {
    panels[panelIndex].subcategories = [];
  }
  panels[panelIndex].subcategories.push({ name: name1 });

  const subCat = document.getElementById(`subCat-${namePara}-${panelIndex}`)
  console.log("subcat---", subCat);

  subCat.innerHTML = panels[panelIndex].subcategories.map((subcat, index) => {
    // var catFunc1=addSubcategory.bind(subcat,panelIndex,name1);
    return `
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-heading-${panelIndex}-${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}-${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}-${index}">
          ${subcat.name}
        </button>
      </h2>
      <div id="panelsStayOpen-collapse-${panelIndex}-${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${panelIndex}-${index}">
        <div class="accordion-body">
          <div class="Add">
            <label for="name1"></label>
            <input type="text" id="${name1}-${panelIndex}">
                  <button onclick="addSubcategory(${panelIndex}+','+${name1})">Add</button>
          </div>
          <div id="subCat-${panelIndex}-${index}">
          </div>
        </div>
      </div>
    </div>
  `}).join("");

  document.getElementById(`name1-${panelIndex}`).value = "";
}

function displayInput() {
  console.log("in display-------")
  const name = document.getElementById("name").value;
  console.log("inputname----", name)
  panels.push({
    header: name
  });
  console.log("panel====", panels)
  const output = document.getElementById("output");
  output.innerHTML = panels
    .map((panel, panelIndex) =>{
    // var catFunc =addSubcategory.bind(panel,panelIndex,name);
    return `
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading-${panelIndex}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}">
            ${panel.header}
          </button>
        </h2>
        <div id="panelsStayOpen-collapse-${panelIndex}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${panelIndex}">
          <div class="accordion-body">
            <div class="Add">
              <label for="name1"></label>
              <input type="text" id="${panel.header}-${panelIndex}">
              <button onclick="addSubcategory(${panelIndex}+,+${name})">Add</button>
            </div>
            <div id="subCat-${panel.header}-${panelIndex}">
            </div>
          </div>
        </div>
      </div>
    `}).join("");
    console.log("inputname----", name);

  document.getElementById("name").value = "";
}

