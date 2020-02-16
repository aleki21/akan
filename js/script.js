function passGender(gender){
  var dob = Document.getElementById('birthdate').value;
  var dob = document.getElementById("birthdate").value;
  var day = new Date(dob).getDay();

  if(gender=='M'){
  //alert(day);
  //alert(gender);
  if(gender == "M"){
    akanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    //alert(akanNames);
    var akan = akanNames[day];
    alert (akan);
    alert(akan);

  } else if(gender=='F'){
  }else {
    akanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    alert (akan);
    var akan = akanNames[day];
    alert(akan);
  }
}
