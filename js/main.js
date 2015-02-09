// JavaScript Document

var existe_db
var db



function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    };


function onDeviceReady() {
        
	navigator.notification.alert("VIVMo 1.0 - Aplicación de Medición de Viveros by Moebius-IT. Le recordamos mantener su aplicación actualizada para mejor funcionamiento.","accion", "Bienvenido a VIVMo", "Continuar");
		
	
	existe_db = window.localStorage.getItem("existe_db");
	
	db = window.openDatabase("vivmoDB", "1.0", "DB de VIVMo", 200000);
	
	if(existe_db == null){
		creaBase();
	}else{
		
		cargarDatos();
		
		}
	


};
		
	
function creaBase(){
	db.transaction(creaNuevaBase, errorDB, creaBaseSuccess);
	
};

function creaNuevaBase(tx){
		
	tx.executeSql('DROP TABLE IF EXISTS naves');
	
	var sql = "CREATE TABLE IF NOT EXISTS naves( id INTEGER PRIMARY KEY, descripcion VARCHAR(50))";
		
	tx.executeSql(sql);
	
	tx.executeSql("INSERT naves (id, descripcion) VALUE( 1,10-A)" );
	tx.executeSql("INSERT naves (id, descripcion) VALUE( 2,20-A)" );
	tx.executeSql("INSERT naves (id, descripcion) VALUE( 3,30-A)" );


		
};


function creaBaseSuccess(){
	window.localStorage.setItem("existe_db", 1);
	navigator.notification.alert("Base de datos creada exitosamente");

};


function errorDB(err){
	mkLog("Error procesando SQL " + err.code);
	navigator.notification.alert("Error procesando SQL " + err.code);
};



function cargarDatos(tx){
	
	
	tx.executeSql("INSERT naves (id, descripcion) VALUE( 1,10-A)" );
	tx.executeSql("INSERT naves (id, descripcion) VALUE( 2,20-A)" );
	tx.executeSql("INSERT naves (id, descripcion) VALUE( 3,30-A)" );
	tx.executeSql(sql);



		
};

	function exportar(){
	
	db.transaction(exportarArchivo);
	
	}


	var csvData = "";

	function exportarArchivo(tx){

		tx.executeSql (tx.executeSql('SELECT * FROM naves', [], exportarDatosSuccess, exportarDatosError));
		 
		var datosExportar = results.rows.length, i;
			
		for (i = 1; i < datosExportar; i++) {
		csvData += results.rows.item(i).itemno + "," + results.rows.item(i).quantity + "\n";
		}
		   
		window.location='data:text/csv;charset=utf8,' + encodeURIComponent(csvData);
	};
