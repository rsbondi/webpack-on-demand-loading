console.info('Index loaded from server!')

function loadPage() {

  const page = document.location.hash.substr(1) || 'home'

  import(`./pages/${page}`)
  .then(page => {
    document.getElementById('application').innerHTML = page.render()
  })

}

window.addEventListener('load', loadPage)
window.addEventListener('hashchange', loadPage)

const pages = ["Home", "About"/*, "Extension"*/]
pages.forEach(p => {
  let a = document.createElement('a')
  a.textContent = p
  a.href = `#${p.toLowerCase()}`
  document.querySelector('nav').appendChild(a)
})
