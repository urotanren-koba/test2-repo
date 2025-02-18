// ページ読み込み完了時に実行
document.addEventListener('DOMContentLoaded', function() {
    console.log('ページが読み込まれました！');
    
    // 色変更ボタンの機能追加
    const changeColorButton = document.getElementById('changeColor');
    const heroSection = document.querySelector('.hero');
    const features = document.querySelectorAll('.feature');
    
    // 色のリスト
    const colors = [
        '#3498db', // 青
        '#e74c3c', // 赤
        '#2ecc71', // 緑
        '#f39c12', // オレンジ
        '#9b59b6'  // 紫
    ];
    
    let currentColorIndex = 0;
    
    // ボタンクリックイベント
    changeColorButton.addEventListener('click', function() {
        // 次の色のインデックスを計算
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        const newColor = colors[currentColorIndex];
        
        // ヒーローセクションの背景色を変更
        heroSection.style.backgroundColor = newColor;
        heroSection.style.color = '#ffffff';
        
        // 各機能ブロックの境界線色も変更
        features.forEach(feature => {
            feature.style.borderLeft = `4px solid ${newColor}`;
        });
        
        console.log(`色を変更しました: ${newColor}`);
    });
    
    // 時間表示の機能
    const updateClock = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP');
        
        // フッターに時間表示エレメントがなければ作成
        let clockElement = document.getElementById('clock');
        if (!clockElement) {
            clockElement = document.createElement('div');
            clockElement.id = 'clock';
            clockElement.style.marginTop = '10px';
            document.querySelector('footer').appendChild(clockElement);
        }
        
        clockElement.textContent = `現在時刻: ${timeString}`;
    };
    
    // 1秒ごとに時間を更新
    setInterval(updateClock, 1000);
    updateClock(); // 初期表示
    
    // 簡単なアニメーション効果
    const animateFeatures = () => {
        features.forEach((feature, index) => {
            setTimeout(() => {
                feature.style.opacity = '0';
                feature.style.transform = 'translateY(20px)';
                
                // アニメーション
                feature.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
                
                setTimeout(() => {
                    feature.style.opacity = '1';
                    feature.style.transform = 'translateY(0)';
                }, 100);
            }, index * 200);
        });
    };
    
    // 5秒ごとにアニメーション実行
    animateFeatures();
    setInterval(animateFeatures, 10000);
});