$.getJSON('json/users.json',function(data){

$("#usermenu img , #usermenu1 img  ").attr("src",data.users[2].photo);
$("#usermenu p , #usermenu1 p" ).html( data.users[2].name +' '+ '<span class="caret"></span>'   );

$("#userimgtop").attr("src",data.users[2].photo);



$("#tr1 td:nth-child(1) img  ").attr("src",data.users[0].photo);
$(" #tr1 td:nth-child(2) p:nth-child(1)  ").html( data.users[0].name  );
$(" #tr1 td:nth-child(2) p:nth-child(2)  ").html( data.users[0].country  );
     

$("#tr1 td:nth-child(3) img  ").attr("src",data.users[1].photo);
$(" #tr1 td:nth-child(4) p:nth-child(1)  ").html( data.users[1].name  );
$(" #tr1 td:nth-child(4) p:nth-child(2)  ").html( data.users[1].country  );

 $("#tr1 td:nth-child(5) img  ").attr("src",data.users[2].photo);
$(" #tr1 td:nth-child(6) p:nth-child(1)  ").html( data.users[2].name  );
$(" #tr1 td:nth-child(6) p:nth-child(2)  ").html( data.users[2].country  );


$("#tr2 td:nth-child(1) img  ").attr("src",data.users[3].photo);
$(" #tr2 td:nth-child(2) p:nth-child(1)  ").html( data.users[3].name  );
$(" #tr2 td:nth-child(2) p:nth-child(2)  ").html( data.users[3].country  );


$("#tr2 td:nth-child(3) img  ").attr("src",data.users[4].photo);
$(" #tr2 td:nth-child(4) p:nth-child(1)  ").html( data.users[4].name  );
$(" #tr2 td:nth-child(4) p:nth-child(2)  ").html( data.users[4].country  );


$("#tr2 td:nth-child(5) img  ").attr("src",data.users[5].photo);
$(" #tr2 td:nth-child(6) p:nth-child(1)  ").html( data.users[5].name  );
$(" #tr2 td:nth-child(6) p:nth-child(2)  ").html( data.users[5].country  );

//////////////////row 3


$("#tr3 td:nth-child(1) img  ").attr("src",data.users[6].photo);
$(" #tr3 td:nth-child(2) p:nth-child(1)  ").html( data.users[6].name  );
$(" #tr3 td:nth-child(2) p:nth-child(2)  ").html( data.users[6].country  );


$("#tr3 td:nth-child(3) img  ").attr("src",data.users[7].photo);
$(" #tr3 td:nth-child(4) p:nth-child(1)  ").html( data.users[7].name  );
$(" #tr3 td:nth-child(4) p:nth-child(2)  ").html( data.users[7].country  );


$("#tr3 td:nth-child(5) img  ").attr("src",data.users[8].photo);
$(" #tr3 td:nth-child(6) p:nth-child(1)  ").html( data.users[8].name  );
$(" #tr3 td:nth-child(6) p:nth-child(2)  ").html( data.users[8].country  );


} )





    