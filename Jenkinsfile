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
            slackSend(channel: '#gitHub-update', color: 'yellow', message: 'Incio de proceso de ClonaciÃƒÆ’Ã‚Â³n', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':one:', username: 'jenkins')
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
            slackSend(channel: '#gitHub-update', color: 'good', message: 'Fin de proceso de verificación.', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
          }
        }

        stage('Pre-Produccion') {
          steps {
            slackSend(message: 'ActualizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n de rama production', channel: '#gitHub-update', color: 'Good', iconEmoji: ':raised_hand:', tokenCredentialId: 'jenkins-devops-projects', teamDomain: 'devtesis')
            git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'pre-produccion', credentialsId: 'github', changelog: true)
          }
        }

      }
    }

    stage('Notification Merge') {
      parallel {
        stage('Notificacion') {
          steps {
            slackSend(color: 'warning', message: 'Realizando el merge', channel: '#gitHub-update', iconEmoji: ':manos_levantadas:', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins')
          }
        }

        stage('') {
          environment {
            user = 'rcrossa'
            pass = 'D1skFail'
          }
          steps {
            sh '''git config --global user.email "rcrossa@hotmail.com"
git config --global user.name "rcrossa"
git config user.pass
git push origin main'''
          }
        }

      }
    }

    stage('') {
      steps {
        slackSend(channel: '#gitHub-update', color: 'success', message: 'Fin de proceso merge.', iconEmoji: ':manos_levantadas:', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins')
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