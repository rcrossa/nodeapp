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
            slackSend(channel: '#gitHub-update', color: 'good', message: 'Testeando', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':thumbsub')
          }
        }

      }
    }

    stages{
        stage('Build') {
            parallel {
               steps {
                sh 'npm install'
                echo 'Building..'
                     }
               stage('Notificacion') {
                 steps {
                 slackSend(channel: '#gitHub-update', color: 'good', message: 'Haciendo el build', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':thumbsub')
                }
               }
             }
         }
    }

    stage('Test') {
             parallel {
                steps {
                    sh 'npm test'
                    echo 'npm test..'
                    slackSend(channel: '#gitHub-update', color: '#439FE0)', iconEmoji: ':)', message: '"Test iniciados ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"', tokenCredentialId: 'dbi-slack', username: 'Jenkins')
                }

               stage('Notificacion') {
                 steps {
                 slackSend(channel: '#gitHub-update', color: 'good', message: 'Haciendo el build', teamDomain: 'devtesis', tokenCredentialId: 'jenkins-devops-projects', iconEmoji: ':thumbsub')
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