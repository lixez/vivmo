// JavaScript Document

var existe_db
var db



function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    };


function onDeviceReady() {
        
	navigator.notification.alert("VIVMo 1.0 - Aplicación de Medición de Viveros by Moebius-IT. Le recordamos mantener su aplicación actualizada para mejor funcionamiento.","accion", "Bienvenido a VIVMo", "Continuar");
			
};





function alertaPlanta8(){
	
	
	navigator.notification.alert("La carga de datos ha finalizado correctamente.");
	
	
	};











 function cargarMedicion()
    {
        var str = '';
        var elem = document.getElementById('medirForm').elements;
        for(var i = 0; i < elem.length; i++)
        {
            str += "<b>Type:</b>" + elem[i].type + "&nbsp&nbsp";
            str += "<b>Name:</b>" + elem[i].name + "&nbsp;&nbsp;";
            str += "<b>Value:</b><i>" + elem[i].value + "</i>&nbsp;&nbsp;";
            str += "<BR>";
        } 
        document.getElementById('lblValues').innerHTML = str;
    }