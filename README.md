# Avatar Generator with AWS Lambda
An avatar generator web service based on serverless technology with AWS Lambda

### Param:
+ text - used to create hash string
+ size - used to generate specified size of png image (option)


### Usage:
Use it in your website just set the source of your img element of avatar url like so:
```js
<img src="https://avatar.ok.sb/?text=ok&size=220">
```
+ Generator a image using default size (220px) : https://avatar.ok.sb/?text=test01
+ Generator a image of 512 pix (max is 1024px) : https://avatar.ok.sb/?text=test02&size=512
