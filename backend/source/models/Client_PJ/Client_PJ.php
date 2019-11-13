<?php

namespace Source\Models\Client_PJ;

use Source\Models\Request;

class Client_PJ extends Request {

  private $client_id;

  public function __construct($client_id, $connection)
  {
    $this->client_id = $client_id;
    $this->connection = $connection;
  }

  public function store(){
    
  }
}