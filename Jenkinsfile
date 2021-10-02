// pipeline {
//   agent any
//   triggers {
//     pollSCM('*/15 * * * *')
//   }
//   stages {
//     stage('Deploy') {
//       when {
//         branch 'master'
//       }
//       steps {
//         slackSend(color: 'good', message: "${env.JOB_NAME} - ${env.BUILD_DISPLAY_NAME} - Iniciando deploy")
//         ansiblePlaybook(playbook: '/path/a/mis/playbooks/proyecto/produccion.yml', colorized: true, inventory: '/path/a/mis/playbooks/hosts')
//       }
//     }
//   }
//   post {
//     success {
//       slackSend(color: 'good', message: "${env.JOB_NAME} - ${env.BUILD_DISPLAY_NAME} - Inicio deploy")
//       slackSend(color: 'good', message: "${env.JOB_NAME} - ${env.BUILD_DISPLAY_NAME} - Funciono correctamente")
//     }
//     failure {
//       slackSend(color: 'danger', message: "${env.JOB_NAME} - ${env.BUILD_DISPLAY_NAME} - Hubo un problema con el deploy")
//     }
//   }
// }
pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}