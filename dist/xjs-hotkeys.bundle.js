!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("xjs-hotkeys",["react"],t):"object"==typeof exports?exports["xjs-hotkeys"]=t(require("react")):e["xjs-hotkeys"]=t(e[void 0])}("undefined"!=typeof self?self:this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="e4nV")}({"Ab/A":function(e,t){!function(){"use strict";function t(){this.events={}}t.prototype.on=function(e,t,n){return this.events[e]||(this.events[e]=[]),n&&(t._E_ctx=n),this.events[e].push(t),this},t.prototype.once=function(e,t,n){return t._E_once=!0,this.on(e,t,n)},t.prototype.emit=function(e,t,n,o,r){var i,a,s,l;if(!this.events[e])return!1;s=Array.prototype.slice.call(arguments,1),l=s.length,a=this.events[e];for(var u=0,c=a.length;u<c;u++)switch(i=a[u],i._E_once&&this.off(e,i),l){case 0:i.call(i._E_ctx);break;case 1:i.call(i._E_ctx,t);break;case 2:i.call(i._E_ctx,t,n);break;case 3:i.call(i._E_ctx,t,n,o);break;case 4:i.call(i._E_ctx,t,n,o,r);break;default:i.apply(i._E_ctx,s)}return!0},t.prototype.off=function(e,t){if(!this.events[e])return this;for(var n=0,o=this.events[e].length;n<o;n++)this.events[e][n]===t&&(this.events[e][n]=null,delete this.events[e][n]);return this.events[e]=this.events[e].filter(function(e){return void 0!==e}),this},t.prototype.listeners=function(e){var t,n;if(e)return this.events[e]||[];t=this.events,n=[];for(var o in t)n=n.concat(t[o].valueOf());return n},void 0!==e&&e.exports?e.exports=t:window.Evemit=t}()},"FZ+f":function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},Jmof:function(t,n){t.exports=e},MTIv:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=h[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(c(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(c(o.parts[i],t));h[o.id]={id:o.id,refs:1,parts:a}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],u=i[3],c={css:s,media:l,sourceMap:u};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function i(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=b[b.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=k++;n=m||(m=s(t)),o=p.bind(null,n,u,!1),r=p.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=d.bind(null,n,t),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=f.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function p(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=M(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=g(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),y=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,k=0,b=[],g=n("mJPh");e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=h[s.id];l.refs--,i.push(l)}if(e){o(r(e,t),t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete h[l.id]}}}};var M=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},"NCi/":function(e,t){e.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='_x34_44444' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 8 8;' style='enable-background:new 0 0 8 8;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23888888;%7D %3C/style%3E %3Cpath class='st0' d='M7.7,1.7l-6,6c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0l0,0 C8.1,0.7,8.1,1.3,7.7,1.7z'/%3E %3Cpath class='st0' d='M6.3,7.7l-6-6c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l0,0 C7.3,8.1,6.7,8.1,6.3,7.7z'/%3E %3C/svg%3E\""},RJdI:function(e,t,n){t=e.exports=n("FZ+f")(void 0),t.push([e.i,".xui-keyStroke {\n  position: relative;\n  display: inline-block; }\n\n.xui-keyStroke input {\n  background-color: #393939;\n  border: none;\n  color: #CCCCCC;\n  width: 215px;\n  padding: 1px 20px 1px 5px;\n  font-size: 12px;\n  line-height: 17px;\n  height: 24px;\n  vertical-align: middle;\n  margin-top: 1px;\n  margin-bottom: 1px;\n  border: 1px solid #040404;\n  cursor: default;\n  outline: none; }\n\n.xui-keyStroke input:disabled {\n  color: #666666;\n  background-color: #292929; }\n\n.xui-keyStroke input:hover {\n  background-color: #464646; }\n\n.xui-keyStroke input:focus {\n  background-color: #505050; }\n\n.xui-keyStroke input:focus + button[name=delete],\n.xui-keyStroke input:hover + button[name=delete] {\n  background-image: url("+n("NCi/")+"); }\n\n.xui-keyStroke button[name=delete] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border: none;\n  background-color: transparent;\n  margin-left: -15px;\n  padding: 0;\n  outline: none;\n  cursor: pointer; }\n\n.xui-keyStroke button[name=delete]:hover,\n.xui-keyStroke input:focus + button[name=delete]:hover {\n  background-image: url("+n("vkUU")+"); }\n",""])},e4nV:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=(n("x9tv"),n("Ab/A")),u=n.n(l),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p={8:"Backspace",9:"Tab",12:"Num5",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrtScr",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"LCommand",92:"RCommand",93:"Menu",96:"Num0",97:"Num1",98:"Num2",99:"Num3",100:"Num4",101:"Num5",102:"Num6",103:"Num7",104:"Num8",105:"Num9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Ctrl",163:"Ctrl",164:"Alt",165:"Alt",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"Backslash",221:"]",222:"Quote"},f={0:"MLeft",left:"MLeft",1:"MCenter",middle:"MCenter",2:"MRight",right:"MRight",wheel:"MWheel",3:"MBack",mback:"MBack",4:"MForward",mforward:"MForward"},d={WM_KEYDOWN:256,WM_KEYUP:257,WM_SYSKEYDOWN:260,WM_SYSKEYUP:261,WM_LBUTTONDOWN:513,WM_LBUTTONUP:514,WM_MOUSEMOVE:512,WM_MOUSEWHEEL:522,WM_MOUSEHWHEEL:526,WM_RBUTTONDOWN:516,WM_RBUTTONUP:517,WM_MBUTTONDOWN:519,WM_MBUTTONUP:520,WM_XBUTTONDOWN:523,WM_XBUTTONUP:524},h={8:"Backspace",9:"Tab",13:"Enter",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",106:"*",110:".",111:"/",144:"NumLock",145:"ScrollLock"},v={16:"Shift",160:"Shift",161:"Shift",17:"Ctrl",162:"Ctrl",163:"Ctrl",18:"Alt",164:"Alt",165:"Alt",96:"Num0",97:"Num1",98:"Num2",99:"Num3",100:"Num4",101:"Num5",102:"Num6",103:"Num7",104:"Num8",105:"Num9",107:"+",109:"-",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12"},y={8:"NoteOff",9:"NoteOn",10:"PolyphonicAftertouch",11:"ControlChange",12:"ProgramChange",13:"ChannelAftertouch",14:"PitchWheel"},m={MK_XBUTTON1:65568,MK_XBUTTON2:131136},k={160:{active:!1,value:"Shift"},161:{active:!1,value:"Shift"},162:{active:!1,value:"Ctrl"},163:{active:!1,value:"Ctrl"},164:{active:!1,value:"Alt"},165:{active:!1,value:"Alt"},16:{active:!1,value:"Shift"},17:{active:!1,value:"Ctrl"},18:{active:!1,value:"Alt"}},b=new Map,g=function(){function e(){o(this,e)}return c(e,null,[{key:"combinedKeyPressed",value:function(){return k}},{key:"wParamMap",value:function(){return p}},{key:"hookMessageType",value:function(){return d}},{key:"restrictedSpecialKeys",value:function(){return h}},{key:"specialKeys",value:function(){return v}},{key:"mouseMap",value:function(){return f}},{key:"midiMessageType",value:function(){return y}},{key:"specialMouseButtons",value:function(){return m}},{key:"rememberedKeys",value:function(){return b}}]),e}(),M=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),w=new u.a,C={},x="",E=!1,S=function(){function e(){r(this,e)}return M(e,null,[{key:"assignXjs",value:function(e){if(!(C=e)&&!C.hasOwnProperty("Dll"))return new Error("Invalid xjs object parameter")}},{key:"preventKeyHandlerEmit",value:function(e){E=e}},{key:"initWithXjsDllHook",value:function(t){if(C=t,e.removeHookOnRevoke(),!C||!C.hasOwnProperty("Dll"))return new Error("Invalid xjs object parameter");var n=C.Dll;n.load(["Scriptdlls\\SplitMediaLabs\\XSplitScriptPluginInternal.dll"]),n.on("access-granted",function(){e.assignHookOnAccessGranted()}),n.on("access-revoked",function(){e.removeHookOnRevoke()}),n.isAccessGranted().then(function(t){t?e.assignHookOnAccessGranted():e.removeHookOnRevoke()})}},{key:"assignHookOnAccessGranted",value:function(){C.Dll.callEx("xsplit.HookSubscribe").then(function(){window.OnDllOnInputHookEvent=e.readHookEvent}).catch(function(t){e.removeHookOnRevoke(),console.error(t.message)})}},{key:"removeHookOnRevoke",value:function(){C.Dll.callEx("xsplit.HookUnsubscribe").then(function(){window.OnDllOnInputHookEvent=function(){}}).catch(function(e){window.OnDllOnInputHookEvent=function(){},console.error(e.message)})}},{key:"readHookEvent",value:function(t,n,o){var r=g.hookMessageType(),i=g.mouseMap(),a=g.specialMouseButtons();switch(parseInt(t,10)){case r.WM_KEYDOWN:case r.WM_SYSKEYDOWN:e.handleKeydown(n,o);break;case r.WM_KEYUP:case r.WM_SYSKEYUP:e.handleKeyup(n,o);break;case r.WM_LBUTTONUP:e.handleMouseUp(i.left);break;case r.WM_RBUTTONUP:e.handleMouseUp(i.right);break;case r.WM_MBUTTONUP:e.handleMouseUp(i.middle);break;case r.WM_MOUSEWHEEL:case r.WM_MOUSEHWHEEL:e.handleMouseScroll(i.wheel);break;case r.WM_XBUTTONUP:a.MK_XBUTTON1===parseInt(n,10)?e.handleMouseUp(i.mback):a.MK_XBUTTON2===parseInt(n,10)&&e.handleMouseUp(i.mforward)}}},{key:"handleMouseScroll",value:function(t){e.processMouseEvent(t)}},{key:"handleMouseUp",value:function(t){e.processMouseEvent(t)}},{key:"processMouseEvent",value:function(t){var n=e.detectCombinedKeys();n.event=n.event+n.sep+t,n.event&&""!==n.event&&(E||w.emit(n.event,n.event))}},{key:"handleKeydown",value:function(e,t){g.combinedKeyPressed().hasOwnProperty(e)&&(g.combinedKeyPressed()[e].active=!0,g.rememberedKeys().set(g.combinedKeyPressed()[e].value,!0))}},{key:"handleKeyup",value:function(t,n){g.combinedKeyPressed().hasOwnProperty(t)&&(g.combinedKeyPressed()[t].active=!1),g.wParamMap().hasOwnProperty(t)&&(e.processKeyEvent(t,n),g.combinedKeyPressed().hasOwnProperty(t)||g.rememberedKeys().clear())}},{key:"detectCombinedKeys",value:function(){var e=new Map,t="";for(var n in g.combinedKeyPressed())g.combinedKeyPressed().hasOwnProperty(n)&&g.combinedKeyPressed()[n].active&&e.set(g.combinedKeyPressed()[n].value,n);var o="";return(e.has("Ctrl")||g.rememberedKeys().has("Ctrl"))&&(t=t+o+"Ctrl",o="+"),(e.has("Shift")||g.rememberedKeys().has("Shift"))&&(t=t+o+"Shift",o="+"),(e.has("Alt")||g.rememberedKeys().has("Alt"))&&(t=t+o+"Alt",o="+"),{event:t,sep:o}}},{key:"processKeyEvent",value:function(t,n){var o=e.detectCombinedKeys(),r=g.wParamMap();o.event=o.event+o.sep+r[t],o.event&&""!==o.event&&(E||w.emit(o.event,o.event))}},{key:"initMidiHook",value:function(){C.Dll.call("xsplit.Midi.StartMonitor").then(function(t){x=t||"",window.OnDllMidiChannelMessage=e.readMidiHookEvent,e.cleanUpPreviousMidiHook(),e.createStopMidiMonitorEvent()}).catch(function(t){console.error(t),e.removeMidiHook()})}},{key:"cleanUpPreviousMidiHook",value:function(){var e=localStorage.getItem("midiClient");e&&""!==e&&window.external.CallDll("xsplit.Midi.StopMonitor",e)}},{key:"removeMidiHook",value:function(){window.external.CallDll("xsplit.Midi.StopMonitor",x),localStorage.setItem("midiClient",x),x="",window.OnDllMidiChannelMessage=function(){}}},{key:"createStopMidiMonitorEvent",value:function(){window.addEventListener("beforeunload",function(t){e.removeMidiHook()})}},{key:"readMidiHookEvent",value:function(e,t,n,o){var r="";if(!(Number.isNaN(e)||Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(o)||0!==parseInt(o,10))){var i=g.midiMessageType();i[e]&&(r=i[e]+" "+t+":"+n,E||w.emit(r,r))}}},{key:"on",value:function(e,t){e&&""!==e&&"None"!==e&&w.on(e,t)}},{key:"off",value:function(e,t){e&&""!==e&&"None"!==e&&w.off(e,t)}}]),e}(),N=S,O=n("Jmof"),K=n.n(O),U=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),P=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onValueChange=n.onValueChange.bind(n),n.callValueChange=n.callValueChange.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.onKeyUp=n.onKeyUp.bind(n),n.onDeleteClick=n.onDeleteClick.bind(n),n.onMouseDown=n.onMouseDown.bind(n),n.onMouseUp=n.onMouseUp.bind(n),n.onWheel=n.onWheel.bind(n),n.getInputKeyStoke=n.getInputKeyStoke.bind(n),n.inputKeyStroke=null,n.onBlur=n.onBlur.bind(n),n.onFocus=n.onFocus.bind(n),n.oldDllMidiChannelMessage=function(){},n.state={prevKeyDownValue:"",toggleFocus:!1},n}return s(t,e),U(t,[{key:"onValueChange",value:function(e,t){this.inputKeyStroke.value=e,this.inputKeyStroke.focus()}},{key:"callValueChange",value:function(){var e=this;setTimeout(function(){var t=e.inputKeyStroke.value;e.props.onValueChange(t)},0)}},{key:"onBlur",value:function(){this.props.KeyStrokeHandler&&this.props.KeyStrokeHandler.preventKeyHandlerEmit(!1),window.OnDllMidiChannelMessage=this.oldDllMidiChannelMessage,this.oldDllMidiChannelMessage={},this.setState({toggleFocus:!1})}},{key:"onFocus",value:function(){this.props.KeyStrokeHandler&&this.props.KeyStrokeHandler.preventKeyHandlerEmit(!0),this.oldDllMidiChannelMessage=window.OnDllMidiChannelMessage,window.OnDllMidiChannelMessage=this.readMidiHookEvent.bind(this),this.state.toggleFocus||this.setState({toggleFocus:!0})}},{key:"readMidiHookEvent",value:function(e,t,n,o){var r="";if(!(Number.isNaN(e)||Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(o))){var i=g.midiMessageType();i[e]&&(r=i[e]+" "+t+":"+n,0!==parseInt(o,10)&&this.onValueChange(r,this.inputKeyStroke.dataset.key),0===parseInt(o,10)&&(this.oldDllMidiChannelMessage(e,t,n,o),this.callValueChange()))}}},{key:"onWheel",value:function(e){if(this.state.toggleFocus){e.preventDefault();var t="",n=this.determinePressedKey(e),o=g.mouseMap();t=n.pressed+n.sep+o.wheel,e.target.value=t,this.onValueChange(t,e.target.dataset.key),this.callValueChange()}}},{key:"onMouseDown",value:function(e){if(!this.state.toggleFocus)return void this.setState({toggleFocus:!0});e.preventDefault();var t="",n=this.determinePressedKey(e),o=g.mouseMap();o[e.button]&&(t=n.pressed+n.sep+o[e.button],e.target.value=t,this.onValueChange(t,e.target.dataset.key))}},{key:"onMouseUp",value:function(e){e.preventDefault(),this.callValueChange()}},{key:"onKeyDown",value:function(e){e.preventDefault();var t="",n=g.wParamMap();if(this.state.prevKeyDownValue!==n[e.which]){this.setState({prevKeyDownValue:n[e.which]});var o=this.determinePressedKey(e);n[e.which]&&(t=o.pressed+(g.combinedKeyPressed()[e.which]?"":o.sep+n[e.which]),e.target.value=t,this.onValueChange(t,e.target.dataset.key))}}},{key:"onKeyUp",value:function(e){e.preventDefault(),this.setState({prevKeyDownValue:""});var t="",n=g.wParamMap(),o=this.determinePressedKey(e);n[e.which]&&n[44]===n[e.which]&&(t=o.pressed+o.sep+n[e.which],e.target.value=t,this.onValueChange(t,e.target.dataset.key)),this.callValueChange()}},{key:"determinePressedKey",value:function(e){var t="",n="";return e.ctrlKey&&(t="Ctrl",n="+"),e.shiftKey&&(t=t+n+"Shift",n="+"),e.altKey&&(t=t+n+"Alt",n="+"),{pressed:t,sep:n}}},{key:"onDeleteClick",value:function(e){this.onValueChange("",this.props.inputName),this.callValueChange()}},{key:"getInputKeyStoke",value:function(e){this.inputKeyStroke=e}},{key:"render",value:function(){var e="",t="None";return void 0!==this.props.placeholderText&&(t=this.props.placeholderText),void 0!==this.props.value&&(e=this.props.value),K.a.createElement("div",{className:"xui-keyStroke"},K.a.createElement("input",{type:"text",ref:this.getInputKeyStoke,placeholder:t,"data-key":this.props.inputName,onKeyDown:this.onKeyDown,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onKeyUp:this.onKeyUp,onWheel:this.onWheel,onBlur:this.onBlur,onFocus:this.onFocus,defaultValue:e}),K.a.createElement("button",{name:"delete",onClick:this.onDeleteClick}))}}]),t}(O.Component),D=P;n.d(t,"KeyStrokeHandler",function(){return N}),n.d(t,"XUIKeyStrokes",function(){return D})},mJPh:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},vkUU:function(e,t){e.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='_x34_44444' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 8 8;' style='enable-background:new 0 0 8 8;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23CCCCCC;%7D %3C/style%3E %3Cpath class='st0' d='M7.7,1.7l-6,6c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0l0,0 C8.1,0.7,8.1,1.3,7.7,1.7z'/%3E %3Cpath class='st0' d='M6.3,7.7l-6-6c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l0,0 C7.3,8.1,6.7,8.1,6.3,7.7z'/%3E %3C/svg%3E\""},x9tv:function(e,t,n){var o=n("RJdI");"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n("MTIv")(o,r);o.locals&&(e.exports=o.locals)}})});
//# sourceMappingURL=xjs-hotkeys.bundle.js.map