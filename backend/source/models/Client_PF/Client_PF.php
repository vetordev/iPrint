<?php

namespace Source\Models\Client_PF;

use Source\Models\Request;

class Client_PF extends Request {

  private $client_id;
  
  public function __construct($client_id)
  {
    $this->client_id = $client_id;
  }
}