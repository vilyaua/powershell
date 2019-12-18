# Get-Service | Where-Object { $_.Status -eq "running" } | Select-Object -last 10
# Start-Sleep -s 1
# Get-Service | Where-Object { $_.Status -eq "stopped" } | Select-Object -last 10
# $Shell = New-Object -ComObject "WScript.Shell"
# $Button = $Shell.PopUp("Click OK to continue.", 0, "Hello", 0)
# Clear-Host

Get-WmiObject -Class Win32_OperatingSystem -ComputerName localhost | Select-Object -Property CSName,FreeVirtualMemory