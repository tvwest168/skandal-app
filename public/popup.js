 
  

//Pop-under window- By JavaScript Kit
//Credit notice must stay intact for use
//Visit http://javascriptkit.com for this script

//specify page to pop-under
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ["https://bb168.cloud/?ref=studios", 
"https://jp888.store/?ref=studioskandal", 
"https://mkvgames88.info/register?ref=FD1B18D28E", 
"https://iw888.live/?ref=275BE8"];

var currentPage = window.location.href;

var popunder= random_item(items);

//specify popunder window features
//set 1 to enable a particular feature, 0 to disable
var winfeatures="width=800,height=510,scrollbars=1,resizable=1,toolbar=1,location=1,menubar=1,status=1,directories=0"

//Pop-under only once per browser session? (0=no, 1=yes)
//Specifying 0 will cause popunder to load every time page is loaded
var once_per_session=1

///No editing beyond here required/////

function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset);
      // set index of end of cookie value
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}
function loadpopunder(){
win2=window.open(window.location.href,"",winfeatures)
win2.blur()
window.location.href = popunder;

window.focus()
}
function loadornot(){
if (get_cookie('popunder')==''){



	Object.defineProperty(HTMLElement.prototype, "onclick", {   
    set: function(handler) { 
        // Maybe clear previous installed click handlers
        // or prevent multiple calls to this.

        this.addEventListener("click", function(event) {
           event.preventDefault();
 loadpopunder();
			//alert('sss');
            handler(event)
        })
    }
})

 var now = new Date(); 
 var time = now.getTime();
 var expireTime = time + 25*36000;
 now.setTime(expireTime);
 document.cookie="popunder=yes;expires="+now.toUTCString()+";"
}
}



if (once_per_session==0)
loadpopunder()
else
loadornot()
