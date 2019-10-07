<?php
class User{
    // database connection and table name
    private $conn;
    private $table_name = "user";

    // object properties
    public $id;
    public $userRole;
    public $username;
    public $firstName;
    public $lastName;
    public $email;
    public $password;
    public $location;
    public $love;
    public $do;
    public $userLink;
    public $photo;

    // constructor
    public function __construct($db){
        $this->conn = $db;
    }

    function read(){
      $query = "SELECT * FROM " . $this->table_name;
      // prepare query statement
      $stmt = $this->conn->prepare($query);
      $stmt->execute();

      return $stmt;
    }

    // create user
    function create(){
      $query = "INSERT INTO
                  " . $this->table_name . "
              SET
                  username=:username, userRole=:userRole, firstName=:firstName,
                  lastName=:lastName, email=:email,
                  password=:password, location=:location,
                  love=:love, do=:do,
                  userLink=:userLink, photo=:photo";
      // prepare query
      $stmt = $this->conn->prepare($query);

      // sanitize
      $this->username=htmlspecialchars(strip_tags($this->username));
      $this->userRole=htmlspecialchars(strip_tags($this->userRole));
      $this->firstName=htmlspecialchars(strip_tags($this->firstName));
      $this->lastName=htmlspecialchars(strip_tags($this->lastName));
      $this->email=htmlspecialchars(strip_tags($this->email));
      $this->password=htmlspecialchars(strip_tags($this->password));
      $this->location=htmlspecialchars(strip_tags($this->location));
      $this->love=htmlspecialchars(strip_tags($this->love));
      $this->do=htmlspecialchars(strip_tags($this->do));
      $this->userLink=htmlspecialchars(strip_tags($this->userLink));
      $this->photo=htmlspecialchars(strip_tags($this->photo));

      // bind values
      $stmt->bindParam(":username", $this->username);
      $stmt->bindParam(":userRole", $this->userRole);
      $stmt->bindParam(":firstName", $this->firstName);
      $stmt->bindParam(":lastName", $this->lastName);
      $stmt->bindParam(":email", $this->email);
      $stmt->bindParam(":password", $this->password);
      $stmt->bindParam(":location", $this->location);
      $stmt->bindParam(":love", $this->love);
      $stmt->bindParam(":do", $this->do);
      $stmt->bindParam(":userLink", $this->userLink);
      $stmt->bindParam(":photo", $this->photo);

      if($stmt->execute()){
          return true;
      }
      return false;
    }

}
