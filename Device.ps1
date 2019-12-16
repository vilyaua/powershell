class Device {
    [string]$Brand =654
    [string]$Model = 124556
    [string]$VendorSku = 125345
}

class Rack {
    [string]$SomeString = 1245
    [int]$Height = 1254
    [int]$Width = 12456
    [Device[]]$Devices = [Device[]]::new(8)
}

$rack = [Rack]::new()
$rack.Devices[0] = [Device]::new()
$rack | Format-Table
