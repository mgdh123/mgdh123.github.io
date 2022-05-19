document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
    	alert('如果您喜欢本站，请按Ctrl+D添加到收藏夹！');
            return false;
    }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
    	alert('如果您喜欢本站，请按Ctrl+D添加到收藏夹！');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
            alert('如果您喜欢本站，请按Ctrl+D添加到收藏夹！');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
           alert('如果您喜欢本站，请按Ctrl+D添加到收藏夹！');
           return false;
    }
}
document.oncontextmenu=function(){
	alert('如果您喜欢本站，请按Ctrl+D添加到收藏夹！');
    return false;
}

