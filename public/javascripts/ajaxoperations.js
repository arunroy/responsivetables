function ajax(url, method, callback, params) {
	 var obj;
	 try {   
	  obj = new XMLHttpRequest();  
	  console.log('You are using a modern browser');
	 } catch(e){   
	   try {     
		 obj = new ActiveXObject("Msxml2.XMLHTTP");  
		 console.log('You are using an older browser');
	   } catch(e) {     
		 try { 
		   obj = new ActiveXObject("Microsoft.XMLHTTP"); 
		   console.log('Ah, your browser is IE');
		 } catch(e) {       
		   console.log("Your browser does not support Ajax.");       
		   return false;       
		 }     
	   }   
	 }
	 obj.onreadystatechange = function() {
	  if(obj.readyState == 4) {
		 callback(obj);
	  } 
	 }
	 obj.open(method, url, true);
	 obj.send(params);
	 return obj; 
 }

