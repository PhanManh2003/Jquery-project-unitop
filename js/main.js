
$(document).ready(function () {
    // Xử lí sự kiện click thumb slider
    $('.thumb-item').click(function () {
        // lấy cái src của img trong thumb-item ra
        let new_src_img = $(this).find('img').attr('src');
        // set lại src của img trong khối show-picture
        $('.show-picture img').attr('src', new_src_img);
        // bật class active cho thumb-item đã chọn
        $('.thumb-item').removeClass('active');
        $(this).addClass('active');
    })


    // Xử lí sự kiện click next prev
    // dù là prev hoặc next thì đều có 2 trường hợp xảy ra nên ta nghĩ đến if else !!
    $('.prev-btn').click(function () {
        let current_thumb = $(".thumb-item.active");
        if ($(current_thumb).is(".thumb-item:first")) {
            $('.thumb-item:last').click();
        } else {
            current_thumb.prev().click();
        }
    })

    $('.next-btn').click(function () {
        let current_thumb = $(".thumb-item.active");
        if ($(current_thumb).is(".thumb-item:last")) {
            $('.thumb-item:first').click();
        } else {
            current_thumb.next().click();
        }
    })
    // Active phần tử ảnh thumb đầu tiên
    $(".thumb-item:first").click(); // event click() không có định nghĩa function bên trong nên nó tự động được gọi khi page reload 
    
   
})