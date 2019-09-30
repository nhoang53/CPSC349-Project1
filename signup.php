<link rel="stylesheet" href="name_signup.php">
<link rel="stylesheet" href="stylesheets/bootstrap.css">
<link rel="stylesheet" href="stylesheets/form_box.css">

<html>
<br><br><br><br><br><br><br><br><br><br>

<body style="background-color:black;">
  <div class="boxed">
    <div class="step-container">
      <form action="includes/signup-inc.php" method="post">
        <section class="title">
          <h1 class="glyph-email" style="color:orange">Sign Me Up!</h1>
          <?php
        if (isset($_GET['error'])) {
          if ($_GET['error'] == "emptyfields") {
            echo '<p class="signuperror" style="color:red">Fill in all fields!</p>';
          }
          else if ($_GET['error'] == "invaliduidmail") {
            echo '<p class="signuperror" style="color:red">Invalid username and email!</p>';
          }
          else if ($_GET['error'] == "invaliduid") {
            echo '<p class="signuperror" style="color:red">Invalid username!</p>';
          }
          else if ($_GET['error'] == "invalidfirst") {
            echo '<p class="signuperror" style="color:red">Invalid firstname!</p>';
          }
          else if ($_GET['error'] == "invalidlast") {
            echo '<p class="signuperror" style="color:red">Invalid lastname!</p>';
          }
          else if ($_GET['error'] == "invalidmail") {
            echo '<p class="signuperror" style="color:red">Invalid e-mail!</p>';
          }
          else if ($_GET['error'] == "passwordcheck") {
            echo '<p class="signuperror" style="color:red">your password do not match!</p>';
          }
          else if ($_GET['error'] == "usertaken") {
            echo '<p class="signuperror" style="color:red">Username is already taken!</p>';
          }
        }
        if (isset($_GET['signup'])) {
          if ($_GET["signup"] == "success") {
            echo '<p class="signupsuccess" style="color:green">Sign up successful!</p>';
          }
        }

       ?>
        </section>
        <section class="step-content">
          <fieldset class="email element type-email">
            <span class="label-region"></span>
            <a style="color:white">What's your First Name?</a>
            <span class="input-region"><input type="text" name="first" placeholder="Firstname"></span> <br> <br>
            <a style="color:white">What's your Last Name?</a>
            <span class="input-region"><input type="text" name="last" placeholder="Lastname"></span> <br> <br>
            <a style="color:white">Choose your Username</a>
            <span class="input-region"><input type="text" name="uid" placeholder="Username" size="21"></span> <br> <br>
            <a style="color:white">Enter your Email</a>
            <span class="input-region"><input type="text" name="mail" placeholder="xyz@who.com" size="28"></span> <br> <br>
            <a style="color:white">Choose your Password***</a>
            <span class="input-region"><input type="password" name="pwd" placeholder="Password"></span> <br> <br>
            <a style="color:white">Confirm your Password***</a>
            <span class="input-region"><input type="password" name="pwd-repeat" placeholder="Repeat Password"></span> <br> <br>
          </fieldset>
          <p class="text small" style="color:orange">We will not share or display your email address.</p>
          <button style="margin:10px;" onclick="location.href='index.php'" type="button"> Home </button>
          <button style="margin:10px;" type="submit" name="signup-submit">Sign Up</button>
          <button style="margin:10px;" type="reset">Reset</button>
        </section>
      </form>
    </div>
  </div>
</body>

</html>
