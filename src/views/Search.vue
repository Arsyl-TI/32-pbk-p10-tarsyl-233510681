<template>
	<main id="search-page">
<div class="search-container">
    <form action="/search" method="get" class="search-box" style="display: flex;">
        <select name="category" 
                style="padding: 10px;
                       border: 2px solid #ddd;
                       border-right: none;
                       border-radius: 5px 0 0 5px;
                       outline: none;">
            <option value="all">Semua Kategori</option>
            <option value="electronics">Elektronik</option>
            <option value="fashion">Fashion</option>
            <option value="food">Makanan</option>
        </select>
        <input type="text" 
               placeholder="Cari produk..." 
               name="q" 
               style="flex-grow: 1;
                      padding: 10px;
                      border: 2px solid #ddd;
                      outline: none;">
        <button type="submit" 
                style="padding: 10px 15px;
                       background-color: #4CAF50;
                       color: white;
                       border: none;
                       border-radius: 0 5px 5px 0;
                       cursor: pointer;">
            Cari
        </button>
    </form>
</div>
	</main>
</template>