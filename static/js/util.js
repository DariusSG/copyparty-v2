const Ls = {
	"eng": {
		"tt": "English",

		"cols": {
			"c": "action buttons",
			"dur": "duration",
			"q": "quality / bitrate",
			"Ac": "audio codec",
			"Vc": "video codec",
			"Fmt": "format / container",
			"Ahash": "audio checksum",
			"Vhash": "video checksum",
			"Res": "resolution",
			"T": "filetype",
			"aq": "audio quality / bitrate",
			"vq": "video quality / bitrate",
			"pixfmt": "subsampling / pixel structure",
			"resw": "horizontal resolution",
			"resh": "veritcal resolution",
			"chs": "audio channels",
			"hz": "sample rate"
		},

		"hks": [
			[
				"misc",
				["ESC", "close various things"],

				"file-manager",
				["G", "toggle list / grid view"],
				["T", "toggle thumbnails / icons"],
				["🡅 A/D", "thumbnail size"],
				["ctrl-K", "delete selected"],
				["ctrl-X", "cut selected"],
				["ctrl-V", "paste into folder"],
				["Y", "download selected"],
				["F2", "rename selected"],

				"file-list-sel",
				["space", "toggle file selection"],
				["🡑/🡓", "move selection cursor"],
				["ctrl 🡑/🡓", "move cursor and viewport"],
				["🡅 🡑/🡓", "select prev/next file"],
				["ctrl-A", "select all files / folders"],
			], [
				"navigation",
				["B", "toggle breadcrumbs / navpane"],
				["I/K", "prev/next folder"],
				["M", "parent folder (or unexpand current)"],
				["V", "toggle folders / textfiles in navpane"],
				["A/D", "navpane size"],
			], [
				"audio-player",
				["J/L", "prev/next song"],
				["U/O", "skip 10sec back/fwd"],
				["0..9", "jump to 0%..90%"],
				["P", "play/pause (also initiates)"],
				["Y", "download song"],
			], [
				"image-viewer",
				["J/L, ←/→", "prev/next pic"],
				["Home/End", "first/last pic"],
				["F", "fullscreen"],
				["R", "rotate clockwise"],
				["🡅 R", "rotate ccw"],
				["Y", "download pic"],
			], [
				"video-player",
				["U/O", "skip 10sec back/fwd"],
				["P/K/Space", "play/pause"],
				["C", "continue playing next"],
				["V", "loop"],
				["M", "mute"],
				["[ and ]", "set loop interval"],
			], [
				"textfile-viewer",
				["I/K", "prev/next file"],
				["M", "close textfile"],
				["S", "select file (for cut/rename)"],
			]
		],

		"m_ok": "OK",
		"m_ng": "Cancel",

		"ht_s": "second!s",
		"ht_m": "minute!s",
		"ht_h": "hour!s",
		"ht_d": "day!s",
		"ht_and": " and ",

		"goh": "control-panel",
		"gop": 'previous sibling">prev',
		"gou": 'parent folder">up',
		"gon": 'next folder">next',
		"logout": "Logout ",
		"access": " access",
		"ot_close": "close submenu",
		"ot_search": "search for files by attributes, path / name, music tags, or any combination of those$N$N&lt;code&gt;foo bar&lt;/code&gt; = must contain both «foo» and «bar»,$N&lt;code&gt;foo -bar&lt;/code&gt; = must contain «foo» but not «bar»,$N&lt;code&gt;^yana .opus$&lt;/code&gt; = start with «yana» and be an «opus» file$N&lt;code&gt;&quot;try unite&quot;&lt;/code&gt; = contain exactly «try unite»$N$Nthe date format is iso-8601, like$N&lt;code&gt;2009-12-31&lt;/code&gt; or &lt;code&gt;2020-09-12 23:30:00&lt;/code&gt;",
		"ot_unpost": "unpost: delete your recent uploads",
		"ot_bup": "bup: basic uploader, even supports netscape 4.0",
		"ot_mkdir": "mkdir: create a new directory",
		"ot_md": "new-md: create a new markdown document",
		"ot_msg": "msg: send a message to the server log",
		"ot_mp": "media player options",
		"ot_cfg": "configuration options",
		"ot_u2i": 'up2k: upload files (if you have write-access) or toggle into the search-mode to see if they exist somewhere on the server$N$Nuploads are resumable, multithreaded, and file timestamps are preserved, but it uses more CPU than [🎈]&nbsp; (the basic uploader)<br /><br />during uploads, this icon becomes a progress indicator!',
		"ot_u2w": 'up2k: upload files with resume support (close your browser and drop the same files in later)$N$Nmultithreaded, and file timestamps are preserved, but it uses more CPU than [🎈]&nbsp; (the basic uploader)<br /><br />during uploads, this icon becomes a progress indicator!',
		"ot_noie": 'Please use Chrome / Firefox / Edge',

		"ab_mkdir": "make directory",
		"ab_mkdoc": "new markdown doc",
		"ab_msg": "send msg to srv log",

		"ay_path": "skip to folders",
		"ay_files": "skip to files",

		"wt_ren": "rename selected items$NHotkey: F2",
		"wt_del": "delete selected items$NHotkey: ctrl-K",
		"wt_cut": "cut selected items &lt;small&gt;(then paste somewhere else)&lt;/small&gt;$NHotkey: ctrl-X",
		"wt_pst": "paste a previously cut / copied selection$NHotkey: ctrl-V",
		"wt_selall": "select all files$NHotkey: ctrl-A (when file focused)",
		"wt_selinv": "invert selection",
		"wt_selzip": "download selection as archive",
		"wt_seldl": "download selection as separate files$NHotkey: Y",
		"wt_npirc": "copy irc-formatted track info",
		"wt_nptxt": "copy plaintext track info",
		"wt_grid": "toggle grid / list view$NHotkey: G",
		"wt_prev": "previous track$NHotkey: J",
		"wt_play": "play / pause$NHotkey: P",
		"wt_next": "next track$NHotkey: L",

		"ul_par": "parallel uploads:",
		"`ut_rand`": "randomize filenames",
		"ut_mt": "continue hashing other files while uploading$N$Nmaybe disable if your CPU or HDD is a bottleneck",
		"ut_ask": "ask for confirmation before upload starts",
		"ut_pot": "improve upload speed on slow devices$Nby making the UI less complex",
		"ut_srch": "don't actually upload, instead check if the files already $N exist on the server (will scan all folders you can read)",
		"ut_par": "pause uploads by setting it to 0$N$Nincrease if your connection is slow / high latency$N$Nkeep it 1 on LAN or if the server HDD is a bottleneck",
		"ul_btn": "drop files / folders<br>here (or click me)",
		"ul_btnu": "U P L O A D",
		"ul_btns": "S E A R C H",

		"ul_hash": "hash",
		"ul_send": "send",
		"ul_done": "done",
		"ul_idle1": "no uploads are queued yet",
		"ut_etah": "average &lt;em&gt;hashing&lt;/em&gt; speed, and estimated time until finish",
		"ut_etau": "average &lt;em&gt;upload&lt;/em&gt; speed and estimated time until finish",
		"ut_etat": "average &lt;em&gt;total&lt;/em&gt; speed and estimated time until finish",

		"uct_ok": "completed successfully",
		"uct_ng": "no-good: failed / rejected / not-found",
		"uct_done": "ok and ng combined",
		"uct_bz": "hashing or uploading",
		"uct_q": "idle, pending",

		"utl_name": "filename",
		"utl_ulist": "list",
		"utl_ucopy": "copy",
		"utl_links": "links",
		"utl_stat": "status",
		"utl_prog": "progress",

		"ul_flagblk": "the files were added to the queue</b><br>however there is a busy up2k in another browser tab,<br>so waiting for that to finish first",

		"udt_up": "Upload",
		"udt_srch": "Search",
		"udt_drop": "drop it here",

		"u_nav_m": '<h6>aight, what do you have?</h6><code>Enter</code> = Files (one or more)\n<code>ESC</code> = One folder (including subfolders)',
		"u_nav_b": '<a href="#" id="modal-ok">Files</a><a href="#" id="modal-ng">One folder</a>',

		"cl_opts": "switches",
		"cl_themes": "theme",
		"cl_langs": "language",
		"cl_ziptype": "folder download",
		"cl_uopts": "up2k switches",
		"cl_favico": "favicon",
		"cl_bigdir": "big dirs",
		"cl_keytype": "key notation",
		"cl_hiddenc": "hidden columns",
		"cl_hidec": "hide",
		"cl_reset": "reset",
		"cl_hpick": "click one column header to hide in the table below",
		"cl_hcancel": "column hiding aborted",

		"ct_thumb": "in icon view, toggle icons or thumbnails$NHotkey: T",
		"ct_dots": "show hidden files (if server permits)",
		"ct_dir1st": "sort folders before files",
		"ct_readme": "show README.md in folder listings",
		"ct_idxh": "show index.html instead of folder listing",
		"ct_sbars": "show scrollbars",

		"cut_turbo": "the yolo button, you probably DO NOT want to enable this:$N$Nuse this if you were uploading a huge amount of files and had to restart for some reason, and want to continue the upload ASAP$N$Nthis replaces the hash-check with a simple <em>&quot;does this have the same filesize on the server?&quot;</em> so if the file contents are different it will NOT be uploaded$N$Nyou should turn this off when the upload is done, and then &quot;upload&quot; the same files again to let the client verify them",

		"cut_datechk": "has no effect unless the turbo button is enabled$N$Nreduces the yolo factor by a tiny amount; checks whether the file timestamps on the server matches yours$N$Nshould <em>theoretically</em> catch most unfinished / corrupted uploads, but is not a substitute for doing a verification pass with turbo disabled afterwards",

		"cut_flag": "ensure only one tab is uploading at a time $N -- other tabs must have this enabled too $N -- only affects tabs on the same domain",

		"cut_az": "upload files in alphabetical order, rather than smallest-file-first$N$Nalphabetical order can make it easier to eyeball if something went wrong on the server, but it makes uploading slightly slower on fiber / LAN",

		"cut_nag": "OS notification when upload completes$N(only if the browser or tab is not active)",
		"cut_sfx": "audible alert when upload completes$N(only if the browser or tab is not active)",

		"cut_mt": "use multithreading to accelerate file hashing$N$Nthis uses web-workers and requires$Nmore RAM (up to 512 MiB extra)$N$N30% faster https, 4.5x faster http,$Nand 5.3x faster on android phones",

		"cft_text": "favicon text (blank and refresh to disable)",
		"cft_fg": "foreground color",
		"cft_bg": "background color",

		"cdt_lim": "max number of files to show in a folder",
		"cdt_ask": "when scrolling to the bottom,$Ninstead of loading more files,$Nask what to do",

		"tt_entree": "show navpane (directory tree sidebar)$NHotkey: B",
		"tt_detree": "show breadcrumbs$NHotkey: B",
		"tt_visdir": "scroll to selected folder",
		"tt_ftree": "toggle folder-tree / textfiles$NHotkey: V",
		"tt_pdock": "show parent folders in a docked pane at the top",
		"tt_dynt": "autogrow as tree expands",
		"tt_wrap": "word wrap",
		"tt_hover": "reveal overflowing lines on hover$N( breaks scrolling unless mouse $N&nbsp; cursor is in the left gutter )",

		"ml_pmode": "playback mode",
		"ml_tcode": "transcode",
		"ml_tint": "tint",
		"ml_eq": "audio equalizer",

		"mt_preload": "start loading the next song near the end for gapless playback\">preload",
		"mt_fullpre": "try to preload the entire song;$N✅ enable on <b>unreliable</b> connections,$N❌ <b>disable</b> on slow connections probably\">full",
		"mt_waves": "waveform seekbar:$Nshow audio amplitude in the scrubber\">~s",
		"mt_npclip": "show buttons for clipboarding the currently playing song\">/np",
		"mt_octl": "os integration (media hotkeys / osd)\">os-ctl",
		"mt_oseek": "allow seeking through os integration\">seek",
		"mt_oscv": "show album cover in osd\">art",
		"mt_follow": "keep the playing track scrolled into view\">🎯",
		"mt_compact": "compact controls\">⟎",
		"mt_mloop": "loop the open folder\">🔁 loop",
		"mt_mnext": "load the next folder and continue\">📂 next",
		"mt_cflac": "convert flac / wav to opus\">flac",
		"mt_caac": "convert aac / m4a to opus\">aac",
		"mt_coth": "convert all others (not mp3) to opus\">oth",
		"mt_tint": "background level (0-100) on the seekbar$Nto make buffering less distracting",
		"mt_eq": "enables the equalizer and gain control;$N$Nboost &lt;code&gt;0&lt;/code&gt; = standard 100% volume (unmodified)$N$Nwidth &lt;code&gt;1 &nbsp;&lt;/code&gt; = standard stereo (unmodified)$Nwidth &lt;code&gt;0.5&lt;/code&gt; = 50% left-right crossfeed$Nwidth &lt;code&gt;0 &nbsp;&lt;/code&gt; = mono$N$Nboost &lt;code&gt;-0.8&lt;/code&gt; &amp; width &lt;code&gt;10&lt;/code&gt; = vocal removal :^)$N$Nenabling the equalizer makes gapless albums fully gapless, so leave it on with all the values at zero (except width = 1) if you care about that",

		"mb_play": "play",
		"mm_hashplay": "play this audio file?",
		"mp_breq": "need firefox 82+ or chrome 73+ or iOS 15+",
		"mm_opusen": "your browser cannot play aac / m4a files;\ntranscoding to opus is now enabled",
		"mm_playerr": "playback failed: ",
		"mm_eabrt": "The playback attempt was cancelled",
		"mm_enet": "Your internet connection is wonky",
		"mm_edec": "This file is supposedly corrupted??",
		"mm_esupp": "Your browser does not understand this audio format",
		"mm_eunk": "Unknown Errol",
		"mm_e404": "Could not play audio; error 404: File not found.",
		"mm_e403": "Could not play audio; error 403: Access denied.\n\nTry pressing F5 to reload, maybe you got logged out",
		"mm_e5xx": "Could not play audio; server error ",
		"mm_nof": "not finding any more audio files nearby",
		"mm_pwrsv": "<p>it looks like playback is being interrupted by your phone's power-saving settings!</p>" + '<p>please go to <a target="_blank" href="https://user-images.githubusercontent.com/241032/235262121-2ffc51ae-7821-4310-a322-c3b7a507890c.png">the app settings of your browser</a> and then <a target="_blank" href="https://user-images.githubusercontent.com/241032/235262123-c328cca9-3930-4948-bd18-3949b9fd3fcf.png">allow unrestricted battery usage</a> to fix it.</p><p>(probably a good idea to use a separate browser dedicated for just music streaming...)</p>',
		"mm_hnf": "that song no longer exists",

		"im_hnf": "that image no longer exists",

		"f_chide": 'this will hide the column «{0}»\n\nyou can unhide columns in the settings tab',
		"f_bigtxt": "this file is {0} MiB large -- really view as text?",
		"fbd_more": '<div id="blazy">showing <code>{0}</code> of <code>{1}</code> files; <a href="#" id="bd_more">show {2}</a> or <a href="#" id="bd_all">show all</a></div>',
		"fbd_all": '<div id="blazy">showing <code>{0}</code> of <code>{1}</code> files; <a href="#" id="bd_all">show all</a></div>',

		"f_dls": 'the file links in the current folder have\nbeen changed into download links',

		"ft_paste": "paste {0} items$NHotkey: ctrl-V",
		"fr_eperm": 'cannot rename:\nyou do not have “move” permission in this folder',
		"fd_eperm": 'cannot delete:\nyou do not have “delete” permission in this folder',
		"fc_eperm": 'cannot cut:\nyou do not have “move” permission in this folder',
		"fp_eperm": 'cannot paste:\nyou do not have “write” permission in this folder',
		"fr_emore": "select at least one item to rename",
		"fd_emore": "select at least one item to delete",
		"fc_emore": "select at least one item to cut",

		"frt_dec": "may fix some cases of broken filenames\">url-decode",
		"frt_rst": "reset modified filenames back to the original ones\">↺ reset",
		"frt_abrt": "abort and close this window\">❌ cancel",
		"frb_apply": "APPLY RENAME",
		"fr_adv": "batch / metadata / pattern renaming\">advanced",
		"fr_case": "case-sensitive regex\">case",
		"fr_pdel": "delete",
		"fr_pnew": "save as",
		"fr_pname": "provide a name for your new preset",
		"fr_aborted": "aborted",
		"fr_lold": "old name",
		"fr_lnew": "new name",
		"fr_tags": "tags for the selected files (read-only, just for reference):",
		"fr_busy": "renaming {0} items...\n\n{1}",
		"fr_efail": "rename failed:\n",

		"fd_ok": "delete OK",
		"fd_err": "delete failed:\n",
		"fd_none": "nothing was deleted; maybe blocked by server config (xbd)?",
		"fd_busy": "deleting {0} items...\n\n{1}",
		"fd_warn1": "DELETE these {0} items?",
		"fd_warn2": "<b>Last chance!</b> No way to undo. Delete?",

		"fc_ok": "cut {0} items",
		"fc_warn": 'cut {0} items\n\nbut: only <b>this</b> browser-tab can paste them\n(since the selection is so absolutely massive)',

		"fp_ecut": "first cut some files / folders to paste / move\n\nnote: you can cut / paste across different browser tabs",
		"fp_ename": "these {0} items cannot be moved here (names already exist):",
		"fp_ok": "move OK",
		"fp_busy": "moving {0} items...\n\n{1}",
		"fp_err": "move failed:\n",
		"fp_confirm": "move these {0} items here?",
		"fp_etab": 'failed to read clipboard from other browser tab',

		"tv_load": "Loading text document:\n\n{0}\n\n{1}% ({2} of {3} MiB loaded)",
		"tv_xe1": "could not load textfile:\n\nerror ",
		"tv_xe2": "404, file not found",
		"tv_lst": "list of textfiles in",
		"tvt_close": "return to folder view$NHotkey: M\">❌ close",
		"tvt_dl": "download this file\">💾 download",
		"tvt_prev": "show previous document$NHotkey: i\">⬆ prev",
		"tvt_next": "show next document$NHotkey: K\">⬇ next",
		"tvt_sel": "select file &nbsp; ( for cut / delete / ... )$NHotkey: S\">sel",

		"gt_msel": "enable file selection; ctrl-click a file to override$N$N&lt;em&gt;when active: doubleclick a file / folder to open it&lt;/em&gt;$N$NHotkey: S\">multiselect",
		"gt_zoom": "zoom",
		"gt_chop": "chop",
		"gt_sort": "sort by",
		"gt_name": "name",
		"gt_sz": "size",
		"gt_ts": "date",
		"gt_ext": "type",
		"gt_c1": "truncate filenames more (show less)",
		"gt_c2": "truncate filenames less (show more)",

		"sm_prev": "search results below are from a previous query:\n  ",
		"sl_close": "close search results",
		"sl_hits": "showing {0} hits",
		"sl_moar": "load more",

		"s_sz": "size",
		"s_dt": "date",
		"s_rd": "path",
		"s_fn": "name",
		"s_ta": "tags",
		"s_ad": "adv.",
		"s_s1": "minimum MiB",
		"s_s2": "maximum MiB",
		"s_d1": "min. iso8601",
		"s_d2": "max. iso8601",
		"s_r1": "path contains &nbsp; (space-separated)",
		"s_f1": "name contains &nbsp; (negate with -nope)",
		"s_t1": "tags contains &nbsp; (^=start, end=$)",
		"s_a1": "specific metadata properties",

		"md_eshow": "cannot show ",
		"md_off": "[📜<em>readme</em>] disabled in [⚙️] -- document hidden",

		"xhr403": "403: Access denied\n\ntry pressing F5, maybe you got logged out",
		"cf_ok": "sorry about that -- DD" + '' + "oS protection kicked in\n\nthings should resume in about 30 sec\n\nif nothing happens, hit F5 to reload the page",
		"tl_xe1": "could not list subfolders:\n\nerror ",
		"tl_xe2": "404: Folder not found",
		"fl_xe1": "could not list files in folder:\n\nerror ",
		"fl_xe2": "404: Folder not found",
		"fd_xe1": "could not create subfolder:\n\nerror ",
		"fd_xe2": "404: Parent folder not found",
		"fsm_xe1": "could not send message:\n\nerror ",
		"fsm_xe2": "404: Parent folder not found",
		"fu_xe1": "failed to load unpost list from server:\n\nerror ",
		"fu_xe2": "404: File not found??",

		"fz_tar": "plain gnutar file (linux / mac)",
		"fz_zip8": "zip with utf8 filenames (maybe wonky on windows 7 and older)",
		"fz_zipd": "zip with traditional cp437 filenames, for really old software",
		"fz_zipc": "cp437 with crc32 computed early,$Nfor MS-DOS PKZIP v2.04g (october 1993)$N(takes longer to process before download can start)",

		"un_m1": "you can delete your recent uploads below",
		"un_upd": "refresh",
		"un_m4": "or share the files visible below:",
		"un_ulist": "show",
		"un_ucopy": "copy",
		"un_flt": "optional filter:&nbsp; URL must contain",
		"un_fclr": "clear filter",
		"un_derr": 'unpost-delete failed:\n',
		"un_f5": 'something broke, please try a refresh or hit F5',
		"un_max": "showing first 2000 files (use the filter)",
		"un_avail": "{0} uploads can be deleted",
		"un_m2": "sorted by upload time &ndash; most recent first:",
		"un_no1": "sike! no uploads are sufficiently recent",
		"un_no2": "sike! no uploads matching that filter are sufficiently recent",
		"un_next": "delete the next {0} files below",
		"un_del": "delete",
		"un_m3": "loading your recent uploads...",
		"un_busy": "deleting {0} files...",

		"u_https1": "you should",
		"u_https2": "switch to https",
		"u_https3": "for better performance",
		"u_ancient": 'your browser is impressively ancient -- maybe you should <a href="#" onclick="goto(\'bup\')">use bup instead</a>',
		"u_nowork": "need firefox 53+ or chrome 57+ or iOS 11+",
		"u_enpot": 'switch to <a href="#">potato UI</a> (may improve upload speed)',
		"u_depot": 'switch to <a href="#">fancy UI</a> (may reduce upload speed)',
		"u_gotpot": 'switching to the potato UI for improved upload speed,\n\nfeel free to disagree and switch back!',
		"u_ever": "this is the basic uploader; up2k needs at least<br>chrome 21 // firefox 13 // edge 12 // opera 12 // safari 5.1",
		"u_su2k": 'this is the basic uploader; <a href="#" id="u2yea">up2k</a> is better',
		"u_ewrite": 'you do not have write-access to this folder',
		"u_eread": 'you do not have read-access to this folder',
		"u_enoi": 'file-search is not enabled in server config',
		"u_badf": 'These {0} files (of {1} total) were skipped, possibly due to filesystem permissions:\n\n',
		"u_blankf": 'These {0} files (of {1} total) are blank / empty; upload them anyways?\n\n',
		"u_just1": '\nMaybe it works better if you select just one file',
		"u_ff_many": "This amount of files <em>may</em> cause Firefox to skip some files, or crash.\nPlease try again with fewer files (or use Chrome) if that happens.",
		"u_up_life": "This upload will be deleted from the server\n{0} after it completes",
		"u_asku": 'upload these {0} files to <code>{1}</code>',
		"u_unpt": "you can undo / delete this upload using the top-left 🧯",
		"u_etadone": 'Done ({0}, {1} files)',
		"u_etaprep": '(preparing to upload)',
		"u_hashdone": 'hashing done',
		"u_hashing": 'hash',
		"u_fixed": "OK!&nbsp; Fixed it 👍",
		"u_cuerr": "failed to upload chunk {0} of {1};\nprobably harmless, continuing\n\nfile: {2}",
		"u_cuerr2": "server rejected upload (chunk {0} of {1});\nwill retry later\n\nfile: {2}\n\nerror ",
		"u_ehstmp": "will retry; see bottom-right",
		"u_ehsfin": "server rejected the request to finalize upload; retrying...",
		"u_ehssrch": "server rejected the request to perform search; retrying...",
		"u_ehsinit": "server rejected the request to initiate upload; retrying...",
		"u_eneths": "network error while performing upload handshake; retrying...",
		"u_enethd": "network error while testing target existence; retrying...",
		"u_ehsdf": "server ran out of disk space!\n\nwill keep retrying, in case someone\nfrees up enough space to continue",
		"u_emtleak1": "it looks like your webbrowser may have a memory leak;\nplease",
		"u_emtleak2": ' <a href="{0}">switch to https (recommended)</a> or ',
		"u_emtleak3": ' ',
		"u_emtleakc": 'try the following:\n<ul><li>hit <code>F5</code> to refresh the page</li><li>then disable the &nbsp;<code>mt</code>&nbsp; button in the &nbsp;<code>⚙️ settings</code></li><li>and try that upload again</li></ul>Uploads will be a bit slower, but oh well.\nSorry for the trouble !\n\nPS: chrome v107 <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1354816">has a bugfix</a> for this',
		"u_emtleakf": 'try the following:\n<ul><li>hit <code>F5</code> to refresh the page</li><li>then enable <code>🥔</code> (potato) in the upload UI<li>and try that upload again</li></ul>\nPS: firefox <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1790500">will hopefully have a bugfix</a> at some point',
		"u_s404": "not found on server",
		"u_expl": "explain",
		"u_tu": '<p class="warn">WARNING: turbo enabled, <span>&nbsp;client may not detect and resume incomplete uploads; see turbo-button tooltip</span></p>',
		"u_ts": '<p class="warn">WARNING: turbo enabled, <span>&nbsp;search results can be incorrect; see turbo-button tooltip</span></p>',
		"u_life_cfg": 'autodelete after <input id="lifem" p="60" /> min (or <input id="lifeh" p="3600" /> hours)',
		"u_life_est": 'upload will be deleted <span id="lifew" tt="local time">---</span>',
		"u_life_max": 'this folder enforces a\nmax lifetime of {0}',
		"u_unp_ok": 'unpost is allowed for {0}',
		"u_unp_ng": 'unpost will NOT be allowed',
		"ue_ro": 'your access to this folder is Read-Only\n\n',
		"ue_nl": 'you are currently not logged in',
		"ue_la": 'you are currently logged in as "{0}"',
		"ue_sr": 'you are currently in file-search mode\n\nswitch to upload-mode by clicking the magnifying glass 🔎 (next to the big SEARCH button), and try uploading again\n\nsorry',
		"ue_ta": 'try uploading again, it should work now',
		"ur_1uo": "OK: File uploaded successfully",
		"ur_auo": "OK: All {0} files uploaded successfully",
		"ur_1so": "OK: File found on server",
		"ur_aso": "OK: All {0} files found on server",
		"ur_1un": "Upload failed, sorry",
		"ur_aun": "All {0} uploads failed, sorry",
		"ur_1sn": "File was NOT found on server",
		"ur_asn": "The {0} files were NOT found on server",
		"ur_um": "Finished;\n{0} uploads OK,\n{1} uploads failed, sorry",
		"ur_sm": "Finished;\n{0} files found on server,\n{1} files NOT found on server",

		"lang_set": "refresh to make the change take effect?",
	},
};
var L = Ls['eng'];
if (Ls.eng && L != Ls.eng) {
	for (var k in Ls.eng)
		if (!L[k])
			L[k] = Ls.eng[k];
}

