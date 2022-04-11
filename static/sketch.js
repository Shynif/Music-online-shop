let m,bk,stuff,pat;
let t=0;
let randSketch = [0,1,2,3,4]
let col=['#ff628c', '#FF9D00', '#fad000', '#2ca300', '#2EC4B6', '#5D37F0'];
let o=0;
let face='⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚⚫🌚🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🐘🐘🐘🐘🐘🐘🐘🐘🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🌕🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🌕🌕🌕🐘🐘🐘🐘🐘🐘🐘🐘🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🌕🌕🌕🌕🌕🐘🐘🌕🌕🐘🐘🐘🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🌕🌕🌕🌕🌕🐘🐘🐘🌕🌕🌕🐘🐘🐘🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🌕🌕🌕🌕🌕🐘🐘🐘🌕🌕🌕🌕🌕🌕🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🌕🌕🌕🌕🌕🌕🐘🐘🌕🌕🌕🌕🌕🌕🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🐘🌕⚪🌕⚫⚫⚫🐘🌕🌕🌕🌕🌕🐘🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🌚🌕🌕🌚🌚⚫🐘🐘🌕🌕🌕🌕🌕🐘🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚⚫🌚🌕🌚🌚🌚🐘🌚🐘🌕🌕🐘🌕🌕⚪🌕⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🐘🌕🌕🐘🐘🐘🐘🐘🐘🌕🌕🌕🌕🌕🐘🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🌕🌕🐘🌕🌕🐘🌕🌕🌕🌕🌕🌚🐘⚫🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🌕⚪🐘🌕🌕🌕🌕🌕🌕🌕🌚⚫🌚🐘🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🌕🌚🌚🌚🌚🌕🌕🌕🌕🌕🌚⚫🌚🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🐘🌕⚫⚫⚫⚫🐘🐘🌕🌕🌚⚫⚫🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚⚫⚫🐘⚫🌚⚫🌚🌕🌚⚫⚫⚫🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🌚⚫🌚🌕🌚🌚🌚⚫🌚⚫⚫⚫🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚⚫🌕🌕🌚⚫⚫⚫⚫⚫⚫⚫⚫🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🌚🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🐘🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌕🌕🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚⚫⚫⚫⚫⚫⚫⚫⚫🌚🌚🌕🌕🌕🌕🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚⚫⚫⚫⚫⚫🌚⚫🐘🌕🌕🌕🌕🌕🌕⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🐘🐘🐘🐘🐘🌕🐘🌕🌕🌕🌕🌕🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🐘🐘🐘🐘🌕🌕🐘🐘🐘🐘🌕🌕🌕🌕🐘🐘🌕🌕🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🐘🌕🌕🐘🌕🌕🌕🐘🐘🐘🐘🐘🐘🐘🐘🐘🌕🌕🌕🌕🌕🌚🌚⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚⚫⚫🐘🌕🌕🌕🌕🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘🌕🐘🐘🌕🌕🌕🐘🌕⚫🐘⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🌚🌕🌕🌕🌕🌕🌕🌕🌕🌕🐘🐘🐘🐘🐘🐘🌚🌚🐘🐘🌕🌕🌕🌕🐘🐘🐘🌕🌕🌕🌕⚫⚫⚫⚫⚫⚫⚫⚫🌚🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🐘🐘🌚🐘🌚🌚🐘🐘🌕🌕🌕🌕🌕🌕🌕🌕🐘🌕🐘🌕🌕⚫⚫⚫⚫⚫⚫⚫🐘🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🐘🌕🌕🌕🐘🐘🐘🌚🐘🌕🐘🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕⚫⚫⚫⚫⚫⚫⚫🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🐘🌕🌕🌚🌕🌚🐘🐘🐘🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕⚫⚫⚫⚫⚫⚫🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🐘🌕🐘🐘🐘🐘🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🐘🌕🌕⚫⚫⚫⚫⚫⚫🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🐘🐘🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🐘🌕🌕⚫⚫⚫⚫⚫🐘🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🐘🌕🌕⚫⚫⚫⚫⚫🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕⚫⚫⚫⚫⚫🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕⚫⚫⚫⚫⚫🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕🌕'
face=Array.from(face)
const patterns = [
	'pat.pattern(PTN.wave(10, 10, 20, 5));',
	'pat.pattern(PTN.wave(5, 5, 10, 5));',
	'pat.pattern(PTN.wave(20, 5, 25, 15));',
	'pat.pattern(PTN.cross(random(m/50,m/90), random(m/200,m/128)));',
	'pat.pattern(PTN.stripe(random(6,12)));',
	'pat.pattern(PTN.dot(m/90,m/170));',
];

