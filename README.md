# dg_barcode
The bar code scanner module for DrupalGap 8

## Web App

Not available at this time.

## Cordova

When using this module with Cordova, the following plugin is required, the cordova version does NOT work:

```
phonegap-plugin-barcodescanner
```

# Usage

Create an element to poplulate the value to with a specific ID.

```
element.barcode_result = {
  _theme: 'textfield',
  _attributes: {
    id: 'test-barcode'
  }
}
```
You can use a button onclick to trigger the scan.

Pass the ID of the element you created as an arguement, and it will populate on scan.
```
var scan = "dg_barcode.scanPopulate('test-barcode')";

element.scan_button = {
  _theme: 'button',
  _title: 'Scan',
  _attributes: {
    onclick: scan
  }
};
```
## Optional
You can specify a specific type of code as the second argument.

See the phonegap plugin page for [Currently Supported Types](https://github.com/phonegap/phonegap-plugin-barcodescanner#using-the-plugin)
```
var scan = "dg_barcode.scanPopulate('test-barcode','CODE_128')";
```
This will only populate if the scan result is of that type.

Otherwise, there is an alert that the wrong type of code was detected.
