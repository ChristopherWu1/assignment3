let numRows = 0;
let numCols = 0;
let colorSelected = "purple"; 

theGrid = document.getElementById("grid");
//<tr></tr> row element
//<td> /td> column element
//add to lastChildelement
//have to add background color of every tr to colorSelected


//Add a row
/*
    have to add
    <tr>
        <td> </td>
    </tr>
*/
function addR() {//have to add <td> </td> numCols times

    //alert("Clicked Add Row")
    let td = document.createElement("tr");
    let tr = document.createElement("td");
    tr.style.backgroundColor = colorSelected;
    if(numCols === 0)
    {
        td.appendChild(tr);
    }
    else
    {
        for(let i = 0; i < numCols ; i++)
        {
            
            td.appendChild(tr);
        }
    }
    theGrid.appendChild(td);
    numRows +=1;
}

//Add a column
/*
    for every row,
    have to add a 
    <td> </td>
    for each <tr> </tr>
*/
function addC() {//loop through rows, and add 1 col <td> </td>
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
    if(numRows !== 0)
    {

    }
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
    if(numCols !== 0)
    {

    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//compare the color to the default color we selected
function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
