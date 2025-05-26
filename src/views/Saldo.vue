<template>
	<main id="saldo-page">
<div class="container">
        <!-- Kartu Dompet -->
        <div class="wallet-card">
            <div class="wallet-header">
                <div class="wallet-title">Dompet Digital</div>
                <div class="wallet-logo">MyWallet</div>
            </div>
            
            <div class="balance">
                <div class="balance-label">Saldo Tersedia</div>
                <div class="balance-amount">Rp 1.250.000</div>
            </div>
            
            <div class="action-buttons">
                <button class="action-btn">
                    <i class="fas fa-arrow-up"></i>
                    Kirim
                </button>
                <button class="action-btn">
                    <i class="fas fa-arrow-down"></i>
                    Terima
                </button>
                <button class="action-btn">
                    <i class="fas fa-exchange-alt"></i>
                    Tukar
                </button>
                <button class="action-btn">
                    <i class="fas fa-qrcode"></i>
                    Bayar
                </button>
            </div>
        </div>
        
        <!-- Riwayat Transaksi -->
        <div class="transaction-history">
            <h3 class="section-title">
                Riwayat Transaksi
                <a href="#" class="see-all">Lihat Semua</a>
            </h3>
            
            <div class="transaction-item">
                <div class="transaction-icon">
                    <i class="fas fa-shopping-bag"></i>
                </div>
                <div class="transaction-details">
                    <div class="transaction-title">Belanja Online</div>
                    <div class="transaction-date">12 Jun 2023 • 14:30</div>
                </div>
                <div class="transaction-amount expense">-Rp 350.000</div>
            </div>
            
            <div class="transaction-item">
                <div class="transaction-icon">
                    <i class="fas fa-money-bill-wave"></i>
                </div>
                <div class="transaction-details">
                    <div class="transaction-title">Transfer Masuk</div>
                    <div class="transaction-date">10 Jun 2023 • 09:15</div>
                </div>
                <div class="transaction-amount income">+Rp 500.000</div>
            </div>
            
            <div class="transaction-item">
                <div class="transaction-icon">
                    <i class="fas fa-utensils"></i>
                </div>
                <div class="transaction-details">
                    <div class="transaction-title">Makan Siang</div>
                    <div class="transaction-date">8 Jun 2023 • 12:45</div>
                </div>
                <div class="transaction-amount expense">-Rp 75.000</div>
            </div>
            
            <div class="transaction-item">
                <div class="transaction-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="transaction-details">
                    <div class="transaction-title">Pulsa</div>
                    <div class="transaction-date">5 Jun 2023 • 16:20</div>
                </div>
                <div class="transaction-amount expense">-Rp 100.000</div>
            </div>
        </div>
    </div>
	</main>
</template>

<style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 0;
            color: #333;
        }
        
        .container {
            max-width: 500px;
            margin: 20px auto;
            padding: 20px;
        }
        
        .wallet-card {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            border-radius: 15px;
            padding: 25px;
            color: white;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }
        
        .wallet-card::after {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 150px;
            height: 150px;
            background-color: rgba(255,255,255,0.1);
            border-radius: 50%;
        }
        
        .wallet-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .wallet-title {
            font-size: 18px;
            font-weight: 500;
        }
        
        .wallet-logo {
            font-weight: bold;
            font-size: 20px;
        }
        
        .balance {
            text-align: center;
            margin-bottom: 25px;
        }
        
        .balance-label {
            font-size: 14px;
            opacity: 0.8;
            margin-bottom: 5px;
        }
        
        .balance-amount {
            font-size: 36px;
            font-weight: bold;
            letter-spacing: 1px;
        }
        
        .action-buttons {
            display: flex;
            justify-content: space-between;
            gap: 15px;
        }
        
        .action-btn {
            flex: 1;
            background-color: rgba(255,255,255,0.2);
            border: none;
            border-radius: 10px;
            padding: 12px;
            color: white;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.3s;
        }
        
        .action-btn:hover {
            background-color: rgba(255,255,255,0.3);
        }
        
        .action-btn i {
            font-size: 20px;
            margin-bottom: 5px;
        }
        
        .transaction-history {
            background-color: white;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .section-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .see-all {
            font-size: 14px;
            color: #6e8efb;
            text-decoration: none;
        }
        
        .transaction-item {
            display: flex;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #eee;
        }
        
        .transaction-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f0f4ff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: #6e8efb;
        }
        
        .transaction-details {
            flex: 1;
        }
        
        .transaction-title {
            font-weight: 500;
            margin-bottom: 3px;
        }
        
        .transaction-date {
            font-size: 12px;
            color: #999;
        }
        
        .transaction-amount {
            font-weight: 500;
        }
        
        .income {
            color: #4CAF50;
        }
        
        .expense {
            color: #F44336;
        }
</style>