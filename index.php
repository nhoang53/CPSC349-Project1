<?php
  session_start();
 ?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>MEET YOUR MAKER</title>

    <div class="header-login">
            <?php
              if (isset($_SESSION['userId'])) {
                echo '<form action="includes/logout-inc.php" method="post">
                  <button type="submit" name="logout-submit">Logout</button>
                </form>';
              }
              else {
                echo '<form action="includes/login-inc.php" method="post">
                <button type="submit" name="login-submit">Login</button>';
              }
              ?>
    </div>


  <!-- Bootstrap Core CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link rel="stylesheet" href="bootstrap.css">

  <!-- Theme CSS -->
  <link href="stylesheets/style.css" rel="stylesheet">

  <!-- Custom Fonts -->

  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="stylesheets/login.css">
  <link rel="icon" type="FavIcon" sizes="16x16" href="images/favicon.png">

  <!-- Link to other html pages -->
  <link rel="stylesheet" href="email_signup.php">
  <link rel="stylesheet" href="name_signup.php">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">

  <!-- Navigation -->
  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
        </button>
        <a style="color:yellow" ; class="navbar-brand" href="index.php">MEET YOUR MAKER</a>
      </div>


      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <main style="text-align:right;">
            <?php
              if (isset($_SESSION['userId'])) {
                echo '<p class="login-status" style="color:red"> You are logged in !</p>';
              }
              else {
                echo '<p class="login-status" style="color:red"> You are logged out !</p>';
              }
             ?>
          </main>
        <ul class="nav navbar-nav navbar-right">
          <li class="hidden">
            <a href="#page-top"></a>
          </li>
          <li class="page-scroll">
            <a href="#portfolio">MENU</a>
          </li>
          <li class="page-scroll">
            <a href="about.php">CONTACT</a>
          </li>
          <li class="page-scroll">
            <a href="login.php">LOGIN</a>
          </li>
          <li class="header-login">
            <?php
              if (isset($_SESSION['userId'])) {
                echo '<form action="includes/logout-inc.php" method="post">
                      <button type="submit" name="logout-submit">Logout</button>
                      </form>';
                    }
             else {
               echo '<form action="includes/login-inc.php" method="post">
                     </form>';
                  }
             ?>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>


  <!-- Header -->
  <header>
    <div class="container">
      <div class="row">
        <div class="signup-buttons"><button type="submit" onclick="window.location.href = 'signup.php';" class="signup email content"><span>CREATE YOUR FREE PAGE</span></button></div>

        <div class="col-lg-12">
          <img class="img-responsive" src="images/upload_image.jpg" alt="">
          <div class="intro-text">
            <span class="name">Firstname Lastname</span>
            <hr class="star-light">
            <b> <span class="skills">LET'S MAKE THIS A BATTLE WORTHY OF YOUR NAME !!!</span> </b>
          </div>
        </div>
      </div>
    </div>
  </header>


  <!-- Portfolio Grid Section -->
  <section id="portfolio" style="color:white" ;>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 style="color:red" ;>FEATURES</h2>
          <hr class="star-primary">
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 portfolio-item">
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="caption">
              <div class="caption-content">
                <i class="fa fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img src="images/create_account.png" class="img-responsive" alt="">
          </a>
        </div>
        <div class="col-sm-4 portfolio-item">
          <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
            <div class="caption">
              <div class="caption-content">
                <i class="fa fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img src="images/profile_picture.png" class="img-responsive" alt="">
          </a>
        </div>
        <div class="col-sm-4 portfolio-item">
          <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">
            <div class="caption">
              <div class="caption-content">
                <i class="fa fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img src="images/share_icon.png" class="img-responsive" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>


  <!-- About Section -->
  <section class="success" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 style="color:green" ;>WEB PURPOSE</h2>
          <hr class="star-light">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-lg-offset-2">
          <p>This is the product that we would like you to try on because it is more convinient for those who seek to create their own profiles.
            You are more than welcome to stay members and explore our best FEATURES coming in the future.
          </p>
        </div>
        <div class="col-lg-4">
          <p>Moreover, users can share to other's social media pages just by a single click. Go ahead and play out with these useful tools.
            We are here to listen to your feedback. Also, your donation can help us beyond maintaining this website.
          </p>
        </div>
        <div class="col-lg-8 col-lg-offset-2 text-center">
          <a style="color:red" ; href="donate.php" class="btn btn-lg btn-outline">
            <i class="fa fa-download"></i> DONATE US
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="text-center">
    <div class="footer-above">
      <div class="container">
        <div class="row">
          <div class="footer-col col-md-4">
            <h3>FORUM QUESTION</h3>
            <p>Please feel free to contact us via emails if you have any questions or comments.
              <br>
              We will reply as soon as possible to each of your trouble cases.</p>
          </div>
          <div class="footer-col col-md-4">
            <h3>OUR NETWORK</h3>
            <p> DENNIS KIEU <br>
              JOSEPH HOANG <br>
              TRONG TO <br>
              KEDYN MACEDONIO <br>
            </p>
          </div>
          <div class="footer-col col-md-4">
            <h3>SUPPORT US?</h3>
            <p>This website is the free tool to create your own page profile, but you can donate us to improve our services in the future.</p>
          </div>
        </div>
      </div>
    </div>
    <div style="color:white" ; class="footer-below">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            Copyright &copy; The Burden Team
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
  <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
    <a class="btn btn-primary" href="#page-top">
      <i class="fa fa-chevron-up"></i>
    </a>
  </div>

  <!-- Portfolio Modals -->
  <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>EDIT YOUR BIOGRAPHY</h2>
              <hr class="star-primary">
              <img src="images/create_account.png" class="img-responsive img-centered" alt="">
              <p> Show your biography here </p>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>UPLOAD PROFILE PICTURE</h2>
              <hr class="star-primary">
              <img src="images/profile_picture.png" class="img-responsive img-centered" alt="">
              <p>Browse your picture to upload it to our server.</p>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>LINK TO OTHER's SOCIAL MEDIA</h2>
              <hr class="star-primary">
              <img src="images/share_icon.png" class="img-responsive img-centered" alt="">
              <p>Share your profile other's pages.</p>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-2.2.1.min.js" integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00=" crossorigin="anonymous"></script>

  <!-- Bootstrap Core JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

  <!-- Plugin JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

  <!-- Theme JavaScript -->
  <script src="scripts/client.js"></script>

  <!-- FontAwesome CDN -->



</body>

</html>
