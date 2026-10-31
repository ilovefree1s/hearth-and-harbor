/* crdice.js — the dice from Chain Reaction (web/template.html, Oct 26 2026 build),
   copied as they are in the game and wrapped to open as an overlay. Built by build.js. */
(function(){
"use strict";
var app=document.createElement('div');app.id='crdice';app.hidden=true;
document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(app)});
if(document.body)document.body.appendChild(app);
var st=document.createElement('style');st.textContent="#crdice .dicefield, .crview .dicefield { position: relative; flex: 1 1 auto; min-height: 300px;\n               touch-action: none; perspective: 900px; }#crdice .dicefield .die, .crview .dicefield .die { position: absolute; transform: translate(-50%, -50%); }#crdice .dicefield::before, .crview .dicefield::before {\n    content: \"\"; position: absolute; inset: 2px; border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.16); pointer-events: none;\n  }#crdice .dicetally, .crview .dicetally { text-align: center; margin: 0 0 6px; font-size: 15px; }#crdice .dicetally .who, .crview .dicetally .who { color: var(--sage); }#crdice .dicetally b, .crview .dicetally b { color: #fff; font-weight: 900; }#crdice .dicewin, .crview .dicewin { font-size: 20px; margin: 0 0 8px; }#crdice .dicegrab, .crview .dicegrab {\n    position: absolute; left: 0; right: 0; bottom: 6px; z-index: 1;\n    margin: 0; text-align: center; font-size: 14px; pointer-events: none;\n  }#crdice .throwline, .crview .throwline {\n    position: absolute; left: 7%; right: 7%; bottom: 50%; height: 0; z-index: 1;\n    border-top: 2px dashed rgba(77, 195, 255, 0.3); pointer-events: none;\n  }#crdice .throwline span, .crview .throwline span {\n    position: absolute; left: 50%; top: 8px; transform: translateX(-50%);\n    white-space: nowrap; font-size: 11px; font-weight: 900; letter-spacing: 2px;\n    text-transform: uppercase; color: rgba(77, 195, 255, 0.45);\n  }#crdice .dicefield.rolling .die, .crview .dicefield.rolling .die { transition: none; }#crdice .dicefield:not(.rolling) .die, .crview .dicefield:not(.rolling) .die {\n    transition: left 420ms cubic-bezier(0.3, 0.9, 0.3, 1),\n                top 420ms cubic-bezier(0.3, 0.9, 0.3, 1);\n  }#crdice .dicefield .die.set, .crview .dicefield .die.set { opacity: 0.72; transform: translate(-50%, -50%) scale(0.5); }#crdice .dicefield .die.held, .crview .dicefield .die.held { z-index: 2; will-change: transform;\n                         box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6),\n                                     0 0 18px rgba(77, 195, 255, 0.5); }#crdice .dicefield .die.held, .crview .dicefield .die.held, #crdice .dicefield.rolling .die.held, .crview .dicefield.rolling .die.held { transition: none; }#crdice .modal.sgcoin, .crview .modal.sgcoin, #crdice .modal.sgdice, .crview .modal.sgdice {\n    display: flex; flex-direction: column;\n    padding-bottom: calc(30px + env(safe-area-inset-bottom));\n  }#crdice .modal.sgcoin, .crview .modal.sgcoin { justify-content: flex-end; }#crdice .sgcoin .label, .crview .sgcoin .label { margin: 44px 0 auto; }#crdice .sgdice .label, .crview .sgdice .label { margin: 44px 0 12px; }#crdice .coinbox, .crview .coinbox { display: flex; justify-content: center; margin: 0; }#crdice .tossable, .crview .tossable { touch-action: none; cursor: grab; }#crdice .dicefield, .crview .dicefield, #crdice .coinbox, .crview .coinbox { user-select: none; -webkit-user-select: none; }#crdice .dicefield .die, .crview .dicefield .die { cursor: grab; }#crdice .dicefield .die.held, .crview .dicefield .die.held { cursor: grabbing; }#crdice .tossable.tossing, .crview .tossable.tossing { animation: cointoss 1200ms; }\n  @keyframes cointoss {\n    0% { transform: translateY(0); animation-timing-function: ease-out; }\n    50% { transform: translateY(var(--toss, -34vh)); animation-timing-function: ease-in; }\n    100% { transform: translateY(0); }\n  }#crdice .coin, .crview .coin {\n    position: relative;\n    width: min(56%, 200px); aspect-ratio: 1;\n    filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.55));\n  }#crdice .coin svg, .crview .coin svg { display: block; width: 100%; height: 100%; }#crdice .coin[data-face=\"HEADS\"] .ctails, .crview .coin[data-face=\"HEADS\"] .ctails, #crdice .coin[data-face=\"TAILS\"] .cheads, .crview .coin[data-face=\"TAILS\"] .cheads { display: none; }#crdice .coin.spinning, .crview .coin.spinning { animation: coinspin 150ms linear infinite; }\n  @keyframes coinspin { 50% { transform: scaleY(0.06); } }#crdice .die, .crview .die { width: 74px; height: 74px; perspective: 700px; }#crdice .cube, .crview .cube { position: absolute; inset: 0; transform-style: preserve-3d;\n          transition: transform 260ms ease-out; }#crdice .dicefield.rolling .cube, .crview .dicefield.rolling .cube { transition: none; }#crdice .face, .crview .face {\n    position: absolute; inset: 0; background: #F4F6FA; border-radius: 12px;\n    display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr);\n    padding: 11px; box-sizing: border-box; gap: 3px;\n  }#crdice .dicefield .die, .crview .dicefield .die { filter: drop-shadow(0 5px 9px rgba(0, 0, 0, 0.45)); }#crdice .dicefield:not(.rolling) .die, .crview .dicefield:not(.rolling) .die { border-radius: 13px; overflow: hidden; }#crdice .dicefield .die.flat, .crview .dicefield .die.flat { border-radius: 13px; overflow: hidden; }#crdice .face.f1, .crview .face.f1 { transform: translateZ(37px); }#crdice .face.f6, .crview .face.f6 { transform: rotateY(180deg) translateZ(37px); }#crdice .face.f3, .crview .face.f3 { transform: rotateY(90deg) translateZ(37px); }#crdice .face.f4, .crview .face.f4 { transform: rotateY(-90deg) translateZ(37px); }#crdice .face.f5, .crview .face.f5 { transform: rotateX(90deg) translateZ(37px); }#crdice .face.f2, .crview .face.f2 { transform: rotateX(-90deg) translateZ(37px); }#crdice .pip, .crview .pip { border-radius: 50%; }#crdice .pip.on, .crview .pip.on { background: #10182A; }#crdice .dicecount, .crview .dicecount { flex: 0 0 auto; min-width: 84px; text-align: center;\n               font-size: 18px; font-weight: 900; color: var(--sage); }#crdice .dicesteps, .crview .dicesteps {\n    position: absolute; right: 6px; top: calc(env(safe-area-inset-top) + 10px);\n    z-index: 2; height: var(--tap);\n    display: flex; align-items: center; gap: 5px;\n  }#crdice .dicesteps .step, .crview .dicesteps .step {\n    width: 36px; height: 36px; min-height: 36px; flex: 0 0 36px;\n    font-size: 20px; border-radius: 10px;\n  }#crdice .dicesteps .dicecount, .crview .dicesteps .dicecount { min-width: 44px; font-size: 13px; }"+"#crdice{position:fixed;inset:0;z-index:60;background:#0c1e25;color:#edf1ea;--sage:#9fc5b0;--self:#ffd23f;--tap:44px;\n  padding:calc(10px + env(safe-area-inset-top,0px)) 12px calc(14px + env(safe-area-inset-bottom,0px));box-sizing:border-box;touch-action:none}\n#crdice[hidden]{display:none}\n#crdice .crbox{height:100%;max-width:520px;margin:0 auto;display:flex;flex-direction:column}\n#crdice .crhead{position:relative;display:flex;align-items:center;justify-content:space-between;height:var(--tap)}\n#crdice .crx{background:none;border:1px solid rgba(255,255,255,.25);color:#edf1ea;border-radius:10px;padding:8px 14px;font-size:15px;font-weight:700;min-height:0}\n#crdice .crx:disabled{opacity:.35}\n#crdice .crlbl{font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--sage)}\n#crdice .sgtop{position:absolute;left:0;right:0;top:0;height:var(--tap);display:flex;align-items:center;justify-content:center;color:var(--self);font-size:30px;font-weight:900;pointer-events:none;font-variant-numeric:tabular-nums}\n#crdice .crhint{text-align:center;margin:8px 0 10px;font-size:14px;color:#fff;line-height:1.35}\n#crdice .dicefield{background:radial-gradient(ellipse at 50% 40%,#1f5a46,#123a2e);border-radius:14px;box-shadow:inset 0 0 40px rgba(0,0,0,.45)}\n#crdice .dicegrab{color:rgba(255,255,255,.75)}\n.crview{position:absolute;inset:0;z-index:5;pointer-events:none;transition:opacity .25s}\n.crview[hidden]{display:none}\n.crview.out{opacity:0}\n.crview .crvlbl{position:absolute;left:0;right:0;top:6px;z-index:3;text-align:center;font-size:14px;font-weight:800;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.9),0 0 8px rgba(0,0,0,.6);letter-spacing:.02em}\n.crview .crvlbl b{color:#ffd23f;font-size:17px;margin-left:4px}\n.crview .dicefield{position:absolute;inset:0;min-height:0;background:none}\n.crview .dicefield::before{display:none}\n.crview.flylayer{position:fixed;inset:0;z-index:70;transition:none}\n.crview.flylayer .flyw{position:absolute;will-change:left,top,transform}\n";
document.head.appendChild(st);
var landFn=null,secret=null,onDone=null,curdRoll=null,disputeCall=null;
var DICE_SOUND='dice.mp3';
function sfxVolume(){return 0.7}
function curdLocked(){return false}
function myDiceTurn(){return true}
function noteCurdRoll(){}
function sum(d){return d.vals.reduce(function(a,b){return a+b},0)}
function shareDiceRoll(d){
  if(!d||!allDiceSet(d)||d.sent)return;d.sent=true;
  var v=d.vals.slice(),cb=onDone;
  setTimeout(function(){if(!secret||secret.dice!==d)return;
    var lf=landFn,items=lf?landItems(app,d.vals.map(function(v,i){var o=dieRest(d,i);return {rot:o.z,scale:diceScale(d)*(d.parked&&d.parked.indexOf(i)!==-1?0.5:1)}})):null;
    close();if(cb)cb(v);if(lf&&items&&items.length)lf(items,v)},900);
}
function render(){
  if(!secret){app.hidden=true;app.innerHTML='';return}
  var d=secret.dice,done=allDiceSet(d)&&!d.rolling;
  app.hidden=false;
  app.innerHTML='<div class="crbox">'+
    '<div class="crhead">'+(d.sent?'<span></span>':'<button class="crx" data-cr="cancel"'+(d.rolling?' disabled':'')+'>Cancel</button>')+
    '<div class="sgtop">'+(d.rolling?'&hellip;':sum(d))+'</div><span class="crlbl">'+(d.sent?'You rolled':'Your roll')+'</span></div>'+
    '<p class="crhint">'+(d.sent?'&nbsp;':d.rolling?'&nbsp;':'Roll one die at a time, or drag one die on top of another to stack them and roll more than one')+'</p>'+
    '<div class="dicefield'+(d.rolling?' rolling':'')+'">'+
    (d.rolling||d.sent?'':'<div class="throwline"><span>Easy throw below here</span></div>')+
    diceFieldHtml(d)+
    (d.rolling||d.sent?'':'<p class="dicegrab">Grab the dice to flick or shake them</p>')+
    '</div></div>';
}
function close(){
  if(diceSim&&diceSim.raf)cancelAnimationFrame(diceSim.raf);
  diceSim=null;secret=null;onDone=null;castFn=null;landFn=null;render();
}
app.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('[data-cr="cancel"]');
  if(b&&secret&&!secret.dice.rolling&&!secret.dice.sent)close();
});
/* ===== sound (template.html 2520-2555) ===== */
var sliceCtx = null, sliceBuf = {};
function sliceReady(url) {
  if (!url) return null;
  if (!sliceCtx) {
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    sliceCtx = new Ctx();
  }
  // Phones suspend it until something is touched; every use follows a tap.
  if (sliceCtx.state === "suspended") sliceCtx.resume();
  if (sliceBuf[url] === undefined) {
    sliceBuf[url] = null;   // in flight — do not ask twice
    fetch(url).then(function (r) { return r.arrayBuffer(); })
      .then(function (b) { return sliceCtx.decodeAudioData(b); })
      .then(function (buf) { sliceBuf[url] = buf; })
      .catch(function () { sliceBuf[url] = null; });
  }
  return sliceBuf[url];
}
/* [delay] holds the sound back without holding the picture back: scheduled on
   the audio clock, so it is a real pause and not a timer that fires late. */
