<!DOCTYPE html>
<html lang="tr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Her Yaşta</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <script src="https://kit.fontawesome.com/b894d6dbb9.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/responsive.css">

  </head>
  <div class="container-lg header mode-light">
  <div class="top-header d-flex justify-content-between">
    <div>
      <div class="top-navigation">
        <a href="hakkimizda.php">Hakkımızda</a>
        <a href="#">İletişim</a>
      </div>
    </div>
    <div>
      <a target="_blank" href="https://www.agesa.com.tr/">
        <img src="assets/images/agesalogo.svg" alt="agesa-logo">
      </a>
    </div>
  </div>
  <div class="mid-header">
    <nav class="navbar navbar-expand-lg p-0">
      <div class="container-fluid p-0 align-items-center">
        <a class="navbar-brand" href="#">
          <img src="assets/images/heryasta-logo.svg" class="desktop-logo" alt="heryasta-logo">
          <img src="assets/images/mobile_logo.png" class="mobile-logo" alt="heryasta-logo">
        </a>
        <div class="buttons">
          <button class="search d-lg-none d-inline">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav d-none d-lg-flex">
            <a class="nav-item nav-link active" href="archive.php">Yeni Ne Var?</span></a>
            <a class="nav-item nav-link" href="#">Bütünsel Sağlık</a>
            <a class="nav-item nav-link" href="#">Gezi Rehberi</a>
            <a class="nav-item nav-link" href="#">Yaşama Sanatı</a>
            <a class="search-icon" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
          </div>
          <div class="navbar-nav row m-0 d-flex d-lg-none">
            <span>Bütünsel Sağlık</span>
            <div class="row m-0 justify-content-between">
              <div class="col-6">
                <a class="nav-item nav-link" href="#">Yeme & İçme</a>
                <a class="nav-item nav-link" href="#">Spor & Aktivite</a>
                <a class="nav-item nav-link" href="#">Akıl & Ruh Sağlığı</a>
                <a class="nav-item nav-link" href="#">Vitamin & Takviyeler</a>
              </div>
              <div class="col-6">
                <a class="nav-item nav-link" href="#">Kadın & Erkek Sağlığı</a>
                <a class="nav-item nav-link" href="#">Yaşlanmaya Hazırlık</a>
                <a class="nav-item nav-link" href="#">Ekonomik Sağlık</a>
                <a class="nav-item nav-link" href="#">Uyku</a>
              </div>
            </div>
            <span>Yaşama Sanatı</span>
            <div class="row m-0 justify-content-between">
              <div class="col-6">
                <a class="nav-item nav-link" href="#">Araştırmalar</a>
                <a class="nav-item nav-link" href="#">Sanat</a>
                <a class="nav-item nav-link" href="#">Kitap</a>
                <a class="nav-item nav-link" href="#">Hobiler</a>
              </div>
              <div class="col-6">
                <a class="nav-item nav-link" href="#">Moda</a>
                <a class="nav-item nav-link" href="#">İnsanlar & Hikayeler</a>
                <a class="nav-item nav-link" href="#">Sürdürülebilirlik</a>
                <a class="nav-item nav-link" href="#">Gönülülük</a>
              </div>
            </div>
            <div class="row m-0 justify-content-between">
              <div class="col-6">
                <span>Gezi Rehberi</span>
                <a class="nav-item nav-link" href="#">Etkinlikler</a>
                <a class="nav-item nav-link" href="#">Türkiye</a>
                <a class="nav-item nav-link" href="#">Dünya</a>
              </div>
              <div class="col-6">
                <span>Her Yaşta</span>
                <a class="nav-item nav-link" href="#">Hakkımızda</a>
                <a class="nav-item nav-link" href="#">Yazı Gönder</a>
                <a class="nav-item nav-link" href="#">İtetişim</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="d-none justify-content-between breadcrumbs">
    <div>
      <a class="breadcrumb-item active" href="/">ANA SAYFA</a>
      <span class="seperator">/</span>
      <a class="breadcrumb-item" href="#">
        <?= $page_title ?>
      </a>
    </div>
    <div>
      <a class="share ml-auto mr-3" href="#">PAYLAŞ</a>
    </div>

  </div>
</div>