
function jumlah()
		{
 			var bil1 = parseFloat(document.convert.bill1.value);
 			if (isNaN (bil1))
   			bil1=0.0;
 
 			var hasil = bil1 * 13500;
 			
 			
 			document.getElementById('z').innerHTML = hasil;
		}

