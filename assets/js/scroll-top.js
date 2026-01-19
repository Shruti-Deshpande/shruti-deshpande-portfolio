(function(){
  'use strict';
  try { window.scrollTo(0,0); } catch(e){}
  window.addEventListener('pageshow', function(e){ if (e.persisted) { try { window.scrollTo(0,0); } catch(err){} } });
  window.addEventListener('beforeunload', function(){ try { window.scrollTo(0,0); } catch(e){} });
})();
