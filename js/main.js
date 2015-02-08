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
	
	window.localStorage.setItem("existe_db", 1);

};
		
