const serverRootURL = "http://127.0.0.1:5500";
const serverRoot = "http://127.0.0.1:3923";
const serverURL = "http://127.0.0.1:3923/";
const password = "pw=Twice_18";
const getdirs = "ls";

const loader = document.querySelector("#loading");
const table_Files = document.getElementById("files-dir");
const contextMenu = document.getElementById("contextMenu");
const lightbox = GLightbox({
	touchNavigation: true,
	preload: false,
	plyr: {
		config: {
			controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'fullscreen'],
		}
	}
});

let currentURL = serverURL;
let have_up2k_idx = false;
let lifetime = 0;
let perms = [];
let items_selected = [];

function displayLoading() {
    loader.classList.add("display");
	loader.parentNode.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
		loader.parentNode.classList.remove("display");
    }, 5000);
}

function hideLoading() {
    loader.classList.remove("display");
	loader.parentNode.classList.remove("display");
}

function entrydblClick(element, mouse_event) {
	mouse_event.preventDefault();
	if (element.children[0].children.length === 2) {
		const entryurl = element.children[0].children[1].innerText;
		if (entryurl === '..') {
			currentURL = currentURL.split('/').slice(0,-2).join('/')+'/';
		} else {
			currentURL += entryurl;
		}
		loadDirs();
	} else {
		const entryurl = element.children[0].children[0].innerText;
		lightbox.openAt(element.children[0].children[0].getAttribute("data-gallery"));
	}
}

function handleKeyPress(e) {
	console.log(e);
	if (items_selected.length === 0 ) 
		return;
	const current_row = parseInt(items_selected[items_selected.length-1].getAttribute('row-id'));
	const max_row = table_Files.children.length - 1;
	let min_row = 0;
	let element = table_Files.children[0];
	if (element.children[0].children.length === 2) {
		const entryurl = element.children[0].children[1].innerText;
		if (entryurl === '..') {
			min_row = 1;
		}
	}
	// console.log(min_row, max_row, current_row);
	let row = null;
	if (e.keyCode == 27) {
		items_selected = [];
		table_Files.childNodes.forEach(el => {
			el.classList.remove('selected');
		});
		items_selected.forEach(el => {
			el.classList.add('selected');
		})
		return;
	}
	if (!e.shiftKey) {
		switch (e.keyCode) {
			case 38:
				row = table_Files.querySelector(`[row-id='${Math.min(Math.max(current_row-1, min_row),max_row)}']`);
				items_selected = [row];
				break;
			case 40:
				row = table_Files.querySelector(`[row-id='${Math.min(Math.max(current_row+1, 0),max_row)}']`);
				items_selected = [row];
				break;
		}
	} else {
		switch (e.keyCode) {
			case 38:
				row = table_Files.querySelector(`[row-id='${Math.min(Math.max(current_row-1, 0),max_row)}']`);
				if (items_selected.includes(row)){
					items_selected.pop();
				} else {
					items_selected.push(row);
				}
				break;
			case 40:
				row = table_Files.querySelector(`[row-id='${Math.min(Math.max(current_row+1, 0),max_row)}']`);
				if (items_selected.includes(row)){
					items_selected.pop();
				} else {
					items_selected.push(row);
				}
				break;
		}
	}
	table_Files.childNodes.forEach(el => {
		el.classList.remove('selected');
	});
	items_selected.forEach(el => {
		el.classList.add('selected');
	})
}

function entryClick(element, mouse_event) {
	mouse_event.preventDefault();
	function remove_all_selected(mouse_event) {
		if (!table_Files.contains(mouse_event.target)){
			items_selected.forEach(el => {
				el.classList.remove('selected');
			})
			items_selected = [];
			document.removeEventListener('click', remove_all_selected);
			document.removeEventListener('keyup', handleKeyPress);
		}
	}
	document.removeEventListener('click', remove_all_selected);
	document.removeEventListener('keyup', handleKeyPress);
	if (!mouse_event.shiftKey) {
		items_selected.forEach(el => {
			el.classList.remove('selected')
		})
		items_selected = [];
	}
	if (mouse_event.shiftKey && items_selected.length >= 1) {
		const top_selector = Math.min(items_selected[0].getAttribute('row-id'), element.getAttribute('row-id'));
		const bottom_selector = Math.max(items_selected[0].getAttribute('row-id'), element.getAttribute('row-id'));
		const first_selected = items_selected[0];
		items_selected.forEach(el => {
			el.classList.remove('selected')
		})
		items_selected = [first_selected];
		first_selected.classList.add('selected');
		table_Files.childNodes.forEach(el => {
			if (top_selector <= el.getAttribute('row-id') && el.getAttribute('row-id') <= bottom_selector) {
				if (items_selected.includes(el))
					return; 
				items_selected.push(el);
				el.classList.add('selected');
			}
		});
	} else {
		items_selected.push(element);
		element.classList.add('selected');
	} 
	document.addEventListener('click', remove_all_selected);
	document.addEventListener('keyup', handleKeyPress);
}

