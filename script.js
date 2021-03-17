let namez = document.querySelectorAll(".namez")
let lvlz = document.querySelectorAll(".lvlz")
let classz = document.querySelectorAll(".classz")
let slotz = document.querySelectorAll(".slotz")
let nadz = document.querySelectorAll(".nadz")
let icons = document.querySelectorAll('.nameicon')
let classes = document.querySelectorAll(".classes")
let maxlvl = document.querySelector(".maxlvl")
let armors = document.querySelector(".armors")
let kolvo = document.querySelector(".kolvo")
let grustno = document.querySelector(".grustno")
let predmet = document.querySelectorAll(".predmet")
let nameic = document.querySelectorAll(".nameic")
let namena = document.querySelectorAll(".namena")
let namesl = document.querySelectorAll(".namesl")
let nameur = document.querySelectorAll(".nameur")
let namechar = document.querySelectorAll(".namechar")
let nameduh = document.querySelectorAll(".nameduh")
let namefiz = document.querySelectorAll(".namefiz")
let massiv = [
    {
    name: 'Мантия мага-ученика',
    lvl: 2,
    classes: 'Еретик',
    slot: 'Грудь',
    nadeto: 1561,
    backurl: 'url("https://volia.biz//armory/images/icon/iconmag01.png")',
    positin: "-360px -240px",
    classpositin: "-130px -78px",
    char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +26  МЗащ +21'

    
},
    {
    name: 'Рубаха вора-ученика',
    lvl: 2,
    classes: 'Фантом',
    slot: 'Грудь',
    nadeto: 1549,
    backurl: 'url("https://volia.biz//armory/images/icon/iconmag05.png")',
    positin: "-160px -280px",
        classpositin: "-78px -104px",
        char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +36 МЗащ +18'
    
    },
    {
        name: 'Наплечники ученика',
        lvl: 2,
        classes: 'Еретик',
        slot: 'Плечи',
        nadeto: 1510,
        backurl: 'url("https://volia.biz//armory/images/icon/iconmag01.png")',
        positin: "-40px 0px",
        classpositin: "-130px -78px",
        char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +15 МЗащ +12'
    },
    {
        name: 'Золотой шлем рыцаря',
        lvl: 20,
        classes: 'Чемпион',
        slot: 'Шлем',
        nadeto: 1544,
        backurl: 'url("https://volia.biz//armory/images/icon/iconwar05.png")',
        positin: "-80px -400px",
        classpositin: "-78px -78px",
        char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +15 МЗащ +12'

    },
    {
        name: 'Рубаха лучника-ученика',
        lvl: 2,
        classes: 'Штурмовик',
        slot: 'Грудь',
        nadeto: 1489,
        backurl: 'url("https://volia.biz//armory/images/icon/iconarc01.png")',
        positin: "0px -280px",
        classpositin: "-26px -104px",
        char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +15 МЗащ +12'

    },
    {
        name: 'Крылья Феи I',
        lvl: 2,
        classes: 'Епископ',
        slot: 'Спина',
        nadeto: 1360,
        backurl: 'url("https://volia.biz//armory/images/icon/iconmag01.png")',
        positin: "-320px -160px",
        classpositin: "-78px -52px",
        char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +15 МЗащ +12'

    },
    {
        name: 'Плащ Храбрости I',
        lvl: 20,
        classes: 'Страж',
        slot: 'Спина',
        nadeto: 1110,
        backurl: 'url("https://volia.biz//armory/images/icon/iconwar01.png")',
        positin: "-80px -80px",
        classpositin: "-52px -78px",
        char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +15 МЗащ +12'

    }
    ,
    {
        name: 'Улучшенные железные когти',
        lvl: 5,
        classes: 'Фантом',
        slot: 'Оружие',
        nadeto: 826,
        backurl: 'url("https://volia.biz//armory/images/icon/iconthf02.png")',
        positin: "-200px 0px",
        classpositin: "-78px -104px",
        char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +15 МЗащ +12'
    }
    ,
    
    {
        name: 'Улучшенный лук охотника',
        lvl: 5,
        classes: 'Штурмовик',
        slot: 'Оружие',
        nadeto: 805,
        backurl: 'url("https://volia.biz//armory/images/icon/iconarc02.png")',
        positin: "-320px 0",
        classpositin: "-26px -104px",
        char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +15 МЗащ +12'

    },
    {
        name: 'Шарф шута I',
        lvl: 20,
        classes: 'Джокер',
        slot: 'Спина',
        nadeto: 767,
        backurl: 'url("https://volia.biz//armory/images/icon/iconthf01.png")',
        positin: "-80px -80px",
        classpositin: "-52px -104px",
        char: 'Можно улучшить у Уузнеца',
        duh: 'Можно улучшить у Джулии',
    fiz: 'Защ +15 МЗащ +12'

    }
,
]

