pipeline {
  agent any
  stages {
    stage('Cloning') {
      parallel {
        stage('Cloning') {
          steps {
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'main', credentialsId: 'github')
            echo 'Cloning..'
          }
        }

        stage('Notificacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: '#439FE0', message: 'Incio de proceso ${env.BRANCH_NAME}', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':ojos', attachments: '${env.BRANCH_NAME}')
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
        echo 'Building..'
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Inicio de Build', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
        echo 'npm test..'
        slackSend(channel: '#gitHub-update', color: 'Good', message: 'Inicio de Tests. ', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
      }
    }

    stage('Notificacion de Finalizacion') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'Good', message: 'Fin de proceso. ', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
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