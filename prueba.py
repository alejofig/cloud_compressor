from google.cloud import pubsub_v1
import json
import os
# from celery import Celery

# celery = Celery(__name__)
# celery.conf.broker_url = os.environ.get("CELERY_BROKER_URL", "redis://redis:6379/0")
# celery.conf.result_backend = os.environ.get("CELERY_RESULT_BACKEND", "redis://redis:6379/0")


# @celery.task()
# def procesar_solicitud(id_solicitud):
#     print(id_solicitud)

def pubsub_callback(message):
    print(message)
    message.ack()

subscriber = pubsub_v1.SubscriberClient()
subscription_path = subscriber.subscription_path("746411315164", 'cloud-miso-sub')

def receive_messages(subscription_path):
    subscriber = pubsub_v1.SubscriberClient()
    while True:
        request = pubsub_v1.types.PullRequest(
            subscription=subscription_path, 
            max_messages=1, 
            return_immediately=True
        )
        response = subscriber.pull(request=request)
        for message in response.received_messages:
            pubsub_callback(message)
        #subscriber.acknowledge(subscription_path, [ack_id for ack_id in response.ack_ids])

receive_messages(subscription_path)
