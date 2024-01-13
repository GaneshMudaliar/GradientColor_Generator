let gradientBox = document.querySelector(".gradient-box");
let selectMenu =document.querySelector(".select-box select");
let colorInputs1 =document.querySelector(".color-input1");
let colorInputs2 =document.querySelector(".color-input2");

let textarea =document.querySelector("textarea");
let refreshBtn =document.querySelector(".refresh");
let copyBtn =document.querySelector(".copy");


let colorInputsArr =[colorInputs1 , colorInputs2];
// console.log(colorInputsArr);

// random color code generator

function GetRandomColor() {
  let ColorCode = '0123456789abcdef'
 let color ='#';
 for(i=0;i<6;i++) {
   
   color += ColorCode[Math.floor(Math.random()* ColorCode.length)];
 }
 return color;
 
}


// gradient generator

const  generateGradient = (isRandom) => {

  if(isRandom) {
    colorInputsArr[0].value = GetRandomColor();
    colorInputsArr[1].value = GetRandomColor();

  }
  // console.log(colorInputsArr);
  // console.log(selectMenu.value);

  let gradient = `linear-gradient(${selectMenu.value} , ${colorInputsArr[0].value} , ${colorInputsArr[1].value})`;
  // console.log(gradient);
  
  gradientBox.style.background = gradient;
  textarea.value = `background : ${gradient}`;
}

const copyCode = () => {
     navigator.clipboard.writeText(textarea.value);
     copyBtn.innerHTML="Cpde Copied";
     setTimeout(() =>  copyBtn.innerText = "Copy Code" , 2000);
}

// color input section

colorInputsArr.forEach(function(input)  {
   input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change",() => generateGradient(false));


//  button section

refreshBtn.addEventListener("click", () => generateGradient(true))

copyBtn.addEventListener("click", copyCode);