const attachContextMenu = (() => {
    const contextMenu = document.createElement("div");
    
    const hideOnResize = () => hideMenu(true);
	
	let overrideEntry = null;
    
    function hideMenu(e) {
        if(e === true || !contextMenu.contains(e.target)) {
            contextMenu.innerHTML = '';
            document.removeEventListener('click', hideMenu);
            window.removeEventListener('resize', hideOnResize);
        }
    };
    
	function addAction(msg, action, el, svg=null) {
		const menu_item = document.createElement('div');
		menu_item.className = "contextMenu-cell";
		if (svg === null) {
			menu_item.innerHTML = `<span>${msg}</span>`;
		} else {
			menu_item.innerHTML = svg+`<span>${msg}</span>`;
		}
		if (action !== null) 
			menu_item.addEventListener('click', (e) => {
				hideMenu(true);
				action(el ,e);
			});
		return menu_item
	}

	function addActionGroup(border=true) {
		const menu_group = document.createElement('div');
		menu_group.className = border ? "contextMenu-group border-bottom" : "contextMenu-group";
		return menu_group
	}

	function openWindow(element, mouse_event) {
		if (element.children[0].children.length === 2) {
			const entryurl = overrideEntry ? overrideEntry : element.children[0].children[1].innerText;
			if (entryurl === '..') {
				currentURL = currentURL.split('/').slice(0,-2).join('/')+'/';
			} else {
				currentURL += entryurl;
			}
			loadDirs();
		} else {
			const entryurl = overrideEntry ? overrideEntry : element.children[0].children[0].innerText;
			window.open(currentURL+entryurl);
		}
	}

	function downloadAction(element, mouse_event) {
		async function downloadFile(file, file_type=true) {
			displayLoading();
			const link = document.createElement("a");
			link.style.display = "none";
			const query_options = file_type ? `?${password}` : `?zip=utf8&${password}`
			if (file_type) {
				let response = await fetch(currentURL+encodeURI(file)+query_options);
				let blob = await response.blob();
				link.href = URL.createObjectURL(blob);
			} else {
				link.href = currentURL+encodeURI(file)+query_options
			}
			link.download = file_type ? file : file.substring(0,file.length-1);
		  
			// It needs to be added to the DOM so it can be clicked
			document.body.appendChild(link);
			link.click();
			// To make this work on Firefox we need to wait
			// a little while before removing it.
			setTimeout(() => {
				if (file_type)
					URL.revokeObjectURL(blob);
				link.parentNode.removeChild(link);
			}, 0);
			hideLoading();
		}
		if (element.children[0].children.length === 2) {
			const entryurl = overrideEntry ? overrideEntry : element.children[0].children[1].innerText;
			if (entryurl === '..') {
				showToast('Cannot download meta directory', true);
				return;
			}
			downloadFile(entryurl, false);
		} else {
			const entryurl = overrideEntry ? overrideEntry : element.children[0].children[0].innerText;
			downloadFile(entryurl);
		}
	}

	function cutAction(element, mouse_event) {
		function callback(element) {
			if (element.children[0].children.length === 2) {
				const entryurl = overrideEntry ? overrideEntry : element.children[0].children[1].innerText;
				if (entryurl === '..') {
					showToast('Cannot cut meta directory', true);
					return;
				}
				file_manager.act_cut(currentURL+entryurl, entryurl);
			} else {
				const entryurl = overrideEntry ? overrideEntry : element.children[0].children[0].innerText;
				file_manager.act_cut(currentURL+entryurl, entryurl);
			}
		}
		if (items_selected.length >= 1) {
			items_selected.forEach(el => {
				console.log(`Adding ${el} to clipboard`)
				if (el.children[0].children.length === 2) {
					const entryurl = overrideEntry ? overrideEntry : el.children[0].children[1].innerText;
					if (entryurl === '..') {
						showToast('Cannot cut meta directory', true);
						return;
					}
					file_manager.act_cut(currentURL+entryurl, entryurl, false);
				} else {
					const entryurl = overrideEntry ? overrideEntry : el.children[0].children[0].innerText;
					file_manager.act_cut(currentURL+entryurl, entryurl, false);
				}
			})
		} else {
			callback(element)
		}
	}

	function pasteAction(element, mouse_event) {
		const dstURL = currentURL.replace(serverRoot, "");
		file_manager.act_paste(dstURL, loadDirs);
	}

    const showMenu = (el, e) => {
		hideMenu(true);
        e.preventDefault();
		contextMenu.id = 'contextMenu';
		const menu = document.createElement('div');
		menu.className = 'contextMenu-grid';
		let action_groupA = addActionGroup();
		action_groupA.appendChild(addAction('Open', openWindow, el));
		menu.appendChild(action_groupA);
		let action_groupB = addActionGroup();
		action_groupB.appendChild(addAction('Cut', cutAction, el));
		action_groupB.appendChild(addAction('Paste', pasteAction, el));
		menu.appendChild(action_groupB);
		let action_groupC = addActionGroup();
		action_groupC.appendChild(addAction('Rename', null, el, '<svg class="a-s-fa-Ha-pa c-qd" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.41 5.8L17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z"></path></svg>'));
		action_groupC.appendChild(addAction('Delete', null, el, '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false" class=" c-qd a-s-fa-Ha-pa"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z"></path></svg>'));
		menu.appendChild(action_groupC);
		let action_groupD = addActionGroup(false);
		action_groupD.appendChild(addAction('Download', downloadAction, el, '<svg class="a-s-fa-Ha-pa c-qd" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="currentColor"><path d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m11.59-8.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5-1.41-1.41z"></path></svg>'));
		menu.appendChild(action_groupD);
		contextMenu.appendChild(menu)
		document.body.appendChild(contextMenu);
        const {innerWidth, innerHeight} = window;
        const {offsetWidth, offsetHeight} = contextMenu;
        let x = 0;
        let y = 0;
      
        if(e.clientX >= (innerWidth / 2)) {
            contextMenu.classList.add('left');
        }
      
        if(e.clientY >= (innerHeight / 2)) {
            contextMenu.classList.add('top');
        }
  
        if(e.clientX >= (innerWidth - offsetWidth)) {
            x = '-100%';
        }
  
        if(e.clientY >= (innerHeight - offsetHeight)) {
            y = '-100%';
        }
  
        contextMenu.style.left = e.clientX + 'px';
        contextMenu.style.top = e.clientY + 'px';
        contextMenu.style.transform = `translate(${x}, ${y})`;
        document.addEventListener('click', hideMenu);
		document.addEventListener('focusout', hideMenu);
        window.addEventListener('resize', hideOnResize);
    };
    
    return (el, override=null) => {
		overrideEntry = override ? override : overrideEntry
    	el.addEventListener('contextmenu', (e) => showMenu(el, e));
    };
})();

