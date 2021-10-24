pipeline {
  agent any
  stages {
    stage('Cloning') {
      steps {
        git 'https://github.com/rcrossa/nodeapp.git'
        echo 'Cloning..'
        warnError(message: 'Hay un error con la clonación') {
          slackSend(channel: '#github-update', color: 'Red', message: 'Hay un error al clonar.', username: 'Admin')
        }

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