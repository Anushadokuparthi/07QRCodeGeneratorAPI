let url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150'
const btn = document.getElementById('submit')
const img = document.getElementById('img')
const input = document.getElementById('input')

input.addEventListener('change', function(){
    const value = this.value
    url = url + "&data=" + value
})

btn.addEventListener('click',qrCodeGenerator)

function qrCodeGenerator(){
    if(url.includes('data')){
        fetch(url)
        .then(response => response.blob())
        .then(blob => {
            //const imgEle = document.createElement('img')
            const imgSrc = URL.createObjectURL(blob)
            img.src = imgSrc
            img.style.display = 'block'
        })
        .catch(() => {
            console.log('Error')
        })
    }else{
        alert('Please add the data')
    }   
    //const data = await response.json()
    //console.log(data)
}
