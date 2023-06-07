<!DOCTYPE html>
<html class="wide wow-animation" lang="en">

<head>
    <title>
        E-COMMERCE - @yield('titulo')
    </title>
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <link rel="icon" href="{{ asset('admin/ecommerce/images/favicon.ico') }}" type="image/x-icon">
    <!-- Stylesheets-->
    <link rel="stylesheet" type="text/css"
        href="//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,500,600,700,900%7CRaleway:500">
    <link rel="stylesheet" href="{{ asset('admin/ecommerce/css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/ecommerce/css/fonts.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/ecommerce/css/style.css') }}">
    <!--[if lt IE 10]>
    <div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;"><a href="http://windows.microsoft.com/en-US/internet-explorer/"><img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a></div>
    <script src="js/html5shiv.min.js"></script>
    <![endif]-->
</head>

<body>
    @yield('pagina_actual')
    <div class="preloader">
        <div class="wrapper-triangle">
            <div class="pen">
                <div class="line-triangle">
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                </div>
                <div class="line-triangle">
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                </div>
                <div class="line-triangle">
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                </div>
            </div>
        </div>
    </div>


    <div class="page">
        

        <header class="section page-header">
            <!-- RD Navbar-->
            <div class="rd-navbar-wrap">
                @include('layouts.ecommerce.nav')
            </div>
        </header>

        <!-- Migas -->
        <section class="bg-gray-7">
            <div class="breadcrumbs-custom box-transform-wrap context-dark">
                <div class="container">
                    <h3 class="breadcrumbs-custom-title">@yield('titulo-miga')</h3>
                    <div class="breadcrumbs-custom-decor"></div>
                </div>
                @yield('imagen-miga')
            </div>
            <div class="container">
                <ul class="breadcrumbs-custom-path">
                    <li><a href="{{route('inicio')}}">Inicio</a></li>
                    @yield('ruta-miga')
                </ul>
            </div>
        </section>
        
        @yield('contenido')

        
        <!-- Page Footer-->
        <footer class="section footer-modern context-dark footer-modern-2">
            <div class="footer-modern-line">
                <div class="container">
                    <div class="row row-50">
                        <div class="col-md-6 col-lg-4">
                            <h5 class="footer-modern-title oh-desktop"><span
                                    class="d-inline-block wow slideInLeft">What We Offer</span></h5>
                            <ul class="footer-modern-list d-inline-block d-sm-block wow fadeInUp">
                                <li><a href="#">Pizzas</a></li>
                                <li><a href="#">Burgers</a></li>
                                <li><a href="#">Salads</a></li>
                                <li><a href="#">Drinks</a></li>
                                <li><a href="#">Seafood</a></li>
                                <li><a href="#">Drinks</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <h5 class="footer-modern-title oh-desktop"><span
                                    class="d-inline-block wow slideInLeft">Information</span></h5>
                            <ul class="footer-modern-list d-inline-block d-sm-block wow fadeInUp">
                                <li><a href="about-us.html">About us</a></li>
                                <li><a href="#">Latest News</a></li>
                                <li><a href="#">Our Menu</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="contacts.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-xl-5">
                            <h5 class="footer-modern-title oh-desktop"><span
                                    class="d-inline-block wow slideInLeft">Newsletter</span></h5>
                            <p class="wow fadeInRight">Sign up today for the latest news and updates.</p>
                            <!-- RD Mailform-->
                            <form class="rd-form rd-mailform rd-form-inline rd-form-inline-sm oh-desktop"
                                data-form-output="form-output-global" data-form-type="subscribe" method="post"
                                action="bat/rd-mailform.php">
                                <div class="form-wrap wow slideInUp">
                                    <input class="form-input" id="subscribe-form-2-email" type="email"
                                        name="email" />
                                    <label class="form-label" for="subscribe-form-2-email">Enter your E-mail</label>
                                </div>
                                <div class="form-button form-button-2 wow slideInRight">
                                    <button class="button button-sm button-icon-3 button-primary button-winona"
                                        type="submit"><span class="d-none d-xl-inline-block">Subscribe</span><span
                                            class="icon mdi mdi-telegram d-xl-none"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-modern-line-2">
                <div class="container">
                    <div class="row row-30 align-items-center">
                        <div class="col-sm-6 col-md-7 col-lg-4 col-xl-4">
                            <div class="row row-30 align-items-center text-lg-center">
                                <div class="col-md-7 col-xl-6"><a class="brand" href="index.html"><img
                                            src="{{ asset('admin/ecommerce/images/logo-inverse-198x66.png') }}"
                                            alt="" width="198" height="66" /></a></div>
                                <div class="col-md-5 col-xl-6">
                                    <div class="iso-1"><span><img
                                                src="{{ asset('admin/ecommerce/images/like-icon-58x25.png') }}"
                                                alt="" width="58" height="25" /></span><span
                                            class="iso-1-big">9.4k</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-8 col-xl-8 oh-desktop">
                            <div class="group-xmd group-sm-justify">
                                <div class="footer-modern-contacts wow slideInUp">
                                    <div class="unit unit-spacing-sm align-items-center">
                                        <div class="unit-left"><span class="icon icon-24 mdi mdi-phone"></span></div>
                                        <div class="unit-body"><a class="phone" href="tel:#">+1 718-999-3939</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer-modern-contacts wow slideInDown">
                                    <div class="unit unit-spacing-sm align-items-center">
                                        <div class="unit-left"><span class="icon mdi mdi-email"></span></div>
                                        <div class="unit-body"><a class="mail"
                                                href="mailto:#">info@demolink.org</a></div>
                                    </div>
                                </div>
                                <div class="wow slideInRight">
                                    <ul
                                        class="list-inline footer-social-list footer-social-list-2 footer-social-list-3">
                                        <li><a class="icon mdi mdi-facebook" href="#"></a></li>
                                        <li><a class="icon mdi mdi-twitter" href="#"></a></li>
                                        <li><a class="icon mdi mdi-instagram" href="#"></a></li>
                                        <li><a class="icon mdi mdi-google-plus" href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-modern-line-3">
                <div class="container">
                    <div class="row row-10 justify-content-between">
                        <div class="col-md-6"><span>514 S. Magnolia St. Orlando, FL 32806</span></div>
                        <div class="col-md-auto">
                            <!-- Rights-->
                            <p class="rights"><span>&copy;&nbsp;</span><span
                                    class="copyright-year"></span><span></span><span>.&nbsp;</span><span>All Rights
                                    Reserved.</span><span> Design&nbsp;by&nbsp;<a
                                        href="https://www.templatemonster.com">TemplateMonster</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <!-- Global Mailform Output-->
    <div class="snackbars" id="form-output-global"></div>
    <!-- Javascript-->
    <script src="{{ asset('admin/ecommerce/js/core.min.js') }}"></script>
    <script src="{{ asset('admin/ecommerce/js/script.js') }}"></script>
    <!-- coded by Himic-->
</body>

</html>
