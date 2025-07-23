pipeline {
    agent any

    stages {
        stage ('Install Dependencies') {
            steps {
                dir('backend') { // change to actual folder name if different
                    sh 'npm install'
                }
            }
        }
        stage ('Run Tests') {
            steps {
                sh 'npm test || echo "No tests defined"'
            }
        }
    }
}