function playSlice(url, from, seconds, gain, loop, delay) {
  var buf = sliceReady(url);
  if (!buf || !(gain > 0)) return null;
  try {
    var src = sliceCtx.createBufferSource();
    src.buffer = buf;
    var g = sliceCtx.createGain();
    g.gain.value = gain;
    src.connect(g); g.connect(sliceCtx.destination);
    if (loop) { src.loop = true; src.loopStart = from; src.loopEnd = from + seconds; }
    src.start(sliceCtx.currentTime + (delay || 0), from, loop ? undefined : seconds);
    return src;
  } catch (e) { return null; }
}
function stopSlice(src) { if (src) { try { src.stop(); } catch (e) { /* done */ } } }
/* ===== handling the dice (template.html 8549-8896) ===== */
var COIN_THROW = 42;
/* Upward thumb speed, in pixels per millisecond, mapped onto 0..1. The floor is
   about the slowest movement that still reads as a throw; the ceiling is a hard
   flick, past which it cannot go any higher anyway. */
var COIN_SLOW = 0.25, COIN_FAST = 2.2;
/* A die has to be moving this fast to count as thrown rather than carried. Well
   clear of a brisk drag: the felt would be unusable if setting a die down at the
   top of it re-rolled the table. */
var DIE_FLICK = 0.55;
/* What it takes down in the throwing band, where a die is in hand to be thrown
   rather than arranged: barely more than a lift. */
var DIE_LOB = 0.12;
/* Carried over the line slower than this (px/ms) the dice are rolled out of the
   hand; faster, they are thrown. */
var DIE_GENTLE = 0.8;
var coinTouchY = null, coinDragEl = null;
var coinLastY = 0, coinLastT = 0, coinSpeed = 0;
/* Whether there is anything to throw right now, and what throwing it does. */
function tossTarget() {
  if (!secret) return null;
  // Only the phone that flips can flip: a watcher's swipe has nothing to throw.
  if (secret.mode === "coin" && !secret.coin.flipping) return iDeal() ? flipCoin : null;
  // The tray answers a phone that still has a throw to make. The Curd's own
  // roll is every player's, so it ignores the argument's bookkeeping.
  if (secret.mode === "dice" && !secret.dice.rolling) {
    if (curdLocked()) return rollDice;
    return myDiceTurn(secret.dice) ? rollDice : null;
  }
  return null;
}
/*
 * A die under the finger comes up with everything piled on it, and what happens
 * next depends on how you let go: slid somewhere and released, it stays there;
 * flicked upward, the whole set is thrown; released without having moved at all,
 * the die turns over to its next face.
 */
var dieDrag = null;
/* Everything close enough to the die at [i] to be part of the same pile, each
   remembered by where it starts in the field's own pixels. */
function dicePile(at, i, fb) {
  var out = [];
  var d = secret && secret.dice;
  for (var k = 0; k < at.length; k++) {
    // A die lying next to a set one picks up itself and nothing else.
    if (!dieFree(d, k)) continue;
    var sx = at[k].x / 100 * fb.width, sy = at[k].y / 100 * fb.height;
    var dx = sx - at[i].x / 100 * fb.width;
    var dy = sy - at[i].y / 100 * fb.height;
    if (Math.sqrt(dx * dx + dy * dy) <= 46) out.push({ i: k, sx: sx, sy: sy });
  }
  return out;
}
/* Pointer events, not touch: the same handful of listeners then serve a thumb on
   a phone and a mouse on a laptop, and the page is installable on both. */
/* Below the throw line the felt is for throwing, not for arranging: a flick
   there is a throw even if it happens to start on a die that has come to rest
   low down. Above it, a die under the finger is picked up as usual. */
function inThrowZone(y) {
  var f = app.querySelector(".dicefield");
  if (!f) return false;
  var r = f.getBoundingClientRect();
  // A band rather than a hard edge, with the dashed line through the middle of
  // it: a flick aimed at the line lands somewhere either side of it, and having
  // to start below an invisible boundary is exactly what made this fiddly.
  return y >= r.top + r.height * 0.42;
}
/* The dashed marker itself, not the band around it. Carrying a die up over this
   is the throw — waiting for the finger to lift as well meant a flick that ran
   off the top of the felt did nothing at all, which is most of what made these
   hard to roll. */
function pastThrowLine(y) {
  var f = app.querySelector(".dicefield");
  if (!f) return false;
  var r = f.getBoundingClientRect();
  return y < r.top + r.height * 0.5;
}
app.addEventListener("pointerdown", function (e) {
  if (!e.isPrimary || !tossTarget() || !e.target.closest) return;
  var die = e.target.closest(".die");
  // Every die is picked up, wherever it lies — how you let go is what decides
  // whether it was a throw. Sending band-dice down the felt path instead left
  // them unpickupable once the felt itself stopped being throwable.
  if (die && secret.mode === "dice") {
    var fieldEl = app.querySelector(".dicefield");
    if (!fieldEl) return;
    var field = fieldEl.getBoundingClientRect();
    var i = +die.getAttribute("data-die");
    // Set, with others still to throw: it stands, so it does not come up.
    if (!dieFree(secret.dice, i)) return;
    var dieW = die.getBoundingClientRect().width || 74;
    // Half of the die AS HELD: it is scaled up while carried, and clamping to
    // its resting size let a corner of it hang over the edge of the felt.
    dieDrag = { i: i, el: die, field: field, reach: dieW * 0.55,
                pile: dicePile(dicePlaces(secret.dice), i, field),
                x0: e.clientX, y0: e.clientY, moved: false,
                lastX: e.clientX, lastY: e.clientY, lastT: Date.now(), speed: 0,
                // Which side of the line the finger was on last, so a throw can
                // be spotted as the crossing itself. Not where the grab began:
                // the dice settle at the top of the felt, so after the first
                // roll every grab starts above the line and a rule about the
                // starting side would never let you throw again.
                wasBelow: !pastThrowLine(e.clientY),
                shakeX: e.clientX, shakeY: e.clientY,
                shakeDir: 0, turns: [], shaking: false };
    dieDrag.pile.forEach(function (g) {
      var el = fieldEl.querySelector('[data-die="' + g.i + '"]');
      g.el = el;
      // Picked up at the angle it was lying at, not squared up in the hand.
      g.z = dieRest(secret.dice, g.i).z;
      if (el) el.classList.add("held");
    });
    return;
  }
  var el = e.target.closest(".tossable");
  if (!el) return;
  coinTouchY = e.clientY;
  coinLastY = coinTouchY; coinLastT = Date.now(); coinSpeed = 0;
  coinDragEl = el;
});
// On window, so a drag that leaves the felt — or the screen — still tracks.
window.addEventListener("pointermove", function (e) {
  if (dieDrag) {
    var t = e, f = dieDrag.field, now = Date.now();
    var dt = now - dieDrag.lastT;
    if (dt > 0) {
      dieDrag.speed = (dieDrag.lastY - t.clientY) / dt; // upward is positive
      // Which way the hand is moving, smoothed over its last few moves so one
      // jittery sample does not decide where a throw goes.
      var lean = Math.min(1, dt / 60);
      dieDrag.dirX = (dieDrag.dirX || 0) + ((t.clientX - dieDrag.lastX) / dt - (dieDrag.dirX || 0)) * lean;
      dieDrag.dirY = (dieDrag.dirY || 0) + ((t.clientY - dieDrag.lastY) / dt - (dieDrag.dirY || 0)) * lean;
    }
    dieDrag.lastX = t.clientX; dieDrag.lastY = t.clientY; dieDrag.lastT = now;
    var dx = t.clientX - dieDrag.x0, dy = t.clientY - dieDrag.y0;
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) dieDrag.moved = true;
    dieShake(dieDrag, t.clientX, t.clientY, now);
    // Carried on transform rather than left/top: the finger gets a compositor
    // move per frame instead of a layout of the whole felt. Held inside the walls
    // as it goes — a die should not be able to leave the screen in your hand any
    // more than it can be thrown off it.
    var edge = dieDrag.reach;
    dieDrag.pile.forEach(function (g) {
      if (!g.el) return;
      g.nx = Math.max(edge, Math.min(f.width - edge, g.sx + dx));
      g.ny = Math.max(edge, Math.min(f.height - edge, g.sy + dy));
      g.el.style.transform = "translate(-50%, -50%) translate(" +
        (g.nx - g.sx).toFixed(1) + "px, " + (g.ny - g.sy).toFixed(1) + "px) rotate(" +
        (g.z || 0).toFixed(1) + "deg) scale(" + (1.1 * diceScale(secret.dice)).toFixed(3) + ")";
    });
    // Carrying a die up over the line is the throw, finger or no finger. The
    // crossing is what counts, so a die resting up top can be nudged around all
    // day without one — it only goes when it comes up from under the line.
    // Shaking is the one thing this is not: a rattle that wanders past the line
    // is still a rattle.
    var below = !pastThrowLine(t.clientY);
    if (dieDrag.wasBelow && !below && !dieDrag.shaking && dieDrag.speed > 0) {
      // Taken over slowly, the dice are rolled out of the hand; faster, thrown.
      dieDrag.launch = dieDrag.speed < DIE_GENTLE ? "roll" : "throw";
      dieDragEnd();
      return;
    }
    dieDrag.wasBelow = below;
    return;
  }
  if (coinTouchY == null || !coinDragEl) return;
  var y = e.clientY, now = Date.now();
  var dt = now - coinLastT;
  if (dt > 0) coinSpeed = (coinLastY - y) / dt; // upward is positive
  coinLastY = y; coinLastT = now;
  var dy = y - coinTouchY;
  // Downward gives a little and refuses: there is nowhere to throw a coin but up.
  if (dy > 0) dy /= 4;
  // The coin follows the thumb. The dice felt does not — dragging the whole
  // table around, dice and all, is not what a throwing gesture should look like.
  if (!coinDragEl.classList.contains("dicefield")) {
    coinDragEl.style.transform = "translateY(" + Math.max(dy, -150) + "px)";
  }
});
function coinDragEnd(dy) {
  var el = coinDragEl;
  coinTouchY = null; coinDragEl = null;
  if (!el) return;
  el.style.transform = "";
  if (dy > -COIN_THROW) return;
  // A thumb that stopped before letting go threw nothing, however fast it was
  // travelling a moment earlier.
  var speed = Date.now() - coinLastT > 90 ? 0 : coinSpeed;
  var bySpeed = (speed - COIN_SLOW) / (COIN_FAST - COIN_SLOW);
  // A long, deliberate pull is a throw too, even taken slowly — it just never
  // reaches the ceiling a flick does.
  var byPull = Math.min(1, Math.abs(dy) / 150) * 0.55;
  var throwIt = tossTarget();
  if (throwIt) throwIt(Math.max(bySpeed, byPull));
}
/*
 * Rattling the dice in your hand. Back and forth counts as a shake — three
 * changes of direction inside a second — and while it is going the dice in hand
 * keep turning up new numbers, the way they would in a fist. It stops when you
 * stop; whatever they are showing when you put them down is what they are.
 */
