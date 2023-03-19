function home() {
    $('.track').text('d')
}

let inter = 30
let probar = 70

function nigte() {
    inter = inter - 1
    probar = probar - 7 / 3
    $('.inbar').css('width' , probar + 'vw')
    $('.lanum').text(inter + '초')
    if (inter === 0) {
        clearInterval(nn)
        $('.chkqr').css('opacity' , '0')
        $('.rope').css('opacity' , '0')
        $('.ris').css('height' , '6vh')
        $('.ristxt').text('QR코드 다시 표시')
    }
}

let nn = setInterval(nigte,1000)

function showbar() {
    $('.rope').css('opacity' , '1')
    $('.ris').css('height' , '0')
    $('.ristxt').text('')
    $('.inbar').css('width' , '70vw')
    $('.lanum').text('30초')
    $('.chkqr').css('opacity' , '1')
    inter = 30
    probar = 70
    nn = setInterval(nigte,1000)
}


let rlname = '홍길동' //벨뉴대신

let rlfrom = '경기도 수원 시장'

let rlnum = '851023-1234567' //벨뉴대신
let hidnum = rlnum[0] + rlnum[1] + rlnum[2] + rlnum[3] + rlnum[4] + rlnum[5] + rlnum[6] + rlnum[7]
$('.number').text(hidnum)

let rlloca = '서울특별시 중구 세종대로 110 123동 1234호'
let hidloca = '서울특별시 중구'
$('.loca').text(hidloca)

if (rlname.length === 2) {
    let hidname = rlname[0] + 'X'

    $('.name').text(hidname)
    function show() {
        clearInterval(nn)
        $('.name').text(rlname)
        $('.number').text(rlnum)
        $('.loca').text(rlloca)
        $('.chkqr').css('height' , '0')
        $('.loca').css('width' , '60vw')
        $('.shoinpo').css('height' , '0')
        $('.shinpotxt').text('')
        $('.bar').css('height' , '0')
        $('.inbar').css('height' , '0')
        $('.ris').css('height' , '0')
        $('.ristxt').text('')
        $('.latim').text('')
        $('.lanum').text('')
        $('.lern').text('')
        $('.from').text(rlfrom)
        const agecode = Number(rlnum[0] + rlnum[1]) + 19
        if (agecode > 99) {
            if (agecode - 100 < 10) {
                $('.track').text( '0' + (agecode - 100) + '.' + Math.floor(Math.random() * 12 + 1) + '.' + Math.floor(Math.random() * 27 + 1))
            } else {
                $('.track').text( agecode - 100 + '.' + Math.floor(Math.random() * 12 + 1) + '.' + Math.floor(Math.random() * 27 + 1))
            }
        } else {
            $('.track').text( agecode + '.' + Math.floor(Math.random() * 12 + 1) + '.' + Math.floor(Math.random() * 27 + 1))
        }
    }
}

if (rlname.length === 3) {
    let hidname = rlname[0] + 'X' + rlname[2]

    $('.name').text(hidname)
    function show() {
        clearInterval(nn)
        $('.name').text(rlname)
        $('.number').text(rlnum)
        $('.loca').text(rlloca)
        $('.chkqr').css('height' , '0')
        $('.loca').css('width' , '60vw')
        $('.shoinpo').css('height' , '0')
        $('.shinpotxt').text('')
        $('.bar').css('height' , '0')
        $('.inbar').css('height' , '0')
        $('.ris').css('height' , '0')
        $('.ristxt').text('')
        $('.latim').text('')
        $('.lanum').text('')
        $('.lern').text('')
        $('.from').text(rlfrom)
        const agecode = Number(rlnum[0] + rlnum[1]) + 19
        if (agecode > 99) {
            if (agecode - 100 < 10) {
                $('.track').text( '0' + (agecode - 100) + '.' + Math.floor(Math.random() * 12 + 1) + '.' + Math.floor(Math.random() * 27 + 1))
            } else {
                $('.track').text( agecode - 100 + '.' + Math.floor(Math.random() * 12 + 1) + '.' + Math.floor(Math.random() * 27 + 1))
            }
        } else {
            $('.track').text( agecode + '.' + Math.floor(Math.random() * 12 + 1) + '.' + Math.floor(Math.random() * 27 + 1))
        }
    }
}

if (rlname.length === 4) {
    let hidname = rlname[0] + 'XX' + rlname[3]

    $('.name').text(hidname)
    function show() {
        clearInterval(nn)
        $('.name').text(rlname)
        $('.number').text(rlnum)
        $('.loca').text(rlloca)
        $('.chkqr').css('height' , '0')
        $('.loca').css('width' , '60vw')
        $('.shoinpo').css('height' , '0')
        $('.shinpotxt').text('')
        $('.bar').css('height' , '0')
        $('.inbar').css('height' , '0')
        $('.ris').css('height' , '0')
        $('.ristxt').text('')
        $('.latim').text('')
        $('.lanum').text('')
        $('.lern').text('')
        $('.from').text(rlfrom)
        const agecode = Number(rlnum[0] + rlnum[1]) + 19
        if (agecode > 99) {
            if (agecode - 100 < 10) {
                $('.track').text( '0' + (agecode - 100) + '.' + Math.floor(Math.random() * 12 + 1) + '.' + Math.floor(Math.random() * 27 + 1))
            } else {
                $('.track').text( agecode - 100 + '.' + Math.floor(Math.random() * 12 + 1) + '.' + Math.floor(Math.random() * 27 + 1))
            }
        } else {
            $('.track').text( agecode + '.' + Math.floor(Math.random() * 12 + 1) + '.' + Math.floor(Math.random() * 27 + 1))
        }
    }
}
