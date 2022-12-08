const facebook = document.getElementById('facebook-btn')
const whatsapp = document.getElementById('whatsapp-btn')


const street = document.getElementById('street')
const street2 = document.querySelector('.street2')

// facebook link, whatsapp number, <?>...
// add if u have another social media
const linked = ['https://m.facebook.com/profile.php?id=100073246994943', 'https://wa.me/62881038007738']


facebook.addEventListener('click', () => {
    location.href = linked[0]
})

whatsapp.addEventListener('click', () => {
    location.href = linked[1]
})




// setting
street.addEventListener('click', () => {
    location.href = '#location';
})

street2.addEventListener('click', () => {
    location.href = '#location';
})