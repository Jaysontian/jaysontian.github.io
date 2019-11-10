---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---



<div id='intro'>
	<img id='bg' src="{{ '/css/bg.jpg' | prepend: site.baseurl }}"></img>
	<div id='holder'>
		<h1>STUDY BIOLOGY EASIER.</h1>
		<p>Bionotes is an online biology classroom striving to provide free and accessible lessons, study notes, and review for anyone, everywhere.</p>
		<a href="{{site.baseurl}}/categories/">Categories</a>
	</div>
</div>

<div class='padding2'>
	<h2 class='heading'>Recent Articles</h2>
	<div class='gallery'>
		{% for post in site.posts offset:0 limit:4 %}
		<a style='text-decoration: none;color:rgba(0,0,0,0.86)' href='{{post.url}}'>
			<div class='post-con'>
				<img class='thumbnail' src='{{post.image}}'>
				<p>{{post.type}}</p>
				<h5>{{post.title}}</h5>
			</div>
		</a>
		{% endfor %}
	</div>
	<h2 class='heading'>Courses</h2>


	
</div>
