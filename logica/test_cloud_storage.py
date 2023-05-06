from google.cloud import storage

client = storage.Client.from_service_account_json("./keys_gcp.json")


bucket = client.get_bucket('bucket-cloud-compressor-alejo')

blob = bucket.blob('test/vistas.py')
blob.upload_from_filename('vistas.py')
print("se subio la imagen")