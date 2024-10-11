FROM openjdk:21-jdk

LABEL authors="Mauricio"

WORKDIR /app

COPY .mvn/ ./mvn

COPY mvnw pom.xml ./

RUN ./mvnw dependency:go-offline

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]

ENTRYPOINT ["top", "-b"]