var TOUCH = 'ontouchstart' in window,
    MOBILE = TOUCH, 
    CHROME = !!window.chrome,
    VCHROME = CHROME ? 1 : 0,
    IE = /Trident\//.test(navigator.userAgent),
    FIREFOX = ('netscape' in window) && / rv:/.test(navigator.userAgent),
    IPHONE = TOUCH && /iPhone|iPad|iPod/i.test(navigator.userAgent),
    LINUX = /Linux/.test(navigator.userAgent),
    MACOS = /[^a-z]mac ?os/i.test(navigator.userAgent),
    WINDOWS = /Windows/.test(navigator.userAgent);

function unix2iso(ts) {
    return new Date(ts * 1000).toDateString().slice(3);
}

function ebi(cls) {
    return document.getElementById(cls)
}

function QS(cls) {
    return document.querySelector(cls)
}

function QSA(cls) {
    return document.querySelectorAll(cls)
}

var XHR = XMLHttpRequest;

const toast = (function() {
    let r = {};
    r.show = function (errlvl, timeout, msg){
        Toastify({
            text: errlvl + msg,
            duration: timeout*1000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "Gold",
              color: "Snow",
            }
          }).showToast();
    }
    r.ok = function (sec, txt) {
        r.show('ok ', sec, txt);
    };
    r.inf = function (sec, txt) {
        r.show('inf ', sec, txt);
    };
    r.warn = function (sec, txt) {
        r.show('warn ', sec, txt);
    };
    r.err = function (sec, txt) {
        r.show('err ', sec, txt);
    };
    return r;
})();

