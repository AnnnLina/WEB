
<?php           
         echo "<table border='1'>";
         echo "<tr><td>X</td>";
         for($i=0; $i<=10; $i++){
             echo "<td>$i</td>";
         }
         echo "</tr>";
         for($i=0; $i<=10; $i++){
             echo "<tr>";
             echo "<td>$i</td>";
             for($j=0; $j<=10; $j++){
                 echo "<td>".$i*$j."</td>";
             }
             echo "</tr>";
         }
         echo "</table>";
        ?>

