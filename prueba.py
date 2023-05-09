import os
from google.cloud import pubsub_v1
from concurrent import futures


project_id = '746411315164'
topic_name = 'cloud-miso'
sub_name ='cloud-miso-sub'


def callback(message):
    print("Received %s", message)
    message.ack()

subscriber = pubsub_v1.SubscriberClient()
subscription_path = subscriber.subscription_path(project_id, sub_name)

future = subscriber.subscribe(subscription_path, callback=callback)

with subscriber:
    try:
        future.result(timeout=5)
    except futures.TimeoutError:
        future.cancel()  # Trigger the shutdown.
        future.result()  # Block until the shutdown is complete.