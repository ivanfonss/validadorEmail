let vermelho="#ffcccc";
let red= "#ff0000";
let verde="#ccffcc";
let green= "#008000";


document.getElementById('emailForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var emailStructureInfo = document.getElementById('emailStructureInfo');
    var email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        document.getElementById('label').innerHTML = "E-mail inválido"
        emailStructureInfo.textContent = "Deve seguir o formato nome@provedor.com";
        colorValid(vermelho, red);
        recarregar();
    
    } else {
        document.getElementById('label').innerHTML = "E-mail válido";
        emailStructureInfo.textContent = "Válido";
        colorValid(verde, green);
        recarregar();
    
    }
    
});

document.getElementById('botaoRecarrega').addEventListener('click', function(event) {
    window.location.reload();
    
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}; // verifoca se o email é valido
function colorValid(cor, cor2){
    document.getElementById('emailForm').style.backgroundColor = cor; 
    document.getElementById('email').style.backgroundColor = cor; 
    document.getElementById('corContainer').style.backgroundColor = cor; 
    document.getElementById('label').style.color = cor2;
    event.preventDefault();
}; //muda cor 
function recarregar(){
    document.getElementById('botao').style.display = "none";
    document.getElementById('botaoRecarrega').style.display = "inline";
}; //troca o botão para recarregar