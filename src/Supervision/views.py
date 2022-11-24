from django.shortcuts import render


def map_page(request):
    return render(request, 'map.html')


def router_page(request):
    return render(request, 'router.html')


def appli_page(request):
    return render(request, 'appli.html')


def login_page(request):
    return render(request, 'login.html')


def alert_page(request):
    return render(request, 'alert.html')
