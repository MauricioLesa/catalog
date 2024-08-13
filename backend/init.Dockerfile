FROM openjdk:21-jdk-alpine
LABEL authors="Mau"

ENTRYPOINT ["top", "-b"]