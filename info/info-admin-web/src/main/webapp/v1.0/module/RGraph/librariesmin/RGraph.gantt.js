
RGraph=window.RGraph||{isRGraph:true};RGraph.Gantt=function(conf)
{if(typeof conf==='object'&&typeof conf.data==='object'&&typeof conf.id==='string'){var id=conf.id
var canvas=document.getElementById(id);var data=conf.data;var parseConfObjectForOptions=true;}else{var id=conf;var canvas=document.getElementById(id);var data=arguments[1];}
this.id=id;this.canvas=canvas;this.context=this.canvas.getContext?this.canvas.getContext("2d",{alpha:(typeof id==='object'&&id.alpha===false)?false:true}):null;this.canvas.__object__=this;this.type='gantt';this.isRGraph=true;this.uid=RGraph.CreateUID();this.canvas.uid=this.canvas.uid?this.canvas.uid:RGraph.CreateUID();this.data=data;this.colorsParsed=false;this.coordsText=[];this.original_colors=[];this.firstDraw=true;this.properties={'chart.background.barcolor1':'rgba(0,0,0,0)','chart.background.barcolor2':'rgba(0,0,0,0)','chart.background.grid':true,'chart.background.grid.width':1,'chart.background.grid.color':'#ddd','chart.background.grid.hsize':20,'chart.background.grid.vsize':20,'chart.background.grid.hlines':true,'chart.background.grid.vlines':true,'chart.background.grid.border':true,'chart.background.grid.autofit':true,'chart.background.grid.autofit.align':true,'chart.background.grid.autofit.numhlines':7,'chart.background.grid.autofit.numvlines':null,'chart.vbars':[],'chart.hbars':[],'chart.text.size':12,'chart.text.font':'Arial','chart.text.color':'black','chart.gutter.left':75,'chart.gutter.right':25,'chart.gutter.top':35,'chart.gutter.bottom':25,'chart.labels':[],'chart.labels.color':null,'chart.labels.align':'bottom','chart.labels.inbar':null,'chart.labels.inbar.color':'black','chart.labels.inbar.bgcolor':null,'chart.labels.inbar.align':'left','chart.labels.inbar.size':10,'chart.labels.inbar.font':'Arial','chart.labels.inbar.above':false,'chart.labels.percent':true,'chart.vmargin':2,'chart.title':'','chart.title.background':null,'chart.title.x':null,'chart.title.y':null,'chart.title.bold':true,'chart.title.font':null,'chart.title.yaxis':'','chart.title.yaxis.bold':true,'chart.title.yaxis.pos':null,'chart.title.yaxis.color':null,'chart.title.yaxis.position':'right','chart.title.yaxis.x':null,'chart.title.yaxis.y':null,'chart.title.xaxis.x':null,'chart.title.xaxis.y':null,'chart.title.xaxis.bold':true,'chart.title.x':null,'chart.title.y':null,'chart.title.halign':null,'chart.title.valign':null,'chart.borders':true,'chart.defaultcolor':'white','chart.coords':[],'chart.tooltips':null,'chart.tooltips.effect':'fade','chart.tooltips.css.class':'RGraph_tooltip','chart.tooltips.highlight':true,'chart.tooltips.event':'onclick','chart.highlight.stroke':'rgba(0,0,0,0)','chart.highlight.fill':'rgba(255,255,255,0.7)','chart.xmin':0,'chart.xmax':0,'chart.contextmenu':null,'chart.annotatable':false,'chart.annotate.color':'black','chart.zoom.factor':1.5,'chart.zoom.fade.in':true,'chart.zoom.fade.out':true,'chart.zoom.hdir':'right','chart.zoom.vdir':'down','chart.zoom.frames':25,'chart.zoom.delay':16.666,'chart.zoom.shadow':true,'chart.zoom.background':true,'chart.zoom.action':'zoom','chart.resizable':false,'chart.resize.handle.adjust':[0,0],'chart.resize.handle.background':null,'chart.adjustable':false,'chart.events.click':null,'chart.events.mousemove':null}
if(!data){alert('[GANTT] The Gantt chart event data is now supplied as the second argument to the constructor - please update your code');}
for(var i=0,idx=0;i<data.length;++i){if(RGraph.is_array(this.data[i][0])){for(var j=0;j<this.data[i].length;++j){this['$'+(idx++)]={};}}else{this['$'+(idx++)]={};}}
if(!this.canvas.__rgraph_aa_translated__){this.context.translate(0.5,0.5);this.canvas.__rgraph_aa_translated__=true;}
var RG=RGraph,ca=this.canvas,co=ca.getContext('2d'),prop=this.properties,pa=RG.Path,pa2=RG.path2,win=window,doc=document,ma=Math
if(RG.Effects&&typeof RG.Effects.decorate==='function'){RG.Effects.decorate(this);}
this.set=this.Set=function(name)
{var value=typeof arguments[1]==='undefined'?null:arguments[1];if(arguments.length===1&&typeof name==='object'){RG.parseObjectStyleConfig(this,name);return this;}
if(name.substr(0,6)!='chart.'){name='chart.'+name;}
name=name.replace(/([A-Z])/g,function(str)
{return'.'+String(RegExp.$1).toLowerCase();});if(name=='chart.margin'){name='chart.vmargin'}
if(name=='chart.events'){alert('[GANTT] The chart.events property is deprecated - supply the events data as an argument to the constructor instead');this.data=value;}
prop[name]=value;return this;};this.get=this.Get=function(name)
{if(name.substr(0,6)!='chart.'){name='chart.'+name;}
name=name.replace(/([A-Z])/g,function(str)
{return'.'+String(RegExp.$1).toLowerCase()});if(name=='chart.margin'){name='chart.vmargin'}
return prop[name.toLowerCase()];};this.draw=this.Draw=function()
{RG.FireCustomEvent(this,'onbeforedraw');this.gutterLeft=prop['chart.gutter.left'];this.gutterRight=prop['chart.gutter.right'];this.gutterTop=prop['chart.gutter.top'];this.gutterBottom=prop['chart.gutter.bottom'];this.coordsText=[];if(!this.colorsParsed){this.parseColors();this.colorsParsed=true;}
this.graphArea=ca.width-this.gutterLeft-this.gutterRight;this.graphHeight=ca.height-this.gutterTop-this.gutterBottom;this.numEvents=this.data.length
this.barHeight=this.graphHeight/this.numEvents;this.halfBarHeight=this.barHeight/2;RG.background.Draw(this);this.drawLabels();this.DrawEvents();if(prop['chart.contextmenu']){RG.ShowContext(this);}
if(prop['chart.resizable']){RG.AllowResizing(this);}
RG.InstallEventListeners(this);if(this.firstDraw){RG.fireCustomEvent(this,'onfirstdraw');this.firstDraw=false;this.firstDrawFunc();}
RG.FireCustomEvent(this,'ondraw');return this;};this.exec=function(func)
{func(this);return this;};this.drawLabels=this.DrawLabels=function()
{var labels=prop['chart.labels'];var labelsColor=prop['chart.labels.color']||prop['chart.text.color'];var labelSpace=(this.graphArea)/labels.length;var x=this.gutterLeft+(labelSpace/2);var y=this.gutterTop-(prop['chart.text.size']/2)-5;var font=prop['chart.text.font'];var size=prop['chart.text.size'];co.beginPath();co.fillStyle=prop['chart.text.color'];co.strokeStyle='black'
if(prop['chart.labels.align']=='bottom'){y=ca.height-this.gutterBottom+size+2;}
for(i=0;i<labels.length;++i){RG.Text2(this,{'font':font,'size':size,'x':x+(i*labelSpace),'y':y,'text':String(labels[i]),'halign':'center','valign':'center','tag':'labels.horizontal'});}
for(var i=0,len=this.data.length;i<len;++i){var ev=this.data[i];var x=this.gutterLeft;var y=this.gutterTop+this.halfBarHeight+(i*this.barHeight);co.fillStyle=labelsColor||prop['chart.text.color'];RG.Text2(this,{'font':font,'size':size,'x':x-5,'y':y,'text':RG.is_array(ev[0])?(ev[0][3]?String(ev[0][3]):''):(typeof ev[3]=='string'?ev[3]:''),'halign':'right','valign':'center','tag':'labels.vertical'});}};this.drawEvents=this.DrawEvents=function()
{var events=this.data;this.coords=[];if(prop['chart.vbars']){for(i=0,len=prop['chart.vbars'].length;i<len;++i){if(prop['chart.vbars'][i][0]+prop['chart.vbars'][i][1]>prop['chart.xmax']){prop['chart.vbars'][i][1]=364-prop['chart.vbars'][i][0];}
var barX=this.gutterLeft+(((prop['chart.vbars'][i][0]-prop['chart.xmin'])/(prop['chart.xmax']-prop['chart.xmin']))*this.graphArea);var barY=this.gutterTop;var width=(this.graphArea/(prop['chart.xmax']-prop['chart.xmin']))*prop['chart.vbars'][i][1];var height=ca.height-this.gutterTop-this.gutterBottom;if((barX+width)>(ca.width-this.gutterRight)){width=ca.width-this.gutterRight-barX;}
co.fillStyle=prop['chart.vbars'][i][2];co.fillRect(barX,barY,width,height);}}
if(prop['chart.hbars']){for(i=0,len=prop['chart.hbars'].length;i<len;++i){if(prop['chart.hbars'][i]){var barX=this.gutterLeft,barY=((ca.height-this.gutterTop-this.gutterBottom)/this.data.length)*i+this.gutterTop,width=this.graphArea,height=this.barHeight
co.fillStyle=prop['chart.hbars'][i];co.fillRect(barX,barY,width,height);}}}
var sequentialIndex=0;for(i=0;i<events.length;++i){if(typeof(events[i][0])=='number'){this.DrawSingleEvent(events[i],i,sequentialIndex++);}else{for(var j=0;j<events[i].length;++j){this.DrawSingleEvent(events[i][j],i,sequentialIndex++);}}}};this.getShape=this.getBar=function(e)
{e=RG.FixEventObject(e);var mouseCoords=RGraph.getMouseXY(e);var mouseX=mouseCoords[0];var mouseY=mouseCoords[1];for(var i=0,len=this.coords.length;i<len;i++){var left=this.coords[i][0];var top=this.coords[i][1];var width=this.coords[i][2];var height=this.coords[i][3];if(mouseX>=left&&mouseX<=(left+width)&&mouseY>=top&&mouseY<=(top+height)){var tooltip=RGraph.parseTooltipText(prop['chart.tooltips'],i);return{0:this,'object':this,1:left,'x':left,2:top,'y':top,3:width,'width':width,4:height,'height':height,5:i,'index':i,'tooltip':tooltip};}}};this.drawSingleEvent=this.DrawSingleEvent=function(ev,index,sequentialIndex)
{var min=prop['chart.xmin'];co.beginPath();co.strokeStyle='black';co.fillStyle=ev[4]?ev[4]:prop['chart.defaultcolor'];var barStartX=this.gutterLeft+(((ev[0]-min)/(prop['chart.xmax']-min))*this.graphArea);var barStartY=this.gutterTop+(index*this.barHeight);var barWidth=(ev[1]/(prop['chart.xmax']-min))*this.graphArea;if((barStartX+barWidth)>(ca.width-this.gutterRight)){barWidth=ca.width-this.gutterRight-barStartX;}
this.coords.push([barStartX,barStartY+prop['chart.vmargin'],barWidth,this.barHeight-(2*prop['chart.vmargin'])]);if(prop['chart.borders']||ev[6]){co.strokeStyle=typeof(ev[6])=='string'?ev[6]:'black';co.lineWidth=(typeof(ev[7])=='number'?ev[7]:1);co.beginPath();co.strokeRect(barStartX,barStartY+prop['chart.vmargin'],barWidth,this.barHeight-(2*prop['chart.vmargin']));}
co.beginPath();co.fillRect(barStartX,barStartY+prop['chart.vmargin'],barWidth,this.barHeight-(2*prop['chart.vmargin']));co.fill();var complete=(ev[2]/100)*barWidth;if(typeof(ev[2])=='number'){co.beginPath();co.fillStyle=ev[5]?ev[5]:'#0c0';co.fillRect(barStartX,barStartY+prop['chart.vmargin'],(ev[2]/100)*barWidth,this.barHeight-(2*prop['chart.vmargin']));if(prop['chart.labels.percent']){co.beginPath();co.fillStyle=prop['chart.text.color'];RG.Text2(this,{'font':prop['chart.text.font'],'size':prop['chart.text.size'],'x':barStartX+barWidth+5,'y':barStartY+this.halfBarHeight,'text':String(ev[2])+'%','valign':'center','tag':'labels.complete'});}}
if(prop['chart.labels.inbar']&&prop['chart.labels.inbar'][sequentialIndex]){var label=String(prop['chart.labels.inbar'][sequentialIndex]);var halign=prop['chart.labels.inbar.align']=='left'?'left':'center';halign=prop['chart.labels.inbar.align']=='right'?'right':halign;if(halign=='right'){var x=(barStartX+barWidth)-5;}else if(halign=='center'){var x=barStartX+(barWidth/2);}else{var x=barStartX+5;}
if(prop['chart.labels.inbar.above']){x=barStartX+barWidth+5;halign='left';}
co.fillStyle=prop['chart.labels.inbar.color'];RGraph.Text2(this,{'font':prop['chart.labels.inbar.font'],'size':prop['chart.labels.inbar.size'],'x':x,'y':barStartY+this.halfBarHeight,'text':label,'valign':'center','halign':halign,'bounding':typeof(prop['chart.labels.inbar.bgcolor'])=='string','boundingFill':typeof(prop['chart.labels.inbar.bgcolor'])=='string'?prop['chart.labels.inbar.bgcolor']:null,'tag':'labels.inbar'});}};this.highlight=this.Highlight=function(shape)
{RG.Highlight.Rect(this,shape);};this.getObjectByXY=function(e)
{var mouseXY=RG.getMouseXY(e);if(mouseXY[0]>this.gutterLeft&&mouseXY[0]<(ca.width-this.gutterRight)&&mouseXY[1]>this.gutterTop&&mouseXY[1]<(ca.height-this.gutterBottom)){return this;}};this.adjusting_mousemove=this.Adjusting_mousemove=function(e)
{if(prop['chart.adjustable']&&RG.Registry.Get('chart.adjusting')&&RG.Registry.Get('chart.adjusting').uid==this.uid){var bar=RG.Registry.Get('chart.adjusting.gantt');if(bar){var mouseXY=RG.getMouseXY(e);var obj=RG.Registry.Get('chart.adjusting.gantt')['object'];var index=bar['index'];var diff=((mouseXY[0]-RG.Registry.Get('chart.adjusting.gantt')['mousex'])/(ca.width-obj.gutterLeft-obj.gutterRight))*prop['chart.xmax'];var eventStart=RG.Registry.Get('chart.adjusting.gantt')['event_start'];var duration=RG.Registry.Get('chart.adjusting.gantt')['event_duration'];if(bar['mode']=='move'){diff=Math.round(diff);if(eventStart+diff>=0&&(eventStart+diff+obj.data[index][1])<prop['chart.xmax']){obj.data[index][0]=eventStart+diff;}else if(eventStart+diff<0){obj.data[index][0]=0;}else if((eventStart+diff+obj.data[index][1])>prop['chart.xmax']){obj.data[index][0]=prop['chart.xmax']-obj.data[index][1];}}else if(bar['mode']=='resize'){if(mouseXY[0]>(ca.width-obj.gutterRight)){mouseXY[0]=ca.width-obj.gutterRight;}
var diff=((mouseXY[0]-RG.Registry.Get('chart.adjusting.gantt')['mousex'])/(ca.width-obj.gutterLeft-obj.gutterRight))*prop['chart.xmax'];diff=Math.round(diff);obj.data[index][1]=duration+diff;if(obj.data[index][1]<0){obj.data[index][1]=1;}}
RG.resetColorsToOriginalValues(this);RG.redrawCanvas(ca);RG.fireCustomEvent(obj,'onadjust');}}};this.positionTooltip=function(obj,x,y,tooltip,idx)
{var coordX=obj.coords[tooltip.__index__][0];var coordY=obj.coords[tooltip.__index__][1];var coordW=obj.coords[tooltip.__index__][2];var coordH=obj.coords[tooltip.__index__][3];var canvasXY=RG.getCanvasXY(obj.canvas);var gutterLeft=obj.gutterLeft;var gutterTop=obj.gutterTop;var width=tooltip.offsetWidth;var height=tooltip.offsetHeight;tooltip.style.left=0;tooltip.style.top=canvasXY[1]+coordY-height-7+'px';tooltip.style.overflow='';var img=new Image();img.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAFCAYAAACjKgd3AAAARUlEQVQYV2NkQAN79+797+RkhC4M5+/bd47B2dmZEVkBCgcmgcsgbAaA9GA1BCSBbhAuA/AagmwQPgMIGgIzCD0M0AMMAEFVIAa6UQgcAAAAAElFTkSuQmCC';img.style.position='absolute';img.id='__rgraph_tooltip_pointer__';img.style.top=(tooltip.offsetHeight-2)+'px';tooltip.appendChild(img);if((canvasXY[0]+coordX-(width/2))<10){tooltip.style.left=(canvasXY[0]+coordX-(width*0.1))+(coordW/2)+'px';img.style.left=((width*0.1)-8.5)+'px';}else if((canvasXY[0]+coordX+(width/2))>document.body.offsetWidth){tooltip.style.left=canvasXY[0]+coordX-(width*0.9)+(coordW/2)+'px';img.style.left=((width*0.9)-8.5)+'px';}else{tooltip.style.left=(canvasXY[0]+coordX+(coordW/2)-(width*0.5))+'px';img.style.left=((width*0.5)-8.5)+'px';}};this.getXCoord=function(value)
{var min=prop['chart.xmin'];var max=prop['chart.xmax'];var graphArea=ca.width-this.gutterLeft-this.gutterRight;if(value>max||value<min){return null;}
var x=(((value-min)/(max-min))*graphArea)+this.gutterLeft;return x;};this.getValue=function(arg)
{if(arg.length==2){var mouseXY=arg;}else{var mouseXY=RGraph.getMouseXY(arg);}
var mouseX=mouseXY[0];var mouseY=mouseXY[1];var value=(mouseX-this.gutterLeft)/(ca.width-this.gutterLeft-this.gutterRight);value*=(prop['chart.xmax']-prop['chart.xmin']);if(value<prop['chart.xmin']||value>prop['chart.xmax']){value=null;}
return value;};this.parseColors=function()
{if(this.original_colors.length===0){this.original_colors['data']=RG.arrayClone(this.data);this.original_colors['chart.background.barcolor1']=RG.array_clone(prop['chart.background.barcolor1']);this.original_colors['chart.background.barcolor2']=RG.array_clone(prop['chart.background.barcolor2']);this.original_colors['chart.background.grid.color']=RG.array_clone(prop['chart.background.grid.color']);this.original_colors['chart.defaultcolor']=RG.array_clone(prop['chart.defaultcolor']);this.original_colors['chart.highlight.stroke']=RG.array_clone(prop['chart.highlight.stroke']);this.original_colors['chart.highlight.fill']=RG.array_clone(prop['chart.highlight.fill']);}
for(var i=0,sequentialIndex=0;i<this.data.length;++i){if(typeof this.data[i][0]=='object'&&typeof this.data[i][0][0]==='number'){for(var j=0,len=this.data[i].length;j<len;j+=1,sequentialIndex+=1){this.data[i][j][4]=this.parseSingleColorForGradient(this.data[i][j][4],{start:this.data[i][j][0],duration:this.data[i][j][1]});this.data[i][j][5]=this.parseSingleColorForGradient(this.data[i][j][5],{start:this.data[i][j][0],duration:this.data[i][j][1]});}}else{if(typeof this.data[i][4]=='string')this.data[i][4]=this.parseSingleColorForGradient(this.data[i][4],{start:this.data[i][0],duration:this.data[i][1]});if(typeof this.data[i][5]=='string')this.data[i][5]=this.parseSingleColorForGradient(this.data[i][5],{start:this.data[i][0],duration:this.data[i][1]});++sequentialIndex;}}
prop['chart.background.barcolor1']=this.parseSingleColorForGradient(prop['chart.background.barcolor1']);prop['chart.background.barcolor2']=this.parseSingleColorForGradient(prop['chart.background.barcolor2']);prop['chart.background.grid.color']=this.parseSingleColorForGradient(prop['chart.background.grid.color']);prop['chart.background.color']=this.parseSingleColorForGradient(prop['chart.background.color']);prop['chart.defaultcolor']=this.parseSingleColorForGradient(prop['chart.defaultcolor']);prop['chart.highlight.stroke']=this.parseSingleColorForGradient(prop['chart.highlight.stroke']);prop['chart.highlight.fill']=this.parseSingleColorForGradient(prop['chart.highlight.fill']);};this.reset=function()
{};this.parseSingleColorForGradient=function(color)
{var opts=arguments[1]||{};if(!color||typeof(color)!='string'){return color;}
if(color.match(/^gradient\((.*)\)$/i)){var parts=RegExp.$1.split(':');var value=(opts.start+opts.duration)>prop['chart.xmax']?prop['chart.xmax']:(opts.start+opts.duration);var grad=co.createLinearGradient(typeof opts.start==='number'?this.getXCoord(opts.start):this.gutterLeft,0,typeof opts.start==='number'?this.getXCoord(value):ca.width-this.gutterRight,0);var diff=1/(parts.length-1);grad.addColorStop(0,RG.trim(parts[0]));for(var j=1;j<parts.length;++j){grad.addColorStop(j*diff,RG.trim(parts[j]));}}
return grad?grad:color;};this.on=function(type,func)
{if(type.substr(0,2)!=='on'){type='on'+type;}
this[type]=func;return this;};this.firstDrawFunc=function()
{};this.grow=function()
{var obj=this;var opt=arguments[0]||{};var callback=arguments[1]?arguments[1]:function(){};var canvas=obj.canvas;var context=obj.context;var numFrames=opt.frames||30;var frame=0;var original_events=RG.arrayClone(obj.data);function iterator()
{RG.clear(obj.canvas);RG.redrawCanvas(obj.canvas);if(frame<=numFrames){for(var i=0,len=obj.data.length;i<len;++i){if(typeof obj.data[i][0]==='object'){for(var j=0;j<obj.data[i].length;++j){obj.data[i][j][1]=(frame/numFrames)*original_events[i][j][1];}}else{obj.data[i][1]=(frame/numFrames)*original_events[i][1];}}
obj.reset();frame++;RGraph.Effects.updateCanvas(iterator);}else{callback(obj);}}
iterator();return this;};this.resetColorsToOriginalValues=function()
{for(var i=0;i<this.original_colors['data'].length;++i){if(this.original_colors['data'][i][4]){this.data[i][4]=RG.arrayClone(this.original_colors['data'][i][4]);}
if(this.original_colors['data'][i][5]){this.data[i][5]=RG.arrayClone(this.original_colors['data'][i][5]);}
if(typeof this.original_colors['data'][i][0]==='object'&&typeof this.original_colors['data'][i][0][0]==='number'){for(var j=0,len2=this.original_colors['data'][i].length;j<len2;++j){this.data[i][j][4]=RG.arrayClone(this.original_colors['data'][i][j][4]);this.data[i][j][5]=RG.arrayClone(this.original_colors['data'][i][j][5]);}}}};this.reset=function()
{this.resetColorsToOriginalValues();this.colorsParsed=false;this.coordsText=[];this.original_colors=[];this.firstDraw=true;this.coords=[];};RG.att(ca);RG.Register(this);if(parseConfObjectForOptions){RG.parseObjectStyleConfig(this,conf.options);}};