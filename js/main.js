// JavaScript Document

var existe_naves
var db



function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    };


function onDeviceReady() {
        
	navigator.notification.alert("VIVMo 1.0 - Aplicación de Medición de Viveros by Moebius-IT. Le recordamos mantener su aplicación actualizada para mejor funcionamiento.","accion", "Bienvenido a VIVMo", "Continuar");
	
	
	existe_db = window.localStorage.getItem("existe_db");
	
	db = window.openDatabase("vivmoDB", "1.0", "DB de VIVMo", 200000);
	
	if(existe_naves == null){
		creaNaves();
		}
	
	if(existe_instalaciones == null){
		creaInstalaciones();
		}
		
	if(existe_mediciones == null){
		creaMediciones();
		}


};
		
	
function creaNaves(){
	db.transaction(creaNuevaNaves, errorDB, creaNavesSuccess);
};

function creaNuevaNaves(tx){
		
	tx.executeSql('DROP TABLE IF EXISTS naves');
	
	var sql = "CREATE TABLE IF NOT EXISTS naves ( "+
		"id INTEGER PRIMARY KEY, " +
		"descripcion VARCHAR(50), ";
		
	tx.executeSql(sql);
	
	tx.executeSql("INSERT INTO vivimoDB (id,descripcion) VALUES (1,'descripcionNave')");
	
};


function creaNavesSuccess(){
	window.localStorage.setItem("existe_naves", 1);
};




function creaInstalaciones(){
	db.transaction(creaNuevaInstalaciones, errorDB, creaInstalacionesSuccess);
};

function creaNuevaInstalaciones(tx){
		
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
	
	
};


function creaNavesSuccess(){
	window.localStorage.setItem("existe_instalaciones", 1);
};



function creaMediciones(){
	db.transaction(creaNuevaMediciones, errorDB, creaMedicionesSuccess);
};

function creaNuevaMediciones(tx){
		
	tx.executeSql('DROP TABLE IF EXISTS mediciones');
	
	var sql = "CREATE TABLE IF NOT EXISTS mediciones ( "+
	"_id INTEGER PRIMARY KEY AUTOINCREMENT,"+
"Fecha DATE, "+
"Temporada INTEGER,"+
"Instalacion INTEGER, "+
"Nave VARCHAR(50),"+ 
"Codigo VARCHAR(50),"+
"Fuente VARCHAR(10),"+
"Contenedor INTEGER, "+
"Estratos INTEGER, "+
"Especie varchar(10),"+ 
"Parcelas INTEGER, "+
"Parcela INTEGER,"+
"Muertos INTEGER ,"+
"Plantas INTEGER,"+
"Planta INTEGER, "+
"Altura FLOAT,"+
"Diametro FLOAT,";
		
	tx.executeSql(sql);
	
	
};


function creaMedicionesSuccess(){
	window.localStorage.setItem("existe_instalaciones", 1);
};

function errorDB(err){
	mkLog("Error procesando SQL " + err.code);
	navigator.notification.alert("Error procesando SQL " + err.code);
};