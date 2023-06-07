<nav class="rd-navbar rd-navbar-modern" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed"
    data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static"
    data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static"
    data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="56px"
    data-xl-stick-up-offset="56px" data-xxl-stick-up-offset="56px" data-lg-stick-up="true" data-xl-stick-up="true"
    data-xxl-stick-up="true">
    <div class="rd-navbar-inner-outer">
        <div class="rd-navbar-inner">
            <!-- RD Navbar Panel-->
            <div class="rd-navbar-panel">
                <!-- RD Navbar Toggle-->
                <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                <!-- RD Navbar Brand-->
                <div class="rd-navbar-brand"><a class="brand" href="index.html"><img class="brand-logo-dark"
                            src="{{ asset('admin/eccomerce/images/logo-198x66.png') }}" alt="" width="198"
                            height="66" /></a></div>
            </div>
            <div class="rd-navbar-right rd-navbar-nav-wrap">

                <div class="rd-navbar-main">
                    <!-- RD Navbar Nav-->
                    <ul class="rd-navbar-nav">
                        <li class="rd-nav-item {{$seleccionado == 'inicio' ? 'active' : ''}}"><a class="rd-nav-link" href="{{route('inicio')}}">Inicio</a>
                        </li>
                        <li class="rd-nav-item {{$seleccionado == 'acerca' ? 'active' : ''}}"><a class="rd-nav-link" href="{{route('acerca.nosotros')}}">Acerca de Nosotros</a>
                        </li>
                        <li class="rd-nav-item {{$seleccionado == 'contacto' ? 'active' : ''}}"><a class="rd-nav-link" href="{{route('contactanos')}}">Contactanos</a>
                        </li>
                    </ul>
                </div>
            </div>     
        </div>
    </div>
</nav>
