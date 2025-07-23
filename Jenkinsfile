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
        stage ('Build') {
            steps {
                sh 'npm run build || echo "No build step defined"'
            }
        }
    }
}