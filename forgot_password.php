<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
<link rel="stylesheet" href="stylesheets/bootstrap.css">
<link rel="stylesheet" href="stylesheets/form_box.css">

<html>
<br><br><br><br><br><br><br><br><br><br>

<body style="background-color:black;">
  <div class="boxed">
    <div class="step-container">
      <form novalidate="" class="email_signup">
        <section class="title">
          <h1 class="glyph-email" style="color:orange">Reset Your Password</h1> <br><br>
        </section>
        <section class="step-content">
          <fieldset class="email element type-email">
            <span class="label-region"></span>
            <a style="color:white"> Enter your Email </a>
            <span class="input-region"><input type="text" id="email" name="email" value="" size=36 placeholder="xyz@who.com"></span>
            <br>
            <br>
            <a style="color:white">Enter your New Password***</a>
            <span class="input-region"><input type="password" id="password" name="pwd" value="" size=23 placeholder="**********"></span> <br><br>
            <a style="color:white">Confirm your New Password***</a>
            <span class="input-region"><input type="password" id="retype-password" name="retype-pwd" value="" placeholder="**********"></span> <br><br><br>
          </fieldset>
        </section>
        <section>
          <div id="ex1" class="modal">
            <p>Your password has been reset successfully!!! </p>
            <a href="index.php">Close</a>
          </div>

          <!-- Link to open the modal -->
          <button type="submit">
            <p style="color:black"><a href="#ex1" rel="modal:open">Submit</a></p>
          </button>
        </section>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
      </form>
    </div>
  </div>
</body>

</html>
