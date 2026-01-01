// Minimal JS: mobile nav toggle and insights tag filtering
document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if(navToggle){
    navToggle.setAttribute('aria-expanded','false');
    navToggle.addEventListener('click', ()=>{
      const open = mobileNav.classList.toggle('hidden');
      navToggle.setAttribute('aria-expanded', (!open).toString());
    });
  }

  // Insights tag filtering: if on insights page
  const tags = document.querySelectorAll('[data-tag]');
  const postNodes = document.querySelectorAll('[data-post]');
  const tagFilters = document.getElementById('tag-filters');
  if(tagFilters){
    tagFilters.addEventListener('click', (e)=>{
      const t = e.target;
      if(t.dataset.tag === 'all'){
        postNodes.forEach(n=>n.classList.remove('hidden'));
        document.querySelectorAll('.tag-btn').forEach(b=>b.classList.remove('opacity-50'));
        t.classList.add('opacity-50');
        return;
      }
      if(t.classList.contains('tag-btn')){
        const tag = t.dataset.tag;
        postNodes.forEach(n=>{
          const tags = (n.dataset.postTags||'').split(',');
          if(tags.includes(tag)) n.classList.remove('hidden'); else n.classList.add('hidden');
        });
        document.querySelectorAll('.tag-btn').forEach(b=>b.classList.remove('opacity-50'));
        t.classList.add('opacity-50');
      }
    });
  }
});
