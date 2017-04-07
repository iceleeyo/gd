
RGraph=window.RGraph||{isRGraph:true};RGraph.Fuel=function(conf)
{if(typeof conf==='object'&&typeof conf.id==='string'){var id=conf.id,canvas=document.getElementById(id),min=conf.min,max=conf.max,value=conf.value,parseConfObjectForOptions=true;}else{var id=conf,canvas=document.getElementById(id),min=arguments[1],max=arguments[2],value=arguments[3];}
this.id=id;this.canvas=canvas;this.context=this.canvas.getContext?this.canvas.getContext("2d",{alpha:(typeof id==='object'&&id.alpha===false)?false:true}):null;this.canvas.__object__=this;this.type='fuel';this.isRGraph=true;this.min=RGraph.stringsToNumbers(min);this.max=RGraph.stringsToNumbers(max);this.value=RGraph.stringsToNumbers(value);this.angles={};this.currentValue=null;this.uid=RGraph.CreateUID();this.canvas.uid=this.canvas.uid?this.canvas.uid:RGraph.CreateUID();this.coordsText=[];this.original_colors=[];this.firstDraw=true;if(!this.canvas){alert('[FUEL] No canvas support');return;}
this.properties={'chart.colors':['Gradient(white:red)'],'chart.needle.color':'red','chart.gutter.left':5,'chart.gutter.right':5,'chart.gutter.top':5,'chart.gutter.bottom':5,'chart.text.size':12,'chart.text.color':'black','chart.text.font':'Arial','chart.contextmenu':null,'chart.annotatable':false,'chart.annotate.color':'black','chart.zoom.factor':1.5,'chart.zoom.fade.in':true,'chart.zoom.fade.out':true,'chart.zoom.factor':1.5,'chart.zoom.fade.in':true,'chart.zoom.fade.out':true,'chart.zoom.hdir':'right','chart.zoom.vdir':'down','chart.zoom.frames':25,'chart.zoom.delay':16.666,'chart.zoom.shadow':true,'chart.zoom.background':true,'chart.zoom.action':'zoom','chart.adjustable':false,'chart.resizable':false,'chart.resize.handle.background':null,'chart.icon':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAEGElEQVRIS7VXSyhtYRT+jnfe5FEMjAwUBiQGHikzRWIkkgy8YyDK+xnJK5JCeZSUGKBMiAyYkMxMJAMpSfJ+2/d8695/33NunSPnHqt2Z5+91/9/'+'/'+'/et9a/1b8Pn56dmMBhg/IWDgwNoNzc38PHxkXtN0+Tiexp9eH18fIDj1Bj63N/fw8vLS/wsmcHoqKmXT09PuL29RVFREU5OTvTJ6UIAgioQ+vLe09MTb29v8PX1RWBgICYnJ+XXIqDRWXN0dJT3nIDsWlpadP+lpSWZlD4KmL/8/'+'/7+Ls/S09N1/7y8PISHh+sK/QssDJWcHEyGCnB1dRUDAwPIzMzUx5GpAnZ1dcXy8jK2trbM5j06OsLc3JzISx8q4OzsLOOsAq6treHg4AAeHh4WJbq7u0Nzc7P+PiYmBnt7ezg9PcXExAQCAgLg5OSEx8dHuLu7Wwfc3t7G/v6+yEcjO8rIROGKaWdnZ+jr6zMDjI6OxvT0tDzr6uqS2KtksspwZ2cHjY2NuqSUhnHmilUCraysmElaWloKJpQCjI2NRX5+Pl5eXr6WlCv08/MTEMVOZDH+Zzw4CdlfX1/rDHt7ezE1NQXGkcYEKi4ulkVKYlpLGouBs/JiaGgIZL25uSlecXFxohAz/ccAz8/P4e/vj7q6Ojw8PMje5DNRy94MQ0JCUFtbK2wqKipE+sHBQbi4uPwMQ86ak5ODxMREVFdXIywsDCUlJRJDXnZlmJqaip6eHuTm5kqikGlycjIyMjL+ZrY9JSUgMzQiIgINDQ2ypaqqqkCZWXHsnjQEHB8fR0pKigAxabq7uyWOlJNxtLukTJDs7GxUVlZKDNl5oqKi8Pr6+jOAIyMjiI+Pl5JGQG4F1Qy+LN7f3fiUdGZmBsHBwRgbG8Pw8LD01ba2NmlX0rTtnTQLCwvSjEdHR3FxcSExLCwsRGRkpBR9vePzeMDyw3bT1NT0XXLiT4a7u7s4Pj4GGzd7K8GCgoKEsRR8I4Cm6hwHXV5eiv62GAE5npMTmFuBTCkzmzT7qs5Q9TlW/o6ODlvwhCHPM5SVPZIxYzNeXFxEa2srvL29YTC2GI3aMm3Zeq6urv4LMC0tDRsbG1K8k5KS9DgS0IwhKVFjSsJA22r9/f0oKCgQdvPz83JEmZ2dlcpD9maSshow0KZnlO8Csx9yK3BLKCMJPpf2xGMigdi9WXooaWdn53dxdP+amhrZh4eHh1hfX5cTW319vZyBnp+ffzNkBWBmhYaGysB/j322oCckJCArK0uGMlsJ5ubmBoPxRiMzFlomjr2MGdne3i5ANILRJEtJt6ysTG8h9gDl4am8vFwSUWron1O9LulXIOqk9pWftfdSS40yyj5Uh101wPRryuR7R1ZMX/U1pfy5IF40xcgUnGAc9wsGYxsFhy87kwAAAABJRU5ErkJggg==','chart.icon.redraw':true,'chart.background.image.stretch':false,'chart.background.image.x':null,'chart.background.image.y':null,'chart.labels.full':'F','chart.labels.empty':'E','chart.labels.count':5,'chart.centerx':null,'chart.centery':null,'chart.radius':null,'chart.scale.visible':false,'chart.scale.decimals':0,'chart.units.pre':'','chart.units.post':''}
if(this.value>this.max)this.value=this.max;if(this.value<this.min)this.value=this.min;if(!this.canvas.__rgraph_aa_translated__){this.context.translate(0.5,0.5);this.canvas.__rgraph_aa_translated__=true;}
var RG=RGraph,ca=this.canvas,co=ca.getContext('2d'),prop=this.properties,pa=RG.Path,pa2=RG.path2,win=window,doc=document,ma=Math
if(RG.Effects&&typeof RG.Effects.decorate==='function'){RG.Effects.decorate(this);}
this.set=this.Set=function(name)
{var value=typeof arguments[1]==='undefined'?null:arguments[1];if(arguments.length===1&&typeof name==='object'){RG.parseObjectStyleConfig(this,name);return this;}
if(name.substr(0,6)!='chart.'){name='chart.'+name;}
name=name.replace(/([A-Z])/g,function(str)
{return'.'+String(RegExp.$1).toLowerCase();});prop[name]=value;return this;};this.get=this.Get=function(name)
{if(name.substr(0,6)!='chart.'){name='chart.'+name;}
name=name.replace(/([A-Z])/g,function(str)
{return'.'+String(RegExp.$1).toLowerCase()});return prop[name.toLowerCase()];};this.draw=this.Draw=function()
{RG.FireCustomEvent(this,'onbeforedraw');this.currentValue=this.value;this.gutterLeft=prop['chart.gutter.left'];this.gutterRight=prop['chart.gutter.right'];this.gutterTop=prop['chart.gutter.top'];this.gutterBottom=prop['chart.gutter.bottom'];this.centerx=((ca.width-this.gutterLeft-this.gutterRight)/2)+this.gutterLeft;this.centery=ca.height-20-this.gutterBottom
this.radius=ca.height-this.gutterTop-this.gutterBottom-20;this.coordsText=[];if(typeof(prop['chart.centerx'])=='number')this.centerx=prop['chart.centerx'];if(typeof(prop['chart.centery'])=='number')this.centery=prop['chart.centery'];if(typeof(prop['chart.radius'])=='number')this.radius=prop['chart.radius'];if(!this.colorsParsed){this.parseColors();this.colorsParsed=true;}
this.angles.start=(RG.PI+RG.HALFPI)-0.5;this.angles.end=(RG.PI+RG.HALFPI)+0.5;this.angles.needle=this.getAngle(this.value);this.DrawLabels();this.DrawChart();if(prop['chart.contextmenu']){RG.ShowContext(this);}
if(prop['chart.resizable']){RG.AllowResizing(this);}
RG.InstallEventListeners(this);if(this.firstDraw){RG.fireCustomEvent(this,'onfirstdraw');this.firstDraw=false;this.firstDrawFunc();}
RG.FireCustomEvent(this,'ondraw');return this;};this.exec=function(func)
{func(this);return this;};this.drawChart=this.DrawChart=function()
{this.DrawScale();if(!RG.ISOLD){this.DrawIcon();}
this.DrawNeedle();};this.drawLabels=this.DrawLabels=function()
{if(!prop['chart.scale.visible']){var radius=(this.radius-20);co.fillStyle=prop['chart.text.color'];var y=this.centery-Math.sin(this.angles.start-RG.PI)*(this.radius-25);var x=this.centerx-Math.cos(this.angles.start-RG.PI)*(this.radius-25);RG.Text2(this,{'font':prop['chart.text.font'],'size':prop['chart.text.size'],'x':x,'y':y,'text':prop['chart.labels.empty'],'halign':'center','valign':'center','tag':'labels'});var y=this.centery-Math.sin(this.angles.start-RG.PI)*(this.radius-25);var x=this.centerx+Math.cos(this.angles.start-RG.PI)*(this.radius-25);RG.Text2(this,{'font':prop['chart.text.font'],'size':prop['chart.text.size'],'x':x,'y':y,'text':prop['chart.labels.full'],'halign':'center','valign':'center','tag':'labels'});}};this.drawNeedle=this.DrawNeedle=function()
{co.beginPath();co.lineWidth=5;co.lineCap='round';co.strokeStyle=prop['chart.needle.color'];var angle=this.angles.needle;co.arc(this.centerx,this.centery,this.radius-30,angle,angle+0.0001,false);co.lineTo(this.centerx,this.centery);co.stroke();co.lineWidth=1;var cx=this.centerx+10;var cy=this.centery-10
var grad=co.createRadialGradient(cx,cy,35,cx,cy,0);grad.addColorStop(0,'black');grad.addColorStop(1,'#eee');if(navigator.userAgent.indexOf('Firefox/6.0')>0){grad=co.createLinearGradient(cx+10,cy-10,cx-10,cy+10);grad.addColorStop(1,'#666');grad.addColorStop(0.5,'#ccc');}
co.beginPath();co.fillStyle=grad;co.moveTo(this.centerx,this.centery);co.arc(this.centerx,this.centery,20,0,RG.TWOPI,0);co.fill();};this.drawScale=this.DrawScale=function()
{var a,x,y;co.beginPath();co.strokeStyle='black';co.fillStyle='white';co.arc(this.centerx,this.centery,this.radius,this.angles.start,this.angles.end,false);co.arc(this.centerx,this.centery,this.radius-10,this.angles.end,this.angles.start,true);co.closePath();co.stroke();co.fill();var start=this.angles.start;var end=this.angles.needle;co.beginPath();co.fillStyle=prop['chart.colors'][0];co.arc(this.centerx,this.centery,this.radius,start,end,false);co.arc(this.centerx,this.centery,this.radius-10,end,start,true);co.closePath();co.fill();for(a=this.angles.start;a<=this.angles.end+0.01;a+=((this.angles.end-this.angles.start)/5)){co.beginPath();co.arc(this.centerx,this.centery,this.radius-10,a,a+0.0001,false);co.arc(this.centerx,this.centery,this.radius-15,a+0.0001,a,true);co.stroke();}
if(prop['chart.scale.visible']){co.fillStyle=prop['chart.text.color'];var numLabels=prop['chart.labels.count'];var decimals=prop['chart.scale.decimals'];var font=prop['chart.text.font'];var size=prop['chart.text.size'];var units_post=prop['chart.units.post'];var units_pre=prop['chart.units.pre'];for(var i=0;i<=numLabels;++i){a=((this.angles.end-this.angles.start)*(i/numLabels))+this.angles.start;y=this.centery-Math.sin(a-RG.PI)*(this.radius-25);x=this.centerx-Math.cos(a-RG.PI)*(this.radius-25);RG.Text2(this,{'font':font,'size':size,'x':x,'y':y,'text':RG.number_format(this,(this.min+((this.max-this.min)*(i/numLabels))).toFixed(decimals),units_pre,units_post),'halign':'center','valign':'center','tag':'scale'});}}};this.getShape=function(e){};this.getValue=function(e)
{var mouseXY=RG.getMouseXY(e);var angle=RG.getAngleByXY(this.centerx,this.centery,mouseXY[0],mouseXY[1]);if(angle>=this.angles.end){return this.max;}else if(angle<=this.angles.start){return this.min;}
var value=(angle-this.angles.start)/(this.angles.end-this.angles.start);value=value*(this.max-this.min);value=value+this.min;return value;};this.getObjectByXY=function(e)
{var mouseXY=RG.getMouseXY(e);var angle=RG.getAngleByXY(this.centerx,this.centery,mouseXY[0],mouseXY[1]);var accuracy=15;var leftMin=this.centerx-this.radius;var rightMax=this.centerx+this.radius;var topMin=this.centery-this.radius;var bottomMax=this.centery+this.radius;if(mouseXY[0]>leftMin&&mouseXY[0]<rightMax&&mouseXY[1]>topMin&&mouseXY[1]<bottomMax){return this;}};this.drawIcon=this.DrawIcon=function()
{if(!RG.ISOLD){if(!this.__icon__||!this.__icon__.__loaded__){var img=new Image();img.src=prop['chart.icon'];img.__object__=this;this.__icon__=img;img.onload=function(e)
{img.__loaded__=true;var obj=img.__object__;co.drawImage(img,obj.centerx-(img.width/2),obj.centery-obj.radius+35);obj.DrawNeedle();if(prop['chart.icon.redraw']){obj.Set('chart.icon.redraw',false);RG.Clear(obj.canvas);RG.RedrawCanvas(ca);}}}else{var img=this.__icon__;co.drawImage(img,this.centerx-(img.width/2),this.centery-this.radius+35);}}
this.DrawNeedle();};this.adjusting_mousemove=this.Adjusting_mousemove=function(e)
{if(prop['chart.adjustable']&&RG.Registry.Get('chart.adjusting')&&RG.Registry.Get('chart.adjusting').uid==this.uid){this.value=this.getValue(e);RG.redrawCanvas(ca);RG.fireCustomEvent(this,'onadjust');}};this.getAngle=function(value)
{if(value<this.min||value>this.max){return null;}
var angle=(((value-this.min)/(this.max-this.min))*(this.angles.end-this.angles.start))+this.angles.start;return angle;};this.parseColors=function()
{if(this.original_colors.length===0){this.original_colors['chart.colors']=RG.array_clone(prop['chart.colors']);this.original_colors['chart.needle.color']=RG.array_clone(prop['chart.needle.color']);}
var props=this.properties;var colors=props['chart.colors'];for(var i=0;i<colors.length;++i){colors[i]=this.parseSingleColorForLinearGradient(colors[i]);}
props['chart.needle.color']=this.parseSingleColorForRadialGradient(props['chart.needle.color']);};this.reset=function()
{};this.parseSingleColorForLinearGradient=function(color)
{if(!color||typeof(color)!='string'){return color;}
if(color.match(/^gradient\((.*)\)$/i)){var parts=RegExp.$1.split(':');var grad=co.createLinearGradient(prop['chart.gutter.left'],0,ca.width-prop['chart.gutter.right'],0);var diff=1/(parts.length-1);grad.addColorStop(0,RG.trim(parts[0]));for(var j=1;j<parts.length;++j){grad.addColorStop(j*diff,RG.trim(parts[j]));}}
return grad?grad:color;};this.parseSingleColorForRadialGradient=function(color)
{if(!color||typeof color!='string'){return color;}
if(color.match(/^gradient\((.*)\)$/i)){var parts=RegExp.$1.split(':');var grad=co.createRadialGradient(this.centerx,this.centery,0,this.centerx,this.centery,this.radius);var diff=1/(parts.length-1);grad.addColorStop(0,RG.trim(parts[0]));for(var j=1;j<parts.length;++j){grad.addColorStop(j*diff,RG.trim(parts[j]));}}
return grad?grad:color;};this.on=function(type,func)
{if(type.substr(0,2)!=='on'){type='on'+type;}
this[type]=func;return this;};this.firstDrawFunc=function()
{};this.grow=function()
{var callback=arguments[1]||function(){};var opt=arguments[0]||{};var numFrames=opt.frames||30;var frame=0;var obj=this;var origValue=Number(this.currentValue);if(this.currentValue==null){this.currentValue=this.min;origValue=this.min;}
var newValue=this.value;var diff=newValue-origValue;var step=(diff/numFrames);var frame=0;function iterator()
{frame++;obj.value=((frame/numFrames)*diff)+origValue
if(obj.value>obj.max)obj.value=obj.max;if(obj.value<obj.min)obj.value=obj.min;RGraph.clear(obj.canvas);RGraph.redrawCanvas(obj.canvas);if(frame<numFrames){RGraph.Effects.updateCanvas(iterator);}else{callback(obj);}}
iterator();return this;};RG.att(ca);RG.Register(this);if(parseConfObjectForOptions){RG.parseObjectStyleConfig(this,conf.options);}};
