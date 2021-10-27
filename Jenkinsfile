pipeline {
  agent any
  stages {
    stage('Cloning') {
      parallel {
        stage('Clone') {
          steps {
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'main', credentialsId: 'github')
            echo 'Cloning..'
          }
        }

        stage('Notificacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'yellow', message: 'Incio de proceso de Clonacion en master', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':one:', username: 'jenkins')
          }
        }

      }
    }

    stage('Build') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Inicio de Build en master', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':two:')
        sh 'npm install'
        echo 'Building..'
      }
    }

    stage('Test') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'yellow', message: 'Inicio de Tests en master', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':three:')
        sh 'npm test'
        echo 'npm test..'
      }
    }

    stage('Notificacion de Finalizacion') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Fin de proceso en master', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
      }
    }

  }
  tools {
    nodejs 'node'
  }
  triggers {
    pollSCM('*/15 * * * *')
  }
}