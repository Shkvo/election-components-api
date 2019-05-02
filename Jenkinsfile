pipeline {
    agent {
        docker {
            image 'node:12-alpine'
            args '-p 6000:6000'
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
        stage('Deliver') {
            steps {
                sh 'npm start'
            }
        }
    }
}