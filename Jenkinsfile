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
    /* stage('test') {
    steps {
        sh "dotnet test /var/lib/jenkins/workspace/projetfinal/PokemonApi_Integration_Tests/PokemonApi_Integration_Tests.csproj"
    }
}   */
               
  stage('SonarQube Analysis') {
      updateGitlabCommitStatus name: 'SonarQube Analysis', state: 'pending'
  
      nodejs(nodeJSInstallationName: 'nodejs') {
        sh 'node -v'
        withSonarQubeEnv() {
          env.PATH = "$PATH:/home/jenkins/.dotnet"
          env.PATH = "$PATH:/home/jenkins/.dotnet/tools"
          script {
            try {
              sh '''
                dotnet sonarscanner  begin /k:"MyKey"          
                dotnet build fehlertracking.sln
                dotnet sonarscanner  end        
              '''
              updateGitlabCommitStatus name: 'SonarQube Analysis', state: 'success'
            } catch (ex) {
              updateGitlabCommitStatus name: 'SonarQube Analysis', state: 'failed'
            }
          }
        }
      }
    }
  
       
    }          

}
