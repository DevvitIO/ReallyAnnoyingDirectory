// Dropdown slide out
var styleSelect = document.getElementsByClassName("style-select")[0];
var styleList = document.getElementsByClassName("style-list-wrap")[0];

styleSelect.onclick = function() {
	styleList.classList.toggle("slide-down");
}

styleList.onclick = function(e){
	appendStyleSheet(e.target.innerHTML)
	styleList.classList.toggle("slide-down");
	styleSelect.innerHTML = e.target.innerHTML + '<span class="select-icon"><i class="fa fa-caret-down" aria-hidden="true"></i></span>'
}

/* STYLESHEET CHANGER */
// 'random' number generator, based on size of array
var chosenSheet = Math.floor(Math.random() * (styleSheets.length + 0 ));

appendStyleSheet(styleSheets[chosenSheet])

function appendStyleSheet(target){
	// if you add a stylesheet, please edit this accordingly. 
	if(document.styleSheets[2]){
		var d = document.getElementsByTagName("head");
		document.head.childNodes[12].href = "./styles/"+target+'.css'
		console.log(d)
		document.styleSheets[2].disabled = true;
	}else{
		var link = document.createElement( "link" );
		link.href = './styles/' + target + '.css'
		link.type = "text/css";
		link.rel = "stylesheet";
		link.id = "cssHead"
		document.getElementsByTagName( "head" )[0].appendChild( link );
	}
}

// populates the css list automagically
for(var i = 0; i < styleSheets.length; i++){
	var opt = document.createElement( "li" );
	opt.className = "style-list-item";
	opt.appendChild(document.createTextNode(styleSheets[i]));
	document.getElementsByClassName( "style-list" )[0].appendChild( opt );
}
/* END STYLESHEET CHANGER */
