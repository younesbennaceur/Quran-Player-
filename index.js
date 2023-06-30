let audio=document.querySelector( ".quran_sot")
 let surahcontainer=document.querySelector(".surahs")
let ayah=document.querySelector(".ayah")
 let next=document.querySelector(".icon next")
  let play=document.querySelector(".icon play")
 let prev=document.querySelector(".icon prev")


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
       
        allsurahs.forEach((surah,number)=>{
          surah.addEventListener('click', async ()=>{
          const response2 = await fetch(`https://quran-endpoint.vercel.app/quran/${number + 1}`);
          const resp2 = await response2.json();
          let verses=resp2.data.ayahs
          ayah_audio=[]
          ayah_text=[]
          
            
          verses.forEach(ayahs =>{
            ayah_audio.push(ayahs.audio)
           ayah_text.push(ayahs.text.ar)

            
            
          });
          console.log(ayah_audio)
          console.log(ayah_text)
          let ayah_index=0

          change_ayah(ayah_index);
          audio.addEventListener('ended', () => {
            ayah_index++;
            change_ayah(ayah_index);
            if(ayah_index<ayah_audio.length){
              change_ayah()

            }else{
              alert("انتهت السورة")
              audio.pause()
              ayah_index=0
            }
          });
          
          function change_ayah(y) {
            audio.src = https://everyayah.com/data/ahmed_ibn_ali_al_ajamy_128kbps/001007.mp3";
            ayah.innerHTML = ayah_text[y];
           
          
            audio.play();
          }
          
           
            
          })
         

        })
  
    }
 }
 /* hnaya bach ki n3bz 3la sorah tjibli mn api oi tmchi letsgoooooo */
 
  getsurah()

