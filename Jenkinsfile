pipeline {
  agent any
  stages {
    stage('Cloning') {
      steps {
        git 'https://github.com/rcrossa/nodeapp.git'
        echo 'Cloning..'
        warnError(message: 'Hay un error con la clonación')
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