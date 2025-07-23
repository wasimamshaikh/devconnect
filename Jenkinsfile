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
}