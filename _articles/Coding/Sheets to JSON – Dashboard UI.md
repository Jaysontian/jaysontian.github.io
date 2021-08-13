---
title: Making a Sheets to JSON API
date: 2021-08-12
category: coding
---

When programming a content-based website or an app, developers are always seeking for a way to make the content accessible and convenient to update. However, the problems of programming a full-on backend are evident – it’s incredibly time consuming and requires lots of code. Although it may be customizable in the long run, it still requires a custom dashboard and hosting using paid services (when you surpass a limit), such as Google’s Firebase or AWS.

I realized how difficult this was a few months back when I was trying to design a website which fetches content that will be updated regularly. Another issue that made it even harder was that I wanted the “editing” page to be user friendly, as my friends needed to edit the page but they don’t know how to code. What’s the solution? I realized that Google Sheets can act as a “server” for the back-end and render JSON files. Then, using simple Javascript on the site, I convert, parse, and clean the fetched JSON into a proper JSON with the correct data values and keys from the sheet.

## Using the API

Sheets2JSON can be found on Github [here][1]. It can be easily used via insertion as a script tag on a HTML page. The source link is the RAW file of the script on my site:
```html
<script src="https://jaysontian.com/Sheet2JSON/sheet2json.js"></script>
```


[1]:	https://github.com/Jaysontian/Sheet2JSON