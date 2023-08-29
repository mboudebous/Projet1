pipeline {
    agent any 
     environment {
        // Define environment variables as needed
        SONARQUBE_URL = 'http://localhost:9000'
        SONARQUBE_TOKEN = 'squ_64f313044c25a53766b57ab00212d29f8ce614bc'
    }

  
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
stage('SonarQube Analysis') {
            steps {
                // Run SonarScanner for .NET
                sh """
                dotnet tool install --global dotnet-sonarscanner
                dotnet dotnet-sonarscanner begin /k:Test /d:sonar.host.url=$SONARQUBE_URL /d:sonar.login=$SONARQUBE_TOKEN
                dotnet build MySolution.sln
                dotnet dotnet-sonarscanner end /d:sonar.login=$SONARQUBE_TOKEN
                """
            }
        }
  

}
}

