let employees =[
{id:101,name:"yash",salary:45000},
{id:101,name:"achi",salary:95000},
{id:101,name:"abi",salary:85000},
{id:101,name:"moni",salary:75000},
{id:101,name:"ali",salary:65000},
{id:101,name:"ram",salary:35000},  
]

function display_Data(){

    let rows=""
for(emp of employees)

     {
    rows = rows + `<tr>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.salary}</td>
    </tr>`
    }

document.getElementById("table").innerHTML = rows;

}