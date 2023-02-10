// document.body.innerHTML+=`<a href="https://logy.ai/DrAgarwal" target='_blank'>
// <div
// style="
// position: fixed;
// top: 73vh;
// left: 4px;
// height: 100px;
// width: 100px;
// z-index: 100;
// ">
// <div id="scan"></div>
// <img style="position: absolute;left:11px;top: 36px;width: 75.41px" src="https://github.com/Debaprasad-dez/logyFloater/blob/main/eye.png?raw=true" alt="">
// <img src="https://raw.githubusercontent.com/Debaprasad-dez/logyFloater/013405fbb4c7fb09bdeebc1968615480f8d02c36/floater3.svg" alt="">
// <style>
// #scan{
//     position: absolute;
//     background: linear-gradient(180deg, rgba(0,255,235,0) 0%, rgba(0,224,255,0.4822303921568627) 100%);
//     height: 40px;
//     width: 96px;
//     top: 22px;
//     left: 1px;
//     z-index: 100;
//     border-bottom: solid 2px #1B8796;
//     animation: animate 4s infinite;
// }
// @keyframes animate {
//     0%{
//         height: 1px;
//     }
//     50%{
//         height: 78px;
//     }
//     100%{
//         height: 0;
//     }
// }
// @media screen and (max-width: 600px) {
// #floaterInstructions{
//     display: none;
// }
// }
// </style>
// </div>
// </a>
// <div id="floaterInstructions" style="position:absolute;height:100px;width:250px;top:60vh;left: 108px;">
// <img src="https://raw.githubusercontent.com/Debaprasad-dez/logyFloater/c15c1666a5a4532a346f22b9b704bc6f50035796/instructions.svg" alt="">
// <button id="btnCross" style="position: absolute;background: none;border: none;cursor: pointer;">
//     <img  src="https://raw.githubusercontent.com/Debaprasad-dez/logyFloater/c15c1666a5a4532a346f22b9b704bc6f50035796/cross.svg" alt="">
// </button>
// </div>
// `

// const btnCross=document.getElementById('btnCross');
// const floaterInstructions=document.getElementById('floaterInstructions');
// btnCross.addEventListener('click',function () {
//     floaterInstructions.style.display='none'
// })

document.body.innerHTML += `<a href="" target='_blank'>
        <div 
        id="floaterMain"
        >
        
        <img src="https://debaprasad-dez.github.io/sharpsight_floater/click.svg" style="position: absolute;left:20px;top: 125px;width: 100px;z-index:-100" alt="">
        <img src="https://debaprasad-dez.github.io/sharpsight_floater/body.svg" style="position: absolute;left:21px;top: 145px;width: 140px;z-index:-100" alt="">
        <img src="https://debaprasad-dez.github.io/sharpsight_floater/circle.svg" style="position: absolute;left:43px;top: 205px;width: 54px;z-index:1" alt="">
        <img src="https://debaprasad-dez.github.io/sharpsight_floater/focus.svg" id="focus" style="position: absolute;left:38px;top: 200px;width: 64px;z-index:1;transform: scale(0.4);" alt="">
        <img src="https://debaprasad-dez.github.io/sharpsight_floater/sslogo.png" style="position: absolute;left:57px;top: 153px;width: 25px;z-index:1" alt="">
        <img src="https://debaprasad-dez.github.io/sharpsight_floater/eye.png" style="position: absolute;left:57px;top: 219px;width: 25px;z-index:-10;transform: scale(1.3);" alt="">
        <div id="scan"></div>
        <style>
        
        @media screen and (min-width: 601px) {
            #floaterMain{
                position: fixed;
                top: 30vh;
                right: 48px;
                height: 100px;
                width: 100px;
                z-index: 1000;
            }
           
            #scan{
                position: absolute;
                background: linear-gradient(180deg, rgba(22, 105, 55, 0) 0%, rgba(22, 105, 55, 0.25) 100%);
                height: 40px;
                width: 46px;
                top: 100px;
                left: 47px;
                z-index: 0;
                border-bottom: solid 1px #166937;
                animation: animate 2s infinite;
            }
            #focus{
                animation: focusing 2s infinite;
            }
           
            @keyframes animate {
                0%{
                    height: 1px;
                }
                50%{
                    height: 43px;
                }
                100%{
                    height: 1px;
                }
            }
            @keyframes focusing {
                0%{
                    opacity: 1;
                }
                50%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
            
        }
        @media screen and (max-width: 600px) {
        #floaterInstructions{
            display: none;
        }
        #floaterMain{
            position: fixed;
            top: 50vh;
            right: 40px;
            height: 100px;
            width: 100px;
            z-index: 1000;
        }
        
       
       
        #scan{
            position: absolute;
                background: linear-gradient(180deg, rgba(22, 105, 55, 0) 0%, rgba(22, 105, 55, 0.25) 100%);
                height: 40px;
                width: 40px;
                top: 210px;
                left: 50px;
                z-index: 0;
                border-bottom: solid 1px #166937;
                animation: animate 2s infinite;
        }
        
        #focus{
                animation: focusing 2s infinite;
            }
@keyframes focusing {
                0%{
                    opacity: 1;
                }
                50%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
        @keyframes animate {
            0%{
                height: 1px;
            }
            50%{
                height: 43px;
            }
            100%{
                height: 1px;
            }
        }
        
        }
        </style>
        </div>
        </a>
`;
