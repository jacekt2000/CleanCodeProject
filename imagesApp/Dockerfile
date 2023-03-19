FROM python:3.10.2-slim-bullseye

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app/ImagesApp

COPY requirements.txt /app/ImagesApp/

RUN pip install -r requirements.txt 

COPY . /app/ImagesApp/

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]