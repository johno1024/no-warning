(()=>{'use strict';
const BANK={
'Attraction':[['📸 PHOTO — TEMPTATION','Send a photo of something you’re wearing, somewhere you are, or one detail that captures the vibe you want next time. No explanation until they guess.'],['🎙️ VOICE — ONE THING','Send a 10–15 second voice note naming one physical detail about them that always gets your attention. End with: “Now you.”']],
'Flirting':[['💬 TEXT — FINISH THIS','Send: “If you were here right now, I’d probably…” Stop there. Make them finish the sentence before you reveal yours.'],['GIF — SAY IT WITHOUT SAYING IT','Send one GIF that captures exactly how one of their flirty answers made you feel. No caption until they react.']],
'Tension':[['🎥 VIDEO — READ MY FACE','Send a 5–10 second silent selfie video showing your reaction to one of their answers. They get three guesses.'],['🎙️ VOICE — AFTER HOURS','Send a 10–20 second voice note telling them something about them you find tempting but haven’t directly said yet. End with: “Your turn.”']],
'Affection':[['📸 PHOTO — YOUR SIDE','Send a photo of the spot beside you — couch, bed, car seat, wherever — with only: “Reserved?”'],['💬 TEXT — FAVORITE PART','Tell them your favorite non-explicit part of being physically close to them. Then ask for theirs.']],
'Mental Chemistry':[['🎙️ VOICE — NO FILTER','Send a voice note answering: “What about our vibe keeps this from feeling boring?” No overthinking.'],['💬 TEXT — DIFFERENT NOW','Send: “Tell me which answer made you look at me differently, include how and why. I’ll tell you mine after.”']],
'Connection':[['🎵 MUSIC — SOUNDTRACK US','Send one song representing your chemistry right now. Ask them to reply with 🔥 😏 ❤️ 👀 🤔 before you explain why.'],['💬 TEXT — KEEP / CHANGE','Send two lines: “One thing about our setup I’d keep exactly the same…” and “One thing I’d turn up…”']],
'Spontaneity':[['🎲 EMOJI — PICK YOUR MOVE','Send three emojis that represent three possible plans for your next link-up. They pick one without knowing what each means.'],['🎙️ VOICE — 60 SECONDS','Send a voice note with one spontaneous idea you’d actually be down for this week. Give them 60 seconds to answer yes, maybe, or hard pass.']]
};
const clean=s=>s.replace(/^[^A-Za-z]+/,'').trim();
function target(){
 const sections=[...document.querySelectorAll('.section')],play=sections.find(s=>s.querySelector('h3')?.textContent.includes('PLAY IT OUT'));
 if(!play||play.dataset.lowScore==='1')return;
 const dims=[...document.querySelectorAll('.dim')].map(el=>{const spans=el.querySelectorAll('span,strong');return{name:clean(spans[0]?.textContent||''),score:parseInt(spans[1]?.textContent)||0}}).filter(x=>BANK[x.name]);
 if(dims.length<3)return;
 const low=[...dims].sort((a,b)=>a.score-b.score).slice(0,3),pool=[];low.forEach(d=>BANK[d.name].forEach(x=>pool.push([d.name,...x])));
 const used=new Set(),items=[];for(const x of pool){const media=x[1].split(' — ')[0];if(!used.has(media)){items.push(x);used.add(media)}if(items.length===5)break}for(const x of pool){if(items.length===5)break;if(!items.includes(x))items.push(x)}
 play.dataset.lowScore='1';play.innerHTML='<h3>🔥 PLAY IT OUT</h3><p class="lede">Built to explore the chemistry with the most room to surprise you: <strong>'+low.map(x=>x.name+' '+x.score+'%').join(' • ')+'</strong></p>'+items.map(x=>'<div class="challenge"><strong>'+x[1]+'</strong>'+x[2]+'</div>').join('');
}
new MutationObserver(target).observe(document.getElementById('app'),{childList:true,subtree:true});target();
})();