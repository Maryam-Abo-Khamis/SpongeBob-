//----------------
//Variables of DOM 
//----------------
let leftEye=document.querySelector('.left-bobo');
let rightEye=document.querySelector('.right-bobo');
let mouth=document.querySelector('.mouth')
let tooth=document.querySelector('.tooth')
let body_sponge=document.querySelector('.body')
let page=document.querySelector('.page')
let sponge=document.querySelector('.sponge')
let parent_eye=document.querySelector('.circle')

//--------------------
//Start Part of Events
//--------------------
//To Know postion of cursor
document.addEventListener('mousemove',(e)=>{
  if(!e.target.classList.contains('inside')){
    let x=Math.ceil(100*e.clientX/screen.width);
    let y=Math.ceil(100*e.clientY/800);
    moveBobo(x,y);
  }
  else {
    smile()
  }}
)
//----------------------------------------------
//To Know position of cursur INSIDE body of Sponge
parent_eye.addEventListener('mousemove',(e)=>{
  const parent_rect=parent_eye.getBoundingClientRect()
  let x=Math.ceil((e.clientX-parent_rect.left)*100/parent_rect.width)
  let y=Math.ceil((e.clientY-parent_rect.top)*100/parent_rect.height)
  insideBody(x,y)
})
//---------------
//End Part of Events
//---------------

//================
//Start Part of Methods
//================

//Method to Move bobo of Eye 
function moveBobo(x,y){
  let rect=body_sponge.getBoundingClientRect()
  let left=Math.ceil(rect.left*100/screen.width);
  let right=Math.ceil(rect.right*100/screen.width);
  let top=Math.ceil(rect.top*100/screen.height);
  let bottom=Math.ceil(rect.bottom*100/screen.height);
  //To move Bobo (Up to Down) side Right
  if(x>right){
    let top=15+y/2<40?15+y/2:40;
    rightEye.style.margin=`${top}px 0 0 34px`;
    leftEye.style.margin=`${top}px 0 0 34px`;
  }
  //Looks Over him
  else if((x<=right & x>left )& y<top ){
    let bottom=13+x/2.5<34?Math.ceil(13+x/2.5):34;
    rightEye.style.margin=`15px 0 0 ${bottom}px`;
    leftEye.style.margin=`15px 0 0 ${bottom}px`;
  }
  //Looks Under him
  else if((x<right & x>left)&y>bottom){
    let bottom=13+x/2.5<34?Math.ceil(13+x/2.5):34;
    rightEye.style.margin=`40px 0 0 ${bottom}px`;
    leftEye.style.margin=`40px 0 0 ${bottom}px`;
    }
  //To move Bobo (Up to Down) side Left
  else if(x<left){
    let top=15+y/2<40?15+y/2:40;
    rightEye.style.margin=`${top}px 0 0 13px`;
    leftEye.style.margin=`${top}px 0 0 13px`;
  }
  //Return Sponge to Normal Form
  mouth.style.cssText='border-radius: 12px'
  mouth.classList.remove('smile')
  tooth.style.display='block'
}
//---------------------------------------------
//Method To move his bobo of eye inside his body
function insideBody(x,y){
  //Looks For Bottom Right
  if(x>50 &y>42){
    let bottom=13+x/5<32?13+x/5:32;
    rightEye.style.cssText=`margin: 38px 0 0 ${bottom}px`
    leftEye.style.cssText='margin: 38px 0 0 32px'
  }
  //Looks For Bottom Left
  else if(x<=50 & y>42){
    let bottom=13+x/5<32?13+x/5:32;
    rightEye.style.cssText=`margin: 38px 0 0 15px`
    leftEye.style.cssText=`margin: 38px 0 0 ${bottom}px`
  }
  //Looks For Top Right
  else if(x>50 &y<=10){
    let bottom=13+x/5<32?13+x/5:32;
    rightEye.style.cssText=`margin: 15px 0 0 ${bottom}px`
    leftEye.style.cssText='margin: 15px 0 0 32px'
  }
  //Looks For Top Left
  else if(x<=50 &y<=10){
    let bottom=13+x/5<32?13+x/5:32;
    rightEye.style.cssText=`margin: 15px 0 0 15px`
    leftEye.style.cssText=`margin: 15px 0 0 ${bottom}px`
  }
  //Looks For side of right Eye
  else if(!(x>=36 & x<68) &(y>10 &y<=42)) {
    let top=15+y/2<30?15+y/2:30;
    leftEye.style.cssText=`margin:${top}px 0px 0px 32px`
    rightEye.style.cssText=`margin:${top}px 0px 0px 32px`
  }
  //Looks For side of Left Eye
  else if(!(x>=36 & x<68) &(y>10 &y<=42)) {
    let top=15+y/2<30?15+y/2:30;
    leftEye.style.cssText=`margin:${top}px 0px 0px 13px`
    rightEye.style.cssText=`margin:${top}px 0px 0px 13px`
  }
  //Looks between his Eyes
  else if((x>=36 & x<68) &(y>10 &y<=42)) {
    let top=15+y<30?15+y:30;
    leftEye.style.cssText=`margin:${top}px 0px 0px 32px`
    rightEye.style.cssText=`margin:${top}px 0px 0px 13px`
  }

}
//---------------------
//Method to Make Sponge SMILE
function smile(){
  //Make Sponge Smile
  mouth.style.cssText='border-radius: 0 0 36px 36px'
  mouth.classList.add('smile')
  tooth.style.display='none';
}