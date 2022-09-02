const loadCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}


const displayCategories = (data) => {
    const categoriesSection = document.getElementById('categories-section');
    data.forEach(category => {
        const categoryName = document.createTextNode(category.category_name);
        
        const categoryLink = document.createElement('a');
        // categoryDiv.classList.add('')
        categoryLink.classList.add("text-decoration-none", "text-secondary")
        categoryLink.appendChild(categoryName);
        categoryLink.href = "https://www.google.com";

        categoriesSection.appendChild(categoryLink)

    });
}  

loadCategories();
