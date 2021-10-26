pipeline {
  agent any
  stages {
    stage('Cloning') {
      parallel {
        stage('Cloning') {
          steps {
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'test', credentialsId: 'github')
            echo 'Cloning..'
          }
        }

        stage('Notificacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'Good', message: 'Incio de proceso.', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':one:')
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
        echo 'Building..'
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Inicio de Build', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':two:')
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
        echo 'npm test..'
        slackSend(channel: '#gitHub-update', color: 'Good', message: 'Inicio de Tests. ', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':three:')
      }
    }

    stage('Notificacion de Finalizacion') {
      parallel {
        stage('Notificacion de Finalizacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'Good', message: 'Fin de proceso. ', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
          }
        }

        stage('Commit Production') {
          steps {
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'main', credentialsId: 'github')
            slackSend(message: 'Actualización de rama production', channel: '#gitHub-update', color: 'Good', iconEmoji: ':raised_hand:', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', teamDomain: 'devtesis')
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