<link rel="stylesheet" href="stylesheets/login.css">
<link rel="stylesheet" href="stylesheets/bootstrap.css">

<<title>LOGIN FORM</title>
  <h1 style="color:red;" align="center">LOGIN FORM</h1>

  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <div id="navbar" class="collapse navbar-collapse">
        </div>
      </div>
    </div>
  </nav>

  <body style="background-color:black">
    <div class="background-login">
      <form action="includes/login-inc.php" method="post">
        <div class="imgcontainer">
          <img src="images/favicon.png" alt="Avatar" class="avatar">
        </div>

        <div class="container">
          <label style="color:red;" for="email"><b>Username/E-mail</b></label>
          <input type="text" placeholder="Username/E-mail" name="mailuid" required>

          <label style="color:red;" for="pwd"><b>Password</b></label>
          <input type="password" placeholder="Password" name="pwd" required>

          <button type="submit" name="login-submit">Login</button>
          <label style="color:red;">
            <input type="checkbox" checked="checked" name="remember"> Remember me
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <a href="signup.php" style="color:green;">New User?</a></span>
            &emsp;&emsp;
            <a href="forgot_password.php" style="color:red;">Forgot password?</a></span>
          </label>
        </div>

        <div class="container">
          <button type="button" class="cancelbtn">Cancel</button>
        </div>
      </form>
    </div>
  </body>
