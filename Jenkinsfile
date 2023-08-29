pipeline {
    agent any 
     environment {
        SONARQUBE_URL = 'localhost:9000'
        SONARQUBE_TOKEN = credentials('squ_64f313044c25a53766b57ab00212d29f8ce614bc')
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
                script {
                    def scannerHome = tool name: 'SonarScanner', type: 'hudson.plugins.sonar.MsBuildSQRunnerInstallation'
                    def scannerCmd = "${scannerHome}/bin/SonarScanner.MSBuild.exe"

                    withSonarQubeEnv('Your_SonarQube_Server') {
                        sh """
                        ${scannerCmd} begin /k:Test /d:sonar.host.url=${SONARQUBE_URL} /d:sonar.login=${SONARQUBE_TOKEN}
                        dotnet build MySolution.sln
                        ${scannerCmd} end /d:sonar.login=${SONARQUBE_TOKEN}
                        """
                    }
                }
            }
        }
    }
  

}
}

