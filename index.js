let audio=document.querySelector( ".quran_sot")
 let surahcontainer=document.querySelector(".surahs")
let ayah=document.querySelector(".ayah")
 let next=document.querySelector("#next")
  let play=document.querySelector("#play")
 let prev=document.querySelector("#prev")
 let ayah_eng=document.querySelector("#ayah_eng")


const getsurah= async ()=>{
    const response=await fetch("https://quran-endpoint.vercel.app/quran")
    const resp= await response.json()
    for (let surah in resp.data) {
        surahcontainer.innerHTML+=`
        <div>
    <p>${resp.data[surah].asma.ar.long}</p>
    <p>${resp.data[surah].asma.en.long}</p>
</div>
        `
        
        let  allsurahs =document.querySelectorAll('.surahs div')
        let ayah_audio ;
        let ayah_text 
        let ayah_text_eng
       
        allsurahs.forEach((surah,number)=>{
          surah.addEventListener('click', async ()=>{
          const response2 = await fetch(`https://quran-endpoint.vercel.app/quran/${number + 1}`);
          const resp2 = await response2.json();
          let verses=resp2.data.ayahs
          ayah_audio=[]
          ayah_text=[]
          ayah_text_eng=[]
          
            
          verses.forEach(ayahs =>{
            ayah_audio.push(ayahs.audio)
           ayah_text.push(ayahs.text.ar)
           ayah_text_eng.push(ayahs.text.read)

            
            
          });
         
          let ayah_index=0

          change_ayah(ayah_index);
          audio.addEventListener('ended', () => {
            ayah_index++;
            change_ayah(ayah_index);
            if(ayah_index < ayah_text.length  ){
              change_ayah()

            }
             if(ayah_index===ayah_audio.length - 1){
             
              
              ayah_index=0
              
              audio.pause()
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'إنتهت السورة إستمع الى المزيد',
                showConfirmButton: false,
                timer: 3000
              })
            }
          });
          next.addEventListener('click', () => {
            if (ayah_index<ayah_audio.length) {
              ayah_index++
              change_ayah(ayah_index)
            }
           
          })
          prev.addEventListener('click', ()=> {
            ayah_index--
            change_ayah(ayah_index)

          })
          
          play.addEventListener('click',change_toggle)
          

          let isplaying=false
          change_toggle()
          function change_toggle () {
            if (isplaying){
             
              audio.pause()
              play.innerHTML=`<i class="fas fa-play"></i>`
              isplaying=false
            }else{
              audio.play()
              play.innerHTML=`<i class="fas fa-pause"></i>`
              isplaying=true

            }
            
          }
         
          
          function change_ayah(y) {
            
            audio.src = ayah_audio[y].url;
           
            ayah.innerHTML = ayah_text[y];
            ayah_eng.innerHTML=ayah_text_eng[y]
           
          
            audio.play();
          }
          
           
            
          })
         

        })
  
    }
 }
 /* hnaya bach ki n3bz 3la sorah tjibli mn api oi tmchi letsgoooooo */
 
  getsurah()

