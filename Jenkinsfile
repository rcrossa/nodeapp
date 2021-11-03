pipeline {
  agent any
  stages {
    stage('Repositorio') {
      parallel {
        stage('Clone') {
          steps {
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'main', credentialsId: 'github')
            echo 'Cloning..'
          }
        }

        stage('Notificacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'warning', message: 'Rama Master: buscando cambios.', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':one:', username: 'jenkins')
          }
        }

      }
    }

    stage('Instalacion') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'warning', message: 'Rama Master: Inicio de instalacion local.', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':two:')
        sh 'npm install'
        echo 'Building..'
      }
    }

    stage('Test') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Rama Master: Pruebas de Tests', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':three:')
        sh 'npm test'
        echo 'npm test..'
      }
    }

    stage('Notificacion de Finalizacion') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Rama Mater: Fin de proceso.', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
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