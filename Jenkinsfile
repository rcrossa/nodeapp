pipeline {
  agent any
  stages {
    tools {
        nodejs('node')
    }
    triggers {
        pollSCM('*/15 * * * *')
    }
    stage('Cloning') {
      steps {
        git(url: 'https://github.com/rcrossa/nodeapp.git', branch: 'main', credentialsId: 'github')
        echo 'Cloning..'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
        echo 'Building..'
        slackSend(channel: '#gitHub-update', color: '#439FE0)', iconEmoji: ':)', message: '"started ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"', tokenCredentialId: 'dbi-slack', username: 'Jenkins')
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
        echo 'npm test..'
        slackSend(channel: '#gitHub-update', color: '#439FE0)', iconEmoji: ':)', message: '"Test iniciados ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"', tokenCredentialId: 'dbi-slack', username: 'Jenkins')
      }
    }

  }
}