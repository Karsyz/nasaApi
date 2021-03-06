//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getImage)
document.querySelector('span.close').addEventListener('click', reset)
document.querySelector('span.arrow').addEventListener('click', minimize)

function getImage() {

    const url = 'https://api.nasa.gov/planetary/apod?api_key=yxdwg7sRqLxKbyB626d2dlz2jHNG3LQReLtgOupw'

    let date = document.querySelector('input').value

    fetch(`${url}&date=${date}`)
        .then(res => res.json() )
        .then(data =>{
            console.log(data)
            document.querySelector('body').style = `background-image: url(${data.hdurl}); justify-content: flex-end; background-size: cover;`
            document.querySelector('.cont1').classList.toggle('none')
            document.querySelector('.outsideContainer').classList.toggle('none')
            document.querySelector('span.close').classList.toggle('none')
            document.querySelector('h2').innerHTML = data.title
            document.querySelector('p').innerHTML = data.explanation
            
            if (data.copyright !== undefined) {
                document.querySelector('span.copyright').innerHTML = `© ${data.date.slice(0,4)} ${data.copyright}`
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}    

function reset() {
    location.reload()
}

function minimize() {
    // document.querySelector('.overflowWrapper').classList.toggle('flx-col-rev')
    document.querySelector('.cont2').classList.toggle('hide')
    if (document.querySelector('span.arrow').textContent === "arrow_downward") {
        document.querySelector('span.arrow').textContent = "arrow_upward"
    }else {
        document.querySelector('span.arrow').textContent = "arrow_downward"
    }
}


// polishing ideas

// secret keys? - build api that runs on my server that will answer api key request from nasa

// high-light start on click and animate brightness while fading out the center
