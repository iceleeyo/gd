(function(a){if(a.Config.debug)return!1;var b=a.map("auth,filedrop,imageZoom,preview,proBars,tagConfig,urlsInput,ajbridge".split(","),function(a){return"gallery/uploader/1.4/plugins/"+a+"/"+a});a.each(["gallery/flash/1.0/index","gallery/uploader/1.4/plugins/proBars/progressBar","gallery/uploader/1.4/plugins/ajbridge/uploader","gallery/uploader/1.4/theme"],function(a){b.push(a)});a.config({modules:{"gallery/uploader/1.4/index":{requires:b}}})})(KISSY);
