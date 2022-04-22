const form = document.querySelector('#formulario');
const resultado = document.querySelector('.resultado');
function resultadoFormulario(event) {

  event.preventDefault();
  
  const inputPeso = document.querySelector('#peso').value;
  const inputAltura = document.querySelector('#altura').value;

  const imcTotal = (inputPeso / (inputAltura * inputAltura)).toFixed(2);
  
   if (imcTotal >= 0.00 && imcTotal <= 18.49){
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Isso significa que você é muito magro. &#x1F626;  </p>`
  }

   else if (imcTotal >= 18.50 && imcTotal <= 24.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Seu IMC é considerado "Normal". &#x1F604;  </p>`
  }
  
   else if (imcTotal >= 25.00 && imcTotal <= 29.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Isso significa que sua classificação é "Sobrepeso". &#x1F615;  </p>`
  }
  
   else if (imcTotal >= 30.00 && imcTotal <= 39.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Você é considerado "Obeso". &#128559;  </p>`
  } 

   else if (imcTotal >= 40.00) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Sua classificação é "Obesidade grave", 
    em um terceiro grau de obesidade. Você precisa de ajuda? &#x1F630;  </p>`
  }

   else {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> 0 </strong> - Algo de errado não está certo... &#x1F61C;</p>`
  }
} 

form.addEventListener('submit', resultadoFormulario)
