var OSName="Unknown OS";
if (navigator.userAgent.indexOf("Mozilla/5.0 (Mobile; rv")!=-1) OSName="Firefox OS";
if (navigator.userAgent.indexOf("Mozilla/5.0 (Mobile; rv:48.0")!=-1) OSName="KaiOS";
if (navigator.userAgent.indexOf("KAIOS")!=-1) OSName="KaiOS";

// start of "window.onload"
window.onload = function(){

document.querySelector("#splashloader").innerHTML = ``;

var envlogtxt = "Environment detected: "
if(OSName == 'Firefox OS'){
        console.log(envlogtxt +OSName +"🦊");
        var element = document.getElementById('environment');
        if (typeof(element) != 'undefined' && element != null){
                var environmenttext = document.getElementById('environment');
                var text = document.createTextNode(OSName);
                environmenttext.appendChild(text);
                var element =  document.getElementById('elementId');
}
}

if(OSName == 'KaiOS'){
        console.log(envlogtxt +OSName +"🈺");
        var element = document.getElementById('environment');
        if (typeof(element) != 'undefined' && element != null){
                var environmenttext = document.getElementById('environment');
                var text = document.createTextNode(OSName);
                environmenttext.appendChild(text);
}
        requirejs(["platform-kaios.js"],function(util){});
        requirejs(["platform-kaios-custom.js"],function(util){});
}

if (OSName !== 'KaiOS'){
        requirejs(["platform-not-kaios.js"],function(util){});
        requirejs(["platform-not-kaios-custom.js"],function(util){});
        if (OSName !== 'Firefox OS'){
                document.querySelector("#splashloader").innerHTML = ``;
                console.log(envlogtxt +"Not Firefox OS and not KaiOS.");
                var element = document.getElementById('environment');        
                if (typeof(element) != 'undefined' && element != null){
                        var environmenttext = document.getElementById('environment');
                        var text = document.createTextNode("Not Firefox OS and not KaiOS.");
                        environmenttext.appendChild(text);
}
                requirejs(["platform-not-kaios-not-firefox.js"],function(util){});
}
}

} // end of "window.onload"