/*
 * Keeps the rattle alive while the hand is moving and kills it when it stops.
 * The loop plays until something stops it, and a finger resting on a die is
 * still holding it — without this the dice sat there rattling in a hand that
 * had gone still.
 *
 * A gap rather than a stop on every quiet frame: a shake is a series of moves
 * with pauses in it, and cutting on each one would be a stutter.
 */
function shakeAlive(g) {
  if (!g.shakeSound) {
    // Looped, and lifted well past the recording's own level: this half of it
    // peaks at about a ninth of the landing, which on a phone at arm's length
    // is nothing at all.
    g.shakeSound = playSlice(DICE_SOUND, 0, DICE_SHAKE_LEN, sfxVolume() * 4, true);
  }
  if (g.shakeIdle) clearTimeout(g.shakeIdle);
  g.shakeIdle = setTimeout(function () {
    shakeQuiet(g);
    g.shakeSound = null;
    g.shakeIdle = null;
  }, 160);
}
function shakeQuiet(g) {
  if (g.shakeIdle) { clearTimeout(g.shakeIdle); g.shakeIdle = null; }
  stopSlice(g.shakeSound);
  g.shakeSound = null;
}
function dieShake(g, x, y, now) {
  // A rattle is side to side and stays on one level. Gathering dice into a pile
  // is side to side too, but it travels — and a throw travels furthest of all.
  // Without telling those apart, the nudges that stack the dice latched the drag
  // as a shake for the rest of its life, and every flick after them went
  // nowhere until you let go and took hold again.
  // Raised from 44px. A rattle wanders upward all the time, and at 44 the shake
  // kept dropping out mid-gesture — measured over a two-second shake, a hard one
  // was rattling the dice twice where a gentle one managed fifteen times.
  if (g.shaking && g.shakeY != null && g.shakeY - y > 60) {
    g.shaking = false; g.turns = []; g.shakeDir = 0;
    shakeQuiet(g);
  }
  if (g.shaking) shakeAlive(g);
  if (Math.abs(x - (g.shakeX == null ? x : g.shakeX)) < 5) return;
  var dir = x > g.shakeX ? 1 : -1;
  g.shakeX = x;
  if (g.shakeDir && dir !== g.shakeDir) {
    /*
     * A reversal that also travels a long way up or down is aim, not a rattle,
     * and starts the count again. It has to be a long way: a hand shaking a
     * phone wanders the whole time, and at 30px an ordinary wobble threw away
     * every reversal counted so far — so the harder somebody shook, the less
     * likely it was to catch.
     */
    if (g.shakeY != null && Math.abs(y - g.shakeY) > 90) g.turns = [];
    g.turns = (g.turns || []).filter(function (t) { return now - t < 1200; });
    g.turns.push(now);
    g.shakeY = y;
    // Two is a shake. Three was a sentence you had to finish before the dice
    // would answer, and the window kept closing before you got there.
    if (g.turns.length >= 2) g.shaking = true;
  }
  g.shakeDir = dir;
  if (!g.shaking) return;
  shakeAlive(g);
  if (now - (g.rattled || 0) < 80) return;
  g.rattled = now;
  var d = secret && secret.dice;
  if (!d) return;
  g.pile.forEach(function (m) {
    var was = d.vals[m.i];
    // The turn it has on the felt, read before the number under it changes.
    var prior = d.face && d.face[m.i];
    var turned = prior && prior.v === was ? prior.z : 0;
    do { d.vals[m.i] = 1 + Math.floor(Math.random() * 6); } while (d.vals[m.i] === was);
    var face = DIE_FACING[d.vals[m.i]] || DIE_FACING[1];
    // Squared to its new number, still turned the way it was on the felt.
    if (!d.face) d.face = [];
    d.face[m.i] = { v: d.vals[m.i], x: face[0], y: face[1], z: turned };
    var cube = m.el && m.el.firstChild;
    if (cube) {
      // A knock of a few degrees off square, so a shaken die looks rattled rather
      // than neatly presented.
      cube.style.transition = "none";
      cube.style.transform = "rotateX(" + (face[0] + (Math.random() - 0.5) * 26) +
        "deg) rotateY(" + (face[1] + (Math.random() - 0.5) * 26) + "deg)";
    }
  });
  var top = app.querySelector(".sgtop");
  if (top) top.textContent = d.vals.reduce(function (a, b) { return a + b; }, 0);
}

function dieDragEnd() {
  if (!dieDrag) return;
  var d = secret && secret.dice, g = dieDrag;
  // Whatever the hand was doing, it has stopped doing it.
  stopSlice(g.shakeSound);
  g.pile.forEach(function (m) {
    if (m.el) { m.el.classList.remove("held"); m.el.style.transform = d ? dieRest(d, m.i).outer : ""; }
  });
  dieDrag = null;
  if (!d || d.rolling) { render(); return; }
  // A die that was shaken keeps whatever it was shaken onto, and is not thrown:
  // rattling something in your fist is not letting go of it.
  if (g.shaking) { render(); return; }
  // Put down without having gone anywhere. Nothing happens — a die is changed by
  // shaking it, not by being touched.
  if (!g.moved) { render(); return; }
  // Where the drag left them, which it has already kept inside the walls.
  var f = g.field, at = dicePlaces(d);
  g.pile.forEach(function (m) {
    if (!at[m.i] || m.nx == null) return;
    at[m.i].x = m.nx / f.width * 100;
    at[m.i].y = m.ny / f.height * 100;
    if (m.el) {
      m.el.style.left = at[m.i].x.toFixed(2) + "%";
      m.el.style.top = at[m.i].y.toFixed(2) + "%";
    }
  });
  // What was actually in the hand. A throw is no longer the whole tray, so it
  // has to say which dice went up.
  var inHand = g.pile.map(function (m) { return m.i; });
  // Already thrown, by crossing the line rather than by letting go.
  if (g.launch != null) { rollDice(g.launch, inHand, throwAim(g)); return; }
  // A flick: upward, and still moving as it was let go. Out in the open felt it
  // has to be a real one, because carrying a die across the table and setting it
  // down must not throw the lot. Down in the throwing band the dice are there to
  // be thrown, so a gentle lift is enough.
  var speed = Date.now() - g.lastT > 90 ? 0 : g.speed;
  var dy = g.lastY - g.y0, dx = Math.abs(g.lastX - g.x0);
  var nearLine = inThrowZone(g.y0) || inThrowZone(g.lastY);
  var needs = nearLine ? DIE_LOB : DIE_FLICK;
  if (dy <= (nearLine ? -16 : -COIN_THROW) && speed >= needs && dx < Math.abs(dy) * 1.6) {
    rollDice("throw", inHand, throwAim(g));
    return;
  }
  // Nothing to redraw: the dice are already where this left them.
}
window.addEventListener("pointerup", function (e) {
  if (dieDrag) { dieDragEnd(); return; }
  if (coinTouchY == null) return;
  coinDragEnd(e.clientY - coinTouchY);
});
// Android cancels the stream when it claims the drag; whatever was held settles.
window.addEventListener("pointercancel", function () {
  if (dieDrag) { dieDrag.moved = true; dieDragEnd(); return; }
  coinDragEnd(0);
});

/* ===== the dice (template.html 9275-10287) ===== */
/* ---- dice: a tray of 1-6 dice, rolled together ---- */
/* Which cells of a die face's 3x3 grid carry a pip, by value. */
var DIE_PIPS = {
  1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8]
};
/* Where the dice are lying, as percentages of the field so they keep their
   places on any screen. Unthrown, they wait in a row along the bottom. */
/*
 * Walks the given dice home, each to the slot on its own side of the felt. Die n
 * used to take slot n wherever it had landed, so a die that came down on the
 * right walked through the others to the left. The lowest-lying dice take the
 * lowest row, then each row is filled left to right in the order the dice lie,
 * so the paths run alongside each other instead of across.
 */
function sendHome(d, going, home) {
  var slots = going.map(function (q) { return home[q]; });
  var dice = going.map(function (q) { return { q: q, at: d.pos[q] || home[q] }; });
  slots.sort(function (a, b) { return (b.y - a.y) || (a.x - b.x); });
  dice.sort(function (a, b) { return (b.at.y - a.at.y) || (a.at.x - b.at.x); });
  var k = 0;
  while (k < slots.length) {
    var rowY = slots[k].y, rowSlots = [], rowDice = [];
    while (k < slots.length && Math.abs(slots[k].y - rowY) < 0.01) {
      rowSlots.push(slots[k]); rowDice.push(dice[k]); k++;
    }
    rowSlots.sort(function (a, b) { return a.x - b.x; });
    rowDice.sort(function (a, b) { return a.at.x - b.at.x; });
    for (var m = 0; m < rowSlots.length; m++) {
      d.pos[rowDice[m].q] = { x: rowSlots[m].x, y: rowSlots[m].y };
    }
  }
}
function diceHome(d) {
  var out = [];
  // Three to a row, stacked upward. Six dice will not fit across a phone in
  // one line — they would sit on top of each other before a throw.
  var cols = Math.min(3, d.count);
  // Spaced for dice lying at any angle: a corner pointed at a corner needs twice
  // the half-diagonal between centres, which is wider than a die. Measured
  // against the felt itself, so a narrow phone squeezes the row rather than
  // pushing its end dice off the edge; before the felt exists, a typical one.
  var fe = app.querySelector(".dicefield");
  var W = fe && fe.clientWidth ? fe.clientWidth : 360;
  var H = fe && fe.clientHeight ? fe.clientHeight : 640;
  var side = 74 * diceScale(d), clear = side * Math.SQRT2 + 3, reach = side * 0.708;
  var stepX = cols > 1 ? Math.min(clear, (W - 2 * reach) / (cols - 1)) : 0;
  var stepY = Math.max(clear, H * 0.17);
  for (var i = 0; i < d.count; i++) {
    out.push({ x: 50 + ((i % cols) - (cols - 1) / 2) * (stepX / W * 100),
               y: 86 - Math.floor(i / cols) * (stepY / H * 100) });
  }
  return out;
}
function dicePlaces(d) {
  if (!d.pos || d.pos.length !== d.count) d.pos = diceHome(d);
  return d.pos;
}
/*
 * A die that has been rolled stands until the rest have been. Held on the tray
 * so it survives a re-render, and cleared when the next throw starts a fresh
 * round of them.
 */
/*
 * How big the dice are drawn: full size up to three, then a tenth smaller for
 * each die past three. Six full-size dice do not fit across a phone, and piled
 * into a second row resting on the first they jammed against each other.
 */
function diceScale(d) {
  var n = (d && d.count) || 1;
  return n <= 3 ? 1 : Math.max(0.6, 1 - 0.1 * (n - 3));
}
function dieIsSet(d, i) { return !!d && !!d.set && d.set.indexOf(i) !== -1; }
/*
 * Rolled dice wait in the bottom-left corner, stacking up the left edge in the
 * order they were thrown. Out of the middle, which is where the rest are
 * thrown from, and out of the way of everything that shuffles the felt.
 */
