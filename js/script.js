
document.addEventListener('load',function(){








});//end of load

//search

// let searched=document.getElementById('search').value.toLowerCase();

// let products=document.querySelectorAll('.product');

// products.forEach(function(product) {
 

//     let cat_name=product.querySelector('.category-name').textContent.toLowerCase();
//     if(cat_name.includes(searched))
//     {
//         product.style.display=" ";
//     }
//     else
//     {
//         product.style.display="none";
//     }
    
// });



//category
let allCategoryp=document.querySelectorAll('.categoryp');
allCategoryp.forEach(function(categoryp){
    categoryp.addEventListener('click',function(){
      let hiddenSection = categoryp.nextElementSibling;

      hiddenSection.style.display = hiddenSection.style.display === 'none' ? 'block' : 'none';

    })
})