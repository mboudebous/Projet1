pipeline {
    agent any 
    environment {
    SCANNER_HOME = tool name: 'SonarScanner', type: 'hudson.plugins.sonar.MsBuildSQRunnerInstallation'
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

               
 stage('Build and Analyze') {
            steps {
                script {
                    def scannerCmd = "${SCANNER_HOME}/SonarScanner.SonarScanner.MSBuild.Common.dll"
                    def sonarKey = 'Test'
                    def sonarUrl = 'http://localhost:8094/' // Replace with your SonarQube server URL
                    def sonarLogin = 'squ_ff98a54d2c9e4570aca14538ee78adc632de2bae'
                    
                    // Build your .NET project (e.g., dotnet build)
                            sh "dotnet build /var/lib/jenkins/workspace/projetfinal/PokemonApi_Integration_Tests/PokemonApi_Integration_Tests.csproj"


                    // Run the SonarScanner for .NET
                    sh "${scannerCmd} begin /k:${sonarKey} /d:sonar.host.url=${sonarUrl} /d:sonar.login=${sonarLogin}"
                    sh 'dotnet restore'
                    sh 'dotnet build'
                    sh "${scannerCmd} end /d:sonar.login=${sonarLogin}"
                }
            }
        }
  
       
    }          

}
