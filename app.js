let mydata = []

function save() {
  let input = document.getElementById("input")
  if(input.value){
    mydata.push(input.value)
    let storage_id = mydata.length - 1
    localStorage.setItem(storage_id, mydata[storage_id])
    console.log("Save data = " + mydata[storage_id])
  }else{
    alert("入力値がありません")
  }
}

function load() {
  if(localStorage.getItem(0)) {
    let load_data = document.getElementById("load_data")
    append(load_data, null)
  }else{
    error_mess()
  }
}

function choise() {
  if(localStorage.getItem(0)){
    let choise = document.getElementById("choise")
    let choise_data = document.getElementById("choise_data")
    let choise_num = choise.value
    if(localStorage.length >= choise_num && localStorage){
      for(let i=0; i<localStorage.length; i++){
        if(localStorage.key(i) === choise_num){
          append(choise_data, choise_num)
        }
      }
    }
  }else{
    error_mess()
  }
}

function append(output, num){
  if(num === null){
    let li = []
    let data = []
    for(let i=0; i<localStorage.length; i++){
      li[i] = document.createElement("li")
      data[i] = localStorage.getItem(i)
      li[i].textContent = " key : "+i+", value : "+data[i]
      output.appendChild(li[i])
    }
  }else{
    let li = document.createElement("li")
    let data = localStorage.getItem(num)
    li.textContent = " key : "+num+", value : "+data
    output.appendChild(li)
  }
}

function error_mess(){
  alert("LocalStorageにデータがありません")
}

//LocalStorageを残して置きたい時はコメントアウト
localStorage.clear()
