document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    console.log(QRScanner.prepare);
    console.log(cordova.plugins.notification.local.schedule);

    var now = new Date().getTime();
var _10SecondsFromNow = new Date(now + 10 * 1000);

       var fakeNotification = {
            id: 1,
            firstAt: _10SecondsFromNow,
            every: "minute",//Using minute as a test, but it will be day
            checkStatement: getDataToVerifyStatement()
        }

        if (fakeNotification.checkStatement === true) {
             cordova.plugins.notification.local.schedule({
                id: 2,
                title: "Prima notifica",
                text: 'You have a room scheduled for today.',//your function date function here
                date: _10SecondsFromNow,
                autoCancel: true,
                data: "{test"});
            }

             //not sure, but you might want to put: $cordova.plugins.notification.local.add(realNotification);
            
        }



function getDataToVerifyStatement() {
       //logic for  check the days
       return true;


}



  //document.getElementById("testNotification").addEventListener("click", testNotifications);


 function testNotifications() {

  console.log("testNotifications Started");
  
  //var cordova;

  // Checks for permission
  //cordova.plugin.notification.local.hasPermission(function (granted) {

    console.warn("Testing permission");

    cordova.plugins.notification.local.schedule({
    title: 'My first notification',
    text: 'Thats pretty easy...',
    foreground: true
});

 // }

}



//document.getElementById("scan").addEventListener("click", scan);

function scan () {

  
QRScanner.scan(displayContents);

function displayContents(err, text){
  if(err){
    // an error occurred, or the scan was canceled (error code `6`)
  } else {
    // The scan completed, display the contents of the QR code:
    alert(text);
  }
}

// Make the webview transparent so the video preview is visible behind it.
QRScanner.show();
// Be sure to make any opaque HTML elements transparent here to avoid
// covering the video.

 }

 function cancel() {
    window.location.reload(true);
}
