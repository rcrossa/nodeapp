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
            slackSend(channel: '#gitHub-update', color: '#439FE0', message: 'started ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':ojos')
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
        echo 'Building..'
        slackSend(channel: '#gitHub-update', color: 'good', message: 'Build ok', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
        echo 'npm test..'
        slackSend(channel: '#gitHub-update', color: 'Good', message: 'Test Ok. \'Test iniciados ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)\'', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:')
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