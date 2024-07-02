 window.onload = function() {
        var computerName = window.location.hostname;
        var newWindow = window.open("", "", "width=300,height=500,scrollbars=1,status=0");
        newWindow.document.write("<h1>Имя компьютера в сети:</h1>");
        newWindow.document.write("<p>" + computerName + "</p>");
    }