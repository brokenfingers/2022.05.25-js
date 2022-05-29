// 1 -----------------------------------------------------------------------------


const holder = document.getElementById('moku')

holder.textContent = 'Valio pavyko'
holder.style.backgroundColor = 'green'
holder.style.width = '300px'
holder.style.height = '300px'
holder.style.margin = '0 auto'

// 2 -----------------------------------------------------------------------------

const holder2 = document.createElement('div');
const body = document.querySelector('body')

const button1 = document.createElement('button')

holder2.setAttribute('id', 'moku2');
holder2.textContent = 'Valio pavyko!'
holder2.style.backgroundColor = 'red'
holder2.style.width = '300px'
holder2.style.height = '300px'
holder2.style.margin = '0 auto'

body.appendChild(holder2)

const handleRemoveElements = (e) => {
    body.removeChild(holder2)
    body.removeChild(e.target)
}

button1.addEventListener('click', handleRemoveElements)
button1.textContent = 'Panaikinti'
// body.style.textAlign = 'center'
body.appendChild(button1)


// 2 -----------------------------------------------------------------------------

const button2 = document.createElement('button')

const handleShowVideo = () => {
    // const html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/WcvvYPu6cow?start=1409" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    const video = document.createElement('iframe')
    video.width = '560'
    video.height = '315'
    video.title = "YouTube video player"
    video.src = "https://www.youtube.com/embed/WcvvYPu6cow?start=1409"
    video.setAttribute('frameborder', '0')
    video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    video.style.marginLeft = 'calc((100% - 560px) / 2)'
    body.append(video)
}

button2.setAttribute('id', 'KARAMBA')
button2.style.display = 'block'
button2.textContent = 'Rodyti video'
button2.addEventListener('click', handleShowVideo)
body.appendChild(button2)

