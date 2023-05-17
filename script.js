const link = "https://thumbs44.redgifs.com/SpanishGivingNene.mp4?expires=1684379400&signature=v2:afebb48ad393bdd4e9e35b2bd3e944e88ca0e78aecd964cc0007a92d0c65ac55&for=47.184.231&hash=6163438793"
var links = link.split('\n')

random()

function random() {
  var rand = Math.floor(Math.random() * links.length)

  if(checkRedgif(links[rand])){
    document.getElementById('redgif').src = links[rand]
    document.getElementById('redgif').style.height = '100%'
    document.getElementById('redgif').style.width = '100%'
    document.getElementById('vid').src = ''
    document.getElementById('vid').style.height = '0%'
    document.getElementById('vid').style.width = '0%'
    document.getElementById('img').src = ''
    document.getElementById('img').style.height = '0%'
    document.getElementById('img').style.width = '0%'
  }else if (checkImage(links[rand])) {
    document.getElementById('redgif').src = ''
    document.getElementById('redgif').style.height = '0%'
    document.getElementById('redgif').style.width = '0%'
    document.getElementById('img').src = links[rand]
    document.getElementById('vid').src = ''
    document.getElementById('vid').style.height = '0%'
    document.getElementById('vid').style.width = '0%'
    document.getElementById('img').style.height = '100%'
    document.getElementById('img').style.width = '100%'
  } else {
    document.getElementById('redgif').src = ''
    document.getElementById('redgif').style.height = '0%'
    document.getElementById('redgif').style.width = '0%'
    document.getElementById('vid').src = links[rand]
    document.getElementById('img').src = ''
    document.getElementById('img').style.height = '0%'
    document.getElementById('img').style.width = '0%'
    document.getElementById('vid').style.height = '100%'
    document.getElementById('vid').style.width = '100%'
  }
  document.getElementById('num').innerHTML = rand + 1
}

function checkImage(url) {
  return url.includes('png') || url.includes('jpg') || url.includes('jpeg')
}

function checkRedgif(url) {
  //return url.includes('redgifs')
  return false;
}