class Device {
    [string]$Brand
    [string]$Model
    [string]$VendorSku
}

class Rack {
    # [string]$Brand
    # [string]$Model
    # [string]$VendorSku
    # [string]$AssetId
    # [Device[]]$Devices = [Device[]]::new(8)
    [string]$SomeString
    [int]$Height
    [int]$Width
    [Device[]]$Devices = [Device[]]::new(8)
}


$rack = [Rack]::new()
$rack

$device = [Device]::new()
# $device.Brand = "Microsoft"
# $device.Model =  "Model One"
# $device.VendorSku = "WTF is SKU?"
$device