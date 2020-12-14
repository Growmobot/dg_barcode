
// Example from docs.

/*dg_barcode.scan = function (success, error, options) {
  cordova.plugins.barcodeScanner.scan(
    function (result) {

      document.getElementById()  

        alert("We got a barcode\n" +
              "Result: " + result.text + "\n" +
              "Format: " + result.format + "\n" +
              "Cancelled: " + result.cancelled);
    },
    function (error) {
        alert("Scanning failed: " + error);
    }
  );
}*/


// Return a scan result, and run the action.
dg_barcode.scan = function (action, codeType) {

  // Assure we are in compiled mode only.
  if (dg.settings.mode ==='phonegap') {

    // Use the barcodeScanner method scan.
    cordova.plugins.barcodeScanner.scan(


      // Success.
      function (result) {

        // If a codeType is set (optional).
        if (codeType) {

          // If matching type of code.
          if (result.format === codeType) {

            // Run an action with the result text.
            return action(result.text);
          }
          // Wrong type of barcode.
          else {
            console.log('This is not a ' + codeType + ' type bar code.');
            //alert('This is not a ' + codeType + ' type bar code.');
          }
        }

        // Otherwise, accept any code.
        else {
          // Run an action with the result text.
          return action(result.text);
        }

        // Console out result.
        console.log("Result: " + result.text, "Format: " + result.format , "Cancelled: " + result.cancelled);
      },

      // Error.
      function (error) {
        console.log("Scanning failed: " + error);
        //alert("Scanning failed: " + error);
      }

    );

  }

  // Not compiled mode.
  else {
    console.log('DrupalGap is configured to compiled mode.');
    //alert('DrupalGap is configured to compiled mode.');
  }


}


// Populate the result into a field.
dg_barcode.scanPopulate = function (textElementID, codeType) {

  // Assure we are in compiled mode only.
  if (dg.settings.mode ==='phonegap') {

    // Use the barcodeScanner method scan.
    cordova.plugins.barcodeScanner.scan(


      // Success.
      function (result) {

        // If a codeType is set (optional).
        if (codeType) {

          // If matching type of code.
          if (result.format === codeType) {
            // Populate the value specified in textElementID.
            document.getElementById(textElementID).value = result.text;
          }
          // Wrong type of barcode.
          else {
            console.log('This is not a ' + codeType + ' type bar code.');
            //alert('This is not a ' + codeType + ' type bar code.');
          }
        }

        // Otherwise, accept any code.
        else {
          // Populate the value specified in textElementID.
          document.getElementById(textElementID).value = result.text;
        }

        // Console out result.
        console.log("Result: " + result.text, "Format: " + result.format , "Cancelled: " + result.cancelled);
      },

      // Error.
      function (error) {
        console.log("Scanning failed: " + error);
        //alert("Scanning failed: " + error);
      }

    );

  }

  // Not compiled mode.
  else {
    console.log('DrupalGap is configured to compiled mode.');
    //alert('DrupalGap is configured to compiled mode.');
  }
}

