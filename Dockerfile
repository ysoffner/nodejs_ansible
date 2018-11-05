# 
# Dockerfile to use as a base for python
#

FROM ubuntu:14.04
MAINTAINER "Yuri Soffner" <ysoffner@gmail.com>

# Prerequisites
RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y python python-pip python-dev curl

# NODEJS Using Ubuntu
RUN curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash - && \
sudo apt-get install -y nodejs

RUN pip install --upgrade pip
RUN mkdir myapp && cd myapp
RUN npm install express --save && npm install express

