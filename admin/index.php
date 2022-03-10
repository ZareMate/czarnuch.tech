 <?php
    $ip_address = $_SERVER["REMOTE_ADDR"]; // user ip adderss
    $filename = "data.lib";
    $contents = file_get_contents($filename);
    $my_arr = json_decode($contents, true);
    if (in_array($ip_address, $my_arr)) {
} else {
    $my_arr[] = $ip_address;
    file_put_contents($filename,  json_encode($my_arr));
}
?>