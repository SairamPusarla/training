let displayNews = (news) => {
    let output = '';
    for(i=0;i<news.length;i++){
        output += `<div class='article'><h3>${news[i].title}</h3><img src='${news[i].imageUrl}'/><p>${news[i].content}</p></div>`;
    }
    document.getElementById('news').innerHTML = output;

};

let displayCurrencies = (data) =>{
    let output = '';
    Object.entries(data).forEach((currency)=>{
        output += `<div class='article'>
        <h3>${currency}</h3>
        </div>`;
    });
    document.getElementById('news').innerHTML = output;
}
// fetch('https://inshortsapi.vercel.app/news?category=science')
// .then(res => res.json())
// .then(res => displayNews(res.data));

fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
.then(res=>res.json())
.then(res=>displayCurrencies(res));