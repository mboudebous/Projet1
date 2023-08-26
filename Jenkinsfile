pipeline {
    agent any 
    
     tools{
        jdk 'OpenJDK17'
        maven 'maven3'
    }
   
    
    environment {
        SCANNER_HOME=tool 'sonar-scanner'
    }
    
    stages{
     
        stage("Git Checkout"){
            steps{
                git branch: 'main', credentialsId: 'ecde681b-5636-41da-aad5-6704576d1392', url: 'https://github.com/mboudebous/Projet1.git'
            }
        }
        
        
        
        stage("Compile"){
            steps{
                sh "mvn clean compile"
            }
        }
        
         stage("Test Cases"){
            steps{
                sh "mvn test"
            }
        }
        
       stage("Sonarqube Analysis "){
            steps{
                withSonarQubeEnv('sonarqube') {
                    sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=Petclinic \
                    -Dsonar.java.binaries=. \
                    -Dsonar.projectKey=Petclinic '''
    
                }
            }
        }
        
        
         stage("Build"){
            steps{
                sh " mvn clean install"
            }
        }
        
        stage("Docker Build & Push"){
            steps{
                script{
                   withDockerRegistry(credentialsId: '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', toolName: 'Docker', url: 'https://index.docker.io/v1/') {
  


                        
                        sh "docker build -t img-projet ."
                        sh "docker tag img-projet imas10/projet:latest "
                        sh "docker push imas10/projet:latest "
                       
                    }
                }
            }
        }
        
        
        
       
    }
}
