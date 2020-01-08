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
    let output = document.getElementById("output")
    let li = []
    let data = []
    for(let i=0; i<localStorage.length; i++){
      li[i] = document.createElement("li")
      data[i] = localStorage.getItem(i)
      li[i].textContent = " key : "+i+", value : "+data[i]
      output.appendChild(li[i])
    }
  }else{
    alert("LocalStorageにデータがありません")
  }
}

function choise() {
  console.log("Hello")

  //let select = document.getElementById("select")
  //let select_num = select.value
  //console.log(select_num)
}

//削除したい時はコメントアウトを無効にする
//localStorage.clear()
