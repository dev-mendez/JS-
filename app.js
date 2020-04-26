visivilidad = (com) => {
  id = com.id;
  name = com.name;
  document.getElementById(id).addEventListener("click", changeClase(id));
};

changeClase = () => {
  console.log(id);
  if (id == "bind") {
    document.getElementById("bindId").className = "visible";
    document.getElementById("aplyId").className = "hide";
    document.getElementById("callId").className = "hide";
  } else if (id == "aply") {
    document.getElementById("aplyId").className = "visible";
    document.getElementById("bindId").className = "hide";
    document.getElementById("callId").className = "hide";
  } else {
    document.getElementById("aplyId").className = "hide";
    document.getElementById("callId").className = "visible";
    document.getElementById("bindId").className = "hide";
  }
};

hideAll = () => {
  a = document.getElementsByClassName("visible");
  idi =a[0].id ;
  document.getElementById(idi).classList.toggle("hide");
};
