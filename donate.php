<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
<link rel="stylesheet" href="stylesheets/bootstrap.css">
<link rel="stylesheet" href="stylesheets/form_box.css">

<html>
<br> <br><br><br><br>

<body style="background-color:black;">
  <div class="boxed">
    <form>
      <h1 style="color:orange">$$$ Donation Form $$$</h1>
      <p style="color:white">Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
      <section>
        <h2 style="color:orange">Contact information</h2>
        <fieldset>
          <legend style="color:white">Title</legend>
          <ul class="radio-button">
            <label style="color:white" for="title_1">
              <input type="radio" id="title_1" name="title" value="M.">
              Mister &ensp;
            </label>

            <label style="color:white" for="title_2">
              <input type="radio" id="title_2" name="title" value="Ms.">
              Miss
            </label>
          </ul>
        </fieldset>
        <p style="color:white">
          <label for="name">
            <span>Name: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="text" id="name" name="username" size="40">
        </p>
        <p style="color:white">
          <label for="mail">
            <span>E-mail: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="email" id="mail" name="usermail" size="39">
        </p>
        <p style="color:white">
          <label for="pwd">
            <span>Password: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="password" id="pwd" name="password" size="35">
        </p>
      </section>
      <section>
        <h2 style="color:orange">Payment information</h2>
        <p style="color:white">
          <label for="amountDollar">
            <span>Donate amount: $</span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input step="0.01" max="2500" type="number" id="dollar" name="amontDonate" size="35">
        </p>
        <p style="color:white">
          <label for="card">
            <span>Card type:</span>
          </label>
          <select id="card" name="usercard">
            <option value="visa">Visa</option>
            <option value="mc">Mastercard</option>
            <option value="amex">American Express</option>
          </select>
        </p>
        <p style="color:white">
          <label for="number">
            <span>Card number:</span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="number" id="number" name="cardnumber" size="35">
        </p>
        <p style="color:white">
          <label for="date">
            <span>Expiration date:</span>
            <strong><abbr title="required">*</abbr></strong>
            <em>formatted as mm/yy</em>
          </label>
          <input type="date" id="date" name="expiration" size="35">
        </p>
        <button style="margin:10px;" onclick="location.href='index.php'" type="button"> Home </button>
      </section>
      <section>
        <div id="ex1" class="modal">
          <p>Thank you for your donation. We really appricate your support to help us maitain this website :) </p>
          <a href="index.php">Close</a>
        </div>

        <!-- Link to open the modal -->
        <button type="submit">
          <p style="color:white"><a href="#ex1" rel="modal:open">Validate the donation</a></p>
        </button>
      </section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
    </form>
  </div>
</body>

</html>
