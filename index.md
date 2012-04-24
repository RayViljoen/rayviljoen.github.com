---
layout: page
title: Site Sub Here
---
{% include JB/setup %}


{% for post in site.posts limit:5 %}

<article>
  <h2><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>
  <p class="postmeta">
  <span class="published">{{ post.date | date_to_string }}</span>
	<span class="categories">
		{% for category in post.categories %}
			<a href="/categories.html#{{ category }}-ref">{{ category }}
      {% unless forloop.last %}, {% endunless %}</a>
		{% endfor %}
  	</span>
  </p>
  <div> {{ post.content | split: '<!-- more -->' | first }} </div>
</article>

{% endfor %}