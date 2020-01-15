class RestApiClient {
    [string]$host
    [system.Collections.Generic.Dictionary[[String], [String]]]$headers = [System.Collections.Generic.Dictionary[[String], [String]]]::new()
    
    RestApiClient([string]$servicenowHost) {
        $this.host = $servicenowHost
        $this.headers.Add('Accept', 'application/json')
        $this.headers.Add('Content-Type', 'application/json')
    }
 
    [void] SetCredentials (
        [string]$user,
        [string]$pass
    ) {
        $base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $user, $pass)))
        $this.headers.Add('Authorization', ('Basic {0}' -f $base64AuthInfo))
    }
 
    [System.Object] Post(
        [string]$apiPath,
        [psobject]$body
    ) {
        $response = ''
        $uri = "$($this.host)$($apiPath)"
        $jsonBody = $body | ConvertTo-Json
        try {
            $response = Invoke-RestMethod -Uri $uri -Method POST -Headers $this.headers -ContentType "application/json" -Body $jsonBody
        }
        catch {
            return $_
        }
        return $response
    }
    
    [System.Object] Get(
        [string]$apiPath,
        [string]$params
    ) {
        $response = { }
        $uri = "$($this.host)$($apiPath)?$($params)"
        try {
            $response = Invoke-RestMethod -Uri $uri -Method GET
        }
        catch {
            return $_
        }
        return $response
    }
    
    [System.Object] AddConfiguration([string]$area, [string]$subArea, [string]$key, [string]$value, [string]$table) {
        $input = '' | Select-Object u_area, u_sub_area, u_key, u_value, u_table
 
        $input.u_area = $area
        $input.u_sub_area = $subArea
        $input.u_key = $key
        $input.u_value = $value
        $input.u_table = $table
 
        $result = $this.Post("/api/now/table/u_aa_configuration", $input)            
        return $result
    }
}
 
$client = [RestApiClient]::new('https://dev62099.service-now.com')
 
$client.SetCredentials("admin", "kk67HuDifOMC")
 
$result = $client.AddConfiguration("Testing11", "Test 33", "Key", "Value", "")
$result = $client.AddConfiguration("Testing12", "Test 44", "Key", "Value", "")
 
Write-Host($result | ConvertTo-Json)