<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Scripts y estilos de Inertia + Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
<!-- Contenedor donde se montará tu app Vue/Inertia -->
<div id="app" data-page="{{ json_encode($page) }}"></div>
</body>
</html>
