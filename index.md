---
layout: page
title: Site Sub Here
---
{% include JB/setup %}


{% for post in site.posts limit:5 %}

<article>  
  <h2><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>
  <p class="postmeta">{{ post.date | date_to_string }}</p>
  
  <div> {{ post.content | split: '<!-- more -->' | first }} </div>
</article>

{% endfor %}