function parkSetDice(d) {
  // A finished round leaves its parked dice where they are, still parked, until
  // the walk home collects them. Only a round in progress parks anything new.
  if (!d || !d.set || !d.pos || allDiceSet(d)) return;
  d.parked = d.set.slice();
  // Clear of the edge and of each other at whatever angle they lie: a half-size
  // die's corner reaches its half-diagonal from the centre. Against the real
  // felt, so a short phone does not stack them into each other.
  var fe = app.querySelector(".dicefield");
  var W = fe && fe.clientWidth ? fe.clientWidth : 360;
  var H = fe && fe.clientHeight ? fe.clientHeight : 640;
  var halfDiag = 37 * diceScale(d) * Math.SQRT2 / 2;
  var parkX = Math.max(8, (halfDiag + 3) / W * 100);
  var parkY = Math.min(92, 100 - (halfDiag + 3) / H * 100);
  var parkStep = Math.max(10, (halfDiag * 2 + 3) / H * 100);
  // Dice still to be thrown keep their places, and the stack climbs past any it
  // would otherwise sit on: the home row's end die stands right in this corner
  // until it has been thrown.
  var standing = [];
  for (var st = 0; st < d.count; st++) {
    if (d.set.indexOf(st) === -1 && d.pos[st]) standing.push(d.pos[st]);
  }
  var clearPx = halfDiag + 74 * diceScale(d) * Math.SQRT2 / 2 + 3;
  var cursor = parkY;
  function blocked(y) {
    return standing.some(function (p) {
      var gx = (p.x - parkX) / 100 * W, gy = (p.y - y) / 100 * H;
      return gx * gx + gy * gy < clearPx * clearPx;
    });
  }
  for (var k = 0; k < d.set.length; k++) {
    var i = d.set[k];
    for (var guard = 0; guard < 40 && blocked(cursor); guard++) cursor -= parkStep;
    // Tucked into the corner and stacked close: at half size the old spacing
    // left a column of gaps down the side of the felt.
    if (d.pos[i]) d.pos[i] = { x: parkX, y: cursor };
    cursor -= parkStep;
  }
}
function allDiceSet(d) { return !!d && d.count > 0 && ((d.set && d.set.length) || 0) >= d.count; }
/* Free to be thrown: not yet rolled, or every die has been and the next throw
   is a new round. */
function dieFree(d, i) { return allDiceSet(d) || !dieIsSet(d, i); }
/*
 * How a die at rest is drawn. Its turn on the felt goes on the die itself — a
 * resting die is clipped square to round its corners, and a cube turned inside
 * that square would lose its own corners to it — and the cube is tipped to the
 * number. Kept exactly as it landed when it did land, so it is not squared up,
 * or its pips given a quarter turn, the moment the throw is over.
 */
function dieRest(d, i) {
  var v = d.vals[i];
  var o = d.face && d.face[i];
  var x, y, z;
  if (o && o.v === v) { x = o.x; y = o.y; z = o.z; }
  else { var f = DIE_FACING[v] || DIE_FACING[1]; x = f[0]; y = f[1]; z = 0; }
  // Small while it sits in the corner — not merely while it is set, or the dice
  // there grow to full size the instant the round ends, still in the corner.
  var small = !!d.parked && d.parked.indexOf(i) !== -1;
  return {
    x: x, y: y, z: z,
    outer: "translate(-50%, -50%) rotate(" + z.toFixed(1) + "deg) scale(" + (diceScale(d) * (small ? 0.5 : 1)).toFixed(3) + ")",
    cube: "rotateX(" + x + "deg) rotateY(" + y + "deg)"
  };
}
/*
 * How a die on the felt turns. Rolling, it goes over the edge it is heading for at
 * the rate a cube rolls — a quarter turn for about every side's length it covers —
 * so it tumbles the way it is going. Too slow to get over the next edge, it is
 * pulled back down onto whichever face it is nearest and rocks there a little
 * before it sits. In between the two are mixed, so there is no moment it visibly
 * changes its mind; and momentum can still carry it past the tipping point, when
 * the nearest face is the next one — which is how dice fall.
 */
function turnOnFelt(b, speed, degPerPx, dt) {
  var carry = Math.max(0, Math.min(1, (speed - DIE_SETTLE) / (DIE_ROLL_FREE - DIE_SETTLE)));
  // Felt grips: a die going across it is made to roll the way it is going almost at
  // once. Taken slowly, it went on turning however the air had left it and slid.
  var follow = Math.min(1, 30 * dt);
  var rx = b.wx + (-b.vy * degPerPx - b.wx) * follow;
  var ry = b.wy + (b.vx * degPerPx - b.wy) * follow;
  var up = dieUp(b.m);
  var ax = up.y, ay = -up.x, al = Math.sqrt(ax * ax + ay * ay);
  var px = b.wx - DIE_TIP_C * b.wx * dt, py = b.wy - DIE_TIP_C * b.wy * dt;
  if (al > 1e-6) {
    px += DIE_TIP_K * up.tilt * (ax / al) * dt;
    py += DIE_TIP_K * up.tilt * (ay / al) * dt;
  }
  b.wx = carry * rx + (1 - carry) * px;
  b.wy = carry * ry + (1 - carry) * py;
}
/* Flat on a face, done rocking, barely turning, and on the felt. */
function dieAtRest(b, up) {
  return (b.h || 0) < 0.5 && Math.abs(b.vh || 0) < 1 && up.tilt < 0.8 &&
    Math.abs(b.wx) < 12 && Math.abs(b.wy) < 12 && Math.abs(b.wz) < 20;
}
/* Half a turned square's width, measured along a direction. */
function squareReach(deg, ax, ay, r) {
  var t = deg * Math.PI / 180, cs = Math.cos(t), sn = Math.sin(t);
  return r * (Math.abs(ax * cs + ay * sn) + Math.abs(ay * cs - ax * sn));
}
/*
 * Whether two dice overlap, and the shallowest way to part them: a direction
 * from a toward c, and how far. A die still tumbling has no settled outline,
 * so it is a disc a die wide. Two lying flat are the squares they are, turned
 * however they lie — a square's corner reaches well past a disc's edge, and at
 * rest that corner was sitting on top of the next die.
 */
function diceContact(a, c, r) {
  var dx = c.x - a.x, dy = c.y - a.y;
  if (a.flat && c.flat) {
    if (dx * dx + dy * dy >= 8 * r * r) return null; // past two half-diagonals
    var best = null, rots = [a.rot, c.rot];
    for (var k = 0; k < 4; k++) {
      var t = rots[k >> 1] * Math.PI / 180;
      var ax = k % 2 ? -Math.sin(t) : Math.cos(t), ay = k % 2 ? Math.cos(t) : Math.sin(t);
      var sep = dx * ax + dy * ay;
      var over = squareReach(a.rot, ax, ay, r) + squareReach(c.rot, ax, ay, r) - Math.abs(sep);
      if (over <= 0) return null;
      if (!best || over < best.depth) {
        best = { nx: sep < 0 ? -ax : ax, ny: sep < 0 ? -ay : ay, depth: over };
      }
    }
    return best;
  }
  var dist = Math.sqrt(dx * dx + dy * dy);
  if (dist >= r * 2) return null;
  if (dist < 0.01) { dx = 1; dy = 0; dist = 1; }
  return { nx: dx / dist, ny: dy / dist, depth: r * 2 - dist };
}
/*
 * Which number a die is showing, given how far it has been turned about each
 * axis. The faces sit at the six directions in the cube's own space; turning the
 * cube turns them with it, and whichever ends up pointing at the screen is the
 * one being read. Same order as the transform: rotateZ, then rotateX, then
 * rotateY.
 */
var DIE_NORMALS = [
  [1, 0, 0, 1], [6, 0, 0, -1], [3, 1, 0, 0], [4, -1, 0, 0], [5, 0, -1, 0], [2, 0, 1, 0]
];
/*
 * A rotation as nine numbers, row by row, in the axes CSS turns the cube in: x to
 * the right, y down, z toward whoever is looking. rotateX, rotateY and rotateZ are
 * m3rot about those axes, exactly.
 */
function m3rot(ax, ay, az, deg) {
  var len = Math.sqrt(ax * ax + ay * ay + az * az);
  if (len < 1e-9 || !deg) return [1, 0, 0, 0, 1, 0, 0, 0, 1];
  ax /= len; ay /= len; az /= len;
  var t = deg * Math.PI / 180, c = Math.cos(t), sn = Math.sin(t), k = 1 - c;
  return [
    c + ax * ax * k, ax * ay * k - az * sn, ax * az * k + ay * sn,
    ay * ax * k + az * sn, c + ay * ay * k, ay * az * k - ax * sn,
    az * ax * k - ay * sn, az * ay * k + ax * sn, c + az * az * k
  ];
}
function m3mul(a, b) {
  var o = new Array(9);
  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      o[r * 3 + c] = a[r * 3] * b[c] + a[r * 3 + 1] * b[3 + c] + a[r * 3 + 2] * b[6 + c];
    }
  }
  return o;
}
function m3T(a) { return [a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]]; }
/* Squared back up into a rotation: a throw is hundreds of small turns, and the
   rounding in each would otherwise skew the cube over its length. */
function m3fix(m) {
  var ax = m[0], ay = m[3], az = m[6], la = Math.sqrt(ax * ax + ay * ay + az * az) || 1;
  ax /= la; ay /= la; az /= la;
  var bx = m[1], by = m[4], bz = m[7], dp = ax * bx + ay * by + az * bz;
  bx -= dp * ax; by -= dp * ay; bz -= dp * az;
  var lb = Math.sqrt(bx * bx + by * by + bz * bz) || 1;
  bx /= lb; by /= lb; bz /= lb;
  return [ax, bx, ay * bz - az * by, ay, by, az * bx - ax * bz, az, bz, ax * by - ay * bx];
}
function m3css(m) {
  return "matrix3d(" + [m[0], m[3], m[6], 0, m[1], m[4], m[7], 0, m[2], m[5], m[8], 0, 0, 0, 0, 1]
    .map(function (n) { return n.toFixed(5); }).join(",") + ")";
}
/* The face turned most toward you, where its middle points, and how far it leans
   off facing you square, in degrees. */
function dieUp(m) {
  var best = null;
  for (var i = 0; i < DIE_NORMALS.length; i++) {
    var n = DIE_NORMALS[i];
    var z = m[6] * n[1] + m[7] * n[2] + m[8] * n[3];
    if (!best || z > best.z) {
      best = { face: n[0], x: m[0] * n[1] + m[1] * n[2] + m[2] * n[3],
               y: m[3] * n[1] + m[4] * n[2] + m[5] * n[3], z: z };
    }
  }
  best.tilt = Math.acos(Math.max(-1, Math.min(1, best.z))) * 180 / Math.PI;
  return best;
}
/* How far a die showing this face is turned on the felt, measured from the way
   that face is drawn at rest. */
function dieTurn(m, face) {
  var f = DIE_FACING[face] || DIE_FACING[1];
  var lay = m3mul(m, m3T(m3mul(m3rot(1, 0, 0, f[0]), m3rot(0, 1, 0, f[1]))));
  return Math.atan2(lay[3], lay[0]) * 180 / Math.PI;
}
/*
 * An orientation picked evenly from every way a cube can be turned. Two random
 * angles one after the other are not that: the faces on the second axis end up
 * facing you more often, and over 810 dice fives and twos came up a quarter again
 * as often as sixes and threes.
 */
function dieAnyTurn() {
  var u1 = Math.random(), u2 = Math.random() * 2 * Math.PI, u3 = Math.random() * 2 * Math.PI;
  var a = Math.sqrt(1 - u1), c = Math.sqrt(u1);
  var x = a * Math.sin(u2), y = a * Math.cos(u2), z = c * Math.sin(u3), w = c * Math.cos(u3);
  return [
    1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w),
    2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w),
    2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)
  ];
}

/* Which way up a die has to be for a given number to face you. Opposite sides of
   a real die sum to seven, so naming three of them fixes the other three. */
var DIE_FACING = { 1: [0, 0], 6: [0, 180], 3: [0, -90], 4: [0, 90], 5: [-90, 0], 2: [90, 0] };

function dieFacesHtml() {
  var out = "";
  for (var v = 1; v <= 6; v++) {
    var pips = "";
    for (var p = 0; p < 9; p++) {
      pips += '<span class="pip' + (DIE_PIPS[v].indexOf(p) !== -1 ? " on" : "") + '"></span>';
    }
    out += '<div class="face f' + v + '">' + pips + '</div>';
  }
  return out;
}

