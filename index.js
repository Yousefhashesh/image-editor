let saturate=document.getElementById('saturate');
let contrust=document.getElementById('contrust');
let brightness=document.getElementById('brightness');
let sepia=document.getElementById('sebia');
let grayscale=document.getElementById('grayscale');
let blur=document.getElementById('blur');
let hue_rotate=document.getElementById('hue-rotate');

let upload=document.getElementById('upload');
let download=document.getElementById('download');
let reset=document.querySelector('span');
let img=document.getElementById('image');
let imgBox=document.querySelector('.img-box');
  
let canvas=document.getElementById('canvas');

const context=canvas.getContext('2d')
window.onload = function()
{
    download.style.display='none';
    reset.style.display='none';
    imgBox.style.display='none';
}
 

function resetValues()
{
    img.style.filter = 'none';
    saturate.value='100';
    contrust.value='100';
    brightness.value='100';
    sepia.value='0';
    grayscale.value='0';
    blur.value='0';
    hue_rotate.value='0';
}
upload.onchange = function()
{
    resetValues();
    download.style.display='block';
    reset.style.display='block';
    imgBox.style.display='block';

    let file =new FileReader();
   file.readAsDataURL(upload.files[0]);
   file.onload = function()
   {
    img.src=file.result;
   }
  img.onload=function()
  {
    canvas.width=img.width;
    canvas.height=img.height;
    context.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display='none';
  }
}


let filters=document.querySelectorAll('ul li input');


filters.forEach(filter=>{
filter.addEventListener('input', function()
{
context.filter=`
saturate(${saturate.value}%)
contrast(${contrust.value}%)
brightness(${brightness.value}%)
sepia(${sepia.value}%)
grayscale(${grayscale.value})
blur(${blur.value}px)
hue-rotate(${hue_rotate.value}deg)
`

context.drawImage(img,0,0,canvas.width,canvas.height);
})
});


reset.onclick =function(){ resetValues()};

download.onclick=function()
{
    download.href=canvas.toDataURL('jpg');
}