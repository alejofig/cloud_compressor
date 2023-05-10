import json
from google.cloud import pubsub_v1
from google.auth import compute_engine
def pubsub_callback(message):
    from tasks import procesar_solicitud
    print(message)
    procesar_solicitud.delay(json.loads(message.data.decode('utf-8'))["id"])
    message.ack()


credentials = compute_engine.Credentials()
subscriber = pubsub_v1.SubscriberClient(credentials=credentials)
subscription_path = subscriber.subscription_path("746411315164", 'cloud-miso-sub')

subscriber.subscribe(subscription_path, callback=pubsub_callback)
future = subscriber.subscribe(subscription_path, callback=pubsub_callback)
with subscriber:
    future.result()

