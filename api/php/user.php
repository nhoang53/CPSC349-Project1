<?php
class User{
    // database connection and table name
    private $conn;
    private $table_name = "user";

    // object properties
    public $id;
    public $username;
    public $firstName;
    public $lastName;
    public $premiumUser;
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

    // get all users
    function read(){
      $query = "SELECT * FROM " . $this->table_name;

      //echo "" .$query;
      // prepare query statement
      $stmt = $this->conn->prepare($query);
      $stmt->execute();

      return $stmt;
    }

// create user
    function create(){
      $query = "INSERT INTO " .$this->table_name. "
              SET
                  username=:username, firstName=:firstName,
                  lastName=:lastName, premiumUser=:premiumUser,
                  email=:email, password=:password,
                  location=:location, love=:love, do=:do,
                  userLink=:userLink, photo=:photo";
      // prepare query
      $stmt = $this->conn->prepare($query);

      // sanitize
      $this->username=htmlspecialchars(strip_tags($this->username));
      $this->firstName=htmlspecialchars(strip_tags($this->firstName));
      $this->lastName=htmlspecialchars(strip_tags($this->lastName));
      $this->premiumUser=htmlspecialchars(strip_tags($this->premiumUser));
      $this->email=htmlspecialchars(strip_tags($this->email));
      $this->password=htmlspecialchars(strip_tags($this->password));
      $this->location=htmlspecialchars(strip_tags($this->location));
      $this->love=htmlspecialchars(strip_tags($this->love));
      $this->do=htmlspecialchars(strip_tags($this->do));
      $this->userLink=htmlspecialchars(strip_tags($this->userLink));
      $this->photo=htmlspecialchars(strip_tags($this->photo));

      // bind values
      $stmt->bindParam(":username", $this->username);
      $stmt->bindParam(":firstName", $this->firstName);
      $stmt->bindParam(":lastName", $this->lastName);
      $stmt->bindParam(":premiumUser", $this->premiumUser);
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

// update user
    function update(){

        // update query
        $query = "UPDATE
                    " . $this->table_name . "
                    SET
                        username=:username, firstName=:firstName,
                        lastName=:lastName, premiumUser=:premiumUser,
                        email=:email, password=:password,
                        location=:location, love=:love, do=:do,
                        userLink=:userLink, photo=:photo
                WHERE
                    id = :id";

        //echo ""  .$query;
        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->username=htmlspecialchars(strip_tags($this->username));
        $this->firstName=htmlspecialchars(strip_tags($this->firstName));
        $this->lastName=htmlspecialchars(strip_tags($this->lastName));
        $this->premiumUser=htmlspecialchars(strip_tags($this->premiumUser));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->password=htmlspecialchars(strip_tags($this->password));
        $this->location=htmlspecialchars(strip_tags($this->location));
        $this->love=htmlspecialchars(strip_tags($this->love));
        $this->do=htmlspecialchars(strip_tags($this->do));
        $this->userLink=htmlspecialchars(strip_tags($this->userLink));
        $this->photo=htmlspecialchars(strip_tags($this->photo));
        $this->id=htmlspecialchars(strip_tags($this->id));

        // bind values
        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":firstName", $this->firstName);
        $stmt->bindParam(":lastName", $this->lastName);
        $stmt->bindParam(":premiumUser", $this->premiumUser);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":location", $this->location);
        $stmt->bindParam(":love", $this->love);
        $stmt->bindParam(":do", $this->do);
        $stmt->bindParam(":userLink", $this->userLink);
        $stmt->bindParam(":photo", $this->photo);
        $stmt->bindParam(":id", $this->id);

        if($stmt->execute()){
          return true;
        }
        return false;
    }

// delete users
    function delete(){

      // delete query
      $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";

      // prepare query
      $stmt = $this->conn->prepare($query);

      // sanitize
      $this->id=htmlspecialchars(strip_tags($this->id));

      // bind id of record to delete
      $stmt->bindParam(1, $this->id);

      // execute query
      if($stmt->execute()){
        return true;
      }

      return false;

    }

}
