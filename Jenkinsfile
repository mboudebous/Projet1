node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarScanner') {
    def scannerHome = tool 'SonarScanner'
    withSonarQubeEnv() {
      sh "dotnet ${scannerHome}/SonarScanner.MSBuild.dll begin /k:\"Test\""
      sh "dotnet build"
      sh "dotnet ${scannerHome}/SonarScanner.MSBuild.dll end"
    }
  }
}
