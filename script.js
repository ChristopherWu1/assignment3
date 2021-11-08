let numRows = 0;
let numCols = 0;
let colorSelected; 

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
    let tr = document.createElement("tr");
    //tr.className = 'aRow';
    let td = document.createElement("td");
    td.style.backgroundColor = 'white';
    td.onclick = function() {changeColor(this)};
    if(numCols === 0)
    {
        tr.appendChild(td);
        numCols +=1;
    }
    else
    {
        for(let i = 0; i < numCols ; i++)
        {
            let td = document.createElement("td");
            td.style.backgroundColor = 'white';
            td.onclick = function() {changeColor(this)};
            tr.appendChild(td);
        }
    }
    theGrid.appendChild(tr);
    numRows +=1;
    /*
    console.log("numCols:", numCols);
    console.log("numRows:", numRows);
    */
}

//Add a column
/*
    for every row,
    have to add a 
    <td> </td>
    for each <tr> </tr>
*/
function addC() {//loop through rows, and add 1 col <td> </td>
    //alert("Clicked Add Col")
    
    
    if(numCols === 0 )
    {
        let td = document.createElement("td");
        td.style.backgroundColor = 'white';
        td.onclick = function() {changeColor(this)};

        let tr = document.createElement("tr");
        tr.appendChild(td);
        theGrid.appendChild(tr);
        numRows +=1;
        
    }
    else
    {
        
        let rows = document.querySelectorAll("table tr");
        //console.log(rows.length);
        for(let i = 0; i < numRows; i++) 
        {
            
            let td = document.createElement("td");
            td.style.backgroundColor = 'white';
            td.onclick = function() {changeColor(this)};
            rows[i].appendChild(td);
        }
    }
    numCols +=1;
    /*
    console.log("numCols:", numCols);
    console.log("numRows:", numRows);
    */
}

//Remove a row
function removeR() {
    //alert("Clicked Remove Row")
    if(numRows > 1)
    {
        //removes last child(a row) of table
        theGrid.removeChild(theGrid.lastChild);
        numRows-= 1;

    }
    if(numRows === 1)//if we have only one row to remove
    {
        theGrid.innerHTML = "";//clear everything in table
        numCols = 0;//rest numCols
        numRows = 0;

    }
    
    /*
    console.log("numCols:", numCols);
    console.log("numRows:", numRows);
    */
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    if(numCols > 1)
    {
        let rows = document.querySelectorAll("table tr");
        for(let i = 0; i < numRows; i++)
        {
            rows[i].removeChild(rows[i].lastChild);

        }
        numCols-=1;
    }
    if(numCols === 1)//if tableis 1x1, reset variables and empty table
    {
        numRows = 0;
        numCols = 0;
        theGrid.innerHTML = "";
    
    }
    /*
    console.log("numCols:", numCols);
    console.log("numRows:", numRows);
    */
    
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}


function fill(){
   // alert("Clicked Fill All")
    let rows = document.querySelectorAll("tr td"); //gets all td(column) elements that follow a tr(row) element
        //console.log(rows.length);
        for(let i = 0; i < (numRows * numCols); i++) 
        {
                rows[i].style.backgroundColor = colorSelected;//sets background color to colorSelected
        }
}

function clearAll(){
    /*
    //alert("Clicked Clear All")
    theGrid.innerHTML = "";//clear everything in table
    numCols = 0;//rest numCols
    numRows = 0;*/
    let rows = document.querySelectorAll("tr td"); //gets all td(column) elements that follow a tr(row) element
        //console.log(rows.length);
        for(let i = 0; i < (numRows * numCols); i++) 
        {
                rows[i].style.backgroundColor = 'white';//sets background color to white
        }

}

//compare the color to the default color we selected
function fillU(){
    //alert("Clicked Fill All Uncolored")
    let rows = document.querySelectorAll("tr td"); //gets all td(column) elements that follow a tr(row) element
        //console.log(rows.length);
        for(let i = 0; i < (numRows * numCols); i++) 
        {
                if(rows[i].style.backgroundColor == 'white')//if backgroundColor is white or if it doesn't exist
                {
                    rows[i].style.backgroundColor = colorSelected;//sets background color to colorSelected
                }
        }
}

function changeColor(theElement)
{
    theElement.style.backgroundColor = colorSelected;
}