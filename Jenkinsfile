pipeline {
  agent any
  stages {
    stage('Cloning') {
      parallel {
        stage('Clone') {
          steps {
            echo 'Cloning..'
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'test', credentialsId: 'github')
          }
        }

        stage('Notificacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'yellow', message: 'Incio de proceso de Clonación', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':one:', username: 'jenkins')
          }
        }

      }
    }

    stage('Build') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Inicio de Build', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':two:')
        echo 'Building..'
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'yellow', message: 'Inicio de Tests. ', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':three:')
        echo 'npm test..'
        sh 'npm test'
      }
    }

    stage('Notificacion de Finalizacion') {
      parallel {
        stage('Notificacion de Finalizacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'good', message: 'Fin de proceso. ', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
          }
        }

        stage('Pre-Produccion') {
          steps {
            slackSend(message: 'ActualizaciÃ³n de rama production', channel: '#gitHub-update', color: 'Good', iconEmoji: ':raised_hand:', tokenCredentialId: 'jenkins-devops-projects', teamDomain: 'devtesis')
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'test', credentialsId: 'github', changelog: true)
          }
        }

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