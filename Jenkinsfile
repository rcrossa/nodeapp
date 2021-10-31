pipeline {
  agent any
  stages {
    stage('Cloning') {
      parallel {
        stage('Clone') {
          steps {
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'pre-produccion', credentialsId: 'github')
            echo 'Cloning..'
          }
        }

        stage('Notificacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'good', message: 'Rama-test : Clonar', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':one:', username: 'jenkins')
          }
        }

      }
    }

    stage('Build') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Rama-test : Inicio de Build', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':two:')
        sh 'npm install'
        echo 'Building..'
      }
    }

    stage('Test') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'success', message: 'Rama-test : Inicio de Tests. ', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':three:')
        sh 'npm test'
        echo 'npm test..'
      }
    }

    stage('Notificacion de Finalizacion') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Rama-test : Fin de proceso clonar', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
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