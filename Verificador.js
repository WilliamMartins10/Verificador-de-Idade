function verificar() {
   var data = new Date();
   var ano = data.getFullYear();
   var fano = document.getElementById('txtano');
   var res = document.querySelector('div#res');

   if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('[ERRO] Verifique os dados e tente novamente!');
   } else {
       var fsex = document.getElementsByName('radsex');
       var idade = ano - Number(fano.value);
       var genero = '';
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');

       if (fsex[0].checked) {
           genero = 'Homem';
           if (idade >= 0 && idade < 10) {
               // CRIANÇA
               img.setAttribute('src', 'menino_crianca.jpg');
           } else if (idade < 21) {
               // JOVEM
               img.setAttribute('src', 'menino_adolescente.jpg');
           } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'homem.jpg');
           } else {
               // Idoso
               img.setAttribute('src', 'senhor.jpg');
           }
       } else if (fsex[1].checked) {
           genero = 'Mulher';
           if (idade >= 0 && idade < 10) {
               // CRIANÇA
               img.setAttribute('src', 'menina_crianca.jpg');
           } else if (idade < 21) {
               // JOVEM
               img.setAttribute('src', 'menina_adolescente.jpg');
           } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'mulher.jpg');
           } else {
               // Idoso
               img.setAttribute('src', 'senhora.jpg');
           }
       }

       res.style.textAlign = 'center';
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
       res.appendChild(img);
   }
}
