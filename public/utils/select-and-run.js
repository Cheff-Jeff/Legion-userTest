export function selectAndRun(t,n,i){let e=document.querySelector(t);e&&(async()=>{const o=await n();!e.isConnected&&(e=document.querySelector(t),!e)||i(o,e)})()}
