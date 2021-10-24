pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Cloning') {
      steps {
        git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'main', credentialsId: 'github')
        echo 'Cloning..'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
        echo 'Building..'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
        echo 'npm test..'
      }
    }

  }
}