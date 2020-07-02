<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contoh Load Data JSON</title>
</head>
<body>
    <h1>Data Table</h1>
    <table style="width:100%" cellpadding="10px" cellspacing="10px" border="1">
        <thead>
            <tr>
                <th>NO</th>
                <th>Nama</th>
                <th>Wilayah</th>
                <th>Deskripsi</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
	
		</tbody>
    </table>
</body>
<script src="jquery-3.4.1.js"></script>
<script>
    $.getJSON("data.json",function(data){
        var items=[];
        $.each(data, function(key, val){
            items.push("<tr>");
            items.push("<td id='"+key+"'>"+val.id+"</td>");
            items.push("<td id='"+key+"'>"+val.nama+"</td>");
            items.push("<td id='"+key+"'>"+val.email+"</td>");
            items.push("<td id='"+key+"'>"+val.telp+"</td>");
            items.push("<td id='"+key+"' style='text-align:center'><img src='foto/"+val.foto+"' style='height:100px;'></td>");
            items.push("</tr>");
        });
        $("<tbody/>",{"class":"mydata",html:items.join("")}).appendTo("table");
    });
</script>
</html>