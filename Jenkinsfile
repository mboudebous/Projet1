pipeline {
    agent any 
    environment {
        // Define environment variables as needed
        DOTNET_ROOT = tool name: 'dotnet', type: 'Tool'
        SONAR_SCANNER_HOME = tool name: 'SonarScanner', type: 'Tool'
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
                // Run SonarQube analysis using the SonarScanner for .NET
                script {
                    def sonarCmd = "${env.SONAR_SCANNER_HOME}/sonar-scanner"
                    withSonarQubeEnv('SonarScanner') {
                        sh label: 'SonarQube Analysis', script: sonarCmd
                    }
                }
            }
       
  
       
    }          

}
}
