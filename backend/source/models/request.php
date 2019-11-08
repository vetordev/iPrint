<?php

namespace Source\Models;

use function GuzzleHttp\json_encode;

class Request{
  private function request($req) {
    return json_encode($req);
  }
}