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
            slackSend(channel: '#gitHub-update', color: 'yellow', message: 'Incio de proceso de ClonaciÃƒÂ³n', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':one:', username: 'jenkins')
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
        slackSend(channel: '#gitHub-update', color: 'yellow', message: 'Inicio de Tests. ', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':three:')
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
            slackSend(message: 'ActualizaciÃƒÆ’Ã‚Â³n de rama production', channel: '#gitHub-update', color: 'Good', iconEmoji: ':raised_hand:', tokenCredentialId: 'jenkins-devops-projects', teamDomain: 'devtesis')
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'main', credentialsId: 'github', changelog: true)
            sh 'git merge pre-produccion'
            sh 'git push origin master'
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