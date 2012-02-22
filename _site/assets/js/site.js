$(document).load(function(){

    "use strict";
    
      // Create array containing post data for search function
      var searchDB = {

        {% for post in site.posts %}
          '{{ post.title }}' : {
            url: '{{ post.url }}',
            content: 'Title: {{ post.title }} | Category: {{ post.category }} | Tags: {{ post.tags }} | Content: {{ post.content | strip_html | strip_newlines }}',
          },
        {% endfor %}

      };

      $('#search input').on({

            keyup: function(){
          
                var searchVal, searchRegex, resultContainer;

                $('#search ul li').empty();
               

                resultContainer = $('#search ul');

                searchValue = $(this).val();
                searchRegex = new RegExp(searchValue, 'gi');

                if(searchValue){
                    $.each(searchDB, function(k,v){

                        var rel = v.content.match(searchRegex);
                        if(rel){ resultContainer.prepend('<li><a href="' + v.url + '">' + k + '</a></li>'); }
                    });
                }
            },

            focus: function(){
                $('#search ul').fadeIn(200);
            },

            blur: function(){
                $('#search ul').fadeOut(200);
            }
        });

});