sed -E "s#export DATABASE_URL=postgresql://example:example@.*:5432/example#export DATABASE_URL=postgresql://example:example@99.99.99.99:5432/example#" process_files.sh > process_files-temp.sh && mv  process_files-temp.sh process_files.sh
sed -E "s#export CELERY_RESULT_BACKEND=redis://.*:6379/0#export CELERY_RESULT_BACKEND=redis://55.55.55.55:6379/0#" process_files.sh > process_files-temp.sh && mv  process_files-temp.sh process_files.sh
sed -E "s#export CELERY_BROKER_URL=redis://.*:6379/0#export CELERY_BROKER_URL=redis://55.55.55.55:6379/0#" process_files.sh > process_files-temp.sh && mv  process_files-temp.sh process_files.sh
