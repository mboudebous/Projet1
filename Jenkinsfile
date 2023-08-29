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
                    def scannerHome = tool 'SonarScanner'
                    // Vous pouvez maintenant utiliser scannerHome
                    echo "Scanner Home: ${scannerHome}"
                }
            }
        }    
     stage('SonarQube Analysis') {
         steps{
         
      withSonarQubeEnv('SonarScanner') {
      sh "dotnet ${scannerHome}/SonarScanner.MSBuild.dll begin /k:\"Projet\""
      sh "dotnet build"
      sh "dotnet ${scannerHome}/SonarScanner.MSBuild.dll end"
    }
  }
     }
}

    }
    

    
  




