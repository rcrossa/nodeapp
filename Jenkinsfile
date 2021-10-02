pipeline {
  agent any
  triggers {
    pollSCM('*/15 * * * *')
  }
  stages {
    stage('Deploy') {
      when {
        branch 'master'
      }
      steps {
        slackSend(color: 'good', message: "${env.JOB_NAME} - ${env.BUILD_DISPLAY_NAME} - Iniciando deploy")
        ansiblePlaybook(playbook: '/path/a/mis/playbooks/proyecto/produccion.yml', colorized: true, inventory: '/path/a/mis/playbooks/hosts')
      }
    }
  }
  post {
    success {
      slackSend(color: 'good', message: "${env.JOB_NAME} - ${env.BUILD_DISPLAY_NAME} - Inicio deploy")
      slackSend(color: 'good', message: "${env.JOB_NAME} - ${env.BUILD_DISPLAY_NAME} - Funciono correctamente")
    }
    failure {
      slackSend(color: 'danger', message: "${env.JOB_NAME} - ${env.BUILD_DISPLAY_NAME} - Hubo un problema con el deploy")
    }
  }
}