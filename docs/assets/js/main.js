document.addEventListener('DOMContentLoaded',function(){
  var btn=document.getElementById('nav-toggle'),nav=document.getElementById('site-nav');
  if(btn&&nav){btn.addEventListener('click',function(){nav.classList.toggle('open');});}

  // Tag filtering on insights page
  var tagBtns=document.querySelectorAll('.tag-btn');
  var posts=document.querySelectorAll('#posts .post');
  if(tagBtns.length&&posts.length){
    tagBtns.forEach(function(b){b.addEventListener('click',function(){
      tagBtns.forEach(function(x){x.classList.remove('active')});
      b.classList.add('active');
      var t=b.getAttribute('data-tag');
      posts.forEach(function(p){
        if(t==='all'){p.style.display='block';return}
        var tags=p.getAttribute('data-tags')||'';
        var match=new RegExp('\\b'+t+'\\b','i');
        p.style.display= match.test(tags)?'block':'none';
      });
    })});
    // activate "All" by default
    var all=document.querySelector('.tag-btn[data-tag="all"]'); if(all) all.click();
  }
});
