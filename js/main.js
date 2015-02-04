// JavaScript Document

function onBodyLoad() {       
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
    navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
		
	}
	
	