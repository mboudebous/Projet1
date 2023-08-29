pipeline {
    agent any

    environment {
        SONARQUBE_TOKEN = credentials('squ_64f313044c25a53766b57ab00212d29f8ce614bc') // Assurez-vous de configurer le token SonarQube
        SONARQUBE_PROJECT_KEY = 'Test'
        SONARQUBE_PROJECT_NAME = 'Test'
        SONARQUBE_PROJECT_VERSION = '1.0' // Version de votre projet
        SONARQUBE_SERVER_URL = 'http://localhost:9000/' // Remplacez par l'URL de votre serveur SonarQube
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
                    withSonarQubeEnv('SonarScanner') {
                        sh """
                        ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=${SONARQUBE_PROJECT_KEY} \
                            -Dsonar.projectName=${SONARQUBE_PROJECT_NAME} \
                            -Dsonar.projectVersion=${SONARQUBE_PROJECT_VERSION} \
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
