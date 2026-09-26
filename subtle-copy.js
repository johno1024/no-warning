(()=>{'use strict';const COPY=new Map([
['When you’re attracted to someone but keeping it casual, what gives you away first?','When you’re attracted to someone but neither of you has defined the vibe yet, what gives you away first?'],
['The vibe unexpectedly gets stronger. Your instinct?','The vibe unexpectedly gets stronger. Your instinct?'],
['For a friends-with-benefits vibe, how important is physical attraction?','When the vibe goes beyond friendship, how much does physical attraction matter?'],
['Your casual-flirting style is closest to…','When you’re interested, your flirting style is closest to…'],
['Which kinds of physical affection fit a casual connection for you?','Which kinds of physical affection feel natural when there’s clearly something there?'],
['Your ideal casual chemistry feels…','Your ideal chemistry feels…'],
['How private do you prefer physical affection in a FWB situation?','When there’s something going on between you two, how private do you like the affection to stay?'],
['What keeps a casual connection interesting beyond attraction?','What keeps you interested once attraction isn’t the only thing carrying the vibe?'],
['Which things matter even when you are keeping it casual?','Even when nobody’s putting a label on things, what still matters to you?'],
['If one person starts catching stronger feelings, what should happen?','If one person starts wanting something deeper, what should happen?'],
['What makes you feel wanted in a casual connection?','What makes it obvious to you that someone genuinely wants your attention?'],
['What kind of FWB chemistry is hardest for you to ignore?','What kind of chemistry is hardest for you to pretend you don’t notice?'],
['Which things would make a casual connection especially hard to resist?','Which things would make a connection especially hard to resist?'],
['Final one. The chemistry is obvious and you both want to keep it casual. What’s the ideal next move?','Final one. The chemistry is obvious, but neither of you is rushing to define it. What’s the ideal next move?']
]);
const TEXT=new Map([
['Your answers show where your casual chemistry overlaps and where your differences complement each other. This is descriptive, not a prediction of relationship success.','Your answers show where your chemistry overlaps and where your differences complement each other. This is descriptive, not a prediction of relationship success.'],
['You have meaningful overlap in what keeps a casual connection fun, comfortable and mutually wanted.','You have meaningful overlap in what keeps this connection fun, comfortable and mutually wanted.'],
['The reveal shows something neither of you could confirm beforehand: how closely your private expectations for a casual connection actually line up.','The reveal shows something neither of you could confirm beforehand: how closely your private expectations for this connection actually line up.']
]);
function polish(root=document){const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);for(const n of nodes){const t=n.nodeValue.trim();if(COPY.has(t))n.nodeValue=n.nodeValue.replace(t,COPY.get(t));else if(TEXT.has(t))n.nodeValue=n.nodeValue.replace(t,TEXT.get(t));}}
new MutationObserver(ms=>{for(const m of ms)for(const n of m.addedNodes)if(n.nodeType===1)polish(n)}).observe(document.documentElement,{childList:true,subtree:true});polish();})();