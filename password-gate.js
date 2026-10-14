(function(){
  var SALT='5695c41038e56a4bd6e30e845a5b1bc4', HASH='44b12919a1bbf7fa9dab7a88fe49281c42836d1fcee591198a4a5d49cd57ef8f', ITER=210000, KEY='amali-pw-ok';
  var root=document.documentElement, gate=document.getElementById('pwGate');
  var lg=document.querySelector('.side .logo'); if(lg) document.getElementById('pwgLogo').src=lg.src;
  function hex(b){return Array.prototype.map.call(new Uint8Array(b),function(x){return ('0'+x.toString(16)).slice(-2);}).join('');}
  function unhex(h){var a=new Uint8Array(h.length/2);for(var i=0;i<a.length;i++)a[i]=parseInt(h.substr(i*2,2),16);return a;}
  function derive(pw){ return crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveBits'])
    .then(function(k){return crypto.subtle.deriveBits({name:'PBKDF2',salt:unhex(SALT),iterations:ITER,hash:'SHA-256'},k,256);}).then(hex); }
  function open(){ root.classList.add('unlocked'); gate.setAttribute('aria-hidden','true'); setTimeout(function(){ gate.remove(); },500);
    var r=document.querySelector('.restart'); if(r) r.click(); }
  var ok=false; try{ ok=sessionStorage.getItem(KEY)===HASH; }catch(e){}
  if(ok){ open(); return; }
  var f=document.getElementById('pwgForm'), inp=document.getElementById('pwgIn'), go=document.getElementById('pwgGo'), err=document.getElementById('pwgErr'), card=document.getElementById('pwgCard'), tries=0;
  setTimeout(function(){ inp.focus(); },60);
  document.getElementById('pwgEye').addEventListener('click',function(){ var s=inp.type==='password'; inp.type=s?'text':'password'; this.setAttribute('aria-label',s?'Hide password':'Show password'); inp.focus(); });
  f.addEventListener('submit',function(e){ e.preventDefault(); if(!inp.value) return; go.disabled=true; go.textContent='Checking…'; err.textContent='';
    derive(inp.value).then(function(h){
      if(h===HASH){ try{ sessionStorage.setItem(KEY,HASH); }catch(_){} open(); return; }
      tries++; var wait=tries>=3?Math.min(30,(tries-2)*5):0;
      card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake'); inp.select();
      err.textContent='That password isn’t right.'+(wait?' Try again in '+wait+'s.':'');
      setTimeout(function(){ go.disabled=false; go.textContent='Unlock'; if(wait) err.textContent='That password isn’t right.'; },wait*1000);
    }).catch(function(){ go.disabled=false; go.textContent='Unlock'; err.textContent='Your browser blocked the check. Open this page over https.'; });
  });
})();
