<?php require_once('panel/database.php');

try {
    $litr_sql = "SELECT * FROM products WHERE package LIKE 'litr'";
    $litr_products = $pdo->query($litr_sql);
    $litr_products->setFetchMode(PDO::FETCH_ASSOC);


  $glass_sql = "SELECT * FROM products WHERE package LIKE 'glass'";
  $glass_products = $pdo->query($glass_sql);
  $glass_products->setFetchMode(PDO::FETCH_ASSOC);

  $cc_sql = "SELECT * FROM products WHERE package LIKE '200 cc'";
  $cc_products = $pdo->query($cc_sql);
  $cc_products->setFetchMode(PDO::FETCH_ASSOC);

}
catch (PDOException $e) { die("Could not connect to the database:" . $e->getMessage()); 
} 
?>

<html lang="fa">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport"
        content="width=device-width,height=window.innerHeight, initial-scale=1.0 , maximum-scale=1 , minimum-scale=1, user-scalable=0" />
    <meta name="token" content="harmony" />
    <title>سن ایچ</title>
    <meta name="description" content="Sunich | Genetral" />
    <link rel=" icon" type="icon" href="assets/images/favicon.ico" />

    <!-- =============== css files =============== -->
    <link rel="stylesheet" href="assets/css/aos.css" />
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/swiper.min.css" />
    <link rel="stylesheet" href="assets/css/toastr.min.css" />
    <link rel="stylesheet" href="assets/css/main.css" />

    <!-- Google Tag Manager -->
    <!-- <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-KTMZZKT");
    </script> -->
    <!-- End Google Tag Manager -->
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <!-- <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KTMZZKT"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript> -->
    <!-- End Google Tag Manager (noscript) -->

    <!-- Design by Harmony Agency -->


    <!-- =============== main =============== -->
    <main>
        <!-- Design by Harmony Agency -->

        <!-- =============== introduction =============== -->
        <section id="introduction">
            <div class="container">
                <div class="content row">
                    <div class="col-lg-6 col-12 right">
                        <a href="https://www.sunich.org/" target="_blank">
                            <img src="assets/images/sunich_logo.png" alt="sunich_logo" class="sunich_logo"
                                loading="lazy" data-aos="zoom-in" data-aos-duration="1000" />
                        </a>
                        <img src="assets/images/text_img.png" class="text_img" alt="text_img" data-aos="zoom-in"
                            data-aos-duration="1000">
                    </div>
                    <div class="col-lg-6 col-12 left"></div>
                </div>
            </div>
        </section>

        <!-- =============== description =============== -->
        <section id="description">
            <div class="container">
                <div class="content">
                    <p class="section_subtitle" data-aos="zoom-in" data-aos-duration="1000">
                        لذت تجربه دنیای جدید با
                    </p>
                    <h2 class="section_title" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                        آبمیوه‌های سن‌ایچ
                    </h2>
                    <p class="caption" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                        ما در سن‌ایچ تنوع بالایی از طعم‌ها و میــــوه‌ها را کنار هم جمع
                        کردیم. هر زمان که حوس هر میوه را بکنید؛ از میوه‌های تابستانی مثل
                        توت فرنگی و کیوی تا میوه‌های زمستانی مثل پرتقال را می‌توانید در
                        بین نوشیدنی‌های متنوع سن ایچ پیدا کنید.
                    </p>
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <div class="content_box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                <img src="assets/images/description_img.png" alt="description_img"
                                    class="description_img" loading="lazy" />
                                <p class="title">30+</p>
                                <p class="subtitle">طعم مختلف</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="content_box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                                <img src="assets/images/description_img.png" alt="description_img"
                                    class="description_img" loading="lazy" />
                                <p class="title">30+</p>
                                <p class="subtitle">طعم مختلف</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="content_box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                                <img src="assets/images/description_img.png" alt="description_img"
                                    class="description_img" loading="lazy" />
                                <p class="title">30+</p>
                                <p class="subtitle">طعم مختلف</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design by Harmony Agency -->

        <!-- =============== product_category =============== -->
        <section id="product_category">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <a href=".glass_box">
                                <div class="content_box category_1" data-aos="zoom-in" data-aos-duration="1000"
                                    data-aos-delay="100">
                                    <p class="title">محصولات شیشه‌ای</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-12">
                            <a href=".cc_box">
                                <div class="content_box category_2" data-aos="zoom-in" data-aos-duration="1000"
                                    data-aos-delay="100">
                                    <p class="title">محصولات ۲۰۰cc</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-12">
                            <a href=".litr_box">
                                <div class="content_box category_3" data-aos="zoom-in" data-aos-duration="1000"
                                    data-aos-delay="100">
                                    <p class="title">محصولات ۱ لیتری</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- =============== products =============== -->
        <section id="products">
            <div class="container">
                <div class="content">
                    <p class="section_subtitle" data-aos="zoom-in" data-aos-duration="1000">
                        لذت تجربه دنیای جدید با
                    </p>
                    <h2 class="section_title" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                        محصولات سن‌ایچ
                    </h2>
                </div>
            </div>
            <!-- litr_swiper -->
            <div class="product_box litr_box">
                <div class="container">
                    <div class="swiper litr_swiper">
                        <div class="swiper-wrapper">
                            <?php while($product = $litr_products->fetch()) : ?>
                            <div class="swiper-slide" data-bs-toggle="modal" data-bs-target="#informationModal">
                                <div class="slide_content" data-value="<?= $product['product_id']; ?>">
                                    <img src="assets/images/products/<?= $product['product_id']; ?>.png" alt="product"
                                        class="product_img" />
                                    <div>
                                        <p class="product_name"><?= $product['name']; ?></p>
                                        <p class="product_category">1 لیتری</p>
                                    </div>
                                </div>
                            </div>
                            <?php endwhile; ?>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

            <!-- glass_swiper -->
            <div class="product_box glass_box">
                <div class="container">
                    <div class="swiper glass_swiper">
                        <div class="swiper-wrapper">
                            <?php while($product = $glass_products->fetch()) : ?>
                            <div class="swiper-slide" data-bs-toggle="modal" data-bs-target="#informationModal">
                                <div class="slide_content" data-value="<?= $product['product_id']; ?>">
                                    <img src="assets/images/products/<?= $product['product_id']; ?>.png" alt="product"
                                        class="product_img" />
                                    <div>
                                        <p class="product_name"><?= $product['name']; ?></p>
                                        <p class="product_category">شیشه ای</p>
                                    </div>
                                </div>
                            </div>
                            <?php endwhile; ?>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

            <!-- cc_swiper -->
            <div class="product_box cc_box">
                <div class="container">
                    <div class="swiper cc_swiper">
                        <div class="swiper-wrapper">
                            <?php while($product = $cc_products->fetch()) : ?>
                            <div class="swiper-slide" data-bs-toggle="modal" data-bs-target="#informationModal">
                                <div class="slide_content" data-value="<?= $product['product_id']; ?>">
                                    <img src="assets/images/products/<?= $product['product_id']; ?>.png" alt="product"
                                        class="product_img" />
                                    <div>
                                        <p class="product_name"><?= $product['name']; ?></p>
                                        <p class="product_category"><?= $product['package']; ?></p>
                                    </div>
                                </div>
                            </div>
                            <?php endwhile; ?>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

        </section>

        <!-- =============== property =============== -->
        <section id="property">
            <div class="container">
                <div class="content">
                    <h2 class="section_title" data-aos="zoom-in" data-aos-duration="1000">
                        چرا سن ایچ و دیگر هیچ؟
                    </h2>
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <div class="content_box property_1" data-aos="zoom-in" data-aos-duration="1000"
                                data-aos-delay="200">
                                <img src="assets/images/property_1.png" alt="property_img" class="property_img"
                                    loading="lazy" />
                                <p class="caption">
                                    تنوع بالا در طعم و ترکیبات منحصربه‌فرد از میوه‌ها که
                                    گزینه‌های بسیاری را برای انتخاب در اختیار مشتریان می‌گذارد.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="content_box property_2" data-aos="zoom-in" data-aos-duration="1000"
                                data-aos-delay="400">
                                <img src="assets/images/property_2.png" alt="property_img" class="property_img"
                                    loading="lazy" />
                                <p class="caption">
                                    تمام محصولات ما از مواد اولیه درجه یک و با همکاری با
                                    کشاورزان منتخب سن‌ ایچ تهیه و تولید شده است.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="content_box property_3" data-aos="zoom-in" data-aos-duration="1000"
                                data-aos-delay="600">
                                <img src="assets/images/property_3.png" alt="property_img" class="property_img"
                                    loading="lazy" />
                                <p class="caption">
                                    همراه شما در هر جا. در مسافرت‌ها، مهمانی‌ها، دورهمی‌ها و ...
                                    می‌توانید روی کیفیت محصولات سن ایچ حساب کنید.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design by Harmony Agency -->

        <!-- =============== testimonial =============== -->
        <section id="testimonial">
            <div class="container">
                <div class="content">
                    <p class="section_title" data-aos="zoom-in" data-aos-duration="1000">
                        نظر مصرف کنندگان
                    </p>
                    <div class="swiper testimonial_Swiper">
                        <div class="swiper-wrapper">
                            <!-- slide1 -->
                            <div class="swiper-slide">
                                <div class="slide_content">
                                    <img src="assets/images/customer_img.jpg" alt="customer_img" class="customer_img" />
                                    <p class="title customer_name">نام و نام خانوداگی</p>
                                    <p class="title customer_company">شرکت آبمیوه سازان</p>
                                    <p class="title customer_comments">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                                        با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                        گرافیک است.
                                    </p>
                                </div>
                            </div>
                            <!-- slide2 -->
                            <div class="swiper-slide">
                                <div class="slide_content">
                                    <img src="assets/images/customer_img.jpg" alt="customer_img" class="customer_img" />
                                    <p class="title customer_name">نام و نام خانوداگی</p>
                                    <p class="title customer_company">شرکت آبمیوه سازان</p>
                                    <p class="title customer_comments">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                                        با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                        گرافیک است.
                                    </p>
                                </div>
                            </div>
                            <!-- slide3 -->
                            <div class="swiper-slide">
                                <div class="slide_content">
                                    <img src="assets/images/customer_img.jpg" alt="customer_img" class="customer_img" />
                                    <p class="title customer_name">نام و نام خانوداگی</p>
                                    <p class="title customer_company">شرکت آبمیوه سازان</p>
                                    <p class="title customer_comments">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                                        با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                        گرافیک است.
                                    </p>
                                </div>
                            </div>
                            <!-- slide4 -->
                            <div class="swiper-slide">
                                <div class="slide_content">
                                    <img src="assets/images/customer_img.jpg" alt="customer_img" class="customer_img" />
                                    <p class="title customer_name">نام و نام خانوداگی</p>
                                    <p class="title customer_company">شرکت آبمیوه سازان</p>
                                    <p class="title customer_comments">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                                        با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                        گرافیک است.
                                    </p>
                                </div>
                            </div>
                            <!-- slide5 -->
                            <div class="swiper-slide">
                                <div class="slide_content">
                                    <img src="assets/images/customer_img.jpg" alt="customer_img" class="customer_img" />
                                    <p class="title customer_name">نام و نام خانوداگی</p>
                                    <p class="title customer_company">شرکت آبمیوه سازان</p>
                                    <p class="title customer_comments">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                                        و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                                        با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                        گرافیک است.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- =============== membership =============== -->
        <section id="membership">
            <div class="container">
                <div class="content row">
                    <div class="col-lg-6 col-12 right desktop"></div>
                    <div class="col-lg-6 col-12 left">
                        <!-- step1 -->
                        <div class="form step1">
                            <h2 class="title" data-aos="zoom-in" data-aos-duration="1000">
                                فرم ارتباط با ما
                            </h2>
                            <form id="subscribers">
                                <div class="form-group">
                                    <label class="inp_label" for="fullName">نام و نام خانوادگی</label>
                                    <div class="inp_box">
                                        <img src="assets/images/username_img.png" alt="username_img" class="icon_img"
                                            loading="lazy" />
                                        <input type="text" class="form-control" id="fullName" name="fullName"
                                            autocomplete="off" placeholder="سارا احمدی" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="inp_label" for="phoneNumber">شماره تماس</label>
                                    <div class="inp_box">
                                        <img src="assets/images/phoneNumber_img.png" alt="phoneNumber_img"
                                            class="icon_img" loading="lazy" />
                                        <input type="tel" class="form-control" id="phoneNumber" name="phoneNumber"
                                            autocomplete="off" placeholder="09121112233" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="inp_label" for="email">ایمیل</label>
                                    <div class="inp_box">
                                        <img src="assets/images/email_img.png" alt="email_img" class="icon_img"
                                            loading="lazy" />
                                        <input type="text" class="form-control" id="email" name="email"
                                            autocomplete="off" placeholder="info@email.com" />
                                    </div>
                                </div>
                                <button type="submit" class="btn submit_btn">
                                    ثبت اطلاعات
                                </button>
                            </form>
                        </div>
                        <!-- step2 -->
                        <div class="form step2">
                            <p class="title">اطلاعات شما با موفقیت ثبت شد</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design by Harmony Agency -->
    </main>

    <!-- =============== footer =============== -->
    <footer>
        <div class="container">
            <div class="content">
                <div>
                    <p class="title">سن ایچ و دیگر هیچ</p>
                    <p class="caption">
                        دفتر مرکزی: تهران، خیابان خردمند شمالی، خیابان دوازدهم، پلاک ۱۵
                    </p>
                </div>
                <div class="social">
                    <a href="#" target="_blank">
                        <img src="assets/images/youtube.png" alt="" />
                    </a>
                    <a href="https://www.sunich.org/" target="_blank">
                        <img src="assets/images/web.png" alt="" />
                    </a>
                    <a href="https://instagram.com/sunichlife?igshid=NjIwNzIyMDk2Mg=" target="_blank">
                        <img src="assets/images/instagram.png" alt="instagram" />
                    </a>
                </div>
            </div>
            <div class="copyright">
                <a href="https://harmony.agency/?utm_source=designbyharmony&amp;utm_medium=badge&amp;utm_campaign=sunich-general-landing"
                    target="_blank">
                    <img src="assets/images/harmonyLogoMobile.png" alt="harmonyLogoMobile" class="harmonyLogo mobile" />
                    <span class="hover-company desktop">
                        <img src="assets/images/harmony-name.png" loading="lazy" alt="" />
                    </span>
                    <img class="logo desktop" src="assets/images/harmony.png" loading="lazy" alt="harmonyLogo" />
                    <img src="assets/images/harmony-design.png" alt="" class="hover-company desktop" />
                </a>
            </div>
        </div>
    </footer>

    <!-- =============== Modal =============== -->
    <div class="modal fade" id="informationModal" tabindex="-1" aria-labelledby="informationModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <img src="assets/images/close_btn.png" alt="close_btn" class="close_btn" data-bs-dismiss="modal"
                    aria-label="Close" loading="lazy" />
                <div class="modal-body row">
                    <div class="col-md-6 col-12 content">
                        <div class="product_header">
                            <p class="product_name"></p>
                            <div class="product_info">
                                <p class="product_category"></p>
                            </div>
                        </div>
                        <div class="accordion" id="infoAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq1">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#question1" aria-expanded="false" aria-controls="question1">
                                        توضیحات
                                    </button>
                                </h2>
                                <div id="question1" class="accordion-collapse collapse show" aria-labelledby="faq1"
                                    data-bs-parent="#infoAccordion">
                                    <div class="accordion-body product_description">

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000"
                                data-aos-easing="ease" data-aos-delay="200">
                                <h2 class="accordion-header" id="faq2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#question2" aria-expanded="false" aria-controls="question2">
                                        جدول ارزش غذایی
                                    </button>
                                </h2>
                                <div id="question2" class="accordion-collapse collapse" aria-labelledby="faq2"
                                    data-bs-parent="#infoAccordion">
                                    <div class="accordion-body">
                                        <div class="row_info">
                                            <p>کالری</p>
                                            <p class="calories_value"></p>
                                        </div>
                                        <div class="row_info">
                                            <p>کلسترول</p>
                                            <p class="cholesterol_value"></p>
                                        </div>
                                        <div class="row_info">
                                            <p>سدیم</p>
                                            <p class="sodium_value"></p>
                                        </div>
                                        <div class="row_info">
                                            <p>پتاسیم</p>
                                            <p class="potassium_value"></p>
                                        </div>
                                        <div class="row_info">
                                            <p>کربوهیدرات</p>
                                            <p class="carbohydrate_value"></p>
                                        </div>
                                        <div class="row_info">
                                            <p>پروتئین</p>
                                            <p class="protein_value"></p>
                                        </div>
                                        <div class="row_info">
                                            <p>چربی</p>
                                            <p class="fat_value"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000"
                                data-aos-easing="ease" data-aos-delay="300">
                                <h2 class="accordion-header" id="faq3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#question3" aria-expanded="false" aria-controls="question3">
                                        مشخصات
                                    </button>
                                </h2>
                                <div id="question3" class="accordion-collapse collapse" aria-labelledby="faq3"
                                    data-bs-parent="#infoAccordion">
                                    <div class="accordion-body">
                                        <div class="row_info">
                                            <p>خواص</p>
                                            <p class="product_property"></p>
                                        </div>
                                        <div class="row_info">
                                            <p>دسته بندی</p>
                                            <p class="product_package"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 img_content">
                        <img src="" alt="product_img" class="product_img" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Design by Harmony Agency -->

    <!-- =============== scripts =============== -->
    <script src="assets/js/aos.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.validate.min.js"></script>
    <script src="assets/js/swiper.min.js"></script>
    <script src="assets/js/toastr.min.js"></script>
    <script src="assets/js/form.js?v=0.0"></script>
    <script src="assets/js/harmony.js?v=0.0"></script>
</body>

</html>