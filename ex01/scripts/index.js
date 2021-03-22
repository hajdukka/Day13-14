function resizeGridItem(item){
   grid = document.getElementsByClassName("grid")[0];
   rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
   rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
   rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
   item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
   allItems = document.getElementsByClassName("item");
   for(x=0;x<allItems.length;x++){
      resizeGridItem(allItems[x]);
   }
}

window.onload = resizeAllGridItems();

window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
   imagesLoaded( allItems[x], resizeInstance);
}

function resizeInstance(instance){
   item = instance.elements[0];
   resizeGridItem(item);
}



// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}