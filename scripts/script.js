// Dropdown slide out
var styleSelect = document.getElementsByClassName("style-select")[0];
var styleList = document.getElementsByClassName("style-list-wrap")[0];

styleSelect.onclick = function() {
	populatesStyleList();
	styleList.classList.toggle("slide-down");
}

styleList.onclick = function(e){
	saveSheetSelection(e.target.innerHTML);
	appendStyleSheet(e.target.innerHTML);
	styleList.classList.toggle("slide-down");
	styleSelect.innerHTML = e.target.innerHTML + '<span class="select-icon"><i class="fa fa-caret-down" aria-hidden="true"></i></span>'
	hideAwhile();
}

/* STYLESHEET CHANGER */
// 'random' number generator, based on size of array
var chosenSheet = Math.floor(Math.random() * (styleSheets.length + 0 ));

//load previously chosen sheet if any
if(localStorage["chosen-sheet"]){
	chosenSheet = localStorage["chosen-sheet"];
	styleSelect.innerHTML = styleSheets[chosenSheet] + '<span class="select-icon"><i class="fa fa-caret-down" aria-hidden="true"></i></span>'
}

appendStyleSheet(styleSheets[chosenSheet])

function appendStyleSheet(target){
	// if you add a stylesheet, please edit this accordingly. 
	var styleNode = document.getElementById("cssHead");

	if(styleNode){	
		styleNode.href = "./styles/"+target+'.css';
		document.styleSheets[document.styleSheets.length-1].disabled = true;
	}else{		
		var link = document.createElement( "link" );
		link.href = './styles/' + target + '.css';
		link.type = "text/css";
		link.rel = "stylesheet";
		link.id = "cssHead"
		document.getElementsByTagName( "head" )[0].appendChild( link );
	}
}

// populates the css list automatically
function populatesStyleList(){
	var styleList = document.getElementsByClassName("style-list")[0];
	while (styleList.firstChild) {
    	styleList.removeChild(styleList.firstChild);
	}

	for(var i = 0; i < styleSheets.length; i++){
		var opt = document.createElement( "li" );
		opt.className = "style-list-item";
		opt.appendChild(document.createTextNode(styleSheets[i]));	

		if(i == localStorage["chosen-sheet"]) {
			continue;
		}

		document.getElementsByClassName( "style-list" )[0].appendChild( opt );

	}
}

//save chosen sheet in browser
function saveSheetSelection(chosen){
	localStorage["chosen-sheet"] = styleSheets.indexOf(chosen);	
}

function hideAwhile(){		
	var element = document.getElementsByClassName("style-select-wrap")[0];
	element.style.display = "none"; 
	setTimeout( function(){element.style.display = "block"} , 500 );
}

/* END STYLESHEET CHANGER */
