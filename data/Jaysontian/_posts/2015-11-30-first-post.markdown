---
layout: post
title: "Rambling About Arbitrary Topics"
date:   2015-11-30
categories: life
---

## Customizing your Jekyll Theme

The default styles try to be basic, but they're still far too stylized for my liking. We're going to override all the styles and make them much more simple. You can turn off the Jekyll serve at this point and just start saving files. We'll go from top to bottom alphabetically.

I'm using my own name as an example, but obviously change everything to match you.

### Hello

In Jekyll, **_includes** are files that should show up on every page - header, footer, etc.

#### footer.html

```html

```

#### head.html

Any `head` metadata.

```html

```

#### header.html

Your navigation and header. I will dynamically load all pages into the navigation bar, except for the blog page, which I will load manually.

```html

```

### _layouts_

The layout that your content will conform to.

#### default.html

```html

```

#### page.html

```html

```

All the dashes at the top are **mandatory**. If you don't include them, the website won't work properly. For pages and posts, the default layout gets loaded, plus any additional layout information you desire.

#### post.html

Same as the page, but with date and author metadata.

```html

```

### _pages_

The default Jekyll website does not come with a **_pages** directory, but I like to include it so the main directory stays clean.

#### 01_about.md

Now we're creating the markdown files. Prepending them with a number ensures that they appear in the order you specify.

```markdown

```

#### 02_contact.md

```markdown

```

### _posts

I'm going to leave the post exactly as it is.

Delete about.md from the main directory, since we've put it in the **_pages** directory.

### index.html

**index.html** in the main directory will be the main page of the site.

```html

```

### blog

Create a new directory called **blog**. Inside, create an **index.html**. This will be the main blog page that will contain all your posts.

```html

```

### css

The **css** directory in the root should contain one file - **main.scss**. Edit it to contain the following:

```scss

```

Leave the top part exactly as is.

### _sass

The absolute last directory that we need to edit - the sass partials. Create each of these files in the `_sass` directory.

#### _base.scss

Variables, mixins, and resets will go here.

```scss

```

#### _syntax-highlighting.scss

Simply remove this line from the file:

```scss

```

#### _layout.scss

All my styles will go in here. I made a simple, responsive website that doesn't rely on any frameworks.

```scss

```

## Serve Jekyll

At this point, all the files are ready and jekyll can be served.

```bash

```

If you inserted all the code exactly as above, the sass partials will compile into the main.scss. All the rest of the files will write to **_site** site, which is the distribution folder.

Server running... press ctrl-c to stop.

If I make a change to any of the sass files, they should compile.

```terminal

```

## Pushing Jekyll site to GitHub pages

Create an empty repository in GitHub. Mine is **startjekyll**, so the Git repo URL is `https://github.com/taniarascia/startjekyll`.

There is one change that needs to be made in order to have one site for both your local Jekyll and the live GitHub pages.

Duplicate your **_config.yml** and call it **_config_dev.yml**.

Leave the **_config_dev.yml** as is, and change **_config.yml** for the live site.

```yaml

```

Now, when you want to work on the site locally, you will run the following command:

```bash

```

And it will load the information from the dev config.

Serve your Jekyll one last time to ensure all the final changes have been updated. Here are the commands to push the site to GitHub pages:

```bash

```

Add the GitHub repository.

```bash

```

Ensures that you're on the `gh-pages` branch, not `master`.

```bash

```

Track all files.

```bash

```

Commit all files.