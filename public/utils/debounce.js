export function debounce(r,n){let e;return(...o)=>new Promise(t=>{window.clearTimeout(e),e=window.setTimeout(()=>{t(r(...o))},n)})}
