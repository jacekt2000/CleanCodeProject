# ImageHub - aplikacja do share'owania zdjęć

## Table of contents
* [Nasz zespół](#Nasz zespół)
* [Opis aplikacji](#general-info)
* [Technologie](#technologies)
* [Setup](#setup)
/
## Nasz zespół:
# Nazwa: Czysty Kod (Clean Code)

# Członkowie zespołu:
1. Stanisław Olszak (StachuDev)
2. Rafał Piotrowicz (0Rav0)
3. Jacek Tarzanowski (jacekt2000)
4. Krystian Adamowicz (Christ00pheran)
5. Michał Stolarczyk


## Opis aplikacji
Jest to aplikacja wzorowana na Imgur'ze. Każdy użytkownik (zarówno zalogowany 
jaki i niezalogowany) może dodać post ze zdjęciem i odpowiednim tagiem. Następnie 
użytkownik może udostępnić innym treść posta przesyłając link do niego.
Post użytkowników zalogowanych są wyświetlane na stronie głównej jest możliwość 
ich komentowania i lajkowania.  
	
## Technologies
Project is created with:
* Python (Django)
* Java Script (React)
* PostgreSQL
* Docker
	
## Setup
To before run docker container install frontend and backend requirements:

# Frontend

```
$ npm install
```

# Backend

```
$ venv\Scripts\activate 
$ pip install -r requirements.txt
```
***
# Building Docker Images and Containers:

```
$ docker compose up
```
