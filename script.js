// alert("Diqqat Web-ilova haqat ikki xonali sonlarni qo'shish va ayirish uchun !")
let n11=document.getElementById('n11');
let n12=document.getElementById('n12');
let isho=document.getElementById('ish');
let n21=document.getElementById('n21');
let n22=document.getElementById('n22');
function joylash(){

    let onenum=document.getElementById('onenum').value;
    let ishora=document.getElementById('ishora').value;
    let thunum=document.getElementById('thunum').value;
    if(onenum<100&&(ishora=='+'||ishora=='-')&&thunum<100)
    {
        n12.innerText=onenum%10;
        n11.innerText=(onenum-onenum%10)/10;
        n22.innerText=thunum%10;
        n21.innerText=(thunum-thunum%10)/10;
        isho.innerText=ishora;
    }
    else {
        alert('Xato ! qaytadan kiriting .  Yordam uchun "?" tugmasini bosing ');
    }
}

let info=document.querySelector('.info');
let infcurson=0;
function info1(){
    if(infcurson%2==0)
    {
        info.style.display="block";
    }
    else {
        info.style.display="none";
    }
    infcurson++;
}

let vidrow=document.querySelector('.vid .row');
let rowtr=-200;
function surish(element){
    if(element.className=='left'&&rowtr<140)
    { 
        rowtr+=38; 
        vidrow.style.transform=`translateX(${rowtr}px)`; 
    }
    else {
        if(rowtr>-380){
            rowtr-=38;
        vidrow.style.transform=`translateX(${rowtr}px)`;
        }   
    }
}




