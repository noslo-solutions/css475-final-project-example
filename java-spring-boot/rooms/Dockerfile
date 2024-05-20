# Use the official OpenJDK image as a base image
FROM openjdk:17-jdk-slim

# Install Maven
RUN apt-get update && \
    apt-get install -y maven && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /workspace

# Copy the pom.xml file and the source code to the working directory
COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

# Start the application using Maven in watch mode
CMD ["mvn", "spring-boot:run"]
