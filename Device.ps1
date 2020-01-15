
# Eg. User name="admin", Password="admin" for this code sample.
$user = "admin"
$pass = "kk67HuDifOMC"

# Build auth header
$base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $user, $pass)))

# Set proper headers
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add('Authorization',('Basic {0}' -f $base64AuthInfo))
$headers.Add('Accept','application/json')
$headers.Add('Content-Type','application/json')

# Specify endpoint uri
$uri = "https://dev62099.service-now.com/api/now/table/u_aa_configuration"

# Specify HTTP method
$method = "post"

# Specify request body
#$body = {"u_area":"myAreaData","u_sub_area":"SubAreaData","sys_created_by":"CreatorName"}
$body = '{"u_area":"myAreaData4","u_sub_area":"mySubAreaData4"}'

# Send HTTP request
Write-Host('Headers before Request')
Write-Host($headers)
Write-Host($headers | ConvertTo-Json)
$response = Invoke-WebRequest -Headers $headers -Method $method -Uri $uri -Body $body
Write-Host($response)
# Print response
#$response.RawContent
