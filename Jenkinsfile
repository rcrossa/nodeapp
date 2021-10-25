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

        stage('error') {
          steps {
            slackSend(channel: '#gitHub-update', color: '#439FE0', message: 'started ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':ojos', botUser: false)
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
        echo 'Building..'
        slackSend(channel: '#gitHub-update', color: '#439FE0', message: 'started ${env.JOB_NAME}, ${env.BUILD_NUMBER}, (<${env.BUILD_URL}|Open>)', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:',botUser: false)
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
        echo 'npm test..'
        slackSend(channel: '#gitHub-update', color: '#439FE0)', iconEmoji: ':)', message: 'Test iniciados ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', username: 'Jenkins', iconEmoji: ':manos_levantadas:',botUser: false)
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