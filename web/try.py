import requests

# URL de la instancia de backend
backend_url = "http://localhost/"

# Realizar la solicitud GET a la instancia de backend
response = requests.get(backend_url)

# Verificar si la respuesta es exitosa (código de estado HTTP 200)
if response.status_code == 200:
    print(response.text)
    print("La instancia de backend está disponible")
else:
    print(response.status_code)
    print("La instancia de backend no está disponible")