// a1.children[0].className='focus';
let a1=document.getElementById('a1');
let a2=document.getElementById('a2');
let a3=document.getElementById('a3');
let a4=document.getElementById('a4');
let a5=document.getElementById('a5');
let a6=document.getElementById('a6');
let a7=document.getElementById('a7');
let a8=document.getElementById('a8');
let a9=document.getElementById('a9');
let a10=document.getElementById('a10');
let aish=document.getElementById('aish');
let pause=document.querySelector('.pause');
function start(){
    //  ogohlantirish chiqarish uchun

    pause.style.display='block';
    
    let vaqt2=document.querySelector('#vaqt').value;
    if(isho.innerHTML=='+')
    {

        let time1=0;
        let a22,a21,a12,a11;
        let vaqt;
        if (vaqt2=='4') {
            vaqt=400;
        }
        else if(vaqt2=='8')
            vaqt=1000;
            else vaqt=700;
        
        time1+=vaqt;
        //boshlash

        setTimeout( function (){
            vidrow.style.transform=`translateX(-200px)`; 
            if(n22.innerText!='9')
            {  
                a22=Number(n22.innerText);
                a22++;
                n22.innerText=a22;
            }
            else {
                a22=0;
                n22.innerText=a22;
            }
            switch (a22) {
            case 0: a1.children[4].className = "focus"; break;
            case 1: a2.children[4].className = "focus"; break;
            case 2: a3.children[4].className = "focus"; break;
            case 3: a4.children[4].className = "focus"; break;
            case 4: a5.children[4].className = "focus"; break;
            case 5: a6.children[4].className = "focus"; break;
            case 6: a7.children[4].className = "focus"; break;
            case 7: a8.children[4].className = "focus"; break;
            case 8: a9.children[4].className = "focus"; break;
            case 9: a10.children[4].className = "focus"; break;
            default: console.log(0);
            }
        }, time1);
        time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-162px)`; 
            if(a22==0)
            {   a21=Number(n21.innerText);
                a21++;
                n21.innerText=a21;
            }
            else{
                a21=Number(n21.innerText);
                a21++;
            }
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            switch (a21) {
                case 0: a10.children[3].className = "focus"; break;
                case 1: a2.children[3].className = "focus"; break;
                case 2: a3.children[3].className = "focus"; break;
                case 3: a4.children[3].className = "focus"; break;
                case 4: a5.children[3].className = "focus"; break;
                case 5: a6.children[3].className = "focus"; break;
                case 6: a7.children[3].className = "focus"; break;
                case 7: a8.children[3].className = "focus"; break;
                case 8: a9.children[3].className = "focus"; break;
                case 9: a1.children[3].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);
            time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-124px)`; 
            // plus  chaga yurish
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            aish.children[2].className='focus';
            if(Number(n11.innerText)==0&&Number(n12.innerText)==0)
            {
                return 0;
            }
        }, time1);
        time1+=vaqt;

        setTimeout( function (){
            aish.children[2].className='unfocus';
            vidrow.style.transform=`translateX(-86px)`; 
            if(n12.innerText!='0')
            {  
                a12=Number(n12.innerText);
                a12--;
                n12.innerText=a12;
            }
            else {
                a12=9;
                n12.innerText=a12;
            }
            switch (a12) {
                case 0: a1.children[2].className = "focus"; break;
                case 1: a2.children[2].className = "focus"; break;
                case 2: a3.children[2].className = "focus"; break;
                case 3: a4.children[2].className = "focus"; break;
                case 4: a5.children[2].className = "focus"; break;
                case 5: a6.children[2].className = "focus"; break;
                case 6: a7.children[2].className = "focus"; break;
                case 7: a8.children[2].className = "focus"; break;
                case 8: a9.children[2].className = "focus"; break;
                case 9: a10.children[2].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);
            time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-48px)`; 
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            if(a12==9 && Number(n11.innerText)!=0)
            {   
                a11=Number(n11.innerText);
                a11--;
                n11.innerText=a11;  
            }
            else{
                a11=Number(n11.innerText);
                --a11;
            }
            if(Number(n11.innerText)==0&&Number(n12.innerText)==0)
            {   
                return 0;
            } 
            switch (a11) {
                case 0: a1.children[1].className = "focus"; break;
                case 1: a2.children[1].className = "focus"; break;
                case 2: a3.children[1].className = "focus"; break;
                case 3: a4.children[1].className = "focus"; break;
                case 4: a5.children[1].className = "focus"; break;
                case 5: a6.children[1].className = "focus"; break;
                case 6: a7.children[1].className = "focus"; break;
                case 7: a8.children[1].className = "focus"; break;
                case 8: a9.children[1].className = "focus"; break;
                case 9: a10.children[1].className = "focus"; break;
                default: break;
                }
        }, time1);
        time1+=vaqt;
        // chapdan oxiriga bordi

        // tuxtash uchun
        if(Number(n11.innerText)==0&&Number(n12.innerText)==0)
        {
            setTimeout( function (){
                pause.style.display='none'; 
            }, time1);
            return 0;
        }    

        setTimeout( function (){
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            vidrow.style.transform=`translateX(-48px)`; 
            if(Number(n12.innerText)==0 && Number(n11.innerText)!=0)
            {   
                a11=Number(n11.innerText);
                a11--;
                n11.innerText=a11;  
            }
            else{
                a11=Number(n11.innerText);
                a11--;
            }
            switch (a11) {
                case 0: a10.children[1].className = "focus"; break;
                case 1: a2.children[1].className = "focus"; break;
                case 2: a3.children[1].className = "focus"; break;
                case 3: a4.children[1].className = "focus"; break;
                case 4: a5.children[1].className = "focus"; break;
                case 5: a6.children[1].className = "focus"; break;
                case 6: a7.children[1].className = "focus"; break;
                case 7: a8.children[1].className = "focus"; break;
                case 8: a9.children[1].className = "focus"; break;
                case 9: a1.children[1].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);
            time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-86px)`;
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            if(Number(n12.innerText)!=0)
            {  
                a12=Number(n12.innerText);
                a12--;
                n12.innerText=a12;
            }
            else {
                a12=9;
                n12.innerText=a12;
            }
            switch (a12) {
                case 0: a1.children[2].className = "focus"; break;
                case 1: a2.children[2].className = "focus"; break;
                case 2: a3.children[2].className = "focus"; break;
                case 3: a4.children[2].className = "focus"; break;
                case 4: a5.children[2].className = "focus"; break;
                case 5: a6.children[2].className = "focus"; break;
                case 6: a7.children[2].className = "focus"; break;
                case 7: a8.children[2].className = "focus"; break;
                case 8: a9.children[2].className = "focus"; break;
                case 9: a10.children[2].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);
            time1+=vaqt;

        //plus onga yur
        setTimeout( function (){
            vidrow.style.transform=`translateX(-124px)`; 
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            aish.children[4].className='focus';
        }, time1);
        time1+=vaqt;

        setTimeout( function (){
            vidrow.style.transform=`translateX(-162px)`; 
            aish.children[4].className='unfocus';
            if(Number(n22.innerText)==9)
            {   a21=Number(n21.innerText);
                a21++;
                n21.innerText=a21;
            }
            else{
                a21=Number(n21.innerText);
                ++a21;
            }
            switch (a21) {
                case 0: a10.children[3].className = "focus"; break;
                case 1: a2.children[3].className = "focus"; break;
                case 2: a3.children[3].className = "focus"; break;
                case 3: a4.children[3].className = "focus"; break;
                case 4: a5.children[3].className = "focus"; break;
                case 5: a6.children[3].className = "focus"; break;
                case 6: a7.children[3].className = "focus"; break;
                case 7: a8.children[3].className = "focus"; break;
                case 8: a9.children[3].className = "focus"; break;
                case 9: a1.children[3].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);  
            time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-200px)`; 
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            if(n22.innerText!='9')
            {  
                a22=Number(n22.innerText);
                a22++;
                n22.innerText=a22;
            }
            else {
                a22=0;
                n22.innerText=a22;
            }
            switch (a22) {
                case 0: a1.children[4].className = "focus"; break;
                case 1: a2.children[4].className = "focus"; break;
                case 2: a3.children[4].className = "focus"; break;
                case 3: a4.children[4].className = "focus"; break;
                case 4: a5.children[4].className = "focus"; break;
                case 5: a6.children[4].className = "focus"; break;
                case 6: a7.children[4].className = "focus"; break;
                case 7: a8.children[4].className = "focus"; break;
                case 8: a9.children[4].className = "focus"; break;
                case 9: a10.children[4].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);  
            time1+=vaqt;
        // o'ngdan oxiriga bordi

         // tuxtash uchun
        if(Number(n11.innerText)==0&&Number(n12.innerText)==0)
        {   
            pause.style.display='none'; 
            return 0;
        } 
        
//bir martaaylana
         
        
//ikkinchi aylana

        //boshlash
        setTimeout( function (){
            vidrow.style.transform=`translateX(-200px)`; 
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            if(n22.innerText!='9')
            {  
                a22=Number(n22.innerText);
                a22++;
                n22.innerText=a22;
            }
            else {
                a22=0;
                n22.innerText=a22;
            }
            switch (a22) {
            case 0: a1.children[4].className = "focus"; break;
            case 1: a2.children[4].className = "focus"; break;
            case 2: a3.children[4].className = "focus"; break;
            case 3: a4.children[4].className = "focus"; break;
            case 4: a5.children[4].className = "focus"; break;
            case 5: a6.children[4].className = "focus"; break;
            case 6: a7.children[4].className = "focus"; break;
            case 7: a8.children[4].className = "focus"; break;
            case 8: a9.children[4].className = "focus"; break;
            case 9: a10.children[4].className = "focus"; break;
            default: console.log(0);
            }
        }, time1);
        time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-162px)`; 
            if(a22==0)
            {   a21=Number(n21.innerText);
                a21++;
                n21.innerText=a21;
            }
            else{
                a21=Number(n21.innerText);
                ++a21;
            }
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            switch (a21) {
                case 0: a10.children[3].className = "focus"; break;
                case 1: a2.children[3].className = "focus"; break;
                case 2: a3.children[3].className = "focus"; break;
                case 3: a4.children[3].className = "focus"; break;
                case 4: a5.children[3].className = "focus"; break;
                case 5: a6.children[3].className = "focus"; break;
                case 6: a7.children[3].className = "focus"; break;
                case 7: a8.children[3].className = "focus"; break;
                case 8: a9.children[3].className = "focus"; break;
                case 9: a1.children[3].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);
            time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-124px)`; 
            // plus  chaga yurish
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            aish.children[2].className='focus';
            if(Number(n11.innerText)==0&&Number(n12.innerText)==0)
            {
                return 0;
            }
        }, time1);
        time1+=vaqt;

        setTimeout( function (){
            aish.children[2].className='unfocus';
            vidrow.style.transform=`translateX(-86px)`; 
            if(n12.innerText!='0')
            {  
                a12=Number(n12.innerText);
                a12--;
                n12.innerText=a12;
            }
            else {
                a12=9;
                n12.innerText=a12;
            }
            switch (a12) {
                case 0: a1.children[2].className = "focus"; break;
                case 1: a2.children[2].className = "focus"; break;
                case 2: a3.children[2].className = "focus"; break;
                case 3: a4.children[2].className = "focus"; break;
                case 4: a5.children[2].className = "focus"; break;
                case 5: a6.children[2].className = "focus"; break;
                case 6: a7.children[2].className = "focus"; break;
                case 7: a8.children[2].className = "focus"; break;
                case 8: a9.children[2].className = "focus"; break;
                case 9: a10.children[2].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);
            time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-48px)`; 
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            if(a12==9 && Number(n11.innerText)!=0)
            {   
                a11=Number(n11.innerText);
                a11--;
                n11.innerText=a11;  
            }
            else{
                a11=Number(n11.innerText);
                --a11;
            }
            if(Number(n11.innerText)==0&&Number(n12.innerText)==0)
            {   
                return 0;
            } 
            switch (a11) {
                case 0: a1.children[1].className = "focus"; break;
                case 1: a2.children[1].className = "focus"; break;
                case 2: a3.children[1].className = "focus"; break;
                case 3: a4.children[1].className = "focus"; break;
                case 4: a5.children[1].className = "focus"; break;
                case 5: a6.children[1].className = "focus"; break;
                case 6: a7.children[1].className = "focus"; break;
                case 7: a8.children[1].className = "focus"; break;
                case 8: a9.children[1].className = "focus"; break;
                case 9: a10.children[1].className = "focus"; break;
                default: console.log(0);
                }
        }, time1);
        time1+=vaqt;
        // chapdan oxiriga bordi

        // tuxtash uchun
        if(Number(n11.innerText)==0&&Number(n12.innerText)==0)
        {
                pause.style.display='none'; 
            return 0;
        }    
        setTimeout( function (){
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            vidrow.style.transform=`translateX(-48px)`; 
            if(Number(n11.innerText)!=0)
            {   
                a11=Number(n11.innerText);
                a11-=2;
                n11.innerText=a11;  
            }
            else{
                a11=Number(n11.innerText);
                --a11;
            }
            switch (a11) {
                case 0: a1.children[1].className = "focus"; break;
                case 1: a2.children[1].className = "focus"; break;
                case 2: a3.children[1].className = "focus"; break;
                case 3: a4.children[1].className = "focus"; break;
                case 4: a5.children[1].className = "focus"; break;
                case 5: a6.children[1].className = "focus"; break;
                case 6: a7.children[1].className = "focus"; break;
                case 7: a8.children[1].className = "focus"; break;
                case 8: a9.children[1].className = "focus"; break;
                case 9: a10.children[1].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);
            time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-86px)`;
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            if(Number(n12.innerText)!=0)
            {  
                a12=Number(n12.innerText);
                a12--;
                n12.innerText=a12;
            }
            else {
                a12=9;
                n12.innerText=a12;
            }
            switch (a12) {
                case 0: a1.children[2].className = "focus"; break;
                case 1: a2.children[2].className = "focus"; break;
                case 2: a3.children[2].className = "focus"; break;
                case 3: a4.children[2].className = "focus"; break;
                case 4: a5.children[2].className = "focus"; break;
                case 5: a6.children[2].className = "focus"; break;
                case 6: a7.children[2].className = "focus"; break;
                case 7: a8.children[2].className = "focus"; break;
                case 8: a9.children[2].className = "focus"; break;
                case 9: a10.children[2].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);
            time1+=vaqt;

        //plus onga yur
        setTimeout( function (){
            vidrow.style.transform=`translateX(-124px)`; 
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            aish.children[4].className='focus';
        }, time1);
        time1+=vaqt;

        setTimeout( function (){
            vidrow.style.transform=`translateX(-162px)`; 
            aish.children[4].className='unfocus';
            if(Number(n22.innerText)==9)
            {   a21=Number(n21.innerText);
                a21++;
                n21.innerText=a21;
            }
            else{
                a21=Number(n21.innerText);
                a21++;
            }
            switch (a21) {
                case 0: a10.children[3].className = "focus"; break;
                case 1: a2.children[3].className = "focus"; break;
                case 2: a3.children[3].className = "focus"; break;
                case 3: a4.children[3].className = "focus"; break;
                case 4: a5.children[3].className = "focus"; break;
                case 5: a6.children[3].className = "focus"; break;
                case 6: a7.children[3].className = "focus"; break;
                case 7: a8.children[3].className = "focus"; break;
                case 8: a9.children[3].className = "focus"; break;
                case 9: a1.children[3].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);  
            time1+=vaqt;
        setTimeout( function (){
            vidrow.style.transform=`translateX(-200px)`; 
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
            if(n22.innerText!='9')
            {  
                a22=Number(n22.innerText);
                a22++;
                n22.innerText=a22;
            }
            else {
                a22=0;
                n22.innerText=a22;
            }
            switch (a22) {
                case 0: a1.children[4].className = "focus"; break;
                case 1: a2.children[4].className = "focus"; break;
                case 2: a3.children[4].className = "focus"; break;
                case 3: a4.children[4].className = "focus"; break;
                case 4: a5.children[4].className = "focus"; break;
                case 5: a6.children[4].className = "focus"; break;
                case 6: a7.children[4].className = "focus"; break;
                case 7: a8.children[4].className = "focus"; break;
                case 8: a9.children[4].className = "focus"; break;
                case 9: a10.children[4].className = "focus"; break;
                default: console.log(0);
                }
            }, time1);  
            time1+=vaqt;
        // o'ngdan oxiriga bordi

         // tuxtash uchun
        if(Number(n11.innerText)==0&&Number(n12.innerText)==0)
        {   
            pause.style.display='none'; 
            return 0;
        }
        
        
        //oxiri unfocus
        setTimeout(function(){
            let fokus=document.querySelector('.focus');
            fokus.className='unfocus';
        },time1)






        setTimeout( function (){
            pause.style.display='none'; 
        }, time1);
    } 
    
}

