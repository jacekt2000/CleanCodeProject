# ImageHub - aplikacja do share'owania zdjęć

## Spis treści
* [Zespół](#nasz-zespół)
* [Opis aplikacji](#opis-aplikacji)
* [Technologie](#technologie)
* [Setup](#setup)

***

## Nasz zespół
### Nazwa: Czysty Kod (Clean Code)

### Członkowie zespołu
1. Stanisław Olszak (StachuDev)
2. Rafał Piotrowicz (0Rav0)
3. Jacek Tarzanowski (jacekt2000)
4. Krystian Adamowicz (Christ00pheran)
5. Michał Stolarczyk


## Opis aplikacji
Jest to aplikacja wzorowana na Imgur'ze. Każdy użytkownik (zalogowany i niezalogowany) 
może dodać post ze zdjęciem i odpowiednim tagiem. Następnie 
może udostępnić innym jego treaść przesyłając link. Posty użytkowników zalogowanych 
są wyświetlane na stronie głównej, jest możliwość ich komentowania i lajkowania oraz 
wyszukiwania po tagach.
	
## Technologie
* Python (Django)
* Java Script (React)
* PostgreSQL
* Docker
	
## Uruchomienie
Przed uruchomieniem dokera dobrze zainstalować lokalnie frontendowe i backendowe requirements:

### Frontend

```
$ cd .\frontend
$ npm install
```

### Backend
(po utworzeniu venv'a)
```
$ cd .\backend
$ venv\Scripts\activate 
$ pip install -r requirements.txt
```
***
### Tworzenie obrazów i kontenerów Dockerowych

```
$ docker compose up
```
### Teraz można się pomodlić
Aby docker nie wywalił błędów (to graniczy z cudem)
