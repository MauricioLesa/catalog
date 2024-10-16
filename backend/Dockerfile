FROM openjdk:21-jdk

WORKDIR /app

COPY .mvn /app/.mvn

COPY mvnw pom.xml /app/

RUN ./mvnw dependency:go-offline

COPY src /app/src

EXPOSE 8080

CMD ["./mvnw", "spring-boot:run"]