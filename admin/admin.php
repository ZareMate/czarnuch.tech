<!DOCTYPE html>
<html lang="pl">

<head>
</head>

<body>
    <?php
    $myfile = fopen("data.lib", "r") or die("Unable to open file!");
    echo fread($myfile, filesize("ips.txt"));
    fclose($myfile);
    ?>
</body>

</html>