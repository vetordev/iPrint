<?php

namespace Source\Models\Client_PJ;

use Source\Models\Request;

class Client_PJ extends Request {

  private $client_id;

  public function __construct($client_id)
  {
    $this->client_id = $client_id;
  }
}