function diceFieldHtml(d) {
  var at = dicePlaces(d);
  return d.vals.map(function (v, i) {
    // Mid-throw the simulation owns where each die is, and writes it as a
    // transform. The resting left/top has to go, not be overridden: it is inline,
    // and no stylesheet rule can outrank that — the transform was landing on top
    // of it, so every throw was offset by wherever the die had been sitting.
    // Mid-throw only the dice actually thrown hand their placement over to the
    // simulation; the ones standing stay exactly where they landed. Read off
    // the tray rather than the simulation, which does not exist yet at the
    // render that starts the throw.
    var flying = d.rolling && (!d.flying || d.flying.indexOf(i) !== -1);
    var place = flying ? 'left:0;top:0'
      : 'left:' + at[i].x.toFixed(2) + '%;top:' + at[i].y.toFixed(2) + '%';
    // Every face is always there, carrying its own number. Nothing rewrites pips
    // any more — the die is simply turned until the right side is toward you.
    var rest = dieRest(d, i);
    return '<div class="die' + (d.parked && d.parked.indexOf(i) !== -1 ? " set" : "") +
      '" data-die="' + i + '" style="' + place + ';transform:' + rest.outer + '">' +
      '<div class="cube" style="transform:' + rest.cube + '">' + dieFacesHtml() + '</div></div>';
  }).join("");
}
/* Where the table has got to, for whoever is looking at the tray. */
function curdRollHint() {
  if (!curdRoll || !state) return "";
  var mine = curdRoll.rolls[myRoundName()];
  var left = curdWaiting();
  if (curdRoll.done || !left.length) return "Everybody has rolled.";
  // Tied and owed another throw: say that, not the opening instruction again.
  var again = curdRoll.round > 0 && !mine &&
    left.some(function (n) { return n.trim().toLowerCase() === myRoundName(); });
  return (mine ? "You rolled " + mine.total + ". "
      : again ? "Tied lowest &mdash; roll again. "
      : "The Curd! &mdash; roll 2. ") +
    "Waiting on " + esc(sayNames(left)) + ".";
}

function renderDiceGame() {
  var d = secret.dice;
  var total = d.vals.reduce(function (a, b) { return a + b; }, 0);
  var seats = diceSeats(), tally = d.tally || {}, waiting = diceWaiting(d);
  return '<div class="modal sgscreen sgdice">' +
    '<button class="sgback" data-act="secretBack">&lsaquo;&nbsp;&nbsp;Back</button>' +
    // The total rides the Back button's line, the way the coin's call does.
    '<div class="sgtop">' + (d.rolling ? "&hellip;" : total) + '</div>' +
    '<div class="label">Dice</div>' +
    // Opposite Back, on its own line, out of the felt the dice need.
    '<div class="dicesteps">' +
    '<button class="step" data-act="diceLess"' +
      (d.count <= 1 || d.rolling || curdLocked() || !myDiceTurn(d) ? " disabled" : "") +
      '>&minus;</button>' +
    '<div class="dicecount">' + d.count + (d.count === 1 ? " die" : " dice") + '</div>' +
    '<button class="step" data-act="diceMore"' +
      (d.count >= 6 || d.rolling || curdLocked() || !myDiceTurn(d) ? " disabled" : "") +
      '>+</button></div>' +
    /* Rolling for the lid, the tray says where the table has got to: your own
       total once it has landed, and who has still to throw. Without it the
       last three players are sitting in a dice tray with nothing to say when
       it closes itself. */
    // Every total in the argument, kept up until the last throw is in, and then
    // the answer under them.
    (seats.length
      ? '<p class="hint dicetally">' + seats.map(function (nm) {
          var e = tally[diceKey(nm)];
          return '<span class="who">' + esc(nm) + '</span> ' +
            (e ? '<b>' + e.total + '</b>' : '&mdash;');
        }).join(' &nbsp;&middot;&nbsp; ') + '</p>' +
        (d.winner ? '<div class="exempt dicewin">' + esc(d.winner) + '</div>' : "")
      : "") +
    '<p class="hint" style="text-align:center;margin:0 0 8px">' +
    (curdRollHint() ||
      (d.rolling ? "&nbsp;"
        : seats.length
          ? (myDiceTurn(d)
              ? '<span class="read">Your roll &mdash; one each</span>'
              : waiting.length
                ? "Waiting on " + esc(sayNames(waiting))
                : "&nbsp;")
        : '<span class="read">Roll one die at a time, or drag one die ' +
          'on top of another to stack them and roll more than one</span>')) +
    '</p>' +
    // Not tossable: swiping the felt itself does nothing. You throw dice by
    // having hold of them, the way you would off a table.
    '<div class="dicefield' + (d.rolling ? " rolling" : "") + '">' +
    // Everything under the line is a throwing area, so a flick never has to find
    // a die to land on. Hidden while they are in the air; there is nothing to
    // throw mid-throw.
    (d.rolling ? "" : '<div class="throwline"><span>Easy throw below here</span></div>') +
    diceFieldHtml(d) +
    // On the felt, along its bottom edge under the dice. The line above the
    // felt is the one that has to be read first.
    // Only on the tray that can actually be thrown.
    (d.rolling || !(curdLocked() || myDiceTurn(d)) ? ""
      : '<p class="hint dicegrab">Grab the dice to flick or shake them</p>') +
    '</div></div>';
}
/*
 * A throw is handed to a physics loop and left alone: the dice carry the speed
 * your flick gave them, are dragged by the felt, bounce off the walls and off
 * each other, and stop when they have nothing left. Nothing decides where they
 * land.
 *
 * There is no pull toward any side of the screen. There used to be one toward
 * the top, so every throw ended against the far rail; it made a die that had
 * tipped flat carry on sliding uphill, which is not a thing dice on a table do.
 * A throw now goes where the flick sends it and stops where the felt stops it.
 *
 * The numbers are in pixels and seconds. DIE_FRICTION is how hard the felt
 * slows a die, in px/s².
 */
/*
 * dice.mp3 is two sounds end to end: a rattle for the first 1.13 seconds, then
 * four impacts as they land. There is a dead patch between them — nothing above
 * 5% of peak from 1.10 to 1.13 — so the cut falls there and neither half is
 * clipped. No second file to fetch: the clip is simply started in two places.
 *
 * The rattle is quiet, about a ninth of the landing's peak, so it is played
 * loud. It cannot go past the file's own level — properly matching them means
 * lifting that half in the recording itself.
 */
var DICE_SHAKE_LEN = 1.13, DICE_ROLL_AT = 1.13, DICE_ROLL_LEN = 0.62;
var DICE_ROLL_WAIT = 0.4;   // silence before the dice are heard to land
// Light air, so a die tumbles and bounces freely while it is up: DIE_AIR is taken
// every physics step, 120 a second, and 0.995 was losing half a throw's speed
// each second to the air alone. Light felt too, now that throws leave the hand
// slowly enough to spend their movement on the felt rather than slamming into the
// far wall: thrown at speed across a felt this size, a die hit the wall inside a
// fraction of a second and the whole throw played like fast-forward. The wall
// gives back a little of a hit, and the clack onto each face (DIE_CLACK) is what
// keeps a die from rolling on like a ball.
var DIE_FRICTION = 281, DIE_BOUNCE = 0.30, DIE_FLOOR_DRAG = 0.82, DIE_AIR = 0.9997;
/* The physics steps in fixed slices of time, however often the screen redraws;
   a throw has landed once every die has been still for DIE_STILL_STEPS of them. */
var DIE_STEP = 1 / 120, DIE_STILL_STEPS = 16;
/*
 * Up and down. DIE_HOP_G pulls a die in the air back to the felt; DIE_HOP_BOUNCE
 * is how much of its fall it keeps on the way back up; under DIE_HOP_MIN it just
 * lands. DIE_HOP_SCALE is how much larger it is drawn per pixel of height.
 */
// Quicker and lower than it was: gravity a fourteenth of its size at this scale
// had every bounce hanging in the air. Felt gives back less of a fall than that.
// Gravity softer than 9000, which made every hop a quick snap and, with fast
// throws, read as a throw in fast motion; above the 3200 that had bounces hanging
// in the air. A flick comes down about five times.
//
// The pace of a throw is set as a whole. At 4000, with throws to match, it read as
// slow motion; everything that is a speed was then taken up a quarter and
// everything that is an acceleration by that squared (gravity, friction, the tip
// onto a face), which plays the same throw — same path, same bounces, same turns —
// a quarter faster. Change one of these alone and the throw changes shape instead.
var DIE_HOP_G = 6250, DIE_HOP_BOUNCE = 0.6, DIE_HOP_MIN = 69, DIE_HOP_SCALE = 0.0022;
/* What a rolling die keeps each time it clacks down onto a new face. A cube does
   not roll far: each face it goes over onto takes a good part of what it had. */
var DIE_CLACK = 0.95;
/*
 * The two throws. lift is how fast it leaves the hand up the felt (px/s) and spread
 * how much that varies; side is the sideways scatter; hop how fast it rises off the
 * felt; turn how fast it goes over, as a multiple of rolling along at that speed;
 * wobble a sideways tumble on top; twirl its spin on the felt (deg/s).
 */
var DIE_THROWS = {
  // Carried slowly over the line: rolled out of the hand, low, going over a few
  // times up the felt before it stops.
  roll: { lift: 650, spread: 0.12, side: 250, hop: 475, turn: 1.2, wobble: 166, twirl: 360 },
  // Flicked: thrown hard, off the felt, bouncing and tumbling, then rolling out.
  // Hard for a felt the size of a phone: at 1950 it crossed the whole felt in
  // under half a second and spun three times a second.
  throw: { lift: 938, spread: 0.12, side: 750, hop: 1438, turn: 1.2, wobble: 360, twirl: 570 }
};
/* How fast the air takes a tumble away, per second. Without it a die turned over
   at full rate for as long as it was off the felt. */
var DIE_TURN_DRAG = 0.313;
/*
 * How a die comes to rest on a face. Rolling fast it goes over edge after edge
 * with the ground it covers; below DIE_ROLL_FREE it starts running out of the
 * energy to get over the next one, and by DIE_SETTLE gravity has it — pulled
 * down onto whichever face it is nearest, rocking a little before it sits. The
 * pull is a damped spring in degrees: DIE_TIP_K how hard, DIE_TIP_C how fast the
 * rocking dies away. Speeds are the same |vx| + |vy| the simulation counts in.
 */
// A softer spring than it had: the last tip onto a face is slower and eases in,
// so a die visibly winds down onto its number rather than snapping to it.
// Rolls on down to a slower speed before it gives up and tips: stopped at 360, a
// die went over about one face on the felt and settled; now it goes over about two.
var DIE_ROLL_FREE = 150, DIE_SETTLE = 56, DIE_TIP_K = 313, DIE_TIP_C = 21.3;
/* Dice meeting slower than this are resting against each other, not colliding:
   what each was carrying into the other is taken away rather than bounced. */
var DIE_REST_CONTACT = 113;
var diceSim = null;

/* How far either side of straight up a throw can be aimed, in degrees. */
var DIE_AIM_MAX = 65;
/*
 * The way a throw goes, from the way the hand was moving as it threw: kept going
 * up the felt, tipped toward whichever side the hand was heading, as far as
 * DIE_AIM_MAX from straight up. A hand barely moving throws straight up.
 */
