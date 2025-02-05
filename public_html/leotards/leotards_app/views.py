from django.shortcuts import render
import os

def get_file_names(directory):
    # Получаем список всех файлов и директорий в указанной папке
    file_names = []
    for file in os.listdir(directory):
        file_path = os.path.join(directory, file)
        if os.path.isfile(file_path):  # Проверяем, что это файл, а не папка
            file_names.append(file)
    return file_names\

basedir = '/home/c/centromebel/leotards/public_html'

def index(request):
  return render(request, 'index.html')

def conditions(request):
  return render(request, 'conditions.html')

def contact(request):
  return render(request, 'contact.html')

def gallery(request, sport):
  gall = {
    'acro': ['/static/images/gallery/acro/'+s for s in get_file_names(basedir+'/static/images/gallery/acro')],
    'fig': ['/static/images/gallery/fig/'+s for s in get_file_names(basedir+'/static/images/gallery/fig')],
    'gym': ['/static/images/gallery/gym/'+s for s in get_file_names(basedir+'/static/images/gallery/gym')],
  }
  if sport == 'init':
    return render(request, 'gallery.html')
  else:
    return render(request, 'gallery-sport.html', {'gallery': gall[sport]})

def sale(request):
  return render(request, 'sale.html')

def handler404(request, exception):
    return render(request, 'handler404.html', status=404)