document.getElementById("btnChangeStyle").addEventListener("click", () => {
  //スタイルで文字色を変更。
  document.getElementById("idStyle").style.color = "red";
}, false);

document.getElementById("btnRoleBackStyle").addEventListener("click", () => {
  //スタイルで文字色を戻す。
  document.getElementById("idStyle").style.color = null;
}, false);


document.getElementById("btnChangeClass").addEventListener("click", () => {
  //クラスで文字色を変更。
  document.getElementById("idClass").classList.add("clsColorBlue");
},false);

document.getElementById("btnRoleBackClass").addEventListener("click", () => {
  //クラスで文字色を戻す。
  document.getElementById("idClass").classList.remove("clsColorBlue");
},false);


document.getElementById("btnChangeClass2_1").addEventListener("click", () => {
  //スタイルで文字色を変更。
  document.getElementById("idClass2").style.color = "red";
},false);

document.getElementById("btnChangeClass2_2").addEventListener("click", () => {
  //スタイル優先のため、クラスで文字色を変更できない。
  document.getElementById("idClass2").classList.add("clsColorBlue");
},false);

document.getElementById("btnChangeClass2_3").addEventListener("click", () => {
  //スタイルで文字色をも戻す。
  document.getElementById("idClass2").style.color = null;
},false);

document.getElementById("btnChangeClass2_4").addEventListener("click", () => {
  //スタイル優先のため、クラスで文字色を変更できない。
  document.getElementById("idClass2").classList.remove("clsColorBlue");
},false);