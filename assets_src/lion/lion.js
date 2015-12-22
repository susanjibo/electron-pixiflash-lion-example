(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var Ease = cjs.Ease;
var Sprite = cjs.Sprite;
var MovieClip = cjs.MovieClip;
var Tween = cjs.Tween;
var Rectangle = cjs.Rectangle;
var Container = cjs.Container;
var Shape = cjs.Shape;

// library properties:




// symbols:



(lib.Image = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["lion_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new Sprite();



(lib.cleat_128 = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["lion_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new Sprite();



(lib.nathan_leftEye_cc = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["lion_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new Sprite();



(lib.nathan_rightEye_cc = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["lion_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new Sprite();



(lib.upperMouth = function() {
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// Layer 4
	shape = this.shape = new Shape();
	shape.graphics.f("#FD767A").s().p("Ap+jkIT9AAIp+HJg");
	shape.setTransform(0,-33.3);

	// Layer 3
	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#430002").s().p("AgxGuIAAtbIBjAAIAANbg");
	shape_1.setTransform(0.4,9.6,0.466,0.522);

	// Layer 1
	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#430002").s().p("AU6D1IhWgkIgdgNIl3iHIgzgQIjxg5IjogkQgUgDgrgEIhBgFIhAgEQgagCgnAAIhCgBIg/ABIiCAHQgrACgVADQh+ALh9AXIg8ALIg7AKQhNARgkAKQhTAUh8AnIhbAeQgVAGg9AXQhDAZhDAbIhzAyIAZgXQAigfAmgdQAxgmBFguQBRg0BTgqQBvg4BeglQASgHBjgjIA9gTIA+gRICDgeIBDgNIBFgKIBFgIICMgKQA1gCAQABQBlABAoADICMAOIBEAKICGAbIB/AiIA9AVIA8AUIA4AXQAxATA6AcIBhAxIBWAxICpByIAZAUIBHA8IAZAVg");
	shape_2.setTransform(-0.2,41.9,0.466,0.466);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#FFFFFF").s().p("Ap8pdIT8AAIDxS5Qpok3maAwQkGAdnZDsg");
	shape_3.setTransform(-0.2,4.4);

	this.addChild(shape_3,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-88.3,-56.3,176.4,121.4);


(lib.Tween12 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("Ap+DXIAAkHQDmiAEGgeQGZgvF3DgIAAD0g");
	shape.setTransform(0,0,1.046,1.046);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-66.8,-22.5,133.8,45.2);


(lib.Tween6 = function() {
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#430002").s().p("Al8D2QiCg4hkhmQCVAkChAAQEoAAD3h3QDyhyB+jCQgoEEjHCsQjLCvkKAAQiUAAiHg6g");
	shape.setTransform(93.1,19.1,0.655,0.655);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#430002").s().p("AlzCBQjHisgokEQB+DCDyByQD2B3EoAAQCiAACVgkQhkBmiCA4QiHA6iVAAQkKAAjKivg");
	shape_1.setTransform(-93,19.1,0.655,0.655);

	this.addChild(shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-133.1,-0.9,266.3,39.9);


(lib.Tween5 = function() {
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#430002").s().p("AiDBDQg3g3AAhMQAAgdAIgcIFlAAQAIAcAAAdQAABMg3A3Qg3A3hNAAQhMAAg3g3g");
	shape.setTransform(87.8,8,0.694,0.694);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFFF").s().p("AmrB7QiyirgHj4ITJAAQgHD4izCrQiyCuj5AAQj4AAiziug");
	shape_1.setTransform(94.8,20.3,0.694,0.694);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#430002").s().p("AiDBDQg3g3AAhMQAAgdAIgcIFlAAQAIAcAAAdQAABMg2A3Qg4A3hNAAQhMAAg3g3g");
	shape_2.setTransform(-87.8,8.1,0.694,0.694);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#FFFFFF").s().p("AmrB7QiyirgHj5ITJAAQgHD5iyCrQizCuj5ABQj4gBiziug");
	shape_3.setTransform(-94.9,20.3,0.694,0.694);

	this.addChild(shape_3,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-137.4,-0.4,274.9,41.4);


(lib.Tween2 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("AufDgQA3hIA+hEQBjhtCChIQB6hECJgdQCLgeCNACQCTAJCRAeQCPAfCCBCQCEBDBxBgICgCTg");
	shape.setTransform(0,0.2);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-92.8,-22.2,185.6,44.8);


(lib.t4 = function() {
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#D45D61").s().p("ApZHzQifg4hlhgQhqhjgdiAQgch5Ash/QgGBCAPA+QAcB4BkBeQBgBaCWA1QE9BvGGhaQGIhaDtjvQBwhvAvh8QAxiAgch6QgQhEgmg7QBoBkAdB+QAdCAgzCHQgyCBh2B3Qj6D8mdBfQi3AripAAQjRAAi5hBg");
	shape.setTransform(0.1,82.1);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFFF").s().p("AlDREQjwhEhSilQgeg+gBhrQgBhHAPiXQARivADhTQAGiZgTh5QgYiihMjeQhXkBgMg0QgiiSAvhQQA2hfC1gpQC8gsEPCeQD7CTD1EQQD3ERCNEjQCZE6gZDtQgYDpjRCgQi7CPkVAvQhtAShkAAQiUAAiGgmg");
	shape_1.setTransform(-14,-25.4);

	this.addChild(shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-100.9,-138.4,201.9,277);


(lib.t3 = function() {
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#D45D61").s().p("AiPIJQmehfj6j7Qh2h4gyiAQg0iHAeiBQAdh/BnhiQgmA7gPBEQgcB6AxCAQAvB8BwBuQDtDvGIBaQGGBaE9hwQCWg1BhhbQBkheAch4QAOg+gGhBQAtCAgcB3QgeCBhpBjQhmBgieA4Qi6BBjSAAQioAAi2gqg");
	shape.setTransform(0,82.1);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFFF").s().p("AinRYQkVgui7iPQjRiggYjpQgYjtCYk6QCNkjD2kSQD1kPD6iUQEQieC8ArQC0AqA3BeQAuBQghCSQgMA0hXEBQhMDfgYChQgSB5AGCaQADBSASCvQAOCXAABHQgBBrgfA+QhRCljwBFQiGAmiUAAQhkAAhugSg");
	shape_1.setTransform(14,-25.4);

	this.addChild(shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-100.9,-138.4,201.8,277);


(lib.t2 = function() {
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#D45D61").s().p("AXDKBQAoilhTizQhQiti2ihQi3ijkAh/QkKiEk0hKQkyhLkpgEQkegEjtA+QjsA9iWB2QibB6goClQgVBVAMBXQhLiwAnilQAqiuCkiAQCeh9D6hBQD5hBEuAEQE5AFFDBOQFFBOEYCLQEPCGDBCsQDACsBUC0QBXC+gqCuQgpCrihCAQA7hPAWhbg");
	shape.setTransform(0,-100.1);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFFF").s().p("AuiXrQkhhGhaiFQhMhxAwjHQAShMAsh3IBTjdQBwksAgjcQAZimgPjSQgIhxgijyQgejRgBhgQgCiTAuhTQB7jcF7hNQFlhIGpBQQG6BTEvDRQFTDrAvFBQAwFHjnGkQjUGGl+FlQl7FjmLC4Qk3CQj1AAQhaAAhRgTg");
	shape_1.setTransform(-18.5,27.7);

	this.addChild(shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-161,-181.2,322.1,362.4);


(lib.t1 = function() {
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#D45D61").s().p("A5HHbQgkivBdi6QBaiyDGimQDGilETh+QEdiBFHhEQFFhEE5AGQEuAGD4BJQD3BJCaCBQCfCGAlCvQAiCmhSCuQAQhZgShTQgjiniXh+QiSh7jrhFQjqhFkegGQkpgFk0BAQk2BBkOB7QkFB3i8CdQi7CahVCrQhZCxAjCmQATBbA4BRQidiEgkiug");
	shape.setTransform(0,-103.8);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFFF").s().p("ACpVkQmFjElvlvQlylyjImMQjZmsA6lEQA5lAFajfQE2jIG9hFQGrhCFjBUQF4BZB0DgQAsBUgHCTQgEBhglDPQgqDxgLBwQgWDSATCnQAZDcBmEvIBMDgQAoB4AQBOQAqDHhQBvQhfCCkjA9QhFAOhMAAQj+AAlDijg");
	shape_1.setTransform(14.1,27.6);

	this.addChild(shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-161.8,-182,323.7,364);


(lib.Symbol1 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#000000").s().p("Egv0AQbMAAAgg1MBfpAAAMAAAAg1g");

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-306.1,-105.1,612.3,210.2);


(lib.mane = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#CF481C").s().p("EgB5Aq0QibhLimhYQoVkbm8k8Qpsm8ljm+Qm8otAAoTQAAo3DgoIQDWn2GJmDQGKmDH9jUQIQjcJAAAQJBAAIPDcQH+DUGKGDQGIGDDYH2QDfIIAAI3QAAITm8ItQljG+ptG8Qm8E8oUEbQkKCNixBOg");
	shape.setTransform(0,-25.2);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-283.9,-304.8,567.8,559.3);


(lib.head = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FDBC74").s().p("EgVNAtTQpzjunim0QnkmzkIo2QkSpIgBqAQABp/ESpJQEIo0Hkm0QHimzJzjwQKJj3LEAAQLGAAKID3QJyDwHjGzQHjG0EJI0QETJJAAJ/QAAKAkTJIQkJI2njGzQnjG0pyDuQqID4rGAAQrEAAqJj4g");
	shape.setTransform(0,29.3,0.488,0.488);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-170.3,-124.3,340.7,307.3);


(lib.Path_3 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("ALFUYQCnjlBVkYQBXkagHkuQgGk2hqktQh3lSjhkNQjakEkfiiQkciik6gpQlEgqk1BeIA/gYQE4huFMAgQFAAgElCfQEnCfDgEHQDnEQB5FYQBwE8AAFGQABE9hmEkQhlEii9DlQjDDqkHCLQDsiZCqjpg");
	shape.setTransform(115.3,169);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,230.6,338.1);


(lib.Path_2_0 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("AEsRSQCbibBjjNQBjjOAfjoQAfjxgujwQg0kRiMjpQiJjhjJieQjHiejshEQjzhGj4AjIAzgKQD9gwD6BAQDxA9DPCdQDPCdCNDkQCRDrA1EWQAwD9gmD8QgkDzhxDUQhvDTitCZQiwCcjYBMQDEhaCeifg");
	shape.setTransform(78.9,135.5);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,157.7,271.1);


(lib.Path_2 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("AlRRjQitiZhvjTQhxjUgljzQglj8Awj9QA0kWCSjrQCNjkDPidQDPidDxg9QD6hAD9AwQAaAEAZAGQj4gjj0BGQjsBEjGCeQjKCeiIDhQiMDpg0ERQguDwAfDxQAfDoBjDOQBjDNCbCbQCeCfDEBaQjYhMiwicg");
	shape.setTransform(78.8,135.5);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,157.7,271.1);


(lib.Path_1_0 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("AHgSkQCgi7BdjtQBdjvAPkGQAOkNhIkMQhRktixj4QirjvjvigQjrifkOg4QkWg5kSA8IA4gQQEWhLEdAyQEUAwDzCeQD2CdCwDzQC3D6BSEzQBMEZgVEaQgUEThrD3QhrD1i0C5Qi3C+juBnQDWh1Cji/g");
	shape.setTransform(94.4,149.6);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,188.7,299.4);


(lib.Path_1 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("AoMSzQizi5hrj1Qhsj3gUkTQgUkaBLkZQBTkzC3j6QCwjzD1idQD0ieEUgwQEdgyEWBLIA4AQQkSg8kWA5QkOA4jrCfQjvCgirDvQixD4hREtQhIEMAOENQAPEGBdDvQBdDtCgC7QCiC/DXB1Qjuhni4i+g");
	shape.setTransform(94.3,149.6);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,188.8,299.4);


(lib.Path_0 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("Ar4UlQi9jlhlkiQhmkkABk9QABlGBvk8QB5lYDnkQQDgkGEnigQEkifFBggQFMggE4BuIA/AYQk1helEAqQk6ApkcCiQkfCijaEEQjhENh3FSQhpEtgHE2QgHEuBXEaQBVEYCnDlQCqDpDrCZQkHiLjCjqg");
	shape.setTransform(115.3,169);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0.1,0,230.6,338.1);


(lib.Path = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("AgbCeQg2gogehKQgehJAMhBQANhCAugSQAvgTAzAoQA3AoAdBKQAdBIgMBCQgLBCgvASQgPAGgPAAQgiAAgigbg");
	shape.setTransform(13.3,18.5);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,26.7,37.2);


(lib.ear = function() {
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#A07048").s().p("Ag+B8QgvgogGg7QgHg5AmgsQAmgsA5gDQA7gDAvAoIAAAAIiyDSg");
	shape.setTransform(27.3,26.4,3.751,3.751);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FDB173").s().p("AhmDJQhMhAgKhgQgKheA9hHQA8hIBfgFQBggFBMBBIABAAIkkFXg");
	shape_1.setTransform(18.5,43,3.751,3.751);

	this.addChild(shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-53.1,-33,143.4,152.1);


(lib.body = function() {
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#CF481C").s().p("AoSMSQoemyl+v7QAkg8BDhLQCGiWCehLQDbhpDqA8QEmBLEqFKQEMEqDIFwQA3BiBWCvQBNCeAkBAQA7BnA4A2QBBA+BPATQCnAnFAiWQhwBpi6BvQl0DflwAeQg4AFg3AAQnBAAmCk1g");
	shape.setTransform(299.2,-30.6,0.627,0.627,12.7,0,0,0.1,-0.1);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f().s("#FDBC74").ss(39.8).p("AtiU9QAqhNAihNQDhn6iVoAQiboOB/mLQA5ixBtiDQBoh+CMhHQCKhGCdgLQCcgKCcA1QCjA2CNB1QCWB8ByC3");
	shape_1.setTransform(113.4,105.5,1,1,0,0,0,-72.7,74.9);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#FFBC6C").s().p("A6kYwMAK9gxPMAgBgAQMAKLAxfg");
	shape_2.setTransform(-209.5,-6.3);

	this.addChild(shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-379.6,-223.9,759.3,408.6);


(lib.upperTeeth = function() {
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#E1FFA4").s().p("AgOB9QgQgPgPguQgVhAgGgLQgSgngbgHIBGgnQBTgoBLACQAJAxgEA5QgIBwhCAoQgSALgPAAQgMAAgLgKg");
	shape.setTransform(170.9,13.6);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#E1FFA4").s().p("AiXDDQgUgkAAhcQAAiBgDgXQgKhSgsgbIAqgLQA0gNA3gGQCtgVCHAvQgNBdgpBkQhRDGiMAiQgUAFgRAAQgvAAgVglg");
	shape_1.setTransform(22.9,38.6);

	this.addChild(shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,182.7,61.8);


(lib.upperMouthcanvas = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#59CA54").s().p("AgpF8Qs4ghp5klQhGgghfgXQgZgHo5iBIgDgBIgFABIjkABQhNAMheARQgaAFgdAQQgWAMgfAAQg6AAgMgWQgEgHABgJIABgIQAAhJBchGQAegXAbgLQAqgQgFgcIAQgGQA3gYA9gNMBT9ADfQidBDkHBXQoPCsoXBlQp5B3o4AAQhpAAhkgFg");
	shape.setTransform(272.1,39.2);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-12.6,0.7,569.4,77);


(lib.upperLipLiner = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#1A3C18").s().p("AgREbQkagNkLgpIiFgbIjEgtIgggJIgggJIh+gmQhLgaikg+QiTg2hQgZQjlhNjDgrIhigVIi5gaIhVgGQhjgCg4AEQhHAGg7ANQhtAZg9AuQgVAOgQARIgLANIAKgOQAOgQAWgSQA/gzBpgdQA7gRBJgJQA4gHBlgBQCyABDGAmQDRAoDfBGIBzAlIB0AoIDuBRQDxBKEOAtQEHApEVALQDzAKEqgRQD3gNEWglID5gmQDGgkAogIQDngvDJgvIBigZIEIhIQCsgyBogjQB2gnA6gVIA/gWIg9AaQhXAkhXAhQiGAziKAuQirA5i9AzQhDAUgjAIIhpAcIhvAaIg4AOIg6AMQhHARinAhQieAdhcANIhBAKInQAwQjGALiyABQhaAAhSgDg");
	shape.setTransform(284.7,28.6);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,569.5,57.2);


(lib.Tween1 = function() {
	var shape_23;
	var shape_22;
	var shape_21;
	var shape_20;
	var shape_19;
	var shape_18;
	var shape_17;
	var shape_16;
	var shape_15;
	var shape_14;
	var shape_13;
	var shape_12;
	var shape_11;
	var shape_10;
	var shape_9;
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.lf(["#C1790F","#F18420"],[0,1],0,-217.1,0,111.3).s().p("ALiZkQgynximn2Qjpq+mspmQobsBszpHIBzAtQCTA+CeBUQH9ELG5F+QJoIZGMKwQHvNfB2QhIrnBOQAIiUgZj4g");
	shape.setTransform(-171.1,37.4,0.828,0.791);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.lf(["#C1790F","#F18420"],[0,1],0,-152.8,0,175.6).s().p("EAGVAhWQAgiSAQj5QAgnxhToEQhzrTlEqMQmYszrMqZIBrA5QCHBNCPBkQHME/F1GrQINJVEXLUQFeOLg5Qjg");
	shape_1.setTransform(-298,-13.5,0.828,0.791);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.lf(["#C1790F","#F18420"],[0,1],0,-139.8,0,188.6).s().p("AHjb6QAcoBhZoSQh9rnlUqeQmstJrnqpIBuA6QCMBPCUBlQHdFGGEG1QIiJjEmLoQFwOlgwREIsDAEQAgiXANkAg");
	shape_2.setTransform(-90.9,-23.8,0.828,0.791);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.lf(["#C1790F","#F18420"],[0,1],0,-168.7,0,159.7).s().p("AkaeDQA/h6BLjXQCSmsA2nOQBMqHh9psQiasJnOq0IBPBDQBjBYBlBtQFDFeDdGuQE4JaBCKjQBTNNkzOTg");
	shape_3.setTransform(-44.4,-0.9,0.828,0.791);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.lf(["#C1790F","#F18420"],[0,1],0,-170.4,0,158).s().p("EgHeAhiQBPiGBgjtQDAnaBYoDQB6rRhkq7QiAtrnasZIBUBNQBpBnBrB/QFSGUDfHpQE5KuAhL3QAqO1mPPzg");
	shape_4.setTransform(66.7,0.5,0.828,0.791);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.lf(["#C1790F","#F18420"],[0,1],0,-147.9,0,180.5).s().p("EgE8AhqQBHiJBTjwQClngA8oGQBUrViLq2QittmoFsHIBYBLQBvBiBxB6QFqGID3HiQFeKiBKL1QBeOzlYQAg");
	shape_5.setTransform(9.9,-17.3,0.828,0.791);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.lf(["#C1790F","#F18420"],[0,1],0,-167,0,161.4).s().p("ALiZkQgynwinn3Qjoq+mspmQoasBs0pIIBzAuQCTA+CfBTQH7EMG6F+QJoIZGMKwQHvNfB2QhIrnBPQAIiUgZj5g");
	shape_6.setTransform(-142.7,-2.2,0.828,0.791);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.lf(["#C1790F","#F18420"],[0,1],0,-137.8,0,190.6).s().p("EAGVAhWQAgiSAQj5QAgnxhToEQhzrTlEqMQmYszrMqZIBrA5QCHBNCPBkQHME/F1GrQINJVEXLUQFeOLg5Qjg");
	shape_7.setTransform(-241.2,-25.3,0.828,0.791);

	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.lf(["#C1790F","#F18420"],[0,1],0,-187.6,0,140.8).s().p("ASuVsQi/nakynLQmrqApRoHQrnqIvEmiQCxAZEeBUQI7CmIbEjQLxGYJHJXQLYLrGgPvIq8DWQgiiShfjtg");
	shape_8.setTransform(-430.7,14.1,0.828,0.791);

	shape_9 = this.shape_9 = new Shape();
	shape_9.graphics.lf(["#C1790F","#F18420"],[0,1],0,-167,0,161.4).s().p("ALiZkQgynximn2Qjpq+mspmQobsBszpIIBzAuQCSA9CfBUQH9EMG5F+QJoIZGMKwQHvNfB2QhIrnBPQAIiUgZj5g");
	shape_9.setTransform(-328.7,-2.2,0.828,0.791);

	shape_10 = this.shape_10 = new Shape();
	shape_10.graphics.lf(["#C1790F","#F18420"],[0,1],0,-261.8,0,66.6).s().p("AYrQ4Qk9mtmomJQpRokrRmRQuHn0wfjsQC0gHEtAeQJcA9JdC8QNPEILcHhQOVJXKrOMIpwFNQhKiIiejWg");
	shape_10.setTransform(-453.3,72.8,0.828,0.791);

	shape_11 = this.shape_11 = new Shape();
	shape_11.graphics.lf(["#C1790F","#F18420"],[0,1],0,-137.8,0,190.6).s().p("EAGVAhWQAgiSAQj5QAfnyhSoDQhzrSlEqNQmYszrMqZIBqA5QCHBNCQBkQHME/F1GrQINJVEXLUQFdOLg4Qjg");
	shape_11.setTransform(-427.2,-25.3,0.828,0.791);

	shape_12 = this.shape_12 = new Shape();
	shape_12.graphics.lf(["#C1790F","#F18420"],[0,1],0,-217.1,0,111.3).s().p("ALiZkQgynximn2Qjpq+mspmQobsBszpHIBzAtQCTA+CeBUQH9ELG5F+QJoIZGMKwQHvNfB2QhIrnBOQAIiUgZj4g");
	shape_12.setTransform(367,37.4,0.828,0.791);

	shape_13 = this.shape_13 = new Shape();
	shape_13.graphics.lf(["#C1790F","#F18420"],[0,1],0,-152.8,0,175.6).s().p("EAGVAhWQAgiSAQj5QAgnxhToEQhzrTlEqMQmYszrMqZIBrA5QCHBNCPBkQHME/F1GrQINJVEXLUQFeOLg5Qjg");
	shape_13.setTransform(240.1,-13.5,0.828,0.791);

	shape_14 = this.shape_14 = new Shape();
	shape_14.graphics.lf(["#C1790F","#F18420"],[0,1],0,-139.8,0,188.6).s().p("AHjb6QAcoBhZoSQh9rnlUqeQmstJrnqpIBuA6QCMBPCUBlQHdFGGEG1QIiJjEmLoQFwOlgwREIsDAEQAgiXANkAg");
	shape_14.setTransform(447.2,-23.8,0.828,0.791);

	shape_15 = this.shape_15 = new Shape();
	shape_15.graphics.lf(["#C1790F","#F18420"],[0,1],0,-168.7,0,159.7).s().p("AkaeDQA/h6BLjXQCSmsA2nOQBMqHh9psQiasJnOq0IBPBDQBjBYBlBtQFDFeDdGuQE4JaBCKjQBTNNkzOTg");
	shape_15.setTransform(493.7,-0.9,0.828,0.791);

	shape_16 = this.shape_16 = new Shape();
	shape_16.graphics.lf(["#C1790F","#F18420"],[0,1],0,-170.4,0,158).s().p("EgHeAhiQBPiGBgjtQDAnaBYoDQB6rRhkq7QiAtrnasZIBUBNQBpBnBrB/QFSGUDfHpQE5KuAhL3QAqO1mPPzg");
	shape_16.setTransform(604.8,0.5,0.828,0.791);

	shape_17 = this.shape_17 = new Shape();
	shape_17.graphics.lf(["#C1790F","#F18420"],[0,1],0,-147.9,0,180.5).s().p("EgE8AhqQBHiJBTjwQClngA8oGQBUrViLq2QittmoFsHIBYBLQBvBiBxB6QFqGID3HiQFeKiBKL1QBeOzlYQAg");
	shape_17.setTransform(548.1,-17.3,0.828,0.791);

	shape_18 = this.shape_18 = new Shape();
	shape_18.graphics.lf(["#C1790F","#F18420"],[0,1],0,-167,0,161.4).s().p("ALiZkQgynwimn3Qjpq+mtpmQoasBszpIIBzAuQCSA+CgBTQH8EMG5F+QJoIZGMKwQHvNfB1QhIrmBPQAIiUgZj5g");
	shape_18.setTransform(395.4,-2.2,0.828,0.791);

	shape_19 = this.shape_19 = new Shape();
	shape_19.graphics.lf(["#C1790F","#F18420"],[0,1],0,-137.8,0,190.6).s().p("EAGVAhWQAgiSAQj5QAgnxhToEQhzrTlEqMQmYszrMqZIBrA5QCHBNCPBkQHME/F1GrQINJVEXLUQFeOLg5Qjg");
	shape_19.setTransform(297,-25.3,0.828,0.791);

	shape_20 = this.shape_20 = new Shape();
	shape_20.graphics.lf(["#C1790F","#F18420"],[0,1],0,-187.6,0,140.8).s().p("AStVsQi/nakxnLQmrqApRoHQroqIvDmiIB8AXQChAhCyA1QI7CmIbEjQLwGYJHJXQLZLrGhPvIq8DWQgjiShgjtg");
	shape_20.setTransform(107.4,14.1,0.828,0.791);

	shape_21 = this.shape_21 = new Shape();
	shape_21.graphics.lf(["#C1790F","#F18420"],[0,1],0,-167,0,161.4).s().p("ALiZkQgynximn2Qjpq+mspmQobsBszpIIBzAuQCSA9CfBUQH9EMG5F+QJoIZGMKwQHvNfB2QhIrnBPQAIiUgZj5g");
	shape_21.setTransform(209.4,-2.2,0.828,0.791);

	shape_22 = this.shape_22 = new Shape();
	shape_22.graphics.lf(["#C1790F","#F18420"],[0,1],0,-261.9,0,66.5).s().p("AYrQ3Qk9mtmnmJQpSokrRmRQuHn0wfjsICAAAQClAFC8ATQJbA9JeC8QNPEHLcHhQOVJXKrOMIpwFNQhJiHifjXg");
	shape_22.setTransform(84.9,72.9,0.828,0.791);

	shape_23 = this.shape_23 = new Shape();
	shape_23.graphics.lf(["#C1790F","#F18420"],[0,1],0,-137.8,0,190.6).s().p("EAGVAhWQAgiSAQj5QAfnyhSoDQhzrSlEqNQmYszrMqZIBqA5QCHBNCQBkQHME/F1GrQINJVEXLUQFdOLg4Qjg");
	shape_23.setTransform(111,-25.3,0.828,0.791);

	this.addChild(shape_23,shape_22,shape_21,shape_20,shape_19,shape_18,shape_17,shape_16,shape_15,shape_14,shape_13,shape_12,shape_11,shape_10,shape_9,shape_8,shape_7,shape_6,shape_5,shape_4,shape_3,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-654.9,-198.2,1309.8,396.6);


(lib.sun = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#F6E08B").s().p("EgOyAjBQm0i5lRlQQlQlRi5m1Qi/nEAAnuQAAnuC/nEQC5m0FQlRQFRlQG0i5QHEi/HuAAQHuAAHEC/QG1C5FRFQQFQFRC5G0QC/HEAAHuQAAHui/HEQi5G1lQFRQlRFQm1C5QnEC/nuAAQnuAAnEi/g");
	shape.setTransform(243.3,243.3);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,486.6,486.6);


(lib.splash = function(mode,startPosition,loop) {
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	var frame_44;
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	frame_44 = this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(44).call(frame_44).wait(1));

	// splash
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("AjHEkQgHgQgFgSIAPAWQgchuh4hbQh3hYhwABQgGAAgsAJQglAJgJgHQgdgSAQgXQAMgRAegOQAqgTBEAQIA2APQAgAJATACQgMg1iHgVQhIgJgggGQg3gIgUgNQgngaAOgTQANgSAxgEQAjgDAqARIBHAeQAxAOASgVQAKgMADgnQADgkAIgIQAQgNAvAcQAYAOAZAcIApAzQAzBBAvAKQAKhOApAOQAjANAgA9QANAbAeBHQAfA/AjAPQAoB2A3hCQAfglA2hwIAxhUQAkg0ApADQAeADADANQACAKgNAUIgbAlQgPAWgBANQAbgEAig1QAGgJA3hkQAmhGAbgbQAognAmAPQAuATgoAjQg2AjgKAIQgjAdgdApQgfAtgIAmQAngCA5g4QBJhHAQgJQAsgbAwgIQApgHA7AEQAgAwgfAUQgPAKg7AKQg/AKgfAOQgsAUgZAsQAeAGBRgXQBDgIAGBFQglAUhiAiQhZAfgyAkQgrAeg3A/Qg9BHgZAYQh5AYhzAAQhwAAhsgYg");
	shape.setTransform(-30,43.8);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFFF").s().p("Aj4FqQgIgUgGgVIASAbQgjiJiUhxQiVhtiKABQgIAAg3ALQgtALgMgIQgkgYAUgcQAPgVAlgRQA0gYBVAUIBDASQAnALAYAEQgPhCiogaQhZgMgogHQhEgKgZgRQgxgfASgYQAQgXA9gFQAsgEAzAWIBZAlQA9ASAWgaQANgPADgxQAEgtAKgJQAUgQA7AiQAdARAfAkIAzA/QA/BQA7ANQAMhhAzASQAsAPAnBMQARAiAlBZQAmBOAtATQAxCRBEhRQAmguBDiMIA9hoQAuhBAzAEQAkADAFARQACAMgRAZIghAuQgTAbgBARQAigGAqhBQAIgLBDh8QAwhXAigiQAxgxAwATQA5AYgyAsQhDAqgMAKQgsAkgkA0QgmA3gKAwQAwgDBHhFQBbhYATgMQA2ghA9gKQAygJBJAFQAoA8gmAZQgSAMhKANQhPAMgmARQg3AZgeA2QAlAIBlgcQBTgKAHBVQguAZh6ArQhvAmg+AtQg1AlhEBPQhMBYgfAdQiWAfiOAAQiNAAiGgfg");
	shape_1.setTransform(-30.8,36.1);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#FFFFFF").s().p("AkpGxQgJgXgIgbIAXAhQgrijixiHQiyiEilACQgJAAhBAOQg3ANgNgKQgrgcAWgiQASgaAugUQA9gdBmAZIBQAVQAvAOAcADQgShOjIgfQhrgOgwgJQhRgMgegTQg6gmAVgdQATgbBJgGQA1gEA9AZIBqAtQBJAVAagfQAQgSADg6QAFg2AMgLQAYgUBGApQAkAVAkAqIA+BMQBKBgBHAPQAOh0A9AVQA1ATAuBbQAUAoAtBqQAtBeA2AWQA7CvBRhiQAug3BQinIBJh9QA2hNA9AFQAsAEAFATQADAPgUAeIgoA2QgXAhAAAUQAogGAxhPQAKgNBRiUQA4hoApgpQA7g6A5AXQBEAcg7A0QhQA0gPALQg0AsgrA9QguBCgMA5QA6gDBVhTQBshpAXgOQBBgoBIgMQA8gKBYAGQAvBHgtAeQgWAPhZAPQhdAOgtAVQhCAeglBBQAtAJB4giQBkgMAIBmQg2AeiTAzQiEAuhKA1QhAAthRBeQhbBpglAjQizAkiqAAQioAAihgkg");
	shape_2.setTransform(-31.5,28.4);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#FFFFFF").s().p("AgNHUIgGgBQhnAHhigGQhsgGhngWIgLgcQg6gGg4gLQgIgUgGgWIAKAPIAKAPQgahfhZhVQglgkgwgiQhMg3hKgcQgZgDgYAAQgJgBg7AOQgwALgNgKQgYgQgCgSIgcAGQgYAHgQAAQgPABgHgEQgngbATgcQAOgWAmgRQAygZBWAVIAiAJQAlgEAxAKIACABQglg4ibgaQhQgLgsgJQhYgPgbgTQgzgiASgbQARgZBAgIQArgFA0ASQAWgJAkgEQAOgBAOAAQAiACAmAOIAjANQAJgTAEgpQAEgxAMgLQAWgSA+AiQAaANAaAaQAEgtALgLQAWgSA9AiQAQAIAPAMQAeADAhAMQBeAkAKABQAXAGATABQACgOADgIIAFgJIAAgBIAEgEQAQgMAjAOQAIgSAEgeQAEgZAGgOQAjgiBDAkQAjATAkAmQAKAIAwA2IAFAFQBLBVBEAOQAMg7AXgTQANgNAVAGQAQAFAQAPQAMgCAMAAQAUABAMAEQAKAFADAIQAEAMgRAaIgLAOIAJAVQAWgcAXgNQAVgjAyhaQA0hdAmglQA1g0A0ATQA+AXgyAtQhEArgLAJQgrAlgjA0QgNATgKASQgLAVgIATQALAFACAJQABAGgCAIQAggKApgkIATghQAig7AegiQAOgRAMgLQAUgTAUgIQAfgNAdAOQAUAJAHAMIATgDQAtgGA+AEIASACQAoA/gqAbQgVAPhOAOQgxAJgiAKQgZAHgRAIQgrAUgdAkQgLAOgKARQAbAIA+gNQALgKAMgHIAlghQAugpAOgIQA8ghBCgKIALgBIAIgLIAvg6IAEgDIABgBQA1gxA0AVIACACIAFACIAAAAIALAGIAGAFQAYgpATgYQAkgqAigDQANAAAMAEQA5AVg3AqQgyAbgZAMIgRAJQgYAQgWATQgFAJgKAJIgEADIgFADIgXAaIgKAMQAUAjgLAXQAWgSAbgbIAOgLQBmhbAcgJQA/ggBFgHQA6gFBRAJIANAUQAbAxgeAZQgQAQhJAQIgrALQAQAZADATQAEAZgWAQQgRAOhMAOIgDAAIgDABIgXAFIgVAFQAfAGA3gJQAagDAegGQBbgEAJBfQgrAlh5AwIAAAHQglAWhPAeQgsAZggAZQg8AuhOBYQhOBXgpAlIgIAHQhIAPhHAKIgWAUQg+ANg/AIIgfAEIgtAEgAJphLIgXAcIgHAIQAXgMAQgKQgBgMgCgKIgGAIgAJrhgIAEAMIACgCIAAgBIABgBIAMgRIAGgKQgNAIgMALgAryjfIAkAIIgKgEIgcgGIACACgANtkVIgJAGIAGAJIANgWIgKAHg");
	shape_3.setTransform(-35.3,32.7);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#FFFFFF").s().p("AC1GSQgIgNgGgPIAKATQgihPhahFQgUARgVAVQgyA1gfAYIgJAHQibAdiOgHQhOgEhLgPIgOgdIAKATQgTgrgjgoIgOACQhbAPhYgOQgFgLgDgOIAHAKIAGALQgQg3hBg2QgbgXgkgWIgYgOIgXAEQgiAHgKgHQgcgUALgVIABgCQg9gUg9ABQgIAAgoAKQgSAEgMAAQgLABgFgDQgbgSAKgTQAIgPAXgKQAdgRA2AOIApAKQAYAIANABQgVgth8gWQg5gJgfgIQg9gNgTgPQgjgZAMgUQAKgUArgHQAfgHAlAKQA9AVAEgEQARADANgCQAVgBALgOQALgNADgkQAEghAJgJQAQgOArAVQAWAJAYAVQAGADAiAkIARAQQAzARAEgEQAMADALgBQAQgtAeAEIAEgZQADgiAJgJQAPgPAqAVQAXAIAXAVQAHACAhAkIAPAOQAoAkAmADQANhIAnAJQAkAHAgAzIAHAJIAkg6QAkgwAnAAIARAAQgKgJAAgIIACgDQARgXAygIQARgDASAAIAIgNQAnhBAdgbQAmglAlALQAsAOgfAcQgrAbgFAFQgZAWgUAiIgHAMIAvAOIAqgsQARgMAHgCQApgSAkgBQAXgKAiAMIALACIALABIAEAJQAXANAaAVQAMAGAmAlIAEAEQA/A7A3AJQAOgnAVgMQAHgLALADQAUACAUAtQABAKAYA0QAJAPAOAJQAUAPAZAEQAGANAHAKQAeghAhABQAcABAFALQADAIgKARQgMATgFALQAQgEATgNQAVgPAbgeIAHgIIACgDIAYghQAng5AdgVIAGgEIAbgOIAKgCQAkgaAoAIQAbAFAJAMQAGANgIAUQgKAYgDAOQgJAVAEAOQAiACAmgqQAWAAA7hWIABgCQAfhDATglIgGABIgNAFIgNAFIglAbIgMAHQgrA1gWAMQAGgLAKgMQAKgTAagPQAbgZAjgRQAWgOAQgIQAVggAUgHQAHgCAHACQAWAGgJAMQAggIAjAAQAuAAA+AMIALAPQAWAkgQATQgFAPgtAQQgtARgSAWQgeAbgOAvQAYALAugCQATACAWgBQBCAGAJBHQgZAmhVAsIgrAeQgyAhglAiQguAog+BCQg7BAgnAdIgGAFQiFAgiLADQgjAngVAQIgBABQgtAJguAFQhVAMhRAAQhhAAhbgRg");
	shape_4.setTransform(-37.2,45.1);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#FFFFFF").s().p("AGfFyIgKgNIACAKQgigshGglQhLglhDAAQgGAAgVAEIgCAAQgUAEgIgDQgQgJACgKQABgIAJgHQAJgKAWAGIAPAEQAJACAFAAQgTgchEgRQgmgJgUgKQgagIgLgLQgRgNAAgMIABgCQAKgLAagEQATgEAZAFQAjAKAJgCQATADANgFQAQgLAGgSQAFgRAIgEQAMgHAaAKQAPAFAQAKQAIABAVASIADAEQAeAVAcABQAMgkAYACQAXACAUAWQANAFASAZQASATARgCIAEAHQAJAfAOghQADgZAMg4IABgFIAPgWQgPgQgNgQIgGgFQgEgKgVgEQgRgEgHgLQgQgUABgSQAAgJAEgIIADgKQAEgXAIgDQgGgEALADQABAAABAAQAAAAABAAQAAAAAAAAQAAAAgBgBQgTgTgsgLQgZgGgrgEIhXgIIgwgFIgRgEQgagKgHgHIABgCQAOgSAggJQAbgJAiACQAtAIASgBQAjAFAXgJQAOgFALgQQAHgIAIgEQAagKAmAPQAVAIAZAOQAOAFAcAUIAEABQAxAhAqAFQARgTARgHIAAAAIAEAGQAEAAAJgBQAMAAATgCQAjAmA/gWQASgGAXgMQAXgNAkgMQAUgCAigQQAfgNAjANQARAEAIAJQAIAJgBAMQAAAPAEAKQAAAOAGAJQAbAHAcgRQAbAGAqgqIABgBQAUg2AGghQAJgaAFgLIAEgFIgRACQgZACgTgDIgKAAQghAAgYAKQgXAAgGAJIgPAFQACgRAVgmIAJgDQA3gbAeAGQAkgEAnAHQAiAHAqAOIAIAJQASAXgCAPQAFANgQAPQgMASgBAUQgHAXAAAhQARANAcAGIAaAKQAoAQAJAwQgGAmgqAoIgXAaIg0A7QgfAigvAsQgpApgjAWIgFADQiVAqi9gLIgOgBIgFADIgQAIIgBAAQgfAQgiAfIgRAQQgWAXgQAJQgcAGgdADQhDAKg/AAQgrAAgqgFgAoqFKQgxgBgugHIgLgPIACAKQglgvhHgoQhAghgzgJIgcgEQgGgBgWADQgUACgHgFIgIgGQgZAKgaAAIgDAAIgCgGQgMgNgegPQgRgKgXgJQhEgjhLADIgeAFQgLADgHAAQgHAAgDgBQgRgJACgKQABgHAJgGQAIgIAVAGQgCAAARAFIANAEQgVgahGgOQghgHgTgHQgjgLgLgMQgTgNAGgNQAEgNAWgIQAQgIAVABQAfAGAEgHQAKgBAHgDQAMgCAGgJQAHgJAEgUQADgTAGgHQAKgKAXAHQAOACANAIQAGgCAUAPQAaATAagCQANgoAXAAQAVgBAUAVQAMAFATAZQAUAVAXAAQAIANAIAGQALgGAQgEIAMgCIAFgBQAXgaAig6QAMgPAWggQAWgbAYgEIAPgCQAFABACACQADACgEAHIgDAFIgEAHQgEAHADAEQARgGAUgbQALgKAfgxQAZgkATgRQAYgWAWADQAaAFgMAMIgQALQgIAJgGAOIgCAKQgLAPgGANQAJAEAQgTIAOgSQAKgFAFAAQAYgFAPAGQAMADAPAGIAFACQAHAZgSAMQgMAJgeAIIgiAMIgSAIQgSALgMAPIgJAOQAHAKAdgDQAYAFgDAlIgEAEIACACQAPAIAWAiIAIAKQANANAQgCQALATAOgEQAMAFAJgFQANgGAPgdIAPgVQANgNAQAJQAMAFABAJQAAAHgGAMIgNAYQgHANAAAJQAIACAJgIQAGgCAGgEQAGAGAegjQAQgOAPgGIAMgHIARgEQALgCAGAJQAIAGgDAJQAEAHgGAJQgQARADAHIgGANQgDAIgCAMQgGAVAGATQAbABAjgWQARgKAOgGQAUgNAKgBQAcgHAdgCQAaAAAhAFQAVAVgIAMQAAAHgUAIQgUAJgIAKQgNAQgGAXQAVALAlgCQAgAGgHAmQgPAKgdAMIgkANQgzARgmATQgdAOglAdQghAcgZAMIgGAEQhTAOhNAAIgYgBgAKmi7QAAgEACAAIACAGIgEgCg");
	shape_5.setTransform(-36.6,55.4);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.f("#FFFFFF").s().p("AIAFyQhvgEgfhDQATgMAngMIBFgUQBUgZACgtQgXgdgbgOQAmgoA8AWQA1AUAsA1IBrAlQA1AYgCAlIh9AkQgNALgcAAQh0AchOAAIgOAAgAuAEfQhugfBPiNIARgNQAGg9Amg0QAqg9AmAQIALgpQAJAGgUAwQgWA2AFAfQAFAcAaAVQAKAIAAADQAAAHgMAKQAMAGAXAIQAdAIAyAKQBLAPAhAeQA3AvgyAXQgeANhXAIIhLAGQgoACgfAAQg8AAgagIgAPQCUQgZgbgDg5QgEg8gbgeQgrg1hsgOQgegEhmAAIgoAAQAzg+CJAPIBwARQBCAKAkgDQhbhBASgzQASg1BtAeQAsAMBuBHQBiBAAzADQAIg3gagoQgRgegrgdIhFgvQgggcgBgfQBPAMBXBBQBZBCA0BUQA5BcgMBKQgOBXhqAuQhLAgiRAFIgXAAQiNAAgtgugA3nCXQgMgMgDgSQgDgYASgjQASgjApgtQA/hHBhhMIAKgJQBdhJAxgWIgzAeQAWAPgeAaQgaASgOAPQgKAIgFAHQgeAlgNAeQgQAlAAApQABAhAQAqIAWA2QAEAYgUALQgYANhGAEIgYAAQhMAAgbgZg");
	shape_6.setTransform(-35.5,63.7);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.f("#FFFFFF").s().p("AI3EuQh7gDgig3QAUgKAsgKIBNgPQBcgVADglQgagYgegLQArggBCARQA6ARAyArIB2AeQA7ATgCAfIiLAeQgPAJgeAAQh+AWhWAAIgTAAgAvhDqQh6gZBYhzIASgKQAHgzAqgqQAvgxAqANIAMghQAKAEgWAnQgZAsAGAZQAFAYAdAQQALAPgNAJIAmAKQAhAHA4AIQBTANAkAYQA9Ang4ASQggALhhAGQguAEgmABIhKACQhFAAgegHgAQ5B5QgcgWgDguQgFgxgdgZQgwgrh4gMQgggChyAAIgsAAQA5gzCXAMIB9AOQBIAIAogCQhkg2AUgqQAUgqB4AYQAxAKB6A6QBsA0A5ADQAJgtgdghQgTgYgwgYIhMgnQgjgXgBgZQBXAKBhA1QBiA2A5BEQBABLgNA9QgQBHh2AlQhTAbigAEIgbAAQibAAgygmgA6LB7QgNgJgDgPQgDgUATgcQAUgdAugkQBGg7Brg9QByhDA2gSIg4AZQAYALghAWQgdAPgQAMIgQAMQghAegOAZQgSAeAAAiQABAaASAiIAYAsQAFAUgXAJQgaAKhOADIgcABQhTAAgegVg");
	shape_7.setTransform(-35.5,69.3);

	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.f("#FFFFFF").s().p("AJuDqQiGgCglgrQAWgHAvgIIBVgMQBmgQADgdQgdgTghgHQAvgaBJAOQBAANA2AhICBAYQBBAOgCAZIiYAXQgRAHghAAQiGAQhdAAIgbAAgAxBC2QiGgUBghaIAUgHQAIgnAuggQAzgmAvALIAMgbQAMADgYAfQgcAhAGAUQAGASAgANQAMAFAAACQAAAEgPAHIArAIQAkAGA9AGQBbAJAoATQBDAfg9ANQgkAJhqAFQgyADgqABIhNAAQhPAAgigEgASjBeQgegRgEgkQgFgmgggSQg1ghiDgKQgkgCh9AAIgxAAQA/gmCmAIQAMAAB9ALQBPAHAsgCQhugqAWghQAWghCEAUQA1AHCGAtQB3ApA+ACQAKgjgfgaQgVgSg1gTIhTgeQgngSgBgUQBfAIBrAqQBsApA/A1QBFA6gOAvQgSA2iBAeQhbAVivADIgcAAQitAAg2gegA8uBgQgOgHgDgMQgEgPAVgXQAWgVAzgcQBNguB1gvIAMgGQBxguA7gOIg9ATQAaAJglARQgfAMgRAJIgSAJQgkAYgQATQgTAXAAAbQABAUATAaIAaAiQAGAPgZAHQgcAIhWACIgnAAQhUAAgggPg");
	shape_8.setTransform(-35.5,74.8);

	this.timeline.addTween(Tween.get({}).to({state:[{t:shape,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:-30,y:43.8}}]}).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape,p:{regX:3.2,regY:31.7,scaleX:1.726,scaleY:1.726,x:-26.8,y:75.5}}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[]},1).wait(35));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-108.3,12.1,156.7,63.4);


(lib.snakepose = function() {
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#669900").s().p("AsFGDQgLgegEg4QgGhxAqiFQAghhBThyQBoiNB/hHQCfhZCqAmQDJAuDNDiIHNhOInwDQQg2hWhWhCQiriDiiBpQihBpAcEOQAOCJAvBzg");
	shape.setTransform(79,43.2);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#F6E08B").s().p("AgNA8QgbgFgOgWQgOgWAGgYQAGgZAXgOQAXgOAYAGQAbAGAOAWQAOAWgGAXQgGAagXAOQgQAJgRAAQgGAAgIgCgAgpgTQgKAFgBANQgBALAHAOQAIANAMAGQAMAGAKgFQAHgFABgNQACgNgGgNQgIgMgMgGQgGgDgGAAQgFAAgEACg");
	shape_1.setTransform(160,19.6);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#F6E08B").s().p("AgFAcQADgNgHgMQgGgKgMgFQAFgJAJgEQAKgEAHACQAMADAHAKQAHAKgDAKQgDALgJAGQgIAFgHAAIgFAAg");
	shape_2.setTransform(174.7,12.4);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#F6E08B").s().p("AgIAsQADgUgKgSQgJgQgTgKQAHgNAPgGQAOgHAOAEQATAEAKAQQALAQgEAQQgFARgPAKQgMAIgMAAIgHgBg");
	shape_3.setTransform(168.8,15.3);

	this.addChild(shape_3,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,177.5,86.4);


(lib.rearLeg2 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#006633").s().p("AG0JiQgBgpgOgkQgnhrh6ghIgTAAQAIBmhWBlIABgcQgCgjgLgfQgdhNhOggIjtAAQAzn+kskDQhehRh1guQglgOgigJIgcgGQGGiwE8BpQD7BUDCECQCKC5BgD8IADAJQAtAoAcAuQBmCjiICiIABgcQgCgjgLgfQgdhNhPggIgeAAQAQB9hpB9g");
	shape.setTransform(75.3,64.4);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,150.7,128.8);


(lib.rearLeg1canvas = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#59CA54").s().p("AizItQA2omlCkUQhlhXh+gxQgogQglgKIgdgGQGji9FTBxQEOBaDREWQCVDEBmERQAhBVAXBSIARBCg");
	shape.setTransform(78.2,55.7);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,156.3,111.5);


(lib.pond = function() {
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#D0AFE5").s().p("EgjcANOQwWhGsnh/QsniAm7ikQnKirAAi6QAAi6HKiqQG7ilMnh/QMnh/QWhGQQ7hIShAAQShAAQ8BIQQWBGMoB/QMmB/G7ClQHKCqAAC6QAAC6nKCrQm7CksmCAQsoB/wWBGQw8BIyhAAQyhAAw7hIg");
	shape.setTransform(605,115.9);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#B86A2B").s().p("EgkxAO9Qw+hPtFiQQtGiQnLi6QnbjBAAjTQAAjSHbjBQHLi6NGiQQNFiQQ+hPQRkhRTNAAQTOAARkBRQQ+BPNFCQQNGCQHLC6QHbDBAADSQAADTnbDBQnLC6tGCQQtFCQw+BPQxkBRzOAAQzOAAxjhRg");
	shape_1.setTransform(605,103.9);

	this.addChild(shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,1210,207.8);


(lib.nostrilscanvas = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#59CA54").s().p("ABICBQgkgkAHg6QAHg4AuguQAuguA7gHQA6gHAjAkQAkAjgHA5QgIA5gtAuQguAug6AIIgTABQgtAAgegegAiUCXQhAgIgzgzQgzgzgIg+QgIhAAogoQAngoBAAIQBBAIAzA0QAzAzAIA+QAIBAgoAnQghAigyAAIgVgCg");
	shape.setTransform(32.5,16);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,64.9,31.9);


(lib.nathan_rightEye = function() {
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.nathan_rightEye_cc();
	instance.setTransform(0,0,0.599,0.599);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,104.8,72.5);


(lib.nathan_leftEye = function() {
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.nathan_leftEye_cc();
	instance.setTransform(0,16.8,0.372,0.46,-15);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,77.2,70.6);


(lib.horizon = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#F6E08B").s().p("Ehj/AA2IAAhrMDH+AAAIAABrg");
	shape.setTransform(640,5.5);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,1280,11);


(lib.grassforeground = function() {
	var shape_11;
	var shape_10;
	var shape_9;
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#5A5114").s().p("EgwxAbWQNs2oSXu9QOssAQ9mkQMJktMEhhQGDgxDnALQ1JF5yGMfQucJ/r5NsQofJzmWKsQjLFWhfDZg");
	shape.setTransform(717.1,444.2,0.813,0.813);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#5A5114").s().p("Egd/AwuQCX6WJ71iQH7xLMWtYQI2pjKMmqQFFjWDVhbQwaOkqyTKQomPVkpRgQjWMjhAMYQghGNALDsg");
	shape_1.setTransform(362.1,386.3,0.813,0.813);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#5A5114").s().p("EgXHA1OQhI6bHA2pQFmyFKhu4QHeqpJOn8QEnj+DHh3QuWQnoLUZQmgQTiUSBQhpM3AoMaQAUGNApDpg");
	shape_2.setTransform(521.8,302.3,0.813,0.813);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#5A5114").s().p("EgYNA2lQg+7OHY3RQF5ylK8vPQHxq5JjoIQEykDDNh5Qu5Q/ojU9Qm1QvigShQhzNPAkMzQASGZAoDwg");
	shape_3.setTransform(261.2,286,0.813,0.813);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#5A5114").s().p("Ar2HBQBVw2GQvBQEbqvGfouQDPkXCWiOQpQRRjGTXQigPeBhQJQBFLhC9KtQBfFWBRDCItCC8QmK2zBr1Fg");
	shape_4.setTransform(202.7,323.4,0.813,0.813);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#5A5114").s().p("AsAIiQAry6GQxGQEesPGzqFQDalDChimQpgTyikV1QiARcCcR/QBxM2D2L0QB8F6BkDWIucD7QoA5OA23sg");
	shape_5.setTransform(75.2,614.2,0.813,0.813,0,0,0,15.1,355.1);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.f("#5A5114").s().p("AtRH2QBfy3HAw1QE+sBHQpxQDok4CoigQqXTWjeVtQizRVBsSFQBNM6DUL/QBrF+BbDbIunDSQm55jB43og");
	shape_6.setTransform(134.3,296.5,0.813,0.813);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.f("#5A5114").s().p("Egd/AwuQCX6WJ61iQH8xLMWtYQI2pjKMmqQFFjWDVhbQwaOkqyTKQomPVkpRgQjWMjhAMZQghGMALDsg");
	shape_7.setTransform(326.4,321.3,0.813,0.813);

	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.f("#5A5114").s().p("EgXHA1OQhI6cHA2oQFmyFKhu5QHeqnJOn+QEnj9DHh3QuWQmoLUaQmgQTiUSAQhpM4AoMaQAUGOApDog");
	shape_8.setTransform(450.3,284.4,0.813,0.813);

	shape_9 = this.shape_9 = new Shape();
	shape_9.graphics.f("#5A5114").s().p("EgomAm0QIW5GOmypQLru8PFqLQKznQLckKQFuiFDkgoQzUKbu5QKQr4M8okP+QmHLcj1L1Qh7F7gsDog");
	shape_9.setTransform(688.7,348,0.813,0.813);

	shape_10 = this.shape_10 = new Shape();
	shape_10.graphics.f("#5A5114").s().p("Egd/AwuQCX6WJ61iQH8xLMWtYQI2pjKMmqQFFjWDVhbQwaOkqyTKQomPVkpRgQjWMjhAMZQghGMALDsg");
	shape_10.setTransform(560.4,321.3,0.813,0.813);

	shape_11 = this.shape_11 = new Shape();
	shape_11.graphics.f("#5A5114").s().p("EgXHA1OQhI6cHA2oQFmyFKhu5QHeqnJOn+QEnj9DHh3QuWQmoLUaQmgQTiUSAQhpM4AoMaQAUGOApDog");
	shape_11.setTransform(684.3,284.4,0.813,0.813);

	this.addChild(shape_11,shape_10,shape_9,shape_8,shape_7,shape_6,shape_5,shape_4,shape_3,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,970.8,649.9);


(lib.frontLeg2 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#006633").s().p("AD+FlQgBgYgIgVQgYhChQgSIgBAAQAGA8gzA9IABgRQgBgUgHgSQgSgwgzgSIiCAAQAdkniuiXQg3gvhEgbIg6gSQGei6EAFYQBQBsA4CSIADAIQAZAXAQAaQA7BfhPBfIAAgRQgBgUgGgSQgSgwgzgSIgLAAQAKBKg+BKg");
	shape.setTransform(43.8,37.7);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,87.7,75.4);


(lib.frontLeg1canvas = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#59CA54").s().p("AhnFFQAfk/i7igQg8gzhJgdIg+gTQG8jIEUFyQBWBxA8CfIAqCIg");
	shape.setTransform(45.5,32.5);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,91,65);


(lib.Path_9 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#0E0E0E").s().p("A9hCpQsPhGAAhjQAAhiMPhHQMPhGRSAAQRTAAMPBGQMPBHAABiQAABjsPBGQsPBHxTAAQxSAAsPhHg");
	shape.setTransform(267.4,24.1);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,534.8,48.1);


(lib.Path_1_1 = function() {
	var shape_1;
	this.initialize();

	// Layer 1
	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#0E0E0E").s().p("A8RFFQgPhVIIibQIHiZLuiHQLsiGIdgkQIdgkAPBVQAPBVoHCbQoICZruCGQrsCHodAkQigAKhyAAQkPAAgLg7g");
	shape_1.setTransform(181.1,38.4);

	this.addChild(shape_1);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-0.1,362.2,77);


(lib.Path_1_2 = function() {
	var shape_2;
	this.initialize();

	// Layer 1
	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#FFA034").s().p("ABmKeQhghXgTiyQgHg9AAhdIAAiSIgFhMIgDgBQhYgRgChZQgCg2AYgwQhAAXhEgDQhzgFgShcQgJguAogjQAigdAwgJQAygJAzAeQAcAQA2AyQALAKgLAKQgKALgLgKQgxgsgPgLQgpgcgmADQgdADgXAJQgdAMgMAWQgOAaAIAcQAIAdAaAMQAwAYBFgJQA8gHA2gbQAMgGAHAKQAHAJgIAKQgZAfgNAoQgPAtALAiQAMAjAjAOIAOAEIgBgcQgFhQAFg2QAEgvAIgkQgXgcgTgqQgdg+gNhQQgljjBqAKQA8AHAPBaQACANAAAmQAOgmAFgJQAqhWA2AEQAlADAeAhQAfAgABAlQACA5gvAsQAjgHAXAAQBLgBANBLQAMBFg8AjQgZAQgbADQAVAYANAkQAdBRgoA2QgyBBg9gzQgkgggSgrIgKAXQgRAqgQAZQghA1goAKQADA8ABAbIgBCKQAABWAHA8QATCpBaBRQALAKgLAKQgFAGgGAAQgFAAgFgFgAAAhmQAAAlACA+QALgEAJgJQAcgbAXgxQAYg5ANgbQAEgJAKACQALABACAKQANA7AaAcQAaAbAggGQAhgHAHgmQAJgugWgxQgUgtgigPIgNgFQgNgGADgNQADgOAOAEIAPAFQASAFASAAQAcgBAVgOQAcgTAGgjQAGgmgbgVQgagVg2ALQg7ASgYAEQgMACgFgLQgGgMAMgGQAzgcAZgkQAhgwghgrQgXgegXgFQgagHgXAdQgYAegUAxIgeBVQgEAMgNgBQgNgBABgOQAEhGgDgsQgHhRgmgIQgwgKgFBNQgDAtAMBBQARBlAsBIIAGAJQAUg5ArgfQAEgDAFABQAGAAADAEQAhAjARAfQAZAvgRAeQgPAaggAHQgfAHgagQQgNgHgMgLQgHAuAABIgAAPj/QAkAqAfgJQAqgMgVgwQgMgbgZgdQgiAdgRA2g");
	shape_2.setTransform(36.4,67.5);

	this.addChild(shape_2);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,72.9,135.1);


(lib.Path_4 = function() {
	var shape_1;
	this.initialize();

	// Layer 1
	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFA034").s().p("ADmCVQgfAAgrgLQgOgDADgOQAEgPAOAEQAjAIAWACQAhACAXgIQAdgMABgpQAAgpgegNQgjgOg2AUQgmAPgqAfQg2ApgeANQguAWgxgKQhrgUhXhEQgmgcgRgeQgWgnAPgnQALgeAegNQAegMAeALQBDAYA8BHQA/BJAEBFIgBAEIABAAQAfgCAcgRQAVgLAggZQA8gsA9gTQBYgcAfA3QARAhgBAjQgBAqgfARQgdAPgnAAIgFAAgAg/BhIAAgDQgEhBhThTQgngngpgSQg8gagNA4QgKAvA5AtQAqAiA6AWIA8AWQASAGAPACIAAAAg");
	shape_1.setTransform(33.6,15);

	this.addChild(shape_1);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,67.2,30);


(lib.canvas = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFA034").s().p("Ehj/A4QMAAAhwfMDH+AAAMAAABwfg");
	shape.setTransform(640,360);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,1280,720);


(lib.ClipGroup = function() {
	var instance;
	this.initialize();

	// Layer 2 (mask)
	var mask = new Shape();
	mask._off = true;
	mask.graphics.p("Ehj/A4PMAAAhweMDH/AAAMAAABweg");
	mask.setTransform(681.3,395.7);

	// Layer 3
	instance = this.instance = new lib.Image();
	instance.setTransform(0,0,2.256,2.003);

	instance.mask = mask;

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(41.3,35.7,1280,720);


(lib.eyeball = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("Ai7UiQkBgkjgiDQjniHiijYQiijYhBkEQg/j8Amj/QAlkBCCjgQCHjoDYiiQDZiiEEhAQD7g/EAAlQEAAmDgCCQDoCHChDZQCiDYBBEEQA+D7gkD/QglECiDDfQiGDnjZCiQjYCikFBBQidAnigAAQhdAAhggOg");
	shape.setTransform(132.9,132.9);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,265.8,265.8);


(lib.elephantcanvas2 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#92728A").s().p("EhljA50MAAAhzmMDLHAAAMAAABzmg");
	shape.setTransform(650,370);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,1300,740);


(lib.elephantcanvas = function() {
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#92728A").s().p("EgB2AhDQmvgYmAi9Qlyi2kVk1QkUk1iLmFQiQmTAYmsQAZmvC9l/QC1lzE2kUQE2kVGEiLQAtgQAugOQFohvF8AWQGvAYGAC9QFyC2EVE1QETE1CMGFQCQGTgZGsQgYGvi8F/Qi3Fzk1EUQkaD8lcCKIhEAaQlYB7lsAAQg8AAg/gEg");
	shape.setTransform(354.7,245.6);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#92728A").s().p("AO2RwQhJgGgxgKQh/gYiJg+QhLghg9gjQhLgrg7goQiDhYiEhxQhwhhiGiHQjMjMjykdQhhh0kMlHQiMish0iIIhjhvIEljsIBbCAQBVB7CODYICUDiQBeCPBIBqQDSE0CrDUQBvCMBlBrQByB5ByBfQA1AtBBAuQAyAkBGAqQB+BIBxAiQAoANBKAPIA1AHIA0AFQBRAEBcgMQBBgLAtgNIAmgLIglAQQgzATg5AQQhaAWhWAFIg2ABIg5gDg");
	shape_1.setTransform(777.1,138.3);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#92728A").s().p("AvzZZMAAAgywIfnAAMgOdAywg");
	shape_2.setTransform(106.4,411.4);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#92728A").s().p("Ar2I5QiihZhziQQhviKg0irQgzipAPiwQAPi4BWikQBWioCRh3QCLhzCug3QCtg2C1AOQC7APCmBXIAdAPIAdAPIQmIqItVZsg");
	shape_3.setTransform(722.4,399.3);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#92728A").s().p("AufRLIAD0NQAFi5BLinQBIijB/h9QCAh8CkhFQCqhGC3AAQC9gBCsBKQCmBHCBCAQCACBBGCnQBJCtAAC9IABAiQAAATgBAOIgDSvg");
	shape_4.setTransform(267.1,457);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#92728A").s().p("EgkYgEuI2FAAIgnq5QgKgyABhPQACifA4iOQCynDKGhtUAI/gBhAprgF+QU3i/TEisMAOEBGoMhbDAR3g");
	shape_5.setTransform(304,559.4,1,1,0,0,0,-75,276.1);

	this.addChild(shape_5,shape_4,shape_3,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,915.4,573.9);


(lib.eleeye = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#191827").s().p("AhOIjQjKhyh4jxQh3jvAhjjQAgjjCmhQQCmhPDJByQDKByB3DyQB4DvghDjQghDiimBQQhEAghKAAQhrAAh1hDg");
	shape.setTransform(49.5,61.5);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,99,123);


(lib.crociris = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#191827").s().p("ABhCYIgWgcIgPgVIgIgMIgJgMIgRgaIgRgbIgQgaQgMgRgHgIIgIgNIgJgNIhIhlQAHgCANgBQALAAALACIAOACIAOAEQAIACAYALQAWAOAIAGIAeAbQAKAKAQAXQAHAKAOAaIAOAjIAHAlQABAIAAAZQgBAUgCAIIgGAWIgGATg");
	shape.setTransform(7.2,17.9,1,1,15);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,17.3,35.6);


(lib.CleatTextureMC = function() {
	var instance;
	this.initialize();

	// cleat 128
	instance = this.instance = new lib.cleat_128();
	instance.setTransform(-147.5,-147.5,2.305,2.305);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-150,-147.5,300,295);


(lib.bar = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#000000").s().p("EgSlBM5MAAAiZxMAlLAAAMAAACZxg");
	shape.setTransform(119,492.1);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,238.1,984.3);


(lib.arc = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#F6E08B").s().p("AgCCTQlxgIkEg4QkDg4ABhGQABguB3gmQgpAXAAAZQAAA9DgAuQDgAvE9AFQE7AGDhgoQDhgoAAg8QAAgZgpgYQgogYhKgUQCYAcBWAkQBXAlAAAoQgCBGkGAtQjfAnkrAAIhqgBg");
	shape.setTransform(89,14.8);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,178.1,29.7);


(lib.uvela = function() {
	var shape;
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.Path();
	instance.setTransform(21.3,55.8,1,1,0,0,0,13.3,18.5);
	instance.alpha = 0.801;

	shape = this.shape = new Shape();
	shape.graphics.f("#FD767A").s().p("AjoPFQhzh1AAijQAAhQAyheQAcgzBYh8QASgaAtg3QAlg2AAg9QAAofh9j4QhkjGivAAQh9AAiWBjQgvAfgrAlQFOkqFNhLQEXhAELBfQC+BECkCNQBSBGAsA5Qkoi8i2BMQiTA9hADlQgwCqACDuQACC1ASA9QARA3AwA7QAbAhAsAxQBZBxAfA7QAxBZAABYQAACjhzB1Qh1B1iiAAQigAAhzh1g");

	this.addChild(shape,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-84.8,-108.2,169.6,216.5);


(lib.Tween8 = function() {
	var instance_1;
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.ear();
	instance.setTransform(176.9,28.1,0.986,1.046,0,0,180,45.1,29.2);

	instance_1 = this.instance_1 = new lib.ear();
	instance_1.setTransform(-171,33.9,1.046,1.046,0,0,0,45,30);

	this.addChild(instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-273.7,-37,547.6,164.1);


(lib.Tween7 = function() {
	var instance_1;
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.ear();
	instance.setTransform(176.9,38.1,0.986,1.046,0,0,180,45.1,29.2);

	instance_1 = this.instance_1 = new lib.ear();
	instance_1.setTransform(-171,43.9,1.046,1.046,0,0,0,45,30);

	this.addChild(instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-273.7,-27,547.6,164.1);


(lib.Group_1 = function() {
	var instance_2;
	var instance_1;
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.Path_0();
	instance.setTransform(115.3,169,1,1,0,0,0,115.3,169);
	instance.alpha = 0.5;

	instance_1 = this.instance_1 = new lib.Path_1();
	instance_1.setTransform(138.4,173.5,1,1,0,0,0,94.3,149.6);
	instance_1.alpha = 0.398;

	instance_2 = this.instance_2 = new lib.Path_2();
	instance_2.setTransform(154.8,177.2,1,1,0,0,0,78.8,135.5);
	instance_2.alpha = 0.301;

	this.addChild(instance_2,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0.1,0,233.6,338.1);


(lib.Group = function() {
	var instance_2;
	var instance_1;
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.Path_3();
	instance.setTransform(118.3,169,1,1,0,0,0,115.2,169);
	instance.alpha = 0.5;

	instance_1 = this.instance_1 = new lib.Path_1_0();
	instance_1.setTransform(95.4,173.5,1,1,0,0,0,94.4,149.6);
	instance_1.alpha = 0.398;

	instance_2 = this.instance_2 = new lib.Path_2_0();
	instance_2.setTransform(78.9,177.2,1,1,0,0,0,78.9,135.5);
	instance_2.alpha = 0.301;

	this.addChild(instance_2,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,233.7,338.1);


(lib.userflower = function() {
	var instance_1;
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.Path_4();
	instance.setTransform(33.5,80.2,1,1,0,0,0,33.5,15);

	instance_1 = this.instance_1 = new lib.Path_1_2();
	instance_1.setTransform(39.8,67.6,1,1,0,0,0,36.4,67.5);

	this.addChild(instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,76.2,135.1);


(lib.upperMouth_1 = function() {
	var upperMouth_canvas;
	var instance;
	this.initialize();

	// Layer 2
	instance = this.instance = new lib.upperLipLiner();
	instance.setTransform(284.7,51.9,1,1,0,0,0,284.7,28.6);

	// Layer 1
	upperMouth_canvas = this.upperMouth_canvas = new lib.upperMouthcanvas();
	upperMouth_canvas.setTransform(294.2,38.9,1,1,0,0,0,278.4,38.9);

	this.addChild(upperMouth_canvas,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0.7,572.6,79.8);


(lib.sky = function() {
	var sky_texture;
	var sky_canvas;
	this.initialize();

	// canvas
	sky_canvas = this.sky_canvas = new lib.canvas();
	sky_canvas.setTransform(640,360,1,1,0,0,0,640,360);
	sky_canvas.alpha = 0.75;

	// texture
	sky_texture = this.sky_texture = new lib.ClipGroup();
	sky_texture.setTransform(635.7,357,1,1,0,0,0,676.9,392.6);

	this.addChild(sky_texture,sky_canvas);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-41.2,-35.6,1353.8,785.1);


(lib.ripple = function(mode,startPosition,loop) {
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	instance = this.instance = new lib.arc();
	instance.setTransform(89,14.8,1,1,0,0,0,89,14.8);

	this.timeline.addTween(Tween.get(instance).to({scaleX:1.42,scaleY:1.42,y:19.8,alpha:0},9).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,178.1,29.7);


(lib.rightEyecanvas = function() {
	var shape;
	var instance_1;
	var instance;
	this.initialize();

	// userEye
	instance = this.instance = new lib.nathan_leftEye();
	instance.setTransform(32.5,23.9,1,1,0,0,0,38.6,35.2);

	// cartoonEyeball
	instance_1 = this.instance_1 = new lib.crociris();
	instance_1.setTransform(41.4,22.3,0.803,0.803,0,0,0,8.6,17.8);

	shape = this.shape = new Shape();
	shape.graphics.f("#FFFF99").s().p("AhtC3QhVgXgchHQgchGAuhLQAthMBdgkQBaglBVAXQBWAYAcBGQAcBGguBJQgtBNhdAlQg5AXg1AAQghAAghgJg");
	shape.setTransform(31.8,25.3);

	this.addChild(shape,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-6.1,-11.3,77.2,70.6);


(lib.lowerheadbumptexture = function() {
	var instance_18;
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
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.CleatTextureMC();
	instance.setTransform(22.1,27,0.183,0.183,60.6);

	instance_1 = this.instance_1 = new lib.CleatTextureMC();
	instance_1.setTransform(52.2,53.6,0.221,0.221,43.6);

	instance_2 = this.instance_2 = new lib.CleatTextureMC();
	instance_2.setTransform(93.3,82.8,0.298,0.298,43.6);

	instance_3 = this.instance_3 = new lib.CleatTextureMC();
	instance_3.setTransform(526.9,107.5,0.014,0.014,-10.2);

	instance_4 = this.instance_4 = new lib.CleatTextureMC();
	instance_4.setTransform(523.3,108.6,0.019,0.019,-10.3);

	instance_5 = this.instance_5 = new lib.CleatTextureMC();
	instance_5.setTransform(518.5,110.2,0.026,0.026,-7.5);

	instance_6 = this.instance_6 = new lib.CleatTextureMC();
	instance_6.setTransform(511.4,112.7,0.038,0.038,-7.5);

	instance_7 = this.instance_7 = new lib.CleatTextureMC();
	instance_7.setTransform(501.3,115.9,0.06,0.06,-1.3);

	instance_8 = this.instance_8 = new lib.CleatTextureMC();
	instance_8.setTransform(487,119.9,0.069,0.069,-1.3);

	instance_9 = this.instance_9 = new lib.CleatTextureMC();
	instance_9.setTransform(469.5,124.2,0.09,0.09,-1.3);

	instance_10 = this.instance_10 = new lib.CleatTextureMC();
	instance_10.setTransform(449.8,128.8,0.102,0.102,-1.3);

	instance_11 = this.instance_11 = new lib.CleatTextureMC();
	instance_11.setTransform(144.5,115.7,0.289,0.289,28.9);

	instance_12 = this.instance_12 = new lib.CleatTextureMC();
	instance_12.setTransform(196.6,135.5,0.258,0.258,17.9);

	instance_13 = this.instance_13 = new lib.CleatTextureMC();
	instance_13.setTransform(244.4,143.9,0.247,0.247,6.7);

	instance_14 = this.instance_14 = new lib.CleatTextureMC();
	instance_14.setTransform(295.7,146,0.224,0.224,6.7);

	instance_15 = this.instance_15 = new lib.CleatTextureMC();
	instance_15.setTransform(339.6,147.4,0.209,0.209,-1.3);

	instance_16 = this.instance_16 = new lib.CleatTextureMC();
	instance_16.setTransform(364.1,143.1,0.171,0.171,-1.3);

	instance_17 = this.instance_17 = new lib.CleatTextureMC();
	instance_17.setTransform(398.9,138.8,0.144,0.144,-1.3);

	instance_18 = this.instance_18 = new lib.CleatTextureMC();
	instance_18.setTransform(427.2,132.7,0.133,0.133,-1.3);

	this.addChild(instance_18,instance_17,instance_16,instance_15,instance_14,instance_13,instance_12,instance_11,instance_10,instance_9,instance_8,instance_7,instance_6,instance_5,instance_4,instance_3,instance_2,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-14.6,-9.7,543.9,194.1);


(lib.leftEyecanvas = function() {
	var shape;
	var instance_1;
	var instance;
	this.initialize();

	// userEye
	instance = this.instance = new lib.nathan_rightEye();
	instance.setTransform(34,31.1,0.729,0.926,18.5,0,0,52.5,36.3);

	// cartooneye
	instance_1 = this.instance_1 = new lib.crociris();
	instance_1.setTransform(46.1,30.8,1,1,0,0,0,8.6,17.8);

	shape = this.shape = new Shape();
	shape.graphics.f("#FFFF99").s().p("AhSDDQhqgtg0hZQgzhXAihRQAjhSBkgZQBkgaBpAuQBqAtA0BZQAzBYgjBRQgiBRhjAZQgkAJglAAQhAAAhFgdg");
	shape.setTransform(36.2,30.2);

	this.addChild(shape,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-13,-12.9,93.8,87.9);


(lib.frontLeg1 = function() {
	var frontLeg1_canvas;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// toenails
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFCC").s().p("AAdB8QgBgWgHgTQgVg+hMgQIAviSIAdAVQAeAcAUAhQBABjhVBmg");
	shape.setTransform(54.4,63.8);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFCC").s().p("AAiCSQgBgagIgWQgZhJhagTIA4isIAhAaQAkAgAYAmQBLB1hkB4g");
	shape_1.setTransform(71,64.2);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#FFFFCC").s().p("AAdB8QgBgWgHgTQgVg+hMgQIAviSIAdAVQAeAcAUAhQBABjhVBmg");
	shape_2.setTransform(86.4,63.8);

	// frontLeg1-canvas
	frontLeg1_canvas = this.frontLeg1_canvas = new lib.frontLeg1canvas();
	frontLeg1_canvas.setTransform(45.5,32.5,1,1,0,0,0,45.5,32.5);

	this.addChild(frontLeg1_canvas,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,94.3,81);


(lib.flowers = function() {
	var instance_7;
	var instance_6;
	var instance_5;
	var instance_4;
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.userflower();
	instance.setTransform(608.3,135.2,1,0.958,0,-18,0,38.1,67.5);
	instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 224, 139, 0)];
	instance.cache(-2,-2,80,139);

	instance_1 = this.instance_1 = new lib.userflower();
	instance_1.setTransform(40.1,101.3,1.052,0.678,0,0,0,38.1,67.6);
	instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 224, 139, 0)];
	instance_1.cache(-2,-2,80,139);

	instance_2 = this.instance_2 = new lib.userflower();
	instance_2.setTransform(360.2,83.2,1.022,0.822,0,0,180,38.1,67.5);
	instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 224, 139, 0)];
	instance_2.cache(-2,-2,80,139);

	instance_3 = this.instance_3 = new lib.userflower();
	instance_3.setTransform(211.3,134.5,1.155,1.155,0,0,0,38.1,67.5);
	instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 224, 139, 0)];
	instance_3.cache(-2,-2,80,139);

	instance_4 = this.instance_4 = new lib.userflower();
	instance_4.setTransform(1101.5,107.5,1,0.958,0,-18,0,38.1,67.5);
	instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 224, 139, 0)];
	instance_4.cache(-2,-2,80,139);

	instance_5 = this.instance_5 = new lib.userflower();
	instance_5.setTransform(533.4,73.6,1.052,0.678,0,0,0,38.1,67.6);
	instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 224, 139, 0)];
	instance_5.cache(-2,-2,80,139);

	instance_6 = this.instance_6 = new lib.userflower();
	instance_6.setTransform(853.5,55.5,1.022,0.822,0,0,180,38.1,67.5);
	instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 224, 139, 0)];
	instance_6.cache(-2,-2,80,139);

	instance_7 = this.instance_7 = new lib.userflower();
	instance_7.setTransform(704.5,124,1,1,0,0,0,38.1,67.5);
	instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 224, 139, 0)];
	instance_7.cache(-2,-2,80,139);

	this.addChild(instance_7,instance_6,instance_5,instance_4,instance_3,instance_2,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,1159.7,212.6);


(lib.eyebumptexture = function() {
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
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.CleatTextureMC();
	instance.setTransform(58.2,47.2,0.036,0.036,178.4);

	instance_1 = this.instance_1 = new lib.CleatTextureMC();
	instance_1.setTransform(50.2,47.2,0.036,0.036,178.4);

	instance_2 = this.instance_2 = new lib.CleatTextureMC();
	instance_2.setTransform(65.9,46.2,0.041,0.041,178.4);

	instance_3 = this.instance_3 = new lib.CleatTextureMC();
	instance_3.setTransform(42.6,45.5,0.055,0.055,-167.3);

	instance_4 = this.instance_4 = new lib.CleatTextureMC();
	instance_4.setTransform(32.8,42.3,0.075,0.075,-167.3,0,0,0.4,16.9);

	instance_5 = this.instance_5 = new lib.CleatTextureMC();
	instance_5.setTransform(77.1,45.1,0.055,0.055,-179.8);

	instance_6 = this.instance_6 = new lib.CleatTextureMC();
	instance_6.setTransform(89.9,45.1,0.055,0.055,-179.8);

	instance_7 = this.instance_7 = new lib.CleatTextureMC();
	instance_7.setTransform(88.8,39.3,0.055,0.055,143.2);

	instance_8 = this.instance_8 = new lib.CleatTextureMC();
	instance_8.setTransform(83.6,28.6,0.055,0.055,143.2);

	instance_9 = this.instance_9 = new lib.CleatTextureMC();
	instance_9.setTransform(76.7,20.9,0.055,0.055,125.8);

	instance_10 = this.instance_10 = new lib.CleatTextureMC();
	instance_10.setTransform(67.8,16.2,0.065,0.065,110.8);

	instance_11 = this.instance_11 = new lib.CleatTextureMC();
	instance_11.setTransform(57.5,12.9,0.067,0.067,110.8);

	instance_12 = this.instance_12 = new lib.CleatTextureMC();
	instance_12.setTransform(46.9,11.9,0.066,0.066,83.6);

	instance_13 = this.instance_13 = new lib.CleatTextureMC();
	instance_13.setTransform(34,15.2,0.068,0.068,49.6);

	instance_14 = this.instance_14 = new lib.CleatTextureMC();
	instance_14.setTransform(23.4,24.4,0.085,0.085,30.7);

	instance_15 = this.instance_15 = new lib.CleatTextureMC();
	instance_15.setTransform(16.9,40.5,0.098,0.098,9.4);

	this.addChild(instance_15,instance_14,instance_13,instance_12,instance_11,instance_10,instance_9,instance_8,instance_7,instance_6,instance_5,instance_4,instance_3,instance_2,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0.3,0.2,99.9,57);


(lib.elephantshock = function(mode,startPosition,loop) {
	var shape_2;
	var elephant_canvas_2;
	var shape_1;
	var instance_1;
	var instance;
	var shape;
	var frame_17;
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	frame_17 = this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(17).call(frame_17).wait(1));

	// shocked eye
	shape = this.shape = new Shape();
	shape.graphics.f("#191827").s().p("Ah8DXQhsgfhthbQgigdgegfIgXgZQFDDHEqjHQBeg8BQhfQAogvAWgjQiyHLkRAAQgxAAg1gPg");
	shape.setTransform(882,312.9,3.33,3.33);

	instance = this.instance = new lib.eleeye();
	instance.setTransform(802.2,281.8,1,1,0,0,0,49.5,61.5);
	instance._off = true;

	this.timeline.addTween(Tween.get({}).to({state:[{t:shape}]}).to({state:[{t:instance}]},4).to({state:[{t:instance}]},10).to({state:[{t:instance}]},3).wait(1));
	this.timeline.addTween(Tween.get(instance).wait(4).to({_off:false},0).wait(10).to({scaleX:0.37,scaleY:0.37,x:807.1,y:289.8},3,Ease.get(1)).wait(1));

	// Layer 4
	instance_1 = this.instance_1 = new lib.eyeball();
	instance_1.setTransform(870,250.7,1.241,1.241,0,0,0,132.9,132.9);
	instance_1._off = true;

	this.timeline.addTween(Tween.get(instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1},3,Ease.get(1)).wait(1));

	// Layer 1
	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#F6E08B").s().p("AuZPDQnNi5julJQhviagqijQgqiiAhicQAiidBRhIQBNhFCkgeQBpgTE7gZQF/gdELghQI3hHG3jmQDchzBphkIM3dLQsuFmrmArQhkAFhgAAQoUAAmziug");
	shape_1.setTransform(371.8,578.3);

	elephant_canvas_2 = this.elephant_canvas_2 = new lib.elephantcanvas2();
	elephant_canvas_2.setTransform(650,370,1,1,0,0,0,650,370);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#FFFFFF").s().p("Ai7UiQkBgkjgiDQjniHiijYQiijYhBkEQg/j8Amj/QAlkBCCjgQCHjoDYiiQDZiiEEhAQD7g/EAAlQEAAmDgCCQDoCHChDZQCiDYBBEEQA+D7gkD/QglECiDDfQiGDnjZCiQjYCikFBBQidAnigAAQhdAAhggOg");
	shape_2.setTransform(870,250.7);

	this.timeline.addTween(Tween.get({}).to({state:[{t:elephant_canvas_2},{t:shape_1}]}).to({state:[{t:elephant_canvas_2},{t:shape_2},{t:shape_1}]},4).wait(14));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,1300,740);


(lib.drinkingzebra = function() {
	var instance;
	var shape_46;
	var shape_45;
	var shape_44;
	var shape_43;
	var shape_42;
	var shape_41;
	var shape_40;
	var shape_39;
	var shape_38;
	var shape_37;
	var shape_36;
	var shape_35;
	var shape_34;
	var shape_33;
	var shape_32;
	var shape_31;
	var shape_30;
	var shape_29;
	var shape_28;
	var shape_27;
	var shape_26;
	var shape_25;
	var shape_24;
	var shape_23;
	var shape_22;
	var shape_21;
	var shape_20;
	var shape_19;
	var shape_18;
	var shape_17;
	var shape_16;
	var shape_15;
	var shape_14;
	var shape_13;
	var shape_12;
	var shape_11;
	var shape_10;
	var shape_9;
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#191827").s().p("Ah2EYQh0gxgwh1Qgvh0Axh0QAyh1B1gvQB0gvB0AyQB0AxAvB2QAwBzgyB0QgxB1h2AvQg5AXg4AAQg7AAg7gag");
	shape.setTransform(113.7,132.5);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFFF").s().p("Aj9g0IIEhdIAiC5IpQBqQgChfAshng");
	shape_1.setTransform(441.4,158.1,1,1.227);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#191827").s().p("Ak6gFQgDgbgCgiIJQhqIAvD+In7Bbg");
	shape_2.setTransform(443.7,184.4,1,1.227);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#191827").s().p("AhCg8QCBhyCMgaIA4E0IoFBdQA8iVCEhwg");
	shape_3.setTransform(441.8,126.8,1,1.227);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#FFFFFF").s().p("AkOgrIH6hbIAjDDImdBKg");
	shape_4.setTransform(452.1,211.1,1,1.227);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#191827").s().p("AjrhuIGdhLIA6FEIkFAvg");
	shape_5.setTransform(461.4,241.4,1,1.227);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.f("#FFFFFF").s().p("AkqgwIHqhYQBNBVAeBXIo0Blg");
	shape_6.setTransform(260.6,189.4,1,0.826);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.f("#191827").s().p("AkihMII1hlQALAhAFAYIgmDRInxBZg");
	shape_7.setTransform(263,207.2,1,0.826);

	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.f("#191827").s().p("AkRiWQCLgYCXA/QCVA9BsB3InrBYg");
	shape_8.setTransform(252.4,172.3,1,0.826);

	shape_9 = this.shape_9 = new Shape();
	shape_9.graphics.f("#FFFFFF").s().p("Aj4g0IHxhaIgoDRImlBMg");
	shape_9.setTransform(263.4,226.4,1,0.826);

	shape_10 = this.shape_10 = new Shape();
	shape_10.graphics.f("#191827").s().p("AjSh7IGlhMIhAFZIkrA2g");
	shape_10.setTransform(263.2,248.5,1,0.826);

	shape_11 = this.shape_11 = new Shape();
	shape_11.graphics.f("#FFFFFF").s().p("AjBpyQCQBDBVBWICeNsQg0BuhvByg");
	shape_11.setTransform(434.3,103.5);

	shape_12 = this.shape_12 = new Shape();
	shape_12.graphics.f("#FFFFFF").s().p("AjvtSQBbAFBqAVIEaYtQhcA6hTAjg");
	shape_12.setTransform(387.8,112);

	shape_13 = this.shape_13 = new Shape();
	shape_13.graphics.f("#FFFFFF").s().p("AkBtoIDFgiIE+b2Ig1AKQhAAMhQAJg");
	shape_13.setTransform(338.6,119);

	shape_14 = this.shape_14 = new Shape();
	shape_14.graphics.f("#FFFFFF").s().p("AB1KcQhDgygugoIjn0OIC7ggIEMXZIhvhRg");
	shape_14.setTransform(240,120.2);

	shape_15 = this.shape_15 = new Shape();
	shape_15.graphics.f("#FFFFFF").s().p("AAsNCIkp6BIDFgjIE2bFQh4gKhagXg");
	shape_15.setTransform(288.9,123.6);

	shape_16 = this.shape_16 = new Shape();
	shape_16.graphics.f("#191827").s().p("Ah1AAQhej8g9lUIE4g2IDpUNQjzjxiTmWg");
	shape_16.setTransform(213.1,113.2);

	shape_17 = this.shape_17 = new Shape();
	shape_17.graphics.f("#191827").s().p("Ak0tyQBVgMBOgDQBFgDBPAEIEyakQhMAhhBAVQhJAYhUASg");
	shape_17.setTransform(363.3,116.6);

	shape_18 = this.shape_18 = new Shape();
	shape_18.graphics.f("#191827").s().p("AkNsWQCnAdCSBTIDiTmQhtCBiTBWg");
	shape_18.setTransform(410.4,108.6);

	shape_19 = this.shape_19 = new Shape();
	shape_19.graphics.f("#191827").s().p("AAEN7Ik27FIEng0IE+byQhjALhbAAQg6AAg3gEg");
	shape_19.setTransform(313.9,121.2);

	shape_20 = this.shape_20 = new Shape();
	shape_20.graphics.f("#191827").s().p("AgRLKIkN3aIEUgwIEpaBQiLglilhSg");
	shape_20.setTransform(264.6,123.7);

	shape_21 = this.shape_21 = new Shape();
	shape_21.graphics.f("#191827").s().p("Ah4m2QBcBUA5BoQA7BpAWB3QAqDsh0Dlg");
	shape_21.setTransform(450.1,99.9);

	shape_22 = this.shape_22 = new Shape();
	shape_22.graphics.f("#191827").s().p("AgfBNQgjAAgPgYQgPgXANgfQAOggAigWQAigWAhAAQAjABAPAYQAQAXgOAeQgNAhgjAWQggAWggAAIgDgBg");
	shape_22.setTransform(122.2,150.3);

	shape_23 = this.shape_23 = new Shape();
	shape_23.graphics.f("#F6E08B").s().p("Ah2EYQh1gxgvh2QgvhzAyh0QAxh0B1gwQB0gvB0AxQB1AyAvB1QAvB0gyB0QgxB0h2AvQg5AYg4AAQg7AAg7gag");
	shape_23.setTransform(115,134.9);

	shape_24 = this.shape_24 = new Shape();
	shape_24.graphics.f("#FFFFFF").s().p("ArmE9QgXg7gEg2IW7pNIBICyI3EJRQgVgggPglg");
	shape_24.setTransform(154.1,117);

	shape_25 = this.shape_25 = new Shape();
	shape_25.graphics.f("#191827").s().p("ApPFsQiCgphKhxIXEpRIBzEgIxlHFQhGAahGAAQg9AAg9gUg");
	shape_25.setTransform(163,134.5);

	shape_26 = this.shape_26 = new Shape();
	shape_26.graphics.f("#191827").s().p("AqmC5QBChtB7gxIAfgOIRCm0IBnEBI27JOQgNiCBDhtg");
	shape_26.setTransform(150.4,95);

	shape_27 = this.shape_27 = new Shape();
	shape_27.graphics.f("#FFFFFF").s().p("AnEERIgPgkIg0iDIPImFIBHCzIvHGEg");
	shape_27.setTransform(165.1,219.1);

	shape_28 = this.shape_28 = new Shape();
	shape_28.graphics.f("#FFFFFF").s().p("AoHBpIPImEIBHCyIvIGFg");
	shape_28.setTransform(146.9,173.7);

	shape_29 = this.shape_29 = new Shape();
	shape_29.graphics.f("#191827").s().p("AjdE4QjHhThRjAIPNmHQBDDLhTC/QhUDFjEBPQhgAnhgAAQhmAAhngrg");
	shape_29.setTransform(170.5,243.8);

	shape_30 = this.shape_30 = new Shape();
	shape_30.graphics.f("#191827").s().p("AobA4IPImFIBvEWIvIGFg");
	shape_30.setTransform(156,196.5);

	shape_31 = this.shape_31 = new Shape();
	shape_31.graphics.f("#191827").s().p("AosiMIRGhNIATAuIvJGFg");
	shape_31.setTransform(136.1,162.4);

	shape_32 = this.shape_32 = new Shape();
	shape_32.graphics.f("#FFFFFF").s().p("AkbgTIAAgBQA0h3BzgxQB0gxBuAwQBwAxArB2QAqB1gzB2IgBABg");
	shape_32.setTransform(56.9,98.3);

	shape_33 = this.shape_33 = new Shape();
	shape_33.graphics.f("#191827").s().p("AnNggIABgCQBUjBC8hQQC7hQC0BQQC2BPBGDAQBFC+hUDBIgCABg");
	shape_33.setTransform(46.2,94.4);

	shape_34 = this.shape_34 = new Shape();
	shape_34.graphics.f("#279ED9").s().p("AoPJAQkFmuBgk7QBhk+IJkDQECiBDyhDQBnCrBUDqQCnHVhgE6QhgE+mrDdQjUBujCAwQiXiYiDjXg");
	shape_34.setTransform(121.9,94.3);

	shape_35 = this.shape_35 = new Shape();
	shape_35.graphics.f("#FFFFFF").s().p("AiFApQg6gzAAhMIAAgBIF+gEIABAAQABBMg4A0Qg4A3hPAAIgCAAQhNAAg4gzg");
	shape_35.setTransform(59,150.3);

	shape_36 = this.shape_36 = new Shape();
	shape_36.graphics.f("#191827").s().p("AjYBCQhchTgCh8IAAgBIJsgHIABAAQABB7haBXQhaBYiBABIgEAAQh9AAhahUg");
	shape_36.setTransform(52.8,152.2);

	shape_37 = this.shape_37 = new Shape();
	shape_37.graphics.f("#757575").s().p("Aj6g0IH2haIgpDQImqBNg");
	shape_37.setTransform(304.5,218.3);

	shape_38 = this.shape_38 = new Shape();
	shape_38.graphics.f("#574C43").s().p("AjVh6IGrhOIhBFZIkwA3g");
	shape_38.setTransform(304.2,245.1);

	shape_39 = this.shape_39 = new Shape();
	shape_39.graphics.f("#574C43").s().p("AlRlxQBigRBxAcQBrAcBhBAQBkBBBDBXQBIBdAUBjIglDQIn2Bag");
	shape_39.setTransform(299.6,175.3);

	shape_40 = this.shape_40 = new Shape();
	shape_40.graphics.f("#757575").s().p("AkMgrIH2hbIAjDDImYBKg");
	shape_40.setTransform(408.4,199.1);

	shape_41 = this.shape_41 = new Shape();
	shape_41.graphics.f("#574C43").s().p("AjphuIGZhKIA6FDIkAAug");
	shape_41.setTransform(417.7,223.8);

	shape_42 = this.shape_42 = new Shape();
	shape_42.graphics.f("#574C43").s().p("Ak4DwQgQhlAjhxQAihoBJhfQBIhfBfhAQBihDBpgSICGLpIn2Bbg");
	shape_42.setTransform(399.9,152.8);

	shape_43 = this.shape_43 = new Shape();
	shape_43.graphics.f("#FFFFFF").s().p("AhgABIAoh3QBTBFBGBIIggBgQhMhAhVg2g");
	shape_43.setTransform(479.9,103);

	shape_44 = this.shape_44 = new Shape();
	shape_44.graphics.f("#191827").s().p("AiygFQhjgZhcgMIhIgIIArjAQHvBaFZETIgnB4QkKirk7hNg");
	shape_44.setTransform(429.9,78.7);

	shape_45 = this.shape_45 = new Shape();
	shape_45.graphics.f("#191827").s().p("AiShnIAghgQB6CDBSCSQApBLAQAvQiBirikiEg");
	shape_45.setTransform(501.2,125.4);

	shape_46 = this.shape_46 = new Shape();
	shape_46.graphics.f("#191827").s().p("AATC5QhwgfgrhFQgshGAYhyQAIgkAOgkIALgdIAgACQAlAFAlAJQBvAfArBFQArBGgYByQgMA5gUAsQgwgBg5gPg");
	shape_46.setTransform(518.3,151.2);

	instance = this.instance = new lib.Path_1_1();
	instance.setTransform(463.2,251.5,1,1,9.7,0,0,181.1,38.4);
	instance.alpha = 0.301;

	this.addChild(instance,shape_46,shape_45,shape_44,shape_43,shape_42,shape_41,shape_40,shape_39,shape_38,shape_37,shape_36,shape_35,shape_34,shape_33,shape_32,shape_31,shape_30,shape_29,shape_28,shape_27,shape_26,shape_25,shape_24,shape_23,shape_22,shape_21,shape_20,shape_19,shape_18,shape_17,shape_16,shape_15,shape_14,shape_13,shape_12,shape_11,shape_10,shape_9,shape_8,shape_7,shape_6,shape_5,shape_4,shape_3,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,648.2,319.9);


(lib.drinkingelephant = function() {
	var shadow;
	var shape_13;
	var shape_12;
	var shape_11;
	var shape_10;
	var shape_9;
	var instance;
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// fore
	shape = this.shape = new Shape();
	shape.graphics.f("#F6E08B").s().p("AgzD6QhhgzgfhnQgghmAzhiQAzhiBngiQBlgiBhAyIAAAAIjzHWIABABIgBgBg");
	shape.setTransform(819.1,390.9);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#F6E08B").s().p("AgyD7QhhgzghhoQgghnAzhhQAzhiBngiQBmgiBhAyIABABIjzHVIABABIgBAAg");
	shape_1.setTransform(767.4,490.4);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#F6E08B").s().p("AizBgQgghlAzhjQAzhiBnghQBlgjBhAzIAAAAIjzHVIABABQhigzgfhog");
	shape_2.setTransform(793.3,440.6);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#F6E08B").s().p("AkICEIAAgCQAAhuBOhLQBNhMBtAAQBuAABNBMQBOBLAABuIAAACg");
	shape_3.setTransform(314.6,553.6);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#F6E08B").s().p("AkICFIAAgCQAAhuBOhMQBNhNBtAAQBuAABNBNQBOBLAABuIAAADg");
	shape_4.setTransform(202.4,553.6);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#F6E08B").s().p("AkICEIAAgCQAAhuBOhLQBNhMBtAAQBuAABNBMQBOBLAABuIAAACg");
	shape_5.setTransform(258.5,553.6);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.f("#191827").s().p("Ah8DXQhsgfhthbQgigdgegfIgXgZQFDDHEqjHQBeg8BQhfQAogvAWgjQiyHLkRAAQgxAAg1gPg");
	shape_6.setTransform(275.3,221.8);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.f("#F6E08B").s().p("AlhFzQiyhIhch+QhYh6Aah5QANg9AfgcQAegaA/gMQAogHB6gJQCTgMBngNQDZgbCphYQBVgsAognIE9LNQk5CKkeAQQgnACglAAQjLAAinhCg");
	shape_7.setTransform(143.3,369.2);

	// Layer 5
	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.f("#74596F").s().p("AJHaTQE2kUC2lzQC8mAAZmuQAYmtiQmSQiLmFkUk1QkVk2lyi2Ql+i8mugZQl/gWloBvIBEgZQGTiQGuAYQGvAZF+C8QFyC2EVE2QEUE1CLGFQCQGSgYGtQgZGui8GAQi2Fzk2EUQk1EUmFCLQgsAQgtAPQFaiKEaj8g");
	shape_8.setTransform(438.5,235.3);

	// mid
	instance = this.instance = new lib.elephantcanvas();
	instance.setTransform(458.7,286.9,1,1,0,0,0,457.7,286.9);

	// rear
	shape_9 = this.shape_9 = new Shape();
	shape_9.graphics.f("#191827").s().p("AjGBmQAahAAogyQB/imDdAaIgEBrQhFgOhYATQiuAkhgChQAFgWAMghg");
	shape_9.setTransform(939.7,226.6);

	shape_10 = this.shape_10 = new Shape();
	shape_10.graphics.f("#191827").s().p("ABFAEQiQhmi5AnIA0gYQBBgZBBgGQDOgSCFCzIhSBGQgkg8hKg1g");
	shape_10.setTransform(947.4,248.7);

	shape_11 = this.shape_11 = new Shape();
	shape_11.graphics.f("#191827").s().p("AAxAuQg2ipishNIA4ALQBDASA2AiQCyBsAADeIhrAIQAHhGgdhVg");
	shape_11.setTransform(937.7,265.8);

	shape_12 = this.shape_12 = new Shape();
	shape_12.graphics.f("#74596F").s().p("AufRJIAD0KQAFi5BLioQBIiiB/h9QCAh8CkhEQCqhHC3AAQC9AACsBKQCmBGCBCBQCACBBGCnQBJCtAAC+IABAgQAAATgBANIgDStg");
	shape_12.setTransform(256.3,439.2);

	shape_13 = this.shape_13 = new Shape();
	shape_13.graphics.f("#74596F").s().p("AufRIIAD0JQAFi4BLipQBIiiB/h8QCAh8CkhEQCqhHC3AAQC9AACsBJQCmBHCBCBQCACBBGCnQBJCuAAC9IABAfQAAATgBAOIgDSrg");
	shape_13.setTransform(556.5,433.3);

	shadow = this.shadow = new lib.Path_9();
	shadow.setTransform(489.2,554.7,1,1,0,0,0,267.4,24.1);
	shadow.alpha = 0.301;

	this.addChild(shadow,shape_13,shape_12,shape_11,shape_10,shape_9,instance,shape_8,shape_7,shape_6,shape_5,shape_4,shape_3,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(1,0,972.6,578.7);


(lib.drinkelephant = function(mode,startPosition,loop) {
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// water-ripple
	instance = this.instance = new lib.ripple();
	instance.setTransform(143,573.9,1,1,0,0,0,90,9.5);

	this.timeline.addTween(Tween.get(instance).to({_off:true},9).wait(9));

	// water-ripple2
	instance_1 = this.instance_1 = new lib.ripple();
	instance_1.setTransform(143,573.9,1,1,0,0,0,90,9.5);
	instance_1._off = true;

	this.timeline.addTween(Tween.get(instance_1).wait(6).to({_off:false},0).to({_off:true},9).wait(3));

	// elephant
	instance_2 = this.instance_2 = new lib.drinkingelephant();
	instance_2.setTransform(143,573.9,1,1,0,0,0,66.8,573.9);

	this.timeline.addTween(Tween.get(instance_2).to({scaleY:1.03},8).to({scaleY:1},9).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(53,0,996.7,594.1);


(lib.CrocodileEyesMC = function() {
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	var rightEye_canvas;
	var leftEye_canvas;
	var texture_container1;
	var texture_container2;
	this.initialize();

	// texture-mask (mask)
	var mask = new Shape();
	mask._off = true;
	mask.graphics.p("AtqErIAAgXQAAixCDh6QCCh9C3AAQC1AACDB+QCCB9AACwIAAAUgACCBNIAAgUQAAiRBuhpQBthpCZAAQCZAABuBqQBtBqAACTIAAAQg");
	mask.setTransform(87.5,29.9);

	// texture
	texture_container2 = this.texture_container2 = new lib.eyebumptexture();
	texture_container2.setTransform(137.6,21.1,0.893,0.893,0,0,180,50.1,28.6);
	texture_container2.filters = [new cjs.ColorFilter(0, 1, 0, 1, 0, 0, 0, 0)];
	texture_container2.cache(-2,-2,104,61);

	texture_container1 = this.texture_container1 = new lib.eyebumptexture();
	texture_container1.setTransform(43.4,37.8,1,1,0,0,0,50.1,28.6);
	texture_container1.filters = [new cjs.ColorFilter(0, 1, 0, 1, 0, 0, 0, 0)];
	texture_container1.cache(-2,-2,104,61);

	texture_container2.mask = texture_container1.mask = mask;

	// userEyes
	leftEye_canvas = this.leftEye_canvas = new lib.leftEyecanvas();
	leftEye_canvas.setTransform(46.6,39.8,0.983,0.853,-11,0,0,36.1,29.9);

	rightEye_canvas = this.rightEye_canvas = new lib.rightEyecanvas();
	rightEye_canvas.setTransform(135.5,24.8,1.114,0.897,0,0,0,31.6,24.9);

	// cartoonEyes
	shape = this.shape = new Shape();
	shape.graphics.f("#191827").s().p("AhGC0IAAlmIAKAAQA3AAAlA1QAnA1AABIQAABIgnA2QgmA2g3AAg");
	shape.setTransform(61.9,42.4,0.792,0.792);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#F6E08B").s().p("Al1C/IAAgVQAAiVBthoQBvhrCZAAQCaABBvBrQBtBqAACWIAAARg");
	shape_1.setTransform(49.5,41.6,0.792,0.792);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#191827").s().p("Ag9CaIAAk0IAJAAQAwAAAgAuQAiAtAAA/QAAA/giAtQghAvgwgBg");
	shape_2.setTransform(150.7,22.3,0.792,0.792);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#F6E08B").s().p("Aj4B+IAAgMQAAhkBJhFQBKhGBlAAQBmAABJBIQBKBFAABkIAAAKg");
	shape_3.setTransform(142.2,21.9);

	// eyesockets
	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#59CA54").s().p("Am6DgIAAgXQAAixCDh6QCCh9C1AAQC1AACDB/QCDB8AACwIAAAUg");
	shape_4.setTransform(44.4,37.4);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#59CA54").s().p("AlzC8IAAgUQAAiTBuhoQBthoCYAAQCYAABuBqQBuBoAACVIAAAQg");
	shape_5.setTransform(137.8,18.9);

	this.addChild(shape_5,shape_4,shape_3,shape_2,shape_1,shape,rightEye_canvas,leftEye_canvas,texture_container1,texture_container2);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-7.7,179.5,80.7);


(lib.crocupperheadtexture = function() {
	var instance_53;
	var instance_52;
	var instance_51;
	var instance_50;
	var instance_49;
	var instance_48;
	var instance_47;
	var instance_46;
	var instance_45;
	var instance_44;
	var instance_43;
	var instance_42;
	var instance_41;
	var instance_40;
	var instance_39;
	var instance_38;
	var instance_37;
	var instance_36;
	var instance_35;
	var instance_34;
	var instance_33;
	var instance_32;
	var instance_31;
	var instance_30;
	var instance_29;
	var instance_28;
	var instance_27;
	var instance_26;
	var instance_25;
	var instance_24;
	var instance_23;
	var instance_22;
	var instance_21;
	var instance_20;
	var instance_19;
	var instance_18;
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
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.CleatTextureMC();
	instance.setTransform(527.2,51.5,0.018,0.019,0,-144.3,37.8);

	instance_1 = this.instance_1 = new lib.CleatTextureMC();
	instance_1.setTransform(528.4,46.3,0.025,0.025,0,-144.4,37.8);

	instance_2 = this.instance_2 = new lib.CleatTextureMC();
	instance_2.setTransform(531.6,41.5,0.025,0.025,0,-126.9,55.3);

	instance_3 = this.instance_3 = new lib.CleatTextureMC();
	instance_3.setTransform(536.1,38.8,0.03,0.029,0,-111.6,69.9);

	instance_4 = this.instance_4 = new lib.CleatTextureMC();
	instance_4.setTransform(540.7,37.3,0.031,0.03,0,-90.8,89.2);

	instance_5 = this.instance_5 = new lib.CleatTextureMC();
	instance_5.setTransform(546.2,37.7,0.041,0.041,0,-57.6,120.4);

	instance_6 = this.instance_6 = new lib.CleatTextureMC();
	instance_6.setTransform(550.4,44.5,0.046,0.045,0,-118.6,63.3);

	instance_7 = this.instance_7 = new lib.CleatTextureMC();
	instance_7.setTransform(548.3,51.9,0.018,0.019,0,-9,170.2);

	instance_8 = this.instance_8 = new lib.CleatTextureMC();
	instance_8.setTransform(519,49.5,0.02,0.02,143.3);

	instance_9 = this.instance_9 = new lib.CleatTextureMC();
	instance_9.setTransform(517.6,44,0.027,0.027,143.3);

	instance_10 = this.instance_10 = new lib.CleatTextureMC();
	instance_10.setTransform(514.1,38.8,0.027,0.027,125.8);

	instance_11 = this.instance_11 = new lib.CleatTextureMC();
	instance_11.setTransform(509.1,35.9,0.032,0.032,110.8);

	instance_12 = this.instance_12 = new lib.CleatTextureMC();
	instance_12.setTransform(503.9,34.3,0.033,0.033,90.8);

	instance_13 = this.instance_13 = new lib.CleatTextureMC();
	instance_13.setTransform(497.9,34.8,0.045,0.045,58.6);

	instance_14 = this.instance_14 = new lib.CleatTextureMC();
	instance_14.setTransform(493.9,41.2,0.04,0.04,117.6);

	instance_15 = this.instance_15 = new lib.CleatTextureMC();
	instance_15.setTransform(493.9,47.6,0.027,0.027,30.6);

	instance_16 = this.instance_16 = new lib.CleatTextureMC();
	instance_16.setTransform(496.3,52.9,0.02,0.02,9.4);

	instance_17 = this.instance_17 = new lib.CleatTextureMC();
	instance_17.setTransform(166.8,36.3,0.043,0.042,0,-137.5,36.1);

	instance_18 = this.instance_18 = new lib.CleatTextureMC();
	instance_18.setTransform(172.7,30.9,0.042,0.043,0,-120.2,53.5);

	instance_19 = this.instance_19 = new lib.CleatTextureMC();
	instance_19.setTransform(180.1,27.8,0.048,0.052,0,-106.2,69.4);

	instance_20 = this.instance_20 = new lib.CleatTextureMC();
	instance_20.setTransform(188.7,25.8,0.05,0.054,0,-106.2,69.4);

	instance_21 = this.instance_21 = new lib.CleatTextureMC();
	instance_21.setTransform(197.4,25.4,0.048,0.054,0,-81.8,99.7);

	instance_22 = this.instance_22 = new lib.CleatTextureMC();
	instance_22.setTransform(204.4,27.5,0.052,0.053,0,-50.4,136.2);

	instance_23 = this.instance_23 = new lib.CleatTextureMC();
	instance_23.setTransform(210.6,31.8,0.044,0.041,0,-31.2,154.6);

	instance_24 = this.instance_24 = new lib.CleatTextureMC();
	instance_24.setTransform(212.7,39,0.045,0.04,0,-8.1,174);

	instance_25 = this.instance_25 = new lib.CleatTextureMC();
	instance_25.setTransform(139.4,39.3,0.055,0.055,143.2);

	instance_26 = this.instance_26 = new lib.CleatTextureMC();
	instance_26.setTransform(134.2,28.6,0.055,0.055,143.2);

	instance_27 = this.instance_27 = new lib.CleatTextureMC();
	instance_27.setTransform(127.3,20.9,0.055,0.055,125.8);

	instance_28 = this.instance_28 = new lib.CleatTextureMC();
	instance_28.setTransform(118.4,16.2,0.065,0.065,110.8);

	instance_29 = this.instance_29 = new lib.CleatTextureMC();
	instance_29.setTransform(108.1,12.9,0.067,0.067,110.8);

	instance_30 = this.instance_30 = new lib.CleatTextureMC();
	instance_30.setTransform(97.5,11.9,0.066,0.066,83.6);

	instance_31 = this.instance_31 = new lib.CleatTextureMC();
	instance_31.setTransform(88.9,14.3,0.068,0.068,49.6);

	instance_32 = this.instance_32 = new lib.CleatTextureMC();
	instance_32.setTransform(81.1,19.8,0.055,0.055,30.7);

	instance_33 = this.instance_33 = new lib.CleatTextureMC();
	instance_33.setTransform(78.1,29.6,0.055,0.055,9.4);

	instance_34 = this.instance_34 = new lib.CleatTextureMC();
	instance_34.setTransform(10.7,57.1,0.055,0.055,-22.3);

	instance_35 = this.instance_35 = new lib.CleatTextureMC();
	instance_35.setTransform(24.3,49.6,0.076,0.076,-6.6);

	instance_36 = this.instance_36 = new lib.CleatTextureMC();
	instance_36.setTransform(42.7,46.8,0.092,0.092,2.2);

	instance_37 = this.instance_37 = new lib.CleatTextureMC();
	instance_37.setTransform(65.7,48.4,0.108,0.108,13.2);

	instance_38 = this.instance_38 = new lib.CleatTextureMC();
	instance_38.setTransform(92.7,50.4,0.134,0.134,13.2);

	instance_39 = this.instance_39 = new lib.CleatTextureMC();
	instance_39.setTransform(122.7,57,0.134,0.134,13.2);

	instance_40 = this.instance_40 = new lib.CleatTextureMC();
	instance_40.setTransform(158.9,61.9,0.193,0.193,26.2);

	instance_41 = this.instance_41 = new lib.CleatTextureMC();
	instance_41.setTransform(205.6,68.1,0.226,0.226,7);

	instance_42 = this.instance_42 = new lib.CleatTextureMC();
	instance_42.setTransform(257.5,73.6,0.27,0.27,7);

	instance_43 = this.instance_43 = new lib.CleatTextureMC();
	instance_43.setTransform(311.1,76,0.27,0.27,7);

	instance_44 = this.instance_44 = new lib.CleatTextureMC();
	instance_44.setTransform(559.4,56,0.021,0.021,-2);

	instance_45 = this.instance_45 = new lib.CleatTextureMC();
	instance_45.setTransform(553.8,56.9,0.028,0.028,-2.1);

	instance_46 = this.instance_46 = new lib.CleatTextureMC();
	instance_46.setTransform(546.4,58.1,0.039,0.039,0.7);

	instance_47 = this.instance_47 = new lib.CleatTextureMC();
	instance_47.setTransform(535.4,60.3,0.057,0.057,0.7);

	instance_48 = this.instance_48 = new lib.CleatTextureMC();
	instance_48.setTransform(519.8,62.9,0.09,0.09,7);

	instance_49 = this.instance_49 = new lib.CleatTextureMC();
	instance_49.setTransform(497.8,65.8,0.103,0.103,7);

	instance_50 = this.instance_50 = new lib.CleatTextureMC();
	instance_50.setTransform(470.9,68.4,0.134,0.134,7);

	instance_51 = this.instance_51 = new lib.CleatTextureMC();
	instance_51.setTransform(441.1,70.9,0.171,0.171,7);

	instance_52 = this.instance_52 = new lib.CleatTextureMC();
	instance_52.setTransform(363.6,74.9,0.235,0.235,7);

	instance_53 = this.instance_53 = new lib.CleatTextureMC();
	instance_53.setTransform(406.7,71.8,0.212,0.212,7);

	this.addChild(instance_53,instance_52,instance_51,instance_50,instance_49,instance_48,instance_47,instance_46,instance_45,instance_44,instance_43,instance_42,instance_41,instance_40,instance_39,instance_38,instance_37,instance_36,instance_35,instance_34,instance_33,instance_32,instance_31,instance_30,instance_29,instance_28,instance_27,instance_26,instance_25,instance_24,instance_23,instance_22,instance_21,instance_20,instance_19,instance_18,instance_17,instance_16,instance_15,instance_14,instance_13,instance_12,instance_11,instance_10,instance_9,instance_8,instance_7,instance_6,instance_5,instance_4,instance_3,instance_2,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0.1,0.2,562.4,120.3);


(lib.bumplegtexure = function() {
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.CleatTextureMC();
	instance.setTransform(100.9,95.6,0.343,0.343,0.6);

	instance_1 = this.instance_1 = new lib.CleatTextureMC();
	instance_1.setTransform(78.3,49.5,0.275,0.275,14.3);

	instance_2 = this.instance_2 = new lib.CleatTextureMC();
	instance_2.setTransform(43.2,32,0.176,0.176,14.3);

	instance_3 = this.instance_3 = new lib.CleatTextureMC();
	instance_3.setTransform(16.2,26,0.089,0.089,14.3);

	this.addChild(instance_3,instance_2,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0.2,0.2,151.8,146.5);


(lib.BodyTextureContainerMC = function() {
	var instance_27;
	var instance_26;
	var instance_25;
	var instance_24;
	var instance_23;
	var instance_22;
	var instance_21;
	var instance_20;
	var instance_19;
	var instance_18;
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
	this.initialize();

	// Layer 1
	instance = this.instance = new lib.CleatTextureMC();
	instance.setTransform(4.8,247,0.023,0.023,-40.3);

	instance_1 = this.instance_1 = new lib.CleatTextureMC();
	instance_1.setTransform(25.5,233,0.045,0.045,-28.8);

	instance_2 = this.instance_2 = new lib.CleatTextureMC();
	instance_2.setTransform(35.8,224.8,0.056,0.056,-25.6);

	instance_3 = this.instance_3 = new lib.CleatTextureMC();
	instance_3.setTransform(51.6,211.7,0.111,0.111,-25.4);

	instance_4 = this.instance_4 = new lib.CleatTextureMC();
	instance_4.setTransform(77.5,198,0.139,0.139,-23.9);

	instance_5 = this.instance_5 = new lib.CleatTextureMC();
	instance_5.setTransform(111.5,182,0.176,0.176,-22.6);

	instance_6 = this.instance_6 = new lib.CleatTextureMC();
	instance_6.setTransform(145.9,168.2,0.184,0.184,-22.6);

	instance_7 = this.instance_7 = new lib.CleatTextureMC();
	instance_7.setTransform(171.2,155.7,0.205,0.205,-6.1);

	instance_8 = this.instance_8 = new lib.CleatTextureMC();
	instance_8.setTransform(519.4,149.3,0.289,0.289,17.5);

	instance_9 = this.instance_9 = new lib.CleatTextureMC();
	instance_9.setTransform(218.3,142.4,0.279,0.279,-6.1);

	instance_10 = this.instance_10 = new lib.CleatTextureMC();
	instance_10.setTransform(279.4,131.2,0.274,0.274,1.1);

	instance_11 = this.instance_11 = new lib.CleatTextureMC();
	instance_11.setTransform(357.7,129.9,0.329,0.329,14.3);

	instance_12 = this.instance_12 = new lib.CleatTextureMC();
	instance_12.setTransform(448.4,134.2,0.327,0.327,14.3);

	instance_13 = this.instance_13 = new lib.CleatTextureMC();
	instance_13.setTransform(5.7,247,0.023,0.023,-49.3);

	instance_14 = this.instance_14 = new lib.CleatTextureMC();
	instance_14.setTransform(10.6,240.7,0.044,0.044,-49.3);

	instance_15 = this.instance_15 = new lib.CleatTextureMC();
	instance_15.setTransform(16.7,232.2,0.064,0.064,-49.3);

	instance_16 = this.instance_16 = new lib.CleatTextureMC();
	instance_16.setTransform(27.2,218.2,0.09,0.09,-49.3);

	instance_17 = this.instance_17 = new lib.CleatTextureMC();
	instance_17.setTransform(40.6,201.2,0.111,0.111,-49.3);

	instance_18 = this.instance_18 = new lib.CleatTextureMC();
	instance_18.setTransform(60.3,182.1,0.139,0.139,-49.3);

	instance_19 = this.instance_19 = new lib.CleatTextureMC();
	instance_19.setTransform(84.3,163.4,0.176,0.176,-31.6);

	instance_20 = this.instance_20 = new lib.CleatTextureMC();
	instance_20.setTransform(108.5,143.5,0.22,0.22,-31.6);

	instance_21 = this.instance_21 = new lib.CleatTextureMC();
	instance_21.setTransform(136.2,124.2,0.245,0.245,-15.1);

	instance_22 = this.instance_22 = new lib.CleatTextureMC();
	instance_22.setTransform(499.2,72.5,0.356,0.356,8.5);

	instance_23 = this.instance_23 = new lib.CleatTextureMC();
	instance_23.setTransform(189.8,100,0.334,0.334,-15.1);

	instance_24 = this.instance_24 = new lib.CleatTextureMC();
	instance_24.setTransform(256.3,78.7,0.362,0.362,-7.9);

	instance_25 = this.instance_25 = new lib.CleatTextureMC();
	instance_25.setTransform(334.9,66.2,0.411,0.411,5.3);

	instance_26 = this.instance_26 = new lib.CleatTextureMC();
	instance_26.setTransform(426.6,66.2,0.411,0.411,5.3);

	instance_27 = this.instance_27 = new lib.CleatTextureMC();
	instance_27.setTransform(577.2,115.1,0.436,0.436,8.5);

	this.addChild(instance_27,instance_26,instance_25,instance_24,instance_23,instance_22,instance_21,instance_20,instance_19,instance_18,instance_17,instance_16,instance_15,instance_14,instance_13,instance_12,instance_11,instance_10,instance_9,instance_8,instance_7,instance_6,instance_5,instance_4,instance_3,instance_2,instance_1,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0.1,650.3,251.7);


(lib.BodyCanvasMC = function() {
	var shape;
	var texture_container;
	this.initialize();

	// mask (mask)
	var mask = new Shape();
	mask._off = true;
	mask.graphics.p("EgzcAPqQBfjHCGjJQGvqAKdmsQOppWT9hSQNLg2PHCuIBQAPQAsB2BbBbQAcAcAlAYIgMABIQIKhQliDpmaBvIhEASQiIAliMAXQmhBBm7g3Qw1iGvaBfQsXBMq5DbQnyCcmSDTQh9BChlBAIhMAzg");
	mask.setTransform(336.1,116);

	// texture
	texture_container = this.texture_container = new lib.BodyTextureContainerMC();
	texture_container.setTransform(325.7,104.2,1,1,0,0,0,325.7,125.9);
	texture_container.filters = [new cjs.ColorFilter(0, 1, 0, 1, 0, 0, 0, 0)];
	texture_container.cache(-2,-2,654,256);

	texture_container.mask = mask;

	// untextured shape
	shape = this.shape = new Shape();
	shape.graphics.f("#59CA54").s().p("EgzcAPqQBfjHCGjJQGvqAKdmsQOppWT9hSQNLg2PHCuIBQAPQAsB2BbBbQAcAcAlAYIgMABIQIKhQliDpmaBvIhEASQiIAliMAXQmhBBm7g3Qw1iGvaBfQsXBMq5DbQnyCcmSDTQh9BChlBAIhMAzg");
	shape.setTransform(336.1,116);

	this.addChild(shape,texture_container);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,672.3,232.1);


(lib.innerMouth2 = function(mode,startPosition,loop) {
	var shape_9;
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	var instance_6;
	var instance_5;
	var instance_4;
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// uvela
	instance = this.instance = new lib.uvela();
	instance.setTransform(11.7,-99.5,1,1.005,0,5.4,0,1.7,-79.8);

	this.timeline.addTween(Tween.get(instance).to({scaleY:1,skewX:-3.4},2).to({scaleY:1,skewX:1},1).wait(1));

	// t4
	instance_1 = this.instance_1 = new lib.t4();
	instance_1.setTransform(381.3,263.4,1,1,15.7,0,0,11.7,58.2);

	this.timeline.addTween(Tween.get(instance_1).to({regX:11.6,rotation:0},3).wait(1));

	// t3
	instance_2 = this.instance_2 = new lib.t3();
	instance_2.setTransform(-339.9,280.2,1,1,-11,0,0,1.7,75);

	this.timeline.addTween(Tween.get(instance_2).to({regY:74.9,rotation:0,y:280.1},3).wait(1));

	// t2
	instance_3 = this.instance_3 = new lib.t2();
	instance_3.setTransform(469,-285.2,1,1,-8.2,0,0,1.6,-108.2);

	this.timeline.addTween(Tween.get(instance_3).to({regX:1.7,rotation:0},3).wait(1));

	// t1
	instance_4 = this.instance_4 = new lib.t1();
	instance_4.setTransform(-457.3,-279.6,1,1,15.9,0,0,-3.5,-103.2);

	this.timeline.addTween(Tween.get(instance_4).to({regX:-3.4,rotation:0},3).wait(1));

	// allelse
	instance_5 = this.instance_5 = new lib.Group();
	instance_5.setTransform(131.8,0.6,1,1,0,0,0,116.8,169);
	instance_5.alpha = 0.801;

	instance_6 = this.instance_6 = new lib.Group_1();
	instance_6.setTransform(-113.1,0.6,1,1,0,0,0,116.9,169);
	instance_6.alpha = 0.801;

	shape = this.shape = new Shape();
	shape.graphics.f("#000000").s().p("AoCTkQjthni2i8Qi4i8hkj0Qhoj9AAkUQAAkTBoj9QBkj0C4i8QC2i8DthnQD3hrELAAQENAAD2BrQDsBnC4C8QC2C8BlD0QBoD9AAETQAAEUhoD9QhlD0i2C8Qi4C8jsBnQj2BrkNAAQkLAAj3hrg");
	shape.setTransform(10.4,16.9);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#D45D61").s().p("AlNB4QiKhYAAh7QAAg9Akg3QgLAgAAAfQAAB2CDBSQCEBTC3AAQC6AACDhTQCDhSAAh2QAAgegKgcQAiA2AAA5QAAB7iLBYQiKBYjDAAQjDAAiKhYg");
	shape_1.setTransform(163.9,324.1);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#FFFFFF").s().p("AjKH7QhvgzgjhnQgjhoAkifQAhiQBTiVQBSiVBihdQBohjBZAAQBWAAAiAlQAdAfAABGQAAAZgNB9QgLBsAGBMQAGBSA1CdQArCDgLAvQgTBThlA4QhfA1h9AHIglABQhpAAhUgmg");
	shape_2.setTransform(163.4,270);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#D45D61").s().p("AlMB4QiLhYAAh7QAAg5Aig2QgKAcAAAeQAAB2CDBSQCDBTC5AAQC4AACEhTQCDhSAAh2QAAgfgLggQAkA4AAA8QAAB7iLBYQiKBYjDAAQjCAAiKhYg");
	shape_3.setTransform(-142.7,325.1);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#FFFFFF").s().p("AgWIgQh9gHhfg1Qhlg4gUhTQgLgvAsiDQA0idAGhSQAGhMgLhsQgMh9AAgZQAAhGAdgfQAiglBVAAQBZAABoBjQBjBdBSCVQBSCVAhCQQAkCfgjBoQgjBnhuAzQhVAmhpAAIgkgBg");
	shape_4.setTransform(-142.3,271);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#D45D61").s().p("Ap3BoQAAiLC6hkQC4hjEFgBQEGABC5BjQC5BkgBCLQAABDgsA8QANghAAgiQAAiGiwhdQivhej5AAQj1AAixBfQivBdAACGQABAlAOAiQgxg+AAhGg");
	shape_5.setTransform(205.8,-320.1);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.f("#FFFFFF").s().p("AhEH6QiEhqhuioQhuipgtikQgwi0Avh3QAvh1CUg5QCEgzCrAJQCnAIB/A8QCHA/AaBeQAPA2g6CVQhGCygIBdQgIBWAPB7QAQCOAAAcQAABPgmAkQguAqhzAAQh3AAiLhxg");
	shape_6.setTransform(205.2,-250.4);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.f("#D45D61").s().p("AJbCmQAAiHixheQixhfj5AAQj6AAixBfQixBeAACHQAAAhANAhQgtg8AAhDQAAiMC7hlQC6hkEHgBQEIABC6BkQC7BlAACMQAABGgxA/QAPgkAAgkg");
	shape_7.setTransform(-191.3,-319.9);

	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.f("#FFFFFF").s().p("AlgJFQgngkAAhPQAAgcARiQQAPh8gIhWQgJhfhGizQg7iWAPg2QAahfCIhAQCAg8CpgJQCsgJCGA0QCVA6AvB2QAwB3gxC2QgsClhwCrQhvCqiFBqQiMByh5AAQhzAAgugrg");
	shape_8.setTransform(-190.7,-249.7);

	shape_9 = this.shape_9 = new Shape();
	shape_9.graphics.f("#FD767A").s().p("Ehj3A+iUA0zg7LhFMgvaUB0XhRMB0KBRfUhCuA2QAuMA0CUgzGAWDgw4AAAUgw7AAAgutgWDg");
	shape_9.setTransform(-0.7,-40.3);

	this.timeline.addTween(Tween.get({}).to({state:[{t:shape_9},{t:shape_8},{t:shape_7},{t:shape_6},{t:shape_5},{t:shape_4},{t:shape_3},{t:shape_2},{t:shape_1},{t:shape},{t:instance_6},{t:instance_5}]}).wait(4));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-744.8,-581.6,1488.3,1082.7);


(lib.innerMouth = function(mode,startPosition,loop) {
	var shape_9;
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	var instance_6;
	var instance_5;
	var instance_4;
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// uvela
	instance = this.instance = new lib.uvela();
	instance.setTransform(11.7,-99.5,1,1.005,0,5.4,0,1.7,-79.8);

	this.timeline.addTween(Tween.get(instance).to({scaleY:1,skewX:-3.4},2).to({scaleY:1,skewX:1},1).wait(1));

	// t4
	instance_1 = this.instance_1 = new lib.t4();
	instance_1.setTransform(381.3,263.4,1,1,15.7,0,0,11.7,58.2);

	this.timeline.addTween(Tween.get(instance_1).to({regX:11.6,rotation:0},3).wait(1));

	// t3
	instance_2 = this.instance_2 = new lib.t3();
	instance_2.setTransform(-339.9,280.2,1,1,-11,0,0,1.7,75);

	this.timeline.addTween(Tween.get(instance_2).to({regY:74.9,rotation:0,y:280.1},3).wait(1));

	// t2
	instance_3 = this.instance_3 = new lib.t2();
	instance_3.setTransform(469,-285.2,1,1,-8.2,0,0,1.6,-108.2);

	this.timeline.addTween(Tween.get(instance_3).to({regX:1.7,rotation:0},3).wait(1));

	// t1
	instance_4 = this.instance_4 = new lib.t1();
	instance_4.setTransform(-457.3,-279.6,1,1,15.9,0,0,-3.5,-103.2);

	this.timeline.addTween(Tween.get(instance_4).to({regX:-3.4,rotation:0},3).wait(1));

	// allelse
	instance_5 = this.instance_5 = new lib.Group();
	instance_5.setTransform(131.8,0.6,1,1,0,0,0,116.8,169);
	instance_5.alpha = 0.801;

	instance_6 = this.instance_6 = new lib.Group_1();
	instance_6.setTransform(-113.1,0.6,1,1,0,0,0,116.9,169);
	instance_6.alpha = 0.801;

	shape = this.shape = new Shape();
	shape.graphics.f("#000000").s().p("AoCTkQjthni2i8Qi4i8hkj0Qhoj9AAkUQAAkTBoj9QBkj0C4i8QC2i8DthnQD3hrELAAQENAAD2BrQDsBnC4C8QC2C8BlD0QBoD9AAETQAAEUhoD9QhlD0i2C8Qi4C8jsBnQj2BrkNAAQkLAAj3hrg");
	shape.setTransform(10.4,16.9);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#D45D61").s().p("AlNB4QiKhYAAh7QAAg9Akg3QgLAgAAAfQAAB2CDBSQCEBTC3AAQC6AACDhTQCDhSAAh2QAAgegKgcQAiA2AAA5QAAB7iLBYQiKBYjDAAQjDAAiKhYg");
	shape_1.setTransform(163.9,324.1);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#FFFFFF").s().p("AjKH7QhvgzgjhnQgjhoAkifQAhiQBTiVQBSiVBihdQBohjBZAAQBWAAAiAlQAdAfAABGQAAAZgNB9QgLBsAGBMQAGBSA1CdQArCDgLAvQgTBThlA4QhfA1h9AHIglABQhpAAhUgmg");
	shape_2.setTransform(163.4,270);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#D45D61").s().p("AlMB4QiLhYAAh7QAAg5Aig2QgKAcAAAeQAAB2CDBSQCDBTC5AAQC4AACEhTQCDhSAAh2QAAgfgLggQAkA4AAA8QAAB7iLBYQiKBYjDAAQjCAAiKhYg");
	shape_3.setTransform(-142.7,325.1);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#FFFFFF").s().p("AgWIgQh9gHhfg1Qhlg4gUhTQgLgvAsiDQA0idAGhSQAGhMgLhsQgMh9AAgZQAAhGAdgfQAiglBVAAQBZAABoBjQBjBdBSCVQBSCVAhCQQAkCfgjBoQgjBnhuAzQhVAmhpAAIgkgBg");
	shape_4.setTransform(-142.3,271);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#D45D61").s().p("Ap3BoQAAiLC6hkQC4hjEFgBQEGABC5BjQC5BkgBCLQAABDgsA8QANghAAgiQAAiGiwhdQivhej5AAQj1AAixBfQivBdAACGQABAlAOAiQgxg+AAhGg");
	shape_5.setTransform(205.8,-320.1);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.f("#FFFFFF").s().p("AhEH6QiEhqhuioQhuipgtikQgwi0Avh3QAvh1CUg5QCEgzCrAJQCnAIB/A8QCHA/AaBeQAPA2g6CVQhGCygIBdQgIBWAPB7QAQCOAAAcQAABPgmAkQguAqhzAAQh3AAiLhxg");
	shape_6.setTransform(205.2,-250.4);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.f("#D45D61").s().p("AJbCmQAAiHixheQixhfj5AAQj6AAixBfQixBeAACHQAAAhANAhQgtg8AAhDQAAiMC7hlQC6hkEHgBQEIABC6BkQC7BlAACMQAABGgxA/QAPgkAAgkg");
	shape_7.setTransform(-191.3,-319.9);

	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.f("#FFFFFF").s().p("AlgJFQgngkAAhPQAAgcARiQQAPh8gIhWQgJhfhGizQg7iWAPg2QAahfCIhAQCAg8CpgJQCsgJCGA0QCVA6AvB2QAwB3gxC2QgsClhwCrQhvCqiFBqQiMByh5AAQhzAAgugrg");
	shape_8.setTransform(-190.7,-249.7);

	shape_9 = this.shape_9 = new Shape();
	shape_9.graphics.f("#FD767A").s().p("Ehj+A4QMAAAhwfMDH9AAAMAAABwfg");

	this.timeline.addTween(Tween.get({}).to({state:[{t:shape_9},{t:shape_8},{t:shape_7},{t:shape_6},{t:shape_5},{t:shape_4},{t:shape_3},{t:shape_2},{t:shape_1},{t:shape},{t:instance_6},{t:instance_5}]}).wait(4));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-646.4,-398.8,1286.5,763.7);


(lib.zebradrinking = function(mode,startPosition,loop) {
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// water-ripple
	instance = this.instance = new lib.ripple();
	instance.setTransform(128,288.9,0.603,0.603,0,0,0,90,9.6);

	this.timeline.addTween(Tween.get(instance).to({_off:true},9).wait(6));

	// water-ripple2
	instance_1 = this.instance_1 = new lib.ripple();
	instance_1.setTransform(130,291.6,0.811,0.811,0,0,0,90,9.5);
	instance_1._off = true;

	this.timeline.addTween(Tween.get(instance_1).wait(6).to({_off:false},0).to({_off:true},8).wait(1));

	// Layer 1
	instance_2 = this.instance_2 = new lib.drinkingzebra();
	instance_2.setTransform(129.2,284,1,1,0,0,0,173.2,273);

	this.timeline.addTween(Tween.get(instance_2).to({regX:173.1,regY:273.1,scaleY:1.05,skewX:-1,x:129.1,y:284.1},6).to({regX:173.2,regY:273,scaleY:1,skewX:0,x:129.2,y:284},8).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-44,11,648.2,319.9);


(lib.upperHead = function() {
	var instance;
	var upperMouth;
	var shape_3;
	var shape_2;
	var rightEye_canvas;
	var leftEye_canvas;
	var nostrils_canvas;
	var texture_container;
	var shape_1;
	var shape;
	this.initialize();

	// nostrilHoles
	shape = this.shape = new Shape();
	shape.graphics.f("#0E220D").s().p("AhLBMQgZgYAFgoQAFgmAgggQAgggAmgFQAogFAYAZQAZAZgFAnQgFAmggAgQgfAggmAFIgNABQggAAgUgVg");
	shape.setTransform(251.5,-29.3);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#0E220D").s().p("AANBqQgqgFgjgkQgkgjgGgqQgFgsAbgbQAcgcAsAGQAqAFAjAjQAkAkAGApQAFAtgcAbQgWAXgjAAIgOgBg");
	shape_1.setTransform(222.7,-30.2);

	// head-texture-mask (mask)
	var mask = new Shape();
	mask._off = true;
	mask.graphics.p("AgwHyQkVgKkHgpQkOgujxhKIjuhTIh0goIhzglQjfhGjRgoQh9gYh0gJQgFgBmQA7QmPA8GWlQIHwgPQgQhHAchDQAuhsCFgiQCFgiCPA9QCOA8BEB3QAfA1AHAzICXAGQAKgRANgSQBIhdCAgiQCAgjBtAsQBuAsAaBhQAFATABASMAqvAByQgdgpgGgvQgIhAAngoQAogoBAAIQBAAIAzA0QAzAzAIBAQAFAhgJAbIA/ACQgEgTACgYQAIg6AuguQAuguA6gHQA6gHAkAkQAjAjgHA7QgGAwggAnIDUAJQiUA+j1BRIB/gvQBXggBXglIA9gZIg/AWQg6AVh2AmQhoAjisAyIkIBIIhiAZQjJAyjnAuQgoAIjGAkIj5AmQkWAlj3AOQi5AKilAAQhkAAhbgEg");
	mask.setTransform(1.8,-23.6);

	// texture
	texture_container = this.texture_container = new lib.crocupperheadtexture();
	texture_container.setTransform(-3.6,-19.5,1,1,0,0,0,281.2,60.2);
	texture_container.filters = [new cjs.ColorFilter(0, 1, 0, 1, 0, 0, 0, 0)];
	texture_container.cache(-2,-2,566,124);

	texture_container.mask = mask;

	// nostrils-canvas
	nostrils_canvas = this.nostrils_canvas = new lib.nostrilscanvas();
	nostrils_canvas.setTransform(236.7,-33.7,1,1,0,0,0,32.5,16);

	// leftEye-canvas
	leftEye_canvas = this.leftEye_canvas = new lib.leftEyecanvas();
	leftEye_canvas.setTransform(-178.1,-45.5,1,1,0,0,0,36.1,29.9);

	// rightEye-canvas
	rightEye_canvas = this.rightEye_canvas = new lib.rightEyecanvas();
	rightEye_canvas.setTransform(-95.6,-37.9,1,1,0,0,0,31.6,24.9);

	// rightEyeSocket
	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#59CA54").s().p("AisDhQhtgtgbhhQgahfBIhdQBIhdCAgjQB+gjBtAtQBtAsAaBhQAbBfhIBdQhIBdiAAjQg5APgzAAQhCAAg9gYg");
	shape_2.setTransform(-97.4,-33.9);

	// leftEyeSocket
	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#59CA54").s().p("AhtEEQiOg8hFh3QhEh1AuhsQAthsCGgiQCFgiCMA9QCOA8BFB3QBEB1guBsQguBsiEAiQgwAMgxAAQhWAAhbgng");
	shape_3.setTransform(-177.1,-43.9);

	// upperMouth (untextured)
	upperMouth = this.upperMouth = new lib.upperMouth_1();
	upperMouth.setTransform(-286.2,-6.7,1,1,0,0,0,0,40.2);

	// teeth
	instance = this.instance = new lib.upperTeeth();
	instance.setTransform(71.4,43,1,1,0,0,0,91.4,30.9);

	this.addChild(instance,upperMouth,shape_3,shape_2,rightEye_canvas,leftEye_canvas,nostrils_canvas,texture_container,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-286.2,-88.4,572.6,162.3);


(lib.snakedrinking = function(mode,startPosition,loop) {
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// water-ripple
	instance = this.instance = new lib.ripple();
	instance.setTransform(31,84.8,0.392,0.392,0,0,0,89.9,9.6);

	this.timeline.addTween(Tween.get(instance).to({_off:true},9).wait(6));

	// water-ripple2
	instance_1 = this.instance_1 = new lib.ripple();
	instance_1.setTransform(30.2,85.2,0.519,0.662,0,0,0,90,9.5);
	instance_1._off = true;

	this.timeline.addTween(Tween.get(instance_1).wait(6).to({_off:false},0).to({_off:true},8).wait(1));

	// Layer 1
	instance_2 = this.instance_2 = new lib.snakepose();
	instance_2.setTransform(11.2,43.2,1,1,0,0,0,11.2,43.2);

	this.timeline.addTween(Tween.get(instance_2).to({scaleY:1.14,skewX:7,x:14.7,y:40.2},7).to({scaleY:1,skewX:0,x:11.2,y:43.2},7).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-4.3,0,181.8,92.6);


(lib.rearLeg1 = function() {
	var rearLeg1_canvas;
	var instance;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// toenails
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFCC").s().p("AAzDWQgCgmgNghQglhriEgbIBTj8IAxAlQA1AwAjA3QBtCsiSCvg");
	shape.setTransform(93.5,108.9);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFCC").s().p("AA8D7QgCgsgPgnQgsh+ibgfIBhkpIA5AsQBAA4AoBAQCBDLisDOg");
	shape_1.setTransform(121.9,109.7);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#FFFFCC").s().p("AAzDWQgCgmgMghQgmhriEgbIBTj8IAxAlQA1AwAjA3QBtCsiSCvg");
	shape_2.setTransform(148.5,108.9);

	// mask (mask)
	var mask = new Shape();
	mask._off = true;
	mask.graphics.p("AizItQA2omlCkUQhlhXh+gxQgngQglgKIgegGQGji9FUBxQENBaDQEWQCVDEBnERQAgBVAYBSIARBCg");
	mask.setTransform(78.2,55.7);

	// texture
	instance = this.instance = new lib.bumplegtexure();
	instance.setTransform(12.3,8.4,1,1,0,0,0,15,26.3);
	instance.filters = [new cjs.ColorFilter(0, 1, 0, 1, 0, 0, 0, 0)];
	instance.cache(-2,-2,156,151);

	instance.mask = mask;

	// leg1-canvas
	rearLeg1_canvas = this.rearLeg1_canvas = new lib.rearLeg1canvas();
	rearLeg1_canvas.setTransform(78.2,55.7,1,1,0,0,0,78.2,55.7);

	this.addChild(rearLeg1_canvas,instance,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,161.9,138.4);


(lib.mandible = function() {
	var shape_4;
	var texture_container;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize();

	// teeth & lip liner
	shape = this.shape = new Shape();
	shape.graphics.f("#003300").s().p("AM7IdIjEgHIhDgEIkNgXQktgjjxg0QkOg7kGhZIh/gwIi5hQIgfgOIgdgPIh2g7QhDgliZhZQiHhPhKgoQjThyi8hOIkPheIhTgVQhbgTg+gGQgVgDgqgCIgJgRQAfAAAqABQA8ADBhAQQCxAiC6BGQDEBKDUBtIBrA5QBWAuAWAOIDcB5QDdBxEGBdQD6BUESA8QD0A1EjAjQD9AdESALID8AGQC3AAA8gCQD4gGDCgOIF2ghQCkgTB7gRIC5gcIBBgMIhBAQQhcAVhaARQiQAbiPAVQijAZjSAWIm9AgQgqACjJAFIhKABQhpAAhMgDg");
	shape.setTransform(0,-26.6);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#E1FFA4").s().p("AgeBkIg5gLQAQgNAFgkIAChCQABgpAIgQQALgXAeAHQA1AMAeBXIAUBUQgpASgxAAIgdgCg");
	shape_1.setTransform(179.2,12.1);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#E1FFA4").s().p("Ag5C5QgngEglgKIgdgIQAhgXAJhDQACgUAFhpQADhLAPgeQAWgpA2ANQBiAZA0ChQAQAzAJA6IAHAxQhIAehYAAQgcAAgggEg");
	shape_2.setTransform(57.1,5.4);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#E1FFA4").s().p("AAUCNQh0gfhLhAIAWgjQAdgoAgghQBlhsBjAOQA2AIAFAnQAEAcgXA7QghBSgEAQQgOA2AVAdQgsgDg6gPg");
	shape_3.setTransform(-84.6,-16.8);

	// mask (mask)
	var mask = new Shape();
	mask._off = true;
	mask.graphics.p("AygJVQu8l0oUwBQArACAUACQA/AGBaATIBTAVICyA6IBdAkQC9BODSByQBLAoCHBQQCYBaBEAmIB1A7IAeAPIAeAOIC6BPIB/AwQEGBYEOA7QDxA0EsAiIENAYIBDADIDFAIQBkADCbgBQDJgFAqgCIG8ghQDTgVCjgZQCPgWCQgbQBagRBcgVIBBgPQjuCDl9CXQr4EurLBfQk2ApkdAAQqAAAoQjMg");
	mask.setTransform(0.5,0.8);

	// texture
	texture_container = this.texture_container = new lib.lowerheadbumptexture();
	texture_container.setTransform(-0.8,-3.5,1,1,0,0,0,264.6,92.2);
	texture_container.filters = [new cjs.ColorFilter(0, 1, 0, 1, 0, 0, 0, 0)];
	texture_container.cache(-17,-12,548,198);

	texture_container.mask = mask;

	// untextured shape
	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#59CA54").s().p("AygJVQu8l0oUwBQAqACAVACQA/AGBbATIBSAVICyA6IBdAkQC8BODTByQBKAoCHBQQCZBaBEAmIB2A7IAdAPIAeAOIC6BPIB/AwQEFBYEOA7QDxA0EuAiIEMAYIBDADIDFAIQBkADCagBQDKgFAqgCIG8ghQDTgVCjgZQCPgWCQgbQBagRBcgVIBAgPQjtCDl9CXQr4EurLBfQk2ApkdAAQqAAAoQjMg");
	shape_4.setTransform(0.5,0.8);

	this.addChild(shape_4,texture_container,shape_3,shape_2,shape_1,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-267.7,-81,535.5,162.1);


(lib.CrocodileSnappingMC = function(mode,startPosition,loop) {
	var rearLeg2;
	var frontLeg2;
	var body_canvas;
	var rearLeg1;
	var frontLeg1;
	var mandible;
	var upperHead;
	this.initialize(mode,startPosition,loop,{});

	// upperhead
	upperHead = this.upperHead = new lib.upperHead();
	upperHead.setTransform(-24,114,1,1,-30,0,0,-279.1,-12);

	this.timeline.addTween(Tween.get(upperHead).to({regX:-279,regY:-12.1,scaleX:1.03,rotation:-0.8,x:-23.9},2).to({regX:-279.1,regY:-12,scaleX:1,rotation:-30,x:-24},3).wait(4).to({regY:-12.1,scaleX:1.03,rotation:-0.8,y:113.9},2).to({regY:-12,scaleX:1,rotation:-30,y:114},4).wait(10));

	// mandible
	mandible = this.mandible = new lib.mandible();
	mandible.setTransform(20.6,108.1,1,1,-10.7,0,0,-263.6,-78);

	this.timeline.addTween(Tween.get(mandible).to({regX:-263.5,scaleX:1.07,scaleY:0.92,x:20.7,y:108},2).to({regX:-263.6,scaleX:1,scaleY:1,x:20.6,y:108.1},3).wait(4).to({scaleX:1.05,scaleY:0.93},2).to({scaleX:1,scaleY:1},4).wait(10));

	// frontLeg1
	frontLeg1 = this.frontLeg1 = new lib.frontLeg1();
	frontLeg1.setTransform(42.5,212.5,1,1,0,0,0,47.1,20.4);

	this.timeline.addTween(Tween.get(frontLeg1).wait(25));

	// rearLeg1
	rearLeg1 = this.rearLeg1 = new lib.rearLeg1();
	rearLeg1.setTransform(-188.6,180.8,1,1,0,0,0,81,31.2);

	this.timeline.addTween(Tween.get(rearLeg1).wait(25));

	// body
	body_canvas = this.body_canvas = new lib.BodyCanvasMC();
	body_canvas.setTransform(-193.5,182,1,1,0,0,0,336.1,116);

	this.timeline.addTween(Tween.get(body_canvas).wait(25));

	// frontLeg2
	frontLeg2 = this.frontLeg2 = new lib.frontLeg2();
	frontLeg2.setTransform(98.9,182,1,1,0,0,0,43.9,16.6);

	this.timeline.addTween(Tween.get(frontLeg2).wait(25));

	// rearLeg2
	rearLeg2 = this.rearLeg2 = new lib.rearLeg2();
	rearLeg2.setTransform(-100.3,154.1,1,1,0,0,0,75.3,31.4);

	this.timeline.addTween(Tween.get(rearLeg2).wait(25));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-529.6,-222.2,1101.9,520.3);


(lib.CrocodileMC = function() {
	var rearLeg2;
	var frontLeg2;
	var body_canvas;
	var rearLeg1;
	var frontLeg1;
	var mandible;
	var upperHead;
	this.initialize();

	// head
	upperHead = this.upperHead = new lib.upperHead();
	upperHead.setTransform(-24,114,1,1,0,0,0,-279.1,-12);

	mandible = this.mandible = new lib.mandible();
	mandible.setTransform(20.6,108.1,1,1,-10.7,0,0,-263.6,-78);

	// frontLeg1
	frontLeg1 = this.frontLeg1 = new lib.rearLeg1();
	frontLeg1.setTransform(42.3,210.2,0.575,0.575,0,0,0,81,31.2);

	// rearLeg1
	rearLeg1 = this.rearLeg1 = new lib.rearLeg1();
	rearLeg1.setTransform(-188.6,180.8,1,1,0,0,0,81,31.2);

	// body
	body_canvas = this.body_canvas = new lib.BodyCanvasMC();
	body_canvas.setTransform(-193.5,182,1,1,0,0,0,336.1,116);

	// frontLeg2
	frontLeg2 = this.frontLeg2 = new lib.frontLeg2();
	frontLeg2.setTransform(98.9,182,1,1,0,0,0,43.9,16.6);

	// rearLeg2
	rearLeg2 = this.rearLeg2 = new lib.rearLeg2();
	rearLeg2.setTransform(-100.3,154.1,1,1,0,0,0,75.3,31.4);

	this.addChild(rearLeg2,frontLeg2,body_canvas,rearLeg1,frontLeg1,mandible,upperHead);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-529.6,6.3,1101.9,291.8);


(lib.CrocEntranceMC = function(mode,startPosition,loop) {
	var instance_20;
	var instance_19;
	var instance_18;
	var instance_17;
	var instance_16;
	var instance_15;
	var instance_14;
	var instance_13;
	var crocodile_eyes;
	var shape_5;
	var shape_4;
	var instance_12;
	var instance_11;
	var instance_10;
	var crocodile_snapping;
	var instance_9;
	var instance_8;
	var instance_7;
	var instance_6;
	var crocodile;
	var instance_5;
	var instance_4;
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	var frame_498;
	var frame_344;
	var frame_314;
	var frame_243;
	var frame_188;
	var frame_59;
	var frame_0;
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:0,"croc-enters":59,"croc-out":188,"croc-eyes-enter":243,"croc-eyes-out":314,"croc-snapping-enters":344,end:498});

	// timeline functions:
	frame_0 = this.frame_0 = function() {
		if (this.callback) {
			this.callback(this, "start");
		}
	}
	frame_59 = this.frame_59 = function() {
		if (this.callback) {
			this.callback(this, "croc-enters");
		}
	}
	frame_188 = this.frame_188 = function() {
		if (this.callback) {
			this.callback(this, "croc-out");
		}
	}
	frame_243 = this.frame_243 = function() {
		if (this.callback) {
			this.callback(this, "croc-eyes-enter");
		}
	}
	frame_314 = this.frame_314 = function() {
		if (this.callback) {
			this.callback(this, "croc-eyes-out");
		}
	}
	frame_344 = this.frame_344 = function() {
		if (this.callback) {
			this.callback(this, "croc-snapping-enters");
		}
	}
	frame_498 = this.frame_498 = function() {
		if (this.callback) {
			this.callback(this, "end");
		}
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).call(frame_0).wait(59).call(frame_59).wait(129).call(frame_188).wait(55).call(frame_243).wait(71).call(frame_314).wait(30).call(frame_344).wait(154).call(frame_498).wait(1));

	// corner overlay
	shape = this.shape = new Shape();
	shape.graphics.f("#000000").s().p("AGYB7QhMixiKiLQiKiKiyhMQiuhKi+gFIPNAAIAAPNQgFi+hKiug");
	shape.setTransform(1231.3,48.7);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#000000").s().p("AnmnmQAFC+BKCuQBMCyCKCKQCLCKCxBMQCuBKC+AFIvNAAg");
	shape_1.setTransform(48.7,671.3);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#000000").s().p("AnmnmIPNAAQi+AFiuBKQixBMiLCKQiKCLhMCxQhKCugFC+g");
	shape_2.setTransform(48.7,48.7);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#000000").s().p("AnmHnQC+gFCuhKQCyhMCKiKQCKiKBMiyQBKiuAFi+IAAPNg");
	shape_3.setTransform(1231.3,671.3);

	this.timeline.addTween(Tween.get({}).to({state:[{t:shape_3},{t:shape_2},{t:shape_1},{t:shape}]}).wait(499));

	// fieldgate
	instance = this.instance = new lib.bar();
	instance.setTransform(630.2,840,1,1.39,90,0,0,119,492.1);

	instance_1 = this.instance_1 = new lib.bar();
	instance_1.setTransform(630.2,-119,1,1.39,90,0,0,119,492.1);

	instance_2 = this.instance_2 = new lib.bar();
	instance_2.setTransform(-119,426.2,1,1.281,0,0,0,119,492.1);

	instance_3 = this.instance_3 = new lib.bar();
	instance_3.setTransform(1399,398.1,1,1.281,0,0,0,119,492.1);

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance_3},{t:instance_2},{t:instance_1},{t:instance}]}).to({state:[{t:instance_3},{t:instance_2},{t:instance_1},{t:instance}]},24).to({state:[]},165).wait(310));

	// user flowers (foreground)
	instance_4 = this.instance_4 = new lib.flowers();
	instance_4.setTransform(806.5,667.2,1.283,1.283,0,0,0,580,106.2);
	instance_4._off = true;

	this.timeline.addTween(Tween.get(instance_4).wait(189).to({_off:false},0).to({_off:true},162).wait(18).to({_off:false},0).wait(130));

	// grass - foreground
	instance_5 = this.instance_5 = new lib.grassforeground();
	instance_5.setTransform(430.9,1109,1.194,1.194,0,0,0,485.4,324.9);

	this.timeline.addTween(Tween.get(instance_5).wait(24).to({y:442},35,Ease.get(1)).to({_off:true},130).wait(310));

	// croc test
	crocodile = this.crocodile = new lib.CrocodileMC();
	crocodile.setTransform(-54.1,648.3,1.595,1.595,0,0,0,572.2,152.2);

	this.timeline.addTween(Tween.get(crocodile).wait(60).to({x:-1.2,y:638.7},0).to({x:304.9,y:650.4},14,Ease.get(1)).to({x:601.6,y:647},28,Ease.get(1)).to({x:992.8,y:646.4},28,Ease.get(1)).to({x:1484.3,y:636.1},27,Ease.get(1)).to({x:1816,y:640.2},31,Ease.get(1)).to({_off:true},1).wait(310));

	// grass - background
	instance_6 = this.instance_6 = new lib.Tween1("synched",0);
	instance_6.setTransform(625.1,1081.7,1,1.252);

	this.timeline.addTween(Tween.get(instance_6).wait(24).to({startPosition:0},0).to({y:401.8},35,Ease.get(1)).to({_off:true},130).wait(310));

	// elephantshock
	instance_7 = this.instance_7 = new lib.elephantshock();
	instance_7.setTransform(650,370,1,1,0,0,0,650,370);

	instance_8 = this.instance_8 = new lib.ripple();
	instance_8.setTransform(612.1,565.3,0.162,3.797,90,0,0,89,0);
	instance_8._off = true;

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:instance_7}]},351).to({state:[{t:instance_8}]},18).to({state:[{t:instance_8}]},5).to({state:[{t:instance_8}]},20).to({state:[{t:instance_8}]},1).to({state:[{t:instance_8}]},20).to({state:[{t:instance_8}]},1).to({state:[{t:instance_8}]},20).to({state:[{t:instance_8}]},1).to({state:[{t:instance_8}]},23).to({state:[{t:instance_8}]},1).wait(38));
	this.timeline.addTween(Tween.get(instance_8).wait(369).to({_off:false},0).wait(5).to({rotation:-90,x:807.1,y:577.3},0).to({x:483.1,y:564.3},20).to({rotation:90,x:323},1).to({x:627.1},20).to({regX:88.8,scaleY:3.8,rotation:-90,x:840.1},1).to({x:475},20).to({rotation:90,x:324},1).to({x:184.9},23).to({scaleX:3.76,scaleY:0.91,rotation:0,x:446.2},1).wait(38));

	// splash
	instance_9 = this.instance_9 = new lib.splash();
	instance_9.setTransform(371.9,436.5,2.544,2.544,0,0,0,-32.3,20.8);
	instance_9._off = true;

	this.timeline.addTween(Tween.get(instance_9).wait(340).to({_off:false},0).wait(159));

	// croc-snapping mask (mask)
	var mask = new Shape();
	mask._off = true;
	var mask_graphics_344 = new cjs.Graphics().p("EhlKAssMAAAhZXMDKVAAAMAAABZXg");

	this.timeline.addTween(Tween.get(mask).to({graphics:null,x:0,y:0}).wait(344).to({graphics:mask_graphics_344,x:640.5,y:286.1}).wait(155));

	// croc-snapping
	crocodile_snapping = this.crocodile_snapping = new lib.CrocodileSnappingMC();
	crocodile_snapping.setTransform(398.2,572.1,1,1,-55.4,0,0,21.3,152.2);
	crocodile_snapping._off = true;

	crocodile_snapping.mask = mask;

	this.timeline.addTween(Tween.get(crocodile_snapping).wait(344).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,rotation:-54.7,x:410.2},0).to({regX:21.4,scaleX:1,scaleY:1,rotation:-34,x:744.3},28).to({regX:21.3,rotation:0,skewX:62.2,skewY:-117.8,x:744.2},1).to({skewX:41.8,skewY:-138.2,x:374.1},20).to({rotation:-55.4,skewX:0,skewY:0,x:398.2},1).to({regX:21.4,rotation:-34,x:744.3},20).to({regX:21.3,rotation:0,skewX:62.2,skewY:-117.8,x:744.2},1).to({skewX:41.8,skewY:-138.2,x:374.1},20).to({rotation:-55.4,skewX:0,skewY:0,x:398.2},1).to({regX:21.4,regY:152.1,rotation:-14.7,y:572},23).wait(39));

	// animals
	instance_10 = this.instance_10 = new lib.snakedrinking();
	instance_10.setTransform(495.6,439.2,1,1,0,0,0,11.2,40.2);

	instance_11 = this.instance_11 = new lib.drinkelephant();
	instance_11.setTransform(1343.1,270,1,1,0,0,0,524.9,306.4);

	instance_12 = this.instance_12 = new lib.zebradrinking();
	instance_12.setTransform(796.3,455,1,1,0,0,0,175.2,255);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#F6E08B").s().p("EgpcAUgQTApJU7ixQSng3R6FNQDDA5C3BYQxakTx5AJQ4PAN2UJigEgnDADvQCNilC4hsQPBo2RchYITaAyIAQAeQqTgIqPAnQxoA9uqJxQh7BUhmBwgEglrgHmQLbnNNIjIQHchyHkhDQSngDSXC7ICgAaIAHBAQ2NiO2QBPQpqAhpLDJQn7CtncDyg");
	shape_4.setTransform(1190.2,231);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:instance_12},{t:instance_11},{t:instance_10}]},189).to({state:[{t:instance_12},{t:instance_11},{t:instance_10}]},155).to({state:[]},15).to({state:[{t:shape_4}]},9).to({state:[]},9).wait(122));

	// eye mask
	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#D0AFE5").s().p("EgwCAD1IAAnpMBgFAAAIAAHpg");
	shape_5.setTransform(398.6,588.3);
	shape_5._off = true;

	this.timeline.addTween(Tween.get(shape_5).wait(243).to({_off:false},0).wait(36).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},12).wait(184));

	// croc eyes
	crocodile_eyes = this.crocodile_eyes = new lib.CrocodileEyesMC();
	crocodile_eyes.setTransform(185.5,612.9,1,0.819,9.7,0,0,87.5,59.9);
	crocodile_eyes._off = true;

	this.timeline.addTween(Tween.get(crocodile_eyes).wait(243).to({_off:false},0).wait(1).to({scaleX:1,scaleY:0.82,rotation:9.3,x:188.9,y:611.3},0).to({scaleX:1,scaleY:1,rotation:0,x:309.6,y:557.8},35).wait(24).to({scaleY:0.75,y:608.5},11).to({_off:true},1).wait(184));

	// ripples
	instance_13 = this.instance_13 = new lib.ripple();
	instance_13.setTransform(359.8,532.8,0.472,0.472,0,0,0,90,9.6);

	instance_14 = this.instance_14 = new lib.ripple();
	instance_14.setTransform(268.3,555.3,0.545,0.545,0,0,0,90,9.6);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:instance_14},{t:instance_13,p:{scaleX:0.472,scaleY:0.472,x:359.8,y:532.8}}]},280).to({state:[{t:instance_13,p:{scaleX:1.393,scaleY:1.393,x:313.7,y:541.2}}]},9).to({state:[]},9).to({state:[{t:instance_14},{t:instance_13,p:{scaleX:0.472,scaleY:0.472,x:359.8,y:532.8}}]},17).to({state:[{t:instance_13,p:{scaleX:1.393,scaleY:1.393,x:313.7,y:541.2}}]},9).to({state:[]},9).wait(166));

	// pond
	instance_15 = this.instance_15 = new lib.pond();
	instance_15.setTransform(522.2,542.2,1,1,0,0,0,605,103.9);
	instance_15._off = true;

	this.timeline.addTween(Tween.get(instance_15).wait(189).to({_off:false},0).wait(310));

	// flowers-bg
	instance_16 = this.instance_16 = new lib.flowers();
	instance_16.setTransform(1163.1,402.9,0.647,0.647,0,0,0,580,106.2);

	instance_17 = this.instance_17 = new lib.flowers();
	instance_17.setTransform(371.3,391.7,0.629,0.542,0,0,0,579.9,106.2);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:instance_17},{t:instance_16}]},189).wait(310));

	// horizon
	instance_18 = this.instance_18 = new lib.horizon();
	instance_18.setTransform(640,639,1,1,0,0,0,640,51);

	this.timeline.addTween(Tween.get(instance_18).wait(24).to({y:441},35,Ease.get(1)).wait(440));

	// sunmask (mask)
	var mask_1 = new Shape();
	mask_1._off = true;
	var mask_1_graphics_24 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_42 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_48 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_49 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_51 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_52 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_53 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_54 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_57 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_58 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Egg9AwSMAAAhgjMCIQAAAMAAABgjg");

	this.timeline.addTween(Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_1_graphics_24,x:661.2,y:280.9}).wait(1).to({graphics:mask_1_graphics_25,x:661.2,y:269.8}).wait(1).to({graphics:mask_1_graphics_26,x:661.2,y:259.1}).wait(1).to({graphics:mask_1_graphics_27,x:661.2,y:248.7}).wait(1).to({graphics:mask_1_graphics_28,x:661.2,y:238.6}).wait(1).to({graphics:mask_1_graphics_29,x:661.2,y:228.9}).wait(1).to({graphics:mask_1_graphics_30,x:661.2,y:219.4}).wait(1).to({graphics:mask_1_graphics_31,x:661.2,y:210.3}).wait(1).to({graphics:mask_1_graphics_32,x:661.2,y:201.5}).wait(1).to({graphics:mask_1_graphics_33,x:661.2,y:193}).wait(1).to({graphics:mask_1_graphics_34,x:661.2,y:184.9}).wait(1).to({graphics:mask_1_graphics_35,x:661.2,y:177}).wait(1).to({graphics:mask_1_graphics_36,x:661.2,y:169.5}).wait(1).to({graphics:mask_1_graphics_37,x:661.2,y:162.3}).wait(1).to({graphics:mask_1_graphics_38,x:661.2,y:155.4}).wait(1).to({graphics:mask_1_graphics_39,x:661.2,y:148.9}).wait(1).to({graphics:mask_1_graphics_40,x:661.2,y:142.6}).wait(1).to({graphics:mask_1_graphics_41,x:661.2,y:136.7}).wait(1).to({graphics:mask_1_graphics_42,x:661.2,y:131.1}).wait(1).to({graphics:mask_1_graphics_43,x:661.2,y:125.8}).wait(1).to({graphics:mask_1_graphics_44,x:661.2,y:120.9}).wait(1).to({graphics:mask_1_graphics_45,x:661.2,y:116.2}).wait(1).to({graphics:mask_1_graphics_46,x:661.2,y:111.9}).wait(1).to({graphics:mask_1_graphics_47,x:661.2,y:107.9}).wait(1).to({graphics:mask_1_graphics_48,x:661.2,y:104.2}).wait(1).to({graphics:mask_1_graphics_49,x:661.2,y:100.9}).wait(1).to({graphics:mask_1_graphics_50,x:661.2,y:97.8}).wait(1).to({graphics:mask_1_graphics_51,x:661.2,y:95.1}).wait(1).to({graphics:mask_1_graphics_52,x:661.2,y:92.7}).wait(1).to({graphics:mask_1_graphics_53,x:661.2,y:90.6}).wait(1).to({graphics:mask_1_graphics_54,x:661.2,y:88.9}).wait(1).to({graphics:mask_1_graphics_55,x:661.2,y:87.4}).wait(1).to({graphics:mask_1_graphics_56,x:661.2,y:86.3}).wait(1).to({graphics:mask_1_graphics_57,x:661.2,y:85.5}).wait(1).to({graphics:mask_1_graphics_58,x:661.2,y:85}).wait(1).to({graphics:mask_1_graphics_59,x:661.2,y:84.9}).wait(130).to({graphics:null,x:0,y:0}).wait(310));

	// sun
	instance_19 = this.instance_19 = new lib.sun();
	instance_19.setTransform(911.4,296.9,1,1,0,0,0,243.2,243.2);

	instance_19.mask = mask_1;

	this.timeline.addTween(Tween.get(instance_19).wait(24).to({y:276.9},35).to({_off:true},130).wait(310));

	// sky
	instance_20 = this.instance_20 = new lib.sky();
	instance_20.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(Tween.get(instance_20).wait(499));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-1811.9,-238,3330,1735.2);


(lib.LionRoarMC = function(mode,startPosition,loop) {
	var instance_12;
	var instance_11;
	var shape_13;
	var shape_12;
	var shape_11;
	var shape_10;
	var shape_9;
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var instance_10;
	var instance_9;
	var instance_8;
	var instance_7;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	var instance_6;
	var instance_5;
	var instance_4;
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	var frame_162;
	var frame_146;
	var frame_77;
	var frame_73;
	var frame_70;
	var frame_65;
	var frame_52;
	var frame_46;
	var frame_41;
	var frame_35;
	var frame_27;
	var frame_12;
	var frame_0;
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{intro:0,ready:70,pre_roar:73,roar:77,roar_level_10:93,roar_out:146,"end":162});

	// timeline functions:
	frame_0 = this.frame_0 = function() {
		if (this.callback) {
			this.callback(this, "intro");
		}
	}
	frame_12 = this.frame_12 = function() {
		if (this.callback) {
			this.callback(this, "bow");
		}
	}
	frame_27 = this.frame_27 = function() {
		if (this.callback) {
			this.callback(this, "head_left");
		}
	}
	frame_35 = this.frame_35 = function() {
		if (this.callback) {
			this.callback(this, "head_left");
		}
	}
	frame_41 = this.frame_41 = function() {
		if (this.callback) {
			this.callback(this, "head_left");
		}
	}
	frame_46 = this.frame_46 = function() {
		if (this.callback) {
			this.callback(this, "head_right");
		}
	}
	frame_52 = this.frame_52 = function() {
		if (this.callback) {
			this.callback(this, "head_neutral");
		}
	}
	frame_65 = this.frame_65 = function() {
		if (this.callback) {
			this.callback(this, "bow");
		}
	}
	frame_70 = this.frame_70 = function() {
		if (this.callback) {
			this.callback(this, "ready");
		}
	}
	frame_73 = this.frame_73 = function() {
		if (this.callback) {
			this.callback(this, "pre_roar");
		}
	}
	frame_77 = this.frame_77 = function() {
		if (this.callback) {
			this.callback(this, "roar");
		}
	}
	frame_146 = this.frame_146 = function() {
		if (this.callback) {
			this.callback(this, "roar_out");
		}
	}
	frame_162 = this.frame_162 = function() {
		if (this.callback) {
			this.callback(this, "end");
		}
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).call(frame_0).wait(12).call(frame_12).wait(15).call(frame_27).wait(8).call(frame_35).wait(6).call(frame_41).wait(5).call(frame_46).wait(6).call(frame_52).wait(13).call(frame_65).wait(5).call(frame_70).wait(3).call(frame_73).wait(4).call(frame_77).wait(69).call(frame_146).wait(16).call(frame_162).wait(1));

	// upperMouth
	instance = this.instance = new lib.upperMouth();
	instance.setTransform(651.5,291.6,1.046,1.046,0,0,0,-0.1,-56.2);

	this.timeline.addTween(Tween.get(instance).wait(12).to({y:291.8},0).to({x:652.4,y:425.1},8,Ease.get(1)).wait(7).to({regY:-56.1,rotation:14.5,x:642,y:424},6,Ease.get(1)).wait(2).to({rotation:-10.7,x:660.2,y:424.2},5,Ease.get(1)).wait(1).to({rotation:14.5,x:642,y:424},5,Ease.get(1)).to({regY:-56.2,rotation:0,x:652.4,y:425.1},6,Ease.get(1)).wait(13).to({scaleX:1.33,scaleY:0.51,x:654.8,y:501.2},5).wait(8).to({scaleX:1.99,scaleY:1.34,x:675.7,y:335},5,Ease.get(-1)).to({scaleX:3.55,scaleY:1.74,x:675.8,y:94.6},10).wait(53).to({scaleX:1.78,scaleY:0.92,x:673,y:321.8},0).to({scaleX:1.05,scaleY:1.05,x:651.5,y:291.6},3,Ease.get(1)).to({scaleX:1.44,scaleY:0.72,x:646,y:292},3).wait(11));

	// lowerMouth
	instance_1 = this.instance_1 = new lib.Tween2("synched",0);
	instance_1.setTransform(652,395.9);

	instance_2 = this.instance_2 = new lib.Tween12("synched",0);
	instance_2.setTransform(651.5,399.9,1.299,1);
	instance_2._off = true;

	this.timeline.addTween(Tween.get(instance_1).wait(4).to({startPosition:0},0).wait(8).to({x:651.5,y:396.6},0).to({x:652.3,y:529.2},8,Ease.get(1)).wait(7).to({startPosition:0},0).to({rotation:14.5,x:615.9,y:524.7},6,Ease.get(1)).to({startPosition:0},2,Ease.get(1)).to({rotation:-10.7,x:679.4,y:526.4},5,Ease.get(1)).to({startPosition:0},1,Ease.get(1)).to({rotation:14.5,x:615.9,y:524.7},5,Ease.get(1)).to({rotation:0,x:652.3,y:529.2},6,Ease.get(1)).to({startPosition:0},6).wait(7).to({startPosition:0},0).to({scaleX:1.27,scaleY:0.49,x:654.7,y:552.2},5).wait(8).to({startPosition:0},0).to({scaleX:1.2,scaleY:1.13,skewX:-176.8,x:649.9,y:570.4},2,Ease.get(-1)).to({scaleX:1.79,scaleY:2.46,skewX:-186.2,x:680.9,y:585.4},3).to({scaleX:3.1,scaleY:2.2,skewX:-180,x:668.4,y:671.3},10).wait(53).to({scaleX:1.67,scaleY:1.36,skewX:0,x:670.6,y:476.6},0).to({_off:true,scaleX:1.3,scaleY:1,x:651.5,y:399.9},3,Ease.get(1)).wait(14));
	this.timeline.addTween(Tween.get(instance_2).wait(146).to({_off:false},3,Ease.get(1)).to({scaleX:1.38,scaleY:0.69,x:645.9,y:374.9},3).wait(11));

	// innerMouth
	instance_3 = this.instance_3 = new lib.innerMouth();
	instance_3.setTransform(651.5,377.6,0.103,0.103);

	instance_4 = this.instance_4 = new lib.innerMouth2();
	instance_4.setTransform(677.8,497.6,0.205,0.229);
	instance_4._off = true;

	this.timeline.addTween(Tween.get(instance_3).wait(12).to({y:377.8},0).to({y:475.5},8,Ease.get(1)).wait(7).to({rotation:14.5,x:628.5,y:472.5},6,Ease.get(1)).wait(2).to({rotation:-10.7,x:668.7,y:473.8},5,Ease.get(1)).wait(1).to({rotation:14.5,x:628.5,y:472.5},5,Ease.get(1)).to({rotation:0,x:651.5,y:475.5},6,Ease.get(1)).wait(13).to({scaleX:0.11,scaleY:0.07,x:649.7,y:536.2},5).wait(8).to({_off:true,scaleX:0.21,scaleY:0.23,x:677.8,y:497.6},5,Ease.get(-1)).wait(63).to({_off:false,scaleX:0.18,scaleY:0.18,x:673.3,y:443.3},0).to({scaleX:0.1,scaleY:0.1,x:651.5,y:377.6},3,Ease.get(1)).to({_off:true},1).wait(13));
	this.timeline.addTween(Tween.get(instance_4).wait(78).to({_off:false},5,Ease.get(-1)).to({scaleX:0.42,scaleY:0.46,x:678.9,y:453.3},10).to({_off:true},53).wait(17));

	// eyes
	instance_5 = this.instance_5 = new lib.Tween5("synched",0);
	instance_5.setTransform(649.6,228.7);

	instance_6 = this.instance_6 = new lib.Tween6("synched",0);
	instance_6.setTransform(650.2,228.4);
	instance_6._off = true;

	shape = this.shape = new Shape();
	shape.graphics.f("#430002").s().p("AhQBRQgigiAAgvQAAguAigiQAigiAuAAQAvAAAiAiQAhAiABAuQgBAvghAiQgiAigvAAQguAAgigig");
	shape.setTransform(734.7,253,0.681,0.681);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#FFFFFF").s().p("AnGHHQi9i8AAkLQAAkJC9i9QC9i9EJAAQELAAC8C9QC9C9AAEJQAAELi9C8Qi8C9kLAAQkJAAi9i9g");
	shape_1.setTransform(739.3,248,0.681,0.681);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#430002").s().p("AhQBRQgigiABgvQgBguAigiQAigiAuAAQAvAAAiAiQAhAiAAAuQAAAvghAiQgiAigvAAQguAAgigig");
	shape_2.setTransform(571.2,253,0.681,0.681);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#FFFFFF").s().p("AnHHHQi9i8AAkLQAAkJC9i9QC9i9EKAAQELAAC9C9QC9C9AAEJQAAELi9C8Qi9C9kLAAQkKAAi9i9g");
	shape_3.setTransform(566.6,248,0.681,0.681);

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance_5,p:{scaleX:1,scaleY:1,x:649.6,y:228.7}}]}).to({state:[{t:instance_5,p:{scaleX:1,scaleY:1,x:649.6,y:228.7}}]},4).to({state:[{t:instance_6}]},8).to({state:[{t:instance_6}]},8).to({state:[{t:instance_6}]},7).to({state:[{t:instance_6}]},6).to({state:[{t:instance_6}]},2).to({state:[{t:instance_6}]},5).to({state:[{t:instance_6}]},1).to({state:[{t:instance_6}]},5).to({state:[{t:instance_6}]},6).to({state:[{t:instance_6}]},6).to({state:[{t:instance_6}]},7).to({state:[{t:instance_6}]},5).to({state:[{t:instance_6}]},8).to({state:[{t:instance_6}]},5).to({state:[{t:instance_6}]},10).to({state:[{t:instance_6}]},53).to({state:[{t:instance_5,p:{scaleX:1.291,scaleY:1.291,x:661.6,y:254.8}}]},1).to({state:[{t:shape_3},{t:shape_2},{t:shape_1},{t:shape}]},1).wait(15));
	this.timeline.addTween(Tween.get(instance_6).wait(12).to({_off:false},0).to({y:355.3},8,Ease.get(1)).wait(7).to({startPosition:0},0).to({rotation:14.5,x:657.8,y:360.4},6,Ease.get(1)).to({y:356.4},2,Ease.get(1)).to({rotation:-10.7,x:643.7,y:356.3},5,Ease.get(1)).to({x:645.7,y:362.3},1,Ease.get(1)).to({rotation:14.5,x:659.8,y:356.4},5,Ease.get(1)).to({rotation:0,x:650.2,y:359.3},6,Ease.get(1)).to({y:357.3},6).wait(7).to({y:359.3},0).to({scaleX:0.91,scaleY:0.71,x:649.8,y:437.3},5).wait(8).to({y:433.3},0).to({scaleX:1.36,scaleY:1.36,x:670,y:217.3},5,Ease.get(-1)).to({y:143.3},10).wait(53).to({x:670.3,y:235.4},0).to({_off:true,scaleX:1.29,scaleY:1.29,x:661.6,y:254.8},1).wait(16));

	// ears
	instance_7 = this.instance_7 = new lib.Tween7("synched",0);
	instance_7.setTransform(648.2,95.2);

	instance_8 = this.instance_8 = new lib.Tween8("synched",0);
	instance_8.setTransform(648.2,95.5);
	instance_8._off = true;

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance_7}]}).to({state:[{t:instance_7}]},4).to({state:[{t:instance_8}]},8).to({state:[{t:instance_8}]},8).to({state:[{t:instance_8}]},7).to({state:[{t:instance_8}]},6).to({state:[{t:instance_8}]},2).to({state:[{t:instance_8}]},5).to({state:[{t:instance_8}]},1).to({state:[{t:instance_8}]},5).to({state:[{t:instance_8}]},6).to({state:[{t:instance_8}]},6).to({state:[{t:instance_8}]},7).to({state:[{t:instance_8}]},5).to({state:[{t:instance_8}]},8).to({state:[{t:instance_8}]},5).to({state:[{t:instance_8}]},10).to({state:[{t:instance_8}]},53).to({state:[{t:instance_8}]},3).wait(14));
	this.timeline.addTween(Tween.get(instance_8).wait(12).to({_off:false},0).to({scaleX:1.09,scaleY:1.09,y:168.6},8,Ease.get(1)).wait(7).to({startPosition:0},0).to({rotation:14.5,x:702.1,y:174.6},6,Ease.get(1)).to({startPosition:0},2,Ease.get(1)).to({rotation:-10.7,x:608.4,y:173},5,Ease.get(1)).to({startPosition:0},1,Ease.get(1)).to({rotation:14.5,x:702.1,y:174.6},5,Ease.get(1)).to({rotation:0,x:648.2,y:168.6},6,Ease.get(1)).to({startPosition:0},6).wait(7).to({startPosition:0},0).to({scaleX:0.88,scaleY:0.88,x:646.9,y:244.6},5).wait(8).to({startPosition:0},0).to({scaleX:1.43,scaleY:1.31,x:667.4,y:99.3},5,Ease.get(-1)).to({scaleX:1.32,scaleY:0.86},10).wait(53).to({scaleX:1.4,scaleY:0.88,x:667.7,y:129.3},0).to({scaleX:1,scaleY:1,x:648.2,y:95.5},3,Ease.get(1)).wait(14));

	// head
	instance_9 = this.instance_9 = new lib.head();
	instance_9.setTransform(651.6,207);

	this.timeline.addTween(Tween.get(instance_9).wait(12).to({y:207.2},0).to({y:290.3},8,Ease.get(1)).wait(7).to({rotation:14.5,x:674.9,y:293.2},6,Ease.get(1)).wait(2).to({rotation:-10.7,x:634.3,y:291.9},5,Ease.get(1)).wait(1).to({rotation:14.5,x:674.9,y:293.2},5,Ease.get(1)).to({rotation:0,x:651.6,y:290.3},6,Ease.get(1)).wait(13).to({scaleX:0.9,scaleY:0.81,x:650,y:366.5},5).wait(8).to({scaleX:1.36,scaleY:1.36,x:672,y:281.4},5,Ease.get(-1)).to({scaleY:0.97,y:215.4},10).wait(53).to({scaleY:1.36,x:672.3,y:281.5},0).to({scaleX:1,scaleY:1,x:651.6,y:207.2},3,Ease.get(1)).to({scaleY:0.93,y:199.6},3).wait(11));

	// mane
	instance_10 = this.instance_10 = new lib.mane();
	instance_10.setTransform(654.2,93.5,1.046,1.046,0,0,0,2.5,-231.7);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#CF481C").s().p("EgCsA89Qjehrjsh9Qr2mTp5nDQtzp2n5p7Qp4saAAr0QABsoE9rkQEyrLIvomQIxooLVktQLvk6M1AAQM2AALuE6QLWEtIxIoQIuImEzLLQE9LkAAMoQAAL0p4MaQn5J7tzJ2Qp4HDr2GTQl8DJj7Bvg");
	shape_4.setTransform(672,420.9);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#CF481C").s().p("EgBxA9uIgrgUQiFg9iThJQh2g6h4g/QkKiLj6iRQhvgshqguQmDjZlSjwQiChch5hfQlTkJkGkZQinhYiUhYQiejFh/jEQiBjGhfjCQimlPhBlBQihjyg+jsQAHpKDCoeQBhkSCOkFQBpjEB/i3QBFjqBqjSQC3jSDVi5QCriWC5h/QFCjfFnibQB6hqCFhaQBCgtBDgoQH0iWHwggQEHgOD/AUQA3AEA0AGQEOghEmALQITAjImC0IBdAhQDVCpC6DTQFXCiE8DpIBLA4QHNFnFPHdQA1C2AdDEIAIA2QDzGkB3HGQBgFdASFwQAJCjgUCoQhpDmjJDsQhhE1i8FDIg3BZQjOFOksFWQicBSivBTQj7D5k4DsIg9AuQm+FJoaEgQhnAohrAnQhjA3hlA2QkoCdj0BxQhcArhQAjQhLgUhKgWg");
	shape_5.setTransform(671.7,416.2);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.f("#CF481C").s().p("EgBeA+hIgxgVQiPhBiphRQiEhAiFhEQkpiYkVihQhIgBhEgCQm4jll0kHQiRhniEhqQl1ktkMlJQimgWiVgWQifjmh7jhQh8jlhWjfQiUl9gilnQjSifh6iZQAOp/D4pCQB7khCwkQQCAjJCbi8QgMjEAUixQDRjdDwi8QDDiZDRh+QFrjbGQiKQA+hxBHhkQAkgxAjguQIxiMIRgLQEigBEOAmQA7AJA5ALQEUhJFOgPQI6gFJ8CnIBpAeQB1DLBeDvQGGCBF0DcIBZA2QIcFWGWH3QgSCYglClIgLAuQE+GxCoHhQCKF5AlGUQAQC0gOC6QihCUj0CZQg9FdioFyIgyBmQi8GCksGSIlIAiQkAEmlTEOIhDA0QnjFzplEzIiJgCQhtA9hwA7QlBCrkXCBQhnAvhYAmQhWgJhQgOg");
	shape_6.setTransform(671.6,409.5);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.f("#CF481C").s().p("EgBMA/bIg2gXQibhEi+haQiShGiShKQlHimkwiwIhABTQnsjwmWkeQighxiQh2QmWlPkUl7QikAsiWAsQigkGh2kAQh5kDhMj7QiDmsgCmNQkChLi3hGQAVq0EvpnQCTkwDUkaQCXjPC3i/QheighCiPQDrjoEMjAQDZibDqh8QGUjZG5h5QACh4AJhsIAKhpQJuiEIwAKQE/AMEcA6QA/ANA8AQQEchxF1gqQJigsLSCaIB1AcQAWDrABELQG1BhGtDPQAzAZAzAaQJrFGHdIQQhYB7hpCGIgeAlQGKG+DYH8QC1GVA3G4QAZDFgJDNQjZBCkgBGQgZGEiUGjQgVA4gXA5QiqG2ksHOQicgwipgwQkFFUluEvIhJA7QoIGcqwFFQgegpgigqQh3BDh7BBQlZC4k8CQQhyA0hgAqIg3ABQhCAAg9gEg");
	shape_7.setTransform(671.7,402.3);

	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.f("#CF481C").s().p("EgB2A/6QinhIjThiQighMifhPQllizlMjAQAFBWAIBUQohj9m4k1Qivh6ibiDQm4lxkbmsQiiBuiXBuQihknhykdQh0kjhDkXQhynbAfmzQkzAJj1ANQAcroFnqMQCsk/D2klQCujUDTjEQivh7iYhtQEGjzEnjDQDwieEBh7QG+jVHihoIhvj1Ig0hzQKrh7JRAgQFaAYErBNQBDATBAAUQEiiZGdhEQKKhUMoCNICBAZQhKENhcEnQHlBAHlDDQA6AXA6AZQK7E1IkIqIlMDEIgwAdQHWHLEIIXQDfGwBJHcQAiDWgFDgQkQgQlLgNQALGriAHUQgTA+gUA/QiYHqksIKQibhxinhyQkKGBmKFSQgmAggoAgQosHGr8FYQAGhSADhSQiBBIiGBIQlyDElgCgQh8A5hpAtQhsANhaADIg7gYg");
	shape_8.setTransform(671.8,395.2);

	shape_9 = this.shape_9 = new Shape();
	shape_9.graphics.f("#CF481B").s().p("EgBrBAyQizhLjohsQiuhRishVQmEjAlmjPQArCAAuCAQpWkJnalLQi9iFioiPQnZmUkincQihCwiXCwQijlIhuk7QhvlBg5kzQhhoLA/nWQlkBbkxBfQAjsdGdqwQDGlOEYkvQDGjaDujIQkAhXjvhLQEgj+FDjFQEHiiEah5QHmjSIMhXIjpkFQg5hAg5g9QLnhyJzA1QF1AlE5BgQBHAXBEAaQEqjBHEhgQKxh7N/CAICNAXQiqEui4FDQITAfIeC2QBAAWBBAYQMKEkJrJDQjlBBjwBIIhDATQIiHZE5IyQEIHMBdIAQAqDnAADyQlHhil4hgQAvHThtIDQgPBFgRBFQiGIeksJGQibizilizQkOGvmmFzIhTBHQpRHvtHFrQAqh6Aoh8QiMBPiQBNQmKDSmFCwQiGA9hyAwQh2AXhhANIg/gag");
	shape_9.setTransform(672.1,387.9);

	shape_10 = this.shape_10 = new Shape();
	shape_10.graphics.f("#CF481B").s().p("EgBhBBtQi9hPj+h0Qi9hWi4hbQmjjOmAjeQBRCrBUCrQqMkUn7ljQjLiOi0ibQn7m3kpoNQifDyiXDyQiklphqlZQhslggulPQhQo5Ben9QmUCvluCzQAqtTHTrUQDgldE6k6QDdjfEKjMQlSgylEgqQE7kIFejJQEdikEyh4QIQjPI2hGQi0iOiwiIIiwiGQMkhpKTBKQGSAxFHB0QBLAbBIAfQEyjpHqh6QLZiiPVByQBMAJBNALIofKvQJDgBJWCoQBIAVBHAWQNaEUKyJdQksAjk0ApIhWALQJuHmFqJNQEyHoBvIkQAyD3AFEGQl/i1miixQBTH5hZIzQgMBLgPBLQh0JSksKCQibj0iij0QkTHcnBGUIhYBOQp3IYuTF+QBPijBOikQiXBVibBSQmjDfmpDAQiRBBh6A0QiBAihmAVIhFgbg");
	shape_10.setTransform(672.4,380.3);

	shape_11 = this.shape_11 = new Shape();
	shape_11.graphics.f("#CF481B").s().p("EgBWBCpQjJhRkSh9QjLhcjGhhQnAjbmdjuIDyGtQrAkgoel6QjaiYi/inQocnZkxo/QidE0iZE0QilmJhll3Qhnl/gmlrQg/poB/ojQnEEDmsEFQAxuHIMr5QD3lsFdlEQD1jlEljQQmjgNmagIQFVkTF6jNQEzinFMh2QI4jMJfg1QjwiUjuiRIjuiRQNihgKzBfQGtA+FWCHQBPAgBLAkQE6kRISiVQMAjKQsBmQBSAIBTAKQlrFwlwF7QJxghKOCbQBOATBOAVQOqEEL5J2QlyAGl4AKIhpACQK7HzGZJoQFdIECBJIQA7EIAKEYQm2kHnOkEQB3IhhFJkQgKBQgNBRQhgKGktK+Qibk1ifk1QkXIJndG2QgvArgvApQqcJCvdGQQBzjMBxjMQigBbimBYQm8DsnNDPQicBGiBA4QiMAthsAeIhKgeg");
	shape_11.setTransform(672.6,372.5);

	shape_12 = this.shape_12 = new Shape();
	shape_12.graphics.f("#CF481B").s().p("EgBMBDoQjUhVkoiFQjZhijShmQngjpm3j9IE+IDQr0kspAmQQjpijjLizQo+n8k3pvQicF2iZF2QinmqhhmVQhimdgcmIQgtqXCepIQn1FYnoFXQA3u9JCsdQESl7F/lPQEMjqFBjUQn1AXnvAaQFvkeGVjQQFKipFkh1QJhjJKIgkIpXk2IktiaQOfhYLVB1QHIBLFkCaQBUAkBNApQFDk5I4ivQMojxSCBYQBYAGBZAJQnKGSnNGXQKhhCLFCPQBWARBVAUQP5DzNAKQQm5gXm7gWIh7gGQMFIAHLKDQGHIgCTJrQBEEaAPErQnvlan4lXQCaJIgyKUQgHBXgJBXQhOK6kuL6QiZl2idl3QkdI3n4HXQgxAugzAtQq/JrwqGjIEunpQirBhiwBeQnUD5nyDfQinBKiKA7QiVA4h1AmIhNgfg");
	shape_12.setTransform(672.9,364.5);

	shape_13 = this.shape_13 = new Shape();
	shape_13.graphics.f("#CF481B").s().p("EgJeBBBQr4lUqemCIGLJaQx1m2rlqVQpgoek+qgIk0NwQlSuegjtAQgdrGC/puIxLNVQA/vxJ5tCQH7qdNRoOIyLB4QLKobNMkBQKLjFKygTIw8nrQPchPL0CKQJXBtGpDvIACgBQFHlgJhjKQOOkuVWBtIxUNmQLRhiL+CCQS0DMPTLiIyMh4QNRIOH7KdQJ5NCA+PxIxKtVQC/JvgeLFQgiNAlTOeIkztwQk+KgphIeQrkKVx1G2IF4o7QqSF2riFJQlxCljuBaQjyhdl8iqg");
	shape_13.setTransform(673.2,356.5);

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance_10}]}).to({state:[{t:instance_10}]},4).to({state:[{t:instance_10}]},8).to({state:[{t:instance_10}]},8).to({state:[{t:instance_10}]},9).to({state:[{t:instance_10}]},7).to({state:[{t:instance_10}]},1).to({state:[{t:instance_10}]},6).to({state:[{t:instance_10}]},1).to({state:[{t:instance_10}]},5).to({state:[{t:instance_10}]},5).to({state:[{t:instance_10}]},4).to({state:[{t:instance_10}]},7).to({state:[{t:instance_10}]},5).to({state:[{t:instance_10}]},8).to({state:[{t:instance_10}]},4).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[{t:shape_9}]},1).to({state:[{t:shape_10}]},1).to({state:[{t:shape_11}]},1).to({state:[{t:shape_12}]},1).to({state:[{t:shape_13}]},1).to({state:[{t:shape_13}]},1).to({state:[{t:instance_10}]},53).to({state:[{t:instance_10}]},3).wait(14));
	this.timeline.addTween(Tween.get(instance_10).wait(12).to({y:93.7},0).to({y:141},8,Ease.get(1)).wait(9).to({scaleY:1.06,skewX:8.5},7,Ease.get(-1)).wait(1).to({regY:-231.8,scaleY:1.05,skewX:-10.7,skewY:-5,x:654.1,y:140.9},6).wait(1).to({regX:2.3,regY:-231.6,scaleX:1.15,scaleY:1.07,skewX:15.3,skewY:3.8,x:676.5,y:149.4},5).to({regX:2.5,regY:-231.8,scaleX:1.05,scaleY:1.05,skewX:-6.9,skewY:-1,x:654.2,y:141},5).to({regY:-231.7,scaleY:1.05,skewX:0,skewY:0},4,Ease.get(1)).wait(7).to({scaleX:0.94,scaleY:0.94,x:652.3,y:171.6},5).wait(8).to({scaleX:1.25,scaleY:1.25,x:667.2,y:143},4,Ease.get(-1)).to({_off:true},1).wait(63).to({_off:false,regY:-231.6,scaleX:1.42,scaleY:1.42,x:675.8,y:127},0).to({regY:-231.7,scaleX:1.05,scaleY:1.05,x:654.2,y:93.5},3,Ease.get(1)).wait(14));

	// body & tail
	instance_11 = this.instance_11 = new lib.body();
	instance_11.setTransform(858.5,548,1,1,0,0,0,0,-19.7);

	this.timeline.addTween(Tween.get(instance_11).wait(65).to({y:574},5).wait(8).to({regY:-19.6,scaleX:1.36,scaleY:1.36,x:953.5,y:745.2},5).wait(63).to({regY:-19.7,scaleX:1,scaleY:1,x:858.5,y:548},3).wait(14));

	// BG White
	instance_12 = this.instance_12 = new lib.Symbol1();
	instance_12.setTransform(640,360,2.09,3.425);

	this.timeline.addTween(Tween.get(instance_12).wait(163));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,1280,752.4);


// stage content:
(lib.lion = function(mode,startPosition,loop) {
	var instance;
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// CrocEntrance
	instance = this.instance = new lib.CrocEntranceMC();
	instance.setTransform(-147,629.6,1,1,0,0,0,-147,629.6);

	this.timeline.addTween(Tween.get(instance).wait(163));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-1171.9,122,3330,1735.2);

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;