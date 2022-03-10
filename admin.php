<!DOCTYPE html>
<html lang="pl">

<head>
</head>

<body>
    <?php
    $myfile = fopen("ips.txt", "r") or die("Unable to open file!");
    echo fread($myfile, filesize("ips.txt"));
    fclose($myfile);
    ?>
</body>

</html>