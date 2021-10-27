pipeline {
  agent any
  stages {
    stage('Cloning') {
      parallel {
        stage('Clone') {
          agent any
          steps {
            echo 'Cloning..'
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'test', credentialsId: 'github')
          }
        }

        stage('Notificacion') {
          steps {
            slackSend(channel: '#gitHub-update', color: 'good', message: 'Incio de proceso de Clonación', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':one:', username: 'jenkins')
          }
        }

      }
    }

    stage('Build') {
      agent any
      steps {
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Inicio de Build', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':two:')
        echo 'Building..'
        sh 'npm install'
      }
    }

    stage('Test') {
      agent any
      steps {
        slackSend(channel: '#gitHub-update', color: 'yellow', message: 'Inicio de Tests. ', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':three:')
        echo 'npm test..'
        sh 'npm test'
        catchError(catchInterruptions: true, buildResult: 'error', message: 'Hay un error') {
          slackSend(message: 'Hay un error en los test.', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', teamDomain: 'devtesis', color: 'danger', channel: '#gitHub-update')
        }

      }
    }

    stage('Pre-Produccion') {
      agent any
      steps {
        slackSend(message: 'ActualizaciÃ³n de rama production', channel: '#gitHub-update', color: 'good', iconEmoji: ':raised_hand:', tokenCredentialId: 'jenkins-devops-projects', teamDomain: 'devtesis')
        git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'test', credentialsId: 'github', changelog: true)
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