function bcfg_bind(obj, oname, cname, defval, cb, un_ev) {
    var v = bcfg_get(cname, defval),
        el = ebi(cname);

    obj[oname] = v;
    if (el)
        el.onclick = function (e) {
            if (un_ev !== false)
                ev(e);

            obj[oname] = bcfg_set(cname, !obj[oname]);
            if (cb)
                cb(obj[oname]);
        };

    return v;
}

function bcfg_get(name, defval) {
    var o = ebi(name);
    if (!o)
        return defval;

    var val = sread(name);
    if (val === null)
        val = defval;
    else
        val = (val == '1');

    bcfg_upd_ui(name, val);
    return val;
}

function bcfg_set(name, val) {
    swrite(name, val ? '1' : '0');
    bcfg_upd_ui(name, val);
    return val;
}

function bcfg_upd_ui(name, val) {
    var o = ebi(name);
    if (!o)
        return;

    if (o.getAttribute('type') == 'checkbox')
        o.checked = val;
    else if (o) {
        clmod(o, 'on', val);
    }
}

function swrite(key, val) {
    try {
        if (val === undefined || val === null)
            localStorage.removeItem(key);
        else
            localStorage.setItem(key, val);
    }
    catch (e) { }
}

function sread(key) {
    try {
        return localStorage.getItem(key);
    }
    catch (e) {
        return null;
    }
}

