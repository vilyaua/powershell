class Device_ {
    [string]$Brand = 6
    [string]$Model = 8
    [string]$VendorSku = 12
}

class Rack_ {
    [string]$Brand = 1
    [string]$Model = 2
    [string]$VendorSku = 2
    [string]$AssetId = 5
    [Device_[]]$Devices = [Device_[]]::new(8)
}

$rack_ = [Rack_]::new()
$rack_.Devices[0] = [Device_]::new()
$rack_ | Format-Table
