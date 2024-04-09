# Учебный сайт объявлений

### Как скачать и приступить к работе.

1) Используем **Python 3.11 или выше**.
2) Устанавливаем **PostgreSQL_16.1_64bit_Setup.exe**.
3) Устанавливаем **pgadmin4-8.0-x64.exe**.
4) В поиске Windows пишем "*psql*" и открываем консоль **SQL Shell (psql)**. Вводим пароль (он не отображается) для пользователя postgres. Если появилось приглашение к вводу SQL-команд "*postgres=# _*", пароль верен. Далее создаем нового пользователя БД, даем ему права и создаем БД (рекомендую просто копировать и вставлять команды, чтобы ничего не менять потом в *settings.py* или *.env*, и жать Enter (точка с запятой в конце обязательна).
	```SQL
	CREATE USER domeruser WITH PASSWORD 'admin';
	ALTER ROLE domeruser WITH CREATEDB;
	CREATE DATABASE domerdb WITH OWNER domeruser;
	```
5) Создаем новый каталог на вашем компьютере с названием *DomerBel*, заходим в него, кликаем правой кнопкой, выбираем "*Git Bash Here*" или "*Открыть в Терминале*". Вставляем, то что в кавычках (**не потеряете точку**) "*git clone https://github.com/definitwork/DomerBel.git .*" и жмем Enter.
6) Открываем проект в PyCharm и подключаем/активируем виртуальное окружение.
7) Для тех у кого **Linux** правим в *requirements.txt* "~~psycopg2~~" на "**psycopg2-binary**"
8) Бросаем в корень проекта (т.е. на уровень *manage.py*) файл "**.env**". Будет в телеге.
9) Устанавливаем все зависимости, убедившись, что вы в виртуальном окружении 
	```SH
	pip install -r requirements.txt
	```
10) Миграции
	```SH
	python manage.py migrate
	```
11) Суперпользователь
	```SH
	python manage.py createsuperuser
	```
12) Далее запускаем сервер
    ```SH
    python manage.py runserver
    ```
    и проверяем http://127.0.0.1:8000/ (**банана тут не будет**)
13) Переходим на ветку **dev**
	```SH
	git checkout -b dev
	```
 	пишем
	```SH
	git pull
	```
14) Получаем задачу, создаем от **dev** новую ветку и работаем в своей ветке. Сливаемся с *dev* только после завершения задачи.
15) Не забываем, что в ветку dev все слияния строго через **Pull request**. В комментарии к Pull request'у должно быть четко понятно, какую именно задачу вы решали (продублировать задание или понятно написать, как его найти в bitrix'e). После Pull request'a сообщите в Telegram о завершении задачи, чтобы кто-нибудь из коллег вас проверил.
16) Не забываем про **PEP8** и другие правила оформления кода. Все должны писать в одном стиле, чтобы каждый смотрел на чужой код, как на свой :)