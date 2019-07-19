FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code
COPY . /code/

RUN  pip install -r requerimientos.txt
RUN apt-get update && apt-get install -y ffmpeg libavcodec-extra