const fileman = ((password, ServerRoot) => {
    let methods = {};
    let clipboard = [];
    let cors_pass = password;
    let cors_root = ServerRoot;

    methods.act_cut = function (file_href, filename, single=true){
        if (single){
            clipboard = [];
        }
        clipboard.push({
            location: file_href,
            name: filename
        });
    }
    methods.act_paste  = function (current_URI, callback=null){
        console.log(clipboard);
        if (clipboard.length === 0) {
            showToast("Cannot paste empty clipboard", true);
        }
        clipboard.forEach(value => this.act_rename(current_URI, value.location, value.name, callback))
        clipboard = [];
    }
    methods.act_rename = function (current_URI, location, filename, callback){
        console.log(current_URI, location, filename, callback);
        let moveREQ = new XHR();
        moveREQ.open('POST', location+`?move=${current_URI+filename}&${cors_pass}`, true)
        // moveREQ.setRequestHeader("Origin", "");
        moveREQ.onload = moveREQ.onerror = function () {
            if (this.status !== 201) {
                toast.err(9, `Error while Moving: ${this.responseText}`)
                return;
            } else if (this.status === 201) {
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }
        moveREQ.send();
    }

    return methods
})
const file_manager = fileman(password,serverRoot);

async function loadDirs() {

	let file_dir_row_id = 0;

	function getType(url, file_ext) {
		let ret_url = url+"?"+password;
		if (file_ext.match(/(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) !== null) {
			return [ret_url, 'image'];
		}
		if (file_ext.match(/(mp4|ogg|webm|mov)/) !== null) {
			return [ret_url, 'video'];
		}
		if (file_ext.match(/(mp3|wav|wma|aac|ogg)/) !== null) {
			return [ret_url, 'audio'];
		}
		if (file_ext.match(/(md)/) !== null) {
			ret_url = url+"?"+"v"+"&"+password;
			return [ret_url, 'external'];
		}
		if (file_ext.match(/(pdf)/) !== null) {
			return [ret_url, 'pdf'];
		}
		return [ret_url, 'external'];
	}

	function getOverlayElement(file_url, file_name, file_ext) {
		let [url, type] = getType(file_url+file_name, file_ext);
		let ret = {
			'href': url,
			'type': type
		}
		if (type === 'audio') {
			ret['type'] = 'video';
			ret['height'] = '60px';
		}
		return ret
	}	

	function generateRow(href, size, ext, mdate, nodeat, file_type=true) {
		const file_row = document.createElement('div');
		file_row.classList.add('files-dir-row');
		file_row.setAttribute('row-id', file_dir_row_id);
		const file_bbox = file_type ? `data-gallery=${nodeat}` : '';
		file_row.innerHTML = (`<div class="dir-cell" id="files-header-Name">`+
		(file_type ? '' : `<div class="dir-cell" id="folder-icon"></div>`) +
		`<span ${file_bbox}>${href}</span>`+
		`</div>`+
		`<div class="dir-cell">`+
		`<span>${size}</span>`+
		`</div>`+
		`<div class="dir-cell">`+
		`<span>${ext}</span>`+
		`</div>`+
		`<div class="dir-cell">`+
		`<span>${mdate}</span>`+
		`</div>`)

		file_row.addEventListener('dblclick', (e) => entrydblClick(file_row, e));
		file_row.addEventListener('click', (e) => entryClick(file_row, e));
		attachContextMenu(file_row);
		file_dir_row_id += 1;
		return file_row;
	}

	displayLoading();
    try {
        const response = await fetch(currentURL+"?"+getdirs+"&"+password, {
			method: "GET",
		});
        if (!response.ok) {
            throw new Error(`Error Fetching directories for ${currentURL}`);
        }
        const json_response = await response.json();
        have_up2k_idx = json_response.idx;
        lifetime = json_response.lifetime;
		perms = json_response.perms;
        if (table_Files.textContent !== null)
            table_Files.textContent = null;
		if (currentURL !== serverURL) {
			let file_row = document.createElement('div');
			file_row.className = 'files-dir-row';
			file_row.setAttribute('row-id', file_dir_row_id);
			file_row.innerHTML = (`<div class="dir-cell" id="files-header-Name" row-id=${file_dir_row_id}>`+
			`<div class="dir-cell" id="folder-icon"></div>`+
			`<span>..</span>`+
			`</div>`+
			`<div class="dir-cell">`+
			`<span>--</span>`+
			`</div>`+
			`<div class="dir-cell">`+
			`<span>--</span>`+
			`</div>`+
			`<div class="dir-cell">`+
			`<span>--</span>`+
			`</div>`)

			file_row.addEventListener('dblclick', (e) => entrydblClick(file_row, e));
			table_Files.appendChild(file_row)
			file_dir_row_id += 1;
		}
        json_response.dirs.forEach(content => {
			table_Files.appendChild(generateRow(decodeURI(content.href), humansize(content.sz), content.ext, unix2iso(content.ts), 0, false));
        });
		let lightbox_element = [];
        json_response.files.forEach(content => {
            table_Files.appendChild(generateRow(decodeURI(content.href), humansize(content.sz), content.ext, unix2iso(content.ts), lightbox_element.length));
			lightbox_element.push(getOverlayElement(currentURL, content.href, content.ext));
        });
		lightbox.setElements(lightbox_element);
		items_selected = [];
    } catch (error) {
        showToast("There has been a problem with your fetch operation: "+error, true);
    }
	hideLoading();
}

function showToast(message, err=false) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: err ? "FireBrick" : "MediumSpringGreen",
          color: "Snow",
        }
      }).showToast();
}


