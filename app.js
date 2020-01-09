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
        let data_num = localStorage.key(i)
        if(data_num === choise_num){
          append(choise_data, choise_num)
        }
      }
    }
  }else{
    error_mess()
  }
}

function append(output, num){
  let li = []
  let data = []
  if(num === null){
    for(let i=0; i<localStorage.length; i++){
      li[i] = document.createElement("li")
      data[i] = localStorage.getItem(i)
      li[i].textContent = " key : "+i+", value : "+data[i]
      output.appendChild(li[i])
    }
  }else{
    li[0] = document.createElement("li")
    data[0] = localStorage.getItem(num)
    li[0].textContent = " key : "+num+", value : "+data[0]
    output.appendChild(li[0])
  }
}

function error_mess(){
  alert("LocalStorageにデータがありません")
}

//削除したい時はコメントアウトを無効にする
localStorage.clear()
