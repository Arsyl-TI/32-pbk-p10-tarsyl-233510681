<template>
	<main id="keranjang-page">
		<div class="container">
			<h1>Keranjang Belanja Anda</h1>
			
			<div class="cart-items">
				<!-- Item 1 -->
				<div class="cart-item">
					<img src="https://via.placeholder.com/80" alt="Nasi Goreng" class="item-image">
					<div class="item-details">
						<div class="item-name">baju</div>
						<div class="item-price">Rp 25.000</div>
						<div class="quantity-control">
							<button class="quantity-btn">-</button>
							<span class="quantity">1</span>
							<button class="quantity-btn">+</button>
						</div>
					</div>
					<button class="remove-btn">Hapus</button>
				</div>
				
				<!-- Item 2 -->
				<div class="cart-item">
					<img src="https://via.placeholder.com/80" alt="Es Teh" class="item-image">
					<div class="item-details">
						<div class="item-name">Pena</div>
						<div class="item-price">Rp 8.000</div>
						<div class="quantity-control">
							<button class="quantity-btn">-</button>
							<span class="quantity">2</span>
							<button class="quantity-btn">+</button>
						</div>
					</div>
					<button class="remove-btn">Hapus</button>
				</div>
				
				<!-- Item 3 -->
				<div class="cart-item">
					<img src="https://via.placeholder.com/80" alt="Sate Ayam" class="item-image">
					<div class="item-details">
						<div class="item-name">Buku</div>
						<div class="item-price">Rp 30.000</div>
						<div class="quantity-control">
							<button class="quantity-btn">-</button>
							<span class="quantity">1</span>
							<button class="quantity-btn">+</button>
						</div>
					</div>
					<button class="remove-btn">Hapus</button>
				</div>
			</div>
			
			<div class="cart-summary">
				<div class="summary-row">
					<span>Subtotal</span>
					<span>Rp 63.000</span>
				</div>
				<div class="summary-row">
					<span>Biaya Pengiriman</span>
					<span>Rp 10.000</span>
				</div>
				<div class="summary-row total">
					<span>Total</span>
					<span>Rp 73.000</span>
				</div>
				
				<button class="checkout-btn">Lanjut ke Pembayaran</button>
			</div>
			
			<!-- Untuk keranjang kosong -->
			<!-- <div class="empty-cart">
				<h3>Keranjang Anda Kosong</h3>
				<p>Silakan tambahkan menu untuk memulai pesanan</p>
			</div> -->
		</div>
	</main>
</template>

<style>
 body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .cart-item {
            display: flex;
            border-bottom: 1px solid #eee;
            padding: 15px 0;
            align-items: center;
        }
        .item-image {
            width: 80px;
            height: 80px;
            object-fit: cover;
            margin-right: 15px;
            border-radius: 4px;
        }
        .item-details {
            flex-grow: 1;
        }
        .item-name {
            font-weight: bold;
            margin-bottom: 5px;
        }
        .item-price {
            color: #e53935;
            font-weight: bold;
        }
        .quantity-control {
            display: flex;
            align-items: center;
            margin-top: 10px;
        }
        .quantity-btn {
            background-color: #eee;
            border: none;
            width: 25px;
            height: 25px;
            border-radius: 4px;
            cursor: pointer;
        }
        .quantity {
            margin: 0 10px;
        }
        .remove-btn {
            background-color: #ffcdd2;
            color: #d32f2f;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 15px;
        }
        .cart-summary {
            margin-top: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 4px;
        }
        .summary-row {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
        }
        .total {
            font-weight: bold;
            font-size: 1.2em;
        }
        .checkout-btn {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 12px 20px;
            width: 100%;
            border-radius: 4px;
            font-size: 1.1em;
            cursor: pointer;
            margin-top: 10px;
        }
        .empty-cart {
            text-align: center;
            padding: 40px 0;
            color: #888;
        }
</style>