(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var Ease = cjs.Ease;
var Sprite = cjs.Sprite;
var MovieClip = cjs.MovieClip;
var Tween = cjs.Tween;
var Rectangle = cjs.Rectangle;
var Container = cjs.Container;

// library properties:




// symbols:



(lib.body1 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new Sprite();



(lib.eyelid1 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new Sprite();



(lib.Symbol1copy21 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new Sprite();



(lib.Symbol1copy1 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new Sprite();



(lib.Symbol11 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new Sprite();



(lib.Symbol2copy21 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new Sprite();



(lib.Symbol2copy31 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new Sprite();



(lib.Symbol2copy1 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new Sprite();



(lib.Symbol21 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new Sprite();



(lib.Symbol3copy41 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new Sprite();



(lib.Symbol3copy1 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new Sprite();



(lib.Symbol31 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new Sprite();



(lib.Symbol41 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["pacman_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new Sprite();



(lib.Symbol4 = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol41();
	instance.setTransform(-2.2,0,0.45,0.45);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-2.2,0,29.3,28.1);


(lib.Symbol3copy4 = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol3copy41();
	instance.setTransform(-1,92.2,0.772,0.772);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-1,92.1,51.7,37.1);


(lib.Symbol3copy = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol3copy1();
	instance.setTransform(0.5,81.8);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0.5,81.8,54,50.2);


(lib.Symbol3 = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol31();

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,55,132);


(lib.Symbol2copy3 = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol2copy31();
	instance.setTransform(0,-4.1);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-4.1,95,42);


(lib.Symbol2copy2 = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol2copy21();
	instance.setTransform(0,-14);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-14,95.3,54);


(lib.Symbol2copy = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol2copy1();

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,92.2,12.5);


(lib.Symbol2 = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol21();
	instance.setTransform(0,0,0.408,0.408);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,92.3,37.6);


(lib.Symbol1copy2 = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol1copy21();
	instance.setTransform(-6.1,0.6);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-6.1,0.6,41.1,44.4);


(lib.Symbol1copy = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol1copy1();
	instance.setTransform(0,2.8);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,2.8,35,42.3);


(lib.Symbol1 = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.Symbol11();
	instance.setTransform(0,0,0.763,0.763);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,35.1,45);


(lib.eyelid = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.eyelid1();
	instance.setTransform(-0.5,0.1,0.925,0.925);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-0.5,0,55.6,132.4);


(lib.body = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.body1();

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,316,316);


(lib.PacmanMC = function(mode,startPosition,loop) {
	var instance_17;
	var instance_16;
	var instance_15;
	var instance_14;
	var instance_13;
	var instance_12;
	var instance_11;
	var instance_10;
	var instance_9;
	var instance_8;
	var instance_7;
	var instance_6;
	var instance_5;
	var instance_4;
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// righ eyehair
	instance = this.instance = new lib.Symbol4();
	instance.setTransform(432.9,86.1,2.222,2.222,0,0,180,13.5,13);

	this.timeline.addTween(Tween.get(instance).to({y:90.1},3,Ease.get(-1)).wait(9).to({y:86.1},3,Ease.get(-1)).wait(12).to({y:90.1},2,Ease.get(-1)).wait(9).to({y:86.1},1,Ease.get(-1)).wait(10).to({regY:13.1,skewX:3,skewY:183,x:429.8,y:89.6},0).wait(1).to({regX:13.6,regY:13,scaleX:2.44,skewX:5.7,skewY:185.7,x:415.8,y:92.7},0).wait(8).to({regX:13.5,regY:13.1,scaleX:2.22,skewX:3,skewY:183,x:429.8,y:89.6},0).wait(1).to({regY:13,skewX:0,skewY:180,x:432.9,y:86.1},0).wait(11));

	// left eyehair
	instance_1 = this.instance_1 = new lib.Symbol4();
	instance_1.setTransform(308.1,86.1,2.222,2.222,0,0,0,13.5,13);

	this.timeline.addTween(Tween.get(instance_1).to({y:90.1},3,Ease.get(-1)).wait(9).to({y:86.1},3,Ease.get(-1)).wait(12).to({y:90.1},2,Ease.get(-1)).wait(9).to({y:86.1},1,Ease.get(-1)).wait(10).to({rotation:3,x:305.2,y:82.9},0).wait(1).to({regY:13.1,scaleX:1.65,rotation:5.7,x:292.9,y:80.5},0).wait(8).to({regY:13,scaleX:2.22,rotation:3,x:305.2,y:82.9},0).wait(1).to({rotation:0,x:308.1,y:86.1},0).wait(11));

	// left eye
	instance_2 = this.instance_2 = new lib.Symbol3();
	instance_2.setTransform(315.7,237,1,1,0,0,0,27.4,132);

	instance_3 = this.instance_3 = new lib.Symbol3copy();
	instance_3.setTransform(315.7,239,1,0.558,0,0,0,27.4,132);
	instance_3._off = true;

	this.timeline.addTween(Tween.get(instance_2).to({scaleY:0.8,y:239},2,Ease.get(-1)).to({_off:true,scaleY:0.56},1).wait(8).to({_off:false,scaleY:0.84},1).to({scaleY:1,y:237},3).wait(12).to({scaleY:0.8,y:239},1,Ease.get(-1)).to({_off:true,scaleY:0.56},1).wait(8).to({_off:false,scaleY:0.84},1).to({scaleY:1,y:237},1).wait(10).to({regX:27.3,regY:132.1,rotation:3,x:304.8,y:234.1},0).wait(1).to({regX:27.4,regY:132,scaleX:0.89,rotation:5.7,x:284.5,y:231.4},0).wait(8).to({regX:27.3,regY:132.1,scaleX:1,rotation:3,x:304.8,y:234.1},0).wait(1).to({regX:27.4,regY:132,rotation:0,x:315.7,y:237},0).wait(11));
	this.timeline.addTween(Tween.get(instance_3).wait(2).to({_off:false},1).wait(8).to({_off:true,scaleY:0.84},1).wait(16).to({_off:false,scaleY:0.56},1).wait(8).to({_off:true,scaleY:0.84},1).wait(32));

	// eyelid
	instance_4 = this.instance_4 = new lib.eyelid();
	instance_4.setTransform(315.7,239,1.081,0.784,0,0,0,27.4,131.9);
	instance_4._off = true;

	this.timeline.addTween(Tween.get(instance_4).wait(3).to({_off:false},0).wait(8).to({_off:true},1).wait(17).to({_off:false},0).wait(8).to({_off:true},1).wait(32));

	// right eye
	instance_5 = this.instance_5 = new lib.Symbol3();
	instance_5.setTransform(426.6,237,1,1,0,0,180,27.4,132);

	instance_6 = this.instance_6 = new lib.Symbol3copy();
	instance_6.setTransform(426.6,239,1,0.558,0,0,180,27.4,132);
	instance_6._off = true;

	instance_7 = this.instance_7 = new lib.Symbol3copy4();
	instance_7.setTransform(407.7,193.4,1.296,0.867,0,170.7,-9.3,27.2,132);

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance_5}]}).to({state:[{t:instance_5}]},2).to({state:[{t:instance_6}]},1).to({state:[{t:instance_6}]},8).to({state:[{t:instance_5}]},1).to({state:[{t:instance_5}]},3).to({state:[{t:instance_5}]},12).to({state:[{t:instance_5}]},1).to({state:[{t:instance_6}]},1).to({state:[{t:instance_6}]},8).to({state:[{t:instance_5}]},1).to({state:[{t:instance_5}]},1).to({state:[{t:instance_5}]},10).to({state:[{t:instance_7}]},1).to({state:[{t:instance_5}]},8).to({state:[{t:instance_5}]},1).wait(11));
	this.timeline.addTween(Tween.get(instance_5).to({scaleY:0.8,y:239},2,Ease.get(-1)).to({_off:true,scaleY:0.56},1).wait(8).to({_off:false,scaleY:0.84},1).to({scaleY:1,y:237},3).wait(12).to({scaleY:0.8,y:239},1,Ease.get(-1)).to({_off:true,scaleY:0.56},1).wait(8).to({_off:false,scaleY:0.84},1).to({scaleY:1,y:237},1).wait(10).to({scaleY:0.85,skewX:3,skewY:183,x:415.7,y:239.8},0).to({_off:true},1).wait(8).to({_off:false},0).wait(1).to({scaleY:1,skewX:0,skewY:180,x:426.6,y:237},0).wait(11));
	this.timeline.addTween(Tween.get(instance_6).wait(2).to({_off:false},1).wait(8).to({_off:true,scaleY:0.84},1).wait(16).to({_off:false,scaleY:0.56},1).wait(8).to({_off:true,scaleY:0.84},1).wait(32));

	// eyelid
	instance_8 = this.instance_8 = new lib.eyelid();
	instance_8.setTransform(426.9,239,1.081,0.784,0,0,0,27.4,131.9);

	instance_9 = this.instance_9 = new lib.eyelid();
	instance_9.setTransform(315.7,239,1.081,0.784,0,0,0,27.4,131.9);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:instance_9},{t:instance_8}]},3).to({state:[{t:instance_9},{t:instance_8}]},8).to({state:[]},1).to({state:[{t:instance_9},{t:instance_8}]},17).to({state:[{t:instance_9},{t:instance_8}]},8).to({state:[]},1).wait(32));

	// mouth
	instance_10 = this.instance_10 = new lib.Symbol2();
	instance_10.setTransform(372,277.3,2.453,2.453,0,0,0,46.1,7.4);

	instance_11 = this.instance_11 = new lib.Symbol2copy();
	instance_11.setTransform(372,283.1,1.671,0.922,0,0,0,46.1,8.1);

	instance_12 = this.instance_12 = new lib.Symbol2copy3();
	instance_12.setTransform(359.1,277.2,2.453,2.453,3,0,0,46.1,7.4);

	instance_13 = this.instance_13 = new lib.Symbol2copy2();
	instance_13.setTransform(336.5,276.9,2.453,2.453,5.7,0,0,46.1,7.4);

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance_10}]}).to({state:[{t:instance_10}]},3).to({state:[{t:instance_11}]},1).to({state:[{t:instance_10}]},8).to({state:[{t:instance_10}]},3).to({state:[{t:instance_10}]},12).to({state:[{t:instance_10}]},2).to({state:[{t:instance_10}]},9).to({state:[{t:instance_10}]},1).to({state:[{t:instance_12}]},10).to({state:[{t:instance_13}]},1).to({state:[{t:instance_12}]},8).to({state:[{t:instance_10}]},1).wait(11));
	this.timeline.addTween(Tween.get(instance_10).to({regY:8.1,scaleX:2.09,scaleY:0.92,y:283.1},3,Ease.get(-1)).to({_off:true},1).wait(8).to({_off:false},0).to({regY:7.4,scaleX:2.45,scaleY:2.45,y:277.3},3).wait(12).to({y:280.3},2,Ease.get(-1)).wait(9).to({y:277.3},1,Ease.get(-1)).to({_off:true},10).wait(10).to({_off:false},0).wait(11));

	// nose
	instance_14 = this.instance_14 = new lib.Symbol1();
	instance_14.setTransform(372,236.5,1.311,1.311,0,0,0,17.5,22.5);

	instance_15 = this.instance_15 = new lib.Symbol1copy();
	instance_15.setTransform(372,240.5,1.311,1.311,0,0,0,17.5,22.5);
	instance_15._off = true;

	instance_16 = this.instance_16 = new lib.Symbol1copy2();
	instance_16.setTransform(340.5,236.4,1.311,1.311,5.7,0,0,17.4,22.5);

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance_14}]}).to({state:[{t:instance_15}]},3).to({state:[{t:instance_15}]},1).to({state:[{t:instance_15}]},7).to({state:[{t:instance_14}]},1).to({state:[{t:instance_14}]},3).to({state:[{t:instance_14}]},12).to({state:[{t:instance_15}]},2).to({state:[{t:instance_15}]},1).to({state:[{t:instance_15}]},7).to({state:[{t:instance_14}]},1).to({state:[{t:instance_14}]},1).to({state:[{t:instance_14}]},10).to({state:[{t:instance_16}]},1).to({state:[{t:instance_14}]},8).to({state:[{t:instance_14}]},1).wait(11));
	this.timeline.addTween(Tween.get(instance_14).to({_off:true,y:240.5},3,Ease.get(-1)).wait(9).to({_off:false},0).to({y:236.5},3,Ease.get(-1)).wait(12).to({_off:true,y:240.5},2,Ease.get(-1)).wait(9).to({_off:false},0).to({y:236.5},1,Ease.get(-1)).wait(10).to({regY:22.6,rotation:3,x:361.2,y:236.6},0).to({_off:true},1).wait(8).to({_off:false},0).wait(1).to({regY:22.5,rotation:0,x:372,y:236.5},0).wait(11));
	this.timeline.addTween(Tween.get(instance_15).to({_off:false},3,Ease.get(-1)).wait(8).to({_off:true},1).wait(15).to({_off:false},2,Ease.get(-1)).wait(8).to({_off:true},1).wait(32));

	// body
	instance_17 = this.instance_17 = new lib.body();
	instance_17.setTransform(372,229,1,1,0,0,0,158,158);

	this.timeline.addTween(Tween.get(instance_17).wait(49).to({regY:158.1,rotation:3,x:371.6,y:229.1},0).wait(1).to({regY:158,rotation:5.7,x:371.3,y:228.9},0).wait(8).to({regY:158.1,rotation:3,x:371.6,y:229.1},0).wait(12));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(214,57.1,316,329.9);


// stage content:



(lib.pacman_fixed = function() {
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.PacmanMC();
	instance.setTransform(657.9,372.1,1,1,0,0,0,371.9,222.1);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(1140,567.1,316,329.9);

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;