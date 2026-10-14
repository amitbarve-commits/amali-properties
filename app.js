/* Amali Owner App — clickable prototype (post-sales · pre-possession) */
(() => {
const IMG = {
  tower:'tower.jpg', view:'view.jpg', facade:'facade.jpg', living:'living.jpg',
  lounge:'lounge.jpg', aerial:'aerial.jpg', pool:'pool.jpg', dining:'dining.jpg',
  villa:'villa.jpg', avatar:'avatar.jpg', poster:'poster.jpg', car0:'car0.jpg', car1:'car1.jpg', car2:'car2.jpg', splashVideo:'splashVideo.mp4', splashWebm:'splashWebm.webm', logoW:'logoW.png', logoD:'logoD.png'
};
const IMG2 = {amSkyGym:'amSkyGym.jpg',amPool:'amPool.jpg',amPadel:'amPadel.jpg',amKids:'amKids.jpg',amCinema:'amCinema.jpg',amLounge:'amLounge.jpg',amDining:'amDining.jpg',amCowork:'amCowork.jpg',amTerrace:'amTerrace.jpg',evSunset:'evSunset.jpg',evSunsetG1:'evSunsetG1.jpg',evSunsetG2:'evSunsetG2.jpg',evMovie:'evMovie.jpg',evMovieG1:'evMovieG1.jpg',evMovieG2:'amCinema.jpg',evPadel:'evPadel.jpg',evPadelG1:'evPadelG1.jpg',evPadelG2:'evPadelG2.jpg',evYoga:'evYoga.jpg',evYogaG1:'evYogaG1.jpg',evYogaG2:'evYogaG2.jpg',anDay:'anDay.jpg',anDayG1:'anDayG1.jpg',anDayG2:'anDayG2.jpg',anPest:'anPest.jpg',anPestG1:'anPestG1.jpg',anPestG2:'anPestG2.jpg',anPool:'anPool.jpg',anPoolG1:'anPoolG1.jpg',anPoolG2:'anPoolG2.jpg',bzTv:'bzTv.jpg',bzBooks:'bzBooks.jpg',bzCar:'bzCar.jpg',bzDesk:'bzDesk.jpg'};
Object.assign(IMG, IMG2);
const IMG3 = {showApt:'showApt.jpg',valetCard:'valetCard.jpg',crecheCard:'crecheCard.jpg',aptInteriors:'aptInteriors.jpg',heroShowApt:'heroShowApt.jpg',heroHoliday:'heroHoliday.jpg',siteBuild:'siteBuild.jpg'};
Object.assign(IMG, IMG3);
window.__IMG=IMG;
const IMG4 = {amMusic:'amMusic.jpg',amKidsHQ:'amKidsHQ.jpg',amYoga:'amYoga.jpg',lobbyDrop:'lobbyDrop.jpg',garage:'garage.jpg',amSpa:'amSpa.jpg',amCigar:'amCigar.jpg'};
Object.assign(IMG, IMG4, {amKids:IMG4.amKidsHQ, evYoga:IMG4.amYoga, evSunsetG1:IMG4.amMusic});
window.__IMG = IMG;
IMG.rmAvatar='rmAvatar.jpg';
const bg = k => `style="background-image:url('${IMG[k]}')"`;

/* ---------- icons ---------- */
const P = {camera:'<rect x="3" y="5" width="18" height="15" rx="3"/><circle cx="9" cy="10.5" r="1.6"/><path d="m21 16-4.5-4.5L8 20"/>',more:'<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',amali:'<svg class="amg" x="0" y="0" width="24" height="24" viewBox="5.25 -0.5 25 26"><path d="M17.8695 5.534C18.0086 5.5935 18.0869 5.7344 18.1471 5.86912C18.3789 6.388 18.5958 6.91365 18.8174 7.43696L19.8174 9.77663L22.4096 15.8296L25.0157 21.903C25.3936 22.7912 25.7985 23.6617 26.1412 24.5661C25.4737 24.5214 24.4481 24.545 23.7632 24.5598C23.5736 24.0162 23.3937 23.6492 23.1881 23.1371C22.6691 21.8421 22.1328 20.5542 21.5792 19.2736C21.3472 18.726 21.1222 18.1184 20.8903 17.5588L18.8124 12.5549C18.4168 11.5915 18.0177 10.6303 17.6181 9.66851C17.5222 9.43786 17.4433 9.21053 17.3655 8.97329L17.2429 8.71372C17.1051 8.9705 17.0305 9.27265 16.9242 9.54697C16.7534 9.98783 16.5755 10.4252 16.3994 10.8639L14.2805 16.13C13.4247 18.2691 12.5104 20.4095 11.6854 22.5606C11.4448 23.1878 11.0594 23.9373 10.8871 24.5669C10.4389 24.5368 9.76212 24.5407 9.31152 24.5625C9.47829 24.1242 9.69365 23.6776 9.88522 23.25L10.7003 21.421L12.5185 17.3553L15.9337 9.70922L16.8441 7.66932C17.029 7.24993 17.6114 5.81203 17.8695 5.534Z" fill="currentColor" stroke="currentColor" stroke-linejoin="round"/><path d="M21.8831 0H22.0129C22.0443 0.388273 22.0364 0.974028 22.0334 1.37029C20.2124 1.71065 18.372 2.09791 16.5548 2.4536C16.0404 2.5543 12.3566 3.35379 12.1946 3.27687C12.1173 3.14508 12.164 2.87615 12.1797 2.72163C12.462 2.5957 13.0936 2.44934 13.3985 2.36753L15.1613 1.88136C15.932 1.67279 16.728 1.43885 17.4948 1.21399C17.7754 1.13172 18.0653 1.07792 18.3461 0.999942L20.7236 0.316277C21.0161 0.231486 21.6751 0.14276 21.8831 0Z" fill="currentColor" stroke="currentColor" stroke-linejoin="round"/></svg>',
  home:'<path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  unit:'<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  bell:'<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  spark:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
  back:'<path d="M19 12H5M11 6l-6 6 6 6"/>', arrowR:'<path d="M5 12h14M13 6l6 6-6 6"/>', arrowUR:'<path d="M7 17L17 7M8 7h9v9"/>',
  chevR:'<path d="M9 6l6 6-6 6"/>', chevD:'<path d="M6 9l6 6 6-6"/>', users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
  doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  download:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>', play:'<path d="M8 5l12 7-12 7z"/>', playc:'<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5.5 3.5-5.5 3.5z"/>',
  share:'<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>',
  clip:'<path d="M20 11.5l-8.3 8.3a5 5 0 0 1-7-7L13 4.5a3.5 3.5 0 0 1 5 5l-8.3 8.3a2 2 0 0 1-2.8-2.8L14.5 7.4"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7"/>', plus:'<path d="M12 5v14M5 12h14"/>', x:'<path d="M6 6l12 12M18 6L6 18"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>', globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  logout:'<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 17l-5-5 5-5M5 12h11"/>', lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>', building:'<path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-5h6v5M4 13h16"/>'
};
const PF = {
  home:'<path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  unit:'<path fill-rule="evenodd" d="M6.5 3h11A1.5 1.5 0 0 1 19 4.5v15a1.5 1.5 0 0 1-1.5 1.5H14v-3h-4v3H6.5A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3zM8.5 6.2h2.6v1.6H8.5zM12.9 6.2h2.6v1.6h-2.6zM8.5 10.2h2.6v1.6H8.5zM12.9 10.2h2.6v1.6h-2.6zM8.5 14.2h2.6v1.6H8.5zM12.9 14.2h2.6v1.6h-2.6z"/>',
  card:'<path fill-rule="evenodd" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM2 9.1h20v1.8H2zM6 14.2h4.5v1.6H6z"/>',
  bell:'<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9z"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  spark:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>'
};
const icf = (n, s=22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${PF[n]}</svg>`;
const ic = (n, s=20, sw=1.6) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const DH = '<svg class="dh" viewBox="0 0 24 21" aria-label="AED"><path fill-rule="evenodd" d="M7.17 0C10.38 0 13.36-.15 16.28 1.52 18.64 2.87 19.82 4.75 20.52 7.3c.95 0 2.2-.17 2.84.53.63.67.64 1.33.64 2.17-.89-.86-1.98-.61-3.17-.6.05.5.04 1.57 0 2.07 1.25-.01 2.45-.16 3-1.27.19.5.18.9.17 1.42-.44-.41-.75-.6-1.38-.6l-2.08.01c-.53 2.06-1.32 3.55-2.95 4.94C14.65 20.99 10.87 20.87 7.32 20.87H2.12C3.25 19.55 3.15 17.81 3.14 16.17V13.57h-.17c-.84.01-1.72.11-2.35-.54C.02 12.4 0 11.67 0 10.87l.03.03c.84.83 1.99.58 3.11.58V9.4C1.91 9.41.73 9.56.18 8.15-.01 7.65 0 7.23 0 6.7c.89.86 1.96.61 3.14.6.01-2.02.19-4.3-.4-6.23C2.63.69 2.28.33 2.14.01ZM6.27 19.81c3.11 0 6.35.37 8.74-2 1.18-1.3 1.63-2.52 1.95-4.24H6.26ZM6.27 9.4v2.08h7.28c1.12 0 2.57.04 3.65-.01.02-.68.03-1.4 0-2.08ZM6.27 1.06V7.3H16.97c-.35-1.95-1.07-3.83-2.76-5-1.74-1.2-3.58-1.24-5.58-1.24Z"/></svg>';
const aed = v => `<span class="amt">${DH}${v}</span>`;

/* ---------- data ---------- */
const UPDATES = [
  {cat:'Construction', title:'Tower structure reaches level 32', meta:'Amali Residences · 02 Oct 2026', img:'facade',
   body:'Dear Owner,\n\nWe are pleased to share that the main structure of Amali Residences has reached level 32. Facade installation on the lower podium is under way, and overall progress now stands at 68%.\n\nOwner site visits for October are open for booking from the app.'},
  {cat:'Events', title:'Show apartment now open for owner previews', meta:'Amali Residences · 18 Sep 2026', img:'showApt',
   body:'Dear Owner,\n\nThe fully finished 2-bedroom show apartment on level 12 is now open for private previews. See the kitchen, flooring and joinery selections exactly as they will be delivered.\n\nBook a 30-minute slot with your relationship manager.'},
  {cat:'Construction', title:'Amali Island marina works begin', meta:'Amali Island · 04 Sep 2026', img:'aerial',
   body:'Dear Owner,\n\nMarine works for the Amali Island marina have started, including breakwaters and the first pontoon berths. The works are scheduled alongside the island landscaping programme.'}
];
const EVENTS = [
  {d:'18',m:'OCT',t:'Amali Residences buyers’ meetup',p:'Amali Experience Centre · 7:00 PM',meta:'64 attending',img:'lounge'},
  {d:'26',m:'OCT',t:'Hard-hat site walk · Tower A',p:'Project site · 9:00 AM',meta:'22 attending',img:'siteBuild'},
  {d:'02',m:'NOV',t:'Finishes & customisation studio',p:'Amali Experience Centre · 11:00 AM',meta:'38 attending',img:'dining'},
  {d:'12',m:'NOV',t:'Handover & mortgage Q&A',p:'Online · 6:00 PM',meta:'117 attending',img:'tower'}
];
const PEVD = [
  {cat:'Buyers',body:['Meet fellow Amali Residences buyers and the project team over coffee and canapés at the Amali Experience Centre.','The design team will share the latest construction progress and answer your questions about handover.'],info:[['Date','Sunday, 18 October'],['Time','7:00 – 9:00 PM'],['Where','Amali Experience Centre'],['Dress code','Smart casual']],gal:['lounge','heroShowApt']},
  {cat:'Site visit',body:['A guided hard-hat walk through Tower A with the site engineer, including a typical floor at level 12.','Safety gear is provided. Closed shoes are required and the walk takes about 60 minutes.'],info:[['Date','Monday, 26 October'],['Time','9:00 – 10:00 AM'],['Where','Project site · Gate 2'],['Group size','Up to 25 buyers']],gal:['siteBuild','facade']},
  {cat:'Design',body:['Explore kitchen, flooring and joinery options for your 2-bedroom unit with the Amali interiors team.','Bring your floor plan. Selections made here can be added to your customisation request.'],info:[['Date','Monday, 2 November'],['Time','11:00 AM – 1:00 PM'],['Where','Amali Experience Centre'],['Format','45-minute sessions']],gal:['dining','living']},
  {cat:'Online',body:['A live online session with the Amali handover and finance teams.','Topics include the handover process, snagging, the final payment and mortgage options with partner banks.'],info:[['Date','Thursday, 12 November'],['Time','6:00 – 7:00 PM'],['Where','Online · link sent after RSVP'],['Hosts','Amali handover team']],gal:['tower','showApt']}
];
const INSTS = [
  {n:'Instalment 4 of 12', ms:'During construction', pct:'5%', date:'15 Dec 2026', d:'15', m:'DEC 26', amt:'785,000', up:true, sub:'5% · construction instalment'},
  {n:'Instalment 5 of 12', ms:'During construction', pct:'5%', date:'15 Jun 2027', d:'15', m:'JUN 27', amt:'785,000', up:true, sub:'5% · construction instalment'},
  {n:'Instalment 6 of 12', ms:'During construction', pct:'5%', date:'15 Dec 2027', d:'15', m:'DEC 27', amt:'785,000', up:true, sub:'5% · construction instalment'},
  {n:'Instalment 7 of 12', ms:'During construction', pct:'5%', date:'15 Jun 2028', d:'15', m:'JUN 28', amt:'785,000', up:true, sub:'5% · construction instalment'},
  {n:'Instalment 8 of 12', ms:'During construction', pct:'5%', date:'15 Dec 2028', d:'15', m:'DEC 28', amt:'785,000', up:true, sub:'5% · construction instalment'},
  {n:'Instalment 9 of 12', ms:'During construction', pct:'5%', date:'15 Jun 2029', d:'15', m:'JUN 29', amt:'785,000', up:true, sub:'5% · construction instalment'},
  {n:'Instalment 10 of 12', ms:'During construction', pct:'5%', date:'15 Dec 2029', d:'15', m:'DEC 29', amt:'785,000', up:true, sub:'5% · construction instalment'},
  {n:'Instalment 11 of 12', ms:'During construction', pct:'5%', date:'15 Jun 2030', d:'15', m:'JUN 30', amt:'785,000', up:true, sub:'5% · construction instalment'},
  {n:'Instalment 12 of 12', ms:'On handover', pct:'40%', date:'Q4 2030', d:'Q4', m:'2030', amt:'6,280,000', up:true, sub:'40% · final payment'},
  {n:'Instalment 3 of 12', ms:'SPA signing', pct:'10%', date:'12 Aug 2026', d:'12', m:'AUG 26', amt:'1,570,000', on:'12 Aug 2026', ref:'RCT-11842', via:'Bank transfer'},
  {n:'Instalment 2 of 12', ms:'1 month after booking', pct:'5%', date:'12 Jul 2026', d:'12', m:'JUL 26', amt:'785,000', on:'12 Jul 2026', ref:'RCT-11577', via:'Bank transfer'},
  {n:'Instalment 1 of 12', ms:'Booking', pct:'5%', date:'12 Jun 2026', d:'12', m:'JUN 26', amt:'785,000', on:'12 Jun 2026', ref:'RCT-11306', via:'Cheque'}
];
const ordD = s => s.replace(/^(\d{1,2}) /,(m,d)=>{const n=+d,t=n%100;return n+((t>10&&t<14)?'th':['th','st','nd','rd'][n%10]||'th')+' ';});
const CATS = ['Customer Feedback','Customer Information View / Update','Customisation Payment','Instalments Payment','Mortgage NOC','Other Customer Request / Enquiry','Snagging Inspection','Title Deed Application','Resale NOC'];
const SNAG = 6;
const CAT_SHORT = [['comment','Feedback'],['userp','My details'],['sliders','Customise payment'],['card','Instalment payment'],['home','Mortgage NOC'],['chat','Other enquiry'],['key','Snagging inspection'],['doc','Title deed']];
const COMMENTS = ['Sharing feedback on my recent site visit experience.','Updating my mobile number and email address.','Query on the payment for my kitchen customisation package.','Query on my next instalment amount.','Requesting a mortgage NOC for my bank.','General enquiry about the project.','Booking my snagging inspection.','Status of my title deed application.','Requesting a resale NOC for unit A-1204.'];
const BASE_REQS = [
  {id:'SR-20391', cat:'Customisation Payment', date:'28 Sep 2026', step:2, text:'Requesting a quote for upgraded kitchen appliances and joinery.'},
  {id:'SR-20318', cat:'Mortgage NOC', date:'02 Aug 2026', step:3, text:'Requesting a mortgage NOC for my bank.'},
  {id:'SR-20255', cat:'Customer Information View / Update', date:'14 Jun 2026', step:3, text:'Updating my mobile number and email address.'}
];
const DOCS = [['Sales & Purchase Agreement','PDF · 3.1 MB · 12 Mar 2025'],['Oqood certificate','PDF · 480 KB · 02 Apr 2025'],['Payment plan','PDF · 220 KB'],['Floor plan · A-1204','PDF · 1.2 MB'],['Receipts (3)','ZIP · 1.5 MB'],['Construction progress report · Sep 2026','PDF · 2.4 MB'],['Owner handbook','PDF · 5.6 MB']];
const DAYS = [['Mon','14'],['Tue','15'],['Wed','16'],['Thu','17'],['Fri','18']];
const SLOTS = ['09:00','10:30','12:00','14:00','15:30','17:00'];

const init = () => ({stack:['splash'], params:{}, read:false, newReqs:[], cat:4, attached:true, comment:COMMENTS[4], day:2, slot:1, third:true, notif:true,
  muTab:0, rqTab:0, cuTab:0, flt:0, rsvp:{}, chat:[{me:true,text:'Give me the Sales & Purchase Agreement'},{text:'Here is your signed Sales &amp; Purchase Agreement for Tower A · 1204.', card:'doc'}], typing:false});
let S = init();

/* ---------- shared fragments ---------- */
const NAVS = [['home','Home','amali'],['payments','Payments','card'],['requests','Requests','wrench'],['more','More','more']];
const bnav = active => `<nav class="bnav" aria-label="Main">${NAVS.map(([id,l,i])=>`<button data-tab="${id}" ${active===id?'aria-current="page"':''}>${active===id?(PF[i]?icf(i,22):ic(i,22,2.2)):ic(i,22,1.5)}${l}${id==='activity'&&!S.read?'<span class="badge">2</span>':''}</button>`).join('')}</nav>`;
const head = (title, sub, {back=true, action=''}={}) => `<header class="page-head">${back?`<button class="back press" data-back aria-label="Back">${ic('back',20)}</button>`:''}<div class="grow"><h1>${title}</h1>${sub?`<div class="sub">${sub}</div>`:''}</div>${action}</header>`;
const shead = (eye, title, link, go) => `<div class="section-head shd"><div><h2>${title}</h2><span class="shbar"></span></div>${link?`<button class="link vall press" ${go?`data-go="${go}"`:'data-act="toast:events"'}>${link}<svg class="va" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>`:''}</div>`;
const chip = step => step===3?'<span class="chip c-done">Resolved</span>':step===0?'<span class="chip c-sub">Submitted</span>':'<span class="chip c-prog">In progress</span>';
const reqs = () => [...S.newReqs, ...BASE_REQS];
const stageBar = () => `<div class="stagebar">${[0,1,2,3,4,5,6,7].map(i=>`<i class="${i<4?'done':i===4?'cur':''}"></i>`).join('')}</div>`;

/* ---------- screens ---------- */
const SCREENS = {};
const activeCar = () => { const k=Object.keys(S.valet).find(k=>S.valet[k]!=='parked'); return k===undefined?null:+k; };
const vbar = () => { const i=activeCar(); if(i===null) return ''; const r=S.valet[i]==='ready';
  return `<div class="vbar ${r?'ready':'way'}" role="status"><button class="vb-main" data-go="valet"><span class="vt" ${bg('car'+i)}></span><div class="grow" style="min-width:0"><b>${r?'Vehicle at the doorstep':'Vehicle on its way'}</b><span class="s"><i></i>${CARS[i][0]} · ${r?'Main entrance':'about 2 min'}</span></div></button><button class="vb-x press" data-act="cancelcar:${i}">Cancel</button></div>`; };

SCREENS.splash = () => `<div class="screen splash" data-act="skip" data-light>
  <div class="sl on" ${bg('view')}></div><div class="sl" ${bg('tower')}></div><div class="sl" ${bg('pool')}></div>
  <video class="vid" poster="${IMG.poster}" autoplay muted playsinline preload="auto" aria-hidden="true"></video>
  <div class="scrim"></div>
  <div class="mid"><img src="${IMG.logoW}" alt="Amali Properties"><div class="rule"></div><div class="tagline">One dream at a time</div></div>
  <div class="foot"><div class="vprog"><i></i></div><div class="dots"><i class="on"></i><i></i><i></i></div>Owner app<span class="hint">Tap to enter</span></div></div>`;

SCREENS.home = () => `<div class="screen" data-light><div class="scroll">
  <section class="hero">
    <div class="sl on" ${bg('tower')}></div>
    <div class="scrim"></div>
    <div class="content">
      <div class="wel-lux wel-ps"><span class="g">Good evening</span><h1 class="hname">Ahmed</h1><span class="wrule"></span></div>
      
      <span class="hsub2">${ic('key',15)} Handover · Q4 2030</span>
    </div>
  </section>
  <section class="pad cc-wrap"><div class="card ccard">
    <div class="cc-h"><b>Construction updates</b><button class="link press" data-go="construction">Timeline ${ic('arrowR',16)}</button></div>
    <div class="cc-b"><button class="cc-img press" ${bg('siteBuild')} data-go="update:0" aria-label="Open latest site update"></button>
      <div class="cc-s"><div class="cc-st">Structure <span class="nw">completed <span class="ok">${ic('check',14,2.6)}</span></span></div>
        <div class="cc-d">Completed on <b>02 Oct 2026</b></div></div></div>
    <div class="cc-f"><span>Next stage</span><b>Facade &amp; glazing · Q1 2027</b></div>
  </div></section>
  <section style="margin-top:36px"><div class="pad">${shead('','Events','View all','')}</div>
    <div class="carousel">${EVENTS.map((e,i)=>`<article class="ev"><div class="im press" data-go="pevd:${i}" ${bg(e.img)}><div class="datebox"><b>${e.d}</b><span>${e.m}</span></div></div>
      <div class="b press" data-go="pevd:${i}"><h3>${e.t}</h3><div class="p">${e.p}</div></div>
      <div class="f"><span>${e.meta}</span><button class="rsvp press ${S.rsvp[i]?'on':''}" data-act="rsvp:${i}">${S.rsvp[i]?'Going ✓':'RSVP'}</button></div></article>`).join('')}</div></section>
  <section style="margin-top:36px"><div class="pad">${shead('Construction & news','Announcements','View all','updates')}</div>
    <div class="carousel">${UPDATES.map((u,i)=>updCard(u,i).replace('class="upd press"','class="upd tr press"')).join('')}</div></section>
  <section style="margin-top:36px"><div class="pad">${shead('','Amali projects','View all','')}</div>
    <div class="carousel">${[['Amali Island','Private island villas · Dubai','aerial'],['Amali Residences II','1–4 bedroom residences','tower'],['Amali Villas','Bespoke beachfront villas','villa']].map(([n,sb,k])=>`<button class="pban press" ${bg(k)} data-act="toast:projects"><div class="t"><b>${n}</b><span class="s">${sb}</span></div></button>`).join('')}</div></section>
  <section class="pad" style="margin-top:28px"><div class="card crm">
    <div class="crm-h"><b>Your relationship manager</b></div>
    <div class="crm-b"><span class="crm-av" ${bg('rmAvatar')}></span><div class="grow"><b>Khalid Al Suwaidi</b></div>
    <button class="crm-btn press" data-act="crmcontact">Contact</button></div></div></section>

  </div>
  <div class="stickytop"><button class="unitpill press" data-act="units" aria-label="Change unit" aria-haspopup="dialog"><span class="av" ${bg('avatar')}></span>Tower A · 1204 ${ic('chevD',16,1.8)}</button>
    <div class="sticons"><button class="gbtn aibtn press" data-go="aura" aria-label="AMALI Assistant">${ic('spark',21,2)}</button><button class="gbtn press" data-go="activity" aria-label="Notifications">${ic('bell',20)}${S.read?'':'<span class="badge">2</span>'}</button></div></div>
  ${bnav('home')}</div>`;
SCREENS.more = () => { const open=reqs().filter(r=>r.step<3).length; const row2=(i,t,s,at,badge='')=>`<button class="mrow press" ${at}><span class="tile-ic">${ic(i,20)}</span><span class="grow"><b>${t}</b>${s?`<span>${s}</span>`:''}</span>${badge}${ic('chevR',18)}</button>`;
  return `<div class="screen"><div class="scroll">${head('More','',{back:false})}
  <div class="pad stack" style="margin-top:20px;gap:14px">
  <button class="card mprof press" data-go="profile"><span class="av" ${bg('avatar')}></span><span class="grow"><b>Ahmed Al Mansoori</b></span>${ic('chevR',18)}</button>
  <div class="card mlist">${row2('unit','My Unit','','data-go="myunit"')}${row2('doc','Documents','','data-go="documents"')}</div>
  <div class="card mlist">${row2('history','Payment history','','data-go="payhist"')}${row2('unit','Construction timeline','','data-go="construction"')}</div>
  <div class="card mlist">${row2('users','Co-owners','','data-go="coowners"')}${row2('userp','Profile','','data-go="profile"')}</div>
  <div class="card mlist"><button class="mrow" data-act="notif" role="switch" aria-checked="${S.notif}"><span class="tile-ic">${ic('bell',20)}</span><span class="grow"><b>Push notifications</b></span><span class="toggle" aria-checked="${S.notif}"></span></button>${row2('globe','Language','','data-act="toast:lang"')}</div>
  <button class="logout press" data-act="logout">${ic('logout',18)} Log out</button>
  </div></div>${bnav('more')}</div>`; };
SCREENS.refer = () => `<div class="screen"><div class="scroll">${head('Refer & earn','')}
  <section class="pad" style="margin-top:20px"><div class="refer" ${bg('pool')}><div class="scrim"></div><div class="c">
    <h3>Share the Amali life</h3><p>Receive [reward] when someone you introduce reserves an Amali home.</p>
    <div style="display:flex;gap:10px;margin-top:6px"><button class="btn btn-light press" data-act="toast:invite">Invite a friend</button><button class="code press" data-act="toast:code">AHMED12 ${ic('copy',16)}</button></div></div></div></section>
  <div class="pad stack" style="margin-top:20px;gap:10px"><div class="card mlist">${[['send','Share your code','Send AHMED12 to a friend'],['userp','They reserve an Amali home','Using your code at booking'],['heart','You both receive a reward','Once the SPA is signed']].map(([i,t,s])=>`<div class="mrow"><span class="tile-ic">${ic(i,20)}</span><span class="grow"><b>${t}</b><span>${s}</span></span></div>`).join('')}</div></div>
  </div>${bnav('more')}</div>`;
SCREENS.rmore = () => { const row2=(i,t,at,badge='')=>`<button class="mrow press" ${at}><span class="tile-ic">${ic(i,20)}</span><span class="grow"><b>${t}</b></span>${badge}${ic('chevR',18)}</button>`;
  return `<div class="screen"><div class="scroll">${head('More','',{back:false})}
  <div class="pad stack" style="margin-top:20px;gap:14px">
  <button class="card mprof press" data-go="rprofile"><span class="av" ${bg('avatar')}></span><span class="grow"><b>Ahmed Al Mansoori</b></span>${ic('chevR',18)}</button>
  <div class="card mlist">${row2('car','Valet','data-go="valet"')}${row2('child','Crèche','data-go="creche"')}${row2('alert','Rules &amp; violations','data-go="violations"')}</div>
  <div class="card mlist">${row2('users','Community','data-go="rcommunity"')}${row2('search','Discover','data-go="discover"')}</div>
  <div class="card mlist">${row2('userp','Profile','data-go="rprofile"')}<button class="mrow" data-act="notif" role="switch" aria-checked="${S.notif}"><span class="tile-ic">${ic('bell',20)}</span><span class="grow"><b>Push notifications</b></span><span class="toggle" aria-checked="${S.notif}"></span></button>${row2('globe','Language','data-act="toast:lang"')}</div>
  <button class="logout press" data-act="logout">${ic('logout',18)} Log out</button>
  </div></div>${rnav('rmore')}</div>`; };
SCREENS.pevd = i => { const e=EVENTS[i], d=PEVD[i], on=S.rsvp[i];
  return `<div class="screen" data-light><div class="scroll" style="padding-bottom:210px"><article class="art annd"><div class="im" ${bg(e.img)}></div>
  <div class="pad stack" style="gap:12px;margin-top:18px"><span class="chip" style="align-self:flex-start;background:var(--clear);color:var(--dusk);text-transform:uppercase;letter-spacing:.05em">${d.cat}</span>
  <h1 class="t-title" style="font-size:26px;line-height:1.2">${e.t}</h1>
  <div class="by"><span class="byic">${ic('cal',17)}</span><div><b>${d.info[0][1]} · ${d.info[1][1].split(' – ')[0]}</b><span>${d.info[2][1]}</span></div></div>
  ${d.body.map(x=>`<p>${x}</p>`).join('')}
  <div class="card annfacts">${d.info.map(([l,v])=>`<div class="info"><span>${l}</span><span>${v}</span></div>`).join('')}</div>
  <div class="anngal">${d.gal.map(k=>`<div ${bg(k)}></div>`).join('')}</div>
  </div></article></div>
  <button class="floatback press" data-back aria-label="Back">${ic('back',20)}</button>
  <button class="floatback press" style="left:auto;right:20px" data-act="toast:annshare" aria-label="Share event">${ic('share',20)}</button>
  <div class="bfoot"><div class="r"><div><span>${on?'You’re going':e.meta}</span><b>${d.info[0][1]}</b></div><span class="du">${d.info[1][1].split(' – ')[0]}</span></div>
  ${on?`<div style="display:flex;gap:10px"><button class="btn btn-out press" style="flex:1" data-act="rsvp:${i}">Cancel RSVP</button><button class="btn btn-ink press" style="flex:1" data-act="toast:calendar">Add to calendar</button></div>`:`<button class="btn btn-ink btn-block press" data-act="rsvp:${i}">RSVP</button>`}</div></div>`; };
SCREENS.rnewreq = () => { const h=hrInit();
  return `<div class="screen"><div class="scroll" style="padding-bottom:40px">${head('Create your request','')}
  <div class="pad stack" style="margin-top:20px;gap:18px">
  <div><div class="flabel">Attachments <span>· maximum 5</span></div>
   <div class="attgrid"><button class="atttile press" data-act="hratt:doc">${ic('doc',22)}<span>Add document</span></button><button class="atttile press" data-act="hratt:photo">${ic('camera',22)}<span>Add photo</span></button></div>
   ${h.att.length?`<div class="attlist">${h.att.map((f,i)=>`<span class="attchip">${ic(f.endsWith('.pdf')?'doc':'camera',15)}${f}<button data-act="hrdel:${i}" aria-label="Remove ${f}">${ic('x',14)}</button></span>`).join('')}</div>`:''}</div>
  <div><div class="flabel">Describe your request</div><textarea class="box hrbox" data-hrtext placeholder="Write about your issue or query">${h.text}</textarea></div>
  <div><div class="flabel">Unit</div><div class="select ro">Tower B · 807</div></div>
  <div><div class="flabel">Category</div><button class="select press ${h.cat===null?'ph':''}" data-act="hrcatsheet" aria-haspopup="dialog">${h.cat===null?'Select category':RCATS[h.cat]} ${ic('chevD',18,1.8)}</button></div>
  <div><div class="flabel">Preferred service date</div><button class="select press ${h.date?'':'ph'}" data-act="hrdate" aria-haspopup="dialog">${h.date?`${longD(h.date)} ${h.date.slice(0,4)}`:'Select date'} ${ic('cal',18)}</button></div>
  <button class="urg" data-act="hrurg" role="checkbox" aria-checked="${h.urgent}"><span class="cb">${h.urgent?ic('check',14,2.6):''}</span>Mark as urgent</button>
  <button class="btn btn-ink btn-block press" data-act="hrsubmit">Submit request</button>
  </div></div></div>`; };
const updCard = (u,i) => `<button class="upd press" data-go="update:${i}"><div class="im" ${bg(u.img)}></div><h3>${u.title}</h3><div class="m"><span>${u.meta.replace(/^Amali Residences · /,'')}</span>${ic('arrowUR',18)}</div></button>`;

SCREENS.payments = () => `<div class="screen"><div class="scroll">${head('Payments','')}
  <div class="pad" style="margin-top:24px"><div class="summary"><div class="k">Total paid</div><div class="big">${aed('3,140,000')}</div>
    <div class="track"><div class="fill" style="--w:20%"></div></div>
    <div class="kv"><div><span class="k">Remaining</span><b>${aed('12,560,000')}</b></div><div style="text-align:right"><span class="k">Purchase price</span><b>${aed('15,700,000')}</b></div></div></div>
  <div class="nextdue" style="margin-top:14px"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:14px">5% · Instalment 4 of 12</b><span class="chip c-sub">Due 15th Dec 2026</span></div>
    <div class="a">${aed('785,000')}</div>
    <div style="display:flex;gap:10px;margin-top:18px"><button class="btn btn-ink press" style="flex:1" data-act="toast:pay">Pay now</button><button class="btn btn-out press" style="flex:1" data-go="inst:0">Details</button></div></div>
  <div class="lh">Upcoming instalments <span>8 more</span></div><div class="stack">${[1,2,3,4,5,6,7,8].map(irow).join('')}</div>
  <div class="lh">Instalments history <span>3 paid</span></div><div class="stack">${[9,10,11].map(irow).join('')}
    <button class="btn btn-out press btn-block" style="margin-top:6px" data-act="toast:stmt">Email statement of account</button></div></div>
  </div>${bnav('payments')}</div>`;
SCREENS.payhist = () => `<div class="screen"><div class="scroll">${head('Payment history','')}
  <div class="pad" style="margin-top:24px"><div class="summary"><div class="k">Total paid to date</div><div class="big">${aed('3,140,000')}</div>
    <div class="track"><div class="fill" style="--w:20%"></div></div><div class="kv"><div><span class="k">Receipts</span><b>3</b></div><div style="text-align:right"><span class="k">Last payment</span><b>12 Aug 2026</b></div></div></div>
  <div class="lh">Instalments history <span>Tap to view</span></div><div class="stack">${[9,10,11].map(irow).join('')}
    <button class="btn btn-out press btn-block" style="margin-top:6px" data-act="toast:stmt">Email statement of account</button></div></div>
  </div>${bnav('more')}</div>`;
const irow = i => {const it=INSTS[i]; const num=/^\d+$/.test(it.d); const mon=(num?it.m.split(' ')[0]:it.d); const yr=num?'20'+it.m.split(' ')[1]:it.m;
  return `<button class="irow press" data-go="inst:${i}"><span class="ist ${it.ref?'pd':'up'}">${ic(it.ref?'check':'cal',18,it.ref?2.4:1.8)}</span>
  <div class="grow"><div class="t">${it.ms==='On handover'?'On handover · '+it.date:ordD(it.date)}</div><div class="s">${it.pct} · ${it.n}</div></div>
  <div class="r">${aed(it.amt)}</div></button>`;};

SCREENS.inst = i => {const it=INSTS[i];const rows=[['Unit','Amali Residences · A-1204'],['Stage',it.ms],['Milestone',`${it.pct} of purchase price`],['Due date',ordD(it.date)],...(it.ref?[['Paid on',ordD(it.on)],['Payment method',it.via],['Receipt no.',it.ref]]:[['Status','Not yet paid']])];
  return `<div class="screen"><div class="scroll">${head(it.n,'Amali Residences · A-1204')}<div class="pad" style="margin-top:24px">
  <div class="card" style="padding:20px"><div style="display:flex;justify-content:space-between;align-items:center"><span class="muted" style="font-size:13px;font-weight:500">Amount</span>${it.ref?'<span class="chip c-done">Paid</span>':'<span class="chip c-sub">Upcoming</span>'}</div>
    <div style="font-size:34px;font-weight:600;margin:6px 0 10px">${aed(it.amt)}</div>${rows.map(([l,v])=>`<div class="info"><span>${l}</span><span>${v}</span></div>`).join('')}
    </div>
  <button class="btn btn-ink btn-block press" style="margin-top:20px" data-act="${it.ref?'toast:receipt:'+it.ref:'toast:stmt'}">${it.ref?'Download receipt':'Email statement of account'}</button></div></div>${bnav('payments')}</div>`;};

SCREENS.updates = () => {const f=S.flt;const list=UPDATES.map((u,i)=>[u,i]).filter(([u])=>f===0||(f===1&&u.cat==='Construction')||(f===2&&u.cat==='Events'));
  return `<div class="screen"><div class="scroll">${head('Announcements','')}<div class="pad stack" style="margin-top:20px;gap:14px">
  <label class="searchf">${ic('search',18)}<input placeholder="Search updates" aria-label="Search updates"></label>
  <div class="chips">${['All','Construction','Events','Notices'].map((c,i)=>`<button class="fchip" data-act="flt:${i}" aria-pressed="${f===i}">${c}</button>`).join('')}</div>
  ${list.length?list.map(([u,i])=>updCard(u,i)).join(''):'<div class="empty">No notices right now. You’ll be notified when Amali posts one.</div>'}</div></div>${bnav('home')}</div>`;};

SCREENS.update = i => {const u=UPDATES[i];return `<div class="screen"><div class="scroll"><article class="art"><div class="im" ${bg(u.img)}></div>
  <div class="pad stack" style="gap:12px;margin-top:16px"><span class="tag">${u.cat}</span><h1 class="t-title" style="font-size:26px">${u.title}</h1><div class="small muted" style="font-weight:500;font-size:13px">${u.meta}</div><p>${u.body}</p>
  <div class="list-card" style="margin-top:6px"><button class="row press" data-act="toast:report"><span class="tile-ic">${ic('download',20)}</span><div class="grow"><div class="t">Progress report</div><div class="s">PDF · 2.4 MB</div></div>${ic('chevR',18)}</button>
  <button class="row press" data-act="toast:video"><span class="tile-ic">${ic('playc',20)}</span><div class="grow"><div class="t">Drone walkthrough</div><div class="s">Video · 1:42</div></div>${ic('chevR',18)}</button></div>
  </div></article></div>
  <button class="floatback press" data-back aria-label="Back">${ic('back',20)}</button>
  <button class="floatback press" style="left:auto;right:20px" data-act="toast:share" aria-label="Share update">${ic('share',20)}</button>${bnav('home')}</div>`;};

SCREENS.construction = () => {const t=S.cuTab;const items=[['02 Oct 2026','Tower structure reaches level 32','Main structure topped out at level 32. Next: facade glazing on levels 20–32.','facade','1 / 6'],['04 Sep 2026','Facade installation begins on the podium','Glazing and cladding works started on the podium levels.','tower','1 / 5'],['20 Aug 2026','Finishes palette approved','Kitchen and flooring materials for all 2-bedroom units signed off.','dining','1 / 3']];
  const body = t===0?items.map(([d,h,p,img,n],i)=>`<div class="tl ${i===0?'latest':''}"><div class="rail"><span class="dot"></span><span class="ln"></span></div><div class="b"><span class="date">${d}</span><h3>${h}</h3><div class="im" ${bg(img)}><span class="cnt">${n}</span></div><p>${p}</p></div></div>`).join('')
   : t===1?`<div class="photos">${['facade','tower','living','dining','view','lounge','aerial'].map(k=>`<div ${bg(k)}></div>`).join('')}</div>`
   : `<div class="stack" style="gap:14px">${[['Drone walkthrough · October','1:42','tower'],['Show apartment tour','2:15','living']].map(([a,b,k])=>`<button class="video press" ${bg(k)} data-act="toast:video"><span class="pl"><span>${ic('play',22,0)}</span></span><span class="cap"><b>${a}</b><span>Video · ${b}</span></span></button>`).join('')}</div>`;
  return `<div class="screen"><div class="scroll">${head('Construction updates','')}<div class="pad" style="margin-top:20px">
  <div class="seg" role="tablist" style="margin:0 0 24px">${['Latest','Photos','Videos'].map((l,i)=>`<button role="tab" aria-selected="${t===i}" data-act="cu:${i}">${l}</button>`).join('')}</div>${body}</div></div>${bnav('home')}</div>`;};

SCREENS.myunit = () => {const t=S.muTab;const open=reqs().filter(r=>r.step<3).length;
  const steps=[['done','SPA signed','12 Mar 2025'],['done','Oqood registered','02 Apr 2025'],['cur','Construction','68% complete · Stage 5 of 8'],['up','Completion notice','Expected Sep 2030'],['up','Snagging inspection','After completion notice',true],['up','Key handover','Est. Q4 2030']];
  const ov = `<div class="tiles">${[['2 Bed','Unit details','unit','act:mu:1'],[`02`,'Co-owners','users','go:coowners'],[String(open).padStart(2,'0'),'Open requests','wrench','go:requests'],['9 files','Documents','doc','go:documents']].map(([v,l,i,a])=>{const [k,...r]=a.split(':');return `<button class="tile press" data-${k}="${r.join(':')}"><span class="ic">${ic(i,19)}</span><span><b>${v}</b><br><span>${l}</span></span></button>`;}).join('')}</div>
   <div class="card" style="padding:20px;margin-top:16px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><b style="font-size:16px">Handover journey</b><span class="link" style="font-size:12px">Step 3 of 6</span></div>
   ${steps.map(([s,tt,sub,act])=>`<div class="jstep ${s}"><div class="rail"><span class="dt">${s==='done'?ic('check',14,2.4):''}</span><span class="ln"></span></div><div class="b"><b>${tt}</b><span>${sub}</span>${act?'<br><button class="link" data-go="snagging">Book a slot ›</button>':''}</div></div>`).join('')}</div>`;
  const det = `<div class="card" style="padding:20px">${[['Unit details',[['Contract ID','AMR-SPA-0412'],['Unit type','2 Bedroom'],['Sold status','Not handed over'],['Occupancy status','Not occupied'],['Residing in this unit','No']]],['Area',[['Saleable area','1,384 sq ft'],['Balcony','212 sq ft']]],['Tax details',[['Block','Tower A'],['Unit','1204'],['TRN number','—'],['Billing name','Ahmed Al Mansoori']]]].map(([g,rows])=>`<div class="grp">${g}</div>${rows.map(([l,v])=>`<div class="info"><span>${l}</span><span>${v}</span></div>`).join('')}`).join('')}</div>`;
  return `<div class="screen"><div class="scroll">${head('My unit','',{back:S.stack.length>1})}<div class="pad" style="margin-top:20px">
  <div class="card usum"><div class="th" ${bg('tower')}></div><div class="grow"><div style="font-size:15px;font-weight:600">Amali Residences · A-1204</div><div class="small muted" style="font-weight:500;margin:3px 0">2 Bedroom · Tower A · Dubai Canal</div><button class="link" data-act="units">Change unit</button></div></div>
  <div class="seg" role="tablist" style="margin:16px 0">${['Overview','Unit details'].map((l,i)=>`<button role="tab" aria-selected="${t===i}" data-act="mu:${i}">${l}</button>`).join('')}</div>${t===0?ov:det}</div></div>${bnav('more')}</div>`;};

SCREENS.coowners = () => `<div class="screen"><div class="scroll">${head('Co-owners','')}<div class="pad stack" style="margin-top:20px;gap:12px">
  ${[['AM','Ahmed Al Mansoori','ahmed.m@email.com','60%',true],['FM','Fatima Al Mansoori','fatima.m@email.com','40%',false]].map(([a,n,e,s,p])=>`<div class="owner"><div class="t"><span class="ini">${a}</span><div class="grow"><div style="display:flex;gap:8px;align-items:center"><b style="font-size:15px">${n}</b>${p?'<span class="chip c-sub">Primary</span>':''}</div><div class="small muted" style="font-weight:500;margin-top:3px">${e}</div></div><span class="sh">${s}</span></div><div class="track"><div class="fill" style="--w:${s}"></div></div></div>`).join('')}
  <p class="muted" style="font-size:13px;line-height:1.5">Ownership changes are processed by Amali CRM and reflected on the Oqood certificate.</p>
  <button class="btn btn-out press btn-block" data-act="toast:addco">Request co-owner change</button></div></div>${bnav('myunit')}</div>`;

SCREENS.documents = () => `<div class="screen"><div class="scroll">${head('Documents','')}<div class="pad" style="margin-top:20px"><div class="list-card">
  ${DOCS.map(([t,s],i)=>`<button class="doc press" data-act="doc:${i}"><span class="tile-ic">${ic('doc',20)}</span><div class="grow"><div style="font-size:14px;font-weight:600">${t}</div><div class="small muted" style="font-weight:500;margin-top:2px">${s}</div></div><span class="dl">${ic('download',18)}</span></button>`).join('')}
  <button class="doc press" data-act="toast:locked"><span class="tile-ic" style="background:var(--tint-n);color:var(--sec)">${ic('doc',20)}</span><div class="grow"><div style="font-size:14px;font-weight:600">Completion notice</div><div class="small muted" style="font-weight:500;margin-top:2px">Issued once construction is complete</div></div><span class="chip c-lock">At completion</span></button>
  </div></div></div>${bnav('more')}</div>`;

SCREENS.requests = () => {const all=reqs();const o=all.filter(r=>r.step<3),c=all.filter(r=>r.step===3);const list=S.rqTab===0?o:c;
  return `<div class="screen"><div class="scroll">${head('Service requests','',{back:S.stack.length>1})}<div class="pad stack" style="margin-top:20px;gap:12px">
  <div class="seg" role="tablist">${[`Open (${o.length})`,'Closed'].map((l,i)=>`<button role="tab" aria-selected="${S.rqTab===i}" data-act="rq:${i}">${l}</button>`).join('')}</div>
  ${list.length?list.map(r=>`<button class="req press" data-go="request:${r.id}"><span class="tile-ic">${ic('wrench',20)}</span><div class="grow"><div class="m">${r.id} · ${r.date}</div><div class="c">${r.cat}</div>${chip(r.step)}</div>${ic('chevR',18)}</button>`).join(''):'<div class="empty">No open requests. Raise one any time.</div>'}
</div></div><button class="fab press" data-go="newrequest" aria-label="New request">${ic('plus',24)}</button>${bnav('requests')}</div>`;};

SCREENS.newrequest = () => `<div class="screen"><div class="scroll">${head('New request','')}<div class="pad stack" style="margin-top:20px;gap:18px">
  <div class="field"><label>Category</label><button class="select press ${S.cat===null?'ph':''}" data-act="catsheet">${S.cat===null?'Select a category':CATS[S.cat]} ${ic('chevD',18,1.8)}</button></div>
  ${S.cat===SNAG?`<div class="field"><label>Inspection date *</label><button class="select press ${S.sdate?'':'ph'}" data-act="sdate" aria-haspopup="dialog">${S.sdate?`${longD(S.sdate)} ${S.sdate.slice(0,4)}`:'Select a date'} ${ic('cal',18)}</button><span class="small muted" style="font-weight:500">Inspections run Sunday to Thursday, from 2 days ahead.</span></div>`:''}
  <div class="field"><label for="cmt">Comments *</label><textarea id="cmt" class="box" data-model="comment">${S.comment}</textarea></div>
  ${S.attached?`<div class="attach on">${ic('clip',18)}<span class="grow">IMG_2041.jpg</span><button class="link" data-act="detach">Remove</button></div>`:`<button class="attach press" data-act="attach">${ic('clip',18)} Attach photos or documents</button>`}
  <button class="btn btn-ink btn-block press" style="margin-top:10px" data-act="submit">Submit request</button></div></div>${bnav('')}</div>`;

SCREENS.request = id => {const r=reqs().find(x=>x.id===id)||reqs()[0];const dates=r.step===0?[r.date,'—','—','—']:r.step===2?[r.date,'29 Sep 2026','01 Oct 2026','—']:[r.date,'Next day','3 days later','1 week later'];
  const st=['Submitted','Assigned to Amali CRM','In progress','Resolved'];
  return `<div class="screen"><div class="scroll">${head('Request detail',r.cat)}<div class="pad stack" style="margin-top:20px;gap:14px">
  <div class="card" style="padding:20px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b style="font-size:18px">${r.id}</b>${chip(r.step)}</div>
   ${[['Category',r.cat],['Unit','A-1204'],['Raised on',r.date]].map(([l,v])=>`<div class="info"><span>${l}</span><span>${v}</span></div>`).join('')}
   <div style="padding-top:14px"><div class="muted" style="font-size:13px;font-weight:500;margin-bottom:6px">Comments</div><div style="font-size:14px;font-weight:500;line-height:1.5">${r.text}</div></div></div>
  <div class="card" style="padding:20px"><b style="font-size:16px;display:block;margin-bottom:14px">Status</b>${st.map((s,i)=>{const cls=i<r.step||r.step===3?'done':i===r.step?'cur':'up';return `<div class="jstep ${cls}"><div class="rail"><span class="dt">${cls==='done'?ic('check',14,2.4):''}</span><span class="ln"></span></div><div class="b"><b>${s}</b><span>${dates[i]}</span></div></div>`;}).join('')}</div>
  <div class="cin"><input placeholder="Add a comment" aria-label="Add a comment" data-enter="comment"><button class="send press" data-act="comment" aria-label="Send">${ic('arrowR',18)}</button></div></div></div>${bnav('')}</div>`;};

SCREENS.snagging = () => `<div class="screen"><div class="scroll">${head('Snagging inspection','')}<div class="pad stack" style="margin-top:20px;gap:14px">
  <div class="card usum"><div class="th" ${bg('tower')}></div><div class="grow"><div style="font-size:15px;font-weight:600">Amali Residences · A-1204</div><div class="small muted" style="font-weight:500;margin:3px 0">2 Bedroom · 1,384 sq ft</div><span class="link" style="color:var(--green)">Completion notice · Sep 2030</span></div></div>
  <b style="font-size:15px">Select a day · Oct 2030</b>
  <div class="days">${DAYS.map(([w,n],i)=>`<button class="day press" data-act="day:${i}" aria-pressed="${S.day===i}"><span>${w}</span><b>${n}</b></button>`).join('')}</div>
  <b style="font-size:15px">Available slots</b>
  <div class="slots">${SLOTS.map((t,i)=>`<button class="slot press" data-act="slot:${i}" aria-pressed="${S.slot===i}" ${i===3?'disabled':''}>${t}</button>`).join('')}</div>
  <button class="trow" data-act="third" role="switch" aria-checked="${S.third}"><span class="grow">I’ll bring a third-party snagging inspector</span><span class="toggle" aria-checked="${S.third}"></span></button>
  <button class="btn btn-ink btn-block press" style="margin-top:10px" data-act="book">Confirm · ${slotLabel()}</button></div></div>${bnav('myunit')}</div>`;
const slotLabel = () => `${DAYS[S.day][0]} ${DAYS[S.day][1]} Oct, ${SLOTS[S.slot]}`;

SCREENS.activity = () => {const n=[['Instalment reminder','Instalment 4 of 12 (5%) is due on 15th Dec 2026 for A-1204.','Today · 09:10','card',true,'payments'],['Service request updated','SR-20391 · Customisation & Upgrades is now in progress.','Yesterday · 16:42','wrench',true,'request:SR-20391'],['Construction milestone','Tower structure reaches level 32.','02 Oct 2026','building',false,'update:0'],['Co-owner added','Fatima Al Mansoori was added to A-1204.','20 Sep 2026','users',false,'coowners'],['Payment received','Receipt RCT-11842 is ready to download.','12 Aug 2026','check',false,'inst:9']];
  return `<div class="screen"><div class="scroll">${head('Activity',S.read?'All caught up':'2 unread',{back:S.stack.length>1,action:S.read?'':'<button class="link" data-act="readall">Mark all read</button>'})}<div class="pad stack" style="margin-top:20px">
  ${n.map(([t,b,tm,i,u,go])=>`<button class="notif press ${u&&!S.read?'unread':''}" data-go="${go}" style="text-align:left;width:100%"><span class="tile-ic">${ic(i,20)}</span><div class="grow"><div class="t">${t}</div><p>${b}</p><div class="tm">${tm}</div></div>${u&&!S.read?'<span class="ud"></span>':''}</button>`).join('')}</div></div>${bnav('more')}</div>`;};

SCREENS.profile = () => {const row=(t,s,v,i,a)=>`<button class="row press" ${a}><span class="tile-ic">${ic(i,20)}</span><div class="grow"><div class="t">${t}</div>${s?`<div class="s">${s}</div>`:''}</div>${v?`<span class="v">${v}</span>`:''}${ic('chevR',18)}</button>`;
  const open=reqs().filter(r=>r.step<3).length;
  return `<div class="screen"><div class="scroll">${head('Profile','')}<div class="pad stack" style="margin-top:20px;gap:12px">
  <div class="prof"><div class="ph" ${bg('avatar')}></div><b>Ahmed Al Mansoori</b><div style="display:flex;flex-direction:column;gap:3px"><span>ahmed.m@email.com</span><span>+971 50 123 4567</span></div><button class="ed press" data-act="toast:personal">Edit personal details</button></div>
  <div class="list-card"><div class="gtitle">My units</div>${row('Tower A · 1204','Amali Residences · 2 Bedroom','Change','unit','data-act="units"')}</div>
</div></div>${bnav('more')}</div>`;};

const PROMPTS = ['Give me the Sales & Purchase Agreement','When is my next instalment?','Show construction progress','Book snagging inspection'];
SCREENS.aura = () => `<div class="screen"><div class="scroll" style="padding-bottom:200px"><div class="aura-head"><button class="back press" data-back aria-label="Back">${ic('back',20)}</button><span class="orb"><span>${ic('spark',20)}</span></span><div class="grow"><b>AMALI Assistant</b><div class="online"><i></i>Your Amali concierge · Online</div></div><button class="back press" data-act="newchat" aria-label="New chat">${ic('plus',18)}</button></div>
  <div class="pad stack" style="margin-top:24px;gap:14px"><div><h1 class="t-title">Good evening, Ahmed</h1></div>
  <div class="pchips">${PROMPTS.map((p,i)=>`<button class="pchip press" data-act="ask:${i}">${ic('spark',15)}${p}</button>`).join('')}</div>
  <div class="msgs" id="msgs">${S.chat.map(renderMsg).join('')}${S.typing?`<div class="msg ai"><span class="orb sm"><span>${ic('spark',12)}</span></span><div class="bub typing"><i></i><i></i><i></i></div></div>`:''}</div>
  <p class="disc">Amali Assistant can make mistakes. For payments and legal documents, Amali CRM has the final word.</p></div></div>
  <div class="chat-in"><input placeholder="Ask Amali Assistant…" aria-label="Message Amali Assistant" data-enter="chat"><button class="send press" data-act="chat" aria-label="Send">${ic('arrowR',18)}</button></div></div>`;
const renderMsg = m => m.me?`<div class="msg me"><div class="bub">${m.text}</div></div>`
  : `<div class="msg ai"><span class="orb sm"><span>${ic('spark',12)}</span></span><div class="bub">${m.text}</div></div>${m.card==='doc'?docCard():''}${m.card==='inst'?`<div class="acard"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:13px;color:var(--sec)">5% · Instalment 4 of 12</b><span class="chip c-sub">Due 15th Dec 2026</span></div><div style="font-size:24px;font-weight:600">${aed('785,000')}</div><div style="display:flex;gap:8px"><button class="btn btn-ink press" data-go="inst:0">View</button><button class="btn btn-out press" data-go="payments">Schedule</button></div></div>`:''}${m.go?`<div style="margin-left:36px"><button class="btn btn-out press" style="height:40px" data-go="${m.go}">${m.goLabel} ${ic('arrowR',16)}</button></div>`:''}`;
const ANSWERS = [
  {text:'Here is your signed Sales &amp; Purchase Agreement for Tower A · 1204.', card:'doc'},
  {text:'Your next instalment for Tower A · 1204 is due on 15 Dec 2026.', card:'inst'},
  {text:'Tower A is 68% built — Stage 5 of 8 (structure &amp; facade), RERA verified in Sep 2026. Estimated handover is Q4 2030.', go:'construction', goLabel:'See construction updates'},
  {text:'Snagging inspections open once the completion notice is issued, expected Sep 2030. You can pick a day and time slot now.', go:'snagging', goLabel:'Choose a slot'},
  {text:'I can raise that for you. I’ve prefilled a Mortgage NOC request — add any details and submit.', go:'newrequest', goLabel:'Open the request'}
];
const OWNER = {name:'Ahmed Al Mansoori', unit:'A-1204'};
const SPA_FILE = `${OWNER.name} ${OWNER.unit} SPA.pdf`;
const answerFor = q => {q=q.toLowerCase();if(/spa\b|agreement|sales.*purchase|purchase agreement/.test(q))return ANSWERS[0];if(/instal|pay|due|amount/.test(q))return ANSWERS[1];if(/construct|progress|built|stage|possession/.test(q))return ANSWERS[2];if(/snag|inspect/.test(q))return ANSWERS[3];if(/noc|mortgage|request/.test(q))return ANSWERS[4];
  return {text:'I can help with your instalments, construction progress, documents, co-owners and service requests. Try one of the suggestions above.'};};
const docCard = () => `<div class="acard"><div style="display:flex;gap:12px;align-items:center"><span class="pdf">${ic('doc',20)}<b>PDF</b></span><div class="grow"><div style="font-size:14px;font-weight:600;line-height:1.35">${SPA_FILE}</div><div class="small muted" style="font-weight:500;margin-top:3px">3.1 MB · Signed 12 Mar 2025</div></div></div><div style="display:flex;gap:8px"><button class="btn btn-ink press" data-act="spa:dl">Download</button><button class="btn btn-out press" data-act="spa:mail">Email</button></div></div>`;

/* ================= RESIDENT FLOW (after unit switch) ================= */
Object.assign(P, {
  car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
  child:'<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>',
  amen:'<path d="M19 5a2 2 0 0 0-2 2v11"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M7 13h10"/><path d="M7 9h10"/><path d="M9 5a2 2 0 0 0-2 2v11"/>',
  alert:'<path d="m21.7 18-8-14a2 2 0 0 0-3.5 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  chat:'<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z"/>',
  headset:'<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  chevL:'<path d="M15 6l-6 6 6 6"/>',
  key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/>'
});
Object.assign(PF, {
  users:'<circle cx="9" cy="8" r="3.8"/><path d="M2.5 20.5a6.5 6.5 0 0 1 13 0z"/><circle cx="17" cy="8.5" r="3"/><path d="M16.5 14a6 6 0 0 1 5 6.5h-4a8 8 0 0 0-1-6.5z"/>',
  search:'<path fill-rule="evenodd" d="M11 3.5a7.5 7.5 0 0 1 5.9 12.1l3.8 3.8-1.3 1.3-3.8-3.8A7.5 7.5 0 1 1 11 3.5zm0 2.6a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8z"/>'
});
const RNAVS = [['rhome','Home','amali'],['rmyunit','My Unit','unit'],['helpdesk','Requests','headset'],['ramenities','Amenities','amen'],['rmore','More','more']];
const rnav = active => `<nav class="bnav" aria-label="Main">${RNAVS.map(([id,l,i])=>`<button data-tab="${id}" ${active===id?'aria-current="page"':''}>${active===id?(PF[i]?icf(i,22):ic(i,22,2.2)):ic(i,22,1.5)}${l}</button>`).join('')}</nav>`;
const RES_KEYS = ['amres','amdone','annd','revd','rcommunity','rnotifs','rchats','rchat','rmyunit','violations','rhome','ramenities','valet','creche','crbook','crdone','helpdesk','discover','rprofile','rassistant','rmore','rnewreq'];
const isRes = k => RES_KEYS.includes(k.split(':')[0]);
const dhead = t => `<div class="pad section-head" style="margin-bottom:16px">${t}</div>`;
const shd = (eye,title,link,attr='') => `<div class="section-head shd"><div><h2>${title}</h2><span class="shbar"></span></div>${link?`<button class="link vall press" ${attr}>${link}<svg class="va" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>`:''}</div>`;

/* ---- data ---- */
const RANN = [['Event','var(--tint-g)','var(--tx-g)','UAE National Day on the Community Terrace','Celebrate with your neighbours on 2 December: live oud, Emirati coffee and fireworks views from 7 PM.','16 Oct 2026, 9:40 AM'],
  ['Important','var(--tint-a)','var(--tx-a)','Pest control service','Dear residents, the quarterly pest control service will cover all common areas and apartments in Tower B this week.','20 Oct 2026, 3:02 PM'],
  ['Notice','var(--tint-n)','var(--tx-n)','Adult Pool maintenance on Sunday','The Adult Pool on level 40 will be closed from 7 AM to 1 PM for routine cleaning and water balancing.','18 Oct 2026, 11:15 AM']];
const REVENTS = [
  {cat:'Music', d:'23', m:'OCT', t:'Sunset Sessions: live jazz & oud', time:'Fri · 6:30 PM', where:'Community Terrace', left:'42 attending', img:'evSunset', gal:['evSunsetG1','evSunsetG2'],
   body:['An evening of live music as the sun sets over the city. A jazz trio joins oud player Khalid Al Harthy for two sets of classics and Arabic standards.','Mocktails and light bites are served on the terrace. Seating is first come, first served, so arrive early for the best views.'],
   info:[['Date','Friday, 23 October'],['Time','6:30 PM – 9:00 PM'],['Where','Community Terrace · Level 40'],['Entry','Free for residents · 2 guests each']]},
  {cat:'Family', d:'25', m:'OCT', t:'Family movie night under the stars', time:'Sun · 7:00 PM', where:'Podium lawn', left:'58 attending', img:'evMovie', gal:['evMovieG1','evMovieG2'],
   body:['Bring blankets and the kids for an animated classic on the big outdoor screen. Popcorn and juice are on us.','Bean bags are provided for the first 40 guests.'],
   info:[['Date','Sunday, 25 October'],['Time','7:00 PM – 9:00 PM'],['Where','Podium lawn · Level 3'],['Entry','Free for residents']]},
  {cat:'Sports', d:'31', m:'OCT', t:'Residents’ padel tournament', time:'Sat · 8:00 AM', where:'Padel Court', left:'24 attending', img:'evPadel', gal:['evPadelG1','evPadelG2'],
   body:['A friendly doubles tournament for all levels. Matches are short, so everyone plays at least three games.','Prizes for the winners and runners-up, plus breakfast for all players.'],
   info:[['Date','Saturday, 31 October'],['Time','8:00 AM – 12:00 PM'],['Where','Padel Court · Podium deck'],['Entry','Teams of two · free']]},
  {cat:'Wellness', d:'06', m:'NOV', t:'Sunrise yoga by the pool', time:'Fri · 6:30 AM', where:'Adult Pool deck', left:'16 attending', img:'evYoga', gal:['evYogaG1','evYogaG2'],
   body:['Start the weekend with a gentle flow class led by a certified instructor. Suitable for beginners.','Mats and towels are provided. Fresh juice is served after class.'],
   info:[['Date','Friday, 6 November'],['Time','6:30 AM – 7:30 AM'],['Where','Adult Pool deck · Level 40'],['Entry','Free for residents']]}];
const ANND = [
  {img:'anDay', gal:['anDayG1','anDayG2'], from:'Amali Residences community team',
   body:['Join your neighbours on the Community Terrace to celebrate UAE National Day. The evening opens with live oud and Emirati coffee, followed by a family dinner buffet and the best seats in the tower for the fireworks.','Children are welcome. The Kids’ Playroom on level 3 stays open until 9 PM, and crèche staff will run henna and colouring stations on the terrace.'],
   info:[['Date','Wednesday, 2 December'],['Time','7:00 PM – 10:30 PM'],['Where','Community Terrace · Level 40'],['Entry','Free for residents · 2 guests each']],
   cta:['RSVP for the evening','toast:annrsvp']},
  {img:'anPest', gal:['anPestG1','anPestG2'], from:'Facilities management · Tower B',
   body:['Our pest control partner will treat all common areas and apartments in Tower B this week as part of the quarterly programme. The treatment is odourless and safe for children and pets once dry.','Please keep food covered and allow the team access during your slot. If no one is home, the concierge can let them in with your approval.'],
   info:[['Dates','20 – 24 October'],['Your slot','Thursday, 22 October · 10 AM – 12 PM'],['Duration','About 30 minutes per apartment'],['Contact','Community desk · 24/7']],
   cta:['Change my slot','toast:annslot']},
  {img:'anPool', gal:['anPoolG1','anPoolG2'], from:'Amenities team',
   body:['The Adult Pool on level 40 will close on Sunday morning for routine cleaning and water balancing. The Kids’ Pool and the Sky Gym stay open as usual.','We expect to reopen at 1 PM. If anything changes, we’ll post an update here and send a notification.'],
   info:[['Date','Sunday, 25 October'],['Closed','7:00 AM – 1:00 PM'],['Open instead','Kids’ Pool · Sky Gym']],
   cta:['See amenity hours','go:ramenities']}];
const BUZZ = [['Our toy library in the Kids’ Playroom is finally ready. Thanks to all residents who contributed!','AH','Ayesha Hanzari','22 Oct 2026, 10:30 PM'],['Sunset yoga on the Community Terrace this Friday at 6 PM. All levels welcome!','RK','Rhea Kapoor','21 Oct 2026, 6:12 PM']];
const BAZ = [['Sale','Smart TV 55"','1,200','Tower B · 1802','bzTv'],['Free','Book set · 12 titles','Free','Tower B · 0904','bzBooks'],['Service','Car detailing at your bay','150','Tower B · 1507','bzCar'],['Sale','Oak study desk','350','Tower B · 2201','bzDesk']];
const AMEN = [['Sky Gym','Level 40 · Open 24 hours','amSkyGym','open',1],['Adult Pool','Level 40 · 6 AM – 10 PM','amPool','open',2],['Padel Court','Podium deck · 7 AM – 10 PM','amPadel','full',2],['Kids’ Playroom','Level 3 · 8 AM – 8 PM','amKids','open',3],['Screening Room','Level 3 · seats 14','amCinema','book',4],['Residents Club Lounge','Lobby level · 8 AM – 11 PM','amLounge','open',4],['Private Dining','Clubhouse · seats 12','amDining','book',5],['Co-working Space','Level 2 · Open 24 hours','amCowork','open',6],['Music Room','Level 41 · 10 AM – 10 PM','amMusic','book',4],['Yoga Studio','Pool deck · 6 AM – 9 PM','amYoga','open',1],['Spa Treatment Room','Level 41 · 9 AM – 9 PM','amSpa','book',1],['Cigar Lounge','Level 41 · 6 PM – 12 AM','amCigar','book',4]];
const AMCATS = ['All','Wellness','Pools & outdoor','Family & kids','Social','Dining','Work'];
const AST = {open:['Open now','open'],book:['Reserve a slot','book'],full:['Fully reserved today','full']};
const AMX = {'Sky Gym':[6,22,1,8],'Adult Pool':[6,22,1,8],'Padel Court':[7,22,1,4],'Kids’ Playroom':[8,20,1,6],'Screening Room':[10,22,2,14],'Residents Club Lounge':[8,23,1,10],'Private Dining':[12,22,2,12],'Co-working Space':[7,21,1,6],'Music Room':[10,22,1,6],'Yoga Studio':[6,21,1,12],'Spa Treatment Room':[9,21,1,2],'Cigar Lounge':[18,24,1,8]};
const FAMILY = [['Fatima','Spouse','FA'],['Aisha','Daughter · 4','AI'],['Zayd','Son · 9','ZA']];
const GUESTS = [['Khalid Rahman','Visited 18 Oct','KR'],['Sara Al Hashimi','Visited 11 Oct','SH'],['Daniel Okafor','Visited 2 Oct','DO']];
const amSlots = (name,k) => { const [o,c,len]=AMX[name]; const out=[]; const d=+k.slice(8); const full=k===TODAYK&&AMEN.find(a=>a[0]===name)[3]==='full';
  for(let h=o; h+len<=c; h+=len){ const left=full?0:Math.max(0,((d*7+h*5+name.length)%6)-(h===19?2:0)); out.push({h,len,left}); } return out; };
const amrInit = () => ({am:null, date:TODAYK, slot:null, ppl:{}, list:[{id:'r1',am:'Padel Court',date:'2026-10-17',h:7,len:1,ppl:['Khalid Rahman'],ref:'AR-2207'},{id:'r2',am:'Screening Room',date:'2026-10-24',h:18,len:2,ppl:['Fatima','Aisha','Zayd'],ref:'AR-2251'}], last:null, seq:0});
const CARS = [['Ferrari Roma','Dubai · R 12345 · Grigio Titanio','#8A8F96','coupe'],['Aston Martin DB12','Dubai · F 777 · British Racing Green','#2F4F3E','gt'],['Rolls-Royce Cullinan','Dubai · AA 1204 · Midnight Sapphire','#1F3A6B','suv']];
const ISSUES = [{id:'P1422',st:'new',t:'Parking issue',b:'Car with registration D-4456 is parked in my allotted bay. Please arrange for it to be moved.',d:'21 Oct 2026, 3:34 PM',by:'Ahmed Al Mansoori · 807',ini:'AM',r:'3 replies',mine:true},
  {id:'P1322',st:'prog',t:'Water leakage from the ceiling',b:'Water seepage has caused dampness on the ceiling and walls of the guest bathroom.',d:'19 Oct 2026, 5:34 PM',by:'Ahmed Al Mansoori · 807',ini:'AM',r:'5 replies',mine:true},
  {id:'P1310',st:'prog',t:'Lobby lights flickering',b:'Two ceiling lights near the Tower B lift lobby flicker in the evenings.',d:'18 Oct 2026, 8:10 PM',by:'Rhea Kapoor · 1507',ini:'RK',r:'1 reply',mine:false},
  {id:'P1298',st:'prog',t:'Kitchen sink not draining',b:'The kitchen sink drains very slowly since Monday. Please send a plumber.',d:'15 Oct 2026, 10:12 AM',by:'Ahmed Al Mansoori · 807',ini:'AM',r:'2 replies',mine:true},
  {id:'P1201',st:'done',t:'AC not cooling in bedroom',b:'Technician replaced the filter and recharged the unit.',d:'02 Oct 2026, 1:20 PM',by:'Ahmed Al Mansoori · 807',ini:'AM',r:'4 replies',mine:true}];
/* creche */
const CR_TODAY = {y:2026,m:9,d:12};
const CR_PEOPLE = {maria:['Maria','Nanny'],ahmed:['Ahmed','Parent'],fatima:['Fatima','Parent']};
const CR_ATT = {'2026-09-14':['9:05 AM','maria','1:02 PM','maria'],'2026-09-16':['10:01 AM','fatima','2:10 PM','ahmed'],'2026-09-21':['9:12 AM','maria','12:58 PM','maria'],'2026-09-23':['9:58 AM','maria','1:04 PM','ahmed'],'2026-09-28':['10:03 AM','fatima','12:55 PM','fatima'],'2026-09-30':['9:07 AM','maria','2:02 PM','ahmed'],'2026-10-01':['9:02 AM','maria','1:05 PM','ahmed'],'2026-10-05':['10:04 AM','maria','1:01 PM','maria'],'2026-10-06':['9:10 AM','fatima','12:03 PM','fatima'],'2026-10-08':['9:02 AM','maria','1:05 PM','ahmed']};
const CR_HOURS = [9,10,11,12,13,14,15,16,17,18,19];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const WDAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const pad2 = n => String(n).padStart(2,'0');
const ckey = (y,m,d) => `${y}-${pad2(m+1)}-${pad2(d)}`;
const hr = h => `${h%12||12}:00 ${h>=12?'PM':'AM'}`;
const longD = k => { const [y,m,d]=k.split('-').map(Number); return `${WDAYS[new Date(y,m-1,d).getDay()]}, ${d} ${MONTHS[m-1]}`; };
const TODAYK = ckey(CR_TODAY.y,CR_TODAY.m,CR_TODAY.d);
const CR_BASE = {9:3,10:3,11:1,12:4,13:2,14:0,15:5,16:6,17:6,18:5,19:4};
const crDays = () => Array.from({length:14},(_,i)=>{ const dt=new Date(CR_TODAY.y,CR_TODAY.m,CR_TODAY.d+i); return ckey(dt.getFullYear(),dt.getMonth(),dt.getDate()); });
const crInit = () => ({bookings:[], pl:{[TODAYK]:{...CR_BASE}}, bdate:TODAYK, start:null, dur:1, sel:'2026-10-08', ym:{y:2026,m:9}, last:null, seq:0, cancel:null});
const plOf = k => { const P=S.cr.pl; if(!P[k]){ const d=+k.slice(8); P[k]={}; CR_HOURS.forEach(h=>{ P[k][h]=Math.max(0,Math.min(6,4+((d*5+h*3)%5)-2)); }); } return P[k]; };
const mineH = (h,k=S.cr.bdate) => S.cr.bookings.some(b=>b.date===k && h>=b.from && h<b.to);
const freeH = (h,k=S.cr.bdate) => plOf(k)[h]>0 && !mineH(h,k);
const maxDur = s => { let n=0; for(let h=s; h<20 && freeH(h) && n<5; h++) n++; return n; };
const crBook = (from,to,date=S.cr.bdate) => { const id='b'+(++S.cr.seq); const pl=plOf(date); for(let h=from;h<to;h++) pl[h]--; const b={id,date,from,to,ref:'CR-'+(4810+S.cr.seq*7)}; S.cr.bookings.push(b); S.cr.last=id; return b; };
const dayLbl = k => { const [y,m,d]=k.split('-').map(Number); const wd=WDAYS[new Date(y,m-1,d).getDay()]; return k===TODAYK?`Today, ${d} ${MONTHS[m-1]}`:`${wd}, ${d} ${MONTHS[m-1]}`; };
const dayShort = k => { const [y,m,d]=k.split('-').map(Number); const t=new Date(CR_TODAY.y,CR_TODAY.m,CR_TODAY.d+1); return k===TODAYK?'Today':(d===t.getDate()&&m-1===t.getMonth()?'Tomorrow':`${WDAYS[new Date(y,m-1,d).getDay()].slice(0,3)} ${d} ${MONTHS[m-1].slice(0,3)}`); };
const carSvg = (color,kind) => { const body = kind==='suv'?`<path d="M10 58 L12 40 C14 34 22 32 32 31 L56 20 C62 17 70 16 80 16 L140 16 C150 16 156 20 160 26 L170 32 C176 34 180 40 180 46 L180 58 Z" fill="${color}"/><path d="M60 22 L98 20 L98 32 L50 33 Z M104 20 L142 20 L152 31 L104 32 Z" fill="#DCE7EF" opacity=".9"/>`
  : kind==='gt'?`<path d="M12 58 C16 47 30 43 48 41 L74 30 C86 25 106 24 122 27 L150 37 C164 39 172 44 178 50 L180 58 Z" fill="${color}"/><path d="M78 32 L118 28 L134 38 L70 41 Z" fill="#DCE7EF" opacity=".9"/>`
  : `<path d="M14 58 C18 48 34 44 52 42 L78 30 C88 26 104 25 118 27 L146 36 C160 38 170 42 176 50 L178 58 Z" fill="${color}"/><path d="M82 32 L114 29 L130 38 L74 41 Z" fill="#DCE7EF" opacity=".9"/>`;
  return `<svg width="190" height="74" viewBox="0 0 190 74" aria-hidden="true">${body}<rect x="10" y="56" width="172" height="4" rx="2" fill="#1A2026" opacity=".25"/><circle cx="48" cy="58" r="12" fill="#1A2026"/><circle cx="48" cy="58" r="5" fill="#B7C2CC"/><circle cx="148" cy="58" r="12" fill="#1A2026"/><circle cx="148" cy="58" r="5" fill="#B7C2CC"/></svg>`; };
const crPhoto = (who,tone) => { const coat = who==='ahmed'?'#4A667D':who==='fatima'?'#7A5A2E':'#5E6F6A'; const bgc = tone==='in'?'#E9EEF2':'#E4E9EE';
  return `<svg width="100%" height="100%" viewBox="0 0 326 220" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Photo of Aisha with ${CR_PEOPLE[who][0]}"><rect width="326" height="220" fill="${bgc}"/><rect x="214" y="30" width="86" height="165" rx="4" fill="#B9C6D0"/><rect x="224" y="40" width="66" height="155" rx="3" fill="#F4F7F9"/><rect y="195" width="326" height="25" fill="#C3CED7"/><g fill="${coat}"><circle cx="${tone==='in'?116:96}" cy="72" r="20"/><path d="M${tone==='in'?84:64} 195 L${tone==='in'?90:70} 112 Q${tone==='in'?116:96} 95 ${tone==='in'?142:122} 112 L${tone==='in'?148:128} 195 Z"/></g><g fill="#C2A26A"><circle cx="${tone==='in'?176:156}" cy="138" r="14"/><path d="M${tone==='in'?156:136} 195 L${tone==='in'?160:140} 162 Q${tone==='in'?176:156} 152 ${tone==='in'?192:172} 162 L${tone==='in'?196:176} 195 Z"/></g></svg>`; };

/* ---- RESIDENT HOME ---- */
SCREENS.rhome = () => `<div class="screen" data-light><div class="scroll"><div class="stagger-root">
  <section class="rhero"><div class="rimg rsl on" ${bg('tower')}></div><div class="rimg rsl" ${bg('lobbyDrop')}></div><div class="rimg rsl" ${bg('heroShowApt')}></div><div class="rimg rsl" ${bg('heroHoliday')}></div><div class="scrim"></div>
    <div class="wel wel-lux"><span class="g">Good evening</span><h1>Ahmed</h1><span class="wrule"></span></div></section>
  <section class="pad tpc-wrap">${(()=>{ const ac=activeCar(); const vs=ac===null?'3 parked':S.valet[ac]==='ready'?'At the doorstep':'On its way'; const sp=plOf(TODAYK)[16]||0;
    return `<div class="tpc-row">
    <button class="tpc press" data-go="valet" aria-label="Valet, ${vs}"><span class="ph" ${bg('valetCard')}></span><span class="sc"></span><span class="tx"><b>Valet</b><span>${vs}</span></span></button>
    <button class="tpc press" data-go="creche" aria-label="Crèche, ${sp} spots today"><span class="ph" ${bg('crecheCard')}></span><span class="sc"></span><span class="tx"><b>Crèche</b><span>${sp} spots today</span></span></button></div>`; })()}</section>
  <section class="pad" style="margin-top:14px"><button class="duesc press" data-tab="rmyunit"><span class="tile-ic" style="width:40px;height:40px">${ic('card',20)}</span><div class="grow"><span class="l">Dues · Service Charges</span><b>${aed('25,000')}</b></div><span class="pay">Pay now</span></button></section>
  <section style="margin-top:36px"><div class="pad">${shd('What’s on','Community events','View all','data-act="toast:revall"')}</div>
    <div class="carousel">${REVENTS.map((e,i)=>`<article class="ev rev press" data-go="revd:${i}" role="button" aria-label="${e.t}"><div class="im" ${bg(e.img)}><div class="datebox"><b>${e.d}</b><span>${e.m}</span></div><span class="evtag">${e.cat}</span></div>
      <div class="b"><h3>${e.t}</h3><div class="p">${e.time} · ${e.where}</div></div>
      <div class="f"><span>${S.rev[i]?'You’re going':e.left}</span><button class="rsvp press ${S.rev[i]?'on':''}" data-act="rrsvp:${i}">${S.rev[i]?'Going ✓':'RSVP'}</button></div></article>`).join('')}</div></section>
  <section style="margin-top:36px"><div class="pad">${shd('Reserve & enjoy','Amenities','View all','data-tab="ramenities"')}</div>
    <div class="carousel amtrain">${AMEN.map(([n,info,k,st],i)=>`<button class="ev amtile press" data-act="amopen:${i}" aria-label="${n}"><span class="im" ${bg(k)}></span><span class="b"><b>${n}</b></span></button>`).join('')}</div></section>
  <section style="margin-top:36px"><div class="pad">${shd('Community','Announcements','View all','data-act="toast:ann"')}</div>
    <div class="carousel">${RANN.map(([tg,bgc,fg,t,b,d],i)=>`<button class="ann press" data-go="annd:${i}"><h3>${t}</h3><p>${b}</p><span class="d">${ic('clock',15)}${d}</span></button>`).join('')}</div>
    <div class="cdots"><i class="on"></i><i></i><i></i></div></section>
  <section style="margin-top:36px"><div class="pad">${shd('','Amali projects','View all','data-act="dproj"')}</div>
    <div class="carousel">${[['Amali Island','Private island villas · Dubai','aerial'],['Amali Residences II','1–4 bedroom residences','tower'],['Amali Villas','Bespoke beachfront villas','villa']].map(([n,sb,k])=>`<button class="pban press" ${bg(k)} data-act="dproj"><div class="t"><b>${n}</b><span class="s">${sb}</span></div></button>`).join('')}</div></section>
  </div></div>${vbar()}<div class="stickytop"><button class="unitpill press" data-act="units" aria-label="Change unit" aria-haspopup="dialog"><span class="av" ${bg('avatar')}></span>Tower B · 807 ${ic('chevD',16,1.8)}</button>
    <div class="sticons"><button class="gbtn aibtn press" data-go="rassistant" aria-label="AMALI Assistant">${ic('spark',21,2)}</button><button class="gbtn press" data-go="rnotifs" aria-label="Notifications">${ic('bell',20)}${runread()?`<span class="badge">${runread()}</span>`:''}</button></div></div>
  ${rnav('rhome')}</div>`;

/* ---- ANNOUNCEMENT DETAIL ---- */
SCREENS.annd = i => { const [tg,bgc,fg,t,b,d]=RANN[i]; const a=ANND[i]; const [cl,ca]=a.cta;
  return `<div class="screen" data-light><div class="scroll"><article class="art annd"><div class="im" ${bg(a.img)}></div>
  <div class="pad stack" style="gap:12px;margin-top:18px"><span class="chip" style="align-self:flex-start;background:${bgc};color:${fg};text-transform:uppercase;letter-spacing:.05em">${tg}</span>
  <h1 class="t-title" style="font-size:26px;line-height:1.2">${t}</h1>
  <div class="by"><span class="byic">${ic('bell',17)}</span><div><b>${a.from}</b><span>${d}</span></div></div>
  ${a.body.map(x=>`<p>${x}</p>`).join('')}
  <div class="card annfacts">${a.info.map(([l,v])=>`<div class="info"><span>${l}</span><span>${v}</span></div>`).join('')}</div>
  <div class="eyebrow" style="margin-top:8px">Photos</div>
  <div class="anngal">${a.gal.map(k=>`<div ${bg(k)}></div>`).join('')}</div>
  <button class="btn btn-ink btn-block press" style="margin-top:6px" ${ca.startsWith('go:')?`data-go="${ca.slice(3)}"`:`data-act="${ca}"`}>${cl}</button>
  </div></article></div>
  <button class="floatback press" data-back aria-label="Back">${ic('back',20)}</button>
  <button class="floatback press" style="left:auto;right:20px" data-act="toast:annshare" aria-label="Share announcement">${ic('share',20)}</button>${rnav('')}</div>`; };

/* ---- EVENT DETAIL ---- */
SCREENS.revd = i => { const e=REVENTS[i]; const on=S.rev[i];
  return `<div class="screen" data-light><div class="scroll" style="padding-bottom:210px"><article class="art annd"><div class="im" ${bg(e.img)}></div>
  <div class="pad stack" style="gap:12px;margin-top:18px"><span class="chip" style="align-self:flex-start;background:var(--clear);color:var(--dusk);text-transform:uppercase;letter-spacing:.05em">${e.cat}</span>
  <h1 class="t-title" style="font-size:26px;line-height:1.2">${e.t}</h1>
  <div class="by"><span class="byic">${ic('cal',17)}</span><div><b>${e.info[0][1]} · ${e.info[1][1].split(' – ')[0]}</b><span>${e.info[2][1]}</span></div></div>
  ${e.body.map(x=>`<p>${x}</p>`).join('')}
  <div class="card annfacts">${e.info.map(([l,v])=>`<div class="info"><span>${l}</span><span>${v}</span></div>`).join('')}</div>
  <div class="eyebrow" style="margin-top:8px">Photos</div>
  <div class="anngal">${e.gal.map(k=>`<div ${bg(k)}></div>`).join('')}</div>
  </div></article></div>
  <button class="floatback press" data-back aria-label="Back">${ic('back',20)}</button>
  <button class="floatback press" style="left:auto;right:20px" data-act="toast:annshare" aria-label="Share event">${ic('share',20)}</button>
  <div class="bfoot"><div class="r"><div><span>${on?'You’re going':e.left}</span><b>${e.info[0][1]}</b></div><span class="du">${e.info[1][1].split(' – ')[0]}</span></div>
  ${on?`<div style="display:flex;gap:10px"><button class="btn btn-out press" style="flex:1" data-act="rrsvp:${i}">Cancel RSVP</button><button class="btn btn-ink press" style="flex:1" data-act="toast:calendar">Add to calendar</button></div>`:`<button class="btn btn-ink btn-block press" data-act="rrsvp:${i}">RSVP</button>`}</div></div>`; };

/* ---- AMENITIES ---- */
const amList = () => { const q=S.am.q.toLowerCase(); const l=AMEN.filter(a=>(S.am.cat===0||a[4]===S.am.cat)&&a[0].toLowerCase().includes(q));
  return l.length?l.map(([n,i,k,st])=>`<button class="amc press" data-act="amopen:${AMEN.findIndex(x=>x[0]===n)}"><div class="th" ${bg(k)}></div><div class="grow"><b>${n}</b><div class="i">${i}</div><span class="ast ${AST[st][1]}">${AST[st][0]}</span></div>${ic('chevR',18)}</button>`).join(''):'<div class="empty">No amenities match. Try another filter.</div>'; };
SCREENS.ramenities = () => `<div class="screen"><div class="scroll">${head('Amenities','',{back:S.stack.length>1})}<div class="pad stack" style="margin-top:16px;gap:14px">
  <label class="searchf">${ic('search',18)}<input placeholder="Search amenities" aria-label="Search amenities" data-amq value="${S.am.q}"></label>
  <div class="chips">${AMCATS.map((c,i)=>`<button class="fchip" data-act="amcat:${i}" aria-pressed="${S.am.cat===i}">${c}</button>`).join('')}</div>
  <div class="amfeat" ${bg('amTerrace')}><div class="t"><b>Community Terrace</b><span>Sunset sessions · 5 – 8 PM · open to all residents</span></div></div>
  ${S.amr.list.length?`<div class="eyebrow" style="margin-top:10px">Your reservations</div>${[...S.amr.list].sort((x,y)=>x.date.localeCompare(y.date)).map(r=>`<div class="bkc"><div class="r"><span class="tile-ic">${ic('cal',20)}</span><div class="grow"><div class="s" style="margin:0 0 2px;font-weight:600;color:var(--dusk)">${dayLbl(r.date)}</div><b>${r.am}</b><div class="s">${hr(r.h)} – ${hr(r.h+r.len)} · ${r.ppl.length?'You + '+r.ppl.length:'Just you'} · Ref ${r.ref}</div></div><span class="chip c-done">Reserved</span></div><div class="ac"><button class="press" data-act="toast:calendar">Add to calendar</button><button class="danger press" data-act="amcancel:${r.id}">Cancel reservation</button></div></div>`).join('')}`:''}
  <div class="eyebrow" style="margin-top:10px">All amenities</div><div class="stack" id="amlist">${amList()}</div></div></div>${rnav('ramenities')}</div>`;

/* ---- AMENITY RESERVATION ---- */
SCREENS.amres = i => { const a=AMEN[i]; const [n,info,k]=a; const R=S.amr; if(R.am!==n){ R.am=n; R.slot=null; R.ppl={}; } const [o,c,len,cap]=AMX[n]; const slots=amSlots(n,R.date); const sel=R.slot;
  const chosen=Object.keys(R.ppl).filter(x=>R.ppl[x]); const maxG=cap-1; const atMax=chosen.length>=maxG;
  const person=([nm,sub,ini])=>{ const on=!!R.ppl[nm]; return `<button class="pperson press ${on?'on':''}" data-act="amppl:${nm}" aria-pressed="${on}" ${!on&&atMax?'disabled':''}><span class="ini">${ini}</span><span class="tx"><b>${nm}</b><span>${sub}</span></span><span class="ck">${on?ic('check',14,2.4):ic('plus',14,2)}</span></button>`; };
  return `<div class="screen" data-light><div class="scroll" style="padding-bottom:230px"><div class="amhero" ${bg(k)}><div class="sc"></div><div class="t"><h1>${n}</h1><span>${info}</span></div></div>
  <div class="pad stack" style="margin-top:20px;gap:12px">
  <div style="display:flex;justify-content:space-between;align-items:center"><span class="eyebrow">1 · Choose a date</span><span class="small muted" style="font-weight:500">Up to 2 weeks ahead</span></div>
  <div class="datestrip" role="radiogroup" aria-label="Date">${crDays().map(dk=>{ const [y,m,d]=dk.split('-').map(Number); const wd=WDAYS[new Date(y,m-1,d).getDay()].slice(0,3); const mine=R.list.some(r=>r.date===dk&&r.am===n); return `<button class="dchip press ${R.date===dk?'sel':''}" role="radio" aria-checked="${R.date===dk}" data-act="amdate:${dk}"><span>${dk===TODAYK?'Today':wd}</span><b>${d}</b><span class="mo">${MONTHS[m-1].slice(0,3)}</span>${mine?'<i aria-label="You have a reservation"></i>':''}</button>`; }).join('')}</div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px"><span class="eyebrow">2 · Choose a slot</span><span class="small muted" style="font-weight:500">${len} hour${len>1?'s':''} each</span></div>
  ${slots.every(x=>x.left===0)?`<div class="empty" style="padding:16px">Fully reserved on this day. Try another date.</div>`:''}
  <div class="slotg">${slots.map(x=>{ const on=sel===x.h; const dis=x.left===0; return `<button class="cslot press ${on?'sel':''} ${!dis&&x.left<=2&&!on?'low':''}" data-act="amslot:${x.h}" ${dis?'disabled':''} aria-pressed="${on}"><b>${hr(x.h).replace(':00','')}${len>1?' – '+hr(x.h+len).replace(':00',''):''}</b><span>${on?'Selected':dis?'Full':x.left===1?'1 spot left':x.left+' spots left'}</span></button>`; }).join('')}</div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px"><span class="eyebrow">3 · Who’s joining?</span><span class="small muted" style="font-weight:500">${chosen.length?`You + ${chosen.length}`:'Just you'} · max ${cap}</span></div>
  <div class="pgroup"><div class="pg">Family members</div>${FAMILY.map(person).join('')}</div>
  <div class="pgroup"><div class="pg">Recent guests</div>${GUESTS.map(person).join('')}<button class="paddg press" data-act="toast:addguest">${ic('plus',16,2)} Add a new guest</button></div>
  ${atMax?`<p class="small muted" style="font-weight:500">This amenity allows up to ${cap} people per reservation.</p>`:''}
  </div></div>
  <button class="floatback press" data-back aria-label="Back">${ic('back',20)}</button>
  <div class="bfoot"><div class="r"><div><span>${n} · ${dayShort(R.date)}</span><b>${sel!==null?`${hr(sel)} – ${hr(sel+len)}`:'Select a slot'}</b></div><span class="du">${chosen.length+1} ${chosen.length?'people':'person'}</span></div>
  <button class="btn btn-ink btn-block press" data-act="amconfirm" ${sel===null?'disabled':''}>Confirm reservation</button></div></div>`; };
SCREENS.amdone = () => { const r=S.amr.list.find(x=>x.id===S.amr.last)||S.amr.list[0];
  return `<div class="screen"><div class="scroll"><div class="cdone"><span class="seal">${ic('check',40,2.4)}</span><h1>You’re all set</h1>
  <div class="card" style="width:100%;padding:6px 18px;border-radius:22px;text-align:left">${[['Amenity',r.am],['Date',dayLbl(r.date)],['Time',`${hr(r.h)} – ${hr(r.h+r.len)}`],['Joining',r.ppl.length?r.ppl.join(', '):'Just you'],['Reference',r.ref]].map(([l,v])=>`<div class="info"><span>${l}</span><span>${v}</span></div>`).join('')}</div>
  <div class="note2">${ic('info',18)}<span>Guests get an access pass by SMS on the day. You can cancel up to 2 hours before your slot.</span></div>
  <button class="btn btn-ink btn-block press" data-act="amback">Back to amenities</button><button class="btn btn-out btn-block press" data-act="toast:calendar">Add to calendar</button></div></div></div>`; };
const amCancelSheet = id => { const r=S.amr.list.find(x=>x.id===id); return `<div class="overlay" data-close><div class="sheet" role="dialog" aria-label="Cancel reservation"><div class="grab"></div><div class="cansheet"><span class="ic">${ic('cal',26)}</span><h2 class="t-title">Cancel this reservation?</h2><p>${r.am} · ${dayLbl(r.date)} · ${hr(r.h)} – ${hr(r.h+r.len)}<br>Ref ${r.ref} · the slot goes back to other residents.</p><div class="ac"><button class="btn-out press" style="border:1px solid var(--bd-o)" data-close>Keep reservation</button><button class="press" style="background:#A8321F;color:#fff" data-act="amdocancel:${id}">Yes, cancel</button></div></div></div></div>`; };

/* ---- VALET ---- */
SCREENS.valet = () => `<div class="screen"><div class="scroll">${head('Valet','')}<div class="pad stack" style="margin-top:20px;gap:12px">
  ${(()=>{const i=activeCar(); if(i===null) return ''; const r=S.valet[i]==='ready'; return `<section class="varr ${r?'ready':'way'}" role="status"><div class="vh"><span class="vdot"></span><span class="eyebrow">${r?'Vehicle arrived':'Valet on the way'}</span></div><div class="vr"><div class="vt" ${bg('car'+i)}></div><div class="grow"><b>${r?'Your vehicle is at the doorstep':'Your vehicle is on its way'}</b><span>${CARS[i][0]} · ${CARS[i][1].split(' · ')[1]}</span><span>${r?'Main entrance · Tower B':'About 2 min · Main entrance'}</span></div></div><div class="va"><button class="btn btn-out press" data-act="cancelcar:${i}">Cancel</button>${r?`<button class="btn btn-ink press" data-act="parkcar:${i}">Collected</button>`:''}</div></section><div class="eyebrow" style="margin-top:10px">Your vehicles</div>`;})() || '<div class="eyebrow">Your vehicles</div>'}
  ${CARS.map(([n,p,c,k],i)=>{const st=S.valet[i];return `<article class="veh ${st==='way'?'way':st==='ready'?'ready':''}"><div class="art photo" ${bg('car'+i)} role="img" aria-label="${n}"></div><div class="r"><div class="grow"><b>${n}</b><div class="pl">${p}</div><div class="st"><i></i>${st==='way'?'On its way · about 2 min':st==='ready'?'At the main entrance':'Parked · Level B2, bay '+(14+i*3)}</div></div>
   ${st==='parked'?`<button class="getcar press" data-act="getcar:${i}">Get car</button>`:st==='way'?'<button class="getcar" disabled>Requested</button>':'<button class="getcar ok" disabled>Arrived</button>'}</div></article>`;}).join('')}
  <p class="muted" style="font-size:12px;line-height:1.5">Tap Get car and the valet team brings it to the main entrance. You’ll get a notification when it’s there.</p></div></div></div>`;

/* ---- HELPDESK ---- */
SCREENS.helpdesk = () => { const list=ISSUES.filter(i=>(S.hd.tab===0?i.st!=='done':i.st==='done')&&(!S.hd.mine||i.mine));
  return `<div class="screen"><div class="scroll">${head('Requests','',{back:S.stack.length>1})}<div class="pad stack" style="margin-top:20px;gap:14px">
  <button class="unitsel press" data-act="units"><span>Unit</span><b>Tower B · 807</b>${ic('chevD',16,1.8)}</button>
  <div class="seg" role="tablist">${['Open issues','Resolved issues'].map((l,i)=>`<button role="tab" aria-selected="${S.hd.tab===i}" data-act="hdtab:${i}">${l}</button>`).join('')}</div>
  <button class="mine" data-act="hdmine" role="switch" aria-checked="${S.hd.mine}"><span class="toggle" aria-checked="${S.hd.mine}"></span>Show requests raised by me</button>
  ${list.length?list.map(i=>`<button class="issue press" data-act="toast:issue:${i.id}"><div class="tags"><span class="ist ${i.st}">${i.st==='new'?'New':i.st==='prog'?'In progress':'Resolved'}</span><span class="idc">${i.id}</span></div><h3>${i.t}</h3><p>${i.b}</p><span class="dt">${i.d}</span><div class="ft"><span class="ini" style="width:32px;height:32px">${i.ini}</span><span class="grow">${i.by}</span><span class="muted">${i.r}</span></div></button>`).join(''):'<div class="empty">Nothing here right now.</div>'}
  </div></div><button class="fab press" data-go="rnewreq" aria-label="Create a request">${ic('plus',24)}</button>${rnav('helpdesk')}</div>`; };

/* ---- DISCOVER ---- */
SCREENS.discover = () => { const t=S.dsTab;
  const serv = `<section style="margin-top:28px"><div class="pad">${shd('Offers','Deals for you','View all','data-act="toast:deals"')}</div>
    <div class="carousel">${[['Studio, 1, 2 & 3 bedrooms','Amali Residences II','tower'],['4 & 5 bedroom villas','Amali Island','aerial']].map(([u,n,k])=>`<button class="deal press" ${bg(k)} data-act="dproj"><div class="t"><span class="u">${u}</span><b>${n}</b></div><div class="pp"><span>Starting from</span><b>Price on request</b></div></button>`).join('')}</div>
    <div class="cdots"><i class="on"></i><i></i><i></i><i></i></div></section>
    <section class="pad" style="margin-top:32px"><h2 class="t-title" style="margin:0 0 16px">Explore our services</h2><div class="stack">
    ${[['Property management','Leasing, maintenance & rent collection','lounge'],['Holiday homes','Short-stay management for your unit','living'],['Clubhouse & leisure','Pools, spa, fitness and dining','dining']].map(([n,s,k])=>`<button class="srow press" data-act="toast:serv:${n}"><div class="th" ${bg(k)}></div><div class="grow"><b>${n}</b><span>${s}</span></div>${ic('chevR',18)}</button>`).join('')}</div></section>`;
  const proj = `<section class="pad stack" style="margin-top:20px;gap:16px">${[['Completion Jun 2029','Amali Island Villas','4, 5 & 6 bedroom villas','pool'],['Completion Dec 2028','Amali Residences II','1, 2, 3 & 4 bedroom residences','tower']].map(([c,n,u,k])=>`<article class="pfc"><div class="im" ${bg(k)}><span class="lg"><img src="${IMG.logoW}" alt="Amali"></span></div><div class="pn"><span class="c">${c}</span><b>${n}</b><span class="u">${u}</span><button class="btn btn-gold press" data-act="toast:interest:${n}">Register your interest</button></div></article>`).join('')}</section>`;
  return `<div class="screen"><div class="scroll">${head('Discover','',{back:S.stack.length>1})}<div class="pad" style="margin-top:20px"><div class="seg" role="tablist">${['Amali services','Amali projects'].map((l,i)=>`<button role="tab" aria-selected="${t===i}" data-act="ds:${i}">${l}</button>`).join('')}</div></div>${t===0?serv:proj}</div>${rnav('rmore')}</div>`; };

/* ---- RESIDENT PROFILE ---- */
SCREENS.rprofile = () => { const row=(t,s,v,i,a)=>`<button class="row press" ${a}><span class="tile-ic">${ic(i,20)}</span><div class="grow"><div class="t">${t}</div>${s?`<div class="s">${s}</div>`:''}</div>${v?`<span class="v">${v}</span>`:''}${ic('chevR',18)}</button>`;
  return `<div class="screen"><div class="scroll">${head('Profile','')}<div class="pad stack" style="margin-top:20px;gap:12px">
  <div class="prof"><div class="ph" ${bg('avatar')}></div><b>Ahmed Al Mansoori</b><div style="display:flex;flex-direction:column;gap:3px"><span>ahmed.m@email.com</span><span>+971 50 123 4567</span></div><button class="ed press" data-act="toast:personal">Edit personal details</button></div>
  <div class="list-card"><div class="gtitle">My home</div>${row('Tower B · 807','Amali Residences · 3 Bedroom','Change','unit','data-act="units"')}</div>
  <div class="list-card"><div class="gtitle">Household</div>${row('Family members','','3','users','data-act="toast:family"')}${row('Vehicles','','3','car','data-go="valet"')}${row('Domestic help','','2','helper','data-act="toast:help"')}${row('Visitor passes','','1 active','key','data-act="toast:pass"')}</div>
  <div class="list-card"><div class="gtitle">Services</div>${row('Amenity reservations','','2 upcoming','amen','data-go="ramenities"')}${row('Requests','','1 open','headset','data-go="helpdesk"')}${row('Payments & dues','',aed('25,000')+' due','card','data-act="toast:dues"')}${row('Documents','','12 files','doc','data-act="toast:rdocs"')}</div>
  <div class="list-card"><div class="gtitle">App</div><button class="row" data-act="notif" role="switch" aria-checked="${S.notif}"><span class="tile-ic">${ic('bell',20)}</span><div class="grow t">Push notifications</div><span class="toggle" aria-checked="${S.notif}"></span></button>${row('Language','','English','globe','data-act="toast:lang"')}${row('Contact concierge','Amali community desk · 24/7','','phone','data-act="toast:concierge"')}</div>
  <button class="logout press" data-act="logout">${ic('logout',18)} Log out</button></div></div>${rnav('rmore')}</div>`; };

/* ---- RESIDENT ASSISTANT ---- */
const RPROMPTS = ['Check crèche availability for 4pm to 8pm today','Bring my car to the entrance','Reserve the padel court','Raise a helpdesk ticket'];
const rMsg = m => m.me?`<div class="msg me"><div class="bub">${m.text}</div></div>`
  : `<div class="msg ai"><span class="orb sm"><span>${ic('spark',12)}</span></span><div class="bub">${m.text}</div></div>${m.qr&&!m.answered?`<div class="qrep"><button class="btn-ink press" data-act="crqr:yes">Yes, book it</button><button class="btn-out press" style="border:1px solid var(--bd-o)" data-act="crqr:no">No, thanks</button></div>`:''}${m.go?`<div style="margin-left:36px"><button class="btn btn-out press" style="height:40px" data-go="${m.go}">${m.goLabel} ${ic('arrowR',16)}</button></div>`:''}`;
SCREENS.rassistant = () => `<div class="screen"><div class="scroll" style="padding-bottom:200px"><div class="aura-head"><button class="back press" data-back aria-label="Back">${ic('back',20)}</button><span class="orb"><span>${ic('spark',20)}</span></span><div class="grow"><b>AMALI Assistant</b><div class="online"><i></i>Your Amali concierge · Online</div></div><button class="back press" data-act="rnewchat" aria-label="New chat">${ic('plus',18)}</button></div>
  <div class="pad stack" style="margin-top:24px;gap:14px"><div><h1 class="t-title">Good evening, Ahmed</h1></div>
  <div class="pchips">${RPROMPTS.map((p,i)=>`<button class="pchip press" data-act="rask:${i}">${ic('spark',15)}${p}</button>`).join('')}</div>
  <div class="msgs" id="msgs">${S.rchat.map(rMsg).join('')}${S.typing?`<div class="msg ai"><span class="orb sm"><span>${ic('spark',12)}</span></span><div class="bub typing"><i></i><i></i><i></i></div></div>`:''}</div>
  <p class="disc">Amali Assistant can make mistakes. Bookings are confirmed by the Amali community desk.</p></div></div>
  <div class="chat-in"><input placeholder="Ask Amali Assistant…" aria-label="Message Amali Assistant" data-enter="rchat"><button class="send press" data-act="rchat" aria-label="Send">${ic('arrowR',18)}</button></div></div>`;
const rAnswer = q => { q=q.toLowerCase();
  if(/creche|crèche|childcare|4 ?pm|8 ?pm/.test(q)){ const ok=[16,17,18,19].every(h=>freeH(h,TODAYK)); return ok?{text:'It is available. Do you want me to book it for you?', qr:true}:{text:'Aisha is already booked in for 4:00 PM – 8:00 PM today.', go:'creche', goLabel:'View booking'}; }
  if(/car|valet|ferrari/.test(q)){ getCar(0,true); return {text:'Your Ferrari Roma is on its way to the main entrance. I’ll let you know as soon as it arrives.', go:'valet', goLabel:'Open Valet'}; }
  if(/padel|paddle|tennis/.test(q)) return {text:'The Padel Court is fully reserved today. The next free slot is tomorrow at 7:00 AM.', go:'ramenities', goLabel:'See amenities'};
  if(/helpdesk|ticket|issue|complain/.test(q)) return {text:'Sure. You have 3 open requests. I’ve opened Requests so you can raise a new one.', go:'helpdesk', goLabel:'Open Requests'};
  return {text:'I can help with the crèche, valet, amenity bookings, helpdesk requests and your dues. Try one of the suggestions above.'}; };
function rAsk(q){ S.rchat.push({me:true,text:q}); S.typing=true; render(); setTimeout(()=>{ S.typing=false; S.rchat.push(rAnswer(q)); if(key()==='rassistant') render(); },1200); }

/* ---- CRECHE ---- */
SCREENS.creche = () => { const C=S.cr; const {y,m}=C.ym; const first=(new Date(y,m,1).getDay()+6)%7; const days=new Date(y,m+1,0).getDate();
  let cells=['Mo','Tu','We','Th','Fr','Sa','Su'].map(d=>`<div class="dw">${d}</div>`).join('');for(let i=0;i<first;i++) cells+='<div></div>';
  for(let d=1;d<=days;d++){ const k=ckey(y,m,d); const today=y===CR_TODAY.y&&m===CR_TODAY.m&&d===CR_TODAY.d; const fut=m===CR_TODAY.m&&d>CR_TODAY.d; const bkd=C.bookings.some(b=>b.date===k);
    if(CR_ATT[k]) cells+=`<div><button class="d att ${C.sel===k?'sel':''}" data-act="crpick:${k}" aria-label="${longD(k)}, attended" aria-pressed="${C.sel===k}">${d}</button></div>`;
    else cells+=`<div><span class="d ${today?'today':''} ${fut?'fut':''} ${bkd?'bkd':''}">${d}</span></div>`; }
  const list=[...C.bookings].sort((a,b)=>a.date.localeCompare(b.date)||a.from-b.from);
  const bk=list.length?`<div class="eyebrow" style="margin-top:12px">Upcoming booking${list.length>1?'s':''}</div>${list.map(b=>`<div class="bkc"><div class="r"><span class="tile-ic">${ic('cal',20)}</span><div class="grow"><div class="s" style="margin:0 0 2px;font-weight:600;color:var(--dusk)">${dayLbl(b.date)}</div><b>${hr(b.from)} – ${hr(b.to)}</b><div class="s">${b.to-b.from} hour${b.to-b.from>1?'s':''} · Ref ${b.ref}</div></div><span class="chip c-done">Confirmed</span></div><div class="ac"><button class="press" data-act="toast:calendar">Add to calendar</button><button class="danger press" data-act="crcancel:${b.id}">Cancel booking</button></div></div>`).join('')}`:'';
  let att; if(C.sel&&CR_ATT[C.sel]&&C.sel.startsWith(`${y}-${pad2(m+1)}`)){ const [ti,pi,to,po]=CR_ATT[C.sel];
    att=`<div class="atts"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:15px">${longD(C.sel)}</b><span class="chip c-done">Attended</span></div>
      <div class="t2"><div><span class="k">Check-in</span><b>${ti}</b><span>by ${CR_PEOPLE[pi][0]} · ${CR_PEOPLE[pi][1]}</span></div><div><span class="k">Check-out</span><b>${to}</b><span>by ${CR_PEOPLE[po][0]} · ${CR_PEOPLE[po][1]}</span></div></div></div>`;}
  else att=`<div class="empty" style="padding:16px">Tap a green date to see Aisha’s check-in and check-out.</div>`;
  const canPrev=!(y===2026&&m===8), canNext=!(y===CR_TODAY.y&&m===CR_TODAY.m);
  return `<div class="screen"><div class="scroll">${head('Crèche','')}<div class="pad stack" style="margin-top:20px;gap:12px">
  <div class="child"><div class="ct"><span class="av">A</span><div class="grow"><b>Aisha</b><div class="m">4 years</div></div></div><div class="med">${ic('info',16)}<span>Allergies</span><b>Peanuts</b></div></div>
  
  <button class="btn btn-ink btn-block press" data-go="crbook">${list.length?'Book another session':'Book a session'}</button>
  ${bk}
  <div class="eyebrow" style="margin-top:12px">Attendance</div>
  <div class="calc"><div class="h"><b>${MONTHS[m]} ${y}</b><div class="nv"><button data-act="crmon:-1" aria-label="Previous month" ${canPrev?'':'disabled'}>${ic('chevL',16,2)}</button><button data-act="crmon:1" aria-label="Next month" ${canNext?'':'disabled'}>${ic('chevR',16,2)}</button></div></div>
    <div class="calg">${cells}</div><div class="legend"><span><i style="background:var(--tint-g)"></i>Attended</span><span><i style="background:var(--tint-a);box-shadow:inset 0 0 0 1.5px var(--gold)"></i>Today</span>${list.length?'<span><i style="box-shadow:inset 0 0 0 1.5px var(--dusk);background:var(--clear)"></i>Booked</span>':''}<span><i style="box-shadow:inset 0 0 0 2px var(--ink)"></i>Selected</span></div></div>
  ${att}</div></div></div>`; };

SCREENS.crbook = () => { const C=S.cr; const s=C.start; const md=s!==null?maxDur(s):0; const dur=s!==null?Math.min(C.dur,md):0; const end=s!==null?s+dur:null;
  const PL=plOf(C.bdate); const slots=CR_HOURS.map(h=>{ const n=PL[h], own=mineH(h), dis=n===0||own; const sel=h===s, inr=s!==null&&h>s&&h<end;
    const lab=own?'Booked by you':n===0?'Full':sel?'Start':inr?'Included':n===1?'1 place left':`${n} places`;
    return `<button class="cslot press ${sel?'sel':inr?'in':''} ${!dis&&n<=2&&!sel&&!inr?'low':''}" data-act="crstart:${h}" ${dis?'disabled':''} aria-pressed="${sel}"><b>${hr(h).replace(':00','')}</b><span>${lab}</span></button>`; }).join('');
  const reason = s!==null&&md<5 ? (s+md>=20?'Longer stays aren’t available — the crèche closes at 8 PM.':'Longer stays aren’t available — the next hour is full.') : '';
  return `<div class="screen"><div class="scroll" style="padding-bottom:210px">${head('Book a session','For Aisha')}<div class="pad stack" style="margin-top:20px;gap:12px">
  <div style="display:flex;justify-content:space-between;align-items:center"><span class="eyebrow">1 · Choose a date</span><span class="small muted" style="font-weight:500">Up to 2 weeks ahead</span></div>
  <div class="datestrip" role="radiogroup" aria-label="Date">${crDays().map(k=>{ const [y,m,d]=k.split('-').map(Number); const wd=WDAYS[new Date(y,m-1,d).getDay()].slice(0,3); const own=C.bookings.some(b=>b.date===k); return `<button class="dchip press ${C.bdate===k?'sel':''}" role="radio" aria-checked="${C.bdate===k}" data-act="crdate:${k}"><span>${k===TODAYK?'Today':wd}</span><b>${d}</b><span class="mo">${MONTHS[m-1].slice(0,3)}</span>${own?'<i aria-label="You have a booking"></i>':''}</button>`; }).join('')}</div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px"><span class="eyebrow">2 · Choose a start time</span><span class="small muted" style="font-weight:500">Open 9 AM – 8 PM</span></div>
  <div class="slotg">${slots}</div>
  <span class="eyebrow" style="margin-top:12px">3 · How long will Aisha stay?</span>
  <div class="durp">${[1,2,3,4,5].map(n=>`<button data-act="crdur:${n}" aria-pressed="${s!==null&&dur===n}" ${s===null||n>md?'disabled':''}>${n} hr${n>1?'s':''}</button>`).join('')}</div>
  ${reason?`<p class="small muted" style="font-weight:500">${reason}</p>`:s===null?'<p class="small muted" style="font-weight:500">Pick a start time first, then choose how long.</p>':''}
  </div></div>
  <div class="bfoot"><div class="r"><div><span>Aisha’s session · ${dayShort(C.bdate)}</span><b>${s!==null?`${hr(s)} – ${hr(end)}`:'Select a start time'}</b></div>${s!==null?`<span class="du">${dur} hour${dur>1?'s':''}</span>`:''}</div>
  <button class="btn btn-ink btn-block press" data-act="crconfirm" ${s===null?'disabled':''}>Confirm booking</button></div></div>`; };

SCREENS.crdone = () => { const b=S.cr.bookings.find(x=>x.id===S.cr.last)||S.cr.bookings[0];
  return `<div class="screen"><div class="scroll"><div class="cdone"><span class="seal">${ic('check',40,2.4)}</span><h1>Aisha is booked in</h1>
  <div class="card" style="width:100%;padding:6px 18px;border-radius:22px;text-align:left">${[['Date',dayLbl(b.date)],['Hours',`${hr(b.from)} – ${hr(b.to)}`],['Duration',`${b.to-b.from} hours`],['Reference',b.ref]].map(([l,v])=>`<div class="info"><span>${l}</span><span>${v}</span></div>`).join('')}</div>
  <div class="note2">${ic('info',18)}<span>You’ll get a notification when Aisha is checked in and checked out.</span></div>
  <button class="btn btn-ink btn-block press" data-act="crback">Back to Crèche</button><button class="btn btn-out btn-block press" data-act="toast:calendar">Add to calendar</button></div></div></div>`; };

SCREENS.crphotos = () => { const [ti,pi,to,po]=CR_ATT[S.cr.sel];
  const card=(kind,t,p)=>`<div class="photoc"><div class="fr">${crPhoto(p,kind)}<span class="stp">${kind==='in'?'Check-in':'Check-out'} · ${t}</span></div><div class="w"><div><b>Aisha with ${CR_PEOPLE[p][0]}</b><span>${CR_PEOPLE[p][1]} · ${kind==='in'?'dropped off':'picked up'} at ${t}</span></div><span class="chip c-done">✓ Verified</span></div></div>`;
  return `<div class="screen"><div class="scroll">${head('Attendance',longD(S.cr.sel))}<div class="pad stack" style="margin-top:16px;gap:14px">
  <div class="note2">${ic('lock',18)}<span>Photos are taken by crèche staff at the desk and shared only with your household.</span></div>
  ${card('in',ti,pi)}${card('out',to,po)}</div></div></div>`; };

const cancelSheet = id => { const b=S.cr.bookings.find(x=>x.id===id); return `<div class="overlay" data-close><div class="sheet" role="dialog" aria-label="Cancel booking"><div class="grab"></div><div class="cansheet"><span class="ic">${ic('cal',26)}</span><h2 class="t-title">Cancel this booking?</h2><p>${dayLbl(b.date)} · ${hr(b.from)} – ${hr(b.to)} · Ref ${b.ref}<br>The places go back to other residents.</p><div class="ac"><button class="btn-out press" style="border:1px solid var(--bd-o)" data-close>Keep booking</button><button class="press" style="background:#A8321F;color:#fff" data-act="crdocancel:${id}">Yes, cancel</button></div></div></div></div>`; };

/* ---- resident: notifications, chats, my unit, violations ---- */
Object.assign(P, {
  box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  ticket:'<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 6v12"/>',
  history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  wallet:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 12h2M3 10h18"/>',
  upload:'<path d="M12 16V4M7 9l5-5 5 5M5 20h14"/>',
  helper:'<path d="M2 21a8 8 0 0 1 13.3-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/>',
  userp:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  send:'<path d="M5 12h14M13 6l6 6-6 6"/>'
});
const RNOTIFS = [
  {i:'car',t:'Your car is at the entrance',b:'Ferrari Roma · R 12345 · Main lobby',tm:'Just now',u:true,go:'valet'},
  {i:'child',t:'Aisha checked in at the crèche',b:'Dropped off by Maria at 9:02 AM',tm:'Today · 9:02 AM',u:true,go:'creche'},
  {i:'alert',t:'Parking violation · V-152',b:'Vehicle parked outside allotted bay B2-14.',tm:'Yesterday · 6:15 PM',u:true,go:'violations'},
  {i:'headset',t:'Request P1322 updated',b:'Plumber assigned · visit tomorrow at 10:00 AM',tm:'Yesterday · 4:42 PM',go:'helpdesk'},
  {i:'box',t:'Parcel waiting at the concierge',b:'1 package · collect from the lobby desk',tm:'20 Oct · 11:05 AM',go:'rmyunit'},
  {i:'card',t:'Dues reminder',b:'Service charge due on 31 October',tm:'18 Oct · 9:00 AM',go:'rmyunit',amt:'275'},
  {i:'amen',t:'UAE National Day on the Community Terrace',b:'Join your neighbours on 2 December from 7 PM',tm:'16 Oct · 9:40 AM',go:'rhome'}];
const CHATS = [
  {id:'tower',name:'Tower B residents',sub:'Group · 214 members',ini:'TB',group:true,tm:'9:40 PM',unread:2,msgs:[{f:'Rhea Kapoor',t:'Lift B is back in service, thanks to the facilities team for the quick fix 🙌',tm:'9:31 PM'},{f:'Omar Saeed',t:'Great news. Is the gym on level 40 open late tonight?',tm:'9:36 PM'},{f:'Rhea Kapoor',t:'Sky Gym is open 24 hours 💪',tm:'9:40 PM'}]},
  {id:'rhea',name:'Rhea Kapoor',sub:'Tower B · 1507',ini:'RK',tm:'8:12 PM',unread:1,msgs:[{f:'Rhea Kapoor',t:'Hi Ahmed! Are you joining sunset yoga on the Community Terrace on Friday?',tm:'8:12 PM'}]},
  {id:'padel',name:'Padel partners',sub:'Group · 8 members',ini:'PP',group:true,tm:'Yesterday',unread:0,msgs:[{f:'Omar Saeed',t:'Court is booked for Saturday 7 AM. Who’s in?',tm:'Yesterday'},{me:true,t:'Count me in 🎾',tm:'Yesterday'}]},
  {id:'ayesha',name:'Ayesha Hanzari',sub:'Tower B · 0904',ini:'AH',tm:'Mon',unread:0,msgs:[{f:'Ayesha Hanzari',t:'Thanks for donating the books to the toy library!',tm:'Mon'},{me:true,t:'Happy to help, Aisha loves the playroom.',tm:'Mon'}]}];
const VIOLS = {open:[{id:'V-152',lvl:'Warning',t:'Parking rules',d:'Vehicle parked outside allotted bay B2-14 for more than 2 hours.',dt:'20 Oct 2026, 6:15 PM'}],
  closed:[{id:'V-118',lvl:'Resolved',t:'Noise after 11 PM',d:'Music from the balcony after quiet hours. Acknowledged by resident.',dt:'02 Sep 2026, 11:40 PM'}]};
const runread = () => RNOTIFS.filter((n,i)=>n.u&&!S.rn.read).length;

SCREENS.rnotifs = () => `<div class="screen"><div class="scroll">${head('Notifications',S.rn.read?'All caught up':runread()+' unread',{action:S.rn.read?'':'<button class="link" data-act="rnread">Mark all read</button>'})}<div class="pad stack" style="margin-top:20px">
  ${RNOTIFS.map(n=>`<button class="notif press ${n.u&&!S.rn.read?'unread':''}" data-go="${n.go}" style="text-align:left;width:100%"><span class="tile-ic">${ic(n.i,20)}</span><div class="grow"><div class="t">${n.t}</div><p>${n.amt?aed(n.amt)+' · ':''}${n.b}</p><div class="tm">${n.tm}</div></div>${n.u&&!S.rn.read?'<span class="ud"></span>':''}</button>`).join('')}</div></div></div>`;

SCREENS.rchats = () => `<div class="screen"><div class="scroll">${head('Messages','')}<div class="pad stack" style="margin-top:16px;gap:14px">
  <label class="searchf">${ic('search',18)}<input placeholder="Search residents or groups" aria-label="Search conversations"></label>
  <div class="list-card">${CHATS.map(c=>{const last=c.msgs[c.msgs.length-1];return `<button class="row press chatrow" data-go="rchat:${c.id}"><span class="ini ${c.group?'grp':''}">${c.ini}</span><div class="grow"><div style="display:flex;justify-content:space-between;gap:8px"><span class="t">${c.name}</span><span class="v">${c.tm}</span></div><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:3px"><span class="s lastm">${last.me?'You: ':c.group?last.f.split(' ')[0]+': ':''}${last.t}</span>${c.unread?`<span class="cbadge">${c.unread}</span>`:''}</div></div></button>`;}).join('')}</div>
  </div></div><button class="fab press" style="bottom:28px" data-act="toast:newchat" aria-label="Start a new conversation">${ic('plus',24)}</button></div>`;

SCREENS.rchat = id => { const c=CHATS.find(x=>x.id===id)||CHATS[0];
  return `<div class="screen"><div class="scroll" style="padding-bottom:110px"><header class="page-head"><button class="back press" data-back aria-label="Back">${ic('back',20)}</button><span class="ini ${c.group?'grp':''}" style="width:42px;height:42px">${c.ini}</span><div class="grow"><h1 style="font-size:20px;font-weight:600;letter-spacing:0">${c.name}</h1><div class="sub">${c.sub}</div></div></header>
  <div class="pad"><div class="msgs" id="msgs" style="margin-top:20px"><div class="dayc">Today</div>${c.msgs.map(m=>m.me?`<div class="msg me"><div class="bub">${m.t}<span class="mt">${m.tm}</span></div></div>`:`<div class="msg ai"><span class="ini sm">${m.f.split(' ').map(w=>w[0]).join('')}</span><div class="bub">${c.group?`<span class="mf">${m.f}</span>`:''}${m.t}<span class="mt">${m.tm}</span></div></div>`).join('')}${S.ctyping===id?`<div class="msg ai"><span class="ini sm">${c.ini}</span><div class="bub typing"><i></i><i></i><i></i></div></div>`:''}</div></div></div>
  <div class="chat-in" style="bottom:24px"><input placeholder="Message ${c.group?c.name:c.name.split(' ')[0]}…" aria-label="Write a message" data-enter="csend"><button class="send press" data-act="csend:${c.id}" aria-label="Send">${ic('send',18)}</button></div></div>`; };

SCREENS.rmyunit = () => `<div class="screen"><div class="scroll">${head('My unit','',{back:false})}<div class="pad stack" style="margin-top:16px;gap:14px">
  <button class="unitsel press" data-act="units"><span>Unit</span><b>Tower B · 807</b>${ic('chevD',16,1.8)}</button>
  <div class="mtiles"><button class="press" data-act="toast:family"><span class="tile-ic">${ic('users',20)}</span><div><b>03</b><span>Members</span></div></button><button class="press" data-go="valet"><span class="tile-ic">${ic('car',20)}</span><div><b>03</b><span>Vehicles</span></div></button></div>
  <div class="eyebrow" style="margin-top:10px">Gate updates</div>
  <div class="gate">${[['userp','Visitors','0 today','toast:visitors'],['box','Parcels','1 to collect','toast:parcel'],['helper','Helpers','1 of 2 in campus','toast:helpers']].map(([i,a,b,act])=>`<button class="press" data-act="${act}"><span class="ci">${ic(i,20)}</span><b>${a}</b><span>${b}</span></button>`).join('')}</div>
  <div class="eyebrow" style="margin-top:10px">My dues</div>
  <div class="dues"><div class="top"><div><span class="chip c-prog">Due 31 Oct</span><div class="lbl">Service charge · Q4</div><b>${aed('25,000.00')}</b></div><button class="btn btn-ink press" data-act="toast:paydues">Pay</button></div>
    <div class="ac"><button class="press hist" data-act="toast:dhistory">${ic('history',18)} History</button><button class="press" data-act="toast:deposit">${ic('wallet',18)} Advance / deposit</button></div></div>
  <button class="vrow press" data-go="violations"><span class="tile-ic" style="background:var(--tint-a);color:var(--tx-a)">${ic('alert',20)}</span><div class="grow"><b>Rules &amp; violations</b><span>1 open · parking rules</span></div>${ic('chevR',18)}</button>
  <div class="docup"><div class="grow"><b>Save your unit documents here</b><span>Title deed, tenancy contract, Ejari and receipts in one place.</span><button class="btn btn-ink press" data-act="toast:upload">${ic('upload',18)} Upload</button></div><span class="dic">${ic('doc',30)}</span></div>
  </div></div>${rnav('rmyunit')}</div>`;

SCREENS.violations = () => { const t=S.vt; const list=t===0?VIOLS.open:VIOLS.closed;
  return `<div class="screen"><div class="scroll">${head('Rules & violations','')}<div class="pad stack" style="margin-top:20px;gap:14px">
  <div class="rulesb"><div><b>Check out your community rules</b><span class="s">Parking, quiet hours, pets, pools and more.</span></div><button class="btn btn-light press" data-act="toast:rules">View rules</button></div>
  <div class="seg" role="tablist">${[`Open (${VIOLS.open.length})`,'Closed'].map((l,i)=>`<button role="tab" aria-selected="${t===i}" data-act="vtab:${i}">${l}</button>`).join('')}</div>
  ${list.map(v=>`<button class="viol press" data-act="toast:viol:${v.id}"><div class="tags"><span class="vl ${v.lvl==='Warning'?'warn':'ok'}">${v.lvl}</span><span class="idc">${ic('ticket',14)} ${v.id}</span></div><h3>${v.t}</h3><p>${v.d}</p><span class="dt">${ic('cal',14)} ${v.dt}</span></button>`).join('')}
  </div></div></div>`; };

/* ---- resident: community ---- */
PF.heart='<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>';
Object.assign(P, {
  heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  comment:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
  sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  groups:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>'
});
const POSTS = [{id:'p1',ini:'RK',name:'Rhea Kapoor',unit:'Tower B · 1507 · Owner',tm:'21 Oct 2026, 6:12 PM',t:'Sunset yoga this Friday',b:'Join us on the Community Terrace at 6 PM. Mats are provided, all levels welcome!',likes:12,comments:4},
  {id:'p2',ini:'OS',name:'Omar Saeed',unit:'Tower B · 2201 · Resident',tm:'20 Oct 2026, 8:40 AM',t:'Lost: blue water bottle',b:'Left it at the Sky Gym this morning. Please message me if you’ve seen it. Thank you!',likes:3,comments:2}];
const POLL = {q:'Which evening works best for the residents’ meetup?',by:'Amali community desk',ini:'AC',tm:'19 Oct 2026, 1:23 PM',exp:'Expires in 17 days',opts:[['Thursday',18],['Friday',31],['Saturday',24]]};
const GROUPS = [['Tower B parents','Playdates, school runs and kids’ activities','142 members'],['Padel partners','Find a partner for the Padel Court','38 members'],['Amali runners','Morning runs along the canal','56 members']];
SCREENS.rcommunity = () => { const post=p=>{const liked=S.cm.liked[p.id];return `<article class="post"><div class="ph2"><span class="ini">${p.ini}</span><div class="grow"><b>${p.name}</b><span>${p.unit}</span><span class="tm">${p.tm}</span></div></div><h3>${p.t}</h3><p>${p.b}</p><span class="cc">${p.comments} comments</span>
   <div class="pact"><button class="press ${liked?'on':''}" data-act="clike:${p.id}">${liked?icf('heart',18):ic('heart',18)} ${p.likes+(liked?1:0)}</button><button class="press" data-act="toast:ccomment">${ic('comment',18)} Comment</button><button class="press" data-act="toast:share">${ic('share',18)} Share</button></div></article>`;};
  const tot=POLL.opts.reduce((a,[,n])=>a+n,0)+(S.cm.vote!==null?1:0);
  return `<div class="screen"><div class="scroll">${head('Community','',{back:S.stack.length>1})}<div class="pad" style="margin-top:16px;display:flex;gap:10px">
  <label class="searchf" style="flex:1">${ic('search',18)}<input placeholder="Search posts" aria-label="Search posts"></label><button class="filt press" data-act="toast:cfilter">${ic('sliders',18)} Filter</button></div>
  <section style="margin-top:28px"><div class="pad">${shd('Community','Announcements','View all','data-act="toast:ann"')}</div>
    <div class="carousel">${RANN.map(([tg,bgc,fg,t,b,d],i)=>`<button class="ann press" data-go="annd:${i}"><h3>${t}</h3><p>${b}</p><span class="d">${ic('clock',15)}${d}</span></button>`).join('')}</div></section>
  <section class="pad stack" style="margin-top:32px;gap:14px"><div class="eyebrow">Latest from residents</div>${post(POSTS[0])}</section>
  <section style="margin-top:32px"><div class="pad">${shd('Marketplace','Buy & sell','View all','data-act="toast:baz"')}</div>
    <div class="carousel"><button class="sellc press" data-act="toast:sell"><span class="p">${ic('plus',20)}</span><b>Create listing</b><span>Have something to offer your neighbours?</span></button>
    ${BAZ.map(([c,n,p,s,k])=>`<button class="bitem press" data-act="toast:item"><div class="im" ${bg(k)}><span class="cd">${c}</span></div><div class="b"><b>${n}</b><span class="pr ${p==='Free'?'free':''}">${p==='Free'?'Free':aed(p)}</span><span class="sl">${s}</span></div></button>`).join('')}</div></section>
  <section class="pad" style="margin-top:32px"><article class="post"><div class="ph2"><span class="ini grp">${POLL.ini}</span><div class="grow"><b>${POLL.by}</b><span>Poll · ${POLL.tm}</span></div><span class="chip c-done">Open</span></div>
    <h3>${POLL.q}</h3><span class="exp">${POLL.exp}</span><div class="opts">${POLL.opts.map(([o,n],i)=>{const v=S.cm.vote; const c=n+(v===i?1:0); const pct=Math.round(c/tot*100); return v===null?`<button class="opt press" data-act="cvote:${i}">${o}</button>`:`<div class="opt res ${v===i?'me':''}"><i style="width:${pct}%"></i><span>${o}${v===i?' · your vote':''}</span><b>${pct}%</b></div>`;}).join('')}</div>
    <span class="cc">${tot} votes</span></article></section>
  <section class="pad stack" style="margin-top:14px;gap:14px">${post(POSTS[1])}</section>
  <section style="margin-top:32px"><div class="pad">${shd('Stay connected','Community groups','View all','data-act="toast:groups"')}</div>
    <div class="carousel">${GROUPS.map(([n,d,m],i)=>`<article class="grpc"><span class="gi">${ic('groups',22)}</span><b>${n}</b><span>${d}</span><div class="gf"><span>${m}</span><button class="press ${S.cm.joined[i]?'on':''}" data-act="cjoin:${i}">${S.cm.joined[i]?'Joined ✓':'Join'}</button></div></article>`).join('')}</div></section>
  </div><button class="fab press" data-act="toast:cnew" aria-label="Create a post">${ic('plus',24)}</button>${rnav('rmore')}</div>`; };

/* ---- valet + push ---- */
let pushT;
function push(title, body){ const old=vp.querySelector('.push'); if(old) old.remove(); clearTimeout(pushT);
  const p=document.createElement('button'); p.className='push'; p.setAttribute('role','status'); p.innerHTML=`<span class="ai">${ic('car',22)}</span><div class="grow"><div class="h">AMALI · VALET<span>now</span></div><b>${title}</b><p>${body}</p></div>`;
  p.addEventListener('click',()=>{ p.classList.add('out'); setTimeout(()=>p.remove(),300); if(key()!=='valet'){ S.persona='res'; go('valet'); } });
  vp.appendChild(p); pushT=setTimeout(()=>{ p.classList.add('out'); setTimeout(()=>p.remove(),350); },5000); }
const VT={}; const vRender=()=>{ if(['valet','rhome'].includes(key())) render(); };
function cancelCar(i){ const st=S.valet[i]; if(!st||st==='parked') return; clearTimeout(VT[i]); S.valet[i]='parked'; const p=vp.querySelector('.push'); if(p) p.remove(); vRender(); toast(st==='ready'?'Vehicle sent back':'Valet request cancelled', CARS[i][0]+' · parked at Level B2'); }
function getCar(i, silent){ if(S.valet[i]!=='parked') return; S.valet[i]='way'; vRender(); if(!silent) toast('Valet requested', CARS[i][0]+' · bringing it to the main entrance');
  VT[i]=setTimeout(()=>{ S.valet[i]='ready'; vRender(); push('Your car is at the entrance.', `${CARS[i][0]} · ${CARS[i][1].split(' · ')[1]} · Main lobby`); }, 2400); }

/* ---- persona switch ---- */
function switchPersona(to){
  closeSheet(); if(S.persona===to){ return; }
  const ov=document.createElement('div'); ov.className='pswitch'; ov.setAttribute('role','status');
  ov.innerHTML=`<img src="${IMG.logoW}" alt="Amali Properties"><span class="lb">Switching to</span><b>${to==='res'?'Tower B · 807':'Tower A · 1204'}</b><span class="ch">${to==='res'?'Post-possession':'Post-sales'}</span><span class="ln"><i></i></span>`;
  const ovs=(DUO?[D.o.box,D.i.box]:[vp]).map((bx,j)=>{ const o=j?ov.cloneNode(true):ov; bx.appendChild(o); return o; }); document.querySelectorAll('.ptog [data-pt]').forEach(b=>b.setAttribute('aria-selected', String(b.dataset.pt===to)));
  setTimeout(()=>{ S.persona=to; S.stack=[to==='res'?'rhome':'home']; const el=build(key()); const root=el.querySelector('.stagger-root')||el.querySelector('.scroll'); if(root) root.classList.add('stagger'); if(cur) cur.remove(); cur=null; mount(el,'none'); }, 850);
  setTimeout(()=>{ ovs.forEach(o=>{ o.classList.add('out'); setTimeout(()=>o.remove(),560); }); }, 1350);
}

/* ---- resident actions ---- */
const RTOASTS = {ccomment:['Comments','Reply to Rhea and other residents'],cfilter:['Filter','Posts, polls, marketplace or groups'],cnew:['Create a post','Share an update, poll or listing'],groups:['Community groups','All resident groups'],newchat:['New conversation','Pick a resident or create a group'],visitors:['Visitors','No visitors expected today · pre-approve a guest'],parcel:['Parcel at the concierge','1 package · show your QR at the lobby desk'],helpers:['Helpers','Maria (nanny) checked in at 8:45 AM'],paydues:['Pay dues','Card, Apple Pay or bank transfer'],dhistory:['Payment history','Last paid: Q3 service charge · 30 Jun'],deposit:['Advance / deposit','Pay ahead to avoid reminders'],upload:['Upload a document','PDF or photo · stored securely'],rules:['Community rules','Opens the full Amali Residences rulebook'],rchat:['Messages','Chat with the Amali community desk'],rnotif:['3 new notifications','Valet, helpdesk and an announcement'],dues:['Dues · '+aed('25,000'),'Service charge for Q4 · pay by card or Apple Pay'],violation:['Open violation · Parking','Vehicle parked outside allotted bay B2-14 · 20 Oct'],ann:['Announcements','All community notices open here'],buzz:['Community buzz','Posts from your neighbours'],baz:['Discover bazaar','All listings from your neighbours'],sell:['List an item','Add photos, price and pickup details'],item:['Message the seller','Your neighbour will be notified'],
  deals:['Deals for you','All current offers'],newissue:['New helpdesk issue','Choose a category and describe the issue'],calendar:['Added to calendar','Saved to your calendar'],addguest:['Add a new guest','Name and mobile number · they get an access pass by SMS'],annrsvp:['You’re going','UAE National Day · 2 December · 7 PM'],revall:['Community events','All upcoming events at Amali Residences'],annslot:['Change your slot','The community desk will call you to reschedule'],annshare:['Share announcement','Send to your household'],family:['Family members','3 members linked to this unit'],help:['Domestic help','2 registered staff'],pass:['Visitor passes','1 pass active today'],rdocs:['Documents','Title deed, tenancy and receipts'],concierge:['Calling the community desk','Amali Residences · 24/7']};
function resAct(k, v, w, n){
  switch(k){
    case 'amcat': S.am.cat=n; return render();
    case 'rnread': S.rn.read=true; render(); return toast('All caught up','Notifications marked as read');
    case 'vtab': S.vt=n; return render();
    case 'clike': S.cm.liked[v]=!S.cm.liked[v]; return render();
    case 'cvote': S.cm.vote=n; render(); return toast('Vote recorded','Thanks for sharing your preference');
    case 'cjoin': S.cm.joined[n]=!S.cm.joined[n]; render(); return S.cm.joined[n]?toast('Joined '+GROUPS[n][0],'You’ll see its updates in Messages'):undefined;
    case 'csend': { const id=v||key().split(':')[1]; const c=CHATS.find(x=>x.id===id); const inp=cur.querySelector('[data-enter="csend"]'); const q=inp&&inp.value.trim(); if(!q||!c) return; c.msgs.push({me:true,t:q,tm:'Now'}); c.unread=0; render();
      if(!c.group){ S.ctyping=id; setTimeout(()=>{ render(); setTimeout(()=>{ S.ctyping=null; c.msgs.push({f:c.name,t:'Sounds good! 👍',tm:'Now'}); if(key()==='rchat:'+id) render(); },1400); },400); } return; }
    case 'amen': { if(v==='Crèche') return go('creche'); const a=AMEN.find(x=>x[0]===v); return a&&a[3]==='full'?toast(v+' is fully booked today','Next free slot: tomorrow, 7:00 AM'):toast('Book '+v, a&&a[3]==='open'?'Open now — walk in or reserve a slot':'Choose a time slot to reserve'); }
    case 'getcar': return getCar(n);
    case 'cancelcar': return cancelCar(n);
    case 'parkcar': S.valet[n]='parked'; vRender(); return toast('Thanks!', 'Enjoy your drive');
    case 'hdtab': S.hd.tab=n; return render();
    case 'hdmine': S.hd.mine=!S.hd.mine; return render();
    case 'ds': S.dsTab=n; return render();
    case 'dproj': S.dsTab=1; return tab('discover');
    case 'dserv': S.dsTab=0; return tab('discover');
    case 'rnewchat': S.rchat=[]; S.typing=false; return render();
    case 'rask': return rAsk(RPROMPTS[n]);
    case 'rchat': { const inp=cur.querySelector('[data-enter="rchat"]'); const q=inp&&inp.value.trim(); if(q) rAsk(q); return; }
    case 'crqr': { const m=[...S.rchat].reverse().find(x=>x.qr&&!x.answered); if(m) m.answered=true;
      S.rchat.push({me:true,text:v==='yes'?'Yes, book it':'No, thanks'}); S.typing=true; render();
      setTimeout(()=>{ S.typing=false; if(v==='yes'){ const b=crBook(16,20,TODAYK); S.rchat.push({text:`Done. Aisha is booked in today, 4:00 PM – 8:00 PM · Ref ${b.ref}. You’ll get a notification at check-in and check-out.`, go:'creche', goLabel:'View booking'}); toast('Crèche booked','4:00 PM – 8:00 PM · '+b.ref); } else S.rchat.push({text:'No problem. Let me know if you need anything else.'}); if(key()==='rassistant') render(); },1100); return; }
    case 'crpick': S.cr.sel=v+(w?':'+w:''); return render();
    case 'crmon': { let {y,m}=S.cr.ym; m+=n; if(m<0){m=11;y--;} if(m>11){m=0;y++;} S.cr.ym={y,m}; return render(); }
    case 'rrsvp': S.rev[n]=!S.rev[n]; render(); return toast(S.rev[n]?'You’re going':'RSVP cancelled', REVENTS[n].t);
    case 'amopen': { const nm=AMEN[n][0]; S.amr.am=nm; S.amr.date=TODAYK; S.amr.slot=null; S.amr.ppl={}; if(amSlots(nm,TODAYK).every(x=>x.left===0)){ S.amr.date=crDays()[1]; } return go('amres:'+n); }
    case 'amdate': S.amr.date=v; S.amr.slot=null; return render();
    case 'amslot': S.amr.slot=n; return render();
    case 'amppl': S.amr.ppl[v]=!S.amr.ppl[v]; return render();
    case 'amconfirm': { const R=S.amr; if(R.slot===null) return; const len=AMX[R.am][2]; const id='n'+(++R.seq); const ppl=Object.keys(R.ppl).filter(x=>R.ppl[x]); R.list.push({id,am:R.am,date:R.date,h:R.slot,len,ppl,ref:'AR-'+(2300+R.seq*13)}); R.last=id; S.stack=S.stack.slice(0,-1); S.stack.push('amdone'); return show('amdone', 'push'); }
    case 'amback': S.stack=['ramenities']; return show('ramenities', 'back');
    case 'amcancel': return openSheet(amCancelSheet(v));
    case 'amdocancel': { const r=S.amr.list.find(x=>x.id===v); S.amr.list=S.amr.list.filter(x=>x.id!==v); closeSheet(); render(); return toast('Reservation cancelled', r?`${r.am} · ${dayShort(r.date)}`:''); }
    case 'crdate': S.cr.bdate=v; S.cr.start=null; S.cr.dur=1; return render();
    case 'crstart': S.cr.start=n; S.cr.dur=Math.min(Math.max(S.cr.dur,1),maxDur(n))||1; if(S.cr.dur<1) S.cr.dur=1; return render();
    case 'crdur': S.cr.dur=n; return render();
    case 'crconfirm': { const C=S.cr; if(C.start===null) return; const d=Math.min(C.dur,maxDur(C.start)); crBook(C.start,C.start+d); C.start=null; C.dur=1; S.stack=S.stack.slice(0,-1); S.stack.push('crdone'); return show('crdone', 'push'); }
    case 'crback': S.stack=['rhome','creche']; return show('creche', 'back');
    case 'crcancel': return openSheet(cancelSheet(v));
    case 'crdocancel': { const b=S.cr.bookings.find(x=>x.id===v); if(b){ const pl=plOf(b.date); for(let h=b.from;h<b.to;h++) pl[h]++; S.cr.bookings=S.cr.bookings.filter(x=>x!==b); } closeSheet(); render(); return toast('Booking cancelled', b?`${hr(b.from)} – ${hr(b.to)} · places released`:''); }
    case 'toast': { if(v==='viol') return toast(w+' · details','Pay the fine or raise a dispute'); if(v==='issue') return toast('Opening '+w,'Conversation with the facilities team'); if(v==='serv') return toast(w,'An Amali advisor will contact you'); if(v==='interest') return toast('Interest registered', w+' · our sales team will call you'); const t=RTOASTS[v]; return t?toast(t[0],t[1]):false; }
  }
  return false;
}

const resState = () => ({amr:amrInit(), rev:{}, cm:{liked:{},vote:null,joined:{}}, rn:{read:false}, vt:0, ctyping:null, persona:'pre', am:{q:'',cat:0}, valet:{0:'parked',1:'parked',2:'parked'}, hd:{tab:0,mine:true}, dsTab:0, rchat:[{me:true,text:'Check crèche availability for 4pm to 8pm today'},{text:'It is available. Do you want me to book it for you?', qr:true}], cr:crInit()});
const fullInit = () => Object.assign(init(), resState());
Object.assign(S, resState());

/* ---------- overlays ---------- */
const unitsSheet = () => { const res=S.persona==='res'; return `<div class="overlay" data-close><div class="sheet" role="dialog" aria-label="My units"><div class="grab"></div>
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px"><h2 class="t-title">My units</h2><button class="back press" data-close aria-label="Close" style="background:var(--bg);border:0">${ic('x',18)}</button></div>
  <div class="stack"><button class="uopt ${res?'sel':''} press" data-act="persona:res"><div class="th" ${bg('tower')}></div><div class="grow"><div style="white-space:nowrap"><b style="font-size:15px">Tower B · 807</b></div><div class="small muted" style="font-weight:500;margin-top:3px">Amali Residences · 3 Bedroom</div></div><span class="radio"></span></button>
  <button class="uopt ${res?'':'sel'} press" data-act="persona:pre"><div class="th" ${bg('tower')}></div><div class="grow"><div style="white-space:nowrap"><b style="font-size:15px">Tower A · 1204</b></div><div class="small muted" style="font-weight:500;margin-top:3px">Amali Residences · 2 Bedroom</div></div><span class="radio"></span></button></div>
  <button class="attach press" style="justify-content:center;margin-top:16px" data-act="toast:link">${ic('plus',18)} Link another unit</button></div></div>`; };
const catSheet = () => `<div class="overlay" data-close><div class="sheet" role="dialog" aria-label="Choose category"><div class="grab"></div><h2 class="t-title" style="margin-bottom:6px">Choose category</h2>
  ${CATS.slice(0,8).map((c,i)=>`<button class="copt" role="radio" aria-checked="${S.cat===i}" data-act="cat:${i}"><span class="grow">${c}</span><span class="radio"></span></button>`).join('')}</div></div>`;

const dateSheet = () => { const {y,m}=S.sym; const first=new Date(y,m,1).getDay(); const days=new Date(y,m+1,0).getDate(); const today=new Date(2026,9,12); const min=new Date(2026,9,14);
  const canPrev=!(y===2026&&m===9); let cells=''; for(let i=0;i<first;i++) cells+='<span></span>';
  for(let d=1;d<=days;d++){ const dt=new Date(y,m,d); const k=ckey(y,m,d); const off=dt<min||dt.getDay()===5||dt.getDay()===6; const sel=(S.dsTarget==='hr'?(S.hr&&S.hr.date):S.sdate)===k; const td=+dt===+today;
    cells+=`<button class="dpd ${sel?'sel':''} ${td?'today':''}" ${off?'disabled':''} data-act="sdpick:${k}" aria-label="${longD(k)}" aria-pressed="${sel}">${d}</button>`; }
  return `<div class="overlay" data-close><div class="sheet" role="dialog" aria-label="Choose inspection date"><div class="grab"></div>
  <div class="dph"><h2 class="t-title">Choose a date</h2><div class="dpn"><button class="press" data-act="sdmon:-1" ${canPrev?'':'disabled'} aria-label="Previous month">${ic('chevL',18)}</button><b>${MONTHS[m]} ${y}</b><button class="press" data-act="sdmon:1" aria-label="Next month">${ic('chevR',18)}</button></div></div>
  <div class="dpw">${['Su','Mo','Tu','We','Th','Fr','Sa'].map(w=>`<span>${w}</span>`).join('')}</div><div class="dpg">${cells}</div>
  <p class="small muted" style="font-weight:500;margin-top:12px">Fridays and Saturdays are unavailable. The team confirms your time slot after you submit.</p></div></div>`; };
const FP = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M12 11.2v3.3c0 2-.6 3.9-1.6 5.4"/><path d="M8.6 12.6c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4v1.2c0 2.6-.6 5.1-1.7 7.1"/><path d="M5.7 15.6c.2-1 .3-2 .3-3A6 6 0 0 1 12 6.6a6 6 0 0 1 6 6v.9"/><path d="M17.9 17.4c-.2 1.3-.5 2.6-1 3.7"/><path d="M4.2 9.7A8.8 8.8 0 0 1 12 3.8a8.8 8.8 0 0 1 7.9 4.9"/><path d="M20.5 12.3v1.1"/></svg>';
const MAIL = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>';
SCREENS.login = () => `<div class="screen login" data-light><div class="lgbg">
  <div class="lgsl on" ${bg('tower')}></div><div class="lgsl" ${bg('heroShowApt')}></div><div class="lgsl" ${bg('lobbyDrop')}></div><div class="lgsl" ${bg('heroHoliday')}></div></div>
  <div class="lgshade"></div>
  <div class="lgtop"><img src="${IMG.logoW}" alt="Amali Properties"></div>
  <div class="lgbot">
    <div class="lgwel"><h1>Welcome<br><em>home</em></h1><span class="lgrule"></span></div>
    <button class="lgbtn uae press" data-act="login:uae"><svg class="uaelg" viewBox="131 36 596 614" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M423.214 182.005C432.83 181.139 449.686 182.057 459.122 183.184C516.013 189.625 567.982 218.486 603.52 263.371C639.058 308.675 651.16 363.334 644.534 420.07C640.024 458.658 622.748 494.903 578.594 497.409C570.829 497.825 563.602 497.682 558.559 490.918C553.621 484.292 554.65 473.917 561.037 468.639C566.932 463.768 575.276 465.225 582.427 463.865C616.294 457.419 619.96 416.199 618.205 388.284C616.525 351.201 605.267 314.986 582.705 285.244C551.975 244.728 508.08 224.477 458.655 217.671C448.157 215.365 419.584 215.632 409.051 216.627C360.675 220.988 316.108 244.69 285.449 282.361C246.474 329.684 233.788 391.753 242.431 451.621C243.942 461.597 245.921 471.502 248.362 481.298C249.767 486.958 252.629 495.768 253.036 501.394C254.018 514.973 237.277 523.816 226.732 514.041C225.221 512.66 223.975 511.018 223.055 509.192C222.067 507.218 220.131 499.27 219.439 496.549C213.41 473.463 209.832 449.807 208.767 425.969C206.431 363.058 222.79 302.334 266.193 255.132C304.983 212.946 365.802 184.136 423.214 182.005Z" fill="currentColor"/><path d="M422.723 325.16C431.445 324.669 438.596 330.345 439.725 339.066C440.158 342.39 439.562 345.768 438.02 348.745C432.541 359.391 421.001 356.669 410.118 360.42C401.371 363.522 393.696 369.067 388.003 376.397C373.299 395.459 375.258 417.215 378.191 439.427C385.579 500.395 422.177 551.386 476.448 579.678C486.433 584.885 495.735 588.593 506.476 592.053C509.025 592.871 513.745 594.967 515.87 596.718C526.574 605.527 522.101 622.683 507.48 624.098C483.355 624.447 445.814 602.554 427.837 587.484C383.474 550.299 350.682 494.227 344.831 436.185C341.963 407.723 345.115 377.652 364.188 355.116C379.777 336.598 398.967 327.452 422.723 325.16Z" fill="currentColor"/><path d="M419.803 40.0962C427.01 39.897 436.933 40.2214 444.038 40.6436C488.546 43.1424 532.091 54.6251 572.043 74.3998C580.458 78.5017 600.354 86.6224 598.46 98.4775C595.655 115.923 584.2 117.45 570.128 109.983C527.93 87.5961 485.808 75.7435 438.293 72.1832C394.675 70.4029 351.273 79.2084 311.796 97.8464C301.894 102.423 292.463 107.665 282.423 112.523C270.99 118.055 260.676 110.151 259.64 98.5938C258.522 86.1181 278.688 77.937 288.097 73.0247C329.47 51.4251 373.352 41.3795 419.803 40.0962Z" fill="currentColor"/><path d="M388.915 259.193C396.517 258.6 403.895 262.766 405.907 270.195C410.994 288.976 393.789 291.183 381.746 296.31C358.562 306.181 338.523 324.284 325.47 345.591C318.074 357.745 312.822 371.081 309.944 385.015C302.73 420.263 310.167 468.534 323.062 501.789C325.699 508.537 328.623 515.167 331.827 521.667C337.469 532.911 348.5 546.835 335.651 557.462C333.077 559.591 330.461 560.288 327.276 560.977C323.756 561.086 320.219 560.527 317.215 558.579C303.587 549.753 285.871 487.437 281.934 470.478C277.861 452.935 274.862 434.216 274.737 416.166C274.707 383.7 283.739 351.868 300.817 324.255C319.752 293.981 353.867 267.233 388.915 259.193Z" fill="#17AE75"/><path d="M417.602 113.563C493.047 111.617 563.854 135.012 619.595 186.666C631.689 197.895 642.879 210.058 653.063 223.043C655.641 226.283 659.874 231.452 661.713 235.034C662.864 237.227 663.498 239.653 663.565 242.127C663.838 252.621 656.082 258.607 646.134 258.704C643.354 258.088 639.81 257.115 637.857 255.024C632.293 249.068 627.431 241.931 622.06 235.657C610.1 221.689 596.738 208.979 582.192 197.727C560.424 180.981 536.051 167.923 510.054 159.073C489.52 152.011 463.102 146.924 441.275 146.195C436.568 146.024 431.856 145.991 427.145 146.097C423.013 146.201 418.359 146.579 414.276 146.078C401.54 144.517 396.651 128.592 404.571 119.199C408.18 114.918 412.292 113.982 417.602 113.563Z" fill="currentColor"/><path d="M427.241 396.465C445.894 394.946 443.845 412.446 445.26 425.684C446.15 433.662 447.754 441.543 450.056 449.236C465.517 500.193 509.764 533.192 562.649 532.563C568.952 532.491 577.766 530.728 583.389 533.923C587.265 536.157 590.053 539.89 591.09 544.244C592.149 548.699 591.368 553.389 588.924 557.261C585.997 561.816 582.532 563.483 577.489 564.583C543.434 568.778 509.008 560.532 480.559 541.355C447.477 519.462 424.453 485.325 416.553 446.456C414.355 435.652 410.634 411.887 417.105 402.205C419.707 398.312 422.971 397.233 427.241 396.465Z" fill="currentColor"/><path d="M353.371 122.7C356.95 122.559 359.648 123.003 362.742 124.993C366.355 127.296 368.872 130.975 369.708 135.177C371.501 143.957 366.756 151.874 358.103 154.222C352.928 155.626 347.363 157.358 342.275 159.063C330.255 163.073 318.612 168.133 307.479 174.184C272.505 193.144 243.635 223.291 221.226 255.83C215.663 263.908 211.424 272.088 201.048 274.215C184.659 273.678 178.168 256.543 188.839 244.057C200.728 230.146 211.306 215.48 223.809 201.965C250.418 173.202 283.64 151.726 318.934 135.16C327.264 131.267 344.384 124.103 353.371 122.7Z" fill="currentColor"/><path d="M504.595 276.778C516.491 275.907 523.231 283.912 531.231 291.722C555.733 316.061 572.324 347.222 578.841 381.136C580.664 390.413 584.061 412.345 578.392 420.566C576.028 423.988 573.168 425.042 569.351 425.793C551.173 428.111 550.761 414.218 549.249 400.49C547.83 387.563 544.093 375.18 539.075 363.176C533.561 350.228 526.372 338.058 517.696 326.978C512.107 319.851 506.632 313.848 499.766 307.983C496.986 305.607 493.597 302.239 492.585 298.562C489.734 288.187 494.433 279.992 504.595 276.778Z" fill="currentColor"/><path d="M163.856 299.912C167.593 299.411 171.621 299.462 174.958 301.304C188.873 309.24 181.968 321.946 178.607 333.539C174.253 348.555 170.73 365.749 170.022 381.302C169.517 392.396 169.021 399.09 157.457 402.971C153.365 403.447 150.666 403.521 146.768 401.592C143.098 399.771 140.313 396.552 139.038 392.658C134.886 380.089 146.672 321.472 153.929 307.944C156.365 303.402 159.136 301.499 163.856 299.912Z" fill="currentColor"/><path d="M355.719 577.512C360.547 576.794 366.583 577.344 370.262 580.833C380.833 590.852 390.748 601.362 402.627 609.944C405.549 612.484 410.056 614.622 412.639 617.452C422.034 627.739 417.606 639.815 405.288 643.884C390.425 646.285 315.529 594.622 355.719 577.512Z" fill="#E82126"/><path d="M480.265 347.843C482.902 347.956 487.307 348.693 489.541 350.67C500.257 360.929 505.531 379.78 508.626 393.843C510.957 404.43 503.113 412.538 493.085 413.909C489.188 414.084 485.354 412.853 482.284 410.441C475.604 405.206 474.927 395.238 472.227 387.529C470.409 380.673 465.794 373.017 465.005 366.024C463.787 355.313 470.367 348.739 480.265 347.843Z" fill="currentColor"/><path d="M512.741 441.778C521.673 440.561 529.899 446.825 531.109 455.757C532.314 464.692 526.049 472.913 517.113 474.114C508.185 475.311 499.976 469.054 498.771 460.128C497.561 451.205 503.818 442.992 512.741 441.778Z" fill="currentColor"/><path d="M680.475 281.321C689.302 280.464 697.167 286.89 698.087 295.71C699.002 304.529 692.632 312.436 683.818 313.415C674.915 314.403 666.916 307.955 665.988 299.049C665.06 290.144 671.564 282.187 680.475 281.321Z" fill="currentColor"/><path d="M703.928 334.694C712.733 333.844 720.586 340.248 721.518 349.047C722.455 357.847 716.122 365.757 707.333 366.775C698.422 367.808 690.381 361.374 689.432 352.454C688.487 343.534 694.996 335.555 703.928 334.694Z" fill="currentColor"/><path d="M447.301 254.87C456.182 254.394 463.774 261.196 464.27 270.075C464.761 278.954 457.975 286.559 449.098 287.073C440.192 287.588 432.562 280.777 432.062 271.872C431.566 262.966 438.394 255.349 447.301 254.87Z" fill="currentColor"/><path d="M225.46 123.875C234.282 123.456 241.799 130.21 242.323 139.025C242.848 147.84 236.185 155.437 227.376 156.067C221.583 156.482 216.014 153.75 212.797 148.915C209.58 144.08 209.212 137.888 211.833 132.706C214.454 127.523 219.659 124.15 225.46 123.875Z" fill="currentColor"/><path d="M255.203 545.474C260.932 544.412 266.787 546.528 270.52 551C274.251 555.472 275.279 561.611 273.209 567.057C271.139 572.503 266.292 576.407 260.53 577.272C251.828 578.583 243.685 572.67 242.232 563.991C240.778 555.312 246.55 547.074 255.203 545.474Z" fill="currentColor"/><path d="M630 508.495C638.668 506.336 647.44 511.64 649.552 520.323C651.66 529.002 646.306 537.744 637.614 539.806C628.988 541.846 620.334 536.543 618.238 527.935C616.147 519.324 621.4 510.636 630 508.495Z" fill="currentColor"/></svg><span>Sign in with UAE PASS</span></button>
    <div class="lgor"><span></span>or<span></span></div>
    <div class="lgrow"><button class="lgbtn alt press" data-act="login:phone">${ic('phone',19)}<span>Phone</span></button><button class="lgbtn alt press" data-act="login:email">${MAIL}<span>Email</span></button></div>
    <span class="lgfine">By continuing you agree to Amali’s Terms of Use and Privacy Policy.</span>
  </div></div>`;
const RCATS = ['Common Facility Usage','Data Correction','Housekeeping','Maintenance Billing','Parking','Security','Suggestions'];
const hrInit = () => { S.hr=S.hr||{cat:null,date:null,urgent:false,text:'',att:[]}; return S.hr; };
const hrKeep = () => { hrInit(); const ta=(cur&&cur.querySelector('[data-hrtext]'))||document.querySelector('[data-hrtext]'); if(ta) S.hr.text=ta.value; };
const rcatSheet = () => `<div class="overlay" data-close><div class="sheet" role="dialog" aria-label="Select category"><div class="grab"></div><h2 class="t-title" style="margin-bottom:6px">Select category</h2>
  ${RCATS.map((c,i)=>`<button class="copt" role="radio" aria-checked="${S.hr.cat===i}" data-act="hrcat:${i}"><span class="grow">${c}</span><span class="radio"></span></button>`).join('')}
  <button class="btn btn-ink btn-block press" style="margin-top:14px" data-act="hrcatdone">Done</button></div></div>`;
const TOASTS = {projects:['Amali projects','Our sales team will share details with you shortly'],invite:['Invite link copied','Share it with friends and family'],code:['Referral code copied','AHMED12'],pay:['Payment details sent','Escrow account details emailed to ahmed.m@email.com'],
  stmt:['Statement of account','Sent to ahmed.m@email.com'],report:['Downloading','Progress report · PDF · 2.4 MB'],video:['Playing','Drone walkthrough · 1:42'],share:['Link copied','Share this update with co-owners'],
  addco:['Request sent','Amali CRM will contact you'],locked:['Not available yet','Issued once construction is complete'],personal:['Personal details','Changes are verified by Amali CRM'],
  lang:['Language','English · العربية'],events:['Property events','The full events calendar opens here'],contact:['Calling Sara Khan','Your Amali relationship manager'],link:['Link a unit','Amali CRM will verify ownership'],comment:['Comment added','Amali CRM has been notified']};

/* ---------- rendering & navigation ---------- */
let vp = document.querySelector('.viewport'); const PHONE_VP = vp;
let statusEl = document.querySelector('.status'); const PHONE_ST = statusEl;
let cur = null, heroTimer = null, splashTimer = null; const VBLOB = {};

document.documentElement.style.setProperty('--dktower', `url('${new URL(IMG.tower, location.href).href}')`);
const key = () => S.stack[S.stack.length-1];
const build = k => {const [name, param] = k.split(':'); const html = SCREENS[name](param!==undefined?(isNaN(param)?param:Number(param)):undefined);
  const t = document.createElement('div'); t.innerHTML = html.trim(); const el=t.firstElementChild; if(el&&name!=='splash'){ el.insertAdjacentHTML('afterbegin', `<div class="dkbg"></div><div class="dkshade"></div>`); } return el;};

function mount(el, how='none'){ if(DUO) return duoMount(el, how);
  const old = cur; cur = el; vp.appendChild(el);
  if(how!=='none'){ el.classList.add('enter-'+how); if(old){ old.classList.add('leave-'+(how==='up'?'fade':how)); } }
  if(old){ setTimeout(()=>old.remove(), how==='none'?0:360); }
  statusEl.classList.toggle('light', el.hasAttribute('data-light'));
  afterMount(el); syncToc();
}
function render(){ if(DUO) return duoPaint('none'); const s = cur && cur.querySelector('.scroll'); const top = s ? s.scrollTop : 0; const el = build(key()); el.classList.add('go'); el.dataset.counted='1';
  if(cur) cur.remove(); cur = null; mount(el,'none'); const s2 = el.querySelector('.scroll'); if(s2) s2.scrollTop = top; }
function go(k, how='push'){ if(DUO&&ACT==='a'&&S.stack.length>=2) S.stack.pop(); S.stack.push(k); show(k, how); }
function back(){ if(S.stack.length>1){ S.stack.pop(); show(key(), 'back'); } else tab(S.persona==='res'?'rhome':'home'); }
function tab(k){ S.stack = [k]; show(k, 'fade'); }
function jump(k){ const r=isRes(k); S.persona=r?'res':'pre'; const h=r?'rhome':'home'; S.stack = k===h||k==='splash'||k==='login'?[k]:[h,k]; show(k, 'fade'); }

function afterMount(el){
  clearInterval(heroTimer); clearTimeout(splashTimer);
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('go')));
  el.querySelectorAll('[data-count]').forEach(n=>{ if(el.dataset.counted) return; const to=+n.dataset.count; const t0=performance.now(); const step=t=>{const p=Math.min(1,(t-t0)/1100); n.textContent=Math.round(to*(1-Math.pow(1-p,3))); if(p<1) requestAnimationFrame(step);}; requestAnimationFrame(step); });
  const hero = el.querySelector('.hero');
  if(hero){ let i=0; const sl=hero.querySelectorAll('.sl'), dots=hero.querySelectorAll('.hdots i'), ix=hero.querySelector('.hix');
    heroTimer = setInterval(()=>{ i=(i+1)%sl.length; sl.forEach((s,j)=>s.classList.toggle('on',j===i)); dots.forEach((d,j)=>d.classList.toggle('on',j===i)); if(ix) ix.textContent=`0${i+1} / 0${sl.length}`; }, 6000); }
  { const rs=el.querySelectorAll('.rhero .rsl'); if(rs.length>1){ let i=0; heroTimer=setInterval(()=>{ i=(i+1)%rs.length; rs.forEach((s,j)=>s.classList.toggle('on',j===i)); },6000); } }
  if(el.classList.contains('login')){ let i=0; const sl=el.querySelectorAll('.lgsl'); heroTimer=setInterval(()=>{ i=(i+1)%sl.length; sl.forEach((s,j)=>s.classList.toggle('on',j===i)); },5000); }
  if(el.classList.contains('splash')){ let i=0; const sl=el.querySelectorAll('.sl'), dots=el.querySelectorAll('.dots i');
    const toHome=()=>{ if(cur!==el) return; S.stack=['login']; show('login', 'fade'); };
    const slides=()=>{ el.classList.add('novid'); const tick=()=>{ i++; if(i>=sl.length) return toHome(); sl.forEach((s,j)=>s.classList.toggle('on',j===i)); dots.forEach((d,j)=>d.classList.toggle('on',j<=i)); splashTimer=setTimeout(tick,1500); }; splashTimer=setTimeout(tick,1500); };
    const v=el.querySelector('video'), bar=el.querySelector('.vprog i');
    const asBlob = u => { if(!u.startsWith('data:')) return u; try{ const [h,b64]=u.split(','); const mime=h.slice(5).split(';')[0]; const bin=atob(b64); const arr=new Uint8Array(bin.length); for(let k=0;k<bin.length;k++) arr[k]=bin.charCodeAt(k); return URL.createObjectURL(new Blob([arr],{type:mime})); }catch(e){ return u; } };
    if(v){ VBLOB.mp4 = VBLOB.mp4 || asBlob(IMG.splashVideo); v.src = VBLOB.mp4; }
    if(!v) slides(); else {
      let started=false;
      v.addEventListener('playing',()=>{ started=true; el.classList.add('hasvid'); });
      v.addEventListener('timeupdate',()=>{ if(v.duration) bar.style.width=(v.currentTime/v.duration*100)+'%'; });
      v.addEventListener('ended',toHome);
      let triedWebm=false;
      v.addEventListener('error',()=>{ if(started) return; if(!triedWebm){ triedWebm=true; VBLOB.webm = VBLOB.webm || asBlob(IMG.splashWebm); v.src=VBLOB.webm; const q=v.play(); if(q&&q.catch) q.catch(()=>{}); } else slides(); });
      const p=v.play(); if(p&&p.catch) p.catch(()=>{});
      splashTimer=setTimeout(()=>{ if(!started) slides(); },3000);
    } }
  const sc = el.querySelector('.scroll'); const light = el.hasAttribute('data-light');
  const stEl=statusEl; if(sc){ const upd=()=>{ const stp=el.querySelector('.stickytop'); const past = light ? sc.scrollTop>(stp?(el.querySelector('.rhero')?400:300):el.querySelector('.rhero')?350:540) : sc.scrollTop>8; stEl.classList.toggle('solid', past); stEl.classList.toggle('light', light && !past); if(stp) stp.classList.toggle('solid', past); }; sc.addEventListener('scroll', upd, {passive:true}); upd(); }
  else statusEl.classList.remove('solid');
  const m = el.querySelector('#msgs'); if(m && S.chat.length){ const s=el.querySelector('.scroll'); requestAnimationFrame(()=>{ const last=m.lastElementChild; s.scrollTop = last ? last.offsetTop + last.offsetHeight - s.clientHeight + 200 : s.scrollHeight; }); }
}

let toastT;
function toast(title, sub){ const old=vp.querySelector('.toast'); if(old) old.remove(); clearTimeout(toastT);
  const t=document.createElement('div'); t.className='toast'; t.setAttribute('role','status'); t.innerHTML=`<span class="ok">${ic('check',16,2.2)}</span><div><b>${title}</b><span>${sub}</span></div>`; vp.appendChild(t);
  toastT=setTimeout(()=>{t.classList.add('out'); setTimeout(()=>t.remove(),300);},2600); }
function openSheet(html){ closeSheet(true); const w=document.createElement('div'); w.innerHTML=html.trim(); vp.appendChild(w.firstElementChild); }
function closeSheet(now){ const o=vp.querySelector('.overlay'); if(!o) return; if(now){o.remove();return;} o.classList.add('closing'); setTimeout(()=>o.remove(),250); }

function ask(q, idx){ S.chat.push({me:true,text:q}); S.typing=true; render();
  setTimeout(()=>{ S.typing=false; S.chat.push(idx!==undefined?ANSWERS[idx]:answerFor(q)); if(key()==='aura') render(); }, 1300); }

function act(a, el){
  const [k, v, w] = a.split(':'); const n = Number(v);
  switch(k){
    case 'skip': S.stack=['login']; return show('login', 'fade');
    case 'units': return openSheet(unitsSheet());
    case 'persona': return switchPersona(v);
    case 'rsvp': S.rsvp[n]=!S.rsvp[n]; render(); return toast(S.rsvp[n]?'You’re going':'RSVP cancelled', EVENTS[n].t);
    case 'toast': { if(v==='receipt') return toast('Receipt downloaded', w+' · PDF'); const t=TOASTS[v]; if(t) return toast(t[0],t[1]); break; }
    case 'flt': S.flt=n; return render();
    case 'cu': S.cuTab=n; return render();
    case 'mu': S.muTab=n; return render();
    case 'rq': S.rqTab=n; return render();
    case 'doc': return toast('Downloading', DOCS[n][0]);
    case 'catsheet': return openSheet(catSheet());
    case 'login': { const via={uae:'UAE PASS',phone:'your phone number',email:'your email'}[v]; const h=S.persona==='res'?'rhome':'home'; S.stack=[h]; show(h, 'fade'); return; }
    case 'crmcontact': S.cat=5; S.comment='Hi Khalid, I’d like to discuss my unit.'; S.attached=false; S.sdate=null; return go('newrequest');
    case 'hrdate': hrKeep(); S.dsTarget='hr'; S.sym=S.sym||{y:2026,m:9}; return openSheet(dateSheet());
    case 'hrcatsheet': hrKeep(); return openSheet(rcatSheet());
    case 'hrcat': S.hr.cat=n; return openSheet(rcatSheet());
    case 'hrcatdone': closeSheet(); return render();
    case 'hratt': hrKeep(); if(S.hr.att.length>=5) return toast('Maximum 5 attachments','Remove one to add another'); S.hr.att.push(v==='doc'?`Document_${S.hr.att.length+1}.pdf`:`IMG_${2041+S.hr.att.length}.jpg`); return render();
    case 'hrdel': hrKeep(); S.hr.att.splice(n,1); return render();
    case 'hrurg': hrKeep(); S.hr.urgent=!S.hr.urgent; return render();
    case 'hrsubmit': { hrKeep(); if(S.hr.cat===null) return openSheet(rcatSheet()); const id='P'+(1423+ISSUES.filter(x=>x.fresh).length);
      ISSUES.unshift({id,st:'new',t:RCATS[S.hr.cat]+(S.hr.urgent?' · Urgent':''),b:S.hr.text||'New request raised from the app.',d:'13 Oct 2026, 9:41 AM',by:'Ahmed Al Mansoori · 807',ini:'AM',r:'0 replies',mine:true,fresh:true});
      S.hr=null; S.hd.tab=0; S.stack=['helpdesk']; show('helpdesk', 'back'); return toast('Request submitted',id+' · our team will be in touch'); }
    case 'cat': S.cat=n; S.comment=COMMENTS[n]; if(n!==SNAG) S.sdate=null; closeSheet(); return render();
    case 'reqcat': S.cat=n; S.comment=COMMENTS[n]; S.attached=false; if(n!==SNAG) S.sdate=null; return go('newrequest');
    case 'sdate': S.dsTarget=null; S.sym=S.sym||{y:2026,m:9}; return openSheet(dateSheet());
    case 'sdmon': { const t=S.sym.m+n; S.sym={y:S.sym.y+Math.floor(t/12),m:((t%12)+12)%12}; return openSheet(dateSheet()); }
    case 'sdpick': if(S.dsTarget==='hr'){ S.hr.date=v; S.dsTarget=null; } else S.sdate=v; closeSheet(); return render();
    case 'attach': S.attached=true; render(); return toast('Photo attached','IMG_2041.jpg');
    case 'detach': S.attached=false; return render();
    case 'submit': { if(S.cat===null) return openSheet(catSheet()); if(S.cat===SNAG&&!S.sdate){ S.sym=S.sym||{y:2026,m:9}; return openSheet(dateSheet()); } const id='SR-'+(20418+S.newReqs.length);
      S.newReqs.unshift({id, cat:CATS[S.cat], date:'09 Oct 2026', step:0, text:(S.comment||COMMENTS[S.cat])+(S.cat===SNAG&&S.sdate?` Preferred date: ${longD(S.sdate)} ${S.sdate.slice(0,4)}.`:'')}); S.rqTab=0;
      S.stack = S.stack.slice(0,-1).filter(x=>x!=='requests'); S.stack.push('requests'); show('requests', 'back'); return toast('Request submitted', id+' · '+CATS[S.cat]); }
    case 'comment': { const inp=cur.querySelector('[data-enter="comment"]'); if(inp) inp.value=''; return toast(TOASTS.comment[0],TOASTS.comment[1]); }
    case 'day': S.day=n; return render();
    case 'slot': S.slot=n; return render();
    case 'third': S.third=!S.third; return render();
    case 'book': { const l=slotLabel(); back(); return toast('Inspection booked', l); }
    case 'readall': S.read=true; render(); return toast('All caught up','Notifications marked as read');
    case 'notif': S.notif=!S.notif; return render();
    case 'logout': S=fullInit(); show('splash', 'fade'); return;
    case 'newchat': S.chat=[]; S.typing=false; return render();
    case 'ask': return ask(PROMPTS[n], n);
    case 'spa': return v==='dl'?toast('Downloading', SPA_FILE):toast('SPA emailed','Sent to ahmed.m@email.com');
    case 'chat': { const inp=cur.querySelector('[data-enter="chat"]'); const q=inp&&inp.value.trim(); if(q) ask(q); return; }
  }
  return resAct(k, v, w, n);
}

const onClick = e => {
  const t = e.target;
  const closer = t.closest('[data-close]');
  if(closer && (closer.classList.contains('overlay') ? t===closer : true)){ return closeSheet(); }
  const g = t.closest('[data-go]'); const a = t.closest('[data-act]'); const tb = t.closest('[data-tab]'); const b = t.closest('[data-back]');
  // innermost wins
  const cands = [g,a,tb,b].filter(Boolean).sort((x,y)=> x.contains(y)?1:-1);
  const el = cands[0]; if(!el) return; e.stopPropagation();
  if(el===b) return back();
  if(el===tb){ const k=tb.dataset.tab; if(key()!==k) tab(k); return; }
  if(el===g){ closeSheet(true); return go(g.dataset.go, g.dataset.tr||'push'); }
  if(el===a){ if(a.dataset.act.startsWith('mu:')&&a.closest('.tiles')){ S.muTab=1; return render(); } return act(a.dataset.act, a); }
};
vp.addEventListener('click', onClick);
const onKey = e => { if(e.key==='Enter' && e.target.dataset.enter){ e.preventDefault(); act(e.target.dataset.enter); } };
vp.addEventListener('keydown', onKey);
const onInput = e => { const m=e.target.dataset.model; if(m) S[m]=e.target.value; if(e.target.hasAttribute('data-amq')){ S.am.q=e.target.value; const l=cur.querySelector('#amlist'); if(l) l.innerHTML=amList(); } };
vp.addEventListener('input', onInput);

/* ---------- sidebar index ---------- */
const TOC = [['g','Post-sales'],['splash','Splash'],['login','Login'],['home','Owner home'],['myunit','My unit'],['payments','Payments'],['inst:0','Instalment detail'],['construction','Construction updates'],['updates','Announcements'],['update:0','Update detail'],['requests','Service requests'],['newrequest','New request'],['more','More'],['refer','Refer & earn'],['payhist','Payment history'],['activity','Activity'],['snagging','Snagging booking'],['documents','Documents'],['profile','Profile'],['aura','Amali Assistant'],
  ['g','Post-possession'],['rhome','Resident home'],['rmore','More (resident)'],['rnotifs','Notifications'],['rchats','Messages'],['rmyunit','My unit'],['violations','Rules & violations'],['rcommunity','Community'],['annd:0','Announcement detail'],['revd:0','Event detail'],['ramenities','Amenities'],['amres:2','Amenity reservation'],['valet','Valet'],['creche','Crèche'],['crbook','Book crèche'],['helpdesk','Requests (resident)'],['rnewreq','Create request'],['discover','Discover'],['rprofile','Resident profile'],['rassistant','Amali Assistant']];
const tocEl = document.querySelector('.toc');
let tn=0; tocEl.innerHTML = TOC.map(([k,l])=>k==='g'?`<li class="grp">${l}</li>`:`<li><button data-jump="${k}"><span>${String(++tn).padStart(2,'0')}</span>${l}</button></li>`).join(''); { const c=document.querySelector('.sx-count'); if(c) c.textContent=tn+' screens'; }
const TABS = ['myunit','payments','activity','aura','discover','rassistant','rmyunit','rcommunity'];
tocEl.addEventListener('click', e=>{ const b=e.target.closest('[data-jump]'); if(!b) return; closeSheet(true); const k=b.dataset.jump; if(TABS.includes(k)){ S.persona=isRes(k)?'res':'pre'; tab(k); } else jump(k); });
function syncPT(){ window.__persona=S.persona; const r=S.persona==='res'; document.querySelectorAll('.ptog [data-pt]').forEach(b=>b.setAttribute('aria-selected', String((b.dataset.pt==='res')===r))); }
document.querySelector('.ptog').addEventListener('click', e=>{ const b=e.target.closest('[data-pt]'); if(!b) return; const to=b.dataset.pt; closeSheet(true); if(key()==='splash'||key()==='login'||S.persona!==to){ if(key()==='splash'||key()==='login'){ S.persona=to; if(key()==='splash'){ S.stack=['login']; show('login', 'fade'); } else syncPT(); } else switchPersona(to); } });
function syncToc(){ syncPT(); const k=key(); const base=k.split(':')[0]; tocEl.querySelectorAll('button').forEach(b=>{ const j=b.dataset.jump; b.setAttribute('aria-current', String(j===k || (j.split(':')[0]===base && !TOC.some(([x])=>x===k)))); }); }
document.querySelector('.restart').addEventListener('click', ()=>{ closeSheet(true); S=fullInit(); show('splash', 'fade'); });

/* ---------- iPhone Duo: same screens, same state, two displays ---------- */
let DUO=false, ACT='o';
const D={};
function show(k, how='none'){ if(DUO) return duoPaint(how); mount(build(k), how); }
const DZ_BLANK = () => `<div class="screen dzblank"><div class="scroll"><div class="dzbl"><img src="${IMG.logoW}" alt=""><b>Pick something on the left</b><span>Details open here, so the list stays in view.</span></div></div></div>`;
SCREENS.dzblank = DZ_BLANK;
/* what the right-hand pane shows when only a tab is open */
const DZ_COMP = {home:'construction', payments:'inst:0', requests:()=>'request:'+reqs()[0].id, more:'myunit', myunit:'documents', aura:'documents', activity:'inst:0',
  rhome:'revd:0', rmyunit:'valet', helpdesk:'rnewreq', ramenities:'amres:0', rmore:'rprofile', rassistant:'creche', rcommunity:'rchats', discover:'dzblank'};
const dzComp = k => { const c=DZ_COMP[k.split(':')[0]]; return typeof c==='function'?c():(c||'dzblank'); };
function useSurf(s){ if(!s) return; vp=s.box; cur=s.cur; statusEl=s.st; }
function dzClear(s){ if(!s) return; clearInterval(s.hero); clearTimeout(s.splash); s.hero=null; s.splash=null; if(s.cur) s.cur.remove(); s.cur=null; s.k=null; }
function dzPaint(s, k, how){
  const old=s.cur; const same=old&&s.k===k; let top=0;
  if(same){ const sc=old.querySelector('.scroll'); top=sc?sc.scrollTop:0; how='none'; }
  const el=build(k); s.k=k;
  if(same){ el.classList.add('go'); el.dataset.counted='1'; }
  s.host.appendChild(el);
  if(how!=='none'&&old){ el.classList.add('enter-'+how); old.classList.add('leave-'+(how==='up'?'fade':how)); }
  if(old){ if(how==='none') old.remove(); else setTimeout(()=>old.remove(),360); }
  const sv=[vp,cur,statusEl,heroTimer,splashTimer];
  vp=s.box; cur=el; statusEl=s.st; heroTimer=s.hero; splashTimer=s.splash;
  statusEl.classList.toggle('light', el.hasAttribute('data-light'));
  afterMount(el);
  s.cur=el; s.hero=heroTimer; s.splash=splashTimer;
  [vp,cur,statusEl,heroTimer,splashTimer]=sv;
  if(same){ const s2=el.querySelector('.scroll'); if(s2) s2.scrollTop=top; }
}
function dzRail(){ const res=S.persona==='res'; const list=res?RNAVS:NAVS; const root=S.stack[0];
  D.rail.innerHTML=`<img class="lg" src="${IMG.logoW}" alt="Amali">${list.map(([id,l,i])=>`<button class="t press" data-tab="${id}" ${root===id?'aria-current="page"':''}>${root===id?(PF[i]?icf(i,22):ic(i,22,2.2)):ic(i,22,1.5)}<span>${l}</span></button>`).join('')}<span class="sp"></span><button class="me press" data-act="units" aria-label="Switch unit" ${bg('avatar')}></button>`; }
function duoPaint(how='none'){
  if(key()==='splash') S.stack=['login'];
  { const k0=key(), rail=(S.persona==='res'?RNAVS:NAVS).map(x=>x[0]);
    if(S.stack.length===1 && k0!=='login' && !rail.includes(k0)) S.stack=[S.persona==='res'?'rhome':'home', k0]; }
  const k=key(), st=S.stack, n=st.length;
  dzPaint(D.o, k, how);
  const full = k==='login';
  D.i.box.classList.toggle('full', full);
  if(full){ dzClear(D.a); dzClear(D.b); D.rail.innerHTML=''; dzPaint(D.f, k, how); }
  else {
    dzClear(D.f);
    let a, b, comp=false;
    if(n>=2){ a=st[n-2]; b=k; } else { a=k; b=dzComp(k); comp=true; }
    D.i.comp=comp; D.i.bk=b;
    D.i.box.dataset.depth=n; D.i.box.toggleAttribute('data-comp', comp);
    dzPaint(D.a, a, D.a.k===a?'none':how);
    dzPaint(D.b, b, how);
    dzRail();
    if(D.a.cur){ D.a.cur.querySelectorAll('[data-go]').forEach(x=>x.classList.toggle('dzsel', x.dataset.go===b && !x.matches('.link,.vall,.gbtn,.back'))); }
  }
  useSurf(D[ACT]||D.o); syncToc();
}
function duoMount(el, how){
  const stg = el && el.querySelector && el.querySelector('.stagger');
  duoPaint(how);
  if(stg) [D.o,D.a,D.b].forEach(s=>{ const r=s.cur&&(s.cur.querySelector('.stagger-root')||s.cur.querySelector('.scroll')); if(r) r.classList.add('stagger'); });
}
function dzWho(e, fallback){ const p=e.target.closest('[data-pane]'); if(p) return p.dataset.pane; if(e.target.closest('.dzrail')) return 'a'; return fallback; }
function dzHook(box, outer){
  box.addEventListener('click', e=>{
    ACT = outer ? 'o' : dzWho(e, ACT==='o'?'b':ACT);
    if(!outer && ACT==='b' && D.i.comp && e.target.closest('[data-pane="b"]')){ S.stack=[S.stack[0], D.i.bk]; D.i.comp=false; D.i.box.removeAttribute('data-comp'); D.i.box.dataset.depth=2; }
    useSurf(D[ACT]); onClick(e);
  });
  box.addEventListener('keydown', e=>{ ACT = outer?'o':dzWho(e,ACT); useSurf(D[ACT]); onKey(e); });
  box.addEventListener('input', e=>{ ACT = outer?'o':dzWho(e,ACT); useSurf(D[ACT]); onInput(e); });
}
{
  const q=s=>document.querySelector(s); const stat=()=>PHONE_ST.cloneNode(true);
  const oBox=q('.dzo'), iBox=q('.dzi');
  const mk=(box,host)=>{ const st=stat(); host.prepend(st); return {box, host, st, cur:null, hero:null, splash:null, k:null}; };
  D.o=mk(oBox, oBox);
  D.a=mk(iBox, q('.dzA')); D.b=mk(iBox, q('.dzB')); D.f=mk(iBox, q('.dzF'));
  D.i={box:iBox, comp:false, bk:null}; D.rail=q('.dzrail');
  D.p={box:PHONE_VP, host:PHONE_VP, st:PHONE_ST};
  dzHook(oBox, true); dzHook(iBox, false);
}
window.__duoSet = on => {
  if(on===DUO) return;
  closeSheet(true);
  if(on){
    D.p.cur=cur; clearInterval(heroTimer); clearTimeout(splashTimer);
    if(cur){ cur.querySelectorAll('video').forEach(v=>{ try{v.pause();}catch(_){} }); cur.remove(); } cur=null; D.p.cur=null;
    DUO=true; ACT='o'; duoPaint('fade'); dzFit();
  } else {
    [D.o,D.a,D.b,D.f].forEach(dzClear); DUO=false; ACT='o';
    vp=PHONE_VP; statusEl=PHONE_ST; cur=null;
    if(key()==='splash') S.stack=['login'];
    mount(build(key()),'fade');
  }
};
function dzFit(){ const st=document.querySelector('.duostage'); if(!st||!DUO) return; const sm=innerWidth<=860;
  const W=sm?760:1188, H=sm?1180:660; const s=Math.min(sm?1:1.18,(innerWidth-24)/W,sm?9:(innerHeight-120)/H);
  const row=st.querySelector('.dzrow'); row.style.transform=`scale(${s})`; row.style.marginBottom=`${(s-1)*row.offsetHeight}px`; row.style.marginTop=s>1?`${(s-1)*20}px`:''; }
addEventListener('resize', dzFit);

/* ---------- fit device to window ---------- */
const device = document.querySelector('.device');
function fit(){ if(innerWidth<=860){ device.style.transform=''; return; } const s=Math.min(1,(innerHeight-56-66)/874); device.style.transform=`scale(${s})`; device.style.margin=`${(874*s-874)/2}px ${(420*s-420)/2}px`; }
addEventListener('resize', fit); fit();

show('splash', 'none');
})();

/* ---------- theme + view switching ---------- */
(function(){
  const root=document.documentElement, dk=document.getElementById('theme-dark'), lt=document.getElementById('theme-light');
  const tSeg=document.getElementById('themeSeg'), vSeg=document.getElementById('viewSeg');
  const mark=(seg,attr,val)=>seg.querySelectorAll('button').forEach(b=>b.setAttribute('aria-selected',String(b.dataset[attr]===val)));
  function setTheme(t,save){ root.dataset.theme=t; dk.media=t==='dark'?'all':'not all'; lt.media=t==='light'?'all':'not all'; mark(tSeg,'th',t);
    if(save){ try{localStorage.setItem('amali-theme',t);}catch(e){} } }
  function setView(v){ const duo=v==='duo'; root.classList.toggle('duo',duo); mark(vSeg,'vw',v); if(window.__duoSet) window.__duoSet(duo); }
  let saved='dark'; try{ saved=localStorage.getItem('amali-theme')||'dark'; }catch(e){}
  setTheme(saved,false); setView('phone');
  tSeg.addEventListener('click',e=>{ const b=e.target.closest('[data-th]'); if(b&&b.dataset.th!==root.dataset.theme) setTheme(b.dataset.th,true); });
  vSeg.addEventListener('click',e=>{ const b=e.target.closest('[data-vw]'); if(b) setView(b.dataset.vw); });
})();
