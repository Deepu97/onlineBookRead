const api = "https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyB22VWFa1-xIdG35c4MBZcDMvM0qMZUGXA";
const api1="https://www.googleapis.com/books/v1/volumes?q=web development&key=AIzaSyB22VWFa1-xIdG35c4MBZcDMvM0qMZUGXA";

async function fun(api){
    try{
    //const url="https://www.googleapis.com/books/v1/volumes?q=programming&key=AIzaSyB22VWFa1-xIdG35c4MBZcDMvM0qMZUGXA";
    const data=await fetch(api);
    const res=await data.json();
  console.log(res.items);
    return res.items;
    
    }
    catch{
        console.log("not fetch")
    }
}
fun();

async function deep(){
    try{
    const articals=await fun(api);
    const item=await fun(api1);
    done(articals);
    don(item);
    }
    catch{
        console.log("error");
    }
}



deep();
//programming
 function done(articals){
    
    articals.forEach((artical)=>{
        const div=document.getElementById('pro');
        const img=document.createElement('img');
        const anc=document.createElement('a');
        //const p=document.createElement("p");
        const btn=document.createElement('button');
        const full=document.createElement('div');
       
       btn.id="btn";
        anc.innerHTML="Read Book";
        anc.id="deepu";
        full.className="border";
        
       // p.id="pera";
       // p.innerHTML=artical.volumeInfo.title;
        
    console.log(btn);
        img.src=artical.volumeInfo.imageLinks.smallThumbnail;
        img.className="myimg"
        anc.href=artical.volumeInfo.previewLink;
      
       // full.appendChild(p);
       full.appendChild(img);
       btn.appendChild(anc);
       full.appendChild(btn);
      // full.appendChild(btn);  
       div.appendChild(full);      
     
    })
}

//horror
function don(item){
    
    item.forEach((item)=>{
        const hr=document.getElementById('horror');
        const img=document.createElement('img');
        const anc=document.createElement('a');
        //const p=document.createElement("p");
        const btn=document.createElement('button');
        const full=document.createElement('div');
      
       btn.id="btn";
        anc.innerHTML="Read Book";
        anc.id="deepu";
        full.className="border";
        
       // p.id="pera";
       // p.innerHTML=artical.volumeInfo.title;
        
 
        img.src=item.volumeInfo.imageLinks.smallThumbnail;
        img.className="myimg"
        anc.href=item.volumeInfo.previewLink;
      
       // full.appendChild(p);
       full.appendChild(img);
       btn.appendChild(anc);
       full.appendChild(btn);
      // full.appendChild(btn);  
       hr.appendChild(full);      
     
    })
}
//search items
async function search(){                       
    const inp=document.getElementById("cen");
    if(inp.value!=""){
        const val=inp.value;
        const searchApi="https://www.googleapis.com/books/v1/volumes?&key=AIzaSyB22VWFa1-xIdG35c4MBZcDMvM0qMZUGXA";
        const ho=searchApi+`&q=${val}`;
        const first=document.createElement('div');
        first.className="new";
        const going=await fetch(ho);
        const manu=await going.json();
        const demo=await manu.items;
        console.log("call")
        const raw=document.querySelector("#low");
        console.log(raw);
        raw.style.display="none";
        const show=document.querySelector("#show");
        show.style.display="flex";
        //to show  the div with id show
       
    
        
        demo.forEach((item)=>{
            const div1=document.createElement("div");
            const img1=document.createElement('img');
            const btn1=document.createElement('button');
            const anc1=document.createElement('a');
          const you=document.getElementById('show');
          
          
            const body=document.body;
            img1.src=item.volumeInfo.imageLinks.smallThumbnail;
            img1.id="myimg";
            btn1.id="btn";
            anc1.href=item.volumeInfo.previewLink;
            anc1.innerHTML="Read Book"
            div1.className="border";
            anc1.id="deepu";
           
            div1.appendChild(img1);
            btn1.appendChild(anc1);
            div1.appendChild(btn1);
         
           you.appendChild(div1);


        })

    }
    }
    //cut the search screen
    function cut(){
        const show_element=document.querySelector("#show");
        show_element.style.display="none";
        const cross=document.querySelector("#low");
        cross.style.display="block";
    }

 