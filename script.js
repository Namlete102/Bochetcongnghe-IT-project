// index.html

window.addEventListener('DOMContentLoaded', () => {
    // Thêm class fade-in vào body sau khi nội dung đã tải
    document.body.classList.add('fade-in');
});

// (Tùy chọn) Hiệu ứng khi nhấn vào link để chuyển trang mượt hơn
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetUrl = link.getAttribute('href');
        
        // Chỉ tạo hiệu ứng nếu link dẫn đến trang nội bộ và không phải mở tab mới
        if (targetUrl.includes('.html') && link.getAttribute('target') !== '_blank') {
            e.preventDefault();
            document.body.style.opacity = '0';
            document.body.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Chờ 0.5s cho hiệu ứng biến mất rồi mới chuyển trang
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){
        var imgs = document.querySelectorAll('img');
        Array.prototype.forEach.call(imgs, function(el, i) {
            if (el.tabIndex <= 0) el.tabIndex = 10000;
        });
    });

// Zoom ảnh khi hover


document.addEventListener('DOMContentLoaded', function(){
    var imgs = document.querySelectorAll('img');
    Array.prototype.forEach.call(imgs, function(el, i) {
        if (el.tabIndex <= 0) el.tabIndex = 10000;
    });
});
