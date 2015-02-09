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
	}
	


};
		
	
function creaBase(){
	db.transaction(creaNuevaBase, errorDB, creaBaseSuccess);
	
};

function creaNuevaBase(tx){
		
	tx.executeSql('DROP TABLE IF EXISTS naves');
	
	var sql = "CREATE TABLE IF NOT EXISTS naves( id INTEGER PRIMARY KEY, descripcion VARCHAR(50))";
		
	tx.executeSql(sql);
	
	tx.executeSql("INSERT naves (id, descripcion) VALUES( 1,10-A)" );
	tx.executeSql("INSERT naves (id, descripcion) VALUES( 2,20-A)" );
	tx.executeSql("INSERT naves (id, descripcion) VALUES( 3,30-A)" );


		
};


function creaBaseSuccess(){
	window.localStorage.setItem("existe_db", 1);
	navigator.notification.alert("Base de datos creada exitosamente");

};


function errorDB(err){
	mkLog("Error procesando SQL " + err.code);
	navigator.notification.alert("Error procesando SQL " + err.code);
};

