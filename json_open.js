url = "nicoRank.json"
alert('Hello world!');

$.getJSON(url, (data) => {
    index_max = data.data.length
    console.log("index_max : "+index_max);

    for (let i=index_max-1; i>=0; i--){
      bar(3, i)
    }
});

/*
function day_next(){
    index = index + 1
    document.getElementById("index").setAttribute("value",index );
}
function day_back(){
    index = index - 1
    document.getElementById("index").setAttribute("value",index );
  }
function jsonfile_get(){
    $.getJSON("data/title.json", (data) => {
        for (let i=0; i<data.title.length; i++){
          console.log(data.title[i]);
        }
      });
    folderRef = new Folder ("/data/"); 
    fileList = folderRef.getFiles(); 
    txt = ""; 
    for (i=0; i<fileList.length; i++)
    {          
        console.log(fileList[i]);
    }
}
function jsonfile_set(){
    $.getJSON("data/title.json", (data) => {
        for (let i=0; i<data.title.length; i++){
          console.log(data.title[i]);
        }
      });
}
*/

function bar(data_length, index) {
  $.getJSON(url, (data) => {
    //表示データ数設定
    /*
    if (data_length == 0){
      data_length = data.data[index].main.length

      _list = document.getElementById("FavList")
      while( _list.firstChild ){
        _list.removeChild( _list.firstChild );
      }
    }
    */
    console.log("index : "+index)
    console.log("data_length : "+data_length)

    var newTa = document.createElement("table");
    newTa.setAttribute("class", "hero table is-striped is-fullwidth");

    for (let i=0; i<data_length; i++){
      var rank = document.createElement("th");
      var newTxt = document.createTextNode(data.data[index].main[i].rank );
      //newTxt.setAttribute("class", "hero is-danger" );
      rank.appendChild( newTxt );
      //rank.setAttribute("class", "hero is-danger" );
      
      var time = document.createElement("th");
      var newTxt = document.createTextNode(data.data[index].main[i].time );
      time.appendChild( newTxt );
      
      var viewCnt = document.createElement("th");
      var newTxt = document.createTextNode(data.data[index].main[i].viewCnt );
      viewCnt.appendChild( newTxt );

      var title = document.createElement("a");
      var newTxt = document.createTextNode(data.data[index].main[i].title );
      title.appendChild( newTxt );
      title.setAttribute("href", data.data[index].main[i].url );
      title.setAttribute("class", "button is-text" );
      title.setAttribute("style", "text-decoration: none; height: 25px;" );
      var url = document.createElement("th");
      url.appendChild ( title );


      // table行要素の追加
      var newLi = document.createElement("tr");
      newLi.appendChild ( rank );
      newLi.appendChild ( viewCnt );
      newLi.appendChild ( url );
      newLi.appendChild ( time );

      // tableに追加
      newTa.appendChild ( newLi );
    }
    var ranking_time = document.createElement("p");
    ranking_time.innerText = "ランキング in "+data.data[index].title
    
    //data_listに追加
    var list = document.getElementById("data_list");
    list.appendChild( ranking_time );
    list.appendChild( newTa );
    list.appendChild( document.createElement("br") );
  });
}