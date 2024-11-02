//var product = [{
//    id: 1,
//    img: 'https://upload.wikimedia.org/wikipedia/th/thumb/c/c8/Jujutsu_Kaisen%2C_volume_1_thai_version.jpg/220px-Jujutsu_Kaisen%2C_volume_1_thai_version.jpg',
//    name: 'มหาเวทย์ผนึกมาร เล่มที่ 1',
//    price: 360,
//    descriptinn: ' Gojo Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur eligendi incidunt aut porro vel.',
//    type: 'Jujutsu-Kaisen'
//},{
//    id: 2,
//    img: 'https://cdn-local.mebmarket.com/meb/server1/114709/Thumbnail/book_detail_large.gif?5',
//    name: 'มหาเวทย์ผนึกมาร เล่มที่ 2',
//    price: 360,
//    descriptinn: ' Gojoeiei Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur eligendi incidunt aut porro vel.',
//    type: 'Jujutsu-Kaisen' 
//},{
//    id: 3,
//    img: 'data:image/jpeg;base64,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',
//    name: 'ความรู้ทั่วไป',
//    price: 500,
//    descriptinn: ' book Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur eligendi incidunt aut porro vel.',
//    type: 'หนังสือความรู้'
//},{
//    id: 3,
//    img: 'data:image/jpeg;base64,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',
//    name: 'ความรู้ทั่วไป 2',
//    price: 500,
//    descriptinn: ' book Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur eligendi incidunt aut porro vel.',
//    type: 'หนังสือความรู้'
//}];

var product;
//[{},{},{}] // length = 3

$(document).ready(() => {

    $.ajax({
        method: 'get',
        url:'./api/getallproduct.php',
        success: function(response) {
            console.log(response)
            if(response.RespCode == 200) {

                product = response.Result;
                
                var html = '';
                for (let i = 0; i < product.length; i++) {
                html += `<div onclick="openProductDetail(${i})"class="product-items ${product[i].type}">
                <img class="product-img" src="./imgs/${product[i].img}" alt="">
                <p stlye="font-size: 1.2vw;">${product[i].name}</p>
                <p stlye="font-size: 1vw;">${numberWithCommas(product[i].price)} THB</p>
            </div>` ;
    }
    $("#productlist").html(html);
            }
        }, error: function(err) {
            console.log(err)
        }
    })
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem) {
    ///console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if( product[i].name.includes(value)) {
            html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                <img class="product-img" src="./imgs/${product[i].img}" alt="">
                <p stlye="font-size: 1.2vw;">${product[i].name}</p>
                <p stlye="font-size: 1vw;">${numberWithCommas(product[i].price)} THB</p>
            </div>` ;
        }
    }
    if(html == ''){
    $("#productlist").html(`<p>ไม่เจอสินค้า</p>`);
    } else{
    $("#productlist").html(html);
    }

}

function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display','none')
    if(param == 'all') {
        $(".product-items").css('display','block')
    } 
    else{
        $("."+param).css('display','block')
    }
}
var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display','flex')
    $("#mdd-img").attr('src','./imgs/' + product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text(numberWithCommas(product[index].price) + 'THB')
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if(productindex == cart[i].index){
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
       var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        //console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    swal.fire({
        icon:'success',
        title: 'เพิ่ม' + product[productindex].name + 'เรียบร้อย'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function OpenCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html+= `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="./imgs/${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${numberWithCommas(cart[i].price * cart[i].count )} THB</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-',${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+',${i})" class="btnc">+</p>
                        </div>
                    </div>`;        
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>ยังไม่มีรายการสินค้า</p>`)
    }
}
   
function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                swal.fire({
                    icon: 'warning',
                    title: 'คุณแน่ใจที่จะลบ',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                    if(res.isConfirmed) {
                      cart.splice(index, 1)
                      console.log(cart)  
                      rendercart();
                      $("#cartcount").css('display','flex').text(cart.length)

                      if(cart.length <= 0) {
                        $("#cartcount").css('display','none')
                      }
                    }
                    else {
                     cart[index].count++;
                     $("#countitems"+index).text(cart[index].count)
                    }
                })                
            }
        }
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
    }
}

function buynow() {
    $.ajax ({
       method: 'POST',
       url: './api/buynow.php',
       data: {
            product: cart
       }, success: function(response){
            console.log(response)
            if(response.RespCode == 200) {
                swal.fire({
                    icon: 'success',
                    title: 'ขอบคุณ',
                    html: `<p> ราคาสินค้า : ${response.Amount.Amount}</p>
                           <p> รวมค่าจัดส่ง : ${response.Amount.Shipping}</p>
                           <p> ภาษี 7% : ${response.Amount.Vat}</p>
                           <p> รวมเป็น : ${response.Amount.Netamount} THB</p>
                           `
                }).then((res) => {
                    if(res.isConfirmed) {
                        cart = [];
                        closeModal();
                        $("#cartcount").css('display','none')
                    }
                })
            }
            else {
                swal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาดผิดพลาด'
                })
            }
       }, error: function(err){
            console.log(err)
       }
    })
}