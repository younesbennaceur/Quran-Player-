let audio=document.querySelector( ".quran sot")
 let surahcontainer=document.querySelector(".surahs")
let ayah=document.querySelector(".ayah")
 let next=document.querySelector(".icon next")
  let play=document.querySelector(".icon play")
 let prev=document.querySelector(".icon prev")


const getsurah= async ()=>{
    const response=await fetch("https://quran-endpoint.vercel.app/quran")
    const resp= await response.json()
    for (let index in resp.data) {
        surahcontainer.innerHTML+=`
        <div>
    <p>${resp.data[index].asma.ar.long}</p>
    <p>${resp.data[index].asma.en.long}</p>
</div>
        `
        let  allsurahs =document.querySelectorAll('.surahs div')
  allsurahs.forEach((surah,r9m)=>{
    surah.addEventListener("click",()=>{
        fetch(`https://quran-endpoint.vercel.app/quran/${r9m + 1}`)
    })
  })
    }
 }
 /* hnaya bach ki n3bz 3la sorah tjibli mn api oi tmchi letsgoooooo */
  let  allsurahs =document.querySelectorAll('.surahs div')
  console.log(allsurahs)
  getsurah()

