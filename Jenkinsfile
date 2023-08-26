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
        
        
        
        stage('Build and Test C#') {
            steps {
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
        
        
        
       
    }
}
