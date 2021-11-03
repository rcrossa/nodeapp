pipeline {
  agent any
  stages {
    stage('Repositorio') {
      parallel {
        stage('Clone') {
          steps {
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'pre-produccion', credentialsId: 'github')
            echo 'Cloning..'
          }
        }

        stage('Notificacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'good', message: 'Rama-test : Verificando el repositorio', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':one:', username: 'jenkins')
          }
        }

      }
    }

    stage('Instalacion') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Rama-test : Instalando', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':two:')
        sh 'npm install'
        echo 'Building..'
      }
    }

    stage('Pruebas') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'success', message: 'Rama-test : Probando.', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':three:')
        sh 'npm test'
        echo 'npm test..'
      }
    }

    stage('Notificacion de Finalizacion') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Rama-test : Fin de proceso rama test.', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
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