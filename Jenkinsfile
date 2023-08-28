pipeline {
    agent any 
    environment {
    DOTNET_HOME = tool name: 'DotNet', type: 'hudson.plugins.dotnet.DotNetToolInstallation'
}

    environment {
        SONARQUBE_SCANNER_HOME = tool 'SonarScanner', type: 'hudson.plugins.sonar.MsBuildSQRunnerInstallation'
        DOTNET_HOME = tool 'DotNet', type: 'hudson.plugins.dotnet.DotNetToolInstallation'
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

               
        stage('Static Code Analysis') {
            steps {
                script {
                    // Run SonarQube analysis
                    withSonarQubeEnv('SonarScanner') {
                        sh """
                        ${env.SONARQUBE_SCANNER_HOME}/SonarScanner.MSBuild.exe begin /k:'Test' /n:'Projet1' /v:'1.0' /d:sonar.host.url='localhost:8094' /d:sonar.login='squ_64f313044c25a53766b57ab00212d29f8ce614bc'
                        ${env.MSBUILD_HOME}/msbuild.exe /t:Rebuild /p:Configuration=${buildConfig} /p:Platform=AnyCPU
                        ${env.SONARQUBE_SCANNER_HOME}/SonarScanner.MSBuild.exe end /d:sonar.login='squ_64f313044c25a53766b57ab00212d29f8ce614bc'
                        """
                    }
                }
            }
        }
  
       
    }          

}
