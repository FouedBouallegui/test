(function(g){var window=this;'use strict';var Rrb=function(a){g.V.call(this,{I:"div",S:"ytp-inline-preview-ui"});this.C=!1;this.player=a;this.T(a,"onStateChange",this.O1);this.T(a,"videodatachange",this.P1);this.T(a,"onInlinePreviewModeChange",this.x7);this.B=new g.Ru(this.M1,null,this);g.M(this,this.B)},I6=function(a){g.$V.call(this,a);
this.j=new Rrb(this.player);g.M(this,this.j);this.j.hide();g.NU(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.gv(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.w(Rrb,g.V);g.k=Rrb.prototype;
g.k.show=function(){g.Su(this.B);if(!this.C){this.tooltip=new g.lY(this.player,this);g.M(this,this.tooltip);g.NU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rd=new g.DW(this.player);g.M(this,this.Rd);this.j=new g.V({I:"div",Ma:["ytp-inline-preview-scrim"]});g.M(this,this.j);this.j.Ja(this.element);this.T(this.j.element,"click",this.N1);this.D=new g.eY(this.player,this,300);g.M(this,this.D);this.D.Ja(this.j.element);this.controls=new g.V({I:"div",S:"ytp-inline-preview-controls"});g.M(this,
this.controls);this.controls.Ja(this.element);var a=new g.xX(this.player,this,!1);g.M(this,a);a.Ja(this.controls.element);a=new g.cY(this.player,this);g.M(this,a);a.Ja(this.controls.element);this.progressBar=new g.EX(this.player,this);g.M(this,this.progressBar);g.NU(this.player,this.progressBar.element,4);this.T(this.player,"appresize",this.Xb);this.T(this.player,"fullscreentoggled",this.Xb);this.Xb();this.C=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.progressBar.show();
this.player.jb("onInlinePreviewUiReady")};
g.k.hide=function(){this.B.stop();g.V.prototype.hide.call(this);this.player.isInline()||this.C&&this.progressBar.hide()};
g.k.xa=function(){g.V.prototype.xa.call(this)};
g.k.N1=function(a){a.target===this.j.element&&this.player.jb("onExpandInlinePreview",a)};
g.k.x7=function(){g.jv(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.Vf=function(){this.progressBar.Lc();this.D.Lc()};
g.k.M1=function(){this.Vf();g.Su(this.B)};
g.k.Xb=function(){g.I_a(this.progressBar,0,this.player.rb().getPlayerSize().width,!1);g.FX(this.progressBar)};
g.k.O1=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.P1=function(a,b){if(this.player.isInline()){g.jv(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.XB);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.jv(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Ne=function(){return this.tooltip};
g.k.Ft=function(a,b,c,d,e){var f=d=0,h=0,l=g.xs(a);if(b){c=g.ev(b,"ytp-mute-button");var m=g.ev(b,"ytp-subtitles-button"),n=g.vs(b,this.element);b=g.xs(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.rb().getPlayerSize().width;h=g.we(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};g.w(I6,g.$V);I6.prototype.ql=function(){return!1};
I6.prototype.load=function(){this.player.hideControls();this.j.show()};
I6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.ZV("inline_preview",I6);})(_yt_player);
