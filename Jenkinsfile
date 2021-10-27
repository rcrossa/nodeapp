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
        sh 'npm install'
        echo 'Building..'
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Inicio de Build en master', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':two:')
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
        echo 'npm test..'
        slackSend(channel: '#gitHub-update', color: 'yellow', message: 'Inicio de Tests en master', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':three:')
      }
    }

    stage('Notificacion de Finalizacion') {
      parallel {
        stage('Notificacion de Finalizacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'good', message: 'Fin de proceso en master', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
          }
        }

        stage('Pre-Produccion') {
          steps {
            slackSend(message: 'Update de rama production', channel: '#gitHub-update', color: 'Good', iconEmoji: ':raised_hand:', tokenCredentialId: 'jenkins-devops-projects', teamDomain: 'devtesis')
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'main', credentialsId: 'github', changelog: true)
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