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
stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarScanner') {
                    // Run SonarQube Scanner for .NET
                    bat '''\
                    "C:\\Path\\To\\SonarScanner.MSBuild.exe" begin /k:"Test" /d:sonar.host.url="localhost:9000" /d:sonar.login="squ_64f313044c25a53766b57ab00212d29f8ce614bc"
                    "C:\\Path\\To\\MSBuild.exe" MySolution.sln /t:Rebuild
                    "C:\\Path\\To\\SonarScanner.MSBuild.exe" end /d:sonar.login="squ_64f313044c25a53766b57ab00212d29f8ce614bc"
                    '''
                }
            }
        }

}
}
