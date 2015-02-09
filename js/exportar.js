

function cargarDatos(tx){
	
	
	tx.executeSql("INSERT naves (id, descripcion) VALUE( 1,10-A)" );
	tx.executeSql("INSERT naves (id, descripcion) VALUE( 2,20-A)" );
	tx.executeSql("INSERT naves (id, descripcion) VALUE( 3,30-A)" );
	tx.executeSql(sql);



		
};

	function exportar(){
	
	db.transaction(exportarArchivo);
	
	}


	

	function exportarArchivo(tx){
		
		var csvData = "";

		tx.executeSql ('SELECT * FROM naves', [], exportarDatosSuccess, exportarDatosError);
		 
		var datosExportar = results.rows.length, i;
			
		for (i = 1; i < datosExportar; i++) {
		csvData += results.rows.item(i).itemno + "," + results.rows.item(i).quantity + "\n";
		}
		   
		window.location='data:text/csv;charset=utf8,' + encodeURIComponent(csvData);
	};


function exportarDatosSuccess(){
	navigator.notification.alert("Base de datos exporatada");

};


function exportarDatosError(err){
	navigator.notification.alert("Error procesando SQL " + err.code);
};