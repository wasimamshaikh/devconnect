pipeline {
    agent any

    stages {
        stage ('Clone Repository') {
            steps {
                git 'https://github.com/wasimamshaikh/devconnect.git'
            }
        }
        stage ('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
    }
}