// up2k ui
ebi('op_up2k').innerHTML = (
	'<form id="u2form" method="post" enctype="multipart/form-data" onsubmit="return false;"></form>\n' +

	'<table id="u2conf">\n' +
	'	<tr>\n' +
	'		<td class="c" rowspan="2">\n' +
	'			<input type="checkbox" id="multitask" />\n' +
	'			<label for="multitask" tt="continue hashing other files while uploading$N$Nmaybe disable if your CPU or HDD is a bottleneck">🏃</label>\n' +
	'		</td>\n' +
	'		<td class="c" rowspan="2">\n' +
	'			<input type="checkbox" id="potato" />\n' +
	'			<label for="potato" tt="Potato Mode">🥔</label>\n' +
	'		</td>\n' +
	'		<td class="c" rowspan="2">\n' +
	'			<input type="checkbox" id="u2rand" />\n' +
	'			<label for="u2rand" tt="randomize filenames">🎲</label>\n' +
	'		</td>\n' +
	'		<td class="c" data-perm="read" data-dep="idx" rowspan="2">\n' +
	'			<input type="checkbox" id="fsearch" />\n' +
	'			<label for="fsearch" tt="Search File">🔎</label>\n' +
	'		</td>\n' +
	'		<td data-perm="read" rowspan="2" id="u2btn_cw"></td>\n' +
	'		<td data-perm="read" rowspan="2" id="u2c3w"></td>\n' +
	'	</tr>\n' +
	'</table>\n' +

	'<div id="u2notbtn"></div>\n' +

	'<div id="u2btn_ct">\n' +
	'	<div id="u2btn" tabindex="0">\n' +
	'		<span id="u2bm"></span>\n' + 'Upload File' +
	'	</div>\n' +
	'</div>\n' +

	'<div id="u2c3t">\n' +

	'<div id="u2etaw"><div id="u2etas"><div class="o">\n' +
	'hash: <span id="u2etah" tt="average &lt;em&gt;hashing&lt;/em&gt; speed, and estimated time until finish">(no uploads are queued yet)</span><br />\n' +
	'send: <span id="u2etau" tt="average &lt;em&gt;uploading&lt;/em&gt; speed, and estimated time until finish">(no uploads are queued yet)</span><br />\n' +
	'	</div><span class="o">' +
	'done: </span><span id="u2etat" tt="average &lt;em&gt;total&lt;/em&gt; speed and estimated time until finish">(no uploads are queued yet)</span>\n' +
	'</div></div>\n' +

	'<div id="u2cards">\n' +
	'	<a href="#" act="ok" tt="completed successfully">ok <span>0</span></a><a\n' +
	'	href="#" act="ng" tt="no-good: failed / rejected / not-found">ng <span>0</span></a><a\n' +
	'	href="#" act="done" tt="ok and ng combined">done <span>0</span></a><a\n' +
	'	href="#" act="bz" tt="hashing or uploading" class="act">busy <span>0</span></a><a\n' +
	'	href="#" act="q" tt="idle, pending">queue <span>0</span></a>\n' +
	'</div>\n' +

	'</div>\n' +

	'<div id="u2tabw" class="na"><table id="u2tab">\n' +
	'	<thead>\n' +
	'		<tr>\n' +
	'			<td>filename &nbsp;(<a href="#" id="luplinks">list</a>/<a href="#" id="cuplinks">copylinks</a>)</td>\n' +
	'			<td>status</td>\n' +
	'			<td>progress</td>\n' +
	'		</tr>\n' +
	'	</thead>\n' +
	'	<tbody></tbody>\n' +
	'</table><div id="u2mu"></div></div>\n' +

	'<p id="u2flagblock"><b>the files were added to the queue</b><br>however there is a busy up2k in another browser tab,<br>so waiting for that to finish first</p>\n' +
	'<div id="u2life"></div>' +
	'<div id="u2foot"></div>'
);

loadDirs();