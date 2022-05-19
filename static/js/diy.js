!function(o,t,i,n){"use strict";o.gototop=function(n,s){var e=0,l=o("html, body"),a=this;a.$el=o(n),a.el=n,a.$el.data("gototop",a),a.initialize=function(){a.options=o.extend({},o.gototop.defaultOptions,s),a.listen()},a.listen=function(){t.addEventListener("scroll",a.getScrollPosition,!1),a.$el.on("click",{position:a.options.position,duration:a.options.duration},a.scrolltotop)},a.getScrollPosition=function(){e=i.body.scrollTop||t.pageYOffset,a.checkPosition()},a.checkPosition=function(){e>=a.options.visibleAt?(a.$el.show(),a.$el.addClass(a.options.classname)):a.$el.removeClass(a.options.classname)},a.scrolltotop=function(o){l.animate({scrollTop:o.data.position},o.data.duration)},a.initialize()},o.gototop.defaultOptions={position:50,duration:3e3,classname:"isvisible",visibleAt:500},o.fn.gototop=function(t){return this.each(function(){new o.gototop(this,t)})}}(jQuery,window,document);

/* 开关灯 */ 
  var bodybox= document.getElementById('color_lens');
  bodybox.onclick =function(){
     if(this.checked){
        $('body').toggleClass('mdui-theme-layout-dark');
} else{
  $('body').toggleClass('mdui-theme-layout-dark');
  }
}