function setup() {
  var canvas = createCanvas(windowWidth*0.95,windowHeight);
  canvas.parent('sketch-holder');
  m=min(width,height);
  
  vinyl=createGraphics(width/2+10,height/2+10);
  vinyl.noFill();
  vinyl.translate(width/4,height/4);
  for (var r=m/60;r<m/2;r++){
    if (r<m/10) vinyl.stroke(random(200,240));
    else vinyl.stroke(random(50));
    vinyl.circle(0,0,r);
  }
  
  bk=createGraphics(width,height);
  bk.drawingContext.shadowOffsetY = height*0.75;
  bk.drawingContext.shadowBlur = 150;
  bk.drawingContext.shadowColor = 'black';
  bk.stroke(255);
  bk.fill(255);
  bk.background(255);
  bk.ellipse(width*0.5,0,width*0.4,height*0.05);

  randSketch = random(randSketch)
  col=random(col);

  if (randSketch==2) {
    stuff=createGraphics(m/2,m/2+20)
    stuff.fill(0);
    stuff.stroke(0);
    stuff.rect(0,0,m/2,m/2+20);
    stuff.textSize(7*(m/800));
    for (let y=0;y<41;y++){
      for (let i=0;i<40;i++){
        stuff.text(face[i+y*40],1+i*10*(m/800),14*(m/800)+y*10*(m/800));
      }
    }
    stuff.filter(GRAY);
    stuff.stroke(255);
    stuff.strokeWeight(3);
    stuff.fill(255);
    stuff.textAlign(RIGHT);
    stuff.textSize(64*(m/800));
    stuff.text('R4ph',m/2-m/64,m/2-m/16);
    stuff.text('R011',m/2-m/64,m/2);
  }

  if (randSketch==4) {
    push();
    pat=createGraphics(m/2,m/2+20);
    pat.fill(255);
    colorMode(HSB);
    const jump=m/10;
    for (let x=0; x<m/2+jump; x+=jump){
      for (let y=0; y<m/4+m/8; y+=jump){
        const col=color(random()*360,80,90);
        const palette = [col, color(255)];
        pat.patternColors(palette);
        pat.patternAngle(random(TWO_PI));
        eval(random(patterns));
        pat.push();
        pat.translate(x,y);
        pat.rotate(noise(x,y)*TWO_PI);
        pat.trianglePattern(0,0,jump/2.5,jump/4,jump/2.5,-jump/4);
        pat.circlePattern(0,0,jump/2);
        pat.trianglePattern(0,0,-jump/2.5,jump/4,-jump/2.5,-jump/4);
        pat.pop();
      }
    }
    pop();
  }
}

