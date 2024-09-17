FROM openjdk:21-jdk-alpine
LABEL authors="Mau"

WORKDIR /app

VOLUME .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

VOLUME src ./src

CMD ["./mvnw", "spring-boot:run"]

ENTRYPOINT ["top", "-b"]