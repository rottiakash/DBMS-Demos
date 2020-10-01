FROM python:alpine

WORKDIR /app

COPY . .

RUN pip3 install -r requirements.txt
RUN pip3 install gunicorn
CMD exec gunicorn --bind :5000 --workers 1 --threads 8 --timeout 0 app:app