// Đợi cho toàn bộ nội dung HTML được tải xong
document.addEventListener('DOMContentLoaded', () => {
    // Lấy tham chiếu đến nút và phần nội dung cần hiển thị qua ID
    const loadMoreButton = document.getElementById('loadMoreBtn');
    const moreAboutMeSection = document.getElementById('moreAboutMe');
    
    // Kiểm tra để đảm bảo các phần tử tồn tại trước khi thêm sự kiện
    if (loadMoreButton && moreAboutMeSection) {
        
        // Lắng nghe sự kiện click trên nút "LOAD MORE"
        loadMoreButton.addEventListener('click', () => {
            
            // 1. Hiển thị phần "More About Me" bằng cách xóa class 'hidden'
            // Việc này sẽ khiến CSS: display: none bị gỡ bỏ.
            moreAboutMeSection.classList.remove('hidden');
            
            // 2. Ẩn nút "Load More" sau khi nội dung đã được hiển thị
            loadMoreButton.style.display = 'none'; 
        });
    }
});