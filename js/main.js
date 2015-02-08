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
		cargaDatos();
	}
	


};
		
	
function creaBase(){
	db.transaction(creaNuevaBase, errorDB, creaBaseSuccess);
	navigator.notification.alert("CREANDO BASE","accion", "MENSAJE DE SISTEMA", "Continuar");
};

function creaNuevaBase(tx){
		
	tx.executeSql('DROP TABLE IF EXISTS naves');
	
	var sql = "CREATE TABLE IF NOT EXISTS naves ( "+
		"id INTEGER PRIMARY KEY, " +
		"descripcion VARCHAR(50), ";
		
	tx.executeSql(sql);
	
	tx.executeSql("INSERT INTO naves (id,descripcion) VALUES (1,10-A)");
	tx.executeSql("INSERT INTO naves (id,descripcion) VALUES (2,4-A)");
	tx.executeSql("INSERT INTO naves (id,descripcion) VALUES (3,5-A)");
	tx.executeSql("INSERT INTO naves (id,descripcion) VALUES (4,7-A)");
	tx.executeSql("INSERT INTO naves (id,descripcion) VALUES (5,8-B)");
	tx.executeSql("INSERT INTO naves (id,descripcion) VALUES (6,9-A)");
	tx.executeSql("INSERT INTO naves (id,descripcion) VALUES (7,9-B)");


	
	tx.executeSql('DROP TABLE IF EXISTS instalaciones');
	
	var sql = "CREATE TABLE IF NOT EXISTS instalaciones ( "+
		"id INTEGER, " +
		"instalacion INTEGER, " +
		"temporada INTEGER, " +
		"nave VARCHAR(50), " +
		"codigo VARCHAR(50), " +
		"fuente VARCHAR(50), " +
		"contenedor INTEGER, " +
		"parcelas INTEGER, " +
		"estratos INTEGER, " +
		"especies VARCHAR(50), " +
		"unique (_id, Instalacion), ";
		
	tx.executeSql(sql);
	
	tx.executeSql("INSERT INTO instalaciones (id,instalacion,temporada,nave,codigo,fuente,contenedorparcelas,estratos,especies,unique) VALUES (1,134,2015,10-A,27 B1,T,56,0,4312,TC)");

	
	tx.executeSql('DROP TABLE IF EXISTS mediciones');
	
	var sql = "CREATE TABLE IF NOT EXISTS mediciones ( "+
		"_id INTEGER PRIMARY KEY AUTOINCREMENT,"+
		"fecha DATE, "+
		"temporada INTEGER,"+
		"instalacion INTEGER, "+
		"nave VARCHAR(50),"+ 
		"codigo VARCHAR(50),"+
		"fuente VARCHAR(10),"+
		"contenedor INTEGER, "+
		"estratos INTEGER, "+
		"especie varchar(10),"+ 
		"parcelas INTEGER, "+
		"parcela INTEGER,"+
		"muertos INTEGER ,"+
		"plantas INTEGER,"+
		"planta INTEGER, "+
		"altura FLOAT,"+
		"diametro FLOAT,";
		
	tx.executeSql(sql);
	tx.executeSql("INSERT INTO mediciones (id,fecha,temporada,instalacion,nave,codigo,fuente,contenedor,estratos,especie,parcelas,parcela,muertos,plantas,planta,altura,diametro) VALUES (1,2014-08-26,2015,79,7-A,27 T,T,88,7392,TC,5,1,28,8,1,4.5,2)");

};


function creaBaseSuccess(){
	window.localStorage.setItem("existe_db", 1);
	cargaDatos();
};



function errorDB(err){
	mkLog("Error procesando SQL " + err.code);
	navigator.notification.alert("Error procesando SQL " + err.code);
};



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