function clmod(el, cls, add) {
    if (!el)
        return false;

    if (el.classList) {
        var have = el.classList.contains(cls);
        if (add == 't')
            add = !have;

        if (!add == !have)
            return false;

        el.classList[add ? 'add' : 'remove'](cls);
        return true;
    }

    var re = new RegExp('\\s*\\b' + cls + '\\s*\\b', 'g'),
        n1 = el.className;

    if (add == 't')
        add = !re.test(n1);

    var n2 = n1.replace(re, ' ') + (add ? ' ' + cls : '');

    if (n1 == n2)
        return false;

    el.className = n2;
    return true;
}

function has(haystack, needle) {
    try { return haystack.includes(needle); } catch (ex) { }

    for (var a = 0; a < haystack.length; a++)
        if (haystack[a] == needle)
            return true;

    return false;
}

function mknod(et, eid, html) {
    var ret = document.createElement(et);

    if (eid)
        ret.id = eid;

    if (html)
        ret.innerHTML = html;

    return ret;
}

const timer = (function () {
    var r = {};
    r.q = [];
    r.last = 0;

    r.add = function (fun, run) {
        r.rm(fun);
        r.q.push(fun);

        if (run)
            fun();
    };

    r.rm = function (fun) {
        apop(r.q, fun);
    };

    function doevents() {
        if (crashed)
            return;

        if (Date.now() - r.last < 69)
            return;

        var q = r.q.slice(0);
        for (var a = 0; a < q.length; a++)
            q[a]();

        r.last = Date.now();
    }
    setInterval(doevents, 100);

    return r;
})();

