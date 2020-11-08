
<?php
// Array with names
$a[] = "Anna";
$a[] = "Alexander";
$a[] = "Brittany";
$a[] = "Brian";
$a[] = "Cinderella";
$a[] = "Christopher";
$a[] = "Diana";
$a[] = "David";
$a[] = "Eva";
$a[] = "Eric";
$a[] = "Fiona";
$a[] = "Fred";
$a[] = "Gunda";
$a[] = "George";
$a[] = "Hege";
$a[] = "Harry";
$a[] = "Inga";
$a[] = "Ivan";
$a[] = "Johanna";
$a[] = "Jacob";
$a[] = "Kitty";
$a[] = "Kevin";
$a[] = "Linda";
$a[] = "Larry";
$a[] = "Nina";
$a[] = "Nick";
$a[] = "Ophelia";
$a[] = "Owen";
$a[] = "Petunia";
$a[] = "Paul";
$a[] = "Amanda";
$a[] = "Aaron";
$a[] = "Raquel";
$a[] = "Richard";
$a[] = "Cindy";
$a[] = "Carl";
$a[] = "Doris";
$a[] = "Daniel";
$a[] = "Eve";
$a[] = "Evan";
$a[] = "Evita";
$a[] = "Emmanuel";
$a[] = "Sunniva";
$a[] = "Samuel";
$a[] = "Tove";
$a[] = "Thomas";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Victor";
$a[] = "Liza";
$a[] = "Liam";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "William";
$a[] = "Vicky";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
?> 