const loadCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
        
        
}


const displayCategories = (data) => {
    const categoriesSection = document.getElementById('categories-section');
    data.forEach(category => {
        // console.log(category.category_id)
        const categoryName = category.category_name;
        
        const categoryLink = document.createElement('a');

        categoryLink.innerHTML = `<a style="cursor: pointer;" onclick = "loadCategoryNews(${category.category_id})"  class = "d-block text-decoration-none text-secondary"> ${categoryName}</a>`;
        
        categoriesSection.appendChild(categoryLink);

    });
}  

const loadCategoryNews = (categoryId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`;
    // console.log(categoryId);
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data));
}
const displayNews = (data) => {
    console.log(data);
    const newsSection = document.getElementById('news-section');
    newsSection.innerHTML = '';
    if(data.length === 0){
        const noNews = document.createElement('p');
        noNews.classList.add("text-warning", "fs-2", "my-4", "text-center")
        noNews.innerText = 'No news Availabe';
        newsSection.appendChild(noNews);
    }
    else{
        data.forEach(news => {
            console.log(news)
            const newsDiv = document.createElement('div');
            newsDiv.classList.add("d-lg-flex", "align-items-center", "bg-white", "my-5", "rounded-3",)
            newsDiv.innerHTML = `
            <div>
                <img class = "p-lg-4 m-5 m-lg-0" src="${news.thumbnail_url}" alt="">
            </div>
            <div class = "mb-5 pe-lg-5 ps-2 ps-lg-0 ">
                <h3 class = "mb-3">${news.title}</h3>
                <p class= "mb-3">${news.details.slice(0,320)} ...</p>
                <div class= "d-block d-lg-flex  justify-content-between ">
                    <div class="d-flex">
                        <img height="40px" width="40px" class="rounded-circle mt-2 me-2" src="${news.author.img}" alt="">
                        <div class= "pt-1" >
                            <p class= "p-0 m-0">${news.author.name ? news.author.name : 'Name not available'}</p>
                            <p class = "p-0 m-0">${news.author.published_date ? news.author.published_date : 'No date available'}</p>
                        </div>
                    </div>
                    <div class= "d-flex gap-1 mt-3 ">
                        <i class="bi bi-eye"></i>
                        <p>${news.total_view ? news.total_view : 'No views availabe'}</p>
                    </div>
                    <div class= " mt-0 mt-lg-3 text-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                    </div>
                    <div>
                        <button id= "btn-details" class="text-primary btn "><i class="bi bi-arrow-right fs-1 fs-lg-3"></i></button>
                    </div>
                </div>
            </div>
            `
            newsSection.appendChild(newsDiv);
        });
    }
}
    

// loadNews(01);




loadCategories();