function apop(arr, v) {
    var ofs = arr.indexOf(v);
    if (ofs !== -1)
        arr.splice(ofs, 1);
}
var crashed = false, ignexd = {}, evalex_fatal = false;


function f2f(val, nd) {
    // 10.toFixed(1) returns 10.00 for certain values of 10
    val = (val * Math.pow(10, nd)).toFixed(0).split('.')[0];
    return nd ? (val.slice(0, -nd) || '0') + '.' + val.slice(-nd) : val;
}


function humansize(b, terse) {
    var i = 0, u = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    while (b >= 1000 && i < u.length - 1) {
        b /= 1024;
        i += 1;
    }
    return (f2f(b, b >= 100 ? 0 : b >= 10 ? 1 : 2) +
        ' ' + (terse ? u[i].charAt(0) : u[i]));
}


function humantime(v) {
    if (v >= 60 * 60 * 24)
        return shumantime(v);

    try {
        return /.*(..:..:..).*/.exec(new Date(v * 1000).toUTCString())[1];
    }
    catch (ex) {
        return v;
    }
}


function shumantime(v, long) {
    if (v < 10)
        return f2f(v, 2) + 's';
    if (v < 60)
        return f2f(v, 1) + 's';

    v = parseInt(v);
    var st = [[60 * 60 * 24, 60 * 60, 'd'], [60 * 60, 60, 'h'], [60, 1, 'm']];

    for (var a = 0; a < st.length; a++) {
        var m1 = st[a][0],
            m2 = st[a][1],
            ch = st[a][2];

        if (v < m1)
            continue;

        var v1 = parseInt(v / m1),
            v2 = ('0' + parseInt((v % m1) / m2)).slice(-2);

        return v1 + ch + (v1 >= 10 || v2 == '00' ? '' : v2 + (
            long && a < st.length - 1 ? st[a + 1][2] : ''));
    }
}


function lhumantime(v) {
    var t = shumantime(v, 1),
        tp = t.replace(/([a-z])/g, " $1 ").split(/ /g).slice(0, -1);

    if (!L || tp.length < 2 || tp[1].indexOf('$') + 1)
        return t;

    var ret = '';
    for (var a = 0; a < tp.length; a += 2)
        ret += tp[a] + ' ' + L['ht_' + tp[a + 1]].replace(tp[a] == 1 ? /!.*/ : /!/, '') + L.ht_and;

    return ret.slice(0, -L.ht_and.length);
}