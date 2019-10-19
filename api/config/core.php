<?php
  // show error reporting
  error_reporting(E_ALL);

  // start php session
  session_start();

  // set your default time-zone
  date_default_timezone_set('America/Los_Angeles');

  // home page url
  $home_url="http://localhost/cpsc349-project1/web/src";

  // variables used for jwt
  $key = "example_key";
  $iss = "http://example.org";
  $aud = "http://example.com";
  $iat = 1356999524;
  $nbf = 1357000000;
?>
