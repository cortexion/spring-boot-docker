frontend developement:
npm start -> localhost 3000
("npm run build" happens with "mvn spring-boot:run")

<groupId>com.example</groupId>
<artifactId>spring-boot</artifactId>
<version>0.0.1-SNAPSHOT</version>

start server:
mvn spring-boot:run

create jar:
mvn package

inside target (git bash):
java -jar target/spring-boot-docker-complete-0.0.1-SNAPSHOT.jar

docker build -t springio/gs-spring-boot-docker . && docker run -p 8080:8080 springio/gs-spring-boot-docker