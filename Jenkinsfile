pipeline {
    agent {
        docker {
            image 'node:12-alpine'
            args '-p 3000:6000'
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
                sh 'ls'
                sh 'npm start'
            }
        }
    }
}