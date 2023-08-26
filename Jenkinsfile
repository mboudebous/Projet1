pipeline {
    agent any 
    
     tools{
        jdk 'OpenJDK17'
        maven 'maven3'
    }
   
    
   
    
    stages{
     
        stage("Git Checkout"){
            steps{
                git branch: 'master', credentialsId: 'ecde681b-5636-41da-aad5-6704576d1392', url: 'https://github.com/mboudebous/Projet1.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Installer les dépendances Node.js
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Exécuter les tests (par exemple, avec Jest)
                sh 'npm test'
            }
        }
        stage('Build and Deploy') {
            steps {
                // Build de l'application (par exemple, avec Webpack)
                sh 'npm run build'
                
                // Déployer l'application (par exemple, via FTP, SCP, etc.)
                // Assurez-vous d'ajuster cette étape en fonction de votre méthode de déploiement
            }
        }
    }
}
        
        
        //stage('Build and Test 222C#') {
    steps {
        script {
            // Spécifiez le chemin complet du fichier .csproj
            def projectPath = "${WORKSPACE}/var/lib/jenkins/workspace/projetfinal/PokemonApi_Integration_Tests/PokemonApi_Integration_Tests.csproj"
            
            // Assurez-vous que le chemin du projet est correct
            echo "Chemin du projet : ${projectPath}"
            
            // Exécutez dotnet restore avec le chemin du projet
            sh "dotnet restore ${projectPath}"
        }
    }

        //stage('Build and Test C#') {
            steps {
                script {
                def projectPath = "${WORKSPACE}/var/lib/jenkins/workspace/projetfinal/PokemonApi_Integration_Tests/PokemonApi_Integration_Tests.csproj"
                sh 'dotnet restore ${projectPath}' 
                sh 'dotnet build ${projectPath}'
                sh 'dotnet test ${projectPath}'
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
        
        
        
       
    

