pipeline {
    agent any 
    environment {
        SCANNER_HOME=tool 'SonarScanner'
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
                // Étape pour exécuter l'analyse SonarQube
                withSonarQubeEnv('SonarScanner') {
                    // Assurez-vous d'ajuster 'Nom_de_votre_installation_SonarQube' à votre configuration réelle
                    sh 'dotnet sonarscanner begin /k:"Test" /d:sonar.host.url="localhost:8094" /d:sonar.login="squ_64f313044c25a53766b57ab00212d29f8ce614bc"'
                    sh 'dotnet build MyDotNetProject.sln'
                    sh 'dotnet sonarscanner end /d:sonar.login="squ_64f313044c25a53766b57ab00212d29f8ce614bc"'
                }
            }
        }
  
       
    }          

}
