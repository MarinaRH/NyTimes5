const btnXhr=document.getElementById('submit-xhr');
const btnFetch=document.getElementById('submit-fetch');
const searchField= document.getElementById('search-keyword');
const responseContainer=document.getElementById('response-container');
let searchedForText;

btnXhr.addEventListener('click',function(e){
  e.preventDefault();
  responseContainer.innerHTML='';
  searchedForText=searchField.value;
  getNews();
})

function getNews(){
    const XHR=new XMLHttpRequest();
    XHR.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=67e2b2e80b4340dc9b9c27b472072dc7`);
    XHR.onload=addNews;
    XHR.onerror=handleError;
    XHR.send();
}

function handleError(){
    console.log('se ha presentado un error');
}

function addNews(){
    const data = JSON.parse(this.responseText);
    const article = data.response.docs[0];
    const title = article.headline.main;
    const snippet = article.snippet;
    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerText=snippet;
    responseContainer.appendChild(li);
    // const response=data.response;
    // console.log(response);
}



btnFetch.addEventListener('click', function(e){
   e.preventDefault();
   responseContainer.innerHTML='';
   searchedForText=searchField.value;
  getNews();
    let uri = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=67e2b2e80b4340dc9b9c27b472072dc7`;
     fetch(uri)
     .then(function(response){
        //  console.log(response);
         return response.json();
     }).then(function(data){
        const article = data.response.docs[0];
        const title = article.headline.main;
        const snippet = article.snippet;
        let li = document.createElement('li');
        li.className = 'articleClass';
        li.innerText=snippet;
        responseContainer.appendChild(li);
    })
     .catch(function(error){
         console.log(error);
     });
});
