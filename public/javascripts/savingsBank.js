	var product;

	ajax('savings_data.json', 'get', function(obj){
/*		
			alert('Recieved savings data form server');
			alert(obj.responseText);
			*/
			product=JSON.parse(obj.responseText);
			product.activeIndex=0;
			
			console.log(product);
		
			generateProductTable(product);
		});	


function generateProductTable(product){
	
	if(typeof(product)!=undefined){
		console.log('Product is defined with length'+product.length);
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
			headerCell1.innerHTML = "Product";
			row.appendChild(headerCell1);
		
			headerCell2.innerHTML = "Interest Rate";
			row.appendChild(headerCell2);
		
			headerCell3.innerHTML = "Minimum Deposit";
			row.appendChild(headerCell3);
	
			headerCell4.innerHTML = "Interest Type";
			row.appendChild(headerCell4);

	
			//Add the data rows.
			for (var i = 0; i < product.length; i++) {
					
					row = table.insertRow(-1);
				
					
					var cell1 = row.insertCell(-1);
					cell1.innerHTML = product[i]["product"];
									
					var cell2 = row.insertCell(-1);
					cell2.innerHTML = product[i]["interest_rate"];
							
					var cell3 = row.insertCell(-1);
					cell3.innerHTML = product[i]["minimum_deposit"];
								
					var cell4 = row.insertCell(-1);
					cell4.innerHTML = product[i]["interest_type"];
			}

			table.setAttribute('id','productTable');
			var dvTable = document.getElementById("prodTable");
			dvTable.innerHTML = "";
			dvTable.appendChild(table);
			
			updateProductMinTable(false,0);
}

/*Function to update product table rendered on small devices*/
/*updateIndc - if false, updates the table for initial load
				if true, updates the table for next or previous items
  directionIndc - if 1 then update next item
  					if 0 then update previous item
*/
function updateProductMinTable(updateIndc,directionIndc){
	
/*	console.log('I will update product min table');
	*/
	if(updateIndc){
		if(directionIndc==1){
			if(product.activeIndex<product.length-1){
				product.activeIndex++;
			} else{
			console.log('Index out of bounds');
			}
		}
		else{
			if(product.activeIndex>0){
				product.activeIndex--;
			}
		
		}
	}
	
	if(product.activeIndex>0){
		document.getElementById('prevBtn').innerHTML=product[product.activeIndex-1].product;
	}
	if(product.activeIndex<product.length-1){
		document.getElementById('nextBtn').innerHTML=product[product.activeIndex+1].product;
	}
	
	console.log(product);
	
	var table = document.getElementById('productTableMin');
	/*console.log(table.rows);*/

	
	//for(var i=0;i<product.length;i++){
		//for(var j=0;j<table.rows.length;j++){
		//	console.log(table.rows[j].cells[0].innerHTML);
			table.rows[0].cells[0].innerHTML=product[product.activeIndex].product;
			table.rows[1].cells[0].innerHTML=product[product.activeIndex].interest_rate;
			table.rows[2].cells[0].innerHTML=product[product.activeIndex].minimum_deposit;
			table.rows[3].cells[0].innerHTML=product[product.activeIndex].interest_type;
		//}
	
	//}
}