const newHeroDiv=document.getElementById('randomHero')

const heroImageDiv=document.getElementById('heroImage')

const accessToken='fa7e6aef6628a00cec52d92272b410a9'

const searchHeroDiv=document.getElementById('searchHero')

const inputDiv=document.getElementById('input')

const nameDiv=document.getElementById('nameOfHero')

const infoDiv=document.getElementById('otherInfo')

const statEmoji={
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🧘‍♀️',
  power: '🚹',
combat:'🗡️'
}

const showHeroInfo=(hero)=>{
  const name=`<h2>Name: ${hero.name}</h2>`
  const img= `<img src='${hero.image.url}' height=300 width=300/>`
   const stats= Object.keys(hero.powerstats).map(stat=>{
     return `<p>${statEmoji[stat]} ${stat.toUpperCase()}: ${hero.powerstats[stat]}`
   }).join('')
  heroImageDiv.innerHTML = `${name}${img}${stats}`
}

const getRandomSuperHero=(id)=>{
  fetch(`https://superheroapi.com/api.php/${accessToken}/${id}`)
  .then(response=>response.json())
  .then(json=>{
  showHeroInfo(json)
  })                                                                                                                                                                       
}

const showResult=(hero)=>{
  
   nameDiv.innerText=`Name: ${hero.name}`
   heroImageDiv.innerHTML = `<img src='${hero.image.url}' height=300 width=300/>`
  infoDiv.innerText=`Id: ${hero.id}`
  infoDiv.innerText=`Race: ${hero.appearance.race}`
  infoDiv.innerText=`Race: ${hero.appearance.race}`
}


const getSearchSuperHero=()=>{
  const name=inputDiv.value
  fetch(`https://superheroapi.com/api.php/${accessToken}/search/${name}`)
  .then(response=>response.json())
  .then(json=>{
   const hero=json.results[0]
    console.log(hero)
    showHeroInfo(hero)
  })
}


newHeroDiv.onclick=()=>{
  const id=Math.floor(Math.random()*731)+1
  //console.log(id)
  getRandomSuperHero(id)
}

searchHeroDiv.onclick=()=>getSearchSuperHero()
