console.log("Vous etes bel et bien sur notre page")

const prenom = document.getElementById("prenom")
const nom = document.getElementById("nom")
const mail = document.getElementById("mail")
const mdp = document.getElementById("mdp")
const send = document.getElementById("send")
const form = document.getElementById("form")

send.onclick = function(){
  if(prenom.value==""){
    document.getElementById("erreurPrenom").textContent="First name can not be empty";
  }
  if(nom.value==""){
    document.getElementById("erreurNom").textContent="Name can not be empty";
  }
  if(!(/^([a-z0-9]{1,})@([a-z0-9]{1,})\.([a-z0-9]{2,5})$/.test(mail.value))){
    document.getElementById("erreurMail").textContent="Looks like this is not not mail";
  }
  if(mdp.value==""){
    document.getElementById("erreurPassword").textContent="Password can not be empty";
  }
}
