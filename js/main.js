// JavaScript Document

var existe_db
var db



function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    };


function onDeviceReady() {
        
	navigator.notification.alert("VIVMo 1.0 - Aplicación de Medición de Viveros by Moebius-IT. Le recordamos mantener su aplicación actualizada para mejor funcionamiento.","accion", "Bienvenido a VIVMo", "Continuar");
		
	
	existe_db = window.localStorage.getItem("existe_db");
	
	db = window.openDatabase("agenda_curso", "1.0", "DB de VIVMo", 200000);
	
	if(existe_db == null){
		creaDB();
	}else{
		cargaDatos();
	}
	
};
		
	
/* 
* creación de ña base de datos
*/
function creaDB(){
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
	
}

function creaNuevaDB(tx){
	mkLog("Creando base de datos");
	
	tx.executeSql('DROP TABLE IF EXISTS agenda_curso');
	
	var sql = "CREATE TABLE IF NOT EXISTS agenda_curso ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"nombre VARCHAR(50), " +
		"apellidos VARCHAR(50), " +
		"telefono VARCHAR(30), " +
		"categoria VARCHAR(30), " +
		"foto VARCHAR(200), " + 
		"email VARCHAR(30) )";
		
	tx.executeSql(sql);
	
	tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (1,'José','Pérez','+34566222666','amigo','','paco@paco.com')");
	tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (2,'Siro','González','+34555434567','familia','','siro@test.com')");
	tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (3,'Julio','Rodríguez','+34756222666','trabajo','','julio@test.com')");
	
}


function creaSuccess(){
	window.localStorage.setItem("existe_db", 1);
	cargaDatos();
}

function errorDB(err){
	mkLog("Error procesando SQL " + err.code);
	navigator.notification.alert("Error procesando SQL " + err.code);
}






/* 
* carga de datos desde la base de datos
*/
function cargaDatos(){
	db.transaction(cargaRegistros, errorDB);
}

function cargaRegistros(tx){
	mkLog("Cargando registros de la base de datos");
	tx.executeSql('SELECT * FROM agenda_curso', [], cargaDatosSuccess, errorDB);
}

function cargaDatosSuccess(tx, results){
	mkLog("Recibidos de la DB " + results.rows.length + " registros");
	if(results.rows.length == 0){
		mkLog("No se han recibido registros");
		navigator.notification.alert("No hay contactos en la base de datos");
	}
	
	for(var i=0; i<results.rows.length; i++){
		var persona = results.rows.item(i);
		var selector = $("#lista_" + persona.categoria + " ul");
		
		selector.append('<li id="li_'+persona.id+'"><a href="#detalle" data-uid='+persona.id+' class="linkDetalles"><div>'+ persona.nombre +  persona.apellidos + '</div></a><a href="#form"  data-theme="a" data-uid='+persona.id+'  class="linkForm">Predet.</a></li>').listview('refresh');
	}
	
	$(".linkDetalles").click(function(e){
		$.id = $(this).data("uid");
	});
	
	$(".linkForm").click(function(e){
		$.id = $(this).data("uid");
	});
}

