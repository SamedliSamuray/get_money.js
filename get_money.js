let numb=document.querySelector('.number');   
let btn=document.querySelector('.btn');

var manats=document.createElement('div');
manats.classList.add('manats');
document.body.append(manats);

btn.addEventListener('click',()=>{

    manats.innerHTML='';  
    
    number=numb.value;

    
    let a=[500,200,100,50,20,10,5,1];

    for(let i=0;i<=7;i++){
        
        if(number!==0){
        let manat=document.createElement('div');
        manat.classList.add('manat');

        let eded=(Math.trunc(number/a[i]));
        let say=document.createElement('p');
            say.classList.add('say');
            eded>5?say.textContent=`x${(eded-5)}`:null;

        for(let j=1;j<=eded;j++){
            
            eded>5?eded=5:null;
            let img=document.createElement('img');
            img.classList.add('img')
            img.src=`${a[i]}.jpg`;
            img.style.marginLeft=`${20*j}px`;
            
            manat.append(img,say);
            manats.append(manat)
        }
    }
    
        number=number%a[i];
          
    }
   
     
}
)



