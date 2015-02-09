/* 
* carga de datos desde la base de datos
*/
function cargaDatos(){
	db.transaction(cargaRegistros, errorDB);
}

function cargaRegistros(tx){
	mkLog("Cargando registros de la base de datos");
	tx.executeSql('SELECT * FROM naves', [], cargaDatosSuccess, errorDB);
}

function cargaDatosSuccess(tx, results){
	mkLog("Recibidos de la DB " + results.rows.length + " registros");
	if(results.rows.length == 0){
		mkLog("No se han recibido registros");
		navigator.notification.alert("No naves base de datos");
	}
	
	for(var i=0; i<results.rows.length; i++){
		var navesDatos = results.rows.item(i);
		var selector = $("#listadoNaves" +" ul");
		selector.append('<li><a href="#detalleNaves">' + navesDatos.descripcion + '</a></li>').listview('refresh');
	}
}