function throwAim(g) {
  var x = (g && g.dirX) || 0, y = Math.min(0, (g && g.dirY) || 0);
  if (Math.abs(x) + Math.abs(y) < 0.05) return { x: 0, y: -1 };
  var ang = Math.atan2(x, -y) * 180 / Math.PI; // 0 is straight up, positive to the right
  ang = Math.max(-DIE_AIM_MAX, Math.min(DIE_AIM_MAX, ang)) * Math.PI / 180;
  return { x: Math.sin(ang), y: -Math.cos(ang) };
}
function rollDice(kind, which, aim) {
  var d = secret && secret.dice;
  if (!d || d.rolling) return;
  /*
   * In an argument, everybody in it throws — once each, on their own phone.
   * The Curd is untouched: that card has the whole table rolling for the lid
   * and keeps its own rules.
   */
  if (!curdLocked() && !myDiceTurn(d)) return;
  // Every die has stood: this throw starts them over. Any still sitting in the
  // corner from the round just finished come home first — thrown from where
  // they were parked they started jammed against each other and the wall, and
  // the throw spent seconds prising them apart. A die in the hand is thrown
  // from wherever the finger took it.
  if (!d.set || allDiceSet(d)) {
    if (d.parked && d.parked.length) {
      var homeAt = diceHome(d), lay = dicePlaces(d);
      d.parked.forEach(function (p) {
        if (!which || which.indexOf(p) === -1) lay[p] = homeAt[p];
      });
    }
    d.parked = [];
    d.set = [];
  }
  var live = [];
  for (var q = 0; q < d.count; q++) if (d.set.indexOf(q) === -1) live.push(q);
  // Thrown from the hand, only what was in it — and never a die that stands.
  if (which && which.length) {
    live = live.filter(function (q) { return which.indexOf(q) !== -1; });
  }
  if (!live.length) return;
  // Set before anything is drawn: the render below is the one that hands the
  // thrown dice to the simulation, and it has to know which those are.
  d.flying = live;
  // Two throws, not a range of them: "roll" when the dice were carried slowly
  // over the line, and anything else is thrown. Any force in between made every
  // throw a little different and none of them tunable to look right.
  var P = DIE_THROWS[kind === "roll" ? "roll" : "throw"];
  // Which way up the felt it goes; straight up when nobody said.
  var dir = aim && (aim.x || aim.y) ? aim : { x: 0, y: -1 };
  d.rolling = true;
  // A beat of nothing first: the dice are still leaving the hand when the throw
  // starts, and a landing that lands before they have gone anywhere is a noise
  // rather than an event.
  playSlice(DICE_SOUND, DICE_ROLL_AT, DICE_ROLL_LEN, sfxVolume(), false, DICE_ROLL_WAIT);
  render(); // once, into the rolling state; the loop owns them after this
  var fieldEl = app.querySelector(".dicefield");
  if (!fieldEl) { d.rolling = false; d.flying = null; render(); return; }
  var fb = fieldEl.getBoundingClientRect();
  // Measured off a die that is actually being thrown. The first die in the tray
  // can be one already standing, drawn at half size, and a simulation sized off
  // it put the walls half a die too close and let the real dice hang off the felt.
  var first = fieldEl.querySelector('[data-die="' + live[0] + '"]') || fieldEl.querySelector(".die");
  // The die's own width times the scale it is drawn at. Its on-screen box is no
  // good for this any more: a die lying turned has a box up to 41% wider than it.
  var size = (first ? first.offsetWidth : 74) * diceScale(d);
  // A tumbling die is a square, and a square on its corner is wider than its
  // side: half its diagonal is what has to clear the wall, or it visibly cuts
  // through the edge of the screen on the way past.
  var reach = size * 0.708;
  var at = dicePlaces(d);
  // Away from you and slightly outward, never all exactly alike — dice thrown from
  // one hand do not leave it in formation.
  var rate = 76.5 / size;
  var bodies = [];
  for (var n = 0; n < live.length; n++) {
    var i = live[n];
    var start = dieRest(d, i);
    // Along the way the hand was going, with the scatter across it.
    var along = P.lift * (1 - P.spread + Math.random() * 2 * P.spread);
    var across = (Math.random() - 0.5) * P.side;
    var vx0 = dir.x * along - dir.y * across;
    var vy0 = dir.y * along + dir.x * across;
    var spinF = P.turn * (0.85 + Math.random() * 0.3);
    bodies.push({
      x: at[i].x / 100 * fb.width, y: at[i].y / 100 * fb.height,
      vx: vx0,
      vy: vy0,
      rot: start.z,
      // Where its faces point: its turn on the felt as it lay, and a random start
      // through the faces, which is what keeps a soft throw from landing on the
      // face it left on.
      m: m3mul(m3rot(0, 0, 1, start.z), dieAnyTurn()),
      // How it is turning, about the screen's own axes: mostly over and over the
      // way it was thrown, a little sideways, and a twirl.
      wx: -vy0 * rate * spinF,
      wy: vx0 * rate * spinF + (Math.random() - 0.5) * P.wobble,
      wz: (Math.random() - 0.5) * P.twirl,
      upFace: null,
      // It leaves the hand rising, to come down and bounce.
      h: 0, vh: P.hop * (0.85 + Math.random() * 0.3),
      face: 0
    });
  }
  diceSim = { bodies: bodies, field: fieldEl, w: fb.width, h: fb.height,
              r: size / 2, reach: reach, last: 0, still: 0, raf: 0, d: d,
              // Degrees a die turns over per pixel it rolls: a quarter turn per
              // side's length, less a little for the slip of felt.
              rollRate: 76.5 / size,
              // Body n is die live[n]. They stopped being the same thing the
              // moment a throw could be part of the tray rather than all of it.
              live: live };
  // Drawn where they start before the browser paints: the render above left the
  // thrown dice at the felt's corner for the simulation to place, and waiting for
  // its first frame could show them there for one.
  drawDiceSim(diceSim);
  diceSim.raf = requestAnimationFrame(diceStep);
  castStart(diceSim);
}

/*
 * The felt a throw is being drawn on. Looked up again whenever the one it had has
 * left the page: anything that repaints mid-throw — a phone at the table checking
 * in, a turn passed, a banner fading — builds a new felt, and a simulation still
 * writing to the old one moved dice nobody could see. The dice on screen sat
 * frozen, a flying one drawn from the felt's top-left corner, until the throw
 * ended and they jumped to where it had landed.
 */
function simField(sim) {
  if (!sim.field.isConnected) {
    var fresh = app.querySelector(".dicefield");
    if (fresh) sim.field = fresh;
  }
  return sim.field;
}
/* Each thrown die where the simulation has it. Run every frame, and straight after
   any repaint during a throw, so a rebuilt felt never shows a die out of place. */
function drawDiceSim(sim) {
  var field = simField(sim);
  for (var i = 0; i < sim.bodies.length; i++) {
    var b = sim.bodies[i];
    var el = field.querySelector('[data-die="' + sim.live[i] + '"]');
    if (!el) continue;
    el.classList.toggle("flat", !!b.flat);
    var turn = b.flat ? b.rot : 0;
    el.style.transform = "translate(" + b.x.toFixed(1) + "px, " + b.y.toFixed(1) +
      "px) translate(-50%, -50%)" + (b.flat ? " rotate(" + turn.toFixed(1) + "deg)" : "") +
      " scale(" + (diceScale(sim.d) * (1 + (b.h || 0) * DIE_HOP_SCALE)).toFixed(3) + ")";
    // Off the felt it is nearer the eye, and its shadow falls further from it.
    el.style.filter = b.h > 0.5
      ? "drop-shadow(0 " + (5 + b.h * 0.14).toFixed(1) + "px " + (9 + b.h * 0.12).toFixed(1) +
        "px rgba(0, 0, 0, " + Math.max(0.22, 0.45 - b.h * 0.0012).toFixed(2) + "))"
      : "";
    var cube = el.firstChild;
    if (cube) cube.style.transform = m3css(b.flat ? m3mul(m3rot(0, 0, 1, -turn), b.m) : b.m);
  }
}

