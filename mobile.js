/* mobile: screens sheet */
(function(){
  var root=document.documentElement, side=document.querySelector('.stage .side'), btn=document.getElementById('mMenu'), scrim=document.getElementById('mScrim');
  if(!side||!btn) return;
  function set(o){ root.classList.toggle('toc-open',o); btn.setAttribute('aria-expanded',String(o)); }
  btn.addEventListener('click',function(){ set(!root.classList.contains('toc-open')); });
  scrim.addEventListener('click',function(){ set(false); });
  side.querySelector('.mclose').addEventListener('click',function(){ set(false); });
  side.addEventListener('click',function(e){ if(e.target.closest('[data-jump]')||e.target.closest('.restart')) setTimeout(function(){ set(false); },120); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') set(false); });
  addEventListener('resize',function(){ if(innerWidth>860) set(false); });
})();
