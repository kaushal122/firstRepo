// Create a table element
let problemSet =[ [
  {
    title: "Sleep",
    acceptance: 80,
    difficulty: "Easy"
  },
  {
    title: "Memoize",
    acceptance: 30,
    difficulty: "Hard"
  }
],[{
  title: "Sleep1",
  acceptance: 80,
  difficulty: "Easy"
},
{
  title: "Memoize1",
  acceptance: 30,
  difficulty: "Hard"
}]
];

let tab = function(set) {
  const table = document.createElement("table");

  // Create a table header row element
  const headerRow = document.createElement("tr");

  // Create table header cells and add them to the header row
  const headerCell1 = document.createElement("th");
  headerCell1.textContent = "Title";
  headerRow.appendChild(headerCell1);

  const headerCell2 = document.createElement("th");
  headerCell2.textContent = "Acceptance";
  headerRow.appendChild(headerCell2);

  const headerCell3 = document.createElement("th");
  headerCell3.textContent = "Difficulty";
  headerRow.appendChild(headerCell3);

  // Add the header row to the table
  table.appendChild(headerRow);

  // Create table data rows and cells and add them to the table
  for (let i = 0; i < set.length; i++) {
    const dataRow = document.createElement("tr");

    const dataCell1 = document.createElement("td");
    dataCell1.textContent = set[i].title;
    dataRow.appendChild(dataCell1);

    const dataCell2 = document.createElement("td");
    dataCell2.textContent = set[i].acceptance;
    dataRow.appendChild(dataCell2);

    const dataCell3 = document.createElement("td");
    dataCell3.textContent = set[i].difficulty;
    dataRow.appendChild(dataCell3);

    table.appendChild(dataRow);
  }
  return table;
}

// Add the table to the HTML document
const tableContainer = document.getElementById("table-container");
tableContainer.appendChild(tab(problemSet[0]));

let evn=function(btn,val){
  btn.addEventListener("click",function(){
     tableContainer.innerHTML = '';
     if(val==1)
     tableContainer.appendChild(tab(problemSet[0]));
     else if(val==2)
     tableContainer.appendChild(tab(problemSet[1]));
  })
}

const button2 = document.getElementById("btn2");
const button1=  document.getElementById("btn1");

evn(button1,1);
evn(button2,2);
