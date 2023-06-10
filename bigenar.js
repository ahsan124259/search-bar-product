let grid = document.querySelector(".products");
const filterInput=document.querySelector('.filterInput')



fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    for (let value of json){
        addElement(grid, value)
    }

})

filterInput.addEventListener("keyup",filterProducts);

function filterProducts(){
    let filterValue=filterInput.value.toUpperCase();
    let item=grid.querySelector('.item')
    for(let i=0;i<item.length;i++){
        let span =item[i].querySelector('.title');
        if(span.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            item[i].style.display='initial'
        }else{
            item[i].style.display='none'
        }
    }
}

function addElement(appendIn,value){
    let div=document.createElement('div');
    div.className='item justify-self-center';
    let{category,image,price,title}=value
    div.innerHTML=`
    <img src=${image} alt="" class="bg-cover img" >
            <div class="text-center py-3 font-poppins">
                <h1 class="text-lg title">${title}</h1>
                <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
                <span class="block py-3">$<span class="text-md">${price}</span></span>
                <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
            </div>
    
    `;
    appendIn.appendChild(div)
}

