# Берём последний образ nginx
FROM nginx:latest

# удаляем все конфиги в nginx
RUN rm /etc/nginx/conf.d/*

# Копируем наш дефолтный конфиг в nginx
COPY ./default.conf /etc/nginx/conf.d/

# Слушаем 80 порт
EXPOSE 80

# Запускаем nginx
CMD [ "nginx", "-g", "daemon off;" ]