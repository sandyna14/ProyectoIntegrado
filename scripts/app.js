const projets = [
    {
        idProject:1,
        import:'assets\images\proyectoUber.png',
        titleproject:'Proyecto uber',
        discription:'Este es un trabajado con las  herramienta html y css',
    },
    {
        idProject:2,
        import:'assets\images\proyectoDiscord.png',
        titleproject:'Proyecto uber',
        discription:'Este es un trabajado con las  herramienta html y css',
    }
]

const references = [
    {
        nombre:'Richard Vellojin',
        Cargo:'Desarrollador java gosu',
        telefono:'3046770007',
        correo:'richard.vellojin@gmail.com'
    },
    {
        nombre:'Sady Salas',
        Cargo:'Acesora comercial',
        telefono:'3046731011111170007',
        correo:'sady.salas@gmail.com'
    },
    {
        nombre:'Jesus Moreno',
        Cargo:'Ingeniero Telecomunicaciones',
        telefono:'3002483068',
        correo:'jesus.moreno@gmail.com'
    }
]

const experience = [
    {cargo:'Lider comercial',
     porcentaje:75,
    }
    {cargo:'Metrologia',
        porcentaje:75,
       }
]

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href')); 
    if(target){
        window.scroll({
            top:target.offsetTop,
            behavior:'smooth'
        })
    }
})
}

)

function createCardsProjects(project){
    const cardProject = document.createElement('div')
    cardProject.classList.add('section-projects-card')

    const containerImg = document.createElement('div')
    containerImg.classList.add('container-img-card')

    const imgCard = document.createElement('img')
        imgCard.src = project.import
        imgCard.alt = project.titleproject

    const containerDescription = document.createElement('div') 
    containerDescription.classList.add("container-description-card") 

    const titleCard = document.createElement('h3')    
    titleCard.textContent = project.titleCard
    
    const descriptionCard = document.createElement('p') 
    descriptionCard.textContent = project.descriptionCard   

    containerImg.appendChild(imgCard)
    containerDescription.appendChild(titleCard)
    containerDescription.appendChild(descriptionCard)

    document.getElementById("section-projects").appendChild(cardProject)
    
}


