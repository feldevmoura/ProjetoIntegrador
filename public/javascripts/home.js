var balls = document.querySelector('.balls');
    var quant = document.querySelectorAll('.phones div');
    var first = 0;
    var imagem = document.getElementById('first');
    var next = document.getElementById('next');
    var previous = document.getElementById('previous');
    var rolar = true

    for(let i = 0; i < quant.length; i++){
        var div = document.createElement('div');
        div.id = i
        balls.appendChild(div)
    }
    document.getElementById('0').classList.add('imgAtual')

    var pos = document.querySelectorAll('.balls div')

    for(let i=0; i < pos.length; i++){
        pos[i].addEventListener('click', ()=>{
            first = pos[i].id
            rolar = false
            slide()
        })
    }

    previous.addEventListener('click', () => {
        first--
        rolar = false
        slide()
    })

    next.addEventListener('click', () => {
        first++
        rolar = false
        slide()
    })

    function slide () {
        if(first >= quant.length){
            first = 0
        }
        else if(first < 0){
            first = quant.length-1
        }
        document.querySelector('.imgAtual').classList.remove('imgAtual')
        imagem.style.marginLeft = -54*first+'vw'
        document.getElementById(first).classList.add('imgAtual')
    }

    slide()
    setInterval(()=> {
        if(rolar){
        first++
        slide()
        }
        else{
            rolar = true
        }
    },8000)