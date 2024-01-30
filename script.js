document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');
    const data = await response.json();
    console.log(data);

    const nav = document.querySelector('.nav');
    
    data.data.forEach(element => {
        const menuItem = document.createElement('a');
        menuItem.href = '#';
        menuItem.textContent = element;
        menuItem.addEventListener('click', () => {
            loadArticles(element);
        });


        nav.appendChild(menuItem);
        
    });
} )


const loadArticles = async (anything) => {
    const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${anything}`);
    const data = await response.json();
    // console.log(data);

    const list = document.querySelector('.list');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    const articles = data.data.channel.item;
    console.log(articles);

    articles.forEach(article => {
        const myArticle = document.createElement('div')
        myArticle.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.link}">click me</a>
        <p>${article.pubDate}</p>
        `;
        list.appendChild(myArticle);
    })
}



// const getData = async () => {
//     const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');
//     const data = await response.json();
//     console.log(data);

//     const nav = document.querySelector('.nav');
    
//     data.data.forEach(element => {
//         const menuItem = document.createElement('a');
//         menuItem.href = '#';
//         menuItem.textContent = element;
//         nav.appendChild(menuItem);
        
//     });
// }
// getData();