pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        git(url: 'https://github.com/rcrossa/nodeapp', branch: 'master', poll: true)
      }
    }

  }
}