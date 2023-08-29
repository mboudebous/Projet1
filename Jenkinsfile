pipeline {
    agent any 
 
  
     tools{
        jdk 'OpenJDK17'
        maven 'maven3'
    }
   environment {
        SONARQUBE_TOKEN = credentials('squ_64f313044c25a53766b57ab00212d29f8ce614bc') // Assurez-vous de configurer le token SonarQube
        SONARQUBE_PROJECT_KEY = 'Test'
        SONARQUBE_SERVER_URL = 'http://localhost:9000/' // Remplacez par l'URL de votre serveur SonarQube
    }
    
   
    
    stages{
     
        stage("Git Checkout"){
            steps{
                git branch: 'master', credentialsId: 'ecde681b-5636-41da-aad5-6704576d1392', url: 'https://github.com/mboudebous/Projet1.git'
            }
        }
        
    stage('Restore') {
    steps {
        sh "dotnet restore /var/lib/jenkins/workspace/projetfinal/PokemonApi_Integration_Tests/PokemonApi_Integration_Tests.csproj"
    }
}
     stage('build') {
    steps {
        sh "dotnet build /var/lib/jenkins/workspace/projetfinal/PokemonApi_Integration_Tests/PokemonApi_Integration_Tests.csproj"
    }
}   
    stage('Setup') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner for MSBuild'
                    // Vous pouvez maintenant utiliser scannerHome
                    echo "Scanner Home: ${scannerHome}"
                }
            }
        }  
    }
stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner'
                    withSonarQubeEnv('SonarQube') {
                        sh """
                        ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=${SONARQUBE_PROJECT_KEY} \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=${SONARQUBE_SERVER_URL} \
                            -Dsonar.login=${SONARQUBE_TOKEN}
                        """
                    }
                }
            }
        }
}
}
                                      }
  


  