function draw() {
  /// Pre Draw
  push();image(bk,0,0);
  translate(width*1.6-width*easeOutSine(min(1,t)),height/2);
  rotate(max(-t,-1));
  image(vinyl,-width/4,-height/4);
  t+=0.01;pop();
  
  /// Real Draw B)
  switch(randSketch) {
    case 0:
      translate(width*0.6-m/2,height/2-m/4);
      noStroke();
      stuff=createGraphics(m/2,m/2+20);
      stuff.fill(28);
      stuff.noStroke();
      stuff.rect(0,0,m/2,m/2+20);
      stuff.push();
      stuff.translate(m/4,m/4);
      stuff.rotate(easeInOutElastic(clamp((t-2)%2.5,0,1))*TWO_PI);
      stuff.push();
      stuff.fill(255);
      stuff.stroke(255);
      stuff.translate(-(m/256)*clamp(t-1,0,1),-(m/256)*clamp(t-1,0,1));
      stuff.triangle(0,0,  -m/8+(m/16)*clamp(t-1,0,1),0,      0,-m/8);
      stuff.translate((m/128)*clamp(t-1,0,1),0);
      stuff.triangle(0,0,  0,-m/8+(m/16)*clamp(t-1,0,1),      m/8,0);
      stuff.translate(0,(m/128)*clamp(t-1,0,1));
      stuff.triangle(0,0,  m/8-(m/16)*clamp(t-1,0,1),0,  0,m/8);
      stuff.translate(-(m/128)*clamp(t-1,0,1),0);
      stuff.triangle(0,0,  0,m/8-(m/16)*clamp(t-1,0,1),  -m/8,0);
      stuff.pop();
      stuff.rotate(QUARTER_PI);
      stuff.rectMode(CENTER);
      stuff.rect(0,0,m/50*clamp(t-1,0,1),m/50*clamp(t-1,0,1));
      stuff.pop();
        
      stuff.stroke(255);
      stuff.strokeWeight(3);
      stuff.fill(255);
      stuff.textAlign(RIGHT);
      stuff.textSize(32*(m/800));
      stuff.text('CIVILISATION',m/2-m/64,m/2);
      image(stuff,0,-10);
    break;

    case 1:
      translate(width*0.6-m/2,height/2-m/4);
      noStroke();
      stuff=createGraphics(m/2,m/2+20)
      stuff.fill(255,97,138);
      stuff.rect(0,0,m/2,m/2+20);
      stuff.fill(255);
      stuff.noStroke();
      stuff.push();
      stuff.translate(m/4,m/4);
      stuff.beginShape();
      stuff.curveVertex(-m/8,0);
      stuff.curveVertex(-m/8,0);
      stuff.curveVertex(0,-m/16);
      stuff.curveVertex(m/8,0);
      stuff.curveVertex(0,m/16);
      stuff.curveVertex(-m/8,0);
      stuff.curveVertex(-m/8,0);
      stuff.endShape();
      stuff.beginShape();
      stuff.curveVertex(m/8,0);
      stuff.curveVertex(m/8,0);
      stuff.curveVertex(0,-m/16);
      stuff.curveVertex(-m/8,0);
      stuff.curveVertex(0,m/16);
      stuff.curveVertex(m/8,0);
      stuff.curveVertex(m/8,0);
      stuff.endShape();
      stuff.fill(col);
      stuff.circle(map(mouseX,0,width,-m/45,m/45),map(mouseY,0,width,-m/75,m/75),m/10);
      stuff.fill(0);
      stuff.circle(map(mouseX,0,width,-m/35,m/35),map(mouseY,0,width,-m/65,m/65),m/16);
      stuff.noFill();
      stuff.stroke(0);
      stuff.strokeWeight(10*(m/800));
      stuff.push();stuff.translate(-m/8,-m/32);stuff.rotate(-0.5);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
      stuff.push();stuff.translate(-m/12,-m/18);stuff.rotate(-0.4);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
      stuff.push();stuff.translate(-m/24,-m/13);stuff.rotate(-0.3);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
      stuff.push();stuff.translate(0,-m/12);stuff.rotate(-0.2);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
      stuff.push();stuff.translate(m/8,-m/32);stuff.rotate(0.1);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
      stuff.push();stuff.translate(m/12,-m/18);stuff.rotate(0);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
      stuff.push();stuff.translate(m/24,-m/13);stuff.rotate(-0.1);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
      stuff.pop();
      
      stuff.stroke(255);
      stuff.strokeWeight(3);
      stuff.fill(255);
      stuff.textAlign(RIGHT);
      stuff.textSize(64*(m/800));
      stuff.text('Pixelmoar',m/2-m/64,m/2-m/16);
      stuff.text('Metamoar',m/2-m/64,m/2);
      image(stuff,0,-10);
    break;

    case 2:
      translate(width*0.6-m/2,height/2-m/4);
      image(stuff,0,-10);
    break;

    case 3:
      translate(width*0.6-m/2,height/2-m/4-10);
      fill(255);rect(0,0,m/2,m/2+20);
      noStroke();
      fill(25,64,191);rect(0,0,m/2,m/4+m/8+m/32);
      fill(245,213,10);rect(m/32,m/32, m/2-m/16,m/32);
      fill(245,131,10);rect(m/32,m/32*3, m/2-m/16,m/16);
      fill(214,11,11);rect(m/32,m/32*6, m/2-m/16,m/16+m/32);
      fill(92,21,21);rect(m/32,m/32*10, m/2-m/16,m/16);
      mt=createGraphics(m/2,m/2+20);
      mt.stroke(25,64,191);
      mt.strokeWeight(20*(m/800));
      mt.fill(255);
      mt.beginShape(TESS);
      mt.vertex(-m/4,m*0.8);
      if(floor(map(t%1,0,1,0,m/15))==0)o+=m/15;
      for(let x=-m/15;x<m*0.7;x+=m/15) {
        mt.vertex(x-floor(map(t%1,0,1,0,m/15)),noise(x+o)*m/2);
      }
      mt.vertex(m/2+m/4,m*0.8);
      mt.endShape(CLOSE);
      
      mt.strokeWeight(5);
      mt.fill(25,64,191);
      mt.textAlign(RIGHT);
      mt.textSize(64*(m/800));
      mt.text('Element',m/2-m/64,m/2);
      image(mt,0,0);
    break;

    case 4:
      translate(width*0.6-m/2,height/2-m/4);
      noStroke();fill(20);
      rect(0,-10,m/2,m/2+20);
      
      // Pattern section
      image(pat,0,-10);
      
      // Text section
      strokeWeight(8);
      fill(255);
      textAlign(RIGHT);
      textSize(46*(m/800));
      text('The Orion',m/2-m/64,m/2-m/12);
      text('Experience',m/2-m/64,m/2-m/24-m/100);
      textSize(32*(m/800));strokeWeight(10);stroke(201,40,199);strokeJoin(ROUND);
      text('SUGAR',m/2-m/64,m/2-m/100);
    break;
  }
}


function easeOutSine(x) {
  return sin((x * PI) / 2);
}

function easeInOutElastic(x) {
  const c5 = (2 * Math.PI) / 4.5;
  return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
}

function clamp(x,bx,ux) {
  return min(ux,max(bx,x));
}