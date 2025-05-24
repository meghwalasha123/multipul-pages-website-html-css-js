$(Document).ready(function () {

    // banner owl carousel
    $('.banner_carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay:false,
        autoplayTimeout:5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // services owl carousel
    $('.service_carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots:false,
        navText: ["⟵", "⟶"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // disigner
    $('.shareLinks1').hide();
    $('.shareLinks2').hide();
    $('.shareLinks3').hide();

    $('#share_nodes1').on({
        "focus": function () {1
            $('.shareLinks1').show("slow");
        },
        "blur": function () {
            $('.shareLinks1').hide("slow");
        }
    });
    $('#share_nodes2').on({
        "focus": function () {
            $('.shareLinks2').show("slow");
        },
        "blur": function () {
            $('.shareLinks2').hide("slow");
        }
    });
    $('#share_nodes3').on({
        "focus": function () {
            $('.shareLinks3').show("slow");
        },
        "blur": function () {
            $('.shareLinks3').hide("slow");
        }
    });


    // testimonial owl carousel
    $('.testmonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots:false,
        navText: ["🡸", "🡺"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // testimonial 
    $('#testimonial #testimonial-img .test_img_1').click(function () {
        $('#testimonial p').text("John Willims Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, commodi rem distinctio veritatis labore iste consequatur ipsum alias nesciunt fugiat provident itaque cupiditate eius, obcaecati, molestias laborum vero voluptatibus! Quod.");
        $('#testimonial h5').html('John Willims <br>Managing Director');
        $('#testimonial #user-container .happy-user').html('<img src="assets/images/test_img_1.png">');
    });
    $('#testimonial #testimonial-img .test_img_2').click(function () {
        $('#testimonial p').text("Nikhil Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, commodi rem distinctio veritatis labore iste consequatur ipsum alias nesciunt fugiat provident itaque cupiditate eius, obcaecati, molestias laborum vero voluptatibus! Quod.");
        $('#testimonial h5').html('Nikhil <br>Managing Director');
        $('#testimonial #user-container .happy-user').html('<img src="assets/images/test_img_2.png">');
    });
    $('#testimonial #testimonial-img .test_img_3').click(function () {
        $('#testimonial p').text("Vinit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, commodi rem distinctio veritatis labore iste consequatur ipsum alias nesciunt fugiat provident itaque cupiditate eius, obcaecati, molestias laborum vero voluptatibus! Quod.");
        $('#testimonial h5').html('Vinit <br>Managing Director');
        $('#testimonial #user-container .happy-user').html('<img src="assets/images/test_img_3.png">');
    });
    $('#testimonial #testimonial-img .test_img_4').click(function () {
        $('#testimonial p').text("Anisha Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, commodi rem distinctio veritatis labore iste consequatur ipsum alias nesciunt fugiat provident itaque cupiditate eius, obcaecati, molestias laborum vero voluptatibus! Quod.");
        $('#testimonial h5').html('Anisha <br>Managing Director');
        $('#testimonial #user-container .happy-user').html('<img src="assets/images/test_img_4.png">');
    });
    $('#testimonial #testimonial-img .test_img_5').click(function () {
        $('#testimonial p').text("Alisha Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, commodi rem distinctio veritatis labore iste consequatur ipsum alias nesciunt fugiat provident itaque cupiditate eius, obcaecati, molestias laborum vero voluptatibus! Quod.");
        $('#testimonial h5').html('Alisha<br>Managing Director');
        $('#testimonial #user-container .happy-user').html('<img src="assets/images/test_img_5.png">');
    });
    $('#testimonial #testimonial-img .test_img_6').click(function () {
        $('#testimonial p').text("Diya Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, commodi rem distinctio veritatis labore iste consequatur ipsum alias nesciunt fugiat provident itaque cupiditate eius, obcaecati, molestias laborum vero voluptatibus! Quod.");
        $('#testimonial h5').html('Diya <br>Managing Director');
        $('#testimonial #user-container .happy-user').html('<img src="assets/images/test_img_6.png">');
    });

    // plan buttons
    $('#plan .btn-group .plan_btn_mon').css('background-color', 'black');
    $('#plan .btn-group .plan_btn_annu').css('background-color', '');
    $('#plan-annual').hide();
    $('#plan-monthly').show();

    $('#plan .btn-group .plan_btn_mon').click(function () {
        $('#plan .btn-group .plan_btn_mon').css('background-color', 'black');
        $('#plan .btn-group .plan_btn_annu').css('background-color', '');
        $('#plan-annual').hide();
        $('#plan-monthly').show();
    });
    $('#plan .btn-group .plan_btn_annu').click(function () {
        $('#plan .btn-group .plan_btn_annu').css('background-color', 'black');
        $('#plan .btn-group .plan_btn_mon').css('background-color', '');
        $('#plan-monthly').hide();
        $('#plan-annual').show();
    }); 1
})


