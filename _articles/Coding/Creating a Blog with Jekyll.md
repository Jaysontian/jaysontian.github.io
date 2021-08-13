---
title: Coding a Blog With Jekyll
date:   2021-07-31
category: coding
---

Have some experience with basic web development (HTML, CSS, JavaScript) and interested in coding a blog? This is the article! [Jekyll][1] is a **static site generator** for personal or professional sites. It’s a framework written in Ruby and renders Markdown and Liquid templates into web pages. 

## English, Please?
If that explanation means absolutely nothing to you, have no fear! It’s really just programming jargon that explains how Jekyll works:
- **Ruby** is a programming language used to build frameworks. You don’t really need to worry about it other than understand that you need to **install** ruby to use Jekyll. (Explained later, but If you want to learn more, read [Ruby’s Docs][2])
- What is a **static site generator**? Normally, blogs are hosted from a backend server. This requires you to have articles stored in a cloud and then your website will fetch that data. On the other hand, Jekyll hosts all your files live from folders that code your site, so it becomes super easy to start a blog and update it! Many people use Github to host their Jekyll blogs, but you can use whatever you want.
- **Markdown** is a text editing language. Just like text files (.txt), markdown has its own formatting and allows easy styling. For example, you can use \* to make words bold and dashes (-) to create a bullet list. These are the files that blog articles and posts will be written in. Once in the folder, Jekyll will generate the markdown files into live HTML pages for the site.

## Why is Jekyll Superior (IMO)?
There are numerous benefits of using a static site generator like Jekyll in comparison to plain HTML code. For example, normally, for each article that is published, you would need to create the HTML tags, the heads, scripts, and hard code each text with \<p\> and \<h2\> tags. With Jekyll, it is possible to include a header and footer in every single page –– this way, you don’t need to update the header for every HTML page if you need to make one change.

Another comparison people usually make is between Jekyll and a **dynamic** site with a back-end. Fetching data and server communication is certainly the traditional way to do it, however, there are other pros of using Jekyll that make it so appealing to bloggers and developers:
1. **Safety & Security** – since it’s not on a server and statically generated, it’s difficult for hackers to attack it
2. **Loading Speed** – it’s much faster as only plain rendered HTML is read
3. **Customizability & Ease to Learn ** – as it’s built by you from scratch you know the ins and outs and can change it to however you like. It’s also easy to learn if you already are familiar with web development.

## Installing Jekyll

This is basically installing “Jekyll” on your computer so that you can use it to render your files. As said before, Ruby needs to be installed if you don’t have it, since Jekyll runs on Ruby.

### Install Ruby

Ruby comes pre-installed on most MacBook computers. For more information if you don’t have Ruby, visit Ruby’s [home site][3]. If you’re unsure you can check terminal by entering:
```test
$ ruby -v
```
You can also update Ruby:
```test
$ sudo gem install ruby
```

### Install Bundler
The name is very self-explanatory. It will basically “bundle” your files (package management) which is needed for Jekyll:
```test
$ sudo gem install bundler
```

> You may be required to enter your password when entering sudo as this ensures you’re running the command as an administrator

### Installing Jekyll
Ruby runs off GEMS and for Jekyll to be installed a GEMFILE needs to be created. Create a file using your code editor named GEMFILE (no extensions) and put it into a folder. In the gem file, paste the following:
```test
gem 'github-pages'
source 'https://rubygems.org'
```

Then in terminal, CD to the folder the gem file is in and then run the following to install bundler:
```test
$ bundle install
```

After the process has finished, you can now install Jekyll to the folder:
```test
$ jekyll new name-jekyll-page
```

Replace `name-jekyll-page` with what you want the name of the folder / page to be called.

All done! Now, you can run the project  (this means generating the static files and then it will be served to your localhost for testing). Type the following the initiate the test site:
```test
$ jekyll serve
```

Note that any changes now made to the files in the folder will be automatically compiled from MD, SCSS, etc. into HTML and CSS for your site. To view your site, go to `http://localhost:4000` in your browser. It may also be hosted on another localhost port which will be indicated after you serve the page. For example: 

![][image-1]

And there you have it! Your own Jekyll-hosted website:

![][image-2]


[1]:	https://jekyllrb.com/
[2]:	https://www.ruby-lang.org/en/
[3]:	https://www.ruby-lang.org/en/documentation/installation/

[image-1]:	https://i.imgur.com/d0ArIB0.png
[image-2]:	https://i.imgur.com/p4jfpeQ.png