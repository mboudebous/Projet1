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
               stage('Build and Analyze') {
            steps {
                // Compilez votre projet ici (ex : npm install, dotnet build, etc.)

                // Exécutez l'analyse SonarQube
                script {
                    def scannerHome = tool name: 'SonarScanner', type: 'hudson.plugins.sonar.MsBuildSQRunnerInstallation'
                    def scannerCmd = "${scannerHome}/bin/sonar-scanner"
                    sh "${scannerCmd} -Dsonar.projectKey=your-project-key -Dsonar.sources=your-source-directory -Dsonar.host.url=your-sonarqube-url -Dsonar.login=your-sonar-token"
                }
            }
        }
       
       
    }          

}
