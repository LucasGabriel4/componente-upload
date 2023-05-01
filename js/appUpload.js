

const inputUpload = document.getElementById('file')


inputUpload.addEventListener('change', uploadArchives)


function uploadArchives(event){
  console.log(event.target.files)
    const nameFile = event.target.files[0].name;
    const typeFile = event.target.files[0].type.split('/').pop();
    const sizeFile = event.target.files[0].size;
     
   const container = showFiles(nameFile)

   typeImgFile(typeFile,container)
   progressUploadBar(container);
   
  

}


 function showFiles(nameFile){
    const containerUpload = document.querySelector('.upload__archives')
    const containerArchives = document.createElement('div');
    containerArchives.classList.add('archives__container');
    
    containerArchives.innerHTML = `
            <div class="flex">
                    <div class="box__archives-img"></div>

                    <div class="info__archives">
                        <div>
                            <span class="type">${nameFile}</span>
                            <span class="size">30 MB</span>
                        </div>

                        <div class="bar__loading">
                            <div class="bar"><div class="fill"></div></div>
                        </div>
                    </div>

                    <div class="info__archives">
                        <div>
                            <img src="assets/Cancel.svg" id="delete"'/>
                        </div>

                        <span class="size__bar"></span>
                    </div>
            </div>
    
    
    `

    
   containerUpload.appendChild(containerArchives)

   const delete_ = document.querySelectorAll('#delete')

   delete_.forEach((item) => {
       item.addEventListener("click", ()  => {
          containerUpload.removeChild(containerArchives)
       }) 
  })

  

  

   return containerArchives;
 }



   function progressUploadBar(container){
        const fill = container.querySelector('.fill')
        const size = container.querySelector('.size__bar')
        count = 0;
        let progressBar = setInterval(progress, 50)

        function progress(){
           count+= 1

           if(count > 100){
             clearInterval(progressBar)
           }else{
             size.textContent = `${count}%`
             fill.style.width = `${count}%`
           }
        }
   }



   function typeImgFile(typeFile,container){
      const typeFileimg = container.querySelector('.box__archives-img')
      console.log(typeFile)
      if(typeFile === 'pdf' || typeFile === 'png' || typeFile === 'jpeg'){
         typeFileimg.style.backgroundImage = `url('../assets/${typeFile}.png')`
      }else{
         typeFileimg.style.backgroundImage = 'none';
      }
     
   }