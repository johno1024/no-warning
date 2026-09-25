(()=>{'use strict';
document.head.insertAdjacentHTML('beforeend',`<style id="nw-share2-css">
.nw-share2{margin-top:14px;border:1px solid #4b272d;background:linear-gradient(180deg,#171012,#0f0b0c);border-radius:18px;padding:15px}.nw-share2 h3{margin:0 0 6px;font-size:1rem}.nw-share2-steps{display:grid;gap:8px;margin-top:12px}.nw-share2-step{display:flex;gap:10px;align-items:flex-start}.nw-share2-num{flex:0 0 28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#5a1d26;font-weight:900}.nw-share2-note{font-size:.82rem;opacity:.72;line-height:1.5}.nw-share2-chip{display:inline-flex;padding:6px 9px;border-radius:999px;background:#281217;border:1px solid #6d2d36;font-size:.72rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.nw-share2-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}.nw-share2-actions .btn{margin:0}.nw-share2-toast{min-height:18px;margin-top:8px;font-size:.78rem;color:#e6b8bd}
@media(max-width:560px){.nw-share2-actions{grid-template-columns:1fr}}</style>`);
const app=document.getElementById('app');
function textOf(sel){return document.querySelector(sel)?.textContent?.trim()||''}
async function clip(v,msg){try{await navigator.clipboard.writeText(v);toast(msg||'Copied.')}catch{toast('Press and hold the link to copy it.')}}function toast(t){const e=document.querySelector('.nw-share2-toast');if(e)e.textContent=t}
async function shareInvite(url){const payload={title:'NO WARNING — The Chemistry Test',text:'Your move. Take your side of NO WARNING — no peeking, one reveal.',url};if(navigator.share){try{await navigator.share(payload);toast('Invite sheet opened.')}catch(e){if(e.name!=='AbortError')clip(url,'Invite link copied.')}}else clip(url,'Invite link copied.')}
function enhanceLinks(){
 const sl=app.dataset.sl,rl=app.dataset.rl;if(!sl||!rl||document.querySelector('.nw-share2'))return;
 const cards=[...document.querySelectorAll('.challenge')];const anchor=cards.at(-1)?.parentElement||app.querySelector('.card');if(!anchor)return;
 const box=document.createElement('div');box.className='nw-share2';box.innerHTML='<span class="nw-share2-chip">Waiting room</span><h3>Share one link. Keep one link.</h3><div class="nw-share2-note">The Share Link is for Player 2. The Reveal Link stays with you until they finish.</div><div class="nw-share2-steps"><div class="nw-share2-step"><span class="nw-share2-num">1</span><div><b>Send the Share Link</b><div class="nw-share2-note">Player 2 answers privately and locks their side.</div></div></div><div class="nw-share2-step"><span class="nw-share2-num">2</span><div><b>Keep the Reveal Link private</b><div class="nw-share2-note">It is your shortcut back to the reveal status.</div></div></div><div class="nw-share2-step"><span class="nw-share2-num">3</span><div><b>Come back when they are done</b><div class="nw-share2-note">Open the Reveal Link and NO WARNING will check whether both sides are locked.</div></div></div></div><div class="nw-share2-actions"><button class="btn primary" data-nwshare>SHARE INVITE</button><button class="btn secondary" data-nwreveal>CHECK REVEAL STATUS</button></div><div class="nw-share2-toast"></div>';
 anchor.appendChild(box);
 box.querySelector('[data-nwshare]').onclick=()=>shareInvite(sl);
 box.querySelector('[data-nwreveal]').onclick=()=>location.href=rl;
 localStorage.setItem('nw_reveal',rl);
}
function enhanceRevealWait(){
 if(document.querySelector('.nw-share2-status'))return;
 const h=[...document.querySelectorAll('h2')].find(x=>(x.textContent||'').includes("HAVEN’T OWNED IT YET"));if(!h)return;
 const card=h.closest('.card');if(!card)return;const n=document.createElement('div');n.className='nw-share2 nw-share2-status';n.innerHTML='<span class="nw-share2-chip">Still waiting</span><div class="nw-share2-note" style="margin-top:8px">Nothing is missing. Player 2 just has not locked their side yet. You can leave this page and return with the same Reveal Link.</div>';card.appendChild(n);
}
function enhanceReady(){
 if(document.querySelector('.nw-share2-ready'))return;
 const h=[...document.querySelectorAll('h2')].find(x=>(x.textContent||'').includes('BOTH ANSWERS ARE LOCKED'));if(!h)return;
 const card=h.closest('.card');if(!card)return;const n=document.createElement('div');n.className='nw-share2 nw-share2-ready';n.innerHTML='<span class="nw-share2-chip">Reveal ready</span><div class="nw-share2-note" style="margin-top:8px">Both players are locked in. The next tap opens the shared chemistry reveal.</div>';card.insertBefore(n,card.querySelector('.tag')||card.lastChild);
}
new MutationObserver(()=>{enhanceLinks();enhanceRevealWait();enhanceReady()}).observe(app,{childList:true,subtree:true,attributes:true});enhanceLinks();enhanceRevealWait();enhanceReady();
})();