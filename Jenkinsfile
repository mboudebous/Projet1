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
podTemplate(containers: [
    containerTemplate(
        name: 'dotnet', 
        image: 'mcr.microsoft.com/dotnet/sdk:6.0', 
        command: 'sleep', 
        args: '30d'
        )
])    {


    node(POD_LABEL) {
        stage('Sonarqube Scan') {
            container('dotnet') {
                stage('Sonarqube Scan') {
			script{
				checkout scm
			}
                    catchError() {
						sh '''
                        dotnet tool install --global dotnet-sonarscanner --version 5.8.0
						export PATH="$PATH:/root/.dotnet/tools"
						apt-get update && apt install default-jre -y 
						/root/.dotnet/tools/dotnet-sonarscanner begin /k:"api.identity.ciba" /d:sonar.host.url="http://sonarqube.i01.paytr.com:9000"  /d:sonar.login="sqp_xxxxxxxxxxxx24ba7bab26b913d2"
						dotnet build
						/root/.dotnet/tools/dotnet-sonarscanner end /d:sonar.login="sqp_xxxxxx0xxxxbab26b913d2"
                        '''
                    }
                }
            }
        }

    }

}
}
}
