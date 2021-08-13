---
title: From Sheets to JSON – Better Admin UI
date: 2021-08-12
category: coding
---

When programming a content-based website or an app, developers are always seeking for a way to make the content accessible and convenient to update. However, the problems of programming a full-on backend are evident – it’s incredibly time consuming and requires lots of code. Although it may be customizable in the long run, it still requires a custom dashboard and hosting using paid services (when you surpass a limit), such as Google’s Firebase or AWS.

I realized how difficult this was a few months back when I was trying to design a website which fetches content that will be updated regularly. Another issue that made it even harder was that I wanted the “editing” page to be user friendly, as my friends needed to edit the page but they don’t know how to code. What’s the solution? I realized that Google Sheets can act as a “database” for the back-end and render JSON files. Then, using simple Javascript on the site, I convert, parse, and clean the fetched JSON into a proper JSON file with the correct data values and keys from the sheet.

The benefit of this dashboard design and system is that all users can update the page if they are shared to the Google Spreadsheet and no coding skills is needed. In addition, it is easy to setup, without needing complex back-ends and custom dashboards.

## Using the API

Sheets2JSON can be found on Github [here][1]. It can be easily used via insertion as a script tag on a HTML page. The source link is the raw GitHub file of the script on my site. Note that the reference should be put **before** the main script. In addition, include **jQuery** at the very start. So the final script tags should look like this:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://jaysontian.com/Sheet2JSON/sheet2json.js"></script>
<script src="your-script.js"></script>
```

To request to convert the google sheets file to JSON, the spreadsheet ID needs to be obtained. For any Google Sheets file, the URL behind `/d/` is typically the ID.

![][image-1]

Next, the google sheets file needs to be published to the public. This can be done by going to `FILE -> PUBLISH TO WEB` on google sheets. Make sure to also check “Automatically republish when changes are made”.

![][image-2]

Then, in the code editor, request for the JSON using the `send2JSON()` function when the document is ready:

```js
$(document).ready(function() {
    send2JSON('SPREADSHEET_ID');
});

// Replace the SPREADSHEET_ID with your google sheets ID obtained from the URL after it has been published. For example:

send2JSON('1Eb1_OFLki60vHWHA3C8Grn-hx04A7dvljXsMfOjtVS8');

```

After processing, the parsed and cleaned JSON file can be obtained via the `receive2JSON()`  function. The parameter returned is the JSON data.

```js
function receive2JSON(data){
	// Do what you want with the data here
}
```

The returned file has a structure that follows the google sheets headers and values. As an example, if the google sheets has the following data:
![][image-3]
The returned JSON should be organized as the following:
```json
[{
	name: "Bob",
	id: "51X4",
	age: 17
}
{
	name: "Carl",
	id: "24Y8",
	age: 16
}
{
	name: "Dude",
	id: "00K8",
	age: 20
}]
```

The keys are set to the same as the heading values, so for example, `data[0].name` would return the name of the first guy `"Bob"`. A recommended way to loop through each row is to use the `forEach()` function:
```js
data.forEach(row => {
	console.log(row.name)
})
```
**Output:**
```
Bob
Carl
Dude
```

Evidently, this system offers customization for webpages that needs content to be updated regularly, in addition to being incredibly simple and fast to setup.

[1]:	https://github.com/Jaysontian/Sheet2JSON

[image-1]:	https://i.imgur.com/AjBaPWo.png
[image-2]:	https://i.imgur.com/8YRffJO.png
[image-3]:	https://i.imgur.com/CVma78u.png