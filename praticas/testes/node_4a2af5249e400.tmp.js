<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MediaQueryList</title>
    <style>
        div{
            width: 300px;
            aspect-ratio: 1/1;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <h1>MatchMedia()</h1>
    <div></div>
    <p id="para"></p>
    <script>
        const caixa = document.querySelector('body > div')
        const para = document.getElementById('para')
        let larguraWindow = window.innerWidth
        console.log('oi');
        
        caixa.style.background = 'red'
    </script>
</body>
</html>