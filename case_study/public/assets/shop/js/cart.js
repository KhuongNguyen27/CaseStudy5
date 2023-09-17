$(document).ready(function() {
    $('.add-to-cart-btn').on('click', function(e) {
        e.preventDefault();
        var url = $(this).data('url');
        addCart(url);
    });
});

function addCart(url) {
    $.ajax({
        url: url,
        datatype: "html",
        method: 'GET', // Sử dụng phương thức POST
    })
        .done(function (response) {
            //tự động thay đổi html mà không cần load của class cart-quantity
            $('.cart-quantity').text(response.cartQuantity);
            // Sử dụng giao diện người dùng hoặc thông báo tương tác để hiển thị thông báo thành công
            alert('Add product to cart success');
        })
        .error(function(xhr){
            // Sử dụng giao diện người dùng hoặc thông báo tương tác để hiển thị thông báo lỗi
            alert('Please try again');
        })
}