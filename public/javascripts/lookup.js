/*var queryString='';*/
var employee;

document.getElementById("searchTxt").onkeyup=getData;
fetchData();

function getData(e){
	
	var queryString= document.getElementById('searchTxt').value;
	var positions=[];
	var filteredArray=[];
	var flag=false;

	//iterate the entire data set and see if the particular dataset is present
	for(var i=0;i<employee.length;i++){
		if(employee[i]['name'].toLowerCase().indexOf(queryString)>=0){
			flag=true;
			positions.push(i);

		}
	
		if(flag==true){
			console.log('Value found in server data');
		
		}
			else{
				console.log('Not found');
			}
		   
	}
	

   console.log('Positions array formed of length '+positions.length);

	for(var i=0;i<positions.length;i++){
		filteredArray.push(employee[positions[i]]);
	}
/*	console.log(filteredArray);*/
	generateTable(filteredArray);
}


function generateTable(employee){
	
	if(typeof(employee)!=undefined){
		console.log('Employee is defined with length'+employee.length);
	}
	else{
		console.log('Undefined');
	}
	

			//Create a HTML Table element.
			var table = document.createElement("TABLE");
			table.border = "1";

			//Add the header row.
			var row = table.insertRow(-1);
			var headerCell1 = document.createElement("TH");
			var headerCell2 = document.createElement("TH");
			var headerCell3 = document.createElement("TH");
			var headerCell4 = document.createElement("TH");
	
			/*add data rows*/
			headerCell1.innerHTML = "Name";
			row.appendChild(headerCell1);
			headerCell1.setAttribute('class','col-1');
	
			headerCell2.innerHTML = "Age";
			row.appendChild(headerCell2);
			headerCell2.setAttribute('class','col-2');
	
			headerCell3.innerHTML = "Shoe size";
			row.appendChild(headerCell3);
			headerCell3.setAttribute('class','col-3');
	
			headerCell4.innerHTML = "Title";
			row.appendChild(headerCell4);
			headerCell4.setAttribute('class','col-4');
	
	
			//Add the data rows.
			for (var i = 0; i < employee.length; i++) {
					
					row = table.insertRow(-1);
				
					
					var cell1 = row.insertCell(-1);
					cell1.innerHTML = employee[i]["name"];
					cell1.setAttribute('class','col-1');
					
					var cell2 = row.insertCell(-1);
					cell2.innerHTML = employee[i]["age"];
					cell2.setAttribute('class','col-2');
					
					var cell3 = row.insertCell(-1);
					cell3.innerHTML = employee[i]["shoe_size"];
					cell3.setAttribute('class','col-3');
					
					var cell4 = row.insertCell(-1);
					cell4.innerHTML = employee[i]["title"];
					cell4.setAttribute('class','col-4');
			}


			var dvTable = document.getElementById("userTable");
			dvTable.innerHTML = "";
			dvTable.appendChild(table);
}

function fetchData(){
	
	ajax('master_data.json', 'get', function(obj){
		
		emp=obj.responseText;
		console.log(emp);
		
		employee=JSON.parse(emp);
		
		generateTable(employee);
	
		});	
}



