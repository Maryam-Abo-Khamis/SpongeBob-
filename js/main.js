//DOM 
let leftEye=document.querySelector('.left-bobo');
let rightEye=document.querySelector('.right-bobo');
let mouth=document.querySelector('.mouth')
let tooth=document.querySelector('.tooth')


//event 
//Knowing postion of cursor
document.addEventListener('mousemove',(e)=>{
  let x=e.clientX;
  let y=e.clientY;
  moveBobo(x,y);
  console.log('x :'+x ,' y :'+y)
})

function moveBobo(x,y){
  //incress focus bobo to side right
  if(x>=700){
    let top=15+y/10<35?15+y/10:35;
    rightEye.style.margin=`${top}px 0 0 30px`;
    leftEye.style.margin=`${top}px 0 0 30px`;
  }
  //to move bobo (up to down)side right
  else if(x>570){
    let top=15+y/10<35?15+y/10:35;
    rightEye.style.margin=`${top}px 0 0 27px`;
    leftEye.style.margin=`${top}px 0 0 27px`;
  }
  //look over him
  else if((x<=570 & y<190)& x>=320){
    //make sponge focus on point over his mouth
    if((x>=413 & x<=434)&(y>=107 & y<190)){
    let top=33-y/30>18?33-y/30:35;
    rightEye.style.margin=`${top}px 0 0 15px`;
    leftEye.style.margin=`${top}px 0 0 31px`;
    }else {
      let bottom;
      //to lowest change (make it smooth)
      if(x<=400){
        bottom=27-x/45>16?Math.trunc(27-x/45):16;
      }else{
        bottom=27-x/100>16?Math.trunc(27-x/100):16;
    }
    rightEye.style.margin=`15px 0 0 ${bottom}px`;
    leftEye.style.margin=`15px 0 0 ${bottom}px`;
  }
  } 
  //look under him
  else if((x<=570 & x>320)&y>=190){
    let bottom;
    if(x<=400){
      bottom=27-x/45>16?Math.trunc(27-x/45):16;
    }
    else{
        bottom=27-x/100>16?Math.trunc(27-x/100):16;
    }
      rightEye.style.margin=`33px 0 0 ${bottom}px`;
      leftEye.style.margin=`33px 0 0 ${bottom}px`;
    }
  //to move bobo (up to down)side right
  else if(x<=320){
    let top=15+y/10<35?15+y/10:35;
    rightEye.style.margin=`${top}px 0 0 16px`;
    leftEye.style.margin=`${top}px 0 0 16px`;
  }
  //some changd on mouth
  if((x>=320&x<=520)&(y>=105&y<=350)){
    //make sponge smile
    mouth.style.cssText='border-radius: 0 0 36px 36px'
    mouth.classList.add('smile')
    tooth.style.display='none'
  }else {
    mouth.style.cssText='border-radius: 12px'
    mouth.classList.remove('smile')
    tooth.style.display='block'
  }
}