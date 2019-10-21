<?php

class User
{
    private $db;
    private $table_name = "users";

    public $id;
    public $fullName;
    public $email;
    public $password;
    public $image;
    public $link;
    public $location;
    public $ocupation;
    public $summary;
    public $pro;
    public $github;
    public $linkedIn;
    public $facebook;
    public $twitter;
    public $instagram;
    public $youtube;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function create()
    {
        $query = "INSERT INTO " . $this->table_name . "
              SET fullName = :fullName,
                  email = :email,
                  password = :password,
                  image = :image,
                  link = :link,
                  summary = :summary,
                  location = :location,
                  ocupation = :ocupation";

        $stmt = $this->db->prepare($query);

        $this->fullName = htmlspecialchars(strip_tags($this->fullName));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->image = htmlspecialchars(strip_tags($this->image));
        $this->link = htmlspecialchars(strip_tags($this->link));
        $this->summary = htmlspecialchars(strip_tags($this->summary));
        $this->location = htmlspecialchars(strip_tags($this->location));
        $this->ocupation = htmlspecialchars(strip_tags($this->ocupation));

        $password_hash = password_hash($this->password, PASSWORD_BCRYPT);

        $stmt->bindParam(":fullName", $this->fullName);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(':password', $password_hash);
        $stmt->bindParam(":image", $this->image);
        $stmt->bindParam(":link", $this->link);
        $stmt->bindParam(":summary", $this->summary);
        $stmt->bindParam(":location", $this->location);
        $stmt->bindParam(":ocupation", $this->ocupation);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    public function update()
    {
        $password_set = !empty($this->password) ? "password = :password" : "";

        $query = "UPDATE " . $this->table_name . "
                  SET fullName=:fullName
                      email=:email,
                      {$password_set},
                      image=:image,
                      link=:link,
                      summary=:summary,
                      location=:location,
                      ocupation=:ocupation,
                      pro=:pro,
                      github=:gihub,
                      linkedIn=:linkedIn
                      facebook=:facebook,
                      twitter=:twitter,
                      instagram=:instagram,
                      youtube=:youtube
                  WHERE id = :id";

        $stmt = $this->db->prepare($query);

        $this->fullName = htmlspecialchars(strip_tags($this->fullName));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->image = htmlspecialchars(strip_tags($this->image));
        $this->link = htmlspecialchars(strip_tags($this->link));
        $this->summary = htmlspecialchars(strip_tags($this->summary));
        $this->location = htmlspecialchars(strip_tags($this->location));
        $this->ocupation = htmlspecialchars(strip_tags($this->ocupation));
        $this->pro = htmlspecialchars(strip_tags($this->pro));
        $this->github = htmlspecialchars(strip_tags($this->github));
        $this->linkedIn = htmlspecialchars(strip_tags($this->linkedIn));
        $this->facebook = htmlspecialchars(strip_tags($this->facebook));
        $this->twitter = htmlspecialchars(strip_tags($this->twitter));
        $this->instagram = htmlspecialchars(strip_tags($this->instagram));
        $this->youtube = htmlspecialchars(strip_tags($this->youtube));

        $stmt->bindParam(":fullName", $this->fullName);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":image", $this->image);
        $stmt->bindParam(":link", $this->link);
        $stmt->bindParam(":summary", $this->summary);
        $stmt->bindParam(":location", $this->location);
        $stmt->bindParam(":ocupation", $this->ocupation);
        $stmt->bindParam(":pro", $this->pro);
        $stmt->bindParam(":github", $this->github);
        $stmt->bindParam(":linkedIn", $this->linkedIn);
        $stmt->bindParam(":facebook", $this->facebook);
        $stmt->bindParam(":twitter", $this->twitter);
        $stmt->bindParam(":instagram", $this->instagram);
        $stmt->bindParam(":youtube", $this->youtube);

        if (!empty($this->password)) {
            $this->password = htmlspecialchars(strip_tags($this->password));

            $password_hash = password_hash($this->password, PASSWORD_BCRYPT);

            $stmt->bindParam(":password", $password_hash);
        }
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function delete()
    {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
        $stmt = $this->db->prepare($query);

        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(1, $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function exists($field, $value)
    {
        $query = "SELECT *
                FROM " . $this->table_name . "
                WHERE {$field} = ?
                LIMIT 1";

        $stmt = $this->db->prepare($query);

        $value = htmlspecialchars(strip_tags($value));

        $stmt->bindParam(1, $value);
        $stmt->execute();

        $num = $stmt->rowCount();

        if ($num > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->fullName = $row["fullName"];
            $this->email = $row["email"];
            $this->image = $row["image"];
            $this->link = $row["link"];
            $this->summary = $row["summary"];
            $this->location = $row["location"];
            $this->ocupation = $row["ocupation"];
            $this->pro = $row["pro"];
            $this->github = $row["github"];
            $this->linkedIn = $row["linkedIn"];
            $this->facebook = $row["facebook"];
            $this->twitter = $row["twitter"];
            $this->instagram = $row["instagram"];
            $this->youtube = $row["youtube"];

            return true;
        }

        return false;
    }
}
