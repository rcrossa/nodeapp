pipeline {
  agent any
  stages {
    stage('Cloning') {
      steps {
        git 'https://github.com/rcrossa/nodeapp.git'
        echo 'Cloning..'
      }
    }

    stage('Build') {
      steps {
        sh 'npm i'
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