function diceStep(now) {
  var sim = diceSim;
  if (!sim || !secret || secret.mode !== "dice") {
    // Abandoned mid-throw. Whatever the dice were doing, they are not doing it
    // any more, and a tray left rolling is a tray nobody can touch again.
    if (sim && sim.d) { sim.d.rolling = false; sim.d.flying = null; }
    diceSim = null;
    return;
  }
  // The first frame has no previous one to measure against, and a tab left in
  // the background hands back a gap of seconds — either would teleport them.
  var frameDt = sim.last ? Math.min(0.1, (now - sim.last) / 1000) : DIE_STEP;
  sim.last = now;
  // The walls are re-measured every frame, before anything is written. Measuring
  // once at the throw left the simulation playing in a world 15px wider than the
  // felt actually was — the layout settles a moment after the render that starts
  // it — and dice were bouncing off walls that were not where the screen was.
  var fr = simField(sim).getBoundingClientRect();
  if (fr.width > 0) { sim.w = fr.width; sim.h = fr.height; }
  var b, i, j, bodies = sim.bodies, r = sim.r, w = sim.reach, moving;
  /*
   * The physics runs in fixed steps of DIE_STEP however often the screen redraws,
   * and the dice are drawn once at the end of the frame. Stepped once a frame,
   * several of its drags and turns were taken per frame rather than per second:
   * the same throw went over more faces at 60 frames a second than at 120, and at
   * 30 it never came to rest at all.
   */
  sim.acc = (sim.acc || 0) + frameDt;
  var steps = 0;
  while (sim.acc >= DIE_STEP && steps < 12) {
  var dt = DIE_STEP;
  sim.acc -= DIE_STEP;
  steps++;
  moving = 0;

  for (i = 0; i < bodies.length; i++) {
    b = bodies[i];
    // Up and down. It leaves the hand rising, comes down on the felt and bounces,
    // each landing lower than the last, each scuffing its speed and knocking its
    // tumble. Without this a die only ever slid, and could only turn over by
    // rolling along.
    if (b.h > 0 || b.vh > 0) {
      b.vh -= DIE_HOP_G * dt;
      b.h += b.vh * dt;
      if (b.h <= 0) {
        var impact = -b.vh;
        b.h = 0;
        if (impact > DIE_HOP_MIN) {
          b.vh = impact * DIE_HOP_BOUNCE;
          b.vx *= 0.86; b.vy *= 0.86;
          // A landing knocks the tumble about, but takes more off it than it adds:
          // dice wind down bounce by bounce rather than spinning up off the felt.
          // Coming down, the felt catches it: most of how it was turning becomes
          // rolling the way it is going, and only a little is knocked about.
          b.wx += (-b.vy * sim.rollRate - b.wx) * 0.6 + (Math.random() - 0.5) * impact * 0.2;
          b.wy += (b.vx * sim.rollRate - b.wy) * 0.6 + (Math.random() - 0.5) * impact * 0.15;
          b.wz += (Math.random() - 0.5) * impact * 0.2;
        } else {
          b.vh = 0;
        }
      }
    }
    // The felt drags it to a stop wherever it is, the same pull whichever way it
    // is going — but only while it is on the felt. It used to be pulled toward
    // the top of the screen as well, and a die that had tipped flat went on
    // gliding up the felt as if it were running downhill.
    var glide = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    if (b.h <= 0 && glide > 0) {
      var slow = Math.min(glide, DIE_FRICTION * dt);
      b.vx -= b.vx / glide * slow; b.vy -= b.vy / glide * slow;
    }
    b.vx *= DIE_AIR; b.vy *= DIE_AIR;
    b.x += b.vx * dt; b.y += b.vy * dt;
    b.wz *= 0.988;
    // Walls. A die hitting one loses most of what it had and is turned around.
    if (b.x < w) { b.x = w; b.vx = Math.abs(b.vx) * DIE_BOUNCE; b.wz = -b.wz * 0.7; }
    if (b.x > sim.w - w) { b.x = sim.w - w; b.vx = -Math.abs(b.vx) * DIE_BOUNCE; b.wz = -b.wz * 0.7; }
    if (b.y < w) {
      b.y = w;
      b.vy = Math.abs(b.vy) * DIE_BOUNCE;
      // The table drags: sliding and spinning both die out on it, which is what
      // eventually brings the whole throw to a stop.
      b.vx *= DIE_FLOOR_DRAG; b.wz *= 0.8;
      if (Math.abs(b.vy) < 60) b.vy = 0;
    }
    // The near edge is only a rail — a die that comes back this far bounces off
    // it rather than dropping out of the game.
    if (b.y > sim.h - w) { b.y = sim.h - w; b.vy = -Math.abs(b.vy) * DIE_BOUNCE; }
  }

  // Dice against dice: pushed apart, then what they were carrying swapped along
  // the line between them. Pushed over three passes, because with several dice
  // pressed together one pass parts two and leaves them sunk into a third.
  // Speed is exchanged on the first pass only.
  // Each push is held inside the walls straight away. Left to the wall pass
  // afterwards, a die pushed into the wall was pushed back out into the one it
  // had just been parted from, and the overlap was rebuilt before it was drawn.
  for (var pass = 0; pass < 4; pass++) {
    for (i = 0; i < bodies.length; i++) {
      for (j = i + 1; j < bodies.length; j++) {
        var a = bodies[i], c = bodies[j];
        var hitAt = diceContact(a, c, r);
        if (!hitAt) continue;
        var nx = hitAt.nx, ny = hitAt.ny, push = hitAt.depth / 2;
        a.x -= nx * push; a.y -= ny * push;
        c.x += nx * push; c.y += ny * push;
        a.x = Math.max(w, Math.min(sim.w - w, a.x)); a.y = Math.max(w, Math.min(sim.h - w, a.y));
        c.x = Math.max(w, Math.min(sim.w - w, c.x)); c.y = Math.max(w, Math.min(sim.h - w, c.y));
        if (pass) continue;
        var rel = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny;
        if (rel > 0) continue; // already parting
        if (-rel < DIE_REST_CONTACT) {
          // Resting on each other, the way a die rests on the felt: whatever
          // either was carrying into the other is taken away, and the rub of
          // one on the other slows them. Bounced instead, a die lying on
          // another under gravity was knocked back up every single frame.
          var an = a.vx * nx + a.vy * ny, cn = c.vx * nx + c.vy * ny;
          if (an > 0) { a.vx -= nx * an; a.vy -= ny * an; }
          if (cn < 0) { c.vx -= nx * cn; c.vy -= ny * cn; }
          a.vx *= DIE_FLOOR_DRAG; a.vy *= DIE_FLOOR_DRAG; a.wz *= 0.8;
          c.vx *= DIE_FLOOR_DRAG; c.vy *= DIE_FLOOR_DRAG; c.wz *= 0.8;
          continue;
        }
        var hit = -rel * 0.6;
        a.vx -= nx * hit; a.vy -= ny * hit;
        c.vx += nx * hit; c.vy += ny * hit;
        a.wz -= hit; c.wz += hit;
      }
    }
  }

  // Pushing two dice apart can push one of them through a wall, and the wall
  // pass has already been and gone this frame. Without this the die is drawn
  // outside the felt for a frame and shoved back the next, which at six dice in
  // a corner is a die visibly out past the edge of the screen.
  for (i = 0; i < bodies.length; i++) {
    b = bodies[i];
    if (b.x < w) { b.x = w; if (b.vx < 0) b.vx = -b.vx * DIE_BOUNCE; }
    if (b.x > sim.w - w) { b.x = sim.w - w; if (b.vx > 0) b.vx = -b.vx * DIE_BOUNCE; }
    if (b.y < w) { b.y = w; if (b.vy < 0) b.vy = -b.vy * DIE_BOUNCE; }
    if (b.y > sim.h - w) { b.y = sim.h - w; if (b.vy > 0) b.vy = -b.vy * DIE_BOUNCE; }
  }

  // Turn each die. Nothing is being swapped: the faces are all on the cube, and
  // you see whichever one is turned toward you.
  for (i = 0; i < bodies.length; i++) {
    b = bodies[i];
    var speed = Math.abs(b.vx) + Math.abs(b.vy);
    var onFelt = !(b.h > 0.5);
    if (onFelt) {
      turnOnFelt(b, speed, sim.rollRate, dt);
    } else {
      // In the air it turns at whatever the throw and its last knock gave it,
      // the air slowly taking that away.
      var ease = Math.exp(-DIE_TURN_DRAG * dt);
      b.wx *= ease; b.wy *= ease;
    }
    // Flat on the felt it stops twirling fast; only a die still rolling is free
    // to spin.
    if (onFelt && speed < DIE_ROLL_FREE) b.wz *= 1 - Math.min(1, 8 * dt * (1 - speed / DIE_ROLL_FREE));
    var wm = Math.sqrt(b.wx * b.wx + b.wy * b.wy + b.wz * b.wz);
    if (wm > 0.001) b.m = m3fix(m3mul(m3rot(b.wx, b.wy, b.wz, wm * dt), b.m));
    var up = dieUp(b.m);
    // Each time it goes over onto a new face on the felt it clacks down, and the
    // clack takes a part of what it had: a rolling cube does not roll far.
    if (onFelt && b.upFace != null && up.face !== b.upFace && speed > DIE_SETTLE) {
      b.vx *= DIE_CLACK; b.vy *= DIE_CLACK; b.wx *= DIE_CLACK; b.wy *= DIE_CLACK;
    }
    b.upFace = up.face;
    // Still sliding, or not yet flat and done rocking: either way it has not
    // landed, and reading it now would be reading a die on its edge.
    if (speed > 26 || !dieAtRest(b, up)) moving++;
    // Near enough flat and nearly stopped, it is drawn the way a die at rest is:
    // its turn on the felt put on the die, and clipped to rounded corners, so the
    // side faces stop poking out through them. Clipped once it is nearly flat,
    // slow and no longer swinging hard; let go if it is knocked well back up or
    // set rolling again, so a die rocking about one threshold does not flicker.
    var swing = Math.max(Math.abs(b.wx), Math.abs(b.wy));
    if (!b.flat && onFelt && up.tilt < 6 && speed < DIE_SETTLE && swing < 300) b.flat = true;
    else if (b.flat && (up.tilt > 20 || speed > DIE_ROLL_FREE)) b.flat = false;
    // Flat dice collide as the turned squares they are, at their turn.
    if (b.flat) b.rot = dieTurn(b.m, up.face);
  }
  sim.still = moving ? 0 : sim.still + 1;
  }
  // A frame that fell far behind drops what it could not catch up on, rather than
  // running a burst of steps that would jolt the dice forward.
  if (steps >= 12) sim.acc = 0;

  // Draw each die once, where the steps left it.
  drawDiceSim(sim);
  castFrame(sim, now);

  // Still for long enough: they have settled, wherever that turned out to be. The
  // cap is only there so a pathological bounce cannot run forever.
  if (sim.still < DIE_STILL_STEPS && (now - (sim.began || (sim.began = now))) < 6000) {
    sim.raf = requestAnimationFrame(diceStep);
    return;
  }
  var d = sim.d;
  // At rest a die is square to the felt, so half its width is what has to stay
  // inside — worked out from the die and the field rather than assumed. The old
  // fixed 6% left a 74px die hanging five percent off the edge of a narrow
  // phone, which is most of the reason they looked like they fell off.
  var padX = sim.r / sim.w * 100, padY = sim.r / sim.h * 100;
  var clampX = function (v) { return Math.max(padX, Math.min(100 - padX, v)); };
  var clampY = function (v) { return Math.max(padY, Math.min(100 - padY, v)); };
  // Only the thrown dice moved; the rest are where they were left.
  var pos = dicePlaces(d).slice();
  bodies.forEach(function (x, n) {
    pos[sim.live[n]] = { x: clampX(x.x / sim.w * 100), y: clampY(x.y / sim.h * 100) };
  });
  d.pos = pos;
  // Two dice clamped to the same corner land on the same spot and read as a
  // stack of one. Shove them apart in the field's own proportions — a percent
  // across a narrow felt is a much longer way than a percent up it — then put
  // them back inside the walls the shoving pushed them out of.
  //
  // Only the dice still in play, though. A parked die nudged aside to make
  // room is a die that moved on somebody else's throw, which is the whole
  // thing parking them was for.
  var loose = [], looseAt = [];
  for (i = 0; i < d.count; i++) {
    if (d.parked && d.parked.indexOf(i) !== -1) continue;
    looseAt.push(i); loose.push(d.pos[i]);
  }
  spaceOut(loose, padX * 2.1, sim.h / sim.w, { x: sim.reach / sim.w * 100, y: sim.reach / sim.h * 100 });
  looseAt.forEach(function (at, k) { d.pos[at] = loose[k]; });
  // The number is whatever it stopped on. Nothing is drawn for it afterwards:
  // the die rocks onto the nearest flat side and that side is read off it, so it
  // never lands showing one face and then changes to another.
  var field = sim.field;
  // The rolling class stays on until the render below rebuilds the felt. Taking
  // it off here switched the cube's transition back on as the last turn was
  // written, and that transition is what animated a stopped die rolling itself
  // onto its number.
  for (i = 0; i < bodies.length; i++) {
    var die = sim.live[i];
    var b2 = bodies[i];
    // Already flat — it tipped onto its face before it was counted as landed, so
    // squaring it up here tidies under a degree. The face it shows is the one
    // turned toward you, and its turn on the felt is left as it lies: a die does
    // not come to rest squared to the table.
    var up2 = dieUp(b2.m), fc = DIE_FACING[up2.face] || DIE_FACING[1];
    var lz = ((dieTurn(b2.m, up2.face) % 360) + 360) % 360;
    var lx = ((fc[0] % 360) + 360) % 360;
    var ly = ((fc[1] % 360) + 360) % 360;
    d.vals[die] = up2.face;
    // The pose it came down in, so it is drawn that way from here on.
    if (!d.face) d.face = [];
    d.face[die] = { v: d.vals[die], x: lx, y: ly, z: lz };
    // Landed, and standing until the rest have had their turn.
    if (d.set.indexOf(die) === -1) d.set.push(die);
    var settled = field.querySelector('[data-die="' + die + '"]');
    var box = settled && settled.firstChild;
    if (settled && box) {
      // Drawn as a die at rest from this frame on, not only from the redraw: its
      // turn on the felt on the die, clipped to rounded corners.
      settled.classList.add("flat");
      settled.style.transform = "translate(" + b2.x.toFixed(1) + "px, " + b2.y.toFixed(1) +
        "px) translate(-50%, -50%) rotate(" + lz.toFixed(1) + "deg) scale(" + diceScale(d).toFixed(3) + ")";
      box.style.transform = "rotateX(" + lx + "deg) rotateY(" + ly + "deg)";
    }
  }
  d.flying = null;
  // Whatever just landed now stands, so its place is the corner — in the state
  // only. The thrown dice still carry the simulation's transform here, and a
  // resting left/top written on top of it offset them twice, clean off the
  // felt, until the render below rebuilt them.
  parkSetDice(d);
  diceSim = null;
  d.rolling = false;
  castEnd(d);
  // Straight off the dice, before anybody has had a chance to read them out.
  noteCurdRoll(d);
  shareDiceRoll(d);
  setTimeout(function () { if (secret && secret.mode === "dice") render(); }, 300);
  // Read where they landed, then they walk back down to the band they are
  // thrown from. Dice that settle at the top of the felt have to be dragged the
  // length of it before every throw; bringing them home is the difference
  // between rolling again and setting up to roll again. The numbers do not
  // change — this is the same dice, moved.
  setTimeout(function () {
    if (!secret || secret.mode !== "dice" || secret.dice !== d) return;
    if (d.rolling || dieDrag) return;
    var f = app.querySelector(".dicefield");
    if (!f) return;
    // Home is for the dice still to be thrown. A standing die is already where
    // it belongs, and calling it home was the second half of the jumping.
    var home = diceHome(d);
    var over = allDiceSet(d);
    var going = [];
    for (var q = 0; q < d.count; q++) {
      if (!over && d.parked && d.parked.indexOf(q) !== -1) continue;
      going.push(q);
    }
    sendHome(d, going, home);
    // The round is over, so the corner empties: they grow as they walk home.
    if (over) d.parked = [];
    parkSetDice(d);
    placeDice(f, d);
  }, 1000);
}

/* Moves the dice already on the felt to where the state says they are, and
   re-pips them, without disturbing the elements themselves. */
function placeDice(field, d) {
  var at = dicePlaces(d);
  for (var i = 0; i < d.count; i++) {
    var el = field.querySelector('[data-die="' + i + '"]');
    if (!el) continue;
    el.style.left = at[i].x.toFixed(2) + "%";
    el.style.top = at[i].y.toFixed(2) + "%";
    var rest = dieRest(d, i);
    // Dimmed exactly while parked. The walk home empties the corner without a
    // redraw, so the class has to follow here, or the dice arrive home full size
    // but still greyed out.
    el.classList.toggle("set", !!(d.parked && d.parked.indexOf(i) !== -1));
    el.style.transform = rest.outer;
    var cube = el.querySelector(".cube");
    if (cube) cube.style.transform = rest.cube;
  }
}

/* Shoves overlapping dice apart, a little at a time, and keeps them on the felt. */
function spaceOut(pos, gap, ratio, pad) {
  // The walls come from the caller: they depend on how big a die is against the
  // felt it is lying on, and the numbers that used to be written in here kept
  // the dice in the top half of a layout that has since changed.
  var padX = pad ? pad.x : 0, padY = pad ? pad.y : 0;
  for (var pass = 0; pass < 8; pass++) {
    for (var i = 0; i < pos.length; i++) {
      for (var j = i + 1; j < pos.length; j++) {
        var dx = pos[j].x - pos[i].x;
        var dy = (pos[j].y - pos[i].y) * ratio;
        var dist = Math.sqrt(dx * dx + dy * dy);
        // Dead centre on each other: nudge them off the same spot first.
        if (dist < 0.01) { pos[j].x += 0.5; dx = 0.5; dist = 0.5; }
        if (dist >= gap) continue;
        var push = (gap - dist) / 2, ux = dx / dist, uy = dy / dist;
        pos[i].x -= ux * push; pos[j].x += ux * push;
        pos[i].y -= (uy * push) / ratio; pos[j].y += (uy * push) / ratio;
      }
    }
    for (var k = 0; k < pos.length; k++) {
      pos[k].x = Math.max(padX, Math.min(100 - padX, pos[k].x));
      pos[k].y = Math.max(padY, Math.min(100 - padY, pos[k].y));
    }
  }
}
/* ===== Hearth & Harbor: sending a throw to the table, and watching one ===== */
/* The thrower's phone samples the dice 30 times a second and sends them in
   small batches; every other phone plays them back a fixed half second behind,
   smoothing between samples. Nothing is decided on the watching phones: the
   number is still whatever the thrower's dice landed on. */
var castFn = null, castQ = [], castT0 = 0, castLastS = 0, castLastF = 0, castId = 0;
var CAST_SAMPLE = 33, CAST_FLUSH = 200;
function r3(n) { return Math.round(n * 1000) / 1000; }
function restPoses(d) {
  var at = dicePlaces(d);
  return d.vals.map(function (v, i) {
    var o = dieRest(d, i);
    return [r3(at[i].x), r3(at[i].y), r3(o.z), o.x, o.y, d.parked && d.parked.indexOf(i) !== -1 ? 1 : 0, v];
  });
}
function castSend(p) { if (castFn) { try { castFn(p); } catch (e) { /* the throw goes on */ } } }
function castFlush() { if (castQ.length) { castSend({ k: "f", id: castId, f: castQ }); castQ = []; } }
function castStart(sim) {
  if (!castFn) return;
  castId = Date.now() % 1e9; castQ = []; castT0 = 0; castLastS = 0; castLastF = 0;
  castSend({ k: "s", id: castId, w: Math.round(sim.w), h: Math.round(sim.h), sc: diceScale(sim.d),
             live: sim.live, rest: restPoses(sim.d) });
}
function castFrame(sim, now) {
  if (!castFn) return;
  if (!castT0) castT0 = now;
  if (castLastS && now - castLastS < CAST_SAMPLE) return;
  castLastS = now;
  var bodies = sim.bodies.map(function (b) {
    var turn = b.flat ? b.rot : 0;
    var m = b.flat ? m3mul(m3rot(0, 0, 1, -turn), b.m) : b.m;
    return [r3(b.x / sim.w), r3(b.y / sim.h), r3(1 + (b.h || 0) * DIE_HOP_SCALE), r3(turn)].concat(m.map(r3));
  });
  castQ.push([Math.round(now - castT0), bodies]);
  if (!castLastF) castLastF = now;
  if (now - castLastF >= CAST_FLUSH) { castLastF = now; castFlush(); }
}
function castEnd(d) {
  if (!castFn) return;
  castFlush();
  castSend({ k: "e", id: castId, rest: restPoses(d) });
}

/* The dice as they now sit on screen, copied, for the page to carry off somewhere:
   where each one's middle is, how big it is drawn and how it is turned. */
function landItems(root, poses) {
  var out = [];
  poses.forEach(function (ps, i) {
    var el = root.querySelector('[data-die="' + i + '"]');
    if (!el) return;
    var r = el.getBoundingClientRect();
    out.push({ node: el.cloneNode(true), size: 74, scale: ps.scale, rot: ps.rot,
               cx: r.left + r.width / 2, cy: r.top + r.height / 2 });
  });
  return out;
}
/* ---- watching ---- */
var W = null, WATCH_DELAY = 600, WATCH_BLEND = 750, WATCH_GROW = 900;
function watchFeed(p, host, label, onLand) {
  if (!p || !host) return;
  if (p.k === "s") {
    if (W && W.raf) cancelAnimationFrame(W.raf);
    if (W && W.hide) clearTimeout(W.hide);
    var el = host.querySelector(".crview");
    if (!el) { el = document.createElement("div"); el.className = "crview"; host.appendChild(el); }
    W = { id: p.id, el: el, host: host, start: p, frames: [], t0: 0, done: null, raf: 0, onLand: onLand };
    // Straight onto the board: the thrower's felt is stretched over the whole map,
    // and the dice drawn at a size that suits the map rather than the felt.
    var hb = host.getBoundingClientRect();
    var fw = hb.width, fh = hb.height;
    W.fw = fw; W.fh = fh; W.vs = Math.min(fw / p.w, fh / p.h) * 1.15;
    el.innerHTML = '<div class="crvlbl">' + (label || "Rolling") + '</div>' +
      '<div class="dicefield rolling">' +
      p.rest.map(function (r, i) {
        return '<div class="die" data-die="' + i + '" style="left:0;top:0"><div class="cube">' + dieFacesHtml() + '</div></div>';
      }).join("") + '</div>';
    el.hidden = false; el.classList.remove("out");
    // Every die where it lay as the throw began; the thrown ones then move off from there.
    // Dice still to be thrown wait out of sight; they come in from the corner.
    p.rest.forEach(function (r, i) { if (p.live.indexOf(i) === -1) watchRest(i, r); else watchDie(i).style.opacity = "0"; });
    return;
  }
  if (!W || p.id !== W.id) return;
  if (p.k === "f") {
    if (!W.t0) { W.t0 = performance.now(); W.raf = requestAnimationFrame(watchStep); }
    for (var i = 0; i < p.f.length; i++) W.frames.push(p.f[i]);
  } else if (p.k === "e") {
    W.done = p.rest;
    if (!W.t0) watchFinish();
  }
}
function watchDie(i) { return W.el.querySelector('[data-die="' + i + '"]'); }
function watchRest(i, r) {
  var el = watchDie(i); if (!el) return;
  el.classList.add("flat");
  el.style.transform = "translate(" + (r[0] / 100 * W.fw).toFixed(1) + "px, " + (r[1] / 100 * W.fh).toFixed(1) +
    "px) translate(-50%, -50%) rotate(" + r[2] + "deg) scale(" + (W.vs * W.start.sc * (r[5] ? 0.5 : 1)).toFixed(3) + ")";
  el.style.opacity = r[5] ? "0.72" : "1";
  el.firstChild.style.transform = "rotateX(" + r[3] + "deg) rotateY(" + r[4] + "deg)";
}
function watchStep(now) {
  if (!W) return;
  var t = now - W.t0 - WATCH_DELAY, F = W.frames;
  if (t >= 0 && F.length) {
    var k = 0;
    while (k < F.length - 1 && F[k + 1][0] <= t) k++;
    var a = F[k], b = F[Math.min(k + 1, F.length - 1)];
    var u = b[0] > a[0] ? Math.max(0, Math.min(1, (t - a[0]) / (b[0] - a[0]))) : 0;
    W.start.live.forEach(function (di, n) {
      var A = a[1][n], B = b[1][n], el = watchDie(di);
      if (!A || !el) return;
      var L = function (j) { return A[j] + (B[j] - A[j]) * u; };
      // Hearth & Harbor: the throw comes in from the board's bottom-left corner and
      // the dice grow to full size as they go, settling onto the thrower's own path.
      var F0 = F[0][1][n], ez = function (q) { q = Math.max(0, Math.min(1, q)); return 1 - Math.pow(1 - q, 3); };
      var pull = 1 - ez(t / WATCH_BLEND), grow = 0.3 + 0.7 * ez(t / WATCH_GROW);
      var cornerX = (W.vs * 74 * 0.3) / W.fw + 0.04 + n * 0.07, cornerY = 0.93;
      var px = L(0) + (cornerX - F0[0]) * pull, py = L(1) + (cornerY - F0[1]) * pull;
      el.style.opacity = "1";
      var turn = A[3] + (((B[3] - A[3] + 540) % 360) - 180) * u;
      el.classList.toggle("flat", A[3] !== 0);
      el.style.transform = "translate(" + (px * W.fw).toFixed(1) + "px, " + (py * W.fh).toFixed(1) +
        "px) translate(-50%, -50%)" + (A[3] !== 0 ? " rotate(" + turn.toFixed(1) + "deg)" : "") +
        " scale(" + (W.vs * W.start.sc * L(2) * grow).toFixed(3) + ")";
      var m = []; for (var j = 4; j < 13; j++) m.push(L(j));
      el.firstChild.style.transform = m3css(m3fix(m));
    });
    // Played out to the last sample and the end is in: they have landed.
    if (W.done && t >= F[F.length - 1][0]) { watchFinish(); return; }
  }
  // Nothing new for a long while: the thrower's phone went quiet. Let it go.
  if (t > 9000) { watchHide(0); return; }
  W.raf = requestAnimationFrame(watchStep);
}
function watchFinish() {
  if (!W) return;
  W.done.forEach(function (r, i) { watchRest(i, r); });
  W.el.querySelector(".dicefield").classList.remove("rolling");
  var lbl = W.el.querySelector(".crvlbl");
  var all = W.done.every(function (r) { return r[5]; }) || W.start.live.length === W.done.length;
  if (lbl && all) lbl.innerHTML = lbl.innerHTML.replace(' is rolling', ' rolled') + ' <b>' + W.done.reduce(function (s, r) { return s + r[6]; }, 0) + '</b>';
  // Every die is down: a moment to read them, then off they go to wherever the
  // page wants them. A throw of only some of the dice just waits for the rest.
  if (all && W.onLand) {
    var w = W;
    w.hide = setTimeout(function () {
      if (W !== w) return;
      var items = landItems(w.el, w.done.map(function (r) {
        return { rot: r[2], scale: w.vs * w.start.sc * (r[5] ? 0.5 : 1) };
      }));
      w.el.hidden = true; W = null;
      w.onLand(items, w.done.map(function (r) { return r[6]; }));
    }, 650);
    return;
  }
  watchHide(all ? 1600 : 2500);
}
function watchHide(ms) {
  var w = W; if (!w) return;
  if (w.hide) clearTimeout(w.hide);
  w.hide = setTimeout(function () {
    if (W !== w) return;
    w.el.classList.add("out");
    setTimeout(function () { if (W === w) { w.el.hidden = true; W = null; } }, 260);
  }, ms);
}

window.CRDice={
  open:function(cb,o){
    var r=function(){return 1+Math.floor(Math.random()*6)};
    secret={mode:'dice',dice:{count:2,vals:[r(),r()],rolling:false,pos:null,set:[],parked:[]}};
    onDone=cb;castFn=(o&&o.cast)||null;landFn=(o&&o.land)||null;sliceReady(DICE_SOUND);render();
    // laid out against the real felt once it has a size
    requestAnimationFrame(function(){if(secret){secret.dice.pos=null;render()}});
  },
  close:close,
  watch:watchFeed,
  isOpen:function(){return !!secret}
};
})();
