export function selectAllAndRun(n,o,t){let e=document.querySelectorAll(n);e.length&&(async()=>{const s=await o();Array.from(e).some(i=>!i.isConnected)&&(e=document.querySelectorAll(n)),t(s,e)})()}
