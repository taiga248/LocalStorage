const choice_btn = document.getElementById("choice_btn");
const print_btn = document.getElementById("print");
const save_btn = document.getElementById("save");

let choice_data = document.getElementById("choice_data");
let load_data = document.getElementById("load_data");
let storage_data = [];

print_btn.addEventListener("click", () => {
  print();
});
save_btn.addEventListener("click", () => {
  save();
});
choice_btn.addEventListener("click", () => {
  choice();
});

function print() {
  if (!localStorage.getItem(0)) return error_mess();
  append(load_data, null);
}
function save() {
  let input_text = document.getElementById("input_text").value;
  if (!input_text) return alert("入力値がありません");
  storage_data.push(input_text);
  let id = storage_data.length - 1;
  localStorage.setItem(id, storage_data[id]);
  console.log("Save data = " + storage_data[id]);
}

function choice() {
  if (!localStorage.getItem(0)) return error_mess();
  let choice = document.getElementById("choice");
  let choice_num = choice.value;
  if (localStorage.length >= choice_num && localStorage) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === choice_num) {
        append(choice_data, choice_num);
      }
    }
  }
}

function append(output, num) {
  if (num === null) {
    let li = [];
    let data = [];
    for (let i = 0; i < localStorage.length; i++) {
      li[i] = document.createElement("li");
      data[i] = localStorage.getItem(i);
      li[i].textContent = "key : " + i + ", value : " + data[i];
      output.appendChild(li[i]);
    }
  } else {
    let li = document.createElement("li");
    let data = localStorage.getItem(num);
    li.textContent = "key : " + num + ", value : " + data;
    output.appendChild(li);
  }
}

function error_mess() {
  alert("LocalStorageにデータがありません");
}

// LocalStorageを残して置きたい時はコメントアウト
localStorage.clear();
