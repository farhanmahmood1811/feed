# Group Notification Feed!
Express , Nodejs, Mongodb

## Setup and Dependency
#### Mongodb version > 3.6 and NodeJS version >10
> `> npm install`
> `> npm start`

# User Api's

## Register
### /auth/register
    

curl --request POST \
    --url http://localhost:3000/auth/register \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data 'username=farhan&password=farhan&name=farhan%20mahmood'


## Login
### /auth/login

    curl --request POST \
    --url http://localhost:3000/auth/login \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data 'username=farhan&password=farhan'

## Get
### /users

    curl --request GET \ 
    --url http://localhost:3000/user \ 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOTkyMTdkNTFiZDAxN2U3ZWQ3MDQzNCIsImlhdCI6MTUzNjc2MjI0MCwiZXhwIjoxNTM2ODQ4NjQwfQ.f9nJQI9B0Hnu8MwrSM8mLzONCx_ZI2yo-I8ZWECdYus'

# Item Api's

## Create

### /item
	
    curl --request POST \ --url http://localhost:3000/item \ 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOTkyMTdkNTFiZDAxN2U3ZWQ3MDQzNCIsImlhdCI6MTUzNjc2MjI0MCwiZXhwIjoxNTM2ODQ4NjQwfQ.f9nJQI9B0Hnu8MwrSM8mLzONCx_ZI2yo-I8ZWECdYus' \ 
    --header 'Content-Type: application/x-www-form-urlencoded' \ 
    --data 'name=Shirt&brand=first-brand&category=cat1' \
    
## Update
### /item/<_id>

    curl --request PUT \ --url http://localhost:3000/item/5b9825c78462426368f4f6c8 \ 
    --header 'Content-Type: application/x-www-form-urlencoded' \ 
    --data brand=second%20brand

## Delete
### /item/<_id>

    curl --request DELETE \ 
    --url http://localhost:3000/item/5b9586b62d98c54431753b2c \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOTkyMTdkNTFiZDAxN2U3ZWQ3MDQzNCIsImlhdCI6MTUzNjc2MjI0MCwiZXhwIjoxNTM2ODQ4NjQwfQ.f9nJQI9B0Hnu8MwrSM8mLzONCx_ZI2yo-I8ZWECdYus'

## Get
### /item?nextId=response.nextId
nextId is optional and part of each response which indicates next set of data available and should be pass as query params to fetch next set of data. if not present return latest created data.

    curl --request GET \ 
    --url http://localhost:3000/item \ 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOTkyMTdkNTFiZDAxN2U3ZWQ3MDQzNCIsImlhdCI6MTUzNjc2MjI0MCwiZXhwIjoxNTM2ODQ4NjQwfQ.f9nJQI9B0Hnu8MwrSM8mLzONCx_ZI2yo-I8ZWECdYus'

# Variant Api's

## Create
### /variant

    curl --request POST \ 
    --url http://localhost:3000/variant \ 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOTkyMTdkNTFiZDAxN2U3ZWQ3MDQzNCIsImlhdCI6MTUzNjc2MjI0MCwiZXhwIjoxNTM2ODQ4NjQwfQ.f9nJQI9B0Hnu8MwrSM8mLzONCx_ZI2yo-I8ZWECdYus' \ 
    --header 'Content-Type: application/x-www-form-urlencoded' \ 
    --data 'name=L-Blue&itemId=5b9586b62d98c54431753b2c&sellingPrice=1051&costPrice=500&properties=cotton%2C%20blue&quantity=10'


## Update
### /variant/<_id>

    curl --request PUT \ 
    --url http://localhost:3000/variant/5b9922473653c07e9dcff4c2 \ 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOTkyMTdkNTFiZDAxN2U3ZWQ3MDQzNCIsImlhdCI6MTUzNjc2MjI0MCwiZXhwIjoxNTM2ODQ4NjQwfQ.f9nJQI9B0Hnu8MwrSM8mLzONCx_ZI2yo-I8ZWECdYus' \ 
    --header 'Content-Type: application/x-www-form-urlencoded' \ 
    --data 'name=variant01&sellingPrice=1200'

## Delete
### /variant/<_id>

    curl --request DELETE \ 
    --url http://localhost:3000/variant/5b9922473653c07e9dcff4c2 \ 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOTkyMTdkNTFiZDAxN2U3ZWQ3MDQzNCIsImlhdCI6MTUzNjc2MjI0MCwiZXhwIjoxNTM2ODQ4NjQwfQ.f9nJQI9B0Hnu8MwrSM8mLzONCx_ZI2yo-I8ZWECdYus'

## Get 
### /variant?nextId=response.nextId
nextId is optional and part of each response which indicates next set of data available and should be pass as query params to fetch next set of data. if not present return latest created data.

    curl --request GET \ 
    --url http://localhost:3000/item \ 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOTkyMTdkNTFiZDAxN2U3ZWQ3MDQzNCIsImlhdCI6MTUzNjc2MjI0MCwiZXhwIjoxNTM2ODQ4NjQwfQ.f9nJQI9B0Hnu8MwrSM8mLzONCx_ZI2yo-I8ZWECdYus'
    
# Notification Api's

## Get By Time Range
### /notification?start='dd-mm-yyyy'&end='dd-mm-yyyy'

    curl --request GET \ 
    --url 'http://localhost:3000/notification?start=11-09-2018&end=12-09-2018' \ 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOThmYTBhYWUyMzI2N2ExZWJhMTJkNiIsImlhdCI6MTUzNjc1MjM1MiwiZXhwIjoxNTM2ODM4NzUyfQ.nQUKGwkQOsIdy4z4vcJXyDy5Aq68ZVux5ZD0-kilWqk'

## Get By Time Range and UserId
### /notification?start='dd-mm-yyyy'&end='dd-mm-yyyy'&userId=<user._id>

    curl --request GET \ 
    --url 'http://localhost:3000/notification?start=11-09-2018&end=12-09-2018&userId=5b9922473653c07e9dcff6c1' \ 
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmhhbiIsIl9pZCI6IjViOThmYTBhYWUyMzI2N2ExZWJhMTJkNiIsImlhdCI6MTUzNjc1MjM1MiwiZXhwIjoxNTM2ODM4NzUyfQ.nQUKGwkQOsIdy4z4vcJXyDy5Aq68ZVux5ZD0-kilWqk'