/* Добавление значений в таблицу */
for (let i = 0; i <= massiv.length - 1; i++) {
    namez[i].textContent =massiv[i].name;
    icons[i].style.backgroundImage = massiv[i].backurl;
    icons[i].style.backgroundPosition = massiv[i].positin;
    classes[i].style.backgroundPosition = massiv[i].classpositin;
    classes[i].title = massiv[i].classes;
    lvlz[i].textContent = massiv[i].lvl;
    classz[i].textContent = massiv[i].classes;  
    slotz[i].textContent = massiv[i].slot;
    nadz[i].textContent = massiv[i].nadeto;
    nameic[i].style.backgroundImage = massiv[i].backurl;
    nameic[i].style.backgroundPosition = massiv[i].positin;
    namena[i].textContent = massiv[i].name;
    namesl[i].textContent = massiv[i].slot;
    nameur[i].textContent = massiv[i].lvl;
    namechar[i].textContent = massiv[i].char;
    nameduh[i].textContent = massiv[i].duh;
    namefiz[i].textContent = massiv[i].fiz;
}
var butt = document.getElementById('butt');
butt.onclick = function tableSearch() {
   
        var phrase = document.getElementById('search-text');
        var table = document.getElementById('info-table');
        var regPhrase = new RegExp(phrase.value, 'i');
        var flag = false;
        for (var i = 1; i < table.rows.length; i++) {
            flag = false;
            for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
                flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
                if (flag) break;
            }
            if (flag) {
                table.rows[i].classList.remove("invisible5");
            } else {
                table.rows[i].classList.add("invisible5");
            }
    
        }
        var mini = document.getElementById('mini').value;
    var maxi = document.getElementById('maxi').value;
 var klas = document.getElementById("nameklas").value;
    var slott = document.getElementById("nameslot").value;

   
    /*
    var poisk = document.getElementById("search").value;
 
    for (var nama of namez) {
        var vaz = nama.textContent;
        if (vaz == poisk)
       {nama.parentNode.parentNode.classList.remove("invisible4")}
           else { nama.parentNode.parentNode.classList.add("invisible4"); }
}
*/
 for (var slotik of slotz) {
    var vas = slotik.textContent;
       if (String(vas) == String(slott) || String(slott) == "pustota")
       {slotik.parentNode.classList.remove("invisible3")}
           else { slotik.parentNode.classList.add("invisible3"); }}
    
    for (var textklas of classz) {
     var vap = textklas.textContent;
        if (String(vap) == String(klas) || String(klas) == "pusto")
        {textklas.parentNode.parentNode.classList.remove("invisible2")}
            else { textklas.parentNode.parentNode.classList.add("invisible2"); }}
    
    for (var lvl of lvlz) {
        var vak = lvl.textContent;
        if (Number(vak) < Number(mini)  || Number(vak) > Number(maxi) )
        {lvl.parentElement.classList.add("invisible1");} 
        else { lvl.parentElement.classList.remove("invisible1"); }

         }
   
         var fuus = 0;
         for (let predm of predmet) {
             if (predm.classList.contains("invisible1") || predm.classList.contains("invisible2") || predm.classList.contains("invisible3") || predm.classList.contains("invisible4") || predm.classList.contains("invisible5"))  {
                 fuus = fuus + 1;
             }
         }
             
    kolvo.textContent = 13 - 3 - fuus;
    if (Number(kolvo.textContent == 0)) {
        grustno.style.display = "block";
        grustno.style.height = "350px";}else {
    grustno.style.display = "none";
        grustno.style.height = "0px";
}
    }

    function changeItem() {
        document.getElementById('lol').style.display = 'none';
      }
      function rechangeItem() {
        document.getElementById('lol').style.display = "inline";
      }
        




/*
  for (var textklas of classz) {
        var vap = textklas.textContent;
            if (String(vap) !== String(klas)) {
                var shsh = textklas.parentElement;
            shsh.parentElement.classList.add("invisible");}
            else { shsh.parentElement.classList.remove("invisible"); }
    }


var butt = document.getElementById('butt');
butt.onclick = function () {
    var mini = document.getElementById('mini').value;
    var maxi = document.getElementById('maxi').value;
    for (let lvl of lvlz) {
        var vak = lvl.textContent;
        if (Number(vak) < Number(mini))
        {lvl.parentElement.classList.add("invisible");} 
        else {lvl.parentElement.classList.remove("invisible");}
    if (Number(vak) > Number(maxi))
    {lvl.parentElement.classList.add("invisible");} 
        else { lvl.parentElement.classList.remove("invisible"); }
        
}    
};

maxlvl.onchange = function () {
    for (let lvl of lvlz) {
        if (lvl.textContent >= maxlvl.value)
        {lvl.parentElement.classList.add("invisible");} 
        else {lvl.parentElement.classList.remove("invisible");}